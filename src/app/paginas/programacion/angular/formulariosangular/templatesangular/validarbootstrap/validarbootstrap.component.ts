import { Component, OnInit } from '@angular/core';
//Para usar [(ngModel)] 
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-validarbootstrap',
  templateUrl: './validarbootstrap.component.html',
  styleUrls: ['./validarbootstrap.component.css']
})
export class ValidarbootstrapComponent implements OnInit {

  usuario = {
    nombre: '',                   //Nombre, apellido, email y género vacío para poder meter cualquier palabra
    nombreDePrueba: 'Adri',       //Se observa del tirón en el formulario el nombre indicado
    apellido: '',
    email: '',
    genero: ''
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  guardartemplate( variableLocalTemplate:NgForm ){                   /*Función que coge la variable local del html (variableLocalTemplate), 
                                                                        coge los datos del html con ayuda del ngModel*/
      if ( variableLocalTemplate.invalid ){                       //Si el formulario es inválido
        
    Object.values ( variableLocalTemplate.controls ).forEach( variableControl => {  //Object.values ( variableLocalTemplate.controls ) -> Extrae todos los valores que contenga la variable local del formulario (variableLocalTemplate). .forEach -> Para coger cada campo (nombre, apellido, email...). variableControl => -> Lo metemos todos en la variableControl gracias a la función de flecha (=>)
      console.log(variableControl);                             //Saca en consola cada control de cada campo (nombre, apellido, email...)
      variableControl.markAllAsTouched();
    });

    return;
  }
  
      console.log("Submit pulsado");                                         
      console.log(variableLocalTemplate);                                    //Coge toda la información del formulario, incluyendo los datos cogido
      console.log(variableLocalTemplate.value);                              //Coge solo los datos cogidos
      console.log('¿Formulario válido?:' + variableLocalTemplate.valid);
}

}
