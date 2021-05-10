import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';                         
import { UsuarioModel } from '../../../angular/loginangular/model/usuario.model';        
import { FireservicioService } from '../servicio/fireservicio.service';
import Swal from 'sweetalert2'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-protegidoguardfirebaselogin',
  templateUrl: './protegidoguardfirebaselogin.component.html',
  styleUrls: ['./protegidoguardfirebaselogin.component.css']
})
export class ProtegidoguardfirebaseloginComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel ();     

  botonRecordar = false;                                  

  constructor( private servicefire: FireservicioService, private router: Router ) { }

  ngOnInit() {

    if( localStorage.getItem('email') ){                    
        this.usuario.email = localStorage.getItem('email');     
        this.botonRecordar = true;                              
      }
      
  }


  login (form:NgForm){                                              
    if(form.invalid){                                               
    return;
  }

  Swal.fire({                                              
    allowOutsideClick: false,                                       
    icon: 'info',      //Otros iconos: success, error, warning, info, question
    text: 'Espere por favor'
  });

  Swal.showLoading();  

  console.log(this.usuario);                                         
  console.log('Imprimir si el formulario es válido');

  this.servicefire.login( this.usuario ).subscribe( resp => {  
  console.log (resp); 

  Swal.close();   

  if( this.botonRecordar ){                       
      localStorage.setItem('email', this.usuario.email);   
    }

  /*Aquí cambiamos al archivo protegido, para cuando nos 
  longeamos nos lleve a ese protegido (Es opcional, se 
  puede acceder por otros medios como enlaces...)*/
  this.router.navigateByUrl('/protegidoguardfirebase'); 

  }, (err) => {                                                 

  console.log (err);
  console.log (err.error.error.message);

  Swal.fire({                                             
    icon: 'error',   //Otros iconos: success, error, warning, info, question
    title: 'Error al autenticar',                               
    text: err.error.error.message
  });

  });
  }

}
