import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { GraphComponent } from './graph.component'
import { ModalModule } from "ngx-bootstrap/modal";
import {NgSelectModule} from "@ng-select/ng-select";


const GRAPH_ROUTE = [{ path: "", component: GraphComponent}];

@NgModule({
  declarations: [
    GraphComponent,

  ],
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(GRAPH_ROUTE),
    ModalModule.forRoot(),NgSelectModule
  ]
})
export class GraphModule { }
