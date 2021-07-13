import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';         
import { ServicioreactivoService } from '../servicio/servicioreactivo.service'; 

@Component({
  selector: 'app-detectarcambios',
  templateUrl: './detectarcambios.component.html',
  styleUrls: ['./detectarcambios.component.css']
})
export class DetectarcambiosComponent implements OnInit {


  variableFormGroup: FormGroup;       

  constructor( private variableFormBuilder: FormBuilder,        
               private variableValidadores: ServicioreactivoService, ) {    

  this.crearFormulario(); 
  
  //Llamamos la función (detectarCambios()) en el constructor para que se ejecute lo primero
 // this.detectarCambios();
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
             campoestatico: this.variableFormBuilder.array([                 
              [],[],[],[],[]
              ]),
             campodinamico: this.variableFormBuilder.array([])
        },{
            validators: this.variableValidadores.passwordsIguales('pass1','pass2')  
    });
  }

       /*Detecta cambios que hagamos en el formulario podemos observar que lanza un cambio 
       en consola (console.log(variableValorCambios);) por el valueChanges*/
       detectarCambios(){   

       //Para ver en consola todos los datos detallados (No recomedable)
       this.variableFormGroup.valueChanges.subscribe( variableValorCambios => { 
       /*Cogemos la variable de FormGroup (variableFormGroup) y la evaluamos (valueChanges)
         cada vez que escribimos y lo metemos/subscribimos a una variable (variableValorCambios) 
         y podemos observar los cambios por ejemplo con console.log(variableValorCambios);*/   

           console.log(variableValorCambios);
       });
     
       /*Igual que valueChanges pero con statusChanges donde se ve si está válido / Inválido / Pendiente.
         Los síncronos se muestra antes y los asíncronos (3500 segundos marcado por nosotros) después. 
         Ejemplo si cambiamos el campo de Usuario: {VariableStatus: "VALID"} //Validaciones Síncronas*/
       this.variableFormGroup.statusChanges.subscribe( VariableStatus => console.log({VariableStatus}));   
     
       //Para ver en consola solo los datos que elijamos, para visualmente sea más cómodo (Recomendable)
         this.variableFormGroup.get('campoNombre').valueChanges.subscribe(console.log); 
         /*Igual que el anterior pero en vez de tan detallado solo los elementos que elijamos (campoNombre...) 
           y solo muestra el valor. Se puede poner todos y controlarlos (campoCorreo, campoUsuario...)*/         
         this.variableFormGroup.get('campoApellido').valueChanges.subscribe(console.log);
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
      //ANTES SALÍA AHORA NO ME SALE - LO PREDETERMINADO DE COMER, DORMIR
    ['Comer','Dormir'].forEach( variableValor => this.dinamico.push(this.variableFormBuilder.control(variableValor) ) );  
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

agregarPasatiempo(){                                               
//1º Opción, que no usamos porque ya tenemos arriba una función que lo hace (get dinamico()...)
//this.variableFormGroup.get('')

//2º Opción, que se usa al tener get dinamico()
  this.dinamico.push( this.variableFormBuilder.control('Nuevo elemento', Validators.required))  
}

borrarPasatiempo( i: number ){                                 
  this.dinamico.removeAt(i);                                  
}
}
