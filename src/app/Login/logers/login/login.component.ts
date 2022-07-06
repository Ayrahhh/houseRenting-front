import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  //
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.formConfiguration()
  }

  formConfiguration(){
    this.loginForm = new FormGroup({
      email: new FormControl(null,Validators.required),
      pass: new FormControl(null,Validators.required)
    })
  }

  login(){
    console.log(this.loginForm.value.pass)
    this.userService.login(this.loginForm.value.email,this.loginForm.value.pass).subscribe((data:any)=>{
      if(data != null){
        //tunastore data zetu for temporary ili kuweza kumtambua alologin in session
        sessionStorage.setItem("user",JSON.stringify(data))
        if(data.role == "admin"){
          sessionStorage.setItem("user",data)
          this.router.navigateByUrl("navbar")
        }else{
          this.router.navigateByUrl("main/home")
        }
      }
      else{
        this.router.navigateByUrl("login")
      }
    })
  }

}
