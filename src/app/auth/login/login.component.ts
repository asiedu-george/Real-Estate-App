import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public backgroundImage: string = 'https://img.freepik.com/free-photo/landscape-sunset-architectural-matrix-stunning-modern-villa-with-swimming-pool_1409-5155.jpg?t=st=1722454806~exp=1722458406~hmac=f3ca0f95c24766ba609dcca94a809d5203fb5613c73ebaa471de15dde2069a67&w=1380'
  public logo: string = 'https://res.cloudinary.com/dhyqv69zh/image/upload/v1722502535/aojnmrptbrjzbnjcgron.svg'
  public loginForm: FormGroup
  public showPassword: boolean = false
  public eyeClose: string = 'https://res.cloudinary.com/dhyqv69zh/image/upload/v1722504406/rn6zoxbaqscrobxihqck.svg'
  public eyeOpen: string = 'https://res.cloudinary.com/dhyqv69zh/image/upload/v1722504406/imsobocvv5be0tynxcth.svg'

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onLoginSubmit(): void {
    
  }

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword
  }
}