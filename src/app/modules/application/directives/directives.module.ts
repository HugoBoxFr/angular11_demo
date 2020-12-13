import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { DirectivesRoutingModule } from './directives-routing.module';
import { StructuralsComponent } from './structurals/structurals.component';
import { AttributesComponent } from './attributes/attributes.component';
import { FormsModule } from '@angular/forms';
import { CustomsComponent } from './customs/customs.component';
import { CustomPDirective } from './customs/custom-p.directive';
import { CustomBtnDirective } from './customs/custom-btn.directive';
import { CustomImgDirective } from './customs/custom-img.directive';


@NgModule({
  declarations: [
    DirectivesComponent,
    StructuralsComponent,
    AttributesComponent,
    CustomsComponent,
    CustomPDirective,
    CustomBtnDirective,
    CustomImgDirective
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    FormsModule
  ]
})
export class DirectivesModule { }
