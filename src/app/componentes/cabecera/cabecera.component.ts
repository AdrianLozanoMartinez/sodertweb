import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor( private variable_router: Router, @Inject(DOCUMENT) public document: Document, public auth: AuthService ) { }

  ngOnInit(): void { }

  funcion_Buscar( nombre_a_buscar:string ){
    console.log(nombre_a_buscar);
    this.variable_router.navigate( ['/buscador',nombre_a_buscar] );
  }


}
