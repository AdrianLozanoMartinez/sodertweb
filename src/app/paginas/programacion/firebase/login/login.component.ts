import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//Html
c=`{`;
a=`
<div class="container">
<h5 style="color: rgb(0, 0, 97);">
    LOGIN</h5>
  <form `;
a0=`(ngSubmit)="login(variableLogin)" #variableLogin="ngForm"`;
a1=` class="form form-register">
      <span `;
a2=`*ngIf="variableLogin.submitted && variableLogin.controls['email'].errors" class="text-danger"`;
a3=`>El correo es obligatorio</span>
    <div class="form-group">
    <input name="email" type="email" class="form-control" style="max-width: 500px;" required email `;
a4=`[(ngModel)]="usuario.email"`;
a5=` placeholder="Email">
    </div>
      <span `;
a6=`*ngIf="variableLogin.submitted && variableLogin.controls['password'].errors" class="text-danger"`;
a7=`>Al menos 6 caracteres</span>
      <div class="form-group">
        <input name="password" type="password" class="form-control" style="max-width: 500px;" required minlength="6" `;
a8=`[(ngModel)]="usuario.password"`;
a9=` placeholder="Password">
      </div>
      <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Recordar mi usuario</label>
          <small id="emailHelp" class="form-text text" style="color: rgb(11, 11, 240);"><a href="/registro"> ¿No tienes cuenta? / Registrate</a></small>
      </div>

      <button type="submit" class="btn btn-primary">Ingresar</button>

    </form>
</div>`;
re=`
<div class="container">
    <h5 style="color: rgb(0, 0, 97);">
        LOGIN</h5>
      <form (ngSubmit)="login(variableLogin)" #variableLogin="ngForm"class="form form-register">
    
          <span *ngIf="variableLogin.submitted && variableLogin.controls['email'].errors" class="text-danger">El correo es obligatorio</span>
        <div class="form-group">
          <input name="email" type="email" class="form-control" style="max-width: 500px;" required email [(ngModel)]="usuario.email" placeholder="Email">
        </div>
          <span *ngIf="variableLogin.submitted && variableLogin.controls['password'].errors" class="text-danger">Al menos 6 caracteres</span>
          <div class="form-group">
            <input name="password" type="password" class="form-control" style="max-width: 500px;" required minlength="6" [(ngModel)]="usuario.password" placeholder="Password">
          </div>
          <div class="form-group form-check">
              <input `;
cor=`[(ngModel)]="botonRecordar"`;
dar=` name="recordar" type="checkbox" class="form-check-input" id="exampleCheck1">
              <!--ngModel llama a la variable boolean (botonRecordar) para activar/desactivar casilla, función que se realiza en el TS-->
              <label class="form-check-label" for="exampleCheck1">Recordar mi usuario</label>
              <small id="emailHelp" class="form-text text" style="color: rgb(11, 11, 240);"><a href="/registro"> ¿No tienes cuenta? / Registrate</a></small>
          </div>
    
          <button type="submit" class="btn btn-primary">Ingresar</button>
    
        </form>
    </div>`;
o=`if ( this.usartoken.length < 2 ){{c}}`;
coco=`<boolean | UrlTree> | Promise<boolean | UrlTree>`;
prote=`
<div class="m-5">

    <h1>Mi aplicación de firebase protegida</h1>
    <hr>
    <button class="btn btn-outline-danger" `;
gi=`(click)="salir()"`;
do=`>Salir del login de firebase</button>   
    
    </div>`;
}
