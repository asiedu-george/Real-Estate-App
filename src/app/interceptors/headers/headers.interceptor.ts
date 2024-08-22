import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectRefreshToken } from '../../auth/store/login.selectors';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  const authApi = environment.authUrl
  const store = inject(Store)
  const token = store.selectSignal(selectRefreshToken)

  if(req.url.startsWith(authApi)) {
    const modifiedRequest = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${token()}`,
        'X-APN': environment.apnKey
      }
    })
    return next(modifiedRequest);
  }
  return next(req)
};