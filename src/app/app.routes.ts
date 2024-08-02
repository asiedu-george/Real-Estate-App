import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('../app/auth/auth.module').then(am => am.AuthModule)
    }
]