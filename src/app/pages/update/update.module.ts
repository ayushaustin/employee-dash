import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { UpdateComponent } from './update.component'
import { ModalModule } from "ngx-bootstrap/modal";


const UPDATE_ROUTE = [{ path: "", component: UpdateComponent}];

@NgModule({
  declarations: [
   UpdateComponent
  ],
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(UPDATE_ROUTE),
    ModalModule.forRoot()
  ]
})
export class UpdateModule { }
