import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, NgOptimizedImage } from '@angular/common';

import { HomeListingRoutingModule } from './home-listing-routing.module';
import { HomeListingsComponent } from './home-listings/home-listings.component';
import {SharedModule} from "../shared/shared.module";
import { NgxSpinnerModule } from 'ngx-spinner';
import { LandingPageModule } from '../landing-page/landing-page.module';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeListingsComponent,
    ListingDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeListingRoutingModule,
    SharedModule,
    NgOptimizedImage,
    AsyncPipe,
    NgxSpinnerModule,
    LandingPageModule
  ]
})
export class HomeListingModule { }