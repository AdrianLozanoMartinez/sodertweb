import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';  //Agregado para la automatica
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiciospotifyService {

  token_automatico:any = this.getToken();  //


  constructor( private variable_http: HttpClient ) {

    console.log('Servicio de Spotify, Listo!! ');//
 
    this.token_automatico = this.getToken()//
  }


     ///////////////////

     async getToken() {
 
      // const token = await this.getToken();
   
      const clientId = '7b868e5b655447c8b6ab2331f6747ae4';
   
      const clientSecret = '2b6838cfce5b4f8791cb774ad88f454e';
   
      const body = new HttpParams()
        .append('grant_type', 'client_credentials')
        .append('client_id', clientId)
        .append('client_secret', clientSecret);
   
      return this.variable_http.post('https://accounts.spotify.com/api/token', body)
              .toPromise()
              .then( (token_recibido:any) => {
                  this.token_automatico = `Bearer ${ token_recibido['access_token'] }`;
                  // console.log('estoy en el getToken');
                  // console.log(this.token);
                }, (err: any) => {
                 console.log(err);
                });
    }
  
    ///////////////



   getQuery_UnificarDatos( variable_query: string ){

    const url = `https://api.spotify.com/v1/${ variable_query }`;

    const headers = new HttpHeaders({
      'Authorization': `${this.token_automatico}`  //
    });

    console.log( this.token_automatico, headers )

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


   getTopTracks( id: String ) {    

    return this.getQuery_UnificarDatos(`artists/${id}/top-tracks?market=ES`) //?market=ES hay que añadir el idioma, lo suyo es probar primero en la web y copiar la dirección como vemos aquí
                              .pipe ( map (datoFiltradoPorMapPipe =>  datoFiltradoPorMapPipe['tracks']));
   }











}
