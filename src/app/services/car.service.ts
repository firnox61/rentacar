import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
apiUrl="https://localhost:7015/api/cars/getcardetails";
  constructor(private httpClient:HttpClient) { }
  getCarsDetail():Observable<ListResponseModel<Car>>//senkron gelen metodu http ile talep ettiğimizde asenkron bir işlem olduğundan observable
  {
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl);
  }
}
