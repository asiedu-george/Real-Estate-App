import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../auth/service/auth.service';
import { authEnv } from '../../../environments/environment.development';
import { jwtDecode } from 'jwt-decode';
import { constants } from '../../../environments/constants';
import { Store } from '@ngrx/store';
import { selectLoginToken } from '../../auth/store/login.selectors';
import { from, switchMap } from 'rxjs';
import { loginSuccess } from '../../auth/store/login.actions';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService)
  const store = inject(Store)
  const authUrl = authEnv.baseUrl
  const token = store.selectSignal(selectLoginToken)

  const refreshTokenUrl = `${authUrl}user/refresh-token`
  if(req.url.startsWith(refreshTokenUrl)) {
    return next(req)
  }

  if(token()) {
    try {
      let decodedToken = jwtDecode(token() as string)
      const isExpired: boolean = decodedToken?.exp ? 
        decodedToken.exp < Date.now() / 1000 : false
      
      if(isExpired) {
        return from(authService.refreshToken().pipe(
          switchMap((res) => {
            store.dispatch(loginSuccess({loggedIn: res}))
            const newToken = res.login_token
            const reqCLone = req.clone({
              setHeaders: {
                'Authorization': `Bearer ${newToken}`,
                'X-APN': constants.apnKey,
              }
            })
            return next(reqCLone)
          })
        ))
      } else {
        const reqClone = req.clone({
          setHeaders: {
            'Authorization': `Bearer ${token()}`,
            'X-APN': constants.apnKey
          }
        })
        return next(reqClone)
      }
    } catch(e) {
      authService.logout()
    }
  } else {
    authService.logout()
  }

  return next(req);
}