import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { DirectivesRoutingModule } from './directives-routing.module';
import { StructuralsComponent } from './structurals/structurals.component';
import { AttributesComponent } from './attributes/attributes.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DirectivesComponent, StructuralsComponent, AttributesComponent],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    FormsModule
  ]
})
export class DirectivesModule { }
