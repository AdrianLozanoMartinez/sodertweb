import { Component, OnInit } from '@angular/core';
import { ServiciopersonalService } from '../personal/servicio/serviciopersonal.service';
import { PersonalModel } from '../personal/model/personal.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  PersonalModel: PersonalModel[] = [];                                                                

  cargando = false; 

  constructor( private variableservicio: ServiciopersonalService ) { }

  ngOnInit() {  

    this.cargando = true;
                                                                          
    this.variableservicio.getTodosElementos3().subscribe( variableRespuestaTodos => {     
        console.log(variableRespuestaTodos);
    
    this.PersonalModel = variableRespuestaTodos; 
    
    this.cargando = false; 
  });
  }

  borrarUnElemento3(  VariableModel: PersonalModel, i: number ){ 

Swal.fire({
    title: '¿Estás seguro?',
    text: `Está seguro que desea borrar a ${ VariableModel.persona }`,    
    icon: 'question',
    showConfirmButton: true,                                              
    showCancelButton: true                                                 
  }).then(variableContestacion => {                                   
    if (variableContestacion.value){                                      

        this.PersonalModel.splice(i, 1);                                             

        this.variableservicio.borrarElemento3( VariableModel.id ).subscribe();      
   }
    });   
    
  }

}
