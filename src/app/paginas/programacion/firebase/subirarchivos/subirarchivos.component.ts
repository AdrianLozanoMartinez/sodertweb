import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subirarchivos',
  templateUrl: './subirarchivos.component.html',
  styleUrls: ['./subirarchivos.component.css']
})
export class SubirarchivosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//Html
c=`{`;
b=`<boolean>`;
v=`(mouseSobre)="pruebaSobreElemento($event)"`;
a=`
<b><u>Comprobar si funciona</u>: Entrar en Firebase -> Proyecto elegido -> Cloud Firestore -> Le damos a la carpeta creada y le damos a la imagen obtenemos el url del almacenamiento de la imagen</b>
<br>
<br>
<br>
<div class="row">
  <div class="col-md-4">
  
      <h3>Seleccione archivos</h3>

      <!--1º Opción - Muchos códigos no recomendado -->
      <!-- <div `;
a0=`appDirectivasubida (mouseSobre)="pruebaSobreElemento($event)" [ngClass]="{ 'clase_especial_creada_por_mi': estaSobreElemento }"`;
a1=`> -->
                              <!-- (mouseSobre)="pruebaSobreElemento($event)": Llamamos a la directiva a través del elemento(mouseSobre) y del 
                                                                               componente.ts a través de la función (pruebaSobreElemento($event)) -->
      <!--2º Opción - Más recomendado -->
      <div `;
a2=`appDirectivasubida [archivos]="archivos" (mouseSobre)="estaSobreElemento = $event" [ngClass]="{ 'clase_especial_creada_por_mi': estaSobreElemento }"`;
a3=`>
<!-- div appDirectivasubida: Ponemos el selector de la directiva (selector: '[appDirectivasubida]' -> appDirectivasubida). Se pone en el cuadro que queremos 
                             que arrastrando se cargue el archivo, en este caso un div y dentro una imagen -->
                       <!-- [archivos]: Proviene del @Input (@Input() archivos: FileItem[] = [];) de la directiva.ts (NgDropFilesDirective) -->
                                  <!-- ="archivos": : Proviene del componente.ts (archivos: FileItem[] = [];) -->
                                             <!-- (mouseSobre)="estaSobreElemento = $event": Igual que anterior pero en vez de usar la función del componente.ts 
                                                                                             y la directiva.ts usamos la variable que creamos en componente.ts 
                                                                                             (estaSobreElemento) -->
                                                                                        <!--[ngClass]="{{c}} 'clase_especial_creada_por_mi': estaSobreElemento }": 
                                                                                            Llama a la clase ([ngClass]) una que pongamos 
                                                                                            (clase_especial_creada_por_mi) creada en componente.css 
                                                                                            (.clase_especial_creada_por_mi {{c}} border: red dotted 3px; }) -->
                                                                                            

        <h4>Deje caer aquí los archivos</h4>
        <img src="../../../../../../assets/imagenes/drop-images.png" width="100px" height="100px">
    </div>
</div>

<div class="col-md-8">

    <h4>Cargar archivos</h4>

    <button class="btn btn-success"`;
a4=`(click)="cargarImagenes()" [disabled]="archivos.length == 0"`;
a5=`>Cargar a Firebase</button>
      <button class="btn btn-danger" `;
a6=`(click)="limpiarArchivos()"`;
a7=`>Limpiar</button>
                                <!-- (click)="limpiarArchivos()": : Al hacer click llame a la función ("limpiarArchivos()") del componente.ts -->
  
      <table class="table">
          <thead class="thead=dark">
              <tr>
                  <th>Nombre archivo</th>
                  <th>Tamaño</th>
                  <th>Progreso</th>
              </tr>
          </thead>
      
          <tbody>
              <tr `;
a8=`*ngFor="let archivo of archivos"`;
a9=`>
<!--*ngFor="let archivo of archivos": Recorremos con For cada archivo del arreglo (archivos) sacado del componente.ts 
                                      (archivos: FileItem[] = [];) y lo metemos en la variable local (archivo) -->
    <td `;
a10=`[ngClass]="{ 'text-green': archivo.progreso >= 100 }">{{archivo.nombreArchivo}}`;
a11=`</td>
                  <!--[ngClass]="{ 'text-green': archivo.progreso >= 100 }": Llama al componente.css ([ngClass]), la clase de ponerlo en verde las 
                                                                             letras ('text-green') cuando la variable local (archivo) punto (.) 
                                                                             subvariable (progreso) sea mayor o igual (>=) a 100% -->
                                                                         <!-- archivo.nombreArchivo: Sacamos cada archivo por la variable local (archivo) el nombre 
                                                                                                     del archivo (nombreArchivo) que es sacado del model (FileItem) -->
                  <td>`;
a12=`{{archivo.archivo.size / 1024 / 1024 | number: '.2-2'}}`;
a13=` MB</td>
                   <!-- archivo.archivo.size / 1024 / 1024 | number: '.2-2': Sacamos cada archivo por la variable local (archivo) el archivo (archivo) que es sacado 
                                                                             del model (FileItem) y se saca el tamaño ( size) aunque lo saca en Byte. Lo dividimos 2 
                                                                             veces por 1024 para pasarlo a MB y lo pasamos a través de un pipe a 2 decimales numéricos 
                                                                             (| number: '.2-2') -->
                  <td>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" `;
a14=`[ngStyle]="{ 'width': archivo.progreso + '%' }"`;
a15=`></div>
                                                                 <!--[ngStyle]="{ 'width': archivo.progreso + '%' }": Modificamos el style del progress. Para ejecutar 
                                                                                           style ([ngStyle]) con modificación del width según la variable local (archivo) 
                                                                                           especialmente la subvariable (progreso), el número más el porcentaje -->
                    </div>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
</div>`;
it=`<Item>`;
it2=`<Item[]>`;
d=`<div class="card-columns">
    <div class="card" `;
d0=`*ngFor="let item of items | async">`;
d1=`
                    <!--*ngFor="let item of items | async": Cogido de angular/firebase. Realiza un for 
                                                            para ir llamando cada 1 de las imágenes-->
        <img class="card-img-top" `;
d2=`[src]="item.url">`;
d3=`
                               <!-- [src]="item.url": Llama para mostrar las imagenes -->
        <div class="card-body">
            <h5 class="card-title">`;
d4=`{{ item.nombre }}`;
d5=`</h5>
                                        item.nombre: Muestra los nombres
        </div>
    </div>
</div>`;
}
