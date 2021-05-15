import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-funcionesangular',
  templateUrl: './funcionesangular.component.html',
  styleUrls: ['./funcionesangular.component.css']
})
export class FuncionesangularComponent implements OnInit {

   //If
   variable_if_boolean = false; //true (Inicia mostrando el contenido) / false (Inicia no mostrando el resultado)

   frase: any = {
     mensaje: 'Cualquier cosa',
     autor: 'Adrián Lozano'
   };

   //For - Variable en forma de arreglo [] donde contiene el contenido que será mostrado en el componente.html con el for
   variableTS: string[] = ['Contenido1', 'Contenido2', 'Contenido3', 'más contenidos'];


   //Pipes
   variable_texto = 'TeXto';
   variable_fecha = '1985-04-19';
   variable_hora = '15:26';

  constructor(  ) { }

  ngOnInit(): void {
  }



  //Html
c=`{`;
co=`<`;
f=`*`;
p=`(`;
t=`[`;
}
