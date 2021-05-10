import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginangular',
  templateUrl: './loginangular.component.html',
  styleUrls: ['./loginangular.component.css']
})
export class LoginangularComponent implements OnInit {

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
    <!-- (ngSubmit)="login(variableLogin)" #variableLogin="ngForm": Manda los datos de los campos, a través de la variable local 
        (variableLogin) creada en la misma línea (#variableLogin) con formato ngForm (declarado en el app.module.ts) a la función 
        login (form:NgForm) del componente.ts -->
      <span `;
a2=`*ngIf="variableLogin.submitted && variableLogin.controls['email'].errors" class="text-danger"`;
a3=`>El correo es obligatorio</span>
    <!-- *ngIf: Si la variable local (variableLogin) es enviada (dado al botón submit-enviar) y tiene error en el email aparece mensaje -->
    <div class="form-group">
    <input name="email" type="email" class="form-control" style="max-width: 500px;" required email `;
a4=`[(ngModel)]="usuario.email"`;
a5=` placeholder="Email">
                                                                                                <!-- [(ngModel)]="usuario.email": Recibe los datos 
                                                                                                                                  ([(ngModel)]="variablePrincipal.SubVariable") 
                                                                                                                                  y lo envía a la función login (form:NgForm) 
                                                                                                                                  del componente.ts -->
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
}
