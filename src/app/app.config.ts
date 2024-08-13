import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom, isDevMode } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideSpinnerConfig } from 'ngx-spinner'
import { NgToastModule } from 'ng-angular-popup';
import { authInterceptor } from './interceptors/token/token.interceptor';
import { headersInterceptor } from './interceptors/headers/headers.interceptor';
import { rapidApiInterceptor } from './interceptors/rapid-api/rapid-api.interceptor';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { listingReducers } from './home-listing/store/reducers/reducers';
import { ListingEffects } from './home-listing/store/effects/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([
        headersInterceptor, authInterceptor, rapidApiInterceptor
    ])),
    provideSpinnerConfig({ type: 'ball-scale-multiple' }),
    importProvidersFrom(NgToastModule),
    provideStore({'listings': listingReducers}),
    provideEffects([ListingEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
}