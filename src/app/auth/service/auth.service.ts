import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Login, LoginResponse } from '../../interface/login';
import { Register, RegisterResponse } from '../../interface/register';
import { UserProfile } from '../../interface/user-profile';
import { Router } from '@angular/router';
import { RefreshTokenResponse } from '../../interface/refresh-token-response';
import { Store } from '@ngrx/store';
import { selectRefreshToken } from '../store/login.selectors';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected authUrl: string = environment.authUrl;
  private readonly token = this.store.selectSignal(selectRefreshToken)

  constructor(
    private http: HttpClient, 
    private store: Store,
    private router: Router
  ) {}

  register(user: Register): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.authUrl}user/signup`, user)
    .pipe(take(1));
  }

  login(user: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.authUrl}user/login`, user)
    .pipe(take(1))
  }

  validateUser(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(`${this.authUrl}user/validate`)
  }

  getUserProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.authUrl}user/profile`)
  }

  refreshToken() {
    return this.http.post<RefreshTokenResponse>(
      `${this.authUrl}user/refresh-token`,
      { refresh_token: this.token() }
    )
  }

  logout(): void {
    this.router.navigateByUrl('/auth/login')
  }
}