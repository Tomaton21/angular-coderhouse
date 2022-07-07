
import { Component, OnInit } from '@angular/core';
import { ListadoAlumnosService } from '../servicios/listado-alumnos.service';
import { Alumnos } from '../models/alumnos/alumnos';
@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.css']
})
export class ABMAlumnosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre'];
  listadoAlumnos:Alumnos[] = [];
  dataSource:any[] = [];
  constructor(private _AlumnosService: ListadoAlumnosService) {
    this.listadoAlumnos= _AlumnosService.obtenerListadoALumnos()
    this.dataSource = this.listadoAlumnos;
   }

  ngOnInit(): void {
  }
}

