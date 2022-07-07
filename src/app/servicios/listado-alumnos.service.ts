import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListadoAlumnosService {
  listado(){
    return [
      { id: 1, nombre: 'Tomas', apellido: 'Gonzalez' },
      { id: 2, nombre: 'Maria', apellido: 'Juarez' },
      { id: 3, nombre: 'Micaela', apellido: 'Sielas' },
      { id: 4, nombre: 'Jorge', apellido: 'Ramirez' },
    ];
  }
  constructor() { }
}
