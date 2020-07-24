import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class LinegraphService {

  constructor(private http: HttpClient) {}

  enroll(User){
    return this.http.post<any>("http://localhost:3005/user", User) ;
  }


}
