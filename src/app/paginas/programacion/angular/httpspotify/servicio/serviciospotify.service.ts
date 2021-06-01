import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiciospotifyService {

  constructor( private variable_http: HttpClient ) {}


   getQuery_UnificarDatos( variable_query: string ){

    const url = `https://api.spotify.com/v1/${ variable_query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCNnZ02H4y8V0cdNAxZPNzpaVXOdIdGbsKNfioUZP9oJxQu0iczj22UbbKtyNpPY-bbHHhnSt9r-YwHCVY'
    });

    return this.variable_http.get(url, { headers });

   }


   get_spotify() {

      return this.getQuery_UnificarDatos('browse/new-releases?limit=20')
                              .pipe ( map (datoEnBruto =>  datoEnBruto['albums'].items)); 
    }


   getArtista( terminoRecibido: String ) {

    return this.getQuery_UnificarDatos(`search?q=${terminoRecibido}&type=artist&offset=15`)
                               .pipe ( map (datoEnBruto =>  datoEnBruto['artists'].items)); 
   }



   getArtistaUNartista( id: String ) {    //https://api.spotify.com/v1/artists/{id} 

    return this.getQuery_UnificarDatos(`artists/${id}`);
   }


   //
   getTopTracks( id: String ) {    

    return this.getQuery_UnificarDatos(`artists/${id}/top-tracks?market=ES`) //?market=ES hay que añadir el idioma, lo suyo es probar primero en la web y copiar la dirección como vemos aquí
                              .pipe ( map (datoFiltradoPorMapPipe =>  datoFiltradoPorMapPipe['tracks']));
   }

}
