import { Component, OnInit } from '@angular/core';
import { ServiciodepruebaService, nombre_interface_servicio } from '../serviciodeprueba.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serviciopadreehijo',
  templateUrl: './serviciopadreehijo.component.html',
  styleUrls: ['./serviciopadreehijo.component.css']
})
export class ServiciopadreehijoComponent implements OnInit {

  nombre_variable_ts: nombre_interface_servicio [] = [];

  constructor( private _nombredelServicio: ServiciodepruebaService,
               private nombre_router: Router ) {}

  ngOnInit(): void {
      this.nombre_variable_ts = this._nombredelServicio.getsacarDatosServicio();

      console.log( this.nombre_variable_ts );
  }
  
  
  VerComponenteMostrar1( indice_recibido:Number ){
    console.log(indice_recibido);

    this.nombre_router.navigate( [ '/variable_html',indice_recibido ] )
  }
  
//Html
c=`{`;
co=`<`;
f=`*`;
p=`(`;
t=`[`;
}
