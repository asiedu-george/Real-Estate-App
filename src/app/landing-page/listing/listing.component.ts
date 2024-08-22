import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectListings } from '../../home-listing/store/selectors/selectors';
import { HomeListingState } from '../../home-listing/store/state/state';
import { getHomeListing } from '../../home-listing/store/actions/actions';
import { constants } from '../../../environments/constants';
import { ListingFilters } from '../../interface/listing-filters';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent implements OnInit {
  public listings$ = this.store.select(selectListings)
  public filters: ListingFilters = {
    postal_code: '',
    status: constants.status
  }

  constructor(private store: Store<HomeListingState>) {}

  ngOnInit(): void {
    this.store.dispatch(getHomeListing({ 
      filters: this.filters
    }))
  }
}