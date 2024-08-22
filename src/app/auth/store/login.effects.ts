import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../service/auth.service";
import { login, loginFailure, loginSuccess, logout } from "./login.actions";
import { catchError, map, mergeMap, of } from "rxjs";
import { NgToastService } from "ng-angular-popup";
import { constants } from "../../utils/constants";
import { Router } from "@angular/router";

@Injectable()
export class LoginEffects {
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(login),
            mergeMap(({email, password}) => 
                this.authService.login({email, password}).pipe(
                    map((response) => {
                        this.toast.success(
                            response.message, 
                            constants.success, 
                            constants.spinnerDuration
                        )
                        this.router.navigateByUrl('/listings')
                        return loginSuccess({loggedIn: response})
                    }),
                    catchError((error) => {
                        this.toast.danger(
                            constants.errorMessage, 
                            constants.error, 
                            constants.spinnerDuration
                        )
                        return of(loginFailure({error}))}
                    )
                )
            )
        )
    )

    logout$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(logout),
            map(() => this.authService.logout())
        )
    }, {dispatch: false})

    constructor(
        private actions$: Actions, 
        private authService: AuthService,  
        private router: Router,
        private toast: NgToastService
    ) {}
}