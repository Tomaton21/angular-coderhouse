export class Usuario {    
  username?: string;
  password?: string;
  nombre?: string;
  apellido?: string;
  email?: string;
  constructor(username: string,password: string,nombre: string,apellido: string, email:string) {
    this.username=username
    this.password=password
    this.nombre=nombre
    this.apellido=apellido
    this.email=email
    
  }
}
