import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fontsgoogleprincipal',
  templateUrl: './fontsgoogleprincipal.component.html',
  styleUrls: ['./fontsgoogleprincipal.component.css']
})
export class FontsgoogleprincipalComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
//Html
c=`{`;
cc=`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Css - Estructura</title>`;
c0=`
        <link rel="stylesheet" href="ArchivoAparte.css">`;
c1=`                         <!--FUENTE Descargada-->`;  
c2=`                            <!--FUENTE Online-->`;        
c4=`
    </head>

    <body>`;
c10=`
    </body>

</html>`;
descargada=`
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap" rel="stylesheet">`;
online=`
        <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap" rel="stylesheet">`;
fuentedescargada=`
        <div id="descargada"><p>Fuente descargada</p></div>`;
fuenteonline=`
        <div id="online"><p>Fuente online</p></div>`;
}
