import { HttpInterceptorFn } from '@angular/common/http';
import { constants } from '../../constants';
import { authEnv } from '../../../environments/environment.development';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  const authApi = authEnv.baseUrl
  if(req.url.startsWith(authApi)) {
    const modifiedRequest = req.clone({
      setHeaders: {
        'X-APN': constants.apnKey
      }
    })
    return next(modifiedRequest);
  }
  return next(req)
};