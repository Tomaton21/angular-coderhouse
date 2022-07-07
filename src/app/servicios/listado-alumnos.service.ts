import { Injectable } from '@angular/core';
import { Alumnos } from '../models/alumnos/alumnos';
import { Usuario } from '../models/usuarios/usuario';
@Injectable({
  providedIn: 'root'
})
export class ListadoAlumnosService {
  
  
  listado:Alumnos[] = [
    { id: 1, nombre: 'Tomas', apellido: 'Gonzalez' },
    { id: 2, nombre: 'Maria', apellido: 'Juarez' },
    { id: 3, nombre: 'Micaela', apellido: 'Sielas' },
    { id: 4, nombre: 'Jorge', apellido: 'Ramirez' },
  ];

  constructor() {
   }
   obtenerListadoALumnos(){
    return this.listado
   }
}
