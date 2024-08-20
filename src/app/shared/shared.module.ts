import { NgModule } from '@angular/core';
import {CommonModule, CurrencyPipe, NgOptimizedImage} from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { ListingCardComponent } from './listing-card/listing-card.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import {RouterLink} from "@angular/router";
import { SentenceCasePipe } from './pipe/sentence-case.pipe';

@NgModule({
  declarations: [
    CarouselComponent,
    ListingCardComponent,
    BackToTopComponent,
    ThemeSwitcherComponent,
    NavHeaderComponent,
    SentenceCasePipe
  ],
  imports: [
    CommonModule,
    CurrencyPipe,
    RouterLink,
    NgOptimizedImage
  ],
  exports: [
    CarouselComponent,
    ListingCardComponent,
    BackToTopComponent,
    ThemeSwitcherComponent,
    NavHeaderComponent,
    SentenceCasePipe
  ]
})
export class SharedModule { }
