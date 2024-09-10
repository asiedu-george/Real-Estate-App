import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { provideMockStore } from '@ngrx/store/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AuthService } from '../service/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: AuthService;
  const initialState = {
    login: {
      isLoading: true
    }
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, NgxSpinnerModule],
      providers: [
        AuthService,
        provideHttpClient(),
        provideHttpClientTesting(),
        provideMockStore({initialState}),
      ]
    })
    .compileComponents();

    service = TestBed.inject(AuthService)
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('validate form', () => {
    it('should validate the login form', () => {
      component.userEmail?.setValue('john@gmail.com')
      component.userPassword?.setValue('John123.')
      expect(component.loginForm.valid).toBe(true)
    })
  })

  describe('toggle password', () => {
    it('should toggle show password', () => {
      expect(component.showPassword).toBe(false)
      expect(component.toggleShowPassword())
      expect(component.showPassword).toBe(true)
    })
  })

  describe('login user', () => {
    it('should login a user successfully', () => {
      fixture.whenStable().then(() => {
        expect(service.login).toHaveBeenCalled()
        expect(component.loginForm.reset()).toHaveBeenCalled()
        expect(component.loading).toBe(false)
      })
    })
  })
});
