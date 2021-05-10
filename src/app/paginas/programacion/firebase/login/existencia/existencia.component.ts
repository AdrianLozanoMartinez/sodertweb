import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';                         
import { UsuarioModel } from '../../../angular/loginangular/model/usuario.model';
//Conexión con el servicio.ts creado para conectar con Firebase           
import { FireservicioService } from '../servicio/fireservicio.service';     

@Component({
  selector: 'app-existencia',
  templateUrl: './existencia.component.html',
  styleUrls: ['./existencia.component.css']
})
export class ExistenciaComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel ();     

              //Conexión con el servicio.ts creado para conectar con Firebase
  constructor( private servicefire: FireservicioService ) { }

  ngOnInit(): void {
  }


  login (form:NgForm){                                              
    if(form.invalid){                                               
    return;
    }

    console.log(this.usuario);                                         
    console.log('Imprimir si el formulario es válido');

    /*Conexión con el servicio.ts creado para conectar con Firebase
      Meter en la variable del servicio (servicefire.ts) lo que 
      obtenemos de la función (login) del servicio (servicefire.ts), 
      lo subscribimso en la respuesta(resp)*/
    this.servicefire.login( this.usuario ).subscribe( resp => {  
    //resp u otro nombre 
    console.log (resp);                                          
    //err u otro nombre. Otra forma (err u otro nombre). Sacamos e error
    }, (err) => {                                                 
    
        console.log (err);
        console.log (err.error.error.message);
    
      });
  }

}
