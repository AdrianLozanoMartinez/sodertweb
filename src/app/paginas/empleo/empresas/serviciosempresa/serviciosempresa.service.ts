import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpresaModel } from '../model/empresa.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiciosempresaService {

  private Url = 'https://sodertweb.firebaseio.com/';      

  constructor( 

    private http: HttpClient ) { }       

  crearEmpresa ( empresa: EmpresaModel ){
                        
      return this.http.post(`${ this.Url }/Empresa.json`, empresa).pipe(  
          map( (resp: any) => {       
                       
                empresa.id = resp.name;   
            
              return empresa;                               
            })
          );
    }

    actualizarEmpresa( mp: EmpresaModel ){                                              

      const idTemporal = {                                                                   
          ...mp
        };
    
        delete idTemporal.id;                                                                       
    
        return this.http.put(`${ this.Url }/Empresa/${ mp.id }.json`, idTemporal)         
    }


    getTodosElementos2(){                                                     
    
      return this.http.get(`${ this.Url }/Empresa.json`).pipe( map( this.variableCrearArreglo 
      ));
     }


      private variableCrearArreglo ( variableObjeto: object ){                  

      const variableConst: EmpresaModel[] = [];                                     
      console.log(variableObjeto);

  if ( variableObjeto === null ) {                                        
  return [];
  }

  Object.keys( variableObjeto ).forEach( variableKeyID => {               
  const variableObjetoHeroe: EmpresaModel = variableObjeto[variableKeyID];

  variableObjetoHeroe.id = variableKeyID;                                     

  variableConst.push( variableObjetoHeroe );
  } );

  return variableConst;                                                     
}

getUnElemento2(variableID:string){  
                                                     
  return this.http.get(`${ this.Url }/Empresa/${ variableID }.json`); 
}

borrarElemento2( VariableId: string ){                                              

  return this.http.delete(`${ this.Url }/Empresa/${ VariableId }.json`);   
}

}