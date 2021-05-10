import { Component, OnInit } from '@angular/core';
import { ServiciosdeudasService } from '../deudas/servicio/serviciosdeudas.service'; 
import { DeudasModel } from '../deudas/model/deudas.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deudas',
  templateUrl: './deudas.component.html',
  styleUrls: ['./deudas.component.css']
})
export class DeudasComponent implements OnInit {

  DeudasModel: DeudasModel[] = [];                                                                

  cargando = false; 

  constructor( private variableservicio: ServiciosdeudasService ) { }

  ngOnInit() {  

    this.cargando = true;
                                                                          
    this.variableservicio.getTodosElementosde().subscribe( variableRespuestaTodos => {     
        console.log(variableRespuestaTodos);
    
    this.DeudasModel = variableRespuestaTodos; 
    
    this.cargando = false; 
  });
  }

  borrarUnElementode(  VariableModel: DeudasModel, i: number ){ 

Swal.fire({
    title: '¿Estás seguro?',
    text: `Está seguro que desea borrar la deuda de ${ VariableModel.persona }`,    
    icon: 'question',
    showConfirmButton: true,                                              
    showCancelButton: true                                                 
  }).then(variableContestacion => {                                   
    if (variableContestacion.value){                                      

        this.DeudasModel.splice(i, 1);                                             

        this.variableservicio.borrarElementode( VariableModel.id ).subscribe();      
   }
    });   
    
  }

}
