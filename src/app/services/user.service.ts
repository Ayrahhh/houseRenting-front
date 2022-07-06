import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  post(user:any){
    return this.http.post("http://localhost:8080/user/post",user)
  }
  get(){
    return this.http.get("http://localhost:8080/user/get")
  }

  login(email:string,pass:string){
    return this.http.get("http://localhost:8080/user/login/email/"+email+"/pass/"+pass)
  }

  getCustomer(email:any){
    return  this.http.get("http://localhost:8080/customer/email/"+email)
  }
}


