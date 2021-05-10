import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeudasModel } from '../model/deudas.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiciosdeudasService {

  private Url = 'https://sodertweb.firebaseio.com/';      

  constructor( 

    private http: HttpClient ) { }       

  crearDeudas ( deudas: DeudasModel ){
                        
      return this.http.post(`${ this.Url }/deudas.json`, deudas).pipe(  
          map( (resp: any) => {       
                       
                deudas.id = resp.name;   
            
              return deudas;                               
            })
          );
    }

    actualizarDeudas( mp: DeudasModel ){                                              

      const idTemporal = {                                                                   
          ...mp
        };
    
        delete idTemporal.id;                                                                       
    
        return this.http.put(`${ this.Url }/deudas/${ mp.id }.json`, idTemporal)         
    }


    getTodosElementosde(){                                                     
    
      return this.http.get(`${ this.Url }/deudas.json`).pipe( map( this.variableCrearArreglo 
      ));
     }


      private variableCrearArreglo ( variableObjeto: object ){                  

      const variableConst: DeudasModel[] = [];                                     
      console.log(variableObjeto);

  if ( variableObjeto === null ) {                                        
  return [];
  }

  Object.keys( variableObjeto ).forEach( variableKeyID => {               
  const variableObjetoHeroe: DeudasModel = variableObjeto[variableKeyID];

  variableObjetoHeroe.id = variableKeyID;                                     

  variableConst.push( variableObjetoHeroe );
  } );

  return variableConst;                                                     
}

getUnElementode(variableID:string){  
                                                     
  return this.http.get(`${ this.Url }/deudas/${ variableID }.json`); 
}

borrarElementode( VariableId: string ){                                              

  return this.http.delete(`${ this.Url }/deudas/${ VariableId }.json`);   
}

}