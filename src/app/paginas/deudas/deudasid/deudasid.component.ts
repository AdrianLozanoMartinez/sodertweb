import { Component, OnInit } from '@angular/core';
import { ServiciosdeudasService } from '../servicio/serviciosdeudas.service';
import { DeudasModel } from '../model/deudas.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deudasid',
  templateUrl: './deudasid.component.html',
  styleUrls: ['./deudasid.component.css']
})
export class DeudasidComponent implements OnInit {

  DeudasModel = new DeudasModel(); 

  constructor( private servicio: ServiciosdeudasService, private Route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    const variable_Id = this.Route.snapshot.paramMap.get('id');          
        console.log(variable_Id);
    
        if ( variable_Id !== 'nuevo' ){                                        
          this.servicio.getUnElementode(variable_Id).subscribe( (variable_respuesta: DeudasModel) => {     
          console.log(variable_respuesta);
  
          this.DeudasModel = variable_respuesta;                                   
          this.DeudasModel.id = variable_Id;                                       
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
  
if (this.DeudasModel.id){                                                                                

variablePeticion = this.servicio.actualizarDeudas(this.DeudasModel);                           
variablePeticion.subscribe( variableRespu => {
  Swal.fire({                                                                                  
  title: this.DeudasModel.persona,                                                                     
  text: 'Se actualizó correctamente',                                                              
  icon: 'success',
  showConfirmButton: false                                                                                 
});
});

this.router.navigateByUrl('/deudas');

}else{

variablePeticion = this.servicio.crearDeudas(this.DeudasModel);                      
variablePeticion.subscribe( variableRespu => {                                        
    Swal.fire({
    title: this.DeudasModel.persona,
    text: 'Se guardó correctamente',
    icon: 'success',
    showConfirmButton: false   
    });
});

this.router.navigateByUrl('/deudas');
}      



}


}
