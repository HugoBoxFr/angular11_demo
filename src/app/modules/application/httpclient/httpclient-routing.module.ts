import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpclientComponent } from './httpclient.component';

const routes: Routes = [
  { path: '', component: HttpclientComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpclientRoutingModule { }
