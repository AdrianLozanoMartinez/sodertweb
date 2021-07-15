import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokemonbuscar',
  templateUrl: './pokemonbuscar.component.html',
  styleUrls: ['./pokemonbuscar.component.css']
})
export class PokemonbuscarComponent implements OnInit {

  nombreDelPokemon: string

  urlImage: string

  error2: string;
  error3: boolean = false;

  constructor( private pokemonService:PokemonService) { 
    
  }

  ngOnInit(): void {

  }

  search(){

    this.pokemonService.getPokemon(this.nombreDelPokemon).subscribe(
      
      (respuesta:any) => {

      console.log(respuesta)

      this.urlImage = respuesta.sprites.front_default


    },
    error => {
      console.log(error.error);

      this.error3 = true;

      this.error2 = error.error
    }
    )
  }

  



}
