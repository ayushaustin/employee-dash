import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { EmployeeRegistrationComponent } from './employee-registration.component'


const EMPLOYEE_REGISTRATION_ROUTE = [{ path: "", component: EmployeeRegistrationComponent}];

@NgModule({
  declarations: [
    EmployeeRegistrationComponent
  ],
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(EMPLOYEE_REGISTRATION_ROUTE)
  ]
})
export class EmployeeRegistrationModule { }
