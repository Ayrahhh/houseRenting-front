import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('addcustomer') addcustomer!:TemplateRef<any>
  registerForm!:FormGroup
  registration: any;
  constructor(private registrationservice:RegistrationService,private dialog:MatDialog,private router:Router ) { }

  ngOnInit(): void {
    this.registerFormConfig()
    // this.getregistration()
  } 
 

  registerFormConfig(){
    this.registerForm = new FormGroup({
      firstname:new FormControl(null,[Validators.required]),
      lastname:new FormControl(null,[Validators.required]),
      country:new FormControl(null,[Validators.required]),
      address:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required]),
      phone_no:new FormControl(null,[Validators.required])
    })
    
  }
  submit(){
   
    this.registrationservice.post(this.registerForm.value).subscribe((res:any) =>{
      console.log(res)
      this.registerForm.reset()
      this.router.navigateByUrl("login")
    })
  }
// getregistration(){
//   this.registrationservice.get.subsribe((res:any)=>{
//     this.registration = res;
  
//   })



  

  open(){
    const config={
      width:'50%'
    }
    this.dialog.open(this.addcustomer,config)
  }
}




