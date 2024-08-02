import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { nameValidator } from '../../validators/nameValidator';
import { emailValidator } from '../../validators/emailValidator';
import { passwordValidator } from '../../validators/passwordValidator';
import { Register } from '../../interface/register';
import { AuthService } from '../service/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  public backgroundImage: string = 'https://img.freepik.com/free-photo/portrait-senior-couple-love-showing-affection_23-2151029989.jpg?t=st=1722526983~exp=1722530583~hmac=05877ae5e56361c61953721dbea2ab2ab805dab1f6369c964453ec79fc5efba8&w=1060'
  public logo: string = 'https://res.cloudinary.com/dhyqv69zh/image/upload/v1722528919/xxugmpsqn4lx8bduc1dx.svg'
  public registerForm: FormGroup
  public showPassword: boolean = false
  public loading: boolean = false
  public eyeClose: string = 'https://res.cloudinary.com/dhyqv69zh/image/upload/v1722504406/rn6zoxbaqscrobxihqck.svg'
  public eyeOpen: string = 'https://res.cloudinary.com/dhyqv69zh/image/upload/v1722504406/imsobocvv5be0tynxcth.svg'

  constructor(
    private fb: FormBuilder, 
    private spinner: NgxSpinnerService,
    private toast: NgToastService,
    private authService: AuthService) {
    this.registerForm = this.fb.group({
      first_name: ['', [Validators.required, nameValidator()]],
      last_name: ['', [Validators.required, nameValidator()]],
      email: ['', [Validators.required, emailValidator()]],
      password: ['', [Validators.required, passwordValidator()]],
      additional_properties: this.fb.group({
        address: this.fb.group({
          city: ['', [Validators.required, nameValidator()]]
        }),
        profile_picture: ['', Validators.required]
      })
    })
  }

  onRegisterSubmit(): void {
    if(this.registerForm.invalid) {
      return
    }

    this.loading = true
    this.spinner.show()
    const formData: Register = this.registerForm.value

    this.authService.register(formData).subscribe({
      next: (response) => {
        this.loading = false
        this.toast.success(response.message, 'Success', 3000)
        this.registerForm.reset()
        setTimeout(() => {
          this.spinner.hide()
        }, 2000)
        console.log('response',response)
      },
      error: (err) => {
        this.loading = false
        this.toast.danger(err.error?.message, 'Error', 3000)
        this.spinner.hide()
        console.error('error', err)
      }
    })
  }

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword
    console.log('Password visibility toggled:', this.showPassword);
  }
}