import { Component, OnInit } from '@angular/core';
import { ServiciosempresaService } from './serviciosempresa/serviciosempresa.service';
import { EmpresaModel } from '../empresas/model/empresa.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  EmpresaModel: EmpresaModel[] = [];                                                                

  cargando = false; 

  constructor( private variableservicio: ServiciosempresaService ) { }

  ngOnInit() {  

    this.cargando = true;
                                                                          
    this.variableservicio.getTodosElementos2().subscribe( variableRespuestaTodos => {     
        console.log(variableRespuestaTodos);
    
    this.EmpresaModel = variableRespuestaTodos; 
    
    this.cargando = false; 
  });
  }

  borrarUnElemento2(  VariableModel: EmpresaModel, i: number ){ 

Swal.fire({
    title: '¿Estás seguro?',
    text: `Está seguro que desea borrar a ${ VariableModel.empresa }`,    
    icon: 'question',
    showConfirmButton: true,                                              
    showCancelButton: true                                                 
  }).then(variableContestacion => {                                   
    if (variableContestacion.value){                                      

        this.EmpresaModel.splice(i, 1);                                             

        this.variableservicio.borrarElemento2( VariableModel.id ).subscribe();      
   }
    });   
    
  }

}
