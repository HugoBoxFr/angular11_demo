import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttributesComponent } from './attributes/attributes.component';
import { CustomsComponent } from './customs/customs.component';
import { DirectivesComponent } from './directives.component';
import { StructuralsComponent } from './structurals/structurals.component';

const routes: Routes = [
  { path: '', component: DirectivesComponent },
  { path: 'structurals', component: StructuralsComponent },
  { path: 'attributes', component: AttributesComponent },
  { path: 'customs', component: CustomsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }
