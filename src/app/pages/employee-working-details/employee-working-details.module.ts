import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { EmployeeWorkingDetailsComponent } from './employee-working-details.component'


const Employee_Working_Details_ROUTE = [{ path: "", component: EmployeeWorkingDetailsComponent,}];

@NgModule({
  declarations: [
    EmployeeWorkingDetailsComponent,
  ],
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(Employee_Working_Details_ROUTE)
  ]
})
export class EmployeeWorkingDetailsModule { }
