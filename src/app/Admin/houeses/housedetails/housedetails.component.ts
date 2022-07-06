import { ComponentType } from '@angular/cdk/portal';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HouseService } from 'src/app/services/house.service';
import { HousedetailsService } from 'src/app/services/housedetails.service';

@Component({
  selector: 'app-housedetails',
  templateUrl: './housedetails.component.html',
  styleUrls: ['./housedetails.component.css']
})
export class HousedetailsComponent implements OnInit {
  //vitoto vua component
  @ViewChild('addhousedetails') adddetails!:TemplateRef<any>
  housedetailsForm!:FormGroup
  houses!:any[]
  constructor(private housedetailsservice:HousedetailsService,private dialog:MatDialog) { }
 

  ngOnInit(): void {
    // this.getHouse()
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
   const  formData = new FormData()
   formData.append(' bed_room',this.housedetailsForm.value. bed_room)
   formData.append(' setting_room',this.housedetailsForm.value. setting_room)
   formData.append(' dining',this.housedetailsForm.value. dining)
   formData.append(' toilet',this.housedetailsForm.value. toilet)
   formData.append(' house_id',this.housedetailsForm.value. house_id)
   console.log(formData)
   this.housedetailsservice.post(formData).subscribe((respond:any) =>{
     console.log(respond)
   })
 }
 open(){
  const config={
    width:'50%'
  }
  this.dialog.open(this.adddetails,config)
}
}

 



