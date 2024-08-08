import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { emailValidator } from '../../validators/emailValidator';
import { passwordValidator } from '../../validators/passwordValidator';
import { Login } from '../../interface/login';
import { AuthService } from '../service/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgToastService } from 'ng-angular-popup';

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
        this.toast.success(response.message, 'Success', 3000)
        this.loginForm.reset()
        setTimeout(() => {
          this.spinner.hide()
        }, 2000)
        console.log('response', response)
      },
      error: (err) => {
        this.loading = false
        this.toast.danger('Incorrect email or password', 'Error', 3000)
        this.spinner.hide()
        console.error('error', err)
      }
    })
  }

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword
  }
}