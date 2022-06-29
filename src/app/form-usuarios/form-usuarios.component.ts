import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Usuario } from '../models/usuarios/usuario';

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.css']
})
export class FormUsuariosComponent implements OnInit {
  usuarioModel: Usuario = new Usuario('', '', '', '', '')
  formulario = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
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
    else {
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
