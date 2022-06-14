import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainlayeroutComponent } from './Main/mainlayerout/mainlayerout.component';
import { DoubleComponent } from './double/double.component';
import { HomeComponent } from './home/home/home.component';
import { SingleComponent } from './singleroom/single/single.component';
import { FamilyComponent } from './family/family.component';
import { HouseComponent } from './Admin/houeses/house/house.component';
import { HousedetailsComponent } from './Admin/houeses/housedetails/housedetails.component';
import { RegisterComponent } from './Customer/registers/register/register.component';
import { RentComponent } from './Renting/renters/rent/rent.component';

const routes: Routes = [
  {path:'main',component:MainlayeroutComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'room1',component:DoubleComponent},
      {path:'singleroom',component:SingleComponent},
      {path:'room2',component:FamilyComponent}] 
  },
  {path:'houses',component:HouseComponent},
  {path:'housedetails',component:HousedetailsComponent},
  {path:'registration',component:RegisterComponent},
  {path:'rent',component:RentComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
