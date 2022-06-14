import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HousedetailsService {
  
constructor(private http:HttpClient) { }
  post(housedetail:any){
    return this.http.post("http://localhost:8080/housedetail/post",housedetail)
  }
  get(){
    return this.http.get("")
  }
}







