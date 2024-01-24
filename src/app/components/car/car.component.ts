import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';
import { CarDetail } from '../../models/carDetail';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit {
  cars:Car[]=[];
  dataLoaded=false;
  currentCar:Car;
  baseUrl="https://localhost:7015/images/";
  //carsDetail:CarDetail[];


  constructor(private carService:CarService, private activatedRoute:ActivatedRoute, private router:Router)
{

}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"]);
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"]);
      }
       else if(params["carId"]){
         const carId=+params['carId']
         this.getCarsById(carId);
      }
      else{
        this.getCars();
      }
    })
    //this.getCarsDetail();
  }
  getCars()
  {
    this.carService.getCars().subscribe(Response=>{
      this.cars=Response.data;
      this.dataLoaded=true;
    })
  }
  getCarsById(carId:number)
  {
    this.carService.getCarsById(carId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }
  
  getCarsByBrand(brandId:number)
  {
      this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }
  getCarsByColor(colorId:number)
  {
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }

  setCurrentCar(car:Car){
    this.currentCar=car;
    this.router.navigate(['/cars',car.carId]);
    
  }
  getCurrentCarClass(car:Car){
    if(car==this.currentCar){
      return "list-group-item active";
    }
    else{
      return "list-group-item";
    }
  }
  getAllCarClass()
  {
    if(!this.currentCar)
    {
      return "list-group-item active";
    }
    else{
      return "list-group-item";
    }
  }
  


}

