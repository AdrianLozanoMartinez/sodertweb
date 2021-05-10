import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';       //Para usar validaciones 

@Component({
  selector: 'app-sincronas',
  templateUrl: './sincronas.component.html',
  styleUrls: ['./sincronas.component.css']
})
export class SincronasComponent implements OnInit {

    variableFormGroup: FormGroup;       
  
    constructor( private variableFormBuilder: FormBuilder ) {      
  
    this.crearFormulario();    
  }   
  
    ngOnInit(): void {
    }
  
  crearFormulario(){            
      this.variableFormGroup = this.variableFormBuilder.group({
                      /*Síncronos: Validaciones inmediata y no requiere interaccion con servicios web de fuera 
                        o se ejecuta siempre en el mismo hilo de tiempo. 
                        Sale en consola si es válido o no (Valid)*/
                      //['Dato o vacío para introducir luego', Validadores síncronos, Validadores asíncronos]
                      //['Dato', [ Validadores síncronos1, Validadores síncronos2], Validadores asíncronos]
          campoNombre: ['', [ Validators.required, Validators.minLength(5) ]],       /*Otras opciones: email, max, 
                                                                                              maxLength, min, minLength (max...min numérico), 
                                                                                              nullValidator (que no sea null), required, pattern*/    
          campoApellido: ['', Validators.required],
          campoCorreo: ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
          campoPrueba: ['Prueba de lo que se ve si ponemos algo permanente o lo que añadamos'],
          campoNoRecomendable: [''],
  
          direccion: this.variableFormBuilder.group({          
            campoDistrito: ['', Validators.required],
            campoCiudad: ['', Validators.required],
          })
      });
    }
  
    guardar(){          
      if ( this.variableFormGroup.invalid ){
      
        //1º Opción
        //Object.values ( this.variableFormGroup.controls ).forEach( variableControl => {    
           /*Object.values -> Extrae todos los valores que contenga la variable local del formulario (variableFormGroup). 
                                  VariableFormGroup.controls -> Coge todos los controles de la variable local del formulario (variableFormGroup) 
                                                              .forEach -> Para coger cada campo (nombre, apellido, email...). 
                                                                      ( variableControl => -> Lo metemos todos en la variableControl 
                                                                                              gracias a la función de flecha (=>)*/
          //console.log(variableControl);               //Saca en consola cada control de cada campo (nombre, apellido, email...)
          //variableControl.markAllAsTouched();         //Se marca error en los campos que no han sido rellenados al darle al botón submit (guardar/enviar)
        //});
    
        //return;*/
    
        //2º Opción
     /* return Object.values ( this.variableFormGroup.controls ).forEach( variableControl => {
      console.log(variableControl);
      variableControl.markAllAsTouched();
    });*/

    //3ºOpción - Con dirección
      return Object.values ( this.variableFormGroup.controls ).forEach( variableControl => {                         
                                                                /*Son iguales que anteriormente. Cambia:
                                                                  variableControl.controls: Anteriormente this.variableFormGroup.controls. 
                                                                  variableControl (Variable control optenido en la función de fecha anterior) 
                                                                  .controls (Los controles que existen)
                                                                  variablecontrol2 Anteriormente variableControl. Cambia solo la variable*/
        if ( variableControl instanceof FormGroup ){     /*Si la variable de control (variableControl) es una instancia (instanceof) 
                                                                      del FormGroup evalua de nuevo lo anterior Object.values...*/
                                                                      
            Object.values( variableControl.controls ).forEach( variablecontrol2 => variablecontrol2.markAllAsTouched() );
        }else{
          variableControl.markAllAsTouched();
        }

    });

    
      }
    }
    
    get nombreNoValido(){                                                                                             
    //Coger el contenido de nombreNoValido (return this.variableFormGroup.get('campoNombre').invalid && this.variableFormGroup.get('campoNombre').touched)
      return this.variableFormGroup.get('campoNombre').invalid && this.variableFormGroup.get('campoNombre').touched   
      //Devuelve (this.variableFormGroup.get('campoNombre').invalid && this.variableFormGroup.get('campoNombre').touched) para que coja el get
      //Metemos (this) en variableFormGroup el contenido (get) del campo (campoPrueba) y miramos si es válido y si ha sido tocado
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
  
  }

