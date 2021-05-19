import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipespersonalizaocultar'
})
export class PipespersonalizaocultarPipe implements PipeTransform {

  transform( value: string, variable_mostrar: boolean = true ): string {
    return ( variable_mostrar) ? '*'.repeat( value.length ) : value; 
//si variable_mostrar en true voy a colocar * repitiendo de lo largo que tenga el valor (value.length)
//En caso contrario (: value) mostramos el valor
  }

}
