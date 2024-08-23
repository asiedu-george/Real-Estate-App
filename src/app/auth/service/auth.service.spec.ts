import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { Register } from '../../interface/register';
import { environment } from '../../../environments/environment';
import { Login } from '../../interface/login';
import { UserProfile } from '../../interface/user-profile';

describe('AuthService', () => {
  let service: AuthService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
        provideStore()
      ]
    });
    service = TestBed.inject(AuthService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('register', () => {
    it('should register a user', () => {
      const mockUser: Register =  {
        first_name: 'George',
        last_name: 'Asiedu',
        email: 'test@gmail.com',
        password: 'Password12.'
      }
      service.register(mockUser).subscribe((user) => {
        expect(user).toEqual({ message: 'User registered successfully' })
      })
      const req = httpTesting.expectOne(`${environment.authUrl}user/signup`)
      expect(req.request.method).toBe('POST')
      expect(req.request.body).toEqual(mockUser)
      req.flush({ success: true, message: 'User registered successfully'})
    })
  })

  describe('login', () => {
    it('should login a user', () => {
      const mockUser: Login = {
        email: 'test@gmail.com',
        password: 'Password12.'
      }
      service.login(mockUser).subscribe((user) => {
        expect(user).toEqual({ 
          message: 'User login successfully',
          login_token: 'login_token',
          refresh_token: 'refresh_token'
        })
      })
      const req = httpTesting.expectOne(`${environment.authUrl}user/login`)
      expect(req.request.method).toBe('POST')
      expect(req.request.body).toEqual(mockUser)
      req.flush({ 
        success: true, 
        message: 'User login successfully',
        login_token: 'login_token',
        refresh_token: 'refresh_token'
      })
    })
  })

  describe('logout', () => {
    it('should logout a user', () => service.logout())
  })

  describe('refresh token', () => {
    it('should refresh token', () => {

      jest.spyOn(service, 'token').mockReturnValue('mock-refresh-token')

      service.refreshToken().subscribe((token) => {
        expect(token).toEqual({
          message: 'successful',
          login_token: 'login_token',
          refresh_token: 'refresh_token'
        })
      })

      const req = httpTesting.expectOne(`${environment.authUrl}user/refresh-token`)
      expect(req.request.method).toBe('POST')
      expect(req.request.body).toEqual({ refresh_token: 'mock-refresh-token'})
      req.flush({ 
        success: true, 
        message: 'successful',
        login_token: 'new_login_token',
        refresh_token: 'new_refresh_token'
      })
    })
  })

  describe('validate user request', () => {
    it('should validate a user before allowing request', () => {
      const mockResponse = { message: 'okay'}
      service.validateUser().subscribe((message) => 
        expect(message).toEqual(mockResponse)
      )

      const req = httpTesting.expectOne(`${environment.authUrl}user/validate`)
      expect(req.request.method).toBe('GET')
      req.flush(mockResponse)
    })
  })

  describe('get user profile', () => {
    it('should get a user profile', () => {
      const mockUserProfile: UserProfile = { 
        first_name: 'George',
        last_name: 'Asiedu',
        email: 'test@gmail.com',
        id: '1'
      }

      service.getUserProfile().subscribe((response) => 
        expect(response).toEqual(mockUserProfile)
      )

      const req = httpTesting.expectOne(`${environment.authUrl}user/profile`)
      expect(req.request.method).toBe('GET')
      req.flush(mockUserProfile)
    })
  })
});