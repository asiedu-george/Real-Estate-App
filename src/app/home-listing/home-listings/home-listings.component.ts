import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeListingState } from '../store/state/state';
import * as HomeListingsAction from '../store/actions/actions'
import { selectIsLoading, SelectError, selectListings } from '../store/selectors/selectors';
import { HomeType, ListingFilters, Status } from '../../interface/listing-filters';
import { HomeData, Result } from '../../interface/home-listing';
import { constants } from '../../utils/constants';
@Component({
  selector: 'app-home-listings',
  templateUrl: './home-listings.component.html',
  styleUrl: './home-listings.component.scss'
})
export class HomeListingsComponent implements OnInit {
  public dropdowns = { status: false, price: false, bedBath: false, homeType: false };
  protected readonly Status = Status;
  protected readonly HomeType = HomeType;
  private status: Status[] = []
  private HomeTypes: HomeType[] = []
  public forSale = ''
  public forRent = ''
  public sold = ''
  public search = ''
  public apartment = ''
  public condos = ''
  public land = ''
  public multi_family = ''
  public townhomes = ''
  public duplex_triplex = ''
  public filters: ListingFilters = {
    postal_code: '',
    status: constants.status,
    type: []
  };
  public isLoading =  this.store.selectSignal(selectIsLoading)
  public error = this.store.selectSignal(SelectError)
  public listings$ = this.store.select(selectListings)
  public allListings: HomeData | null = null;

  constructor(
    private store: Store<HomeListingState>,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.applyFilters();
    this.listings$.subscribe((listing) => this.allListings = listing)
  }

  applyFilters(): void {
    this.store.dispatch(HomeListingsAction.getHomeListing({
      filters: {
        status: this.status,
        type: this.HomeTypes
      }
    }));
  }

  toggleDropdown(dropdown: keyof typeof this.dropdowns): void {
    Object.keys(this.dropdowns).forEach(key => {
      this.dropdowns[key as keyof typeof this.dropdowns] = (key === dropdown) 
      ? !this.dropdowns[key as keyof typeof this.dropdowns] : false;
    });
  }

  onHomeTypesChange(newHomeType: HomeType) {
    if(!this.HomeTypes.includes(newHomeType)) {
      this.HomeTypes = [...this.HomeTypes, newHomeType]
      return
    }

    this.HomeTypes = this.HomeTypes.filter((type) => type !== newHomeType)
  }

  onStatusFilterChange(newStatus: Status) {
    if (!this.status.includes(newStatus)) {
      this.status = [...this.status, newStatus]
      return
    }

    this.status = this.status.filter((status) => status !== newStatus)
  }

  onSearch(): void {
    // const inputElement = event.target as HTMLInputElement;
    const searchValue = this.search.toLowerCase();
  
    if (this.allListings) {
      const filteredListings = searchValue
        ? this.filterListings(searchValue)
        : this.allListings.home_search.results;
  
      const filteredHomeSearch = {
        ...this.allListings.home_search,
        results: filteredListings,
      };
  
      this.store.dispatch(
        HomeListingsAction.homeListingSuccess({
          lists: { ...this.allListings, home_search: filteredHomeSearch },
        })
      );
    }
  }
  
  private filterListings(searchValue: string): Result[] {
    return this.allListings?.home_search.results.filter(listing =>
      this.isMatch(listing, searchValue)
    ) ?? [];
  }
  
  private isMatch(listing: any, searchValue: string): boolean {
    const { state, street_name, city, state_code } = listing.location.address;
    return [state, street_name, city, state_code].some(field =>
      field.toLowerCase().includes(searchValue)
    );
  }
  
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const header = document.getElementById('filter')
    if (window.scrollY > 0) {
      header?.classList.add('scrolled')
    } else {
      header?.classList.remove('scrolled')
    }
  }
}