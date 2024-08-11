import { createAction, props } from "@ngrx/store";
import { HomeSearchResult, SearchHome } from "../../interface/listing";

export const getHomeListing = createAction('[Listings] Get Listings')

export const homeListingSuccess = createAction(
    '[Listings] Get Listings Success',
    props<{ data: HomeSearchResult }>()
)

export const homeListingFailure = createAction(
    '[Listings] Get Listings Failure',
    props<{ error: string }>()
)