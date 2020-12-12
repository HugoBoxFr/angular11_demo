import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindingsComponent } from './bindings.component';

const routes: Routes = [
  { path: '', component: BindingsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BindingsRoutingModule { }
