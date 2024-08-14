import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as HomeListingsAction from '../store/actions/actions'
import { SelectError, selectIsLoading, selectListings } from '../store/selectors/selectors';
import { HomeListingState } from '../store/state/state';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss'
})
export class PropertiesComponent implements OnInit {
  public isLoading =  this.store.selectSignal(selectIsLoading)
  public error = this.store.selectSignal(SelectError)
  public listings$ = this.store.select(selectListings)
  
  constructor(
    private store: Store<HomeListingState>,
    private spinner: NgxSpinnerService
  ) {}
  
  ngOnInit(): void {
    this.spinner.show()
    this.store.dispatch(HomeListingsAction.getHomeListing())
  }
}