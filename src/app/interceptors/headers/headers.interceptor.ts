import { HttpInterceptorFn } from '@angular/common/http';
import { constants } from '../../../environments/constants';
import { authEnv } from '../../../environments/environment.development';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectRefreshToken } from '../../auth/store/login.selectors';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  const authApi = authEnv.baseUrl
  const store = inject(Store)
  const token = store.selectSignal(selectRefreshToken)

  if(req.url.startsWith(authApi)) {
    const modifiedRequest = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${token()}`,
        'X-APN': constants.apnKey
      }
    })
    return next(modifiedRequest);
  }
  return next(req)
};