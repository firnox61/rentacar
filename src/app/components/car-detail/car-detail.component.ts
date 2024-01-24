import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from '../../models/carDetail';
import { CarDetailService } from '../../services/car-detail.service';
import { Car } from '../../models/car';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.css'
})
export class CarDetailComponent implements OnInit {

carsDetail:CarDetail[]=[];
carsDetailcar:CarDetail;
dataLoaded=false;


baseUrl="https://localhost:7015/images/";

    constructor(private carDetailService:CarDetailService, private activatedRoute:ActivatedRoute)
    {

    }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        const carId = +params['carId'];
        this.getCarsDetailByCar(carId);
      } else {
        this.getCarsDetail();
      }
    });
  }

getCarsDetailByCar(carId:number)
  {
    this.carDetailService.getCarsDetailByCar(carId).subscribe(response=>{
      this.carsDetailcar=response.data;
      this.dataLoaded=true;
    })
  }

getCarsDetail()
  {
    this.carDetailService.getCarsDetail().subscribe(response=>{
      this.carsDetail=response.data;
      this.dataLoaded=true;
    })
  }





  
}
