import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';  //Input Propiedad recibida desde fuera, Padre -> Hijo. Ej: dentro del for
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta2',
  templateUrl: './tarjeta2.component.html',
  styleUrls: ['./tarjeta2.component.css']
})
export class Tarjeta2Component implements OnInit {

 @Input() otra_variable2: any={};
 @Input() otro_index2: number; //Cogemos el index del padre
 @Output() elementoSeleccionado: EventEmitter<number> //Observable. Ponemos que va a emitir (number, del index)


 constructor( ) { 

   this.elementoSeleccionado = new EventEmitter(); //Emita o se inicialice un elemento seleccionado
 }

 ngOnInit(): void {
 }

 VerComponenteMostrar1(){
    this.elementoSeleccionado.emit ( this.otro_index2 );
 }

//Html
c=`{`;
co=`<`;
f=`*`;
p=`(`;
t=`[`;
}
