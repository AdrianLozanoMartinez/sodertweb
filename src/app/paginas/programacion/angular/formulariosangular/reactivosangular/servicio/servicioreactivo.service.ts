import { Injectable } from '@angular/core';
import { FormControl, FormGroup  } from '@angular/forms';     //Validaciones personalizada síncronas de caracteres y contraseña
import { Observable } from 'rxjs';                            //Validaciones asíncronas - usuario

/*Siempre creamos una interface entre los import y el @Injectable. 
Creamos una interfaz para determinar el modo de usar, en vez de 
definir uno a uno lo mismo*/
interface errorValidacion{ 
  //Devuelve un string que a su vez devuelve un boolean (true/false)                             
  [s:string]: boolean                                              
}

@Injectable({
  providedIn: 'root'
})
export class ServicioreactivoService {

  constructor() { }

  //VALIDACIONES ASÍNCRONAS
//1ºOpción - Sin definir tipo (any)
//existeUsuario( variableControool: FormControl ): Promise<any> | Observable<any> {

//2º Opción - Definiendo tipo (Interface (errorValidacion) )
existeUsuario( variableControool: FormControl ): Promise<errorValidacion> | Observable<errorValidacion> {      
  /*Va a resolver una promesa o un observable en la 1º opción 
  de tipo any en la 2º de tipo según la interface (errorValidacion)*/      
  
  if( !variableControool.value ){                                    
  //Si no existe ese valor
      return Promise.resolve(null);                                      
      //Devuelve (return) una promesa resuelta (Promise.resolve), resuelve
    }
  
      return new Promise( (resolve, reject) => {
    /*Devuelve una promesa, la cual recibe un resolve 
      (Si sale algo mal aunque sea http) y un reject 
      (Para peticiones de http)*/                      
      setTimeout( () => {
                                                  
          if( variableControool.value === 'nombreProhibido' ){     
          /*Si el valor de la Variable (variableControl) es nombreProhibido, 
            esta variable se usa en existeUsuario, noApellidoHerrera y en este if*/
           resolve({ existe: true });                          
            //Usuario ya existe, entonces marcamos un error (resolve)
          }else{
              resolve ( null );                                          
            //Si el usuario no existe, marcamos null
          }
          }, 3500);
        /*y }, 3500); Para que se resuelva en 3 seg y medio 
         (3500 milisegundos) y dentro de ese tiempo ejecuta 
         lo que haya dentro*/
    });
  }
  
  //VALIDACIONES SÍNCRONAS
  noApellidoHerrera ( variableControl: FormControl): {[s:string]: boolean }{    /*variableControl: FormControl -> 
                                                                                  Recibimos como argumento la variableControl 
                                                                                  de tipo FormControl. s:string]: boolean } -> 
                                                                                  Salida que retorna (return) un string y 
                                                                                  este string devuelve un boolean*/
    
      if( variableControl.value?.toLowerCase() === 'herrera' ){                 /*Si el valor (value) de la variable que cogemos 
                                                                                (variableControl) es igual a 'Herrera' y existe(?), 
                                                                                entonces regresa true el método, en caso contrario null. 
                                                                                El valor lo pasamos con toLowerCase en minúscula para 
                                                                                no producir error. Sino existe (?) no hace el toLowerCase*/                 
  
        return {
          noApellidoHerrera: true
        }
    }
    return null;
  }
                  //Coge 2 variables como string
  passwordsIguales( pass1Name: string, pass2Name: string ){

  /*Devuelve los datos del formulario para la validación 
    mediante la variable creada (esteFormularioValidacion)*/           
    return ( esteFormularioValidacion: FormGroup ) => {        

    /*Metemos en la variableconstante (pass1Control) el valor que estamos recibiendo como argumenteo (pass1Name)*/
    const pass1Control = esteFormularioValidacion.controls[pass1Name];      
    const pass2Control = esteFormularioValidacion.controls[pass2Name];
  
    if ( pass1Control.value === pass2Control.value ) {                      
  //Si el valor del pass1Control es igual al pass2Control

      pass2Control.setErrors(null);                                          
      /*Regresa null al tener la igualdad de contraseña correcta. 
        Se coge el pass2 porque es el campo que estamos trabajando*/
        
    } else {
    //Cuando no coincide
      pass2Control.setErrors({ noEsIgual: true });                          
    }
  
    }
  }

}
