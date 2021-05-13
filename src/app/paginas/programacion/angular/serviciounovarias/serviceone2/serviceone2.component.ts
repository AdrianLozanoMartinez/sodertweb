import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciodepruebaService } from '../../serviciounovarias/serviciodeprueba.service';

@Component({
  selector: 'app-serviceone2',
  templateUrl: './serviceone2.component.html',
  styleUrls: ['./serviceone2.component.css']
})
export class Serviceone2Component implements OnInit {

  variable_servicio:any={};

  constructor( private nombre_activadRoute: ActivatedRoute,
               private _variable_Servicio: ServiciodepruebaService ) { 

    this.nombre_activadRoute.params.subscribe ( params => {
      console.log( params['id'] );

      this.variable_servicio = this._variable_Servicio.getsacarUnDatoServicio( params ['id']);
    })
  }//params: escuchar los cambios, lo que estan pendiente de esos cambios y para que funcione nos tenemos que subscribir a eseos cambios

  ngOnInit(): void {
  }
//Html
c=`{`;
co=`<`;
f=`*`;
p=`(`;
t=`[`;
}
