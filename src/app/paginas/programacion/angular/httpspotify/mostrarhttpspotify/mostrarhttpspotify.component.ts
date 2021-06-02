import { Component, OnInit } from '@angular/core';
import { ServiciospotifyService } from '../servicio/serviciospotify.service';


@Component({
  selector: 'app-mostrarhttpspotify',
  templateUrl: './mostrarhttpspotify.component.html',
  styleUrls: ['./mostrarhttpspotify.component.css']
})
export class MostrarhttpspotifyComponent implements OnInit {

  variable_loading: boolean;

  nuevasCanciones: any[] = [];

  variable_error: boolean;   

  variable_mensaje_error: string; 

  constructor( private variable_servicio: ServiciospotifyService) {

    this.variable_loading = true;

    this.variable_error = false;  

      this.variable_servicio.get_spotify()
                            .subscribe( (datoRecibido: any) => {     //Subscribe tiene dos funciones, la 1º es lo correcto y la segunda el error

            console.log(datoRecibido);    //Correcto
            this.nuevasCanciones = datoRecibido;
            this.variable_loading = false;
      }, ( error_recibido ) => { //Error
  
        this.variable_error = true; 

        this.variable_loading = false; 
        
        console.log(error_recibido);  

        console.log(error_recibido.error.error.message);  
        
        this.variable_mensaje_error = error_recibido.error.error.message; 
      }    

      );

   }

  ngOnInit(): void {
  }






//Html
c=`{`;
co=`<`;
f=`*`;
p=`(`;
t=`[`;
}
