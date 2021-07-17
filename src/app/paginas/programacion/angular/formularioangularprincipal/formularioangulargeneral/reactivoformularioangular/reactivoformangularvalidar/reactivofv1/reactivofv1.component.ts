import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';  //Validación síncronos -> Se puede hacer directamente sin necesidad de web externa y mismo hilo de tiempo


@Component({
  selector: 'app-reactivoformangularvalidar1',
  templateUrl: './reactivofv1.component.html',
  styleUrls: ['./reactivofv1.component.css']
})
export class Reactivoformangularvalidar1Component implements OnInit {

  
  variableTsLocal: FormGroup;   

  constructor( private fb:FormBuilder ) { 
    this.crearFromulario();
  }

  ngOnInit(): void {
  }


  crearFromulario(){
    
    this.variableTsLocal = this.fb.group({
      //Campo_del_html: ['Valor por defecto que pongamos', 'Validación síncronos', 'Validación asíncronos']   //Se puede hacer directamente sin necesidad de web externa y mismo hilo de tiempo
      nombreTs: ['', Validators.required ],  //1 Validación no necesario ponerlo entre [] en 2 o más Validaciones necesario poner []
      apellidoTs: ['', [Validators.required, Validators.minLength(5)] ], //required -> Obligatorio. max, min -> Para números. maxLength, minLength -> Para letras. pattern -> PAra expresiones regulares, usadas en email, contraseñas
      correoTs: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],  //Si cogemos la opción correo da válido adri@extensión sin contar .com, .es ... Al ponerle el pattern y especificar si nos obliga a poner un email real
      direccionTs: this.fb.group({      //Engloba dos campos en un único conjunto, en el html se hace referencia al nombre (direccion) en el inicio del campo
        distritoTs: ['', Validators.required ],
        ciudadTs: ['', Validators.required ],
      })
    });
  }

  cargarDatoAlFormulario(){

    // this.variableTsLocal.setValue({  
    this.variableTsLocal.reset({   
      nombreTs: '',
      apellidoTs: '',
      correoTs: '',
      direccionTs: {
        distritoTs: '',
        ciudadTs: '',
    }
    });

  }


  //Para que salga rojo si da fallo y los mensajes
  get nombreNoValido(){
    return this.variableTsLocal.get('nombreTs').invalid && this.variableTsLocal.get('nombreTs').touched   //nombreTs definido arriba, dentro de la función (crearFromulario)
  }

  get apellidoNoValido(){
    return this.variableTsLocal.get('apellidoTs').invalid && this.variableTsLocal.get('apellidoTs').touched
  }

  get correoNoValido(){
    return this.variableTsLocal.get('correoTs').invalid && this.variableTsLocal.get('correoTs').touched
  }

  get distritoNoValido(){
    return this.variableTsLocal.get('direccionTs.distritoTs').invalid && this.variableTsLocal.get('direccionTs.distritoTs').touched
  }

  get ciudadNoValido(){
    return this.variableTsLocal.get('direccionTs.ciudadTs').invalid && this.variableTsLocal.get('direccionTs.ciudadTs').touched
  }


  guardar(){  
    console.log( this.variableTsLocal );  

      if ( this.variableTsLocal.invalid ){    //Si es invalido lo que introducimos lanza lo de abajo que junto con el html muestra todo lo que no se ha tocado, o no tenga las condiones síncronas al pulsar el botón salga en rojo y la letra también en rojo
  
        return Object.values( this.variableTsLocal.controls ).forEach( variableControlador => {  //Devuelve el valor de cada variable de control, para que salga si tiene o no error (en rojo y mensaje en rojo) según las condiciones
  
            // variableControlador.markAsTouched();  //Tocado, Si no tiene campos anidado se deja este ahí

            if ( variableControlador instanceof FormGroup ){  //Cuando se ponen campos anidados y usamos de nuevo el fb.group
              Object.values( variableControlador.controls ).forEach ( controladorgrupal => controladorgrupal.markAsTouched() );
            }
            else{
              variableControlador.markAsTouched();  //Igual que sin anidados pero cambiando el sitio
            }
        });
  
      }
  
      console.log(this.variableTsLocal);  
      console.log(this.variableTsLocal.value);  

      //Resetear información al pulsar el botón guardar y enviar
     this.variableTsLocal.reset();  //Si resetea solamente

     /*this.variableTsLocal.reset({  //Resetear y dejar escrito algo en uno o más campos
      nombreTs: 'Sin dato eah!!'
    }); */
      
    }
  

  


}
