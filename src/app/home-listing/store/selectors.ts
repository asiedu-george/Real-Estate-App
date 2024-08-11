import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "../../interface/app-state";

export const selectFeature = (state: AppStateInterface) => state.data

export const isLoadingSelector = createSelector(
    selectFeature,
    (state) => state.isLoading
)

export const listingSelector = createSelector(
    selectFeature,
    (state) => state.data
)

export const errorSelector = createSelector(
    selectFeature,
    (state) => state.error
)