import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BindingsRoutingModule } from './bindings-routing.module';
import { BindingsComponent } from './bindings.component';
import { InterpolationsComponent } from './interpolations/interpolations.component';


@NgModule({
  declarations: [
    InterpolationsComponent,
    BindingsComponent
  ],
  imports: [
    CommonModule,
    BindingsRoutingModule
  ]
})
export class BindingsModule { }
