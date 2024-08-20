import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeListingsComponent } from './home-listings/home-listings.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';

const routes: Routes = [
  { 
    path: '',
    component: HomeListingsComponent,
    title: 'Just Home | Home Listings Page'
  },
  {
    path: ':property_id',
    component: ListingDetailsComponent,
    title: 'Just Home | Home Listings Details Page'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeListingRoutingModule { }