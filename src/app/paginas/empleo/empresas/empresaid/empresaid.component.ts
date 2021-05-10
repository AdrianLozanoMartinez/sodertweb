import { Component, OnInit } from '@angular/core';
import { ServiciosempresaService } from '../serviciosempresa/serviciosempresa.service';
import { EmpresaModel } from '../model/empresa.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empresaid',
  templateUrl: './empresaid.component.html',
  styleUrls: ['./empresaid.component.css']
})
export class EmpresaidComponent implements OnInit {
  EmpresaModel = new EmpresaModel(); 

  constructor( private servicio: ServiciosempresaService, private Route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    const variable_Id = this.Route.snapshot.paramMap.get('id');          
        console.log(variable_Id);
    
        if ( variable_Id !== 'nuevo' ){                                        
          this.servicio.getUnElemento2(variable_Id).subscribe( (variable_respuesta: EmpresaModel) => {     
          console.log(variable_respuesta);
  
          this.EmpresaModel = variable_respuesta;                                   
          this.EmpresaModel.id = variable_Id;                                       
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
  
if (this.EmpresaModel.id){                                                                                

variablePeticion = this.servicio.actualizarEmpresa(this.EmpresaModel);                           
variablePeticion.subscribe( variableRespu => {
  Swal.fire({                                                                                  
  title: this.EmpresaModel.empresa,                                                                     
  text: 'Se actualizó correctamente',                                                              
  icon: 'success',
  showConfirmButton: false                                                                                 
});
});

this.router.navigateByUrl('/empresas');

}else{

variablePeticion = this.servicio.crearEmpresa(this.EmpresaModel);                      
variablePeticion.subscribe( variableRespu => {                                        
    Swal.fire({
    title: this.EmpresaModel.empresa,
    text: 'Se guardó correctamente',
    icon: 'success',
    showConfirmButton: false   
    });
});

this.router.navigateByUrl('/empresas');
}      



}


}
