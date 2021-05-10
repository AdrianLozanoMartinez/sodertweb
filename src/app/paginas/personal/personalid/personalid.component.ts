import { Component, OnInit } from '@angular/core';
import { ServiciopersonalService } from '../servicio/serviciopersonal.service';
import { PersonalModel } from '../model/personal.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personalid',
  templateUrl: './personalid.component.html',
  styleUrls: ['./personalid.component.css']
})
export class PersonalidComponent implements OnInit {

  PersonalModel = new PersonalModel(); 

  constructor( private servicio: ServiciopersonalService, private Route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    const variable_Id = this.Route.snapshot.paramMap.get('id');          
        console.log(variable_Id);
    
        if ( variable_Id !== 'nuevo' ){                                        
          this.servicio.getUnElemento3(variable_Id).subscribe( (variable_respuesta: PersonalModel) => {     
          console.log(variable_respuesta);
  
          this.PersonalModel = variable_respuesta;                                   
          this.PersonalModel.id = variable_Id;                                       
          });
        }
  }

  guardar( HTML: NgForm ){        

    if ( HTML.invalid ){          
    console.log('Formulario no válido');
        return;
    }

    Swal.fire({                                                                 
      title: 'Espere',                                                                            
      text: 'Guardando información',                                                             
      icon: 'info',                                                                         
      allowOutsideClick: false                                                                         
  });
  
  Swal.showLoading();                                                                                 


  let variablePeticion: Observable<any>; 
  
if (this.PersonalModel.id){                                                                                

variablePeticion = this.servicio.actualizarPersonal(this.PersonalModel);                           
variablePeticion.subscribe( variableRespu => {
  Swal.fire({                                                                                  
  title: this.PersonalModel.persona,                                                                     
  text: 'Se actualizó correctamente',                                                              
  icon: 'success',
  showConfirmButton: false                                                                                 
});
});

this.router.navigateByUrl('/personal');

}else{

variablePeticion = this.servicio.crearPersonal(this.PersonalModel);                      
variablePeticion.subscribe( variableRespu => {                                        
    Swal.fire({
    title: this.PersonalModel.persona,
    text: 'Se guardó correctamente',
    icon: 'success',
    showConfirmButton: false   
    });
});

this.router.navigateByUrl('/personal');
}      



}


}

