import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HomeListingDetailsState } from "../state/state";

export const selectListingDetailsFeature = createFeatureSelector<HomeListingDetailsState>('details')

export const selectDetailsIsLoading = createSelector(
    selectListingDetailsFeature,
    (state) => state.isLoading
)

export const selectListingDetails = createSelector(
    selectListingDetailsFeature,
    (state) => state.details
)

export const selectListingDetailsError = createSelector(
    selectListingDetailsFeature,
    (state) => state.error
)