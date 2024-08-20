import { Component, OnInit } from '@angular/core';
import * as ListingDetailsAction from '../store/actions/details.action';
import { Store } from '@ngrx/store';
import { HomeListingDetailsState } from '../store/state/state';
import { 
  selectDetailsIsLoading, 
  selectListingDetails, 
  selectListingDetailsError 
} from '../store/selectors/details.selectors';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Result } from '../../interface/home-listing';
import { constants } from '../../constants';
import { Detail, HomeDescription } from '../../interface/listing-description';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.scss']
})
export class ListingDetailsComponent implements OnInit {
  public isLoading = this.store.selectSignal(selectDetailsIsLoading);
  public error = this.store.selectSignal(selectListingDetailsError);
  public details$ = this.store.select(selectListingDetails);
  public expandedImgSrc: string | null = null;
  public expandedImgAlt: string | null = null;
  public showMore = false;
  public recentlyViewedListings: Result[] = [];
  public interiorFeatures: Detail[] = [];
  public exteriorFeatures: Detail[] = [];
  public communityFeatures: Detail[] = [];
  public propertyInfoFeatures: Detail[] = [];

  constructor(
    private store: Store<HomeListingDetailsState>,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const propertyId = paramMap.get('property_id');
      if (propertyId) {
        this.fetchListingDescription(propertyId);
      }
    });

    this.loadRecentlyViewedListings();

    this.details$.subscribe((listing) => {
      if (listing) {
        this.addToRecentlyViewedListings(
          this.mapHomeDescriptionToResult(listing.home)
        );
        this.filterFeatures(listing.home.details);
      }
    });
  }

  fetchListingDescription(propertyId: string): void {
    this.spinner.show();
    this.store.dispatch(ListingDetailsAction.getListingDescription({ property_id: propertyId }));
  }

  loadRecentlyViewedListings(): void {
    const viewedListings = localStorage.getItem('recentlyViewedListings');
    if (viewedListings) {
      this.recentlyViewedListings = JSON.parse(viewedListings);
    }
  }

  expandImage(img: { href: string; tags: any[] }): void {
    this.expandedImgSrc = img.href;
    this.expandedImgAlt = this.getAltText(img);
  }

  getAltText(photo: { tags: any[] }): string {
    return photo.tags?.map((tag) => tag.label).join(', ') || 'Image description';
  }

  closeExpandedImage(): void {
    this.expandedImgSrc = null;
    this.expandedImgAlt = null;
  }

  toggleShowMore(): void {
    this.showMore = !this.showMore;
  }

  addToRecentlyViewedListings(listing: Result): void {
    const maxLength = constants.maxLength;
    this.recentlyViewedListings = this.recentlyViewedListings.filter(
      (list) => list.property_id !== listing.property_id
    );
    this.recentlyViewedListings.unshift(listing);

    if (this.recentlyViewedListings.length > maxLength) {
      this.recentlyViewedListings.pop();
    }

    localStorage.setItem('recentlyViewedListings', JSON.stringify(this.recentlyViewedListings));
  }

  mapHomeDescriptionToResult(homeDescription: HomeDescription): Result {
    return {
      ...homeDescription,
      plan_id: null,
      primary_photo: homeDescription.photos?.[0],
      price_reduced_amount: undefined,
      estimate: undefined,
      location: {
        ...homeDescription.location,
        address: {
          ...homeDescription.location.address,
          country: homeDescription.location.county?.__typename || '',
          coordinate: {
            ...homeDescription.location.address.coordinate,
            accuracy: homeDescription.location.address.coordinate || 0,
          },
        },
      },
      source: {
        ...homeDescription.source,
        listing_href: homeDescription.source.listing_id || '',
      },
    };
  }

  filterFeatures(details: Detail[]): void {
    this.interiorFeatures = details.filter(detail => 
      [
        'Bedrooms', 'Bathrooms', 'Other Rooms', 'Appliances', 
        'Heating and Cooling', 'Interior Features', 'Kitchen and Dining'
      ].includes(detail.category)
    );

    this.exteriorFeatures = details.filter(detail => 
      ['Pool and Spa', 'Exterior and Lot Features', 
        'Garage and Parking', 'Home Features', 'Land Info'
      ].includes(detail.category)
    );

    this.communityFeatures = details.filter(detail => 
      [
        'Amenities and Community Features', 
        'Homeowners Association', 'Building and Construction',
      ].includes(detail.category)
    )

    this.propertyInfoFeatures = details.filter(detail => 
      ['Other Property Info', 'Building and Construction', 'Utilities']
      .includes(detail.category)
    )
  }

  formatGrades(grades: string[]): string {
    if (!grades || grades.length === 0) return '';
  
    const firstGrade = grades[0];
    const lastGrade = grades[grades.length - 1];
  
    return `${firstGrade} - ${lastGrade}`;
  }
}