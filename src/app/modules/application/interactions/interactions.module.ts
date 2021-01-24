import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteractionsRoutingModule } from './interactions-routing.module';
import { InteractionsComponent } from './interactions.component';
import { InterpolationsComponent } from './interpolations/interpolations.component';
import { BindingsComponent } from './bindings/bindings.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './input-output/parent/parent.component';
import { ChildComponent } from './input-output/child/child.component';
import { ChatboxComponent } from './input-output/chatbox/chatbox.component';

@NgModule({
  declarations: [
    InteractionsComponent,
    InterpolationsComponent,
    BindingsComponent,
    InputOutputComponent,
    ParentComponent,
    ChildComponent,
    ChatboxComponent
  ],
  imports: [
    CommonModule,
    InteractionsRoutingModule,
    FormsModule
  ]
})
export class InteractionsModule { }
