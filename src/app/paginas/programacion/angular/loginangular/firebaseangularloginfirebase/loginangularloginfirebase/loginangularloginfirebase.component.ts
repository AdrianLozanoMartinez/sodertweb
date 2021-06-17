import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../model/usuario.model';
import { NgForm } from '@angular/forms';
import { ServiciofireService } from '../servicio/serviciofire.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginangularloginfirebase',
  templateUrl: './loginangularloginfirebase.component.html',
  styleUrls: ['./loginangularloginfirebase.component.css']
})
export class LoginangularloginfirebaseComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();

  recordarme = false;

  constructor( private auth: ServiciofireService,
               private router: Router ) { }

  ngOnInit() {

    //AUNQUE LE DEMOS A RECORDAR EN REGISTRAR APARECERÁ SOLO EN LOGIN PORQUE LO HEMOS PUESTO AQUÍ, podemos elegir si queremos que recuerde ne el login o registrar, pero el efecto es igual
    if( localStorage.getItem ('nombreTokenEmail') ){   //En registro y login debe tener el mismo nombre (nombreTokenEmail) para que pueda leer y mostrar luego
      this.usuario.email = localStorage.getItem('nombreTokenEmail');
      this.recordarme = true;
    }
  }

  loginTs( datoRecibido: NgForm ){
    if ( datoRecibido.invalid ){
        return;
    }

    Swal.fire({
      allowOutsideClick: false, //Para que el usuario no pueda cerrarla
      icon: 'info',             
      text: 'Espere por favor...'
    });
    Swal.showLoading(); //Transforma el botón en un loading
    
    this.auth.login(this.usuario).subscribe ( resp => {
      console.log(resp);

      Swal.close();  //Cerrar sweepalert2 porque ha terminado de cargar

      if ( this.recordarme ){  //Si es true, si quiero que me recuerde
          localStorage.setItem('nombreTokenEmail', this.usuario.email);  //Guardamos en el localStorage el email del usuario
      }

      this.router.navigateByUrl('/protegergirebaseangular');
      
     }, (variableRecibirError) => {     //SI QUEREMOS CONTROLAR EL ERROR AQUÍ O EN EL SERVICIO. RECOMEDABLE AQUÍ
        console.log(variableRecibirError.error.error.message); //EMAIL_EXISTS

        Swal.fire({
          icon: 'error',
          title: 'Error al autenticar',
          text: variableRecibirError.error.error.message
        });

      });
    
  }

  //Html
  c=`{`;
}
