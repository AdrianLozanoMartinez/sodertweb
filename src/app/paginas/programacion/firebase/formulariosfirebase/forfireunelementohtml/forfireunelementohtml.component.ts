import { Component, OnInit } from '@angular/core';
//Model
import { UnoModel } from '../model/uno.model';
//PAra coger datos
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forfireunelementohtml',
  templateUrl: './forfireunelementohtml.component.html',
  styleUrls: ['./forfireunelementohtml.component.css']
})
export class ForfireunelementohtmlComponent implements OnInit {

  
      /*1º Opción (Recomendable) - Declaramos una variable (uno) 
                                    y le metemos dentro el model creado*/
      unomodel = new UnoModel();                           

      //2º Opción (Redundante)
      //unomodel: UnoModel = new UnoModel();

  constructor(  ) { }

  ngOnInit(): void {
  }
/*Creamos función (guardar()) puesta en formulario del componente de 
    1 elemento.html y ponemos una variable nueva (variableRecibidodelHTML) 
    donde recibimos lo que nos llega del formulario, declarando NgForm*/
    guardar( variableRecibidodelHTML: NgForm ){        

      if ( variableRecibidodelHTML.invalid ){          
      /*Si la variable recibida del html (variableRecibidodelHTML), 
        es decir los datos son inválido (invalid) devuelve (return) 
        un mensaje en consola*/
      console.log('Formulario no válido');
          return;
      }

      //Muestra todo lo que recibamos del html
      console.log(variableRecibidodelHTML); 
      //Contenido especifico de lo que cojamos del html que esté en el model                  
      console.log(this.unomodel);                          
  }
}
