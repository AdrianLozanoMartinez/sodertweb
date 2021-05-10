import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instalacionfontawesome',
  templateUrl: './instalacionfontawesome.component.html',
  styleUrls: ['./instalacionfontawesome.component.css']
})
export class InstalacionfontawesomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//Html
x=`
<!DOCTYPE html>
  <html lang="en">
    <head>                                                                                        
      <meta charset="UTF-8">                                                                      
       <meta name="viewport" content="width=device-width, initial-scale=1.0">                     
       <title>Fontawesome</title>`;
x0=`
       <script src="https://kit.fontawesome.com/e0f3b21040.js"crossorigin="anonymous"></script>`;
x1=`
    </head>
    <body>`;
x2=`
        <i class="fa fa-user-circle" aria-hidden="true"></i>`;
x3=`
    </body>                                                                                       
  </html>`;
}
