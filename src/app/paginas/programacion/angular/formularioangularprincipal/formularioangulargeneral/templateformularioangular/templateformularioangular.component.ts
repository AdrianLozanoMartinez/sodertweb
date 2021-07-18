import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiciotemplateService } from './servicio/serviciotemplate.service';

@Component({
  selector: 'app-templateformularioangular',
  templateUrl: './templateformularioangular.component.html',
  styleUrls: ['./templateformularioangular.component.css']
})
export class TemplateformularioangularComponent implements OnInit {


  usuarioPorDefecto = {
    nombre: 'Adri'
  }

  usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    pais: '',  //Al tener el código abajo vacío si ponemos aquí un código lo pone predeterminado en el formulario ejemplo ESP
    genero: ''
  }

  paises: any[] = [];

  constructor( private paisService: ServiciotemplateService) { }

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
      variableLocal.reset();  //Se resetea formulario al pulsar guardar
        return;
    }

   // console.log(variableLocal);  //Vemos en consola si es válido (valid) o no (invalid) el formulario, controls (ngModel), errors, status, touched...entre otras opciones
   // console.log(variableLocal.value);  //.opción del ngForm
    
  }



  guardar2( variableLocal2: NgForm ){   ///GUARDAR DE LA PARTE DE PAISES


    if ( variableLocal2.invalid ){

      Object.values( variableLocal2.controls ).forEach( variableControlador2 => {  

          variableControlador2.markAsTouched(); 
      });
      variableLocal2.reset();  //Se resetea formulario al pulsar guardar
        return;
    }

   // console.log(variableLocal2);  
    //console.log(variableLocal2.value);  
    
  }


  guardar3( variableLocal3: NgForm ){   ///GUARDAR DE LA PARTE DE PAISES


    if ( variableLocal3.invalid ){

      Object.values( variableLocal3.controls ).forEach( variableControlador3 => {  

          variableControlador3.markAsTouched(); 
      });
      variableLocal3.reset();  //Se resetea formulario al pulsar guardar
        return;
    }

    //console.log(variableLocal3);  
    //console.log(variableLocal3.value);  
    
  }
//Html
c=`{`;
co=`<`;
f=`*`;
p=`(`;
t=`[`;
boom=`&nbsp;`;
}
