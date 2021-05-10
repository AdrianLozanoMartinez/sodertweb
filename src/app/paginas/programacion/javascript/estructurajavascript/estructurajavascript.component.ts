import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructurajavascript',
  templateUrl: './estructurajavascript.component.html',
  styleUrls: ['./estructurajavascript.component.css']
})
export class EstructurajavascriptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

x=`
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>JavaScript</title>`;
x1=`
        <script src="JAVASCRIPT.js"></script>`;
x2=`                                  <!--Llama al archivo de JavaScript -->`;
x3=`
    </head>

        <body>
            
        </body>

</html>`;
}
