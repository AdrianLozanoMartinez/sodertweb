import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServiciopassService {

  constructor() { }


  passIgual( pass1Nombre:string, pass2Nombre:string ){
  
    return( TodoFormulario:FormGroup )=>{

      const pass1Control = TodoFormulario.controls[pass1Nombre];
      const pass2Control = TodoFormulario.controls[pass2Nombre];

      if ( pass1Control.value === pass2Control.value ){
          pass2Control.setErrors(null);  //No da error
      }else{
          pass2Control.setErrors({ noEsIgual: true });  //Da error
      }
  }
 }

}
