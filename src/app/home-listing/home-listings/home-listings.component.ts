import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeListingState } from '../store/state/state';
import * as HomeListingsAction from '../store/actions/actions'
import { selectIsLoading, SelectError, selectListings } from '../store/selectors/selectors';
import { HomeType, ListingFilters, Status } from '../../interface/listing-filters';
import { HomeData } from '../../interface/home-listing';
import { constants } from '../../constants';
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

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const searchValue = inputElement.value.toLowerCase();
  
    if (this.allListings) {
      const filteredListings = this.allListings.home_search.results.filter(listing =>
        listing.location.address.state.toLowerCase().includes(searchValue) ||
        listing.location.address.street_name.toLowerCase().includes(searchValue) ||
        listing.location.address.city.toLowerCase().includes(searchValue) ||
        listing.location.address.state_code.toLowerCase().includes(searchValue)
      );
  
      const filteredHomeSearch = {
        ...this.allListings.home_search,
        results: filteredListings,
      };
  
      this.store.dispatch(HomeListingsAction.homeListingSuccess({ lists: { ...this.allListings, home_search: filteredHomeSearch } }));
    }
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