import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { HomeListingRoutingModule } from './home-listing-routing.module';
import { HomeListingsComponent } from './home-listings/home-listings.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    HomeListingsComponent
  ],
  imports: [
    CommonModule,
    HomeListingRoutingModule,
    SharedModule,
    NgOptimizedImage
  ]
})
export class HomeListingModule { }
