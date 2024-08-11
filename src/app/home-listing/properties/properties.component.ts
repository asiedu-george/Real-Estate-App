import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as HomeListingsAction from '../store/actions'
import { listingSelector, errorSelector, isLoadingSelector } from '../store/selectors';
import { AppStateInterface } from '../../interface/app-state';
import { map, Observable } from 'rxjs';
import { HomeSearchResult, SearchHome } from '../../interface/listing';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss'
})
export class PropertiesComponent implements OnInit {
  public isLoading$: Observable<boolean>
  public error$: Observable<string | null>
  public listings$: Observable<SearchHome[]>
  
  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.listings$ = this.store.pipe(
      select(listingSelector),
      map((homeSearchResult: HomeSearchResult | null) => {
        return homeSearchResult?.results || []
      })
    )
  }
  
  ngOnInit(): void {
    this.store.dispatch(HomeListingsAction.getHomeListing())
  }
}