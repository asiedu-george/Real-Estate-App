import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HomeData, HomeListingResponse } from '../../interface/home-listing';
import { DescriptionData } from '../../interface/listing-description';

@Injectable({
  providedIn: 'root'
})
export class HomeListingService {
  protected rapidApi = environment.baseUrl

  constructor(private http: HttpClient) { }

  getForSaleListing() {
    const body = {
      limit: 200,
      offset: 0,
      postal_code: '90004',
      status: ['for_sale'],
      sort: {
        direction: 'desc',
        field: 'list_date'
      }
    };

    return this.http.post<HomeListingResponse>(`${this.rapidApi}properties/v3/list`, body)
  }

  getForRentListing() {
    const body = {
      limit: 200,
      offset: 0,
      postal_code: '90004',
      status: ['for_rent'],
      sort: {
        direction: 'desc',
        field: 'list_date'
      }
    };

    return this.http.post<HomeData>(`${this.rapidApi}properties/v3/list`, body);
  }

  getSoldListing() {
    const body = {
      limit: 200,
      offset: 0,
      postal_code: '90004',
      status: ['sold'],
      sort: {
        direction: 'desc',
        field: 'list_date'
      }
    };

    return this.http.post<HomeData>(`${this.rapidApi}properties/v3/list`, body);
  }

  getHomeListingDescription(property_id: string, listing_id?: string) {
    return this.http.get<DescriptionData>(`${this.rapidApi}properties/v3/detail?${property_id}&${listing_id}`)
  }
}