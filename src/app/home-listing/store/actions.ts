import { createAction, props } from "@ngrx/store";
import { HomeData, HomeSearchResult } from "../../interface/home-listing";

export const getHomeListing = createAction('[Listings] Get Listings')

export const homeListingSuccess = createAction(
    '[Listings] Get Listings Success',
    props<{ lists: HomeData }>()
)

export const homeListingFailure = createAction(
    '[Listings] Get Listings Failure',
    props<{ error: string }>()
)