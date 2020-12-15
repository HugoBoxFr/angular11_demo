import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteractionsRoutingModule } from './interactions-routing.module';
import { InteractionsComponent } from './interactions.component';
import { InterpolationsComponent } from './interpolations/interpolations.component';
import { BindingsComponent } from './bindings/bindings.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InteractionsComponent,
    InterpolationsComponent,
    BindingsComponent,
    InputOutputComponent
  ],
  imports: [
    CommonModule,
    InteractionsRoutingModule,
    FormsModule
  ]
})
export class InteractionsModule { }
