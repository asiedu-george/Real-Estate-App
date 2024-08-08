import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ListingComponent } from './listing/listing.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { DiscoverComponent } from './discover/discover.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ListingComponent,
    HowItWorksComponent,
    DiscoverComponent,
    TestimonialComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class LandingPageModule { }