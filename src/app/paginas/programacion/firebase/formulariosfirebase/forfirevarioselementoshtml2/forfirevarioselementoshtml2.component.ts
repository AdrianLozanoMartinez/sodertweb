import { Component, OnInit } from '@angular/core';
import { ServicioformulariofireService } from '../servicio/servicioformulariofire.service';
import { UnoModel } from '../model/uno.model';

@Component({
  selector: 'app-forfirevarioselementoshtml2',
  templateUrl: './forfirevarioselementoshtml2.component.html',
  styleUrls: ['./forfirevarioselementoshtml2.component.css']
})
export class Forfirevarioselementoshtml2Component implements OnInit {

  unomodel2: UnoModel[] = [];                                                                

  constructor( private variableservicio: ServicioformulariofireService ) { }

  ngOnInit() {  
                                                                             
  this.variableservicio.getTodosElementos().subscribe( variableRespuestaTodos => {     
    console.log(variableRespuestaTodos);
    this.unomodel2 = variableRespuestaTodos;                                                  
  });
  }

}