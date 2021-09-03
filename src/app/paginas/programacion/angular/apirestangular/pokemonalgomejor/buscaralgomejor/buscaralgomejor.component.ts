import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';   
import { PokemonService } from '../../pokemonangular/service/pokemon.service';  

@Component({
  selector: 'app-buscaralgomejor',
  templateUrl: './buscaralgomejor.component.html',
  styleUrls: ['./buscaralgomejor.component.css']
})
export class BuscaralgomejorComponent implements OnInit {

  nombreDelPokemon: string   

    urlImage: string    
  
    error2: string;   

  constructor( private pokemonService: PokemonService,  
                private route: Router ) { }  

  ngOnInit(): void {
  }

  search( value: string ){  

    this.error2 = "";   
    this.urlImage = "";  

    
    this.pokemonService.getPokemon(this.nombreDelPokemon.toLocaleLowerCase()).subscribe(    
      
      (respuesta:any) => {   
        
        console.log(respuesta)

      this.urlImage = respuesta.sprites.front_default  

    },
    error => {   
      console.log(error.error);
      
      this.error2 = error.error   
    }
    )
  }

}
