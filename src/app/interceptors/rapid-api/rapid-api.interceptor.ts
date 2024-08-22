import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { constants } from '../../../environments/constants';
import { environment } from '../../../environments/environment.development';
import { inject } from '@angular/core';
import { AuthService } from '../../auth/service/auth.service';
import { catchError, switchMap, throwError } from 'rxjs';
import { NgToastService } from 'ng-angular-popup';

export const rapidApiInterceptor: HttpInterceptorFn = (req, next) => {
  const rapidAPI = environment.baseUrl
  const authService = inject(AuthService)
  const toast = inject(NgToastService)

  if(req.url.startsWith(rapidAPI)) {
    return authService.validateUser().pipe(
      switchMap(() => {
        const rapidAPiRequest = req.clone({
          setHeaders: {
            'x-rapidapi-key': constants.rapidApiKey,
            'x-rapidapi-host': constants.rapidApiHost
          }
        })
        return next(rapidAPiRequest);
      }),
      catchError((error: HttpErrorResponse) => {
        toast.danger(
          constants.userValidationError, 
          constants.error, 
          constants.spinnerDuration
        )
        return throwError(() => error)
      })
    )
  }
  return next(req)
}