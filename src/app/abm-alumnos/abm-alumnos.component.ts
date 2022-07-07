import { Component, OnInit } from '@angular/core';
import { Alumnos } from '../models/alumnos/alumnos';



const ELEMENT_DATA: Alumnos[] = [
  { id: 1, nombre: 'Tomas', apellido: 'Gonzalez' },
  { id: 2, nombre: 'Maria', apellido: 'Juarez' },
  { id: 3, nombre: 'Micaela', apellido: 'Sielas' },
  { id: 4, nombre: 'Jorge', apellido: 'Ramirez' },
];

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.css']
})
export class ABMAlumnosComponent implements OnInit {
  

  displayedColumns: string[] = ['id', 'nombre'];
  

  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
