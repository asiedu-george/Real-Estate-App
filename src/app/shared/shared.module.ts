import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ListingCardComponent } from './listing-card/listing-card.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    CarouselComponent,
    ListingCardComponent,
    BackToTopComponent,
    ThemeSwitcherComponent
  ],
  imports: [
    CommonModule,
    CurrencyPipe
  ],
  exports: [
    CarouselComponent, 
    SpinnerComponent, 
    ListingCardComponent,
    BackToTopComponent,
    ThemeSwitcherComponent
  ]
})
export class SharedModule { }
