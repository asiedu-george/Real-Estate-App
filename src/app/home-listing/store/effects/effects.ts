import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HomeListingService } from "../../service/home-listing.service";
import * as HomeListingsAction from '../actions/actions'
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class ListingEffects {
    constructor(
        private actions$: Actions, 
        private homeListingService: HomeListingService
    ){}
    
    getListings$ = createEffect(() =>
        this.actions$.pipe(
            ofType(HomeListingsAction.getHomeListing),
            mergeMap((action) => {
                return this.homeListingService.getAllListings(action.filters).pipe(
                    map((response) => {
                        if(response && response.data) {
                            return HomeListingsAction.homeListingSuccess({ lists: response.data})
                        } else {
                            throw new Error('No data content')
                        }
                    }),
                    catchError((error) => 
                        of(HomeListingsAction.homeListingFailure({error: error}))
                    )
                )
            } 
            ),
        )
    )
}