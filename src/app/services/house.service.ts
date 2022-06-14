import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
 

  constructor(private http:HttpClient) { }

  post(house:any){
    return this.http.post("http://localhost:8080/house/post",house)
  }

  get(){
    return this.http.get("http://localhost:8080/house/get")
  }
}
