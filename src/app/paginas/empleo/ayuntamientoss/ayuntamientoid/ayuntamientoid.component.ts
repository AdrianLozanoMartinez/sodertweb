import { Component, OnInit } from '@angular/core';
import { MunicipiosModel } from  '../model/municipios.model';
import { NgForm } from '@angular/forms';
import { ServicioayuntamientoService } from '../servicio/servicioayuntamiento.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ayuntamientoid',
  templateUrl: './ayuntamientoid.component.html',
  styleUrls: ['./ayuntamientoid.component.css']
})
export class AyuntamientoidComponent implements OnInit {

  MunicipiosModel = new MunicipiosModel(); 

  constructor( private servicio: ServicioayuntamientoService, private Route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    const variable_Id = this.Route.snapshot.paramMap.get('id');          
        console.log(variable_Id);
    
        if ( variable_Id !== 'nuevo' ){                                        
          this.servicio.getUnElemento(variable_Id).subscribe( (variable_respuesta: MunicipiosModel) => {     
          console.log(variable_respuesta);
  
          this.MunicipiosModel = variable_respuesta;                                   
          this.MunicipiosModel.id = variable_Id;                                       
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
  
if (this.MunicipiosModel.id){                                                                                

variablePeticion = this.servicio.actualizarMunicipio(this.MunicipiosModel);                           
variablePeticion.subscribe( variableRespu => {
  Swal.fire({                                                                                  
  title: this.MunicipiosModel.municipio,                                                                     
  text: 'Se actualizó correctamente',                                                              
  icon: 'success',
  showConfirmButton: false                                                                                 
});
});

this.router.navigateByUrl('/ayuntamiento');

}else{

variablePeticion = this.servicio.crearMunicipio(this.MunicipiosModel);                      
variablePeticion.subscribe( variableRespu => {                                        
    Swal.fire({
    title: this.MunicipiosModel.municipio,
    text: 'Se guardó correctamente',
    icon: 'success',
    showConfirmButton: false   
    });
});

this.router.navigateByUrl('/ayuntamiento');
}      



}


}
