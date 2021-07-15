import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url : string = "https://pokeapi.co/api/v2/pokemon"

  constructor( private http : HttpClient ) { }

  getPokemon( nameIndex ){   //Da igual si ponemos index o name, porque cogerá lo que pongamos, si ponemos número nos coge la id y nos muestra, si ponemos nombre, nos coge el name y muetra igualmente, al tener dos propiedades coge una u otra según coincida
    // return this.http.get(this.url + nameIndex)  //Antigua forma

    return this.http.get(`${this.url}/${nameIndex}`)
    
  }
 
}
