import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { authEnv } from '../../../environments/environment.development';
import { Login, LoginResponse } from '../../interface/login';
import { Register, RegisterResponse } from '../../interface/register';
import { UpdatePassword, UpdatePasswordResponse } from '../../interface/update-password';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected authUrl: string = authEnv.baseUrl

  constructor(private http: HttpClient) { }

  private httpOptions() {
    return {
      headers: new HttpHeaders()
      .set('X-APN', '4c0aed94208b4378e772f8b4785a6b84')
      .set('Content-Type', 'application/json')
    }
  }

  register(user: Register): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.authUrl}user/signup`, user, this.httpOptions())
  }

  login(user: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.authUrl}user/login`, user, this.httpOptions())
  }

  updatePassword(user: UpdatePassword): Observable<UpdatePasswordResponse> {
    return this.http.post<UpdatePasswordResponse>(`${this.authUrl}user/update-password`, user, this.httpOptions())
  }

  validateUser(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(`${this.authUrl}user/validate`, this.httpOptions())
  }
}
