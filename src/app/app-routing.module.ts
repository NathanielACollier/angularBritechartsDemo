import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Donut1Component } from './components/charts/donuts/donut1/donut1.component';

const routes: Routes = [
  {path: "charts.donut1", component: Donut1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
