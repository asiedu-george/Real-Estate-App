import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Store } from '@ngrx/store';
import { LoginSate } from '../home-listing/store/state/state';
import { selectLoginToken } from '../auth/store/login.selectors';
import { map, take } from 'rxjs';
import { constants } from '../../environments/constants';

const getDependencies = () => {
    return {
        router: inject(Router),
        toast: inject(NgToastService),
        store: inject(Store<LoginSate>)
    }
}

const handleAuthorizedAccess = (router: Router, toast: NgToastService): void =>{
    toast.warning(
        constants.unauthorizedAccess, 
        constants.accessDenied, 
        constants.spinnerDuration
    )
    router.navigateByUrl('/auth/login')
}

const checkAuth = () => {
    const { router, toast, store } = getDependencies()
    return store.select(selectLoginToken).pipe(
        take(1),
        map((token) => {
            if(token) {
                return true
            } else {
                handleAuthorizedAccess(router, toast)
                return false
            }
        })
    )
}

export const canActivate: CanActivateFn = () => {
    return checkAuth()
}