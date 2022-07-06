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
import { NavbarComponent } from './Admin/bars/navbar/navbar.component';
import { UserComponent } from './Admin/users/user/user.component';
import { LoginComponent } from './Login/logers/login/login.component';
import { FormComponent } from './home/renter/form/form.component';
import { CustComponent } from './Admin/custs/cust/cust.component';
import { RentsComponent } from './Renting/renters/rents/rents.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegisterComponent},
  {path:'rent',component:RentComponent},
  {path:'main',component:MainlayeroutComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'room1',component:DoubleComponent},
      {path:'singleroom',component:SingleComponent},
      {path:'renterform',component:FormComponent},
      {path:'room2',component:FamilyComponent}] 
  },
  
  {path:'navbar',component:NavbarComponent,
    children:[
      {path:'houses',component:HouseComponent},
      {path:'housedetails',component:HousedetailsComponent},
     
      {path:'cust',component:CustComponent},
      {path:'user',component:UserComponent},
      {path:'renter',component:RentsComponent},
    ]
  },
  //
 {path:'**',redirectTo:'login',pathMatch:'full'}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
