import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../auth/service/auth.service';
import { authEnv } from '../../../environments/environment.development';
import { jwtDecode } from 'jwt-decode';
import { constants } from '../../constants';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService)
  const authUrl = authEnv.baseUrl

  const refreshTokenUrl: string = `${authUrl}/user/refresh-token`
  if(req.url === refreshTokenUrl) return next(req)
  
  const activeUser: string | undefined = authService.activeUserValue?.login_token
  const token: string | undefined = activeUser

  if(token) {
    try {
      let decodedToken = jwtDecode(token)
      const isExpired: boolean = decodedToken?.exp ? 
        decodedToken.exp < Date.now() / 1000 : false
      
      if(isExpired) {
        authService.refreshToken(token).subscribe((newToken) => {
          const user: string | null = localStorage.getItem('activeUser')
          if(user) {
            const storedUser = JSON.parse(user)
            const newUser = {
              ...storedUser, 
              login_token: newToken.additionalProp1
            }
            authService.storedUserData(newUser)
          }
          const reqClone = req.clone({
            setHeaders: {
              'Authorization': `Bearer ${newToken.additionalProp1}`,
              'X-APN': constants.apnKey
            }
          })
          return next(reqClone)
        })
      } else {
        const reqClone = req.clone({
          setHeaders: {
            'Authorization': `Bearer ${token}`,
            'X-APN': constants.apnKey
          }
        })
        return next(reqClone)
      }
    } catch(e) {
      authService.logout()
    }
  }

  return next(req);
}