import { Component, OnInit } from '@angular/core';
import * as ListingDetailsAction from '../store/actions/details.action'
import { Store } from '@ngrx/store';
import { HomeListingDetailsState } from '../store/state/state';
import { 
  selectDetailsIsLoading, 
  selectListingDetails, 
  selectListingDetailsError 
} from '../store/selectors/details.selectors';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DescriptionData } from '../../interface/listing-description';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrl: './listing-details.component.scss'
})
export class ListingDetailsComponent implements OnInit {
  public isLoading = this.store.selectSignal(selectDetailsIsLoading)
  public error = this.store.selectSignal(selectListingDetailsError)
  public details$ = this.store.select(selectListingDetails)

  constructor(
    private store: Store<HomeListingDetailsState>,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      let property_id: string | null = param.get('property_id')
      if(property_id !== null) {
        this.fetchListingDescription(property_id)
      }
    })
  }

  fetchListingDescription(property_id: string): void {
    this.spinner.show()
    this.store.dispatch(ListingDetailsAction.getListingDescription({property_id}))
  }

  getImageUrls(details: DescriptionData): string[] {
    return details.home.photos.map(photo => photo.href);
  }
}