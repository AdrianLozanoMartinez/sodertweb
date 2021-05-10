import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructuraphp',
  templateUrl: './estructuraphp.component.html',
  styleUrls: ['./estructuraphp.component.css']
})
export class EstructuraphpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//Html
x=`<!DOCTYPE HTML>
<html lang="es">
    <head>
        <meta charset="utf-8" />
        <title>PHP</title>
    </head>
    <body>`;
x1=`
        <?php`;
x3=`
            //Código php`;
x4=`
        ?>`
x2=`
    </body>
</html>`;
x5=`
          <?php
              $nombre = "Index_Pag";`;
x6=`              //El LLAMAMIENTO y el RESULTADO se ve en el FOOTER, en el INDEX y en las PÁGINAS`;
x7=`
          ?>`;
x8=`

          <div class="cabecera">
              <h1>Cabecera/Index_Pag/Footer</h1>
              <ul>
                  <li><a href="index.php">Inicio</a></li>
                  <li><a href="pagina.php">Pagina</a></li>
                  <li><a href="https://google.es">Google</a></li>
              </ul>
              <hr/>
          </div>`;
x9=`

<!--NO CERRAMOS HTML ni BODY porque el PIE LO CIERRA -->`;
x10=`
    <?php require_once 'carpeta/cabecera.php'; `;
x1010=`
    ?>`;
x1011=`                 <!--OPCIONAL. CIERRA (usa código html) O NO CIERRA (usa html dentro del código php)-->`;
x11=`    <!--LLAMA a la CABECERA y la MUESTRA. Dirección normal -> ../carpeta/cabecera.php y si usamos wamp64 para el servidor -> c:/wamp64/www/carpeta/cabecera.php-->`;
x12=`  

          <h3>Index / Página</h3>`;
x1212=`           <!--Código HTML-->`;
x13=`

          <?php var_dump($nombre); ?>`;
x14=`       <!--Código PHP. LLAMAR el texto "Index_Pag" que se encuentra en CABECERA-->`;
x15=`

    <?php require_once 'carpeta/footer.php'; ?>`
x16=`    <!--LLAMA al PIE y lo MUESTRA. Dirección normal -> ../carpeta/pie.php y si usamos wamp64 para el servidor -> c:/wamp64/www/carpeta/pie.php-->`;
x17=`
    <footer>
        <hr/>
        &copy; <?=$nombre?> <?=date('Y')?>`;
x18=`<!-- < ?=$nombre?> -> Para LLAMAR "Index_Pag" que se encuentra en CABECERA. < ?=date('Y')?> -> EJECUTA el AÑO actual-->`;
x19=`
    </footer>

    </body>

</html>`;
x1819=`

<!-- CERRAMOS el HTML y BODY que se inició en la CABECERA-->`;




}
