import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  houseForm!:FormGroup
  houses!:any[]
  constructor(private houseservice:HouseService) { }


  ngOnInit(): void {
    this.houseFormConfig()
    this.gethouse()
  }

  houseFormConfig(){
    this.houseForm = new FormGroup({
      house_owner:new FormControl(null,[Validators.required]),
      location:new FormControl(null,[Validators.required]),
      house_no:new FormControl(null,[Validators.required]),
      category:new FormControl(null,[Validators.required])
    })
  }
  submit(){
    console.log(this.houseForm.value)
    this.houseservice.post(this.houseForm.value).subscribe((respond:any) =>{
      console.log(respond)
    })
  }
  gethouse(){
    this.houseservice.get().subscribe((res:any) =>{
      this.houses =res;
    })
  }


}
