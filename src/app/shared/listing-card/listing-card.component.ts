import { Component, input } from '@angular/core';
import { HomeData, HomeSearchResult, Result } from '../../interface/home-listing';

@Component({
  selector: 'app-listing-card',
  templateUrl: './listing-card.component.html',
  styleUrl: './listing-card.component.scss'
})
export class ListingCardComponent {
  public listing = input<Result>({} as Result)
}