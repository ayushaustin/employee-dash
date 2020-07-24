import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class EmployeeRegistrationService {

  constructor(private http: HttpClient) {}

  enroll(fd){
    console.log(fd)
    return this.http.post<any>("http://localhost:3005/employee/upload", fd) ;
  }


}
