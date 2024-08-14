import { createReducer, on } from "@ngrx/store";
import { HomeListingDetailsState } from "../state/state";
import * as ListingDetailsAction from '../actions/details.action'

export const initialState: HomeListingDetailsState = {
    isLoading: false,
    details: null,
    error: null
}

export const listingDescriptionReducers = createReducer(
    initialState,
    on(ListingDetailsAction.getListingDescription, (state) => ({
        ...state,
        isLoading: true,
        error: null
    })),
    on(ListingDetailsAction.listingDescriptionSuccess, (state, {details}) => ({
        ...state,
        isLoading: false,
        details: details,
    })),
    on(ListingDetailsAction.listingDescriptionFailure, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error
    }))
)