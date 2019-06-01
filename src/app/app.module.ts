import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bootstrap4MenuDropDownDirective } from './directives/bootstrap4MenuDropDown.directive';
import { Donut1Component } from './components/charts/donuts/donut1/donut1.component';
import { Treemap1Component } from './components/other/treemap1/treemap1.component';

@NgModule({
  declarations: [
    AppComponent, Bootstrap4MenuDropDownDirective, Donut1Component, Treemap1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
