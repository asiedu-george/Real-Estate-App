import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoginSate } from "../../home-listing/store/state/state";

export const selectLoginFeature = createFeatureSelector<LoginSate>('login')

export const selectIsLoading = createSelector(
    selectLoginFeature,
    (state) => state.isLoading
)

export const selectLoggedIn = createSelector(
    selectLoginFeature,
    (state) => state.loggedIn
)

export const selectLoginError = createSelector(
    selectLoginFeature,
    (state) => state.error
)

export const selectLoginToken = createSelector(
    selectLoginFeature,
    (state) => state.loggedIn?.login_token
)

export const selectRefreshToken = createSelector(
    selectLoginFeature,
    (state) => state.loggedIn?.refresh_token
)