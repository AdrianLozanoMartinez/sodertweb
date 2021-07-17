import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class Reactivov2pService {

  constructor() { }

  noPalabra( VariableControl: FormControl ): { [variable2:string]: boolean }{  //
    
     if ( VariableControl.value?.toLowerCase() === 'nombrephohibido' ){  //Hay que poner en minúscula (nombrephohibido) porque lo que metamos en el input del html lo convertimos en minúscula (toLowerCase) 
                                                                        //Se pone ? por si no se rellena no de error
      return{
        noPalabra: true
      };

    }
      return null;
    
  }

}
