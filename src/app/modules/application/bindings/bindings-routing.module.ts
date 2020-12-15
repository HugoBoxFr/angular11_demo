import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindingsComponent } from './bindings.component';
import { InterpolationsComponent } from './interpolations/interpolations.component';

const routes: Routes = [
  { path: '', component: BindingsComponent, data: { animation: 'InteractionsPage' } },
  { path: 'interpolations', component: InterpolationsComponent, data: { animation: 'InterpolationsPage' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BindingsRoutingModule { }
