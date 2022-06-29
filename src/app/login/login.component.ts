import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario = this.fb.group({
    username: ['',Validators.required],
    password: ['',Validators.required],
  })
  errorMensajes(){
    
  }
  onSubmit() {
    if (!this.formulario.invalid) {
      Swal.fire({
        icon: 'success',
        title: 'Logeado con exito',
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
        title: 'Error al ingresar, corrija los errores marcados',
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
