import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../interface/character.interface';  //Interface

@Injectable({
  providedIn: 'root'
})
export class ServicecharacterService {

  baseUrlAPI= 'https://rickandmortyapi.com/api/character';  //Lo ponen en los dos enviroment. character -> Se puede quitar y así trabajar con episodios etc

  constructor( private http: HttpClient) { }  //PONER QUE SE INCLUYE EN EL MODULE.TS EL HTTPCLIENTMODULE

  searchCharacters(nombrePersonaje='', page=1){//nombrePersonaje -> Filtrar todos los personajes (characters). page -> petición a la api de pagina 1 o 2 ...

    //  const filter = `https://rickandmortyapi.com/api/character/?name=${nombrePersonaje}&page=${page}`;
     const filter = `${this.baseUrlAPI}/?name=${nombrePersonaje}&page=${page}`;
       //console.log(filter);
      // console.log(this.baseUrlAPI);

      return this.http.get<Character[]>(
        // `${this.baseUrlAPI}/?name=${nombrePersonaje}&page=${page}`
        filter //Esta el de arriba, se usa este por ser más fácil de leer, opcional
        
      );
  }

  getDetails(id:number){

    const uno = `${this.baseUrlAPI}/${id}`;
  
    return this.http.get<Character>(
      // `${this.baseUrlAPI}/${id}`
      uno
    );
  }
}
