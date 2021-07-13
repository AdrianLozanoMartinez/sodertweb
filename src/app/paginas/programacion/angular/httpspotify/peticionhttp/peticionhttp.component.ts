import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiciopaisesService } from './serviciopaises/serviciopaises.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-peticionhttp',
  templateUrl: './peticionhttp.component.html',
  styleUrls: ['./peticionhttp.component.css']
})
export class PeticionhttpComponent implements OnInit {

  //MOSTRAR TODO
  variable_paises: any[] = [];

  //SELECCIONAR UNO
  usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    pais: ''  //Al tener el código abajo vacío si ponemos aquí un código lo pone predeterminado en el formulario ejemplo ESP
  }

  paises: any[] = [];

  constructor( private variable_http: HttpClient, private paisService: ServiciopaisesService ) {

   this.variable_http.get('https://restcountries.eu/rest/v2/lang/es')
   .subscribe ( (dato_recibido:any) => {
     this.variable_paises = dato_recibido;    //Comparamos para poder meterlo en la variable y poder sacarlo al html
     //console.log(dato_recibido);   //Se ve en consola toda la información, pero no se puede sacar al html, para ello tenemos que poner otra variable y compararla
     
   });    //subscribe -> Tenemos que subscribirnos para obtener los datos de la dirección que contiene json con datos ya comprobado en el Postman
}


  ngOnInit(): void {

    this.paisService.getPaises().subscribe ( VienePaises => {

      //console.log('Países que hablan Español antes de la comparación: ', VienePaises);
      
      this.paises = VienePaises  //paises: any[] = [] (this.paises) = Paises que vienen del servicio (VienePaises)

      //console.log('Países que hablan Español después de la comparación: ', this.paises);

      this.paises.unshift({  //unshift añade un nuevo elemento a la posición del arreglo
        nombre: '[ Seleccione Pais ]',  //Es lo primero que saldrá y seleccionado
        codigo: ''  //Al dejarlo vacío podemos poner en el arreglo de usuario de arriba el código que queramos que salga por defecto
      })
      
    })

  }

  guardar( variableLocal: NgForm ){


    if ( variableLocal.invalid ){//Si algún campo es inválido (no se a completado los 5 caractéres, no se ha rellenado, etc...)

      Object.values( variableLocal.controls ).forEach( variableControlador => {  //Evaluamos el objeto (formulario), en especial los controles (controls) de lo que recibimos (variableLocal), recorremos (forEach) todos los campos que tenga ngModel que es lo que recibe la función guardar() al pulsar el botón submit. Lo que obtenemos lo metemos en la variable -> variableControlador

          variableControlador.markAsTouched(); //markAsTouched -> Marca como tocado al pulsar submit cada variable para que se dispare los errores si no cumple los demás requisitos (required, minlegth...)
      });

        return;
    }

    //console.log(variableLocal);  //Vemos en consola si es válido (valid) o no (invalid) el formulario, controls (ngModel), errors, status, touched...entre otras opciones
    //console.log(variableLocal.value);  //.opción del ngForm
    
  }
//Html
c=`{`;
co=`<`;
f=`*`;
p=`(`;
t=`[`;
}
