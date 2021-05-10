import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.component.html',
  styleUrls: ['./creacion.component.css']
})
export class CreacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//Html
c=`{`;
base=`<base href="/">`;
componente=`(cabecera (<app-cabecera></app-cabecera>), pie (<app-pie></app-pie>), home (nada o <app-home></app-home>)...)`;
ro=`<router-outlet></router-outlet>`;
}
