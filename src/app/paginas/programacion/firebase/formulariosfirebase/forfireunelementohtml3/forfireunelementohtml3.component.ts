import { Component, OnInit } from '@angular/core';
import { UnoModel } from '../model/uno.model';
import { NgForm } from '@angular/forms';
import { ServicioformulariofireService } from '../servicio/servicioformulariofire.service';

@Component({
  selector: 'app-forfireunelementohtml3',
  templateUrl: './forfireunelementohtml3.component.html',
  styleUrls: ['./forfireunelementohtml3.component.css']
})
export class Forfireunelementohtml3Component implements OnInit {

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

   //Si la variable de model (unomodel) tiene ID, actualice sino crea una
   if (this.unomodel.id){                                                                                
    //Conexión con servicio.ts y este con Firebase - ACTUALIZAR
    this.variableservicio.actualizarHeroe( this.unomodel ).subscribe( variableRespuesta3 => {  
    //La única diferencia con la de crear es la función (actualizarHeroe)         
      console.log(variableRespuesta3);
    });
    }else{
      //Conexión con servicio.ts y este con Firebase - CREAR NUEVO
        this.variableservicio.crearHeroe( this.unomodel ).subscribe( variableRespuesta => { 
        //Metemos crear dentro del else para que funcione la condición                
          console.log(variableRespuesta);
        });
    }

   console.log(variableRecibidodelHTML);               
   console.log(this.unomodel);   
     
   }
}
