
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-double',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  @ViewChild('register') register!:TemplateRef<any>
  constructor(private dialog:MatDialog){}
  ngOnInit() :void {

  }
  image=[
    {src:"assets/images/d1.jpg"},
    {src:"assets/images/d2.jpg"},
    {src:"assets/images/d3.jpg"},
    {src:"assets/images/d4.jpg"},
   
  ]
  registerForm(){
    const dialogConf ={
      width:'50%',
      panelClass:['animate_animated','animate_slideRight']
    }
    this.dialog.open(this.register,dialogConf)
  }
}
