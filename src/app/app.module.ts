import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialFlatModule } from './modules/material-flat/material-flat.module';
import { LoginComponent } from './login/login.component';
import { FormUsuariosComponent } from './form-usuarios/form-usuarios.component';
import { ABMAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { NombreCompletoPipePipe } from './pipes/nombre-completo-pipe.pipe';
import { ListadoAlumnosService } from './servicios/listado-alumnos.service';

const instanciarServicio = new ListadoAlumnosService

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    FormUsuariosComponent,
    ABMAlumnosComponent,
    NombreCompletoPipePipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialFlatModule,
  ],
  providers: [{
    provide: ListadoAlumnosService, useExisting: instanciarServicio
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
