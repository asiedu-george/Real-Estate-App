import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('../app/auth/auth.module')
        .then(am => am.AuthModule)
    },
    {
        path: '',
        loadChildren: () => import('../app/landing-page/landing-page.module')
        .then(lpm => lpm.LandingPageModule)
    }
]