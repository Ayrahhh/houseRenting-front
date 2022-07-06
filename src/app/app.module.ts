import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainlayeroutComponent } from './Main/mainlayerout/mainlayerout.component';
import { DoubleComponent } from './double/double.component';
import { HomeComponent } from './home/home/home.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog";
import { DialogComponent } from './dialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";
import { SingleComponent } from './singleroom/single/single.component';
import { FamilyComponent } from './family/family.component';
import { HouseComponent } from './Admin/houeses/house/house.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HousedetailsComponent } from './Admin/houeses/housedetails/housedetails.component';
import { RegisterComponent } from './Customer/registers/register/register.component';
import { RentComponent } from './Renting/renters/rent/rent.component';
import { NavbarComponent } from './Admin/bars/navbar/navbar.component';
import { UserComponent } from './Admin/users/user/user.component';
import { LoginComponent } from './Login/logers/login/login.component';
import { FormComponent } from './home/renter/form/form.component';
import { CustComponent } from './Admin/custs/cust/cust.component';
import { RentsComponent } from './Renting/renters/rents/rents.component';

@NgModule({
  declarations: [
    AppComponent,
    MainlayeroutComponent,
    DoubleComponent,
    HomeComponent,
    DialogComponent,
    SingleComponent,
    FamilyComponent,
    HouseComponent,
    HousedetailsComponent,
    RegisterComponent,
    RentComponent,
    NavbarComponent,
    UserComponent,
    LoginComponent,
    FormComponent,
    CustComponent,
    RentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
