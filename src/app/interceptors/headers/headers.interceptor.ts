import { HttpInterceptorFn } from '@angular/common/http';
import { constants } from '../../constants';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedRequest = req.clone({
    setHeaders: {
      'X-APN': constants.apnKey
    }
  })
  return next(modifiedRequest);
};