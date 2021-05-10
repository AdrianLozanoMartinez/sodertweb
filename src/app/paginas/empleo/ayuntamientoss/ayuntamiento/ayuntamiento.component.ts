import { Component, OnInit } from '@angular/core';
import { ServicioayuntamientoService } from '../servicio/servicioayuntamiento.service';
import { MunicipiosModel } from '../model/municipios.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ayuntamiento',
  templateUrl: './ayuntamiento.component.html',
  styleUrls: ['./ayuntamiento.component.css']
})
export class AyuntamientoComponent implements OnInit {

  MunicipiosModel: MunicipiosModel[] = [];                                                                

  cargando = false; 

  constructor( private variableservicio: ServicioayuntamientoService ) { }

  
  ngOnInit() {  

    this.cargando = true;
                                                                          
    this.variableservicio.getTodosElementos().subscribe( variableRespuestaTodos => {     
        console.log(variableRespuestaTodos);
    
    this.MunicipiosModel = variableRespuestaTodos; 
    
    this.cargando = false; 
  });
  }

  borrarUnElemento(  VariableModel: MunicipiosModel, i: number ){ 

Swal.fire({
    title: '¿Estás seguro?',
    text: `Está seguro que desea borrar a ${ VariableModel.municipio }`,    
    icon: 'question',
    showConfirmButton: true,                                              
    showCancelButton: true                                                 
  }).then(variableContestacion => {                                   
    if (variableContestacion.value){                                      

        this.MunicipiosModel.splice(i, 1);                                             

        this.variableservicio.borrarElemento( VariableModel.id ).subscribe();      
   }
    });   
    
  }

}
