import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemondetalle',
  templateUrl: './pokemondetalle.component.html',
  styleUrls: ['./pokemondetalle.component.css']
})
export class PokemondetalleComponent implements OnInit {

  pokemon: any = '';
  pokemonType = [];
  pokemonImg = '';

  constructor( private pokemonService: PokemonService, activatedRouter: ActivatedRoute) { //activatedRoute -> obtiene parámetro
      activatedRouter.params.subscribe(
        params => {
          this.getPokemon1(params['id']); //Mismo nombre ['id'] que en el router (/:id)
        }
      );
  }  

  ngOnInit(): void {
  }


  getPokemon1(id){
    this.pokemonService.getPokemon(id).subscribe(
      res => {
        console.log(res);
        this.pokemon = res;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonType = this.pokemon.types[0].type.name;  //this.pokemon en el video en vez de eso pone res.
      },
      err => {
        console.log(err);
        
      }
    );
  }
}
