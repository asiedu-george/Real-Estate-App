import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeListingRoutingModule } from './home-listing-routing.module';
import { HomeListingsComponent } from './home-listings/home-listings.component';


@NgModule({
  declarations: [
    HomeListingsComponent
  ],
  imports: [
    CommonModule,
    HomeListingRoutingModule
  ]
})
export class HomeListingModule { }
