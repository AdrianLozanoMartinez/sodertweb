import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciodepruebaService {

  private nombre_variable_servicio: nombre_interface_servicio[] = [
    {
        VariableSecundaria1: "Datos1.1",
        VariableSecundaria2: "Datos1.2",
        DireccionImagen: "../../../../../../assets/imagenes/Angular.png",
        VariableSecundaria3: "Datos1.3",
        VariableSecundaria4:"html"
    },
    {
        VariableSecundaria1: "Datos2.2",
        VariableSecundaria2: "Datos2.2",
        DireccionImagen: "../../../../../../assets/imagenes/typescript.png",
        VariableSecundaria3: "Datos2.3",
        VariableSecundaria4:"css"
    }
    //Y se sigue repitiendo
  ];

  constructor() { }

  getsacarDatosServicio(){
    return this.nombre_variable_servicio;
  }
  
  getsacarUnDatoServicio(idx_o_indice){
    return this.nombre_variable_servicio[idx_o_indice];
  }

    buscartexto ( texto_a_buscar:string) {
      let variable_arreglo:nombre_interface_servicio[] = [];  //Se crea para no alterar el original
      texto_a_buscar = texto_a_buscar.toLowerCase();


    for ( let variable_for of this.nombre_variable_servicio){
        let variable_local = variable_for.VariableSecundaria1.toLowerCase();

        if ( variable_local.indexOf (texto_a_buscar) >=0 )  //Si se encuenta el texto que introducimos en la variables que metemos en el for, si encuentra devuelve un 0 sino devuelve un -1
          {
            variable_arreglo.push( variable_for )
          }
      }

        return variable_arreglo;

    }


    buscartexto2 ( texto_a_buscar:string) {
      let variable_arreglo:nombre_interface_servicio[] = [];  //Se crea para no alterar el original
      texto_a_buscar = texto_a_buscar.toLowerCase();


    for ( let i=0; i < this.nombre_variable_servicio.length; i++ ){

        let variable_for = this.nombre_variable_servicio[i];

        let variable_local = variable_for.VariableSecundaria1.toLowerCase();

        if ( variable_local.indexOf (texto_a_buscar) >=0 )  //Si se encuenta el texto que introducimos en la variables que metemos en el for, si encuentra devuelve un 0 sino devuelve un -1
          {
            variable_for.idx = i;
            variable_arreglo.push( variable_for )
          }
      }

        return variable_arreglo;

    }
  

}


export interface nombre_interface_servicio {
  VariableSecundaria1: string;
  VariableSecundaria2: string;
  DireccionImagen: string;
  VariableSecundaria3: string;
  VariableSecundaria4: string;
  idx?: number; //Porque no en todo lados se usa
};