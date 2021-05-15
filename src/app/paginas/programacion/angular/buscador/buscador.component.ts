import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciodepruebaService } from '../serviciounovarias/serviciodeprueba.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  variable_array:any[] = []   //Porque puede ser varias coincidencias

  palabra_a_buscar: string;

  constructor( private variable_activatedRoute: ActivatedRoute,
               private _variableServicio: ServiciodepruebaService ) {

   }

  ngOnInit(): void {

    this.variable_activatedRoute.params.subscribe ( params => {
      console.log(params['termino_buscar']);

      this.variable_array = this._variableServicio.buscartexto( params ['termino_buscar'] );
      console.log(this.variable_array);
      
      this.palabra_a_buscar = params ['termino_buscar'];
    });
  }

  
}
