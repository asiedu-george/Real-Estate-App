import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { HomeSearchResult } from '../../interface/listing';

@Injectable({
  providedIn: 'root'
})
export class HomeListingService {
  protected rapidApi = environment.baseUrl

  constructor(private http: HttpClient) { }

  getForSaleListing(): Observable<HomeSearchResult> {
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

    return this.http.post<HomeSearchResult>(`${this.rapidApi}properties/v3/list`, body);
  }

  getForRentListing(): Observable<HomeSearchResult> {
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

    return this.http.post<HomeSearchResult>(`${this.rapidApi}properties/v3/list`, body);
  }

  getSoldListing(): Observable<HomeSearchResult> {
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

    return this.http.post<HomeSearchResult>(`${this.rapidApi}properties/v3/list`, body);
  }
}