import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

interface ErrorValidate{
  [s:string]: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AsinservicioService {

  constructor() { }

  existeUsuario( RecibimosControl: FormControl ): Promise<ErrorValidate> | Observable<ErrorValidate> {
  
    if( !RecibimosControl.value ){  //Para que cuando recargarmos el usuario no dispare la petición de saber si el usuario está cogido hasta que introduzcamos datos (!RecibimosControl.value). Mientras no introduzcamos nada se mantenga en nulo (null) y no dispare nada
      return Promise.resolve(null);
    }

    return new Promise ( (resolve, reject) => {
      setTimeout(() => {

        if ( RecibimosControl.value === 'sodert' ){
          resolve ({ existe: true });
        }else{
          resolve ( null );
        }

      }, 3500);
    });

  }
}
