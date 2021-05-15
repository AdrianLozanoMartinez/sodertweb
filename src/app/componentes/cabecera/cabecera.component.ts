import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor( private variable_router: Router ) { }

  ngOnInit(): void {
  }

  
  funcion_Buscar( nombre_a_buscar:string ){
    console.log(nombre_a_buscar);
    this.variable_router.navigate( ['/buscador',nombre_a_buscar] );
  }


}
