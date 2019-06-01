import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Donut1Component } from './components/charts/donuts/donut1/donut1.component';
import { Treemap1Component } from './components/other/treemap1/treemap1.component';

const routes: Routes = [
  {path: "charts.donut1", component: Donut1Component},
  {path: "charts.treemap1", component: Treemap1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
