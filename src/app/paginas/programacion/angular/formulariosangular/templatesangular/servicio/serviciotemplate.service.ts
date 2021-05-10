import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';    //Servicio API Países (Json)
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiciotemplateService {

  constructor( private http: HttpClient ) { }   
              //Metemos en la variable (http u otro nombre) el tipo HttpClient para poder usar JSON
  
  getPaises(){    //Función para coger los datos de países (JSON)

  //1º Opción
  return this.http.get('https://restcountries.eu/rest/v2/lang/es').pipe( map( (variableresp:any[]) => {  
  /*return this.http.get('https://restcountries.eu/rest/v2/lang/es') -> Devuelve (return) lo que coge (get) la variable (http) la API 
                                                                      que se encuentra en la dirección web (https://restcountries.eu/rest/v2/lang/es). 
                                                                      Pipe -> Filtro. Map -> Transformar la respuesta que es la variableresp, 
                                                                      map del import. Variableresp:any[]) => { return variableresp.map( variablepais 
                                                                      => { -> Retornar la nueva salida, lo que regrese el map*/
      return variableresp.map( variablepais => {     //Map -> Es un arreglo, no del import
        return {                                     //Devuelve el nombre y código del JSON de la API de los países
          nombre: variablepais.name,
          codigo: variablepais.alpha3Code
        }
      })
    })

    );

    //2º Opción
  /*return this.http.get('https://restcountries.eu/rest/v2/lang/es').pipe( map( (variableresp:any[]) =>
     variableresp.map( variablepais => ({ nombre: variablepais.name, codigo: variablepais.alpha3Code })
      )
    )
  );*/


}
}
