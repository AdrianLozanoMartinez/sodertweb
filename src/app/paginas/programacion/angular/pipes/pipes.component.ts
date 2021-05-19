import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  //Pipes
  variable_texto = 'TeXto';
  variable_arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI; //Javascript

  porcentaje = 0.234;
  porcentaje2 = 0.235;

  moneda = 1234.5;

  variable_objeto = {
    subvariable_objeto_1: 'Texto 1',
    subvariable_objeto_2: 'Texto 2',
    subvariable_objeto_3: 500,
    variable_dentro_de_variable:{
      subvariable_objeto_4: 'Texto 4',
      subvariable_objeto_5: 20
    }
  }


    variable_promesa = new Promise<string>( (resolve) => {

      setTimeout(() => {
        resolve ('Llegó la información en 4 seg y medio');
      }, 4500);

    });

    variable_promesa2 = new Promise<string>( (resolve) => {

      setTimeout(() => {
        resolve ('Llegó la información en 4 seg y medio');
      }, 4500);

    });


    variable_fecha0 = new Date();

    boton_idioma='en'; //Iniciado en un idioma, en este caso inglés
  

    variable_personalizada_letra = 'AdRiAn LOzaNO MartíNEZ';
    variable_personalizada_letra2 = 'AdRiAn LOzaNO MartíNEZ';
    variable_personalizada_letra3 = 'AdRiAn LOzaNO MartíNEZ';


    variable_videourl = 'https://www.youtube.com/embed/mEZ-3W75d-Q';


    variable_activar = true;
    variable_contrasena = 'Contraseña ver o ocultar al dar el botón';

  constructor() { }

  ngOnInit(): void {
  }
  //Html
  c=`{`;
  co=`<`;
  f=`*`;
  p=`(`;
  t=`[`;
}
