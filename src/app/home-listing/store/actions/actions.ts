import { createAction, props } from "@ngrx/store";
import { HomeData } from "../../../interface/home-listing";
import { ListingFilters } from "../../../interface/listing-filters";

export const getHomeListing = createAction(
    '[Listings] Get Listings',
    props<{ filters: Partial<ListingFilters> }>()
)

export const homeListingSuccess = createAction(
    '[Listings] Get Listings Success',
    props<{ lists: HomeData }>()
)

export const homeListingFailure = createAction(
    '[Listings] Get Listings Failure',
    props<{ error: string }>()
)