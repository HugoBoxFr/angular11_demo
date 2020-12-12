import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapDemoComponent } from './bootstrap-demo.component';
import { BootstrapDemoRoutingModule } from './bootstrap-demo-routing.module';



@NgModule({
  declarations: [BootstrapDemoComponent],
  exports: [
    BootstrapDemoComponent
  ],
  imports: [
    CommonModule,
    BootstrapDemoRoutingModule
  ]
})
export class BootstrapDemoModule { }
