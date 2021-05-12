import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {


    //If
    variable_if_boolean = false; //true (Inicia mostrando el contenido) / false (Inicia no mostrando el resultado)

    frase: any = {
      mensaje: 'Cualquier cosa',
      autor: 'Adrián Lozano'
    };

    //For - Variable en forma de arreglo [] donde contiene el contenido que será mostrado en el componente.html con el for
    variableTS: string[] = ['Contenido1', 'Contenido2', 'Contenido3', 'más contenidos'];


 
    constructor(  ) {}

    ngOnInit(): void {}


//Html
c=`{`;
co=`<`;
f=`*`;
p=`(`;
t=`[`;
}
