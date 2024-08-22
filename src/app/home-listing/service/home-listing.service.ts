import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HomeListingResponse } from '../../interface/home-listing';
import { ListingDescription } from '../../interface/listing-description';
import { constants } from '../../utils/constants';
import { ListingFilters } from '../../interface/listing-filters';

@Injectable({
  providedIn: 'root'
})
export class HomeListingService {
  protected rapidApi = environment.rapidApiUrl

  constructor(private http: HttpClient) {}

  getAllListings({status, type}: Partial<ListingFilters>) {
    const body: ListingFilters = {
      postal_code: constants.postalCode,
      status: status && status.length ? status : constants.status,
      type: type
    };

    return this.http.post<HomeListingResponse>(`${this.rapidApi}properties/v3/list`, body);
  }

  getHomeListingDescription(property_id: string) {
    return this.http.get<ListingDescription>(`${this.rapidApi}properties/v3/detail?property_id=${property_id}`)
  }
}