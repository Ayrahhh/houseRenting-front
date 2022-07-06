import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HouseService } from 'src/app/services/house.service';
import { RegistrationService } from 'src/app/services/registration.service';

import { RentService } from 'src/app/services/rent.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {
  @ViewChild('addrent') addrent!:TemplateRef<any>
  houseToRent:any
  rentForm!:FormGroup
  //call into arrays
  renters!:any[]
  rents!: any;
  rent!: any;
  norent = true
  customer_id:any
  constructor(private rentservice:RentService,
    private dialog:MatDialog,private houseservice:HouseService,
    private userservice:UserService,private router:Router) { }

  
 

  ngOnInit(): void {
    //
    var user = JSON.parse(sessionStorage.getItem("user")!)
    console.log(user)
    this.getCustomerByEmail(user.email)
    this.houseToRent = this.houseservice.houteData
    this.getrent()
    this.rentFormConfig()
  }
  rentFormConfig(){
    this.rentForm = new FormGroup({
      start_date: new FormControl(null, [Validators.required]),
      end_date: new  FormControl(null,[Validators.required]),
    })
  }
submit(){
  const values = this.rentForm.value
  values['house_id']= this.houseToRent.house_id
  values['customer_id'] = this.customer_id
  console.log(values)

  this.rentservice.post(values).subscribe((res:any) =>{
   this.router.navigateByUrl("main/home")
  })
} 
  getrent(){
    this.rentservice.get().subscribe((res:any) =>{
      this.renters = res
      console.log(this.renters)
    })
  }

  getCustomerByEmail(email:any){
    this.userservice.getCustomer(email).subscribe((data:any)=>{
      this.customer_id = data.id
      //
      this.rentservice.getRentByEmail(email).subscribe((res:any)=>{
        this.rent=res
        //if it will be not equal to null that means rent anayo tayari imeshakuwa booked
      if(this.rent != null){
        this.norent = false
      }
      console.log(this.rent)
      })
      
    })
  }

// }
// open(){
//   const config={
//     width:'50%'
//   }
//   this.dialog.open(this.addrent,config)
// }
}






