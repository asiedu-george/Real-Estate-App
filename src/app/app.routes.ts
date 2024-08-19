import { Routes } from '@angular/router';
import { canActivate } from './guard/auth.guard';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('../app/auth/auth.module')
        .then(am => am.AuthModule)
    },
    {
        path: 'listings',
        loadChildren: () => import('../app/home-listing/home-listing.module')
        .then(hm => hm.HomeListingModule),
        canActivate: [canActivate]
    },
    {
        path: '',
        loadChildren: () => import('../app/landing-page/landing-page.module')
        .then(lpm => lpm.LandingPageModule)
    }
]