import { Component, OnInit } from '@angular/core';
import { UnoModel } from '../model/uno.model';
import { NgForm } from '@angular/forms';
//Servicio de conexión con firebase
import { ServicioformulariofireService } from '../servicio/servicioformulariofire.service';

@Component({
  selector: 'app-forfireunelementohtml2',
  templateUrl: './forfireunelementohtml2.component.html',
  styleUrls: ['./forfireunelementohtml2.component.css']
})
export class Forfireunelementohtml2Component implements OnInit {

     //1º Opción (Recomendable)
      unomodel = new UnoModel();                           

      //2º Opción (Redundante)
      //unomodel: UnoModel = new UnoModel();

  constructor(
    //Metemos en privado, en la variable (variableservicio) el servicio (ServicioformulariofireService)
    private variableservicio: ServicioformulariofireService ) { }

  ngOnInit(): void {
  }
  guardar( variableRecibidodelHTML: NgForm ){        

    if ( variableRecibidodelHTML.invalid ){          
    console.log('Formulario no válido');
        return;
    }
    console.log(variableRecibidodelHTML);               
    console.log(this.unomodel);   
      //Conexión con servicio.ts y este con Firebase
      this.variableservicio.crearHeroe( this.unomodel ).subscribe( variableRespuesta => {  
      /*Metemos en la variable que coge el servicio (this.variableservicio) la función (crearHeroe) 
        y dentro de ella el model (this.unomodel) o estructura, lo subscribimos (.subscribe) y lo 
        metemos en la variable (variableRespuesta)*/ 
      console.log(variableRespuesta);
      });
    }
}
