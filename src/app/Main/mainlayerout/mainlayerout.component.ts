import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RentComponent } from 'src/app/Renting/renters/rent/rent.component';

@Component({
  selector: 'app-mainlayerout',
  templateUrl: './mainlayerout.component.html',
  styleUrls: ['./mainlayerout.component.css']
})
export class MainlayeroutComponent implements OnInit {

  constructor(private router:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  viewRent(){
    const config={
      width:'100%'
    }
    this.dialog.open(RentComponent,config)
  }
  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl("/login")
  }
}
