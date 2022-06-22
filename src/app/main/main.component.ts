import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Usuario } from '../models/usuario';
import 'animate.css';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 
  usuarioModel: Usuario = new Usuario('','','','','')
  formulario = this.fb.group({
      username: ['',[Validators.required], Validators.minLength(3)],
      password: ['',[Validators.required, Validators.minLength(8)]],
      nombre: ['',[Validators.required]],
      apellido: ['',[Validators.required]],
      email: ['',[Validators.required]],
    })
    
    onSubmit() {
      if (!this.formulario.invalid) {
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
      else{
        Swal.fire({
          icon: 'error',
          title: 'Error al registrar usuario, corrija los errores marcados',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      }
      
  }
  
  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
  }

}
