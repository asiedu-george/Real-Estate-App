import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, NgOptimizedImage } from '@angular/common';

import { HomeListingRoutingModule } from './home-listing-routing.module';
import { HomeListingsComponent } from './home-listings/home-listings.component';
import {SharedModule} from "../shared/shared.module";
import { PropertiesComponent } from './properties/properties.component';
import { StoreModule } from '@ngrx/store';
import { listingReducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { ListingEffects } from './store/effects';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LandingPageModule } from '../landing-page/landing-page.module';

@NgModule({
  declarations: [
    HomeListingsComponent,
    PropertiesComponent
  ],
  imports: [
    CommonModule,
    HomeListingRoutingModule,
    SharedModule,
    NgOptimizedImage,
    AsyncPipe,
    NgxSpinnerModule,
    LandingPageModule
    // StoreModule.forFeature('listings', listingReducers),
    // EffectsModule.forFeature([ListingEffects])
  ]
})
export class HomeListingModule { }
