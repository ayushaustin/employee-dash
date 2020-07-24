import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { range } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(private http: HttpClient) {}

  enroll(User){
    return this.http.post<any>("http://localhost:3005/user", User) ;
  }

  fetch($event){
    return this.http.get<any>("http://localhost:3005/user/details/" +$event);

  }


}
