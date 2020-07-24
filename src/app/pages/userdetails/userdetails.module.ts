import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { UserdetailsComponent } from './userdetails.component'


const USERDETAILS_ROUTE = [{ path: "", component: UserdetailsComponent}];

@NgModule({
  declarations: [
    UserdetailsComponent
  ],
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(USERDETAILS_ROUTE)
  ]
})
export class UserdetailsModule { }
