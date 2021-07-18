import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AsinservicioService } from './servicio/asinservicio.service';

@Component({
  selector: 'app-reactivovasin',
  templateUrl: './reactivovasin.component.html',
  styleUrls: ['./reactivovasin.component.css']
})
export class ReactivovasinComponent implements OnInit {

  variableTsLocal: FormGroup;   

  constructor( private fb:FormBuilder,
               private servicioasincrono: AsinservicioService ) { 
    this.crearFromulario();
    //this.cargarDatoAlFormulario();
    this.crearListeners()  //Vemos lo que introduzcamos en consola
  }

  ngOnInit(): void {
  }

  crearFromulario(){
    
    this.variableTsLocal = this.fb.group({
      //Campo_del_html: ['Valor por defecto que pongamos', 'Validación síncronos', 'Validación asíncronos']   
      usuarioTs: ['', , this.servicioasincrono.existeUsuario ],  //1 Validación no necesario ponerlo entre [] en 2 o más Validaciones necesario poner []
    });
  }

//Para que salga rojo si da fallo y los mensajes
get usuarioNoValido(){
  return this.variableTsLocal.get('usuarioTs').invalid && this.variableTsLocal.get('usuarioTs').touched   
}

crearListeners(){
  this.variableTsLocal.get('usuarioTs').valueChanges.subscribe( console.log );  //Vemos lo que introduzcamos en consola
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
