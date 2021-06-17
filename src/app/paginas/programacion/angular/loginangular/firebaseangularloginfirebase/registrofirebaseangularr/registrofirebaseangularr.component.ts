import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../model/usuario.model';
import { NgForm } from '@angular/forms';
import { ServiciofireService } from '../servicio/serviciofire.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrofirebaseangularr',
  templateUrl: './registrofirebaseangularr.component.html',
  styleUrls: ['./registrofirebaseangularr.component.css']
})
export class RegistrofirebaseangularrComponent implements OnInit {

  usuario: UsuarioModel;

  recordarme: false;

  constructor( private auth: ServiciofireService,
               private router: Router ) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  GuardarDatos( datoRecibido: NgForm ){
      if ( datoRecibido.invalid ){
          return;
      }

      Swal.fire({
        allowOutsideClick: false, //Para que el usuario no pueda cerrarla
        icon: 'info',             
        text: 'Espere por favor...'
      });
      Swal.showLoading(); //Transforma el botón en un loading
      
      this.auth.registrar(this.usuario).subscribe ( resp => {
        console.log(resp);

        Swal.close();  //Cerrar sweepalert2 porque ha terminado de cargar

        if ( this.recordarme ){  //Si es true, si quiero que me recuerde
          localStorage.setItem('nombreTokenEmail', this.usuario.email);  //Guardamos en el localStorage el email del usuario
      }

        this.router.navigateByUrl('/protegergirebaseangular');
        
      }, (variableRecibirError) => {  //SI QUEREMOS CONTROLAR EL ERROR AQUÍ O EN EL SERVICIO. RECOMEDABLE AQUÍ
         console.log(variableRecibirError.error.error.message);  //EMAIL_EXISTS

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
