import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ListingCardComponent } from './listing-card/listing-card.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    CarouselComponent,
    ListingCardComponent,
    BackToTopComponent
  ],
  imports: [
    CommonModule,
    CurrencyPipe
  ],
  exports: [
    CarouselComponent, 
    SpinnerComponent, 
    ListingCardComponent,
    BackToTopComponent
  ]
})
export class SharedModule { }
