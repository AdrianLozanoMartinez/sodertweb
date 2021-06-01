import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-peticionhttp',
  templateUrl: './peticionhttp.component.html',
  styleUrls: ['./peticionhttp.component.css']
})
export class PeticionhttpComponent implements OnInit {

  variable_paises: any[] = [];

  constructor( private variable_http: HttpClient) {

   this.variable_http.get('https://restcountries.eu/rest/v2/lang/es')
   .subscribe ( (dato_recibido:any) => {
     this.variable_paises = dato_recibido;    //Comparamos para poder meterlo en la variable y poder sacarlo al html
     console.log(dato_recibido);   //Se ve en consola toda la información, pero no se puede sacar al html, para ello tenemos que poner otra variable y compararla
     
   });    //subscribe -> Tenemos que subscribirnos para obtener los datos de la dirección que contiene json con datos ya comprobado en el Postman
}


  ngOnInit(): void {
  }
//Html
c=`{`;
co=`<`;
f=`*`;
p=`(`;
t=`[`;
}
