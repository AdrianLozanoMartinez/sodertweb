import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { Reactivov2pService } from './reactivov2p.service';  //Validación personalizada

@Component({
  selector: 'app-reactivov2p',
  templateUrl: './reactivov2p.component.html',
  styleUrls: ['./reactivov2p.component.css']
})
export class Reactivov2pComponent implements OnInit {

  variableTsLocal: FormGroup;   

  constructor( private fb:FormBuilder,
               private validadorPersonalizado: Reactivov2pService ) { 
    this.crearFromulario();
    //this.cargarDatoAlFormulario();
  }

  ngOnInit(): void {
  }


  crearFromulario(){
    
    this.variableTsLocal = this.fb.group({
      //Campo_del_html: ['Valor por defecto que pongamos', 'Validación síncronos', 'Validación asíncronos']   //Se puede hacer directamente sin necesidad de web externa y mismo hilo de tiempo
      datoTs: ['', [Validators.required, this.validadorPersonalizado.noPalabra] ],  //1 Validación no necesario ponerlo entre [] en 2 o más Validaciones necesario poner []
    });
  }

  cargarDatoAlFormulario(){

    // this.variableTsLocal.setValue({  
    this.variableTsLocal.reset({   
      datoTs: '',
    });
     
  }


  //Para que salga rojo si da fallo y los mensajes
  get datoNoValido(){
    return this.variableTsLocal.get('datoTs').invalid && this.variableTsLocal.get('datoTs').touched   //datoTs definido arriba, dentro de la función (crearFromulario)
  }


  guardar(){  
    console.log( this.variableTsLocal );  

      if ( this.variableTsLocal.invalid ){    //Si es invalido lo que introducimos lanza lo de abajo que junto con el html muestra todo lo que no se ha tocado, o no tenga las condiones síncronas al pulsar el botón salga en rojo y la letra también en rojo
  
        return Object.values( this.variableTsLocal.controls ).forEach( variableControlador => {  //Devuelve el valor de cada variable de control, para que salga si tiene o no error (en rojo y mensaje en rojo) según las condiciones
  
             variableControlador.markAsTouched();  //Tocado, Si no tiene campos anidado se deja este ahí
        });
  
      }
  
      console.log(this.variableTsLocal);  
      console.log(this.variableTsLocal.value);  

      //Resetear información al pulsar el botón guardar y enviar
     this.variableTsLocal.reset();  //Si resetea solamente

     /*this.variableTsLocal.reset({  //Resetear y dejar escrito algo en uno o más campos
      datoTs: 'Sin dato eah!!'
    }); */
      
    }
  

  


}