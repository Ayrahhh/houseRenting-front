import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  @ViewChild('addhouse') addhouse!:TemplateRef<any>
  @ViewChild('updateform') updateform!: TemplateRef<any>
  public selectedFile: any
  houseForm!:FormGroup
  updateFormGroup!:FormGroup
  //
  houses!:any[]
  dialogRef!:MatDialogRef<HouseComponent>
  constructor(private houseservice:HouseService,private dialog:MatDialog) { }


  ngOnInit(): void {
    this.houseFormConfig()
    this.updatehouseFormConfig()
    this.gethouse()
  }

  houseFormConfig(){
    this.houseForm = new FormGroup({
      house_id:new FormControl(null),
      house_owner:new FormControl(null,[Validators.required]),
      location:new FormControl(null,[Validators.required]),
      house_no:new FormControl(null,[Validators.required]),
      category:new FormControl(null,[Validators.required]),
      price_per_month:new FormControl(null,[Validators.required]),
      image:new FormControl(null,Validators.required)
    })
  }

  updatehouseFormConfig(){
    this.updateFormGroup = new FormGroup({
      house_id:new FormControl(null),
      house_owner:new FormControl(null,[Validators.required]),
      location:new FormControl(null,[Validators.required]),
      house_no:new FormControl(null,[Validators.required]),
      category:new FormControl(null,[Validators.required]),
      price_per_month:new FormControl(null,[Validators.required]),
      image:new FormControl(null,Validators.required)
    })
  }
  
  submit(){
    const formData = new FormData()
    formData.append('house_owner',this.houseForm.value.house_owner)
    formData.append('location',this.houseForm.value.location)
    formData.append('house_no',this.houseForm.value.house_no)
    formData.append('category',this.houseForm.value.category)
    formData.append('price_per_month',this.houseForm.value.price_per_month)
    formData.append('image',this.selectedFile)
    console.log(formData)
    this.houseservice.post(formData).subscribe((respond:any) =>{
      this.gethouse()
      this.houseForm.reset()
      this.dialogRef.close()
    })
  }
  gethouse(){
    this.houseservice.get().subscribe((res:any) =>{
      this.houses =res;
    })
  }
  open(){
    const config={
      width:'50%'
    }
    this.dialogRef = this.dialog.open(this.addhouse,config)
  }

  onFileChanged(event:any){
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.selectedFile = file
    }
  }

  delete(id:any){
    this.houseservice.delete(id).subscribe((re:any)=>{
      this.gethouse()
    })
  }

  

  getbyid(id:any){
    this.houseservice.getbyid(id).subscribe((res:any)=>{
      // Object.keys(res).forEach((key:any) =>{
      //   if(this.houseForm.value.hasOwnProperty(key)){
      //     this.houseForm.get(key)?.setValue(res[key])
      //   }
      // })
      this.updateFormGroup.get("house_id")?.setValue(res.house_id)
      this.updateFormGroup.get("house_owner")?.setValue(res.house_owner)
      this.updateFormGroup.get("location")?.setValue(res.location)
      this.updateFormGroup.get("category")?.setValue(res.category)
      this.updateFormGroup.get("house_no")?.setValue(res.house_no)
      this.updateFormGroup.get("price_per_month")?.setValue(res.price_per_month)
      this.updateFormGroup.get("image")?.setValue("")

     
    })
    const config={
      width:'50%'
    }
    this.dialogRef = this.dialog.open(this.updateform,config)
  
  }


  update(){
    console.log(this.updateFormGroup.value)
    const formData = new FormData()
    formData.append('house_id',this.updateFormGroup.value.house_id)
    formData.append('house_owner',this.updateFormGroup.value.house_owner)
    formData.append('location',this.updateFormGroup.value.location)
    formData.append('house_no',this.updateFormGroup.value.house_no)
    formData.append('category',this.updateFormGroup.value.category)
    formData.append('price_per_month',this.updateFormGroup.value.price_per_month)
    formData.append('image',this.selectedFile)
    console.log(formData)
    this.houseservice.update(formData).subscribe((respond:any) =>{
      this.gethouse()
      this.houseForm.reset()
      this.dialogRef.close()
    })
  }
}
