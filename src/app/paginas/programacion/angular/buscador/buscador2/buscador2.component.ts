import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciodepruebaService } from '../../serviciounovarias/serviciodeprueba.service';

@Component({
  selector: 'app-buscador2',
  templateUrl: './buscador2.component.html',
  styleUrls: ['./buscador2.component.css']
})
export class Buscador2Component implements OnInit {

  variable_array:any[] = []   //Porque puede ser varias coincidencias

  palabra_a_buscar: string;

  constructor( private variable_activatedRoute: ActivatedRoute,
               private _variableServicio: ServiciodepruebaService ) {

   }

  ngOnInit(): void {

    this.variable_activatedRoute.params.subscribe ( params => {
      console.log(params['termino_buscar']);

      this.variable_array = this._variableServicio.buscartexto2( params ['termino_buscar'] );
      console.log(this.variable_array);
      
      this.palabra_a_buscar = params ['termino_buscar'];
    });
  }

}
