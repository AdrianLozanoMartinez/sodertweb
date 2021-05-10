import { Component, OnInit } from '@angular/core';
import { UnoModel } from '../model/uno.model';
import { NgForm } from '@angular/forms';
import { ServicioformulariofireService } from '../servicio/servicioformulariofire.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forfireunelementohtml5',
  templateUrl: './forfireunelementohtml5.component.html',
  styleUrls: ['./forfireunelementohtml5.component.css']
})
export class Forfireunelementohtml5Component implements OnInit {

     //1º Opción (Recomendable)
     unomodel = new UnoModel();                           

     //2º Opción (Redundante)
     //unomodel: UnoModel = new UnoModel();

 constructor( private variableservicio: ServicioformulariofireService,
              private variableRoute: ActivatedRoute ) { }

 ngOnInit() {

    //Mete en la variable (variable_Id) la id de cada elemento
    const variable_Id = this.variableRoute.snapshot.paramMap.get('id');          
    console.log(variable_Id);

    //Si la variable (variable_Id) es distitno (!==) al argumento ('nuevo') que coincide con el enlace de todos los elementos.html
    if ( variable_Id !== 'nuevo' ){ 
    /*Meter en la variable del servicio (variableservicio) la función de un elemento (getUnElemento) 
      para coger la variable anterior creada (variable_Id) y nos subscribimos (subscribe), dejando 
      los resultados en la variable de respuesta (variable_respuesta) con estructura del model (UnoModel)*/                                          
        this.variableservicio.getUnElemento(variable_Id).subscribe( (variable_respuesta: UnoModel) => {     
        console.log(variable_respuesta);

        //Metemos en model (unomodel) la variable de la respuesta (variable_respuesta)
        this.unomodel = variable_respuesta;   
        //Metemos en model (unomodel) punto (.) id la variable utilizada en la función de este componente.ts                                    
        this.unomodel.id = variable_Id;                                       
      });
    }

 }
 guardar( variableRecibidodelHTML: NgForm ){        

  if ( variableRecibidodelHTML.invalid ){          
    console.log('Formulario no válido');
     return;
 }

  Swal.fire({                                                                                  
    title: 'Espere',                                                           
    text: 'Guardando información',  
    //Icono. Otras opciones: success, error, warning, info, question                                                                 
    icon: 'info',                                                                                  
    allowOutsideClick: false                                                                         
  });

    Swal.showLoading();                                                                                 
    
    let variablePeticion: Observable<any>; 

  if (this.unomodel.id){                                                                                
    //OPCIÓN 1 SIN SWEETALERT2 - Conexión con servicio.ts y este con Firebase - ACTUALIZAR
    /*this.variableservicio.actualizarHeroe( this.unomodel ).subscribe( variableRespuesta3 => {
      console.log(variableRespuesta3);
    });*/
  
   //OPCIÓN 2 CON SWEETALERT2 - Conexión con servicio.ts y este con Firebase - ACTUALIZAR
   variablePeticion = this.variableservicio.actualizarHeroe(this.unomodel);                        
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
  variablePeticion.subscribe( variableRespu => {                                             
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