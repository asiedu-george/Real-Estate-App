import { createReducer, on } from "@ngrx/store";
import { HomeListingState } from "../state/state";
import * as HomeListingsAction from '../actions/actions'

export const initialState: HomeListingState = {
    isLoading: false,
    list: null,
    error: null
}

export const listingReducers = createReducer(
    initialState,
    on(HomeListingsAction.getHomeListing, (state) => ({
        ...state, 
        isLoading: true,
        error: null
    })),
    on(HomeListingsAction.homeListingSuccess, (state, {lists}) => ({
        ...state,
        isLoading: false,
        list: lists,
    })),
    on(HomeListingsAction.homeListingFailure, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error,
    }))
)