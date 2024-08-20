import { createAction, props } from "@ngrx/store";
import { LoginResponse } from "../../interface/login";

export const login = createAction(
    '[Login] Login',
    props<{ email: string; password: string }>()
);
  
export const loginSuccess = createAction(
    '[Login] Login Success',
    props<{ loggedIn: LoginResponse }>()
);
  
export const loginFailure = createAction(
    '[Login] Login Failure',
    props<{ error: string }>()
);

export const logout = createAction('[Login] Logout');