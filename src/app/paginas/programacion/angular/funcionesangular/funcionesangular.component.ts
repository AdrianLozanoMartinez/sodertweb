import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionesangular',
  templateUrl: './funcionesangular.component.html',
  styleUrls: ['./funcionesangular.component.css']
})
export class FuncionesangularComponent implements OnInit {

    //Fecha
    variable_ano: number;
    variable_ano2: number;

    //If
    variable_if_boolean = false; //true (Inicia mostrando el contenido), false(Inicia no mostrando el resultado)

    //For
    variableTS: string[] = ['1º Contenido', '2º Contenido', '3º Contenido', 'más contenidos'];

  constructor() { 

        //Fecha
        this.variable_ano = new Date().getFullYear();       //Resultado: 2020
        this.variable_ano2 = new Date().getFullYear()+1;    //Añadimos +1 al año actual. Resultado: 2021

  }

  ngOnInit(): void {
  }
//Html
c=`{`;
v=`{{variable_ano}}`;
v2=`{{variable_ano2}}`;
d=`<div `;
dd=`</div>`;
b=`<button `;
bb=`</button>`;
f=`<ul>
`;
fo=`  <li *ngFor="let variableTemporal of variableTS">{{variableTemporal}}`;
for=`   </li>
</ul>`;
e=`{{variableTemporal}}`;
in=`  <li *ngFor="let variableTemporal of variableTS`;
di=`; let i = index">`;
g=`{{i}}. {{variableTemporal}}`;
}
