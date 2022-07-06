import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RentComponent } from 'src/app/Renting/renters/rent/rent.component';
import { RentsComponent } from 'src/app/Renting/renters/rents/rents.component';
import { CustService } from 'src/app/services/cust.service';
import { RentsService } from 'src/app/services/rents.service';

@Component({
  selector: 'app-cust',
  templateUrl: './cust.component.html',
  styleUrls: ['./cust.component.css']
})
export class CustComponent implements OnInit {
  //insert fiekd into array
custs!:any[]

  constructor(private custservice:CustService) { }

  ngOnInit(): void {
    
    this.getcust()
  }
 
    getcust(){
      this.custservice.get().subscribe((res:any)=>{
        this.custs =res;
      })
    }


  }
  //login inakataa mpk nisugn in,
  //kwenye cust phone haingii
  //status taken ata km haijawa rented how
  //ile rent kuwa highlihgt nimesahau
  //na iyo kuweza kurud nyuma within a page,i mean no security(session destroy if am not mistaken)

 

