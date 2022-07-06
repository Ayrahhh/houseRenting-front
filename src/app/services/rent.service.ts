import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentService {
  
  constructor(private http:HttpClient) { }
  post(rent:any){
    return this.http.post("http://localhost:8080/rent/post",rent)
  }
  get(){
    return this.http.get("http://localhost:8080/rent/get")

  }
  getRentByEmail(email:string){
    return this.http.get("http://localhost:8080/rent/get/"+email)
  }
}



