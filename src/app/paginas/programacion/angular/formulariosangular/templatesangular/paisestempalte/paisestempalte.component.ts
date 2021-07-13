import { Component, OnInit } from '@angular/core';
//Para usar [(ngModel)] 
import { NgForm } from '@angular/forms';
//Servicio
import { ServiciotemplateService } from '../servicio/serviciotemplate.service';    
                                                //Manejar el JSON de la API de la web

@Component({
  selector: 'app-paisestempalte',
  templateUrl: './paisestempalte.component.html',
  styleUrls: ['./paisestempalte.component.css']
})
export class PaisestempalteComponent implements OnInit {

  usuario = {
    nombre: '',                   //Nombre, apellido, email y género vacío para poder meter cualquier palabra
    nombreDePrueba: 'Adri',       //Se observa del tirón en el formulario el nombre indicado
    apellido: '',
    email: '',
    genero: '',
    pais: '',                  /*Definimos las subvariables pais y paisPrueba para trabajar en el html. 
                                    Ponemos el código como mostramos en el paisPrueba*/
    paisPrueba: 'ESP'      //ESP -> Código de España
  }
  variablePaises2: any[] = [];
  
  constructor( private paisService: ServiciotemplateService ) { }

  ngOnInit(){

    this.paisService.getPaises().subscribe( variablePaises => {    
  
      /*Metemos en la variable (paisService) la función (getPaises()) 
        que se encuentra en el servicio.ts. Subscribe es necesario 
        para realizar la petición y lo metemos todo en la variable (variablePaises)*/
  
      this.variablePaises2 = variablePaises;                                
      //console.log(this.variablePaises2);       //Observamos todos los países del JSON de la API de la web
  
      this.variablePaises2.unshift({      
      
      /*Ponemos en la primera posición lo que hay dentro de las llaves 
       (nombre: '[ Seleccione Pais ]', codigo: '')para no tener 
        seleccionado de primera opción un país*/
  
          nombre: '[ Seleccione Pais ]',
          codigo: ''
        })
  
        //console.log(variablePaises);  //Observamos todos los países del JSON de la API de la web
      
      });
  
    }

  guardartemplate( variableLocalTemplate:NgForm ){                   /*Función que coge la variable local del html (variableLocalTemplate), 
                                                                        coge los datos del html con ayuda del ngModel*/
      if ( variableLocalTemplate.invalid ){                       //Si el formulario es inválido
        
    Object.values ( variableLocalTemplate.controls ).forEach( variableControl => {  //Object.values ( variableLocalTemplate.controls ) -> Extrae todos los valores que contenga la variable local del formulario (variableLocalTemplate). .forEach -> Para coger cada campo (nombre, apellido, email...). variableControl => -> Lo metemos todos en la variableControl gracias a la función de flecha (=>)
      //console.log(variableControl);                             //Saca en consola cada control de cada campo (nombre, apellido, email...)
      variableControl.markAllAsTouched();
    });

    return;
  }
  
      /*console.log("Submit pulsado");                                         
      console.log(variableLocalTemplate);                                    //Coge toda la información del formulario, incluyendo los datos cogido
      console.log(variableLocalTemplate.value);                              //Coge solo los datos cogidos
      console.log('¿Formulario válido?:' + variableLocalTemplate.valid);*/
}



}


