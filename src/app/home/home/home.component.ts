import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HouseService } from 'src/app/services/house.service';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  houses!:any[]
  house:any
  rent=true
  constructor(private housesservice:HouseService,
    private dialog:MatDialog,
    private router:Router,private rentservice:RentService) { }
  @ViewChild('houseDetails') houseDetails!:TemplateRef<any>

  ngOnInit(): void {
    this.getHouses()
  }

  getHouses(){
    this.housesservice.get().subscribe((data:any) =>{
      this.houses = data
    })

  }
  try(house:any){
    this.housesservice.houteData = house
  }
  navigate(){
    this.router.navigateByUrl("rent")
  }
  houseDetail(house:any){
    this.house = house
    const confi ={
      width:'30%'
    }
    this.dialog.open(this.houseDetails,confi)
  }
}
