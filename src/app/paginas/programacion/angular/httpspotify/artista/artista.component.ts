import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';   
import { ServiciospotifyService } from '../servicio/serviciospotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  loadingArtist: boolean;

  artista_variable_Arreglo: any = {};

  //
  topTracks_variable: any[] = [];

  constructor( private variable_activaterouter: ActivatedRoute,
               private servicio_spotify: ServiciospotifyService ) { 

    this.variable_activaterouter.params.subscribe ( variableRecibido =>{


      this.loadingArtist = true;

      console.log(variableRecibido);

      console.log(variableRecibido ['id']);  
   


      
      this.getUNSOLOartista ( variableRecibido['id'] );

      //
      this.getTopTracksTs ( variableRecibido['id'] );
      
   
   
    });

  }

  ngOnInit(): void {
  }


  getUNSOLOartista ( recibir_ID: string ){   


    this.loadingArtist = true;


    this.servicio_spotify.getArtistaUNartista( recibir_ID )   
                         .subscribe ( respuesta_artista => {
                            console.log(respuesta_artista);
                            
                            this.artista_variable_Arreglo = respuesta_artista;  
                      
                            this.loadingArtist = false;
                      
                      
                      
                          });
  }


//
  getTopTracksTs ( id: string ){
    this.servicio_spotify.getTopTracks( id )
                        .subscribe ( recibirtoptracks => {
                          console.log(recibirtoptracks);
                          
                          this.topTracks_variable = recibirtoptracks;
                        });
  }



//Html
c=`{`;
co=`<`;
f=`*`;
p=`(`;
t=`[`;
}
