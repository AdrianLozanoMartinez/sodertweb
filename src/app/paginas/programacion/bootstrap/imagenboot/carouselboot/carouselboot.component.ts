import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carouselboot',
  templateUrl: './carouselboot.component.html',
  styleUrls: ['./carouselboot.component.css']
})
export class CarouselbootComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//Html
c=`{`;
co=`<`;
e=`
<!DOCTYPE html>
  <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Bootstrap - Alertas</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">       <!--LLAMA a BOOTSTRAP 1/4. El RESTO está al FINAL del BODY-->
    </head>

    <body>`;
e0=`
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>      <!--Squery-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>     <!--Popper-->
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>        <!--Bootstrap-->
    </body>
  </html>`;
b=`
            <div class="container" style="width: 300px; height: 300px;">
                <div class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">      `;
bb=`  <!--Active: Primera imagen que se va a ver -->`;
b0=`
                            <img src="../../../../../../assets/imagenes/01.jpg" class="d-block w-100" alt="...">`;
bbb=`
                                                                                   <!--d-block w- (width): En todas las imágenes para que funcione en el navegador-->`;
b1=`
                        </div>
                        <div class="carousel-item ">
                            <img src="../../../../../../assets/imagenes/fondoestrellas.gif" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">        `;
bbbb=`  <!--Texto dentro de la imagen-->`;
b2=`
                        <div class="carousel-caption d-none d-md-block">        <!--Texto dentro de la imagen-->
                            <h4>Texto de cabecera</h4>
                            <p>Texto descripcion</p>
                            </div>
                        </div>
                        <div class="carousel-item ">
                            <img src="../../../../../../assets/imagenes/drop-images.png" class="d-block w-100" alt="...">
                        </div>
                    </div>
                </div>
            </div>   
             `;
d=`
            <div class="container" style="width: 300px; height: 300px;">
                <div class="carousel slide" data-ride="carousel" id="carouselconbotoneslateral">`;
dd=`
                                                             <!--Id igual que HREF de abajo pero con #-->`;
d0=`
                    <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="../../../../../../assets/imagenes/01.jpg" class="d-block w-100" alt="..."></div>
                          <div class="carousel-item ">
                            <img src="../../../../../../assets/imagenes/fondoestrellas.gif" class="d-block w-100" alt="..."></div>
                          <div class="carousel-item ">
                            <img src="../../../../../../assets/imagenes/drop-images.png" class="d-block w-100" alt="..."></div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselconbotoneslateral" role="buttom" data-slide="prev">   `;
ddd=`   <!--Prev: Botón Atrás-->
                                                 <!--Href igual que ID de arriba-->`;
d1=`
                        <span class="carousel-control-prev-icon"></span>
                        <span class="sr-only">Anterior</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselconbotoneslateral" role="buttom" data-slide="next">   `;
dddd=`  <!--Next: Botón Siguiente-->
                                                 <!--Href igual que ID de arriba-->`;
d2=`                    <span class="carousel-control-next-icon"></span>
                        <span class="sr-only">Siguintes</span>
                    </a>
                </div>
            </div>
            `;
w=`
            <div class="container" style="width: 300px; height: 300px;">
                <div id="carouselconbotonesinferior" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">  `;
ww=`  <!--Se pone tantos li como imagen pongamos-->`;
w0=`
                    <li data-target="#carouselconbotonesinferior" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselconbotonesinferior" data-slide-to="1"></li>
                    <li data-target="#carouselconbotonesinferior" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="../../../../../../assets/imagenes/01.jpg" class="d-block w-100" alt="..."></div>
                    <div class="carousel-item">
                      <img src="../../../../../../assets/imagenes/fondoestrellas.gif" class="d-block w-100" alt="..."></div>
                    <div class="carousel-item">
                      <img src="../../../../../../assets/imagenes/drop-images.png" class="d-block w-100" alt="..."></div>
                  </div>
                </div>
            </div> `;
l=`"<";`;
}
