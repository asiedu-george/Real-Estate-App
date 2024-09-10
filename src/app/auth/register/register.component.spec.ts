import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { AuthService } from '../service/auth.service';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideStore } from '@ngrx/store';
import { RegisterResponse } from '../../interface/register';
import { of } from 'rxjs';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let service: AuthService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      providers: [
        AuthService,
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
        provideStore()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('validate form', () => {
    it('should have a valid form', () => {
      component.userFirstName?.setValue('John')
      component.userLastName?.setValue('Johnson')
      component.userEmail?.setValue('john@gmail.com')
      component.userPassword?.setValue('John123.')
      expect(component.registerForm.valid).toBe(true)
    })
  })

  describe('toggle password', () => {
    it('should toggle show password', () => {
      expect(component.showPassword).toBe(false)
      expect(component.toggleShowPassword())
      expect(component.showPassword).toBe(true)
    })
  })

  describe('register user', () => {
    it('should register a user successfully', () => {
      const registerResponse: RegisterResponse = {
        message: 'success'
      }

      jest.spyOn(service, 'register').mockReturnValue(of(registerResponse))
      fixture.whenStable().then(() => {
        expect(service.register).toHaveBeenCalled()
        expect(component.registerForm.reset()).toHaveBeenCalled()
        expect(component.loading).toBe(false)
      })
    })
  })
});
