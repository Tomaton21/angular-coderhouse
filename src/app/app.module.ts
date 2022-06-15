import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableAlumnosComponent } from './table-alumnos/table-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    TableAlumnosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
