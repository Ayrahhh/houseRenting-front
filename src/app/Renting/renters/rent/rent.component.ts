import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { start } from 'repl';
import { RegistrationService } from 'src/app/services/registration.service';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {
  rentForm!:FormGroup
  //call into arrays
  renters!:any[]
  constructor(private rentservice:RentService,registrationservice:RegistrationService) { }

  ngOnInit(): void {
    this.getrent()
    this.rentFormConfig()
  }
  rentFormConfig(){
    this.rentForm = new FormGroup({
      // start-Date: new FormControl(null, [Validators.required]),
      // end-Date: new  FormControl(null,[Validators.required]),
      customer_id: new  FormControl(null,[Validators.required]),
      house_id: new  FormControl(null,[Validators.required]),

    })
  }
submit(){
  console.log(this.rentForm.value)
  this.rentservice.post(this.rentForm.value).subscribe((res:any) =>{
    console.log(res)
  })
} 
  getrent(){
    this.rentservice.get().subscribe((res:any) =>{
      this.renters = res
    })
  }

}



