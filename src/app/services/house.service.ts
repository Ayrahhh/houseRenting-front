import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
 //
  houteData:any
  constructor(private http:HttpClient) { }

  post(house:any){
    return this.http.post("http://localhost:8080/house/post",house)
  }

  get(){
    return this.http.get("http://localhost:8080/house/get")
  }

  delete(id:any){
    return this.http.delete("http://localhost:8080/house/delete/"+id)
  }
  update(body:any){
    return this.http.put("http://localhost:8080/house/update",body)
  }
  getbyid(id:any){
    return this.http.get("http://localhost:8080/house/get/"+id)
  }
}
