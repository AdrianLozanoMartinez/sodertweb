import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';  //FormGroup -> Variable local (variableTsLocal) como cuando se usaba en el Html (template) pero esta vez en el Ts y sin # lo inicializamos  //FormBuilder -> Simplifica la forma de controlar los formularios reactivos

@Component({
  selector: 'app-reactivoformangular1',
  templateUrl: './reactivof1.component.html',
  styleUrls: ['./reactivof1.component.css']
})
export class Reactivoformangular1Component implements OnInit {

  variableTsLocal: FormGroup;   //Variable local (variableTsLocal) como cuando se usaba en el Html (template) pero esta vez en el Ts y sin # lo inicializamos 

  constructor( private fb:FormBuilder ) { //Simplifica la forma de controlar los formularios reactivos
    this.crearFromulario();
    //this.cargarDatoAlFormulario();
  }

  ngOnInit(): void {
  }

  crearFromulario(){
    // Se usa estas variables (nombreTs, apellidoTs, correoTs) en el html a través de formControlName="nombreTs". formControlName (reactivo) actúa como un [ngModel] (template)
    this.variableTsLocal = this.fb.group({
      //Campo_del_html: ['Valor por defecto que pongamos', 'Validación síncronos', 'Validación asíncronos']
      pruebaTs: ['Valor por defecto escrito en el Ts','',''],
      anidadoTs: this.fb.group({    //Engloba dos campos en un único conjunto, en el html se hace referencia al nombre (anidadoTs) en el inicio del campo
          subanidado1Ts: ['', , ],
          subanidado2Ts: ['', , ],
      }),
      camposDinamicos: this.fb.array([])
    });
  }

  get camposDinamicosfuncion(){
    return this.variableTsLocal.get('camposDinamicos') as FormArray;
  }

  agregarCampoDinamico(){
    this.camposDinamicosfuncion.push( this.fb.control(''));
  }

  borrarCampoDinamico( i:number ){
    this.camposDinamicosfuncion.removeAt(i);
  }

  cargarDatoAlFormulario(){

    // this.variableTsLocal.setValue({  //Es necesario poner todos los campos
    this.variableTsLocal.reset({   //No es necesario poner todos los campos
      pruebaTs: '',
      anidadoTs: {
          subanidado1Ts: 'Podemos ponerle valores predeterminado',
          subanidado2Ts: 'en cualquier campo',
    }
    });
      // ['Dato1','Dato2'].forEach( DatoRecibido => this.camposDinamicosfuncion.push( this.fb.control(DatoRecibido) ) );
      ['',''].forEach( DatoRecibido => this.camposDinamicosfuncion.push( this.fb.control(DatoRecibido) ) );
  }


  guardar(){  //No cogemos la variable del html como en el template porque ya lo tenemos definidos en el Ts especialmente en la función crearFromulario
    console.log( this.variableTsLocal );  //Si ponemos otro (.) observamos las diferentes opciones que podemos usar, value, touched...
    
    //Resetear información al pulsar el botón guardar y enviar
    // this.variableTsLocal.reset();  //Si resetea solamente

     this.variableTsLocal.reset({  //Resetear y dejar escrito algo en uno o más campos
       pruebaTs: 'Sin dato eah!!'
     }); 
  }


}
