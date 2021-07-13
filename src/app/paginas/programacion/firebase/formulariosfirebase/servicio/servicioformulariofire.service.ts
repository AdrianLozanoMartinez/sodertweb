import { Injectable } from '@angular/core';
//Conexión con Firebase
import { HttpClient } from '@angular/common/http';
//Model
import { UnoModel } from '../model/uno.model';
//Trasformar la respuesta (coger la ID)
import { map, delay } from 'rxjs/operators';           

@Injectable({
  providedIn: 'root'
})
export class ServicioformulariofireService {

  /*Metemos en la variable (variableUrl) la url/dirección 
  que está nuestra base de datos, dentro de Realtime Database 
  -> Datos. El manual-sodert cambiará según el proyecto que 
  estemos usando*/
  private variableUrl = 'https://sodertweb.firebaseio.com/';      

  constructor( 
    //Metido en la variable (variablehttp) el HttpClient
    private variablehttp: HttpClient ) { }       

  /*crearHeroe() -> Función para crear datos. variableHeroe: UnoModel 
  -> Metemos en la función la variable nueva (variableHeroe) que tendrá 
  la estructura definida en el model (UnoModel)*/
  crearHeroe ( variableHeroe: UnoModel ){
      /*return this.variablehttp.post -> Va a devolver (return), la variable (this.variablehttp). 
        post (podría ser delete, put, get...). (`${ this.variableUrl }/heroes.json`, variableHeroe): 
        Dirección/url metida en la variable (this.variableUrl) unido al /base_de_datos (/heroes) y 
        poniendo al final el json. Segundo argumento es el cuerpo (variableHeroe) que es la misma 
        variable que ponemos en la función (crearHeroe). .pipe() -> Lo pasamos al método pipe de 
        los observables*/                     
      return this.variablehttp.post(`${ this.variableUrl }/heroes.json`, variableHeroe).pipe(  
        /*Guarda en la variable (variableresp) la respuesta y lo ponemos de tipo any, ya que 
          name no viene definido aquí pero sí sale en consola que sustituye la id pero en firebase*/  
          map( (variableresp: any) => {       
              /*Comparamos la variable definida aquí (variableHeroe) y hace referencia al model (unoModel), 
                de ese modo saca la id y demás campos, lo compara con la variable de salida al crear el 
                archivo (variableresp) que es lo que se va a meter en firebase + .name que sale en consola 
                que pertenece a firebase*/                
              variableHeroe.id = variableresp.name;   
              /*Devuelve la variable modificada, de este modo obtenemos la ID (Se muestra en la ID 
                autogenerado del html) y podemos actualizar, borrar, ver...*/            
              return variableHeroe;                               
          })
        );
  }

  actualizarHeroe( variableHeroe2: UnoModel ){                                              

        /*Creamos una constante (idTemporal) donde metemos 
          en la variable (variableHeroe2) todo el valor que 
          creamos en la función. De ese modo como se saca 
          otra ID al actualizar los componentes y no queremos
          tener más de una ID, por ello luego borramos la ID 
          nueva creada*/
        const idTemporal = {                                                                   
            ...variableHeroe2
          };
      
          /*Borramos la id temporal creada al actualizar 
            para que no exista más de una id, manteniendo 
            la primera id creada*/
          delete idTemporal.id;                                                                       
      
          /*Devuelve (return) la variable del servicio http (variablehttp). Actualizamos (put). Ponemos la variable 
            que sustituye al url principal (${ this.idTemporal }) seguido del url específico de la base de datos 
            creada (/heroes), seguido del id (/${ variableHeroe2.id) y seguido por último de json propio de 
            firebase (En otras bases de datos no se incluye). Por último ponemos la variable de salida nombrada 
            también en la función que contiene la variable temporal pero sin la ID (idTemporal)*/
          return this.variablehttp.put(`${ this.variableUrl }/heroes/${ variableHeroe2.id }.json`, idTemporal)         
      }

      //Función creada para obtener todos los elementos
      getTodosElementos(){                                                     
        //Opción completa
        //return this.variablehttp.get(`${ this.variableUrl }/heroes.json`).pipe( map( variableRespuestaTodosElementos => this.variableCrearArreglo(variableRespuestaTodosElementos)       
        /*return this.variablehttp.get(`${ this.variableUrl }/heroes.json`) -> Devuelve (return) lo que almacena en la variable (variablehttp) 
          del servicio http que coge (get) de la dirección guardada en la variable (variableUrl) y la continuidad de una base de datos, en este caso 
          se llama heroes, acabando en json para que actue bien en firebase, no necesario en otras bases de datos. .pipe( map( variableRespuestaTodosElementos => 
          this.variableCrearArreglo(variableRespuestaTodosElementos) o .pipe( map( this.variableCrearArreglo -> Map transforma la respuesta recibida 
          (variableRespuestaTodosElementos) en un objeto para obetener/filtrar la información que realmente necesitamos (Paso especial y necesario de firebase)*/
        
        //Opción reducida
        return this.variablehttp.get(`${ this.variableUrl }/heroes.json`).pipe( map( this.variableCrearArreglo),
      
        //Para atrasar la muestra de información en pantalla y así poder ver que está cargando
        delay(0)        
       /*delay(0) o delay(1500 u otros segundos): Para atrasar la muestra de información en pantalla y así poder 
         ver que está cargando, no es recomendable a mi opinión pero para verlo ahora sí. En este ejercicio hemos 
         puesto en el servicio un delay de 5500 seg*/
        ); 
       }

       //Metemos en la variable (variableCrearArreglo) lo que devolvemos (return) (Paso especial y necesario de firebase)
        private variableCrearArreglo ( variableObjeto: object ){                  

        //Creamos una constante/arreglo (variableConst) donde metemos el model (UnoModel) y lo vemos (console.log(variableObjeto);)
        const variableConst: UnoModel[] = [];                                     
        //console.log(variableObjeto);

    //Si la variable de objeto (variableObjeto) es nulo, no hay información en la base de datos, devuelve (return) un objeto vacío
    if ( variableObjeto === null ) {                                        
    return [];
    }

    /*El objeto (Object) y llaves (keys), cogemos la variable (variableObjeto) y lo pasamos por el for (forEach) para obtener cada 
      registro de la base de datos metiendolo en la variable key (variableKey)*/
    Object.keys( variableObjeto ).forEach( variableKeyID => {               
    const variableObjetoHeroe: UnoModel = variableObjeto[variableKeyID];
    //Metemos la variable del objeto (variableObjetoHeroe) y sacamos la id, lo metemos en una variable de ID (variableKeyID)
    variableObjetoHeroe.id = variableKeyID;                                     

    variableConst.push( variableObjetoHeroe );
    } );
    //Devolvemos la variable
    return variableConst;                                                     
    }
    
    //Función (getUnElemento()) donde cogemos la variable (variableID) sacada de la función
    getUnElemento(variableID:string){  
      /*Devuelve (return) lo que metemos en la variable del servicio http (variablehttp) 
        cogiendo (get) la dirección principal con la variable (`${ this.variableUrl }), 
        la base de datos (/heroes) especialmente la ID (/${ variableID }.json`) acabado 
        en json para que funcione en firebase*/                                                      
      return this.variablehttp.get(`${ this.variableUrl }/heroes/${ variableID }.json`); 
    }
    //Función (borrarElemento()) que saca en una variable (VariableId) lo que abajo se muestra
    borrarElemento( VariableId: string ){                                              
      /*Devuelve (return) en la variable de servicio http (variablehttp) la función de borrar (delete) 
        a la dirección desglosada en variable principal (${ this.variableUrl }), luego la base de datos 
        que estamos tratando (heroes) y por último la ID que cogemos (${ VariableId }.json) acabado en 
        json para que funcione en firebase*/
      return this.variablehttp.delete(`${ this.variableUrl }/heroes/${ VariableId }.json`);   
    }
}
