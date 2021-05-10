import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';                         
import { UsuarioModel } from '../../../angular/loginangular/model/usuario.model';        
import { FireservicioService } from '../servicio/fireservicio.service';
import Swal from 'sweetalert2'; 
import { Router } from '@angular/router';  

@Component({
  selector: 'app-recordar',
  templateUrl: './recordar.component.html',
  styleUrls: ['./recordar.component.css']
})
export class RecordarComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel ();     

  /*Recordar usuario, false para que no aparezca marcado en el inicio 
    y se cambie luego por el usuario si se quiere recordar*/
  botonRecordar = false;                                  

constructor( private servicefire: FireservicioService, private router: Router ) { }

ngOnInit() {

  if( localStorage.getItem('email') ){                    //Si en el localStorage existe el email
    this.usuario.email = localStorage.getItem('email');     //El usuario.email definido en el modelo es igual que el está en el localStorage
    this.botonRecordar = true;                              //Si se cumple ponemos la casilla de recordar activada
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

if( this.botonRecordar ){                        //Cuando botonRecordar está en true, se hace lo de dentro
  localStorage.setItem('email', this.usuario.email);   //Guarda (setItem) en el localStorage (almacen que se observa en el navegador -> aplicación) el email del usuario
  }

this.router.navigateByUrl('/home'); 

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
