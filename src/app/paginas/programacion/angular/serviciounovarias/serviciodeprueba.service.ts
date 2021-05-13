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

}


export interface nombre_interface_servicio {
  VariableSecundaria1: string;
  VariableSecundaria2: string;
  DireccionImagen: string;
  VariableSecundaria3: string;
  VariableSecundaria4: string;
};