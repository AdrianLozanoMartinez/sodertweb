import { Component, OnInit, Input } from '@angular/core';  //Input Propiedad recibida desde fuera, Padre -> Hijo. Ej: dentro del for
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  //Propiedad que viene de fuera gracia a Input, está definida en otro componente, en el for, es una variable local del otro componente
  @Input() otra_variable: any={};   
  @Input() otro_index: number;

  constructor( private nombre_router: Router ) { }

  ngOnInit(): void {
  }

  VerComponenteMostrar1(){
    console.log( this.otro_index);
    this.nombre_router.navigate( [ '/variable_html', this.otro_index ] )
  }

//Html
c=`{`;
co=`<`;
f=`*`;
p=`(`;
t=`[`;
}
