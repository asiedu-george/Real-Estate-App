import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HomeListingState } from "./state";

export const selectFeature = createFeatureSelector<HomeListingState>('listings')

export const selectIsLoading = createSelector(
    selectFeature,
    (state) => state.isLoading
)

export const selectListings = createSelector(
    selectFeature, 
    (state) => state.list
)

export const SelectError = createSelector(
    selectFeature,
    (state) => state.error
)