import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttributesComponent } from './attributes/attributes.component';
import { CustomsComponent } from './customs/customs.component';
import { DirectivesComponent } from './directives.component';
import { StructuralsComponent } from './structurals/structurals.component';

const routes: Routes = [
  { path: '', component: DirectivesComponent, data: {animation: 'DirectivesPage'}, },
  { path: 'structurals', component: StructuralsComponent, data: {animation: 'StructuralsPage'}, },
  { path: 'attributes', component: AttributesComponent, data: {animation: 'AttributesPage'}, },
  { path: 'customs', component: CustomsComponent, data: {animation: 'CustomsPage'}, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }
