import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MunicipiosModel } from  '../model/municipios.model';
import { map } from 'rxjs/operators';         

@Injectable({
  providedIn: 'root'
})
export class ServicioayuntamientoService {

  private Url = 'https://sodertweb.firebaseio.com/';      

  constructor( 

    private http: HttpClient ) { }       

  crearMunicipio ( ayuntamiento: MunicipiosModel ){
                        
      return this.http.post(`${ this.Url }/Ayuntamiento.json`, ayuntamiento).pipe(  
          map( (resp: any) => {       
                       
                ayuntamiento.id = resp.name;   
            
              return ayuntamiento;                               
            })
          );
    }

    actualizarMunicipio( mp: MunicipiosModel ){                                              

      const idTemporal = {                                                                   
          ...mp
        };
    
        delete idTemporal.id;                                                                       
    
        return this.http.put(`${ this.Url }/Ayuntamiento/${ mp.id }.json`, idTemporal)         
    }


    getTodosElementos(){                                                     
    
      return this.http.get(`${ this.Url }/Ayuntamiento.json`).pipe( map( this.variableCrearArreglo 
      ));
     }


      private variableCrearArreglo ( variableObjeto: object ){                  

      const variableConst: MunicipiosModel[] = [];                                     
      console.log(variableObjeto);

  if ( variableObjeto === null ) {                                        
  return [];
  }

  Object.keys( variableObjeto ).forEach( variableKeyID => {               
  const variableObjetoHeroe: MunicipiosModel = variableObjeto[variableKeyID];

  variableObjetoHeroe.id = variableKeyID;                                     

  variableConst.push( variableObjetoHeroe );
  } );

  return variableConst;                                                     
}

getUnElemento(variableID:string){  
                                                     
  return this.http.get(`${ this.Url }/Ayuntamiento/${ variableID }.json`); 
}

borrarElemento( VariableId: string ){                                              

  return this.http.delete(`${ this.Url }/Ayuntamiento/${ VariableId }.json`);   
}


crearMunicipiocadiz ( ayuntamiento: MunicipiosModel ){
                        
  return this.http.post(`${ this.Url }/Ayuntamientocadiz.json`, ayuntamiento).pipe(  
      map( (resp: any) => {       
                   
            ayuntamiento.id = resp.name;   
        
          return ayuntamiento;                               
        })
      );
}

actualizarMunicipiocadiz( mp: MunicipiosModel ){                                              

  const idTemporal = {                                                                   
      ...mp
    };

    delete idTemporal.id;                                                                       

    return this.http.put(`${ this.Url }/Ayuntamientocadiz/${ mp.id }.json`, idTemporal)         
}


getTodosElementoscadiz(){                                                     

  return this.http.get(`${ this.Url }/Ayuntamientocadiz.json`).pipe( map( this.variableCrearArreglo 
  ));
 }

getUnElementocadiz(variableID:string){  
                                                 
return this.http.get(`${ this.Url }/Ayuntamientocadiz/${ variableID }.json`); 
}

borrarElementocadiz( VariableId: string ){                                              

return this.http.delete(`${ this.Url }/Ayuntamientocadiz/${ VariableId }.json`);   
}
}
