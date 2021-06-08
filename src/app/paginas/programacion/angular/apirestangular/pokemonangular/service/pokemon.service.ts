import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url : string = "https://pokeapi.co/api/v2/pokemon"

  constructor( private http : HttpClient ) { }


  getPokemon( name:string ){
    // return this.http.get(this.url + name)  //Antigua forma
    return this.http.get(`${this.url}/${name}`)
  }
}
