import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreCompletoPipe'
})
export class NombreCompletoPipePipe implements PipeTransform {

  transform(nombre: string,apellido: string): unknown {
    return nombre+" "+ apellido;
  }

}
