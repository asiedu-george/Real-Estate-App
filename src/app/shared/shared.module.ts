import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ListingCardComponent } from './listing-card/listing-card.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    CarouselComponent,
    ListingCardComponent
  ],
  imports: [
    CommonModule,
    CurrencyPipe
  ],
  exports: [
    CarouselComponent, 
    SpinnerComponent, 
    ListingCardComponent
  ]
})
export class SharedModule { }
