import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeListingsComponent } from './home-listings/home-listings.component';

const routes: Routes = [
  { 
    path: '',
    component: HomeListingsComponent,
    title: 'Just Home | Home Listings Page'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeListingRoutingModule { }