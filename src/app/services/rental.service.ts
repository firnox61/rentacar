import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:7015/api/rentals/getrentaldetails";
  constructor(private httpClient:HttpClient) { }
  getRentalsDetail():Observable<ListResponseModel<Rental>>
  {
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl)
  }
}
