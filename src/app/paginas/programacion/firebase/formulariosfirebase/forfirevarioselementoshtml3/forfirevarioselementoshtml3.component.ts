import { Component, OnInit } from '@angular/core';
import { ServicioformulariofireService } from '../servicio/servicioformulariofire.service';
import { UnoModel } from '../model/uno.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forfirevarioselementoshtml3',
  templateUrl: './forfirevarioselementoshtml3.component.html',
  styleUrls: ['./forfirevarioselementoshtml3.component.css']
})
export class Forfirevarioselementoshtml3Component implements OnInit {
  
  unomodel2: UnoModel[] = [];                                                                

  constructor( private variableservicio: ServicioformulariofireService ) { }

  ngOnInit() {  
                                                                             
  this.variableservicio.getTodosElementos().subscribe( variableRespuestaTodos => {     
    //console.log(variableRespuestaTodos);
    this.unomodel2 = variableRespuestaTodos;                                                  
  });
  }

  //Función (borrarUnElemento) donde sacamos y usamos la variable que coge el model (VariableModel)
  borrarUnElemento(  VariableModel: UnoModel, i: number ){                       
    //Borrar elemento del arreglo, para no tener que actualizar para verlo
    Swal.fire({
      title: '¿Estás seguro?',
      //Muestra el nombre seleccionado
      text: `Está seguro que desea borrar a ${ VariableModel.nombre }`,    
      icon: 'question',
      //Muestra botón de confirmación (true) no muestra (false)
      showConfirmButton: true,
      //Muestra botón de cancelación (true) no muestra (false)                                                  
      showCancelButton: true  
      //Depende lo que la persona conteste (then) se mete en la variable (variableContestacion)                                                  
    }).then(variableContestacion => {   
    //Si la variable (variableContestacion) su valor (value) es true (borra) y si es false (no hace nada)                                    
      if (variableContestacion.value){                                      
  
          this.unomodel2.splice(i, 1);
          //Coge el arreglo y borra (splice) la posición (i) una sola (1)                                                 
  
          //Borrar elemento, se ve al actualizar
          this.variableservicio.borrarElemento( VariableModel.id ).subscribe();
          /*Metemos en la variable del servicio.ts (variableservicio), sacamos 
            la función del servicio.ts (borrarElemento) cogiendo la variable 
            del model con la id (VariableModel.id) para subscribirlo y poder borrarlo*/        
     }
      });   
      
    }

}
