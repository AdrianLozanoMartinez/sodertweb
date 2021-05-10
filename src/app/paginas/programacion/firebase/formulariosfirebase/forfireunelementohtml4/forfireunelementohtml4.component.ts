import { Component, OnInit } from '@angular/core';
import { UnoModel } from '../model/uno.model';
import { NgForm } from '@angular/forms';
import { ServicioformulariofireService } from '../servicio/servicioformulariofire.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forfireunelementohtml4',
  templateUrl: './forfireunelementohtml4.component.html',
  styleUrls: ['./forfireunelementohtml4.component.css']
})
export class Forfireunelementohtml4Component implements OnInit {

     //1º Opción (Recomendable)
     unomodel = new UnoModel();                           

     //2º Opción (Redundante)
     //unomodel: UnoModel = new UnoModel();

 constructor( private variableservicio: ServicioformulariofireService ) { }

 ngOnInit(): void {
 }
 guardar( variableRecibidodelHTML: NgForm ){        

  if ( variableRecibidodelHTML.invalid ){          
    console.log('Formulario no válido');
     return;
 }

  //Mostrar mensaje de Swal
  Swal.fire({  
    //'Título' o 'Código html'                                                                                  
    title: 'Espere',    
    //Texto                                                                             
    text: 'Guardando información',  
    //Icono. Otras opciones: success, error, warning, info, question                                                                 
    icon: 'info',   
    //Para que no se pueda cerrar al pulsar fuera de la ventana                                                                                 
    allowOutsideClick: false                                                                         
  });
    //Se elimina el botón aceptar y se muestra símbolo de cargando
    Swal.showLoading();                                                                                 
    
    //Para usar Sweetalert2
    let variablePeticion: Observable<any>; 
    //Creamos la variable petición (variablePeticion) donde metemos un observable 

  //Si la variable de model (unomodel) tiene ID, actualice sino crea una
  if (this.unomodel.id){                                                                                
    //OPCIÓN 1 SIN SWEETALERT2 - Conexión con servicio.ts y este con Firebase - ACTUALIZAR
    /*this.variableservicio.actualizarHeroe( this.unomodel ).subscribe( variableRespuesta3 => {
      console.log(variableRespuesta3);
    });*/
  
   //OPCIÓN 2 CON SWEETALERT2 - Conexión con servicio.ts y este con Firebase - ACTUALIZAR
   variablePeticion = this.variableservicio.actualizarHeroe(this.unomodel);
   /*Metemos en la variable (variablePeticion) el resultado que obtenemos en el model al coger 
   la id (unomodel) y lo llevamos a la función (actualizarHeroe) del servicio (variableservicio)*/                           
  variablePeticion.subscribe( variableRespu => {
        Swal.fire({                                                                                  
        title: this.unomodel.nombre,                                                                     
        text: 'Se actualizó correctamente',                                                              
        icon: 'success'                                                                                  
    });
  });
  }else{
  //OPCIÓN 1 SIN SWEETALERT2 - Conexión con servicio.ts y este con Firebase - CREAR NUEVO
     /*this.variableservicio.crearHeroe( this.unomodel ).subscribe( variableRespuesta => {
      console.log(variableRespuesta);
    });*/

//OPCIÓN 2 CON SWEETALERT2 - Conexión con servicio.ts y este con Firebase - CREAR NUEVO
variablePeticion = this.variableservicio.crearHeroe(this.unomodel);
/*Metemos en la variable (variablePeticion) el resultado que obtenemos en el model al no 
  coger una id (unomodel) y lo llevamos a la función (crearHeroe) del servicio (variableservicio)*/                                
  variablePeticion.subscribe( variableRespu => { 
  /*Si se usa fuera del if/else es un mensaje genérico actualiza/guarda pero si lo metemos 
    dentro de cada uno, especificamos si es guardar o actualizar*/                                              
      Swal.fire({
      title: this.unomodel.nombre,
      text: 'Se guardó correctamente',
      icon: 'success'
      });
  });
}

//Opción 3 CON SWEETALERT2 - Fuera del if/else
  /*variablePeticion.subscribe( variableRespu => {
      Swal.fire({
      title: this.unomodel.nombre,
      text: 'Se guardo/actualizó correctamente',
      icon: 'success'
      });
  });*/
  console.log(variableRecibidodelHTML);                   
  console.log(this.unomodel); 

  }

}
