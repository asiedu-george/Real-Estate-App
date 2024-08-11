import { Component, input } from '@angular/core';
import { SearchHome } from '../../interface/listing';

@Component({
  selector: 'app-listing-card',
  templateUrl: './listing-card.component.html',
  styleUrl: './listing-card.component.scss'
})
export class ListingCardComponent {
  public listing = input<SearchHome>({} as SearchHome)
}