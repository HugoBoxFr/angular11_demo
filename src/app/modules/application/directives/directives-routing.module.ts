import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttributesComponent } from './attributes/attributes.component';
import { DirectivesComponent } from './directives.component';
import { StructuralsComponent } from './structurals/structurals.component';

const routes: Routes = [
  { path: '', component: DirectivesComponent },
  { path: 'structurals', component: StructuralsComponent },
  { path: 'attributes', component: AttributesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }
