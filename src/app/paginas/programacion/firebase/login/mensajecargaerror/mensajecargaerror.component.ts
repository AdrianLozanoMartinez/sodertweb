import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';                         
import { UsuarioModel } from '../../../angular/loginangular/model/usuario.model';        
import { FireservicioService } from '../servicio/fireservicio.service';
import Swal from 'sweetalert2'; 
//Redirigir a otra página
import { Router } from '@angular/router';                

@Component({
  selector: 'app-mensajecargaerror',
  templateUrl: './mensajecargaerror.component.html',
  styleUrls: ['./mensajecargaerror.component.css']
})
export class MensajecargaerrorComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel ();     

                                                        //Redirigir a otra página
  constructor( private servicefire: FireservicioService, private router: Router ) { }

  ngOnInit(): void {
  }


  login (form:NgForm){                                              
    if(form.invalid){                                               
    return;
    }
//Personalizar y crear de carga
Swal.fire({            
  /*Para no poder cerrar ventana si hace click fuera del mensaje. 
    Sino se pone si se quita*/                                      
  allowOutsideClick: false,                                       
  icon: 'info',      //Otros iconos: success, error, warning, info, question
  text: 'Espere por favor'
});
  
  Swal.showLoading();  

console.log(this.usuario);                                         
console.log('Imprimir si el formulario es válido');

this.servicefire.login( this.usuario ).subscribe( resp => {  
console.log (resp); 

//Cierra mensaje al cargar
Swal.close();   

this.router.navigateByUrl('/home');                     //Redirigir a otra página una vez que haya cargado usuario, puede ser home o la parte privada u otras

}, (err) => {                                                 

    console.log (err);
    console.log (err.error.error.message);
  
    //Personalizar y crear de error
    Swal.fire({                                             
      icon: 'error',   //Otros iconos: success, error, warning, info, question
    /*allowOutsideClick: false, -> No se pone para poder cerrar ventana si hace 
        click fuera del mensaje. Sino se pone si se quita*/
      title: 'Error al autenticar',                               
      text: err.error.error.message
    });

    });
}

}
            