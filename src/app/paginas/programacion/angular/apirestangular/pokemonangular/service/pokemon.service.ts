import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { type } from '../interface/type.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url : string = "https://pokeapi.co/api/v2/pokemon"

  //Todos
  // private urlTodos : string = "https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0"

  constructor( private http : HttpClient ) {  }


  getPokemon( name:string ){
    // return this.http.get(this.url + name)  //Antigua forma
    return this.http.get(`${this.url}/${name}`)
  }

  



 
}
