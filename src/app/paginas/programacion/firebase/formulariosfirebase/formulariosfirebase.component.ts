import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulariosfirebase',
  templateUrl: './formulariosfirebase.component.html',
  styleUrls: ['./formulariosfirebase.component.css']
})
export class FormulariosfirebaseComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  
//Html
c=`{`;
ru=`        ".read": "now < 1599775200000",  // 2020-9-11
            ".write": "now < 1599775200000",  // 2020-9-11`;
a=`
<div class="row text-right">
    <div class="col">
        <button class="btn btn-danger" `;
a0=`routerLink="/varioselementos"`;
a1=`><i class="fa fa-arrow-left"></i>Regresas</button>
    </div>
</div>

<div class="row">
    <div class="col">
        <form `;
a2=`(ngSubmit)="guardar(variableFormulario)" #variableFormulario="ngForm"`;
a3=`>

<div class="form-group">
    <label>Firebase ID</label>
    <input type="text" class="form-control" placeholder="Firebase ID" `;
a4=`disabled="disabled" name="id" [(ngModel)]="unomodel.id"`;
a5=`>
    <small class="form-text text-muted">Este campo es autogenerado</small>
</div>

<div class="form-group">
    <label>Nombre</label>
    <input type="text" class="form-control" placeholder="Nombre" `;
a6=`required name="nombre" [(ngModel)]="unomodel.nombre"`;
a7=`>
</div>

<div class="form-group">
    <label>Poder</label>
    <input type="text" class="form-control" placeholder="Poder" `;
a8=`name="poder" [(ngModel)]="unomodel.poder"`;
a9=`>
</div>

<div class="form-group">
    <label>Estado</label>
    <br>
    <button `;
a10=`*ngIf="unomodel.vivo" (click)="unomodel.vivo = false"`;
a11=` class="btn btn-outline-success w-50" type="button"><i class="fa fa-smile-o"></i>Vivo</button>
    <button `;
a12=`*ngIf="!unomodel.vivo" (click)="unomodel.vivo = true"`;
a13=` class="btn btn-outline-danger w-50" type="button"><i class="fa fa-heartbeat" aria-hidden="true"></i>Muerto</button>
</div>

<hr>

      <div class="form-group text-center">
          <button type="submit" class="btn btn-dark w-25"><i class="fa fa-save"></i> Guardar</button>
      </div>
    </form>
  </div>
</div>`;
uff=`<any>;`;
b=`
<div class="row">
    <div class="col text-right">
        <button class="btn btn-primary" `;
b0=`routerLink="/unelemento4/nuevo"`;
b1=`><i class="fa fa-plus"></i>Agregar (Ir al componente de un elemento)</button>
                                              <!-- "/muestrauno4/nuevo": Nos lleva a la página para agregar un nuevo argumento poniendo /nuevo va a
                                                                         ser el id { path: 'muestrauno/:id', component: MuestraunoComponent}, Nos
                                                                         lleva al componente creado para un elemento. Enlace que va al componente de
                                                                         un elemento sin ningún ID y de ese modo se crea uno nuevo al rellenarlo, no
                                                                         actualiza, y por ello ponemos nuevo porque pide un argumento -->
    </div>
</div>
<table>
    <thead class="thead-dark">
        <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Poderes</th>
            <th scope="col">Vivo</th>
            <th scope="col">Herramientas</th>
        </tr>
    </thead>
    <tbody>
        <tr `;
b2=`*ngFor="let todosloselementos of unomodel2; let i = index"`;
b3=`>
        <!-- ngFor="let todosloselementos of unomodel2: ngFor para coger cada elemento. Metemos (let) en la variable local (todosloselementos), lo que
                                                        obtenemos de la variable del TS (unomodel2).
                                                        let i = index": Metemos (let) en la variable local (i) lo que tenemos en el íncide/posición
                                                        (index) -->
            <th scope="row">`;
b4=`{{i + 1}}`;
b5=`</th>
            <td>`;
b6=`{{todosloselementos.nombre}}`;
b7=`</td>
            <td>`;
b8=`{{todosloselementos.poder}}`;
b9=`</td>
            <!--  todosloselementos.poder o vivo o ...}}: Al darle el valor a la variable local (todosloselementos) podemos usarlo como si usaramos del tirón
                                                          el model (UnoModel) y con el punto (.) especificamos lo que hay en su interior/subvariable (nombre,
                                                          poder, vivo...) -->
            <td><label `;
b10=`*ngIf="todosloselementos.vivo" class="badge badge-success">`;
b11=`>Vivo</label>
                <!--    ngIf="todosloselementos.vivo": Si la variable (todosloselementos/UnoModel) tiene una subvariable (vivo) que es true, se muestra -->
                <label `;
b12=`*ngIf="!todosloselementos.vivo" class="badge badge-danger"`;
b13=`>Muerto</label>
                <!--    ngIf="!todosloselementos.vivo": Si la variable (todosloselementos/UnoModel) tiene una subvariable (vivo) que es false, se muestra -->
            </td>
            <td><button class="btn btn-info mr-1" `;
b14=`[routerLink]="['/unelemento4', todosloselementos.id ]"`;
b15=`><i class="fa fa-pencil"></i> </button>
                                                          <!-- "['/muestrauno4', todosloselementos.id ]": Enlace que va al componente de un elemento
                                                                                                          y el segundo argumento nos específica la id
                                                                                                          para poder actualizar/modificar -->
                <button class="btn btn-danger"><i class="fa fa-trash"></i></button>
            </td>
        </tr>
      </tbody>
    </table>
  <div>
  <h4 class="alert-heading">Cargando</h4>
  <p>
      <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
  </p>
  <p class="mb-0">Espere por favor</p>
  </div>

  <div>
  <h4 class="alert-heading">No hay registro</h4>
  <p>
      <i class="fa fa-exclamation fa-3x fa-fw"></i>
  </p>
  </div>`;

d=`
<div class="row">
    <div class="col text-right">
        <button class="btn btn-primary" routerLink="/unelemento5/nuevo"><i class="fa fa-plus"></i>Agregar (Ir al componente de un elemento)</button>
    </div>
</div>
<table>
    <thead class="thead-dark">
        <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Poderes</th>
            <th scope="col">Vivo</th>
            <th scope="col">Herramientas</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let todosloselementos of unomodel2; let i = index">
            <th scope="row">{{i + 1}}</th>
            <td>{{todosloselementos.nombre}}</td>
            <td>{{todosloselementos.poder}}</td>
            <td><label *ngIf="todosloselementos.vivo" class="badge badge-success">Vivo</label>
                <label *ngIf="!todosloselementos.vivo" class="badge badge-danger">Muerto</label>
            </td>
            <td><button class="btn btn-info mr-1" [routerLink]="['/unelemento5', todosloselementos.id ]"><i class="fa fa-pencil"></i> </button>
                <button class="btn btn-danger" `;
d0=`(click)="borrarUnElemento(todosloselementos, i)"`;
d1=`><i class="fa fa-trash"></i></button>
            </td>
        </tr>
      </tbody>
    </table>
  <div>
  <h4 class="alert-heading">Cargando</h4>
  <p>
      <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
  </p>
  <p class="mb-0">Espere por favor</p>
  </div>

  <div>
  <h4 class="alert-heading">No hay registro</h4>
  <p>
      <i class="fa fa-exclamation fa-3x fa-fw"></i>
  </p>
  </div>`;

r=`
<div class="row">
      <div class="col text-right">
          <button class="btn btn-primary" routerLink="/unelemento/nuevo"><i class="fa fa-plus"></i>Agregar (Ir al componente de un elemento)</button>
      </div>
  </div>
  <table *ngIf="!variablecargando && unomodel2.length > 0" class="table mt-3">
      <thead class="thead-dark">
          <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Poderes</th>
              <th scope="col">Vivo</th>
              <th scope="col">Herramientas</th>
          </tr>
      </thead>
      <tbody>
          <tr *ngFor="let todosloselementos of unomodel2; let i = index">
              <th scope="row">{{i + 1}}</th>
              <td>{{todosloselementos.nombre}}</td>
              <td>{{todosloselementos.poder}}</td>
              <td><label *ngIf="todosloselementos.vivo" class="badge badge-success">Vivo</label>
                  <label *ngIf="!todosloselementos.vivo" class="badge badge-danger">Muerto</label>
              </td>
              <td><button class="btn btn-info mr-1" [routerLink]="['/unelemento', todosloselementos.id ]"><i class="fa fa-pencil"></i> </button>
                  <button class="btn btn-danger" (click)="borrarUnElemento(todosloselementos, i)"><i class="fa fa-trash"></i></button>
              </td>
          </tr>
        </tbody>
      </table>
    <div `;
r0=`*ngIf="variablecargando"`;
r1=` class="alert aler-info text-center mt-3">
     <!-- ngIf="variablecargando": Para que funcione, mensaje de carga mientras carga o no la muestra sino la carga, firebase lo carga muy rápido 
                                   y no da tiempo a verlo bien, en este ejemplo no es posible verlo aquí -->
    <h4 class="alert-heading">Cargando</h4>
    <p>
        <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
    </p>
    <p class="mb-0">Espere por favor</p>
    </div>

    <div `;
r2=`*ngIf="!variablecargando && unomodel2.length === 0"`;
r3=` class="alert aler-warnin text-center mt-3">
     <!-- ngIf="!variablecargando": Para ocultar la tabla cuando aparezca el div de cargando y aparezca cuando acabe de cargar -->
                             <!-- && unomodel2.length === 0: Y si la base de datos tiene 0 registros, es decir, no existe registro, se muestra 
                                                             el mensaje -->
    <h4 class="alert-heading">No hay registro</h4>
    <p>
        <i class="fa fa-exclamation fa-3x fa-fw"></i>
    </p>
    </div>`;
}
