import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class EmployeeWorkingDetailsService {

  constructor(private http: HttpClient) {}

  enroll(empwork){
    return this.http.post<any>("http://localhost:3005/empwork", empwork) ;
  }


}
