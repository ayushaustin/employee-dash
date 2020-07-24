import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { LinegraphComponent } from './linegraph.component'
import { ModalModule } from "ngx-bootstrap/modal";
import {NgSelectModule} from "@ng-select/ng-select";


const LINEGRAPH_ROUTE = [{ path: "", component: LinegraphComponent}];

@NgModule({
  declarations: [
    LinegraphComponent,

  ],
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(LINEGRAPH_ROUTE),
    ModalModule.forRoot(),NgSelectModule
  ]
})
export class LinegraphModule { }


