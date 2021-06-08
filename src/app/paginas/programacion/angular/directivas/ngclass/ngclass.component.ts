import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  variable_alerta:string ="alert-danger";

  variable2_alerta:string ="alert-primary";
  
  variable_objeto:any = {
    parametro_success: true
  }

  variable_objeto2:any = {
    parametro_success: false
  }

  variable_objeto3:any = {
    parametro_warning: true
  }

  variable_objeto4:any = {
    parametro_danger: true
  }
  
  cargando:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ejecutar(){
    this.cargando = true;

    setTimeout( ()=> this.cargando = false, 3000 )  //Después que pase 3 seg me cambie el valor de la variable cargando
  }
//Html
c=`{`;
co=`<`;
f=`*`;
p=`(`;
t=`[`;
}
