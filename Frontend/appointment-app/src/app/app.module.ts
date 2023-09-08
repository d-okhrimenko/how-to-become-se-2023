import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { HttpClientModule } from "@angular/common/http";
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    RegFormComponent,
    TestComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
