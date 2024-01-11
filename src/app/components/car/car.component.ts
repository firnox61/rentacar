import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';
import { CarDetail } from '../../models/carDetail';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit {
  cars:Car[]=[];
  dataLoaded=false;



  constructor(private carService:CarService)
{

}

  ngOnInit(): void {
    this.getCarsDetail();
  }
  getCarsDetail()
  {
    this.carService.getCarsDetail().subscribe(Response=>{
      this.cars=Response.data;
      this.dataLoaded=true;
    })
  }

}

