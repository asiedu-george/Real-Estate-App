import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { emailValidator } from '../../validators/emailValidator';
import { passwordValidator } from '../../validators/passwordValidator';
import { Login } from '../../interface/login';
import { NgxSpinnerService } from 'ngx-spinner';
import { Store } from '@ngrx/store';
import { LoginSate } from '../../home-listing/store/state/state';
import { selectIsLoading } from '../store/login.selectors';
import { login } from '../store/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public loginForm: FormGroup
  public showPassword: boolean = false
  public loading = this.store.selectSignal(selectIsLoading)

  constructor(
    private fb: FormBuilder, 
    private spinner: NgxSpinnerService,
    private store: Store<LoginSate>) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, emailValidator()]],
      password: ['', [Validators.required, passwordValidator()]]
    })
  }

  onLoginSubmit(): void {
    if(this.loginForm.invalid) {
      return
    }

    this.spinner.show()
    const formData: Login = this.loginForm.value

    this.store.dispatch(login(formData))
  }

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword
  }

  get userEmail() {
    return this.loginForm.get('email')
  }

  get userPassword() {
    return this.loginForm.get('password')
  }
}