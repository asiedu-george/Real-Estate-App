import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn } from '@angular/router';
import { AuthService } from '../auth/service/auth.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

const getDependencies = () => {
    return {
        authService: inject(AuthService),
        router: inject(Router),
        toast: inject(NgToastService)
    }
}

const handleAuthorizedAccess = (router: Router, toast: NgToastService): void =>{
    toast.warning('Unauthorized route access, please login', 'Access denied', 5000)
    router.navigateByUrl('/auth/login')
}

const checkAuth = (): boolean => {
    const { authService, router, toast } = getDependencies()
    const authenticatedUser = authService.isAuthenticated()

    if(authenticatedUser) {
        return true
    } else {
        handleAuthorizedAccess(router, toast)
        return false
    }
}

export const canActivate: CanActivateFn = () => {
    return checkAuth()
}

export const canMatch: CanMatchFn = () => {
    return checkAuth()
}