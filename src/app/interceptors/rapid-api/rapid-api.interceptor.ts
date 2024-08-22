import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { constants } from '../../utils/constants';
import { environment } from '../../../environments/environment';
import { inject } from '@angular/core';
import { AuthService } from '../../auth/service/auth.service';
import { catchError, switchMap, throwError } from 'rxjs';
import { NgToastService } from 'ng-angular-popup';

export const rapidApiInterceptor: HttpInterceptorFn = (req, next) => {
  const rapidAPI = environment.rapidApiUrl
  const authService = inject(AuthService)
  const toast = inject(NgToastService)

  if(req.url.startsWith(rapidAPI)) {
    return authService.validateUser().pipe(
      switchMap(() => {
        const rapidAPiRequest = req.clone({
          setHeaders: {
            'x-rapidapi-key': environment.rapidApiKey,
            'x-rapidapi-host': environment.rapidApiHost
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