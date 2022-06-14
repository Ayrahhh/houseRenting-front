
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { HomeComponent } from '../home/home/home.component';

@Component({
  selector: 'app-double',
  templateUrl: './double.component.html',
  styleUrls: ['./double.component.css']
})
export class DoubleComponent implements OnInit {
  @ViewChild('register') register!:TemplateRef<any>  
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
 
  registerForm(){
    const dialogConf ={
      width:'50%',
      panelClass:['animate_animated','animate_slideInRight']
      
    }
    this.dialog.open(this.register,dialogConf)
  }
}
