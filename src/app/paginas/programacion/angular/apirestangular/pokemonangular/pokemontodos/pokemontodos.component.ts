import { Component, OnInit, ViewChild } from '@angular/core';  
import { PokemonService } from '../service/pokemon.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-pokemontodos',
  templateUrl: './pokemontodos.component.html',
  styleUrls: ['./pokemontodos.component.css']
})
export class PokemontodosComponent implements OnInit {
        
  displayedColumns: string[] = ['position', 'image', 'name'];
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);
  pokemons = [];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  error2: string;
  error3: boolean = false;

  constructor( private pokemonService:PokemonService ) {  }

  ngOnInit(): void {
    this.getPokemonTodos();
  }

  getPokemonTodos(){

    let pokemonData;

    for (let i=1; i <= 898; i++ ){  

    this.pokemonService.getPokemon(i).subscribe(
      
      (respuesta:any) => {

      // console.log(respuesta)

      pokemonData = {
        position: respuesta.id,
        image: respuesta.sprites.front_default,
        name: respuesta.name,
      };
      this.data.push(pokemonData);
      this.dataSource = new MatTableDataSource<any>(this.data);
      this.dataSource.paginator = this.paginator;  //No necesario en principio para mostrar todos los pokemons
    },
    error => {
      console.log(error.error);

      this.error3 = true;

      this.error2 = error.error
    }
    );
  }

} 


applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

  //Html
c=`{`;
co=`<`;
f=`*`;
p=`(`;
t=`[`;
  
}
