import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../model/usuario.model';
import { NgForm } from '@angular/forms';
import { ServiciofireService } from '../servicio/serviciofire.service';

@Component({
  selector: 'app-loginangularloginfirebase',
  templateUrl: './loginangularloginfirebase.component.html',
  styleUrls: ['./loginangularloginfirebase.component.css']
})
export class LoginangularloginfirebaseComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();

  constructor( private auth: ServiciofireService ) { }

  ngOnInit(): void {
  }

  loginTs( datoRecibido: NgForm ){
    if ( datoRecibido.invalid ){
        return;
    }
    
    this.auth.login(this.usuario).subscribe ( resp => {
      console.log(resp);
      
     }, (variableRecibirError) => {     //SI QUEREMOS CONTROLAR EL ERROR AQUÍ O EN EL SERVICIO. RECOMEDABLE AQUÍ
        console.log(variableRecibirError.error.error.message); //EMAIL_EXISTS
      } 
    
    );
    
  }

  //Html
  c=`{`;
}
