import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  get() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  post(register:any){
    return this.http.post("http://localhost:8080/customer/post",register)
  }
  getregistration(){
    return this.http.get("")
  }
}



