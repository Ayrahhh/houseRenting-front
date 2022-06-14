import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup
  constructor(private registrationservice:RegistrationService ) { }

  ngOnInit(): void {
    this.registerFormConfig()
  } 

  registerFormConfig(){
    this.registerForm = new FormGroup({
      firstname:new FormControl(null,[Validators.required]),
      lastname:new FormControl(null,[Validators.required]),
      country:new FormControl(null,[Validators.required]),
      address:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.required]),
      phone_no:new FormControl(null,[Validators.required])
    })
    
  }
  submit(){
    console.log(this.registerForm.value)
    this.registrationservice.post(this.registerForm.value).subscribe((res:any) =>{
      console.log(res)
    })
  }
}




// }