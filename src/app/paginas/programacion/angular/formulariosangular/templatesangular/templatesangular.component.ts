import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatesangular',
  templateUrl: './templatesangular.component.html',
  styleUrls: ['./templatesangular.component.css']
})
export class TemplatesangularComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }



//Html
c=`{`;
a=`<form autocomplete="off" (ngSubmit)="guardartemplate(variableLocalTemplate)" #variableLocalTemplate="ngForm">`;
a0=`
    <!-- autocompletar formulario. off=No y on=Si --> 
                      <!-- (ngSubmit...: Llama a la función al pulsar el botón de más abajo (button type="submit") 
                                          y manda la variable local (variableLocalTemplate) -->
                                                                           <!-- #variable_local: Se usa dentro del html del tipo ngForm -->
      <div>

          <div class="form-group row">
            <label class="col-2 col-form-label">Nombre de Prueba</label>
              <div class="col-8">
                <input class="form-control" type="text" `;
a1=`name="nombreDePrueba" [(ngModel)]="usuario.nombreDePrueba"`;
a2=` placeholder="Nombre de prueba">
                                                  <!-- name: Necesario para coger datos e identificar campo de datos -->
                                                              <!-- [(ngModel)]: Recibe [] y envía () valores ngModel. Coge los datos. 
                                                                                Array de la variable (usuario) y dentro subvariable (nombreDePrueba) -->
                                                                                                        <!-- nombreDePrueba: Ejemplo para ver que coge datos,
                                                                                                                              Se observa el nombre indicado -->
                </div>
          </div>


          <div class="form-group row">
            <label class="col-2 col-form-label">Nombre</label>
              <div class="col-8">
                <input class="form-control" type="text" required minlength="5" `;
a3=`name="nombre" [(ngModel)]="usuario.nombre"`;
a4=` placeholder="Nombre">
              </div>
          </div>


          <div class="form-group row">
            <label class="col-2 col-form-label">Apellido</label>
              <div class="col-8">
                <input class="form-control" type="text" required minlength="5" `;
a5=`name="apellido" [(ngModel)]="usuario.apellido"`;
a6=` placeholder="Apellido">
              </div>
          </div>

    </div>

          <div class="form-group row">
            <label class="col-2 col-form-label">Correo</label>
              <div class="col-8">
                <input class="form-control"type="email" `;
a7=`name="email" [(ngModel)]="usuario.email"`;
a8=`  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$" required placeholder="Correo electrónico">
              </div>
          </div>

          <div class="form-group row mt-5">
            <label class="col-2 col-form-label">Género</label>
              <div class="col-8">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio"`;
a9=`  name="genero" [(ngModel)]="usuario.genero" value="M"`;
a10=`required>
                                            <!-- value: Para seleccionar uno y no los dos a la vez, 
                                                        hay que darle diferente valor 
                                                        (Ej: uno M y otro F) -->
            <label class="form-check-label">Masculino</label>
              </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" `;
a11=`name="genero" [(ngModel)]="usuario.genero" value="F"`;
a12=`required>
            <label class="form-check-label">Femenino</label>
              </div>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-2 col-form-label">&nbsp;</label>
            <div class="input-group col-md-8">
              <button type="submit" class="btn btn-outline-primary btn-block">Guardar</button>
            </div>
        </div>

</form>`;

b=`<form autocomplete="off" (ngSubmit)="guardartemplate(variableLocalTemplate)" #variableLocalTemplate="ngForm">`;
b0=`
      <div>

          <div class="form-group row">
            <label class="col-2 col-form-label">Nombre</label>
              <div class="col-8">
                <input class="form-control" type="text" required minlength="5" `;
b3=`[class.is-invalid]="(nombreLocal.invalid && nombreLocal.touched) || (nombreLocal.invalid && variableLocalTemplate.submitted)" #nombreLocal="ngModel" name="nombre" [(ngModel)]="usuario.nombre"`;
b4=` placeholder="Nombre">
                                                                          <!-- [class.is-invalid]: Cambia la clase invalid -->
                                                                                              <!-- nombreLocal.invalid, .touched, .submitted: Igual nombre que # de al lado. La Variable local creado sea innvalido, 
                                                                                                                                              sea tocado el campo y no rellenado, además sea enviado, se señala en rojo -->
                                                                                                                                                                   <!-- #nombreLocal: Variable local que tenga dentro ngModel 
                                                                                                                                                                                      para poder enviarlo por el submit del botón -->`;
b1=`
                  <small *ngIf="nombreLocal.invalid && nombreLocal.touched" class="form-text text-danger">El nombre es obligatorio y tiene que tener 5 letras</small>`;
b2=`
                    <!-- *ngIf: NECESARIO TOCAR PARA QUE SALGA EL ERROR EN EL NAVEGADOR, sino envía sin dar error. Si (*ngIf) el nombre, apellido y email es invalido y es tocado, muestra el texto que hemos puesto en la etiqueta small. Por eso es más eficaz en componente.ts, 
                                porque aunque no toquemos al darle submitted dará error en el navegador gracias a estos *ngIf -->
              </div>
          </div>


          <div class="form-group row">
            <label class="col-2 col-form-label">Apellido</label>
              <div class="col-8">
                <input class="form-control" type="text" required minlength="5" `;
b5=`[class.is-invalid]="(apellidoLocal.invalid && apellidoLocal.touched) || (apellidoLocal.invalid && variableLocalTemplate.submitted)" #apellidoLocal="ngModel" name="apellido" [(ngModel)]="usuario.apellido"`;
b6=` placeholder="Apellido">`;
bb=`
                <small *ngIf="apellidoLocal.invalid && apellidoLocal.touched" class="form-text text-danger">El apellido es obligatorio y tiene que tener 5 letras</small>`;
bb0=`
              </div>
          </div>

    </div>

          <div class="form-group row">
            <label class="col-2 col-form-label">Correo</label>
              <div class="col-8">
                <input class="form-control"type="email" `;
b7=`[class.is-invalid]="(emailLocal.invalid && emailLocal.touched) || (emailLocal.invalid && variableLocalTemplate.submitted)" #emailLocal="ngModel" name="email" [(ngModel)]="usuario.email"`;
b8=`  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$" required placeholder="Correo electrónico">`;
bb8=`
                <small *ngIf="emailLocal.invalid && emailLocal.touched" class="form-text text-danger">El correo es obligatorio y debe tener el formato correo@correo.com</small>`;
bb9=`
              </div>
          </div>

          <div class="form-group row mt-5">
            <label class="col-2 col-form-label">Género</label>
              <div class="col-8">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio"`;
b9=`  #genero="ngModel" [class.is-invalid]="genero.invalid && genero.touched" name="genero" [(ngModel)]="usuario.genero" value="M"`;
b10=`required>
                                            <!-- value: Para seleccionar uno y no los dos a la vez, 
                                                        hay que darle diferente valor 
                                                        (Ej: uno M y otro F) -->
            <label class="form-check-label">Masculino</label>
              </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" `;
b11=`#genero="ngModel" [class.is-invalid]="genero.invalid && genero.touched" name="genero" [(ngModel)]="usuario.genero" value="F"`;
b12=`required>
            <label class="form-check-label">Femenino</label>
              </div>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-2 col-form-label">&nbsp;</label>
            <div class="input-group col-md-8">
              <button type="submit" class="btn btn-outline-primary btn-block">Guardar</button>
            </div>
        </div>

</form>`;

d0=`  <form `;
d1=`autocomplete="off" (ngSubmit)="guardartemplate(variableLocalTemplate)" #variableLocalTemplate="ngForm"`;
d2=`>
<div>

  <div class="form-group row">
      <label class="col-2 col-form-label">Nombre</label>
      <div class="col-8">
          <input class="form-control" `;
d3=`[class.is-invalid]="(nombreLocal.invalid && nombreLocal.touched) || (nombreLocal.invalid && variableLocalTemplate.submitted)" #nombreLocal="ngModel"`;
d4=`type="text"`;
d5=` name="nombre" [(ngModel)]="usuario.nombre" required minlength="5" `;
d6=`placeholder="Nombre">
`;
d7=`        <small *ngIf="nombreLocal.invalid && nombreLocal.touched" class="form-text text-danger">El nombre es obligatorio y tiene que tener 5 letras</small>`;
d8=`
  </div>
</div>

  <div class="form-group row">
    <label class="col-2 col-form-label">Apellido</label>
    <div class="col-8">
      <input class="form-control" `;
d9=`[class.is-invalid]="(apellidoLocal.invalid && apellidoLocal.touched) || (apellidoLocal.invalid && variableLocalTemplate.submitted)" #apellidoLocal="ngModel" `;
d10=`type="text" `;
d11=`name="apellido" [(ngModel)]="usuario.apellido" required minlength="5" `;
d12=`placeholder="Apellido">
`;
d13=`     <small *ngIf="apellidoLocal.invalid && apellidoLocal.touched" class="form-text text-danger">El apellido es obligatorio y tiene que tener 5 letras</small>`;
d14=`
    </div>
  </div>

</div>

  <div class="form-group row">
    <label class="col-2 col-form-label">Correo</label>
    <div class="col-8">
      <input class="form-control" `;
d15=`[class.is-invalid]="(emailLocal.invalid && emailLocal.touched) || (emailLocal.invalid && variableLocalTemplate.submitted)" #emailLocal="ngModel" `;
d16=`type="email"`;
d17=` name="email" [(ngModel)]="usuario.email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$" required `;
d18=`placeholder="Correo electrónico">
`;
d19=`     <small *ngIf="emailLocal.invalid && emailLocal.touched" class="form-text text-danger">El correo es obligatorio y debe tener el formato correo@correo.com</small>`;
d20=`
  </div>
</div>

  <div class="form-group row mt-5">
      <label class="col-2 col-form-label">País</label>
  <div class="col-8">
`;
d21=`
        <select class="form-control" name="pais" [disabled]="variablePaises2.length === 0" [class.is-invalid]="paisLocal.invalid && paisLocal.touched" [(ngModel)]="usuario.pais" required #paisLocal="ngModel">`;
co21=`
    <!-- Select: para elegir opciones de un listado, en este caso de la API de la Web de países (JSON) 
                                                  Disabled: Deshabilitar si no tenemos datos (length === 0), en la variablePaises2 tenemos los datos del JSOn de países-->`;
dd21=`  
            <option *ngFor="let paisFor of variablePaises2" [value]="paisFor.codigo">`;
co2121=`
               <!-- *ngFor: Campo de opciones sacada a través de un for, metemos en la variable nueva (paisFor) el contenido sacado a través de la variable definida en el TS (variablePaises2) 
                            que a su vez llama a la API de la Web (JSON) 
                                                            Value: Coge el valor (value) de la variable definida en el for (paisFor) relacionada con la variablePaises2 que está relacionada con variablePaises, 
                                                                    donde se mete la función (getPaises) que llamamos del servicio a través de la variable declarada en el TS (paisService). Devuelve el codigo 
                                                                    (codigo: variablepais.alpha3Code) y el nombre (nombre: variablepais.name) que cogemos por la función (getPaises)-->
`;
coco2121=`      
                  {{ paisFor.nombre }}
            </option>
        </select>`;
d22=`
        
  </div>
</div>

  <div class="form-group row">
    <label class="col-2 col-form-label">&nbsp;</label>
    <div class="input-group col-md-8">
        <button type="submit" class="btn btn-outline-primary btn-block">Guardar</button>
    </div>
  </div>

</form>`;
dd00=`    


<div class="form-group row mt-5">
<label class="col-2 col-form-label">Género</label>
<div class="col-8">
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" [(ngModel)]="usuario.genero" value="M" required name="genero" #genero="ngModel" [class.is-invalid]="genero.invalid && genero.touched">
        <label class="form-check-label">Masculino</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" [(ngModel)]="usuario.genero" value="F" required name="genero" #genero="ngModel" [class.is-invalid]="genero.invalid && genero.touched">
        <label class="form-check-label">Femenino</label>
    </div>
</div>
</div>`;
}
