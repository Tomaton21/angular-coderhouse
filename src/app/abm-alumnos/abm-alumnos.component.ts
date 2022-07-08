
import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ListadoAlumnosService } from '../servicios/listado-alumnos.service';
import { Alumnos } from '../models/alumnos/alumnos';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.css']
})
export class ABMAlumnosComponent implements OnInit {

  columnsToDisplay: string[] = ['id', 'nombre', 'seleccionar'];
  listadoAlumnos:Alumnos[] = [];
  dataSource:any[] = [];
  constructor(private _AlumnosService: ListadoAlumnosService) {
    this.listadoAlumnos= _AlumnosService.obtenerListadoALumnos()
    this.dataSource = this.listadoAlumnos;
   }
  ngOnInit(): void {
  }
  buscar(){
    Swal.fire({
      title: 'Ingresar tu Github username',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Buscar',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        this._AlumnosService.obtenerNombreAlumno(login)
          .then(alumno => {
            Swal.fire({
              title: `Se encontro a los siguientes alumnos`,
              text: `${alumno.nombre} ${alumno.apellido}`,
            })
          })
          .catch(error => {
            Swal.fire(
              `No se encontro al alumno buscado: ${error}`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    })
  }
  seleccionar(index:number){
    Swal.fire({
      icon: 'success',
      title: 'Registrado con exito',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }
}


