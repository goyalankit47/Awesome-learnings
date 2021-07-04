import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildCompo1Component } from './child-compo1/child-compo1.component';
import { ChildCompo2Component } from './child-compo2/child-compo2.component';

const routes: Routes = [
  {
    path: 'component-1',
    component: ChildCompo1Component
  },
  {
    path: 'component-2',
    component: ChildCompo2Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
