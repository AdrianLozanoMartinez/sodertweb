import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiciopaisesService {

  private url:string="https://restcountries.eu/rest/v2/lang/es";

  constructor( private http: HttpClient ) { }


  getPaises(){

    //Menos recomendable
    //return this.http.get('https://restcountries.eu/rest/v2/lang/es');  //Cogemos la API de países
  
    //Más recomendable
    /*return this.http.get(this.url)  //Cogemos la API de países. piases -> variable
                    .pipe(   //Usamos pipe y map para coger solamente el nombre de toda la información que nos manda la API que es mucha
                      map ( (resp:any[]) =>{  //Usamos any en resp para que no de error al usar el 2º map como arreglo
                        return resp.map( paisRecibido => {   //Este map es del arreglo, dentro del otro map. Para sacar el nombre y código solamente
                          return{
                            nombre: paisRecibido.name,
                            codigo: paisRecibido.alpha3Code
                          }
                        })
                        
                      })
                     );  */
  
  
      //MÁS RECOMENDABLE Y MÁS SIMPLE
      return this.http.get(this.url)  //Cogemos la API de países. piases -> variable
      .pipe(   //Usamos pipe y map para coger solamente el nombre de toda la información que nos manda la API que es mucha
        map ( (resp:any[]) => resp.map( paisRecibido => ({ nombre: paisRecibido.name, codigo: paisRecibido.alpha3Code }) //Usamos any en resp para que no de error al usar el 2º map como arreglo
              //Este 2º map es del arreglo, dentro del otro map. Para sacar el nombre y código solamente
          )
        )
      );  
  
  
  }
  
}
