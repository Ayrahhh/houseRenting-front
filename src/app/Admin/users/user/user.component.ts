import { ComponentType } from '@angular/cdk/portal';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild('adduser') adduser!:TemplateRef<any>
  userForm!:FormGroup
  user: any
  constructor(private userservices:UserService,private dialog:MatDialog){ }
 

  ngOnInit(): void {
    this.userFormConfig()

  } 

  userFormConfig()
{
  this.userForm = new FormGroup({
    username:new FormControl(null,[Validators.required]),
    password:new FormControl(null,[Validators.required]),
   email:new FormControl(null,[Validators.required]),
  })
}
submit(){
  const formData = new FormData()
  formData.append('username',this.userForm.value.username)
  formData.append('password',this.userForm.value.password)
  formData.append('email',this.userForm.value.lemail)

  console.log(formData)
  this.userservices.post(formData).subscribe((res:any) =>{
    console.log(res)
  })
}







 

open(){
  const config={
    width:'50%'
  }
  this.dialog.open(this.adduser,config)
}


}

