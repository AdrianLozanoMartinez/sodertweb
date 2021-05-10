import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';              

@Component({
  selector: 'app-personalizadas',
  templateUrl: './personalizadas.component.html',
  styleUrls: ['./personalizadas.component.css']
})
export class PersonalizadasComponent implements OnInit {

  variableFormGroup: FormGroup;       
  
  constructor( private variableFormBuilder: FormBuilder ) {      

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
        direccion: this.variableFormBuilder.group({          
          campoDistrito: ['', Validators.required],
          campoCiudad: ['', Validators.required],
        })
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

}