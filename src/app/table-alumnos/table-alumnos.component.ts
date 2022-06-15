import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-alumnos',
  templateUrl: './table-alumnos.component.html',
  styleUrls: ['./table-alumnos.component.css']
})
export class TableAlumnosComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  Arrayalumnos= [
    {
      nombre: "Tomas",
      apellido: "Sielas",
      activo: true
    },
    {
      nombre: "Micaela",
      apellido: "Gonzalez",
      activo: false
    },
    {
      nombre: "Juan Carlos",
      apellido: "Lopez",
      activo: false
    },
    {
      nombre: "Mario Hugo",
      apellido: "Puentes",
      activo: true
    },
  ]
  
  /* Creado para hacer un crud de alumnos proximamente */
  public agregarAlumno(nombre: string,apellido: string,activo: boolean) {
    let alumno = new alumnos(nombre,apellido,activo)
  }
  
}

class alumnos {
  nombre: string | undefined;
  apellido: string;
  activo: boolean;
  constructor(nombre: string,apellido: string,activo: boolean) {
    this.nombre=nombre
    this.apellido=apellido
    this.activo=activo
    
  }
}