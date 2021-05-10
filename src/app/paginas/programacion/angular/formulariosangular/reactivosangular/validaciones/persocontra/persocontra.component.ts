import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';   
import { ServicioreactivoService } from '../../servicio/servicioreactivo.service'; 

@Component({
  selector: 'app-persocontra',
  templateUrl: './persocontra.component.html',
  styleUrls: ['./persocontra.component.css']
})
export class PersocontraComponent implements OnInit {


  variableFormGroup: FormGroup;       
  
  constructor( private variableFormBuilder: FormBuilder,
               private variableValidadores: ServicioreactivoService ) {      

  this.crearFormulario();    
}   

  ngOnInit(): void {
  }

crearFormulario(){            
    this.variableFormGroup = this.variableFormBuilder.group({
                  
        campoNombre: ['', [ Validators.required, Validators.minLength(5) ]],      
        campoApellido: ['', Validators.required],
        campoCorreo: ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        campoPrueba: ['Prueba de lo que se ve si ponemos algo permanente o lo que añadamos'],
        campoNoRecomendable: [''],
        /*pass1 y 2 son los nombres pues en el formControlName del html. '' es lo que saldrá en el formulario, 
        en este caso vacío y el siguiente , ponemos las validaciones (Validators.required)*/
        pass1: ['', Validators.required ],                                         
        pass2: ['', Validators.required ],
        direccion: this.variableFormBuilder.group({          
          campoDistrito: ['', Validators.required],
          campoCiudad: ['', Validators.required],
        }),
        },{
            validators: this.variableValidadores.passwordsIguales('pass1','pass2')  
            /*Creamos dentro del crearFormulario para poder validar e igualar ambas contraseña, 
            para ello lo enlazamos con el servicio con la función (passwordsIguales) y 
            metiendo los dos argumentos declarado más arriba (pass1 y pass2)*/
    });
  }

  guardar(){          
    if ( this.variableFormGroup.invalid ){
    
    return Object.values ( this.variableFormGroup.controls ).forEach( variableControl => {                         
                                                             
      if ( variableControl instanceof FormGroup ){     
                                                                    
          Object.values( variableControl.controls ).forEach( variablecontrol2 => variablecontrol2.markAllAsTouched() );
      }else{
        variableControl.markAllAsTouched();
      }

  });

  
    }
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
    /*Comparamos una contraseña con otra. Metemos en pass1 y en pass2 el valor introducido (this.variableFormGroup.get('pass1').value 
    y this.variableFormGroup.get('pass2').value)*/
    const pass1 = this.variableFormGroup.get('pass1').value;
    const pass2 = this.variableFormGroup.get('pass2').value;
    //Comparamos si pass1 es igual que pass2, sino (?) es así devuelve false. Si es así (:) devuelve true
    return ( pass1 === pass2 ) ? false : true;                            
   }

}
