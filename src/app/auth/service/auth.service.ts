import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, take, tap, throwError } from 'rxjs';
import { authEnv } from '../../../environments/environment.development';
import { Login, LoginResponse } from '../../interface/login';
import { Register, RegisterResponse } from '../../interface/register';
import { UpdatePassword, UpdatePasswordResponse } from '../../interface/update-password';
import { UserProfile } from '../../interface/user-profile';
import { Router } from '@angular/router';
import { RefreshTokenResponse } from '../../interface/refresh-token-response';
import { Store } from '@ngrx/store';
import { selectRefreshToken } from '../store/login.selectors';
import { NgToastService } from 'ng-angular-popup';
import { constants } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected authUrl: string = authEnv.baseUrl;
  private readonly token = this.store.selectSignal(selectRefreshToken)

  constructor(
    private http: HttpClient, 
    private store: Store,
    private router: Router,
    private toast: NgToastService
  ) {}

  register(user: Register): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.authUrl}user/signup`, user)
    .pipe(take(1));
  }

  login(user: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.authUrl}user/login`, user)
    .pipe(take(1))
  }

  updatePassword(user: UpdatePassword): Observable<UpdatePasswordResponse> {
    return this.http.post<UpdatePasswordResponse>(`${this.authUrl}user/update-password`, user)
    .pipe(take(1));
  }

  validateUser(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(`${this.authUrl}user/validate`)
    .pipe(retry(2));
  }

  getUserProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.authUrl}user/profile`)
    .pipe(retry(2));
  }

  refreshToken() {
    return this.http.post<RefreshTokenResponse>(
      `${this.authUrl}user/refresh-token`,
      { refresh_token: this.token() }
    ).pipe(retry(2))
  }

  logout(): void {
    this.router.navigateByUrl('/auth/login')
  }
}