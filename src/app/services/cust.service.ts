import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustService {
  //
rentsData:any
  constructor(private http:HttpClient) { }

  post(customer:any){
    return this.http.post("http://localhost:8080/customer/post",customer)
  }
  get(){
    return this.http.get("http://localhost:8080/customer/get")
  }
  delete(id:any){
    return this.http.delete("http://localhost:8080/customer/delete/"+id)
  }
  update(body:any){
    return this.http.put("http://localhost:8080/customer/update",body)
  }
}


