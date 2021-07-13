import { Component, OnInit } from '@angular/core';
import { ServicioformulariofireService } from '../servicio/servicioformulariofire.service';
import { UnoModel } from '../model/uno.model';

@Component({
  selector: 'app-forfirevarioselementoshtml',
  templateUrl: './forfirevarioselementoshtml.component.html',
  styleUrls: ['./forfirevarioselementoshtml.component.css']
})
export class ForfirevarioselementoshtmlComponent implements OnInit {

  //Metemos en la variable del model (unomodel) el model (UnoModel())
  unomodel2: UnoModel[] = [];                                                                

  constructor( private variableservicio: ServicioformulariofireService ) { }

  //Para que se inicie nada más arrancar la página
  ngOnInit() {  
  /*Llamamos a la variable del servicio (variableservicio) especialmente a la función 
    get (getTodosElementos()), la subscribimos (subscribe) y lo metemos en la variable 
    de respuesta (variableRespuestaTodos). Al hacer console.log(variableRespuestaTodos); 
    observamos todos los datos en la consola*/                                                                              
  this.variableservicio.getTodosElementos().subscribe( variableRespuestaTodos => {     
    //console.log(variableRespuestaTodos);
    //Metemos en la variable del model (unomodel2) la variable recibido (variableRespuestaTodos)
    this.unomodel2 = variableRespuestaTodos;                                                  
  });
  }

}
