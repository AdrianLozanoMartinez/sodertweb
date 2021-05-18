import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipespersonalizar'   //Palabra que usaremos en el PIPE (pipespersonalizar)
})
export class PipespersonalizarPipe implements PipeTransform {

  transform(value: unknown, edad: number, activo: boolean, mensaje: string ): string {  //value: Valor. ...args: Une los demás argumentos. unknown: Que regresa, puede ser un string, arreglo de string (string[]) o número
    
    console.log(value);
    console.log({edad, activo, mensaje });
    
    
    return 'Lo que voy a regresar en forma de texto (string)';
  }

}
