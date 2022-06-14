import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HouseService } from 'src/app/services/house.service';
import { HousedetailsService } from 'src/app/services/housedetails.service';

@Component({
  selector: 'app-housedetails',
  templateUrl: './housedetails.component.html',
  styleUrls: ['./housedetails.component.css']
})
export class HousedetailsComponent implements OnInit {
  housedetailsForm!:FormGroup
  houses!:any[]
  constructor(private housedetailsservice:HousedetailsService,private houseservice:HouseService) { }
 

  ngOnInit(): void {
    this.getHouse()
    this.housedetailsFormConfig()
  }
  housedetailsFormConfig(){
    this.housedetailsForm = new FormGroup({
      bed_room:new FormControl(null,[Validators.required]),
      setting_room:new FormControl(null,[Validators.required]),
      dining:new FormControl(null,[Validators.required]),
      toilet:new FormControl(null,  [Validators.required]),
      house_id:new FormControl(null,Validators.required)
    })
  }
  submit(){
    console.log(this.housedetailsForm.value)
    this.housedetailsservice.post(this.housedetailsForm.value).subscribe((respond:any) =>{
      console.log(respond)
    })
  }
  getHouse(){
    this.houseservice.get().subscribe((respo:any) =>{
      this.houses = respo
    })
  }
}

