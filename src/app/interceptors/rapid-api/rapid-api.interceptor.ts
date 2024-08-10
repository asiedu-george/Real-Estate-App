import { HttpInterceptorFn } from '@angular/common/http';
import { constants } from '../../constants';

export const rapidApiInterceptor: HttpInterceptorFn = (req, next) => {
  const rapidAPiRequest = req.clone({
    setHeaders: {
      'x-rapidapi-key': constants.rapidApiKey,
      'x-rapidapi-host': constants.rapidApiHost
    }
  })
  return next(rapidAPiRequest);
}