import { Component, OnInit } from '@angular/core';
import { Rental } from '../../models/rental';
import { RentalService } from '../../services/rental.service';
import { RentalDetail } from '../../models/rentalDetail';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css'
})
export class RentalComponent implements OnInit {
  rentals:Rental[]=[];
dataLoaded=false;
constructor(private rentalService:RentalService)
{

}
  ngOnInit(): void {
    this.getRentalsDetail();
  }
  getRentalsDetail()
  {
    this.rentalService.getRentalsDetail().subscribe(Response=>{
      this.rentals=Response.data;
      this.dataLoaded=true;
    })
  }

}
