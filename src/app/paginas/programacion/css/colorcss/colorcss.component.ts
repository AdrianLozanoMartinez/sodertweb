import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorcss',
  templateUrl: './colorcss.component.html',
  styleUrls: ['./colorcss.component.css']
})
export class ColorcssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//html
c=`{`;
co=`<`;
e=`
<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Imagen</title>
            <link rel="stylesheet" href="ArchivoAparte.css">
        </head>

        <body>`;
e0=`
        </body>
    </html>`;
e1=`
            <div class="unColor">Un Color</div>`;
e2=`
            <div class="ColorSaturacionLuz">Color, Saturación, Luz</div>     `;
e3=`
            <div class="RedGreenBlueTransparencia">Red, green, blue y transparencia</div>   `;
e4=`
            <div class="TonoSaturacionBrilloTransparencia">Tono, saturación, brillo y transparencia</div> `;
}
