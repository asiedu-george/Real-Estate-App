import { createReducer, on } from "@ngrx/store";
import { HomeListingState } from "./state";
import * as HomeListingsAction from './actions'

export const initialState: HomeListingState = {
    isLoading: false,
    data: null,
    error: null
}

export const listingReducers = createReducer(
    initialState,
    on(HomeListingsAction.getHomeListing, (state) => ({
        ...state, 
        isLoading: true,
        error: null
    })),
    on(HomeListingsAction.homeListingSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        data: action.data,
    })),
    on(HomeListingsAction.homeListingFailure, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error,
    }))
)