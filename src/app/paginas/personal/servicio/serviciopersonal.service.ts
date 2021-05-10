import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonalModel } from '../model/personal.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiciopersonalService {

  private Url = 'https://sodertweb.firebaseio.com/';      

  constructor( 

    private http: HttpClient ) { }       

  crearPersonal ( Personal: PersonalModel ){
                        
      return this.http.post(`${ this.Url }/Personal.json`, Personal).pipe(  
          map( (resp: any) => {       
                       
                Personal.id = resp.name;   
            
              return Personal;                               
            })
          );
    }

    actualizarPersonal( mp: PersonalModel ){                                              

      const idTemporal = {                                                                   
          ...mp
        };
    
        delete idTemporal.id;                                                                       
    
        return this.http.put(`${ this.Url }/Personal/${ mp.id }.json`, idTemporal)         
    }


    getTodosElementos3(){                                                     
    
      return this.http.get(`${ this.Url }/Personal.json`).pipe( map( this.variableCrearArreglo 
      ));
     }


      private variableCrearArreglo ( variableObjeto: object ){                  

      const variableConst: PersonalModel[] = [];                                     
      console.log(variableObjeto);

  if ( variableObjeto === null ) {                                        
  return [];
  }

  Object.keys( variableObjeto ).forEach( variableKeyID => {               
  const variableObjetoHeroe: PersonalModel = variableObjeto[variableKeyID];

  variableObjetoHeroe.id = variableKeyID;                                     

  variableConst.push( variableObjetoHeroe );
  } );

  return variableConst;                                                     
}

getUnElemento3(variableID:string){  
                                                     
  return this.http.get(`${ this.Url }/Personal/${ variableID }.json`); 
}

borrarElemento3( VariableId: string ){                                              

  return this.http.delete(`${ this.Url }/Personal/${ VariableId }.json`);   
}

}