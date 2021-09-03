import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../pokemonangular/service/pokemon.service';  

@Component({
  selector: 'app-todosalgomejor',
  templateUrl: './todosalgomejor.component.html',
  styleUrls: ['./todosalgomejor.component.css']
})
export class TodosalgomejorComponent implements OnInit {

  pokemon: string [] = [];  
  image:string;  
  errorN: string;  

constructor( private servicioPokemon: PokemonService ) { }  

ngOnInit(): void {
  this.getTodos();  
  
}

getTodos(){  

  let pokemonData;   

  for (let i=1; i <= 898; i++ ){   

    
    this.servicioPokemon.getPokemon(i).subscribe( (resp:any) => {  

       pokemonData = {  
         position: resp.id, 
         image: resp.sprites.front_default,  
        //image: resp.sprites.other.dream_world.front_default, 
         imageback: resp.sprites.back_default,  
         name: resp.name,  
         weight: resp.weight,   
         id: resp.id, 
         height: resp.height, 
         types0: resp.types[0].type.name,     //Si cogemos el 1º elemento, si cogemos el 2 sería [1]
       };
        this.pokemon.push(pokemonData);  

      //CAMBIAR NOMBRE A MOSTRAR
       if ( resp.types[0].type.name === 'grass' ) {  
        pokemonData.types0 = [' Planta'];   
       }else if ( resp.types[0].type.name === 'bug' ) {
        pokemonData.types0 = [' Bicho'];
      }else if ( resp.types[0].type.name === 'water' ) {
        pokemonData.types0 = [' Agua'];
      }else if ( resp.types[0].type.name === 'fire' ) {
        pokemonData.types0 = [' Fuego'];
      }else if ( resp.types[0].type.name === 'poison' ) {
        pokemonData.types0 = [' Veneno'];
      }else if ( resp.types[0].type.name === 'ground' ) {
        pokemonData.types0 = [' Tierra'];
      }else if ( resp.types[0].type.name === 'electric' ) {
        pokemonData.types0 = [' Eléctrico'];
      }else if ( resp.types[0].type.name === 'fairy' ) {
        pokemonData.types0 = [' Hada'];
      }else if ( resp.types[0].type.name === 'rock' ) {
        pokemonData.types0 = [' Roca'];
      }else if ( resp.types[0].type.name === 'fighting' ) {
        pokemonData.types0 = [' Lucha'];
      }else if ( resp.types[0].type.name === 'psychic' ) {
        pokemonData.types0 = [' Psíquico'];
      }else if ( resp.types[0].type.name === 'ghost' ) {
        pokemonData.types0 = [' Fantasma'];
      }else if ( resp.types[0].type.name === 'ice' ) {
        pokemonData.types0 = [' Hielo'];
      }else if ( resp.types[0].type.name === 'dragon' ) {
        pokemonData.types0 = [' Dragón'];
      }else if ( resp.types[0].type.name === 'steel' ) {
        pokemonData.types0 = [' Acero'];
      }else if ( resp.types[0].type.name === 'dark' ) {
        pokemonData.types0 = [' Oscuro'];
      }else if ( resp.types[0].type.name === 'flying' ) {
        pokemonData.types0 = [' Volador'];
      }else if ( resp.types[0].type.name === 'normal' ) {
        pokemonData.types0 = [' Normal'];
      }

    },
    
  error => {  
    console.log(error.error);
    this.errorN = error.error  
  }
  
  
  );
}

}


}
