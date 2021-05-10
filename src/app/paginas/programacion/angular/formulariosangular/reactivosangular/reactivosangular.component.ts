import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';          //Formularios reactivos
import { ServicioreactivoService } from '../reactivosangular/servicio/servicioreactivo.service';    //Servicio para personalizar validaciones de caracteres

@Component({
  selector: 'app-reactivosangular',
  templateUrl: './reactivosangular.component.html',
  styleUrls: ['./reactivosangular.component.css']
})
export class ReactivosangularComponent implements OnInit {

  variableFormGroup: FormGroup;       /*Declaramos una variable (variableFormGroup) 
                                        para meterle el servicio (FormGroup)*/

  constructor( private variableFormBuilder: FormBuilder,        /*Declaramos una variable (variableFormBuilder) 
                                                                  para meterle el servicio (FormBuilder)*/
               private variableValidadores: ServicioreactivoService ) {     /*Declaramos variable (variableValidadores) metiendo dentro el servicio 
                                                                              para las validaciones personalizadas (ServicioreactivoService)*/

  this.crearFormulario();    /*Cogemos la función crearFormulario() y 
                              la metemos en el constructor para que se ejecute la primera*/
}   

  ngOnInit(): void {
  }

crearFormulario(){            /*Metemos en la variable (variableFormGroup) la otra variable (variableFormBuilder) 
                                con unión al group. Dentro de él definimos los campos que vamos a controlar: 
                                nombre, apellidos, correo...*/
    this.variableFormGroup = this.variableFormBuilder.group({
        campoNombre: [''],           /*Dentro de comillas va el dato, luego los forms controls, 
                                       el 1º sería validadores síncronos y el 2º hueco validadores asíncronos*/
        campoApellido: ['', this.variableValidadores.noApellidoHerrera],        /*Para añadir más validaciones ponemos [] y ponemos 
                                                                                la validación personalizada mediante servicio 
                                                                                llamando a la variable creada desde aquí 
                                                                                (this.variableValidadores) y una vez relacionado 
                                                                                podemos llamar al método que se encuentra en el servicio 
                                                                                (.noApellidoHerrera). Dentro de comillas va el dato, 
                                                                                luego los forms controls, el 1º sería validadores síncronos 
                                                                                y el 2º hueco validadores asíncronos*/
        campoCorreo: [''],
        campoPrueba: ['Prueba de lo que se ve si ponemos algo permanente o lo que añadamos'],
        campoNoRecomendable: [''],
        direccion: this.variableFormBuilder.group({          /*Metemos dirección dentro de variableFormGroup, 
                                                                ya que es un campo dentro del formulario 
                                                                pero contiene más información dentro, 
                                                                anidamos variableFormGroup con dirección*/
            campoDistrito: [''],
            campoCiudad: [''],
})
    });
  }

  guardar(){          //Función creada para guardar los datos que introduzcamos en el html
    console.log(this.variableFormGroup);        /*Cogemos la variableFormGroup y si ponemos . 
                                                  tenemos varias opciones como value, invalid..*/
  }
//Html
c=`{`;
f=`<form autocomplete="off" [formGroup]="variableFormGroup" (ngSubmit)="guardar()">`;
ff=`
         <!--autocomplete: Autocompletar formulario
                            [formGroup]="variableFormGroup": Cogemos la variable definida en TS (variableFormGroup) 
                                                             para usarla como formGroup definido también en el TS
                                                             (ngSubmit)="guardar()": Cuando le damos al botón (ngSubmit) 
                                                                         nos llama a la función (guardar()) definida en 
                                                                         el TS-->`;
f0=`
      <div>

          <div class="form-group row">
              <label class="col-2 col-form-label">Nombre</label>
              <div class="col-8">
                  <input class="form-control" type="text" placeholder="Nombre" `;
f1=`formControlName="campoNombre"`;
f2=`>
                                                                            <!--formControlName="campoNombre": El formControlName coge del TS de 
                                                                                                               this.variableFormGroup = this.variableFormBuilder.group 
                                                                                                               el nombre campoNombre...-->
              </div>
          </div>

          <div class="form-group row">
              <label class="col-2 col-form-label">Apellido</label>
              <div class="col-8">
                  <input class="form-control" type="text" placeholder="Apellido" `;
f3=`formControlName="campoApellido"`;  
f4=`>
              </div>
          </div>

      </div>

          <div class="form-group row">
          <label class="col-2 col-form-label">Correo</label>
              <div class="col-8">
                  <input class="form-control" type="email" placeholder="Correo electrónico" `;   
f5=`formControlName="campoCorreo"`;    
f6=`>
              </div>
          </div>

          <div class="form-group row">
          <label class="col-2 col-form-label">Prueba</label>
              <div class="col-8">
                  <input class="form-control" type="text" placeholder="Prueba" `;
f7=`formControlName="campoPrueba"`;
f8=`>
              </div>
          </div>`;

ff8=`
          <div class="form-group row">
            <label class="col-2 col-form-label">&nbsp;</label>
            <div class="input-group col-md-8">
                <button type="submit" class="btn btn-outline-dark btn-block">Guardar</button>
            </div>
          </div>

</form>

<hr>`;
f9=`
<pre>Estado del formulario: {{ variableFormGroup.valid }}
    Status : {{ variableFormGroup.status }}
    {{ variableFormGroup.value | json }}</pre>`;
o=`
<!--Json creado para ver el contenido que tenemos en el JSON y 
los datos que introducimos: variableFormGroup.value | json }}: 
Validación síncronas. Nos sale automático si es válido o no a 
la vez que escribimos sin tener que pulsar el botón ni ir a 
consola a comprobarlo-->`;
dire=`
    <div class="form-group row"`; 
dire2=`formGroupName="direccion"`;
dire3=`>
        <label class="col-2 col-form-label">Dirección</label>
        <div class="form-row col">
            <div class="col">
                <input type="text" class="form-control" placeholder="Distrito" `;
direc=`formControlName="campoDistrito"`;
direcc=`>
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Ciudad" `;
direcci=`formControlName="campoCiudad"`;
direccio=`>
            </div>
        </div>
    </div>`;
re=`<form autocomplete="off" [formGroup]="variableFormGroup" (ngSubmit)="guardar()">

        <div>

        <div class="form-group row">
            <label class="col-2 col-form-label">Nombre</label>
            <div class="col-8">
                <input class="form-control" type="text" placeholder="Nombre" formControlName="campoNombre" `;
re0=`[class.is-invalid]="nombreNoValido">`;
rere=`
                                                                                                       <!--[class.is-invalid]="nombreNoValido": 
                                                                                                            El nombreNoValido es definido en el TS-->`;
reer=`                
                <small *ngIf="nombreNoValido" class="text-danger">Ingrese al menos 5 letras</small>`;
re1=`       </div>
        </div>

        <div class="form-group row">
            <label class="col-2 col-form-label">Apellido</label>
            <div class="col-8">
                <input class="form-control" type="text" placeholder="Apellido" formControlName="campoApellido" `;
re2=`[class.is-invalid]="apellidoNoValido">
                <small *ngIf="apellidoNoValido" class="text-danger">El apellido es obligatorio</small>`;
re22=`[class.is-invalid]="apellidoNoValido">
                <small *ngIf="apellidoNoValido" class="text-danger">El apellido es obligatorio `;
ree22=`y no puede ser Herrera`;
re3=`</small>
            </div>
        </div>

        </div>

        <div class="form-group row">
            <label class="col-2 col-form-label">Correo</label>
            <div class="col-8">
                <input class="form-control" type="email" placeholder="Correo electrónico" formControlName="campoCorreo" `;
re4=`[class.is-invalid]="correoNoValido">
                <small *ngIf="correoNoValido" class="text-danger">Ingrese el correo</small>`;
re5=`
            </div>
        </div>

        <div class="form-group row">
            <label class="col-2 col-form-label">Prueba</label>
            <div class="col-8">
                <input class="form-control" type="text" placeholder="Prueba" formControlName="campoPrueba">
            </div>
        </div>

        <div class="form-group row" formGroupName="direccion">
            <label class="col-2 col-form-label">Dirección</label>
            <div class="form-row col">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Distrito" formControlName="campoDistrito" `;
re6=`[class.is-invalid]="distritoNoValido"`;
re7=`>
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Ciudad" formControlName="campoCiudad" `;
re8=`[class.is-invalid]="ciudadNoValido">`;
re9=`
                </div>
            </div>
        </div>

        <div class="form-group row">
            <label class="col-2 col-form-label">&nbsp;</label>
            <div class="input-group col-md-8">
                <button type="submit" class="btn btn-outline-dark btn-block">Guardar</button>
            </div>
        </div>

</form>

<hr>
<pre>Estado del formulario: {{ variableFormGroup.valid }}
Status : {{ variableFormGroup.status }}
{{ variableFormGroup.value | json }}`;

co=`
                </div>
            </div>
        </div>

        <div class="form-group row">
            <label class="col-2 col-form-label">Contraseña</label>
            <div class="col">
                <input class="form-control" type="password" placeholder="Contraseña" `;
co0=`formControlName="pass1" [class.is-invalid]="pass1NoValido"`;
co1=`>
            </div>
        </div>

        <div class="form-group row">
            <label class="col-2 col-form-label">Repita la contraseña</label>
            <div class="col">
                <input class="form-control" type="password" placeholder="Repita contraseña" `;
co2=`formControlName="pass2" [class.is-invalid]="pass2NoValido">
                <small *ngIf="pass2NoValido" class="text-danger">La contraseña no coincide</small>`;
co3=`
            </div>
        </div>`;
re99=`

        <div class="form-group row">
            <label class="col-2 col-form-label">&nbsp;</label>
            <div class="input-group col-md-8">
                <button type="submit" class="btn btn-outline-dark btn-block">Guardar</button>
            </div>
        </div>

</form>

<hr>
<pre>Estado del formulario: {{ variableFormGroup.valid }}
Status : {{ variableFormGroup.status }}
{{ variableFormGroup.value | json }}`;
usu=`existeUsuario( variableControool: FormControl ): Promise<any> | Observable<any> {`;
usu0=`existeUsuario( variableControool: FormControl ): Promise<errorValidacion> | Observable<errorValidacion> {`;
u=`

        <div class="form-group row">
            <label class="col-2 col-form-label">Usuario</label>
            <div class="col">
                <input class="form-control" type="text" placeholder="Nombre del usuario" `;
u0=`formControlName="campoUsuario" [class.is-invalid]="usuarioNoValido">
                <small *ngIf="usuarioNoValido" class="text-danger">El nombre de usuario ya está registrado (Para el ejemplo hemos puesto registrado: nombreProhibido)</small>`;
u1=`
                <!-- *ngIf: Llama al servicio donde tenemos el nombre (nombreProhibido) de usuario que no se puede introducir -->
            </div>
        </div>`;
ar=`

        <div class="row">
                <div class="col">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>Arreglos Estáticos</th>
                            </tr>
                        </thead>
                        <tbody `;
ar0=`formArrayName="campoestatico"`;
ar1=`>
                            <tr `;
ar2=`*ngFor="let control of pasatiempos.controls; let i = index">`;
ar3=`
                                <!--Metemos en la variable control los controles (controls) de la función get (pasatiempos) que hace referencia donde indica que cantidad hay de arreglos-->
                                <td>`;
ar4=`
                                    {{ i + 1 }}`;
ar5=`
                                    <!--Muestra el número (índice = index), ponemos más 1 porque comienza en 0 y así aparece el 1-->
                                </td>
                                <td><input class="form-control" type="text" `;
ar6=`[formControlName]="i">`;
ar7=`
                                                                        <!--[formControlName]="i": Sale tantos cuadros como índices existan-->
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>`;
di=`

            <div class="row">
                <div class="col">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>Arreglos Dinámicos</th>
                                <th>Borrar</th>
                            </tr>
                        </thead>
                        <tbody `;
di0=`formArrayName="campodinamico"`;
di1=`>
                            <tr `;
di2=`*ngFor="let variableLocalControl of dinamico.controls; let a = index"`;
di3=`>
                                <td>`;
di4=`{{ a + 1 }}`;
di5=`</td>
                                <td>`;
di6=`<input class="form-control" type="text" [formControlName]="a">`;
di7=`</td>
                                <td>`;
di8=`<button class="btn btn-danger" (click)="borrarPasatiempo(i)">Borrar</button>`;
di9=`</td>
                            </tr>
                        </tbody>
                    </table>
        
            `;
di10=`<button class="btn btn-primary mt-3 mb-5 btn-block" type="button" (click)="agregarPasatiempo()">+ Agregar</button>`;
di11=`
                </div>
            </div>`;
}
