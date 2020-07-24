import { Injectable, APP_ID } from '@angular/core';
import { HttpClient } from "@angular/common/http"



@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http: HttpClient) {}

  enroll(_Id,user){

    return this.http.put<any>("http://localhost:3005/user/" + _Id,user) ;
  }



  fetch() {
    console.log("user registration");
    return this.http.get<any>("http://localhost:3005/user");

  }
  fetchId( _Id){
    console.log("");
    return this.http.get<any>("http://localhost:3005/user/" + _Id);

  }

  deleteData(_id){
    console.log("delete row");
    return this.http.delete<any>("http://localhost:3005/user/" + _id);
  }
  // editData(_id){
  //   console.log("edit row");
  //   return this.http.put<any>("http://localhost:3005/user/" + _id);
  // }
}
