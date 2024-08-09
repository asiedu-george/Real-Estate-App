import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { emailValidator } from '../../validators/emailValidator';
import { passwordValidator } from '../../validators/passwordValidator';
import { Login } from '../../interface/login';
import { AuthService } from '../service/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public loginForm: FormGroup
  public showPassword: boolean = false
  public loading: boolean = false

  constructor(
    private fb: FormBuilder, 
    private spinner: NgxSpinnerService,
    private router: Router,
    private toast: NgToastService,
    private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, emailValidator()]],
      password: ['', [Validators.required, passwordValidator()]]
    })
  }

  onLoginSubmit(): void {
    if(this.loginForm.invalid) {
      return
    }

    this.loading = true
    this.spinner.show()
    const formData: Login = this.loginForm.value

    this.authService.login(formData).subscribe({
      next: (response) => {
        this.loading = false
        this.toast.success(response.message, 'Success', 5000)
        this.loginForm.reset()
        setTimeout(() => {
          this.spinner.hide()
        }, 3000)
      },
      error: (err) => {
        this.loading = false
        this.toast.danger(err.error, 'Error', 5000)
        this.spinner.hide()
      }
    })
  }

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword
  }
}