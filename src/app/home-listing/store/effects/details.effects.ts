import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HomeListingService } from "../../service/home-listing.service";
import * as ListingDetailsAction from '../actions/details.action'
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class ListingDetailsEffects {
    constructor(
        private actions$: Actions,
        private homeListingService: HomeListingService
    ){}

    getListingDetails$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ListingDetailsAction.getListingDescription),
            mergeMap(({property_id}) => {
                return this.homeListingService.getHomeListingDescription(property_id).pipe(
                    map((response) => {
                        if(response && response.data) {
                            return ListingDetailsAction.listingDescriptionSuccess({details: response.data})
                        } else {
                            throw new Error("Invalid response structure")
                        }
                    }),
                    catchError((error) =>
                        of(ListingDetailsAction.listingDescriptionFailure({error: error.message}))
                    )
                )
            })
        )
    )
}