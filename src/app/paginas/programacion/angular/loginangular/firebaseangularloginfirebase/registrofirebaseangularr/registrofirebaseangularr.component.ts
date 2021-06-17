import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../model/usuario.model';
import { NgForm } from '@angular/forms';
import { ServiciofireService } from '../servicio/serviciofire.service';

@Component({
  selector: 'app-registrofirebaseangularr',
  templateUrl: './registrofirebaseangularr.component.html',
  styleUrls: ['./registrofirebaseangularr.component.css']
})
export class RegistrofirebaseangularrComponent implements OnInit {

  usuario: UsuarioModel;

  constructor( private auth: ServiciofireService ) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  GuardarDatos( datoRecibido: NgForm ){
      if ( datoRecibido.invalid ){
          return;
      }
      
      this.auth.registrar(this.usuario).subscribe ( resp => {
        console.log(resp);
        
      }, (variableRecibirError) => {  //SI QUEREMOS CONTROLAR EL ERROR AQUÍ O EN EL SERVICIO. RECOMEDABLE AQUÍ
         console.log(variableRecibirError.error.error.message);  //EMAIL_EXISTS
       }
      
      );
      
  }
//Html
c=`{`;
}
