import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure, logout } from './login.actions';
import { LoginSate } from '../../home-listing/store/state/state';
import { getStoreData } from '../../app-store/app.actions';

export const initialState: LoginSate = {
  isLoading: false,
  loggedIn: null,
  error: null
};

export const loginReducer = createReducer(
  initialState,
  on(login, (state) => ({
     ...state, 
     isLoading: true,
     error: null
    })),
  on(loginSuccess, (state, { loggedIn }) => ({
    ...state,
    loggedIn,
    error: null,
    isLoading: false,
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(getStoreData, (state, {loggedIn, error, isLoading}) => ({
    ...state,
    loggedIn: loggedIn,
    error: error,
    isLoading: isLoading
  })),
  on(logout, (state) => ({
    ...state,
    loggedIn: null
  }))
);