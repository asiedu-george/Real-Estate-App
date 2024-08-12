import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HomeData, HomeListingResponse } from '../../interface/home-listing';

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
}