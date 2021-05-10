import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';         
import { ServicioreactivoService } from '../servicio/servicioreactivo.service';  

@Component({
  selector: 'app-arreglosdinamic',
  templateUrl: './arreglosdinamic.component.html',
  styleUrls: ['./arreglosdinamic.component.css']
})
export class ArreglosdinamicComponent implements OnInit {


  variableFormGroup: FormGroup;       

  constructor( private variableFormBuilder: FormBuilder,        
               private variableValidadores: ServicioreactivoService ) {    

  this.crearFormulario(); 
  
  this.cargarDatosFormulario();  
}   

  ngOnInit(): void {
  }

crearFormulario(){            
    this.variableFormGroup = this.variableFormBuilder.group({
                
        campoNombre: ['', [ Validators.required, Validators.minLength(5) ]],          
        campoApellido: ['', Validators.required, this.variableValidadores.noApellidoHerrera ],    
        campoCorreo: ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        campoPrueba: ['Prueba de lo que se ve si ponemos algo permanente o lo que añadamos'],
        campoNoRecomendable: [''],
        campoUsuario: ['', , this.variableValidadores.existeUsuario ],                   
        pass1: ['', Validators.required ],                                         
        pass2: ['', Validators.required ],
        direccion: this.variableFormBuilder.group({          
          campoDistrito: ['', Validators.required],
          campoCiudad: ['', Validators.required],
        }),
         /*Muestra automáticamente sin introducir nada y todo null 
             porque aún no está especificado: 
             Estado del formulario: false. Status : INVALID*/
             campoestatico: this.variableFormBuilder.array([                 
              [],[],[],[],[]
              ]),
            //No se ve ninguno y se irán añadiendo cuando pulsemos el botón agregar
             campodinamico: this.variableFormBuilder.array([])
        },{
            validators: this.variableValidadores.passwordsIguales('pass1','pass2')  
    });
  }

  cargarDatosFormulario(){                                                   

    //this.variableFormGroup.setValue({
      this.variableFormGroup.reset({
        campoNombre: '',
        campoApellido: '',
        campoCorreo: '',
        campoNoRecomendable: '',
        campoPrueba: "Prueba de lo que se ve si ponemos algo permanente en el TS o lo que añadamos en el HTML",
        campoUsuario: '',
        direccion: {
          campoDistrito: '',
          campoCiudad: ''
        },
      });
    //Cargar datos de forma permanente como en campoPrueba de arriba pero en formularios dinámicos
    ['Comer','Dormir'].forEach( variableValor => this.dinamico.push(this.variableFormBuilder.control(variableValor) ) );  
    /*Se añade valor (['Comer','Dormir']) por cada (forEach) valor (variableValor) sacado (=>) de la variable del for del html 
      (this.dinamico) cogiendo la variable*/
    }

  guardar(){          
  if ( this.variableFormGroup.invalid ){
      
    //1º Opción
    /*Object.values ( this.variableFormGroup.controls ).forEach( variableControl => {    
            console.log(variableControl);               
            variableControl.markAllAsTouched();         
    });

        return;*/

    //2º Opción
     /* return Object.values ( this.variableFormGroup.controls ).forEach( variableControl => {
      console.log(variableControl);
      variableControl.markAllAsTouched();
    });*/

    //3ºOpción - Con dirección
      return Object.values ( this.variableFormGroup.controls ).forEach( variableControl => {                         
                                                    
        if ( variableControl instanceof FormGroup ){     

            Object.values( variableControl.controls ).forEach( variablecontrol2 => variablecontrol2.markAllAsTouched() );
        }else{
          variableControl.markAllAsTouched();
        }

    });

  }


  //1º Opción - Reseteo de toda la información - Posteo de información
  this.variableFormGroup.reset();                                             
    
  //2º Opción - Reseteo de una parte de la información - Posteo de información
    /*this.variableFormGroup.reset({                                            
        campoNombre: 'Nombre reseteado',                                                
        campoCorreo: 'Miliki@yahoo.es'
      });*/
    }

get nombreNoValido(){                                                                                             
  return this.variableFormGroup.get('campoNombre').invalid && this.variableFormGroup.get('campoNombre').touched   
  }    

get apellidoNoValido(){
  return this.variableFormGroup.get('campoApellido').invalid && this.variableFormGroup.get('campoApellido').touched
}

get correoNoValido(){
  return this.variableFormGroup.get('campoCorreo').invalid && this.variableFormGroup.get('campoCorreo').touched
}

get distritoNoValido(){
    return this.variableFormGroup.get('direccion.campoDistrito').invalid && this.variableFormGroup.get('direccion.campoDistrito').touched
}

get ciudadNoValido(){
    return this.variableFormGroup.get('direccion.campoCiudad').invalid && this.variableFormGroup.get('direccion.campoCiudad').touched
}

get pass1NoValido(){                                              
  return this.variableFormGroup.get('pass1').invalid && this.variableFormGroup.get('pass1').touched
}

get pass2NoValido(){                                                
  const pass1 = this.variableFormGroup.get('pass1').value;
  const pass2 = this.variableFormGroup.get('pass2').value;

  return ( pass1 === pass2 ) ? false : true;                            
 }

get usuarioNoValido(){                                        
 return this.variableFormGroup.get('campoUsuario').invalid && this.variableFormGroup.get('campoUsuario').touched
}

get estatico(){
  return this.variableFormGroup.get('campoestatico') as FormArray;
}

get dinamico(){
  return this.variableFormGroup.get('campodinamico') as FormArray;
}

/*Función donde haremos que agregue campos, hay 2 opciones, pero usamos una que ya está definida arriba 
(this.dinamico.push( this.variableFormBuilder.control('Nuevo elemento', Validators.required))) 
y si no la tuvieramos sería esta otra (this.variableFormGroup.get('')...)*/
agregarPasatiempo(){                                               
//1º Opción, que no usamos porque ya tenemos arriba una función que lo hace (get dinamico()...)
//this.variableFormGroup.get('')

//2º Opción, que se usa al tener get dinamico()
  this.dinamico.push( this.variableFormBuilder.control('Nuevo elemento', Validators.required))  
  /*this.dinamico.push( -> Cogemos y metemos en el get de arriba (dinamico) pasando por 
    un arreglo con push. This.variableFormBuilder.control('Nuevo elemento', Validators.required)) -> 
    Para usar los controles usamos el variableFormBuilder y definimos mensaje + controles*/  
}

//Función que coge la variable (i) del índice (posición) para borrar
borrarPasatiempo( i: number ){  
  //Coge la nueva variable del for (dinamico) y con la función removeAt borra la posición seleccionada (i)                                     
  this.dinamico.removeAt(i);                                  
}
}
