import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideSpinnerConfig } from 'ngx-spinner'
import { NgToastModule } from 'ng-angular-popup';
import { authInterceptor } from './interceptors/token/token.interceptor';
import { headersInterceptor } from './interceptors/headers/headers.interceptor';
import { rapidApiInterceptor } from './interceptors/rapid-api/rapid-api.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withPreloading(PreloadAllModules)), 
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([
      headersInterceptor,authInterceptor, rapidApiInterceptor
    ])),
    provideSpinnerConfig({ type: 'ball-scale-multiple' }),
    importProvidersFrom(NgToastModule)
  ]
}