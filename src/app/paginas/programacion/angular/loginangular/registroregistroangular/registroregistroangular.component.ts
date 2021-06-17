import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../model/usuario.model'; //Model
import { NgForm } from '@angular/forms'; //Funcionalidades de los formularios

@Component({
  selector: 'app-registroregistroangular',
  templateUrl: './registroregistroangular.component.html',
  styleUrls: ['./registroregistroangular.component.css']
})
export class RegistroregistroangularComponent implements OnInit {


  usuario: UsuarioModel; //Metemos la estructura del model en la variable del usuario

  constructor() { }

  ngOnInit(): void {
      this.usuario = new UsuarioModel();  //Se asigna el formato del model y se usa para cuando se coge los datos del html y se muestra en la función GuardarDatos(){}

      //this.usuario.email = 'xxx@gmail.com';   //
  }   

  GuardarDatos( form: NgForm ){  //Recibimos del html

    if (form.invalid){   //Podemos usar todo lo que venga en el ngForm que observamos en pantalla: controls, errors, invalid, ngSubmit, pending, pristine (si no ha sido modificado), statusm touched, valid...
      console.log("Formulario inválido");
      
      return; //Se sale si no es válido y no muestra los mensajes de abajo
    }

    console.log(this.usuario);  //Datos de lo que cogemos
    console.log(form);  //Nos aparece los datos del formulario, valid -> Si es valido el formulario, por ejemplo al poner required si no se escribe pone false, si se rellena pondría true
    
  }
}