import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './modules/general/about/about.component';
import { ContactComponent } from './modules/general/contact/contact.component';
import { DemoComponent } from './modules/general/demo/demo.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: 'demo', component: DemoComponent, data: {animation: 'DemoPage'}  },
  { path: 'about', component: AboutComponent, data: {animation: 'AboutPage'} },
  { path: 'contact', component: ContactComponent, data: {animation: 'ContactPage'} },
  {
    path: 'bootstrap',
    loadChildren: () => import('./modules/application/bootstrap-demo/bootstrap-demo.module')
    .then(mod => mod.BootstrapDemoModule)
  },
  {
    path: 'interactions',
    loadChildren: () => import('./modules/application/bindings/bindings.module')
    .then(mod => mod.BindingsModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./modules/application/forms/forms.module')
    .then(mod => mod.FormsModule)
  },
  {
    path: 'directives',
    loadChildren: () => import('./modules/application/directives/directives.module')
    .then(mod => mod.DirectivesModule)
  },
  {
    path: 'chartjs',
    loadChildren: () => import('./modules/application/chartjs/chartjs.module')
    .then(mod => mod.ChartjsModule)
  },
  {
    path: 'httpclient',
    loadChildren: () => import('./modules/application/httpclient/httpclient.module')
    .then(mod => mod.HttpclientModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./modules/application/services/services.module')
    .then(mod => mod.ServicesModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./modules/application/calendar/calendar.module')
    .then(mod => mod.CalendarModule)
  },
  {
    path: 'crud',
    loadChildren: () => import('./modules/application/crud/crud.module')
    .then(mod => mod.CrudModule)
  },
  {
    path: 'dragAndDrop',
    loadChildren: () => import('./modules/application/drag-and-drop/drag-and-drop.module')
    .then(mod => mod.DragAndDropModule)
  },
  {
    path: 'router',
    loadChildren: () => import('./modules/application/router/router.module')
    .then(mod => mod.RouterModule)
  },
  {
    path: 'authentication',
    loadChildren: () => import('./modules/application/authentication/authentication.module')
    .then(mod => mod.AuthenticationModule)
  },
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
