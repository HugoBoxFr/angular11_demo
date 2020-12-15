import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindingsComponent } from './bindings/bindings.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { InteractionsComponent } from './interactions.component';
import { InterpolationsComponent } from './interpolations/interpolations.component';

const routes: Routes = [
  { path: '', component: InteractionsComponent, data: { animation: 'InteractionsPage' } },
  { path: 'interpolations', component: InterpolationsComponent, data: { animation: 'InterpolationsPage' } },
  { path: 'bindings', component: BindingsComponent, data: { animation: 'BindingsPage' } },
  { path: 'parent-child', component: InputOutputComponent, data: { animation: 'InputOutputPage' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InteractionsRoutingModule { }
