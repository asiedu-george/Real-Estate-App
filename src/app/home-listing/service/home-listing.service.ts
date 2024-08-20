import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HomeListingResponse } from '../../interface/home-listing';
import { ListingDescription } from '../../interface/listing-description';
import { constants } from '../../../environments/constants';
import { ListingFilters } from '../../interface/listing-filters';

@Injectable({
  providedIn: 'root'
})
export class HomeListingService {
  protected rapidApi = environment.baseUrl

  constructor(private http: HttpClient) {}

  getAllListings({status, list_price, type}: Partial<ListingFilters>) {
    const body: ListingFilters = {
      postal_code: constants.postalCode,
      status: status && status.length ? status : constants.status,
      list_price: list_price,
      type: type
    };

    return this.http.post<HomeListingResponse>(`${this.rapidApi}properties/v3/list`, body);
  }

  getHomeListingDescription(property_id: string) {
    return this.http.get<ListingDescription>(`${this.rapidApi}properties/v3/detail?property_id=${property_id}`)
  }
}