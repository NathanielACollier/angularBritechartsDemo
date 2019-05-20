import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bootstrap4MenuDropDownDirective } from './directives/bootstrap4MenuDropDown.directive';

@NgModule({
  declarations: [
    AppComponent, Bootstrap4MenuDropDownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
