import { createAction, props } from "@ngrx/store";
import { DescriptionData } from "../../../interface/listing-description";

export const getListingDescription = createAction(
    '[Details] Get Listing Details',
    props<{ property_id: string }>()
)

export const listingDescriptionSuccess = createAction(
    '[Details] Get Listing Details Success',
    props<{ details: DescriptionData }>()
)

export const listingDescriptionFailure = createAction(
    '[Details] Get Listing Details Failure',
    props<{ error: string }>()
)