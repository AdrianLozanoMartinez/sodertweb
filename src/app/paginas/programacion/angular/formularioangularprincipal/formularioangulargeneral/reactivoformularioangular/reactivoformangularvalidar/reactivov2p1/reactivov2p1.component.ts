import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiciopassService } from './servicio/serviciopass.service';

@Component({
  selector: 'app-reactivov2p1',
  templateUrl: './reactivov2p1.component.html',
  styleUrls: ['./reactivov2p1.component.css']
})
export class Reactivov2p1Component implements OnInit {

  variableTsLocal: FormGroup;   

  constructor( private fb:FormBuilder,
               private servicioPass: ServiciopassService ) { 
    this.crearFromulario();
    //this.cargarDatoAlFormulario();
  }

  ngOnInit(): void {
  }

  crearFromulario(){
    
    this.variableTsLocal = this.fb.group({
      //Campo_del_html: ['Valor por defecto que pongamos', 'Validación síncronos', 'Validación asíncronos']   //Se puede hacer directamente sin necesidad de web externa y mismo hilo de tiempo
      pass1: ['', Validators.required ],  //1 Validación no necesario ponerlo entre [] en 2 o más Validaciones necesario poner []
      pass2: ['', Validators.required ],

    },{//Añadimos aquí lo nuevo ponemos , y {}
      validators: this.servicioPass.passIgual('pass1','pass2')
    });
  }

//Para que salga rojo si da fallo y los mensajes
get passNoValido(){
  return this.variableTsLocal.get('pass1').invalid && this.variableTsLocal.get('pass1').touched   //pass1 definido arriba, dentro de la función (crearFromulario)
}

get passIGUALNoValido(){
  const pass1 = this.variableTsLocal.get('pass1').value;
  const pass2 = this.variableTsLocal.get('pass2').value;

  return ( pass1 === pass2 ) ? false : true;
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
