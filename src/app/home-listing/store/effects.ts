import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HomeListingService } from "../service/home-listing.service";
import * as HomeListingsAction from './actions'
import { catchError, map, mergeMap, of } from "rxjs";
import { HomeSearchResult } from "../../interface/listing";

@Injectable()
export class ListingEffects {
    constructor(
        private actions$: Actions, 
        private homeListingService: HomeListingService
    ){}
    
    getListings$ = createEffect(() =>
        this.actions$.pipe(
            ofType(HomeListingsAction.getHomeListing),
            mergeMap(() => {
                return this.homeListingService.getForSaleListing().pipe(
                    map((data: HomeSearchResult) => HomeListingsAction.homeListingSuccess({data})),
                    catchError((error) => 
                        of(HomeListingsAction.homeListingFailure({ error: error.message }))
                    )
                )
            })
        )
    )
}