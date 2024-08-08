import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { authEnv } from '../../../environments/environment.development';
import { Login, LoginResponse } from '../../interface/login';
import { Register, RegisterResponse } from '../../interface/register';
import { UpdatePassword, UpdatePasswordResponse } from '../../interface/update-password';
import { UserProfile } from '../../interface/user-profile';
import { Router } from '@angular/router';
import { RefreshTokenResponse } from '../../interface/refresh-token-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected authUrl: string = authEnv.baseUrl
  private activeUserSubject: BehaviorSubject<LoginResponse | null>
  public activeUser: Observable<LoginResponse | null>

  constructor(private http: HttpClient, private router: Router) {
    const storedUser: string | null = localStorage.getItem('activeUser')
    this.activeUserSubject = new BehaviorSubject<LoginResponse | null>(
      storedUser ? JSON.parse(storedUser) : null
    )
    this.activeUser = this.activeUserSubject.asObservable()
  }

  public get activeUserValue(): LoginResponse | null {
    const value: LoginResponse | null = this.activeUserSubject.value
    return value
  }

  public storedUserData(response: LoginResponse): void {
    localStorage.setItem('activeUser', JSON.stringify(response))
    const storedData = this.activeUserSubject.next(response)
    return storedData
  }

  register(user: Register): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.authUrl}user/signup`, user)
  }

  login(user: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.authUrl}user/login`, user).pipe(
      map((response: LoginResponse) => {
        this.storedUserData(response)
        return response
      })
    )
  }

  updatePassword(user: UpdatePassword): Observable<UpdatePasswordResponse> {
    return this.http.post<UpdatePasswordResponse>(`${this.authUrl}user/update-password`, user)
  }

  validateUser(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(`${this.authUrl}user/validate`)
  }

  getUserProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.authUrl}/user/profile`)
  }

  logout(): void {
    localStorage.removeItem('activeUser')
    this.activeUserSubject.next(null)
    this.router.navigateByUrl('/auth/login')
  }

  refreshToken(refresh_token: string): Observable<RefreshTokenResponse> {
    const body = JSON.stringify({ refresh_token: refresh_token })

    return this.http.post<RefreshTokenResponse>(`${this.authUrl}/user/refresh-token`, body)
    .pipe(
      map(response => {
        return response
      }),
      catchError(err => {
        this.logout()
        return throwError(() => err)
      })
    )
  }

  isAuthenticated(): boolean {
    return !!this.activeUserValue?.login_token
  }
}