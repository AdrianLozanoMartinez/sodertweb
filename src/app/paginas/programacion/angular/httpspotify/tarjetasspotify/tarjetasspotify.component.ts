import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjetasspotify',
  templateUrl: './tarjetasspotify.component.html',
  styleUrls: ['./tarjetasspotify.component.css']
})
export class TarjetasspotifyComponent implements OnInit {

  @Input() dato_entre_tarjeta_mostrar: any[] = [];

  constructor( private variable_router: Router ) { }

  ngOnInit(): void {
  }

  VerArtista( itemMandado:any ){
    console.log(itemMandado);  //Muestra todos los datos de un elemento específico
    
    let artistaId;

    if ( itemMandado.type === 'artist' ){   //Si el artista que recibimos es igual que el typo artist, metemos el valor de la id recibido a la variable artistaId
      artistaId = itemMandado.id;
    }
    else{
      artistaId = itemMandado.artists[0].id;  //Si no es igual, cogemos el primer elemento [0] que tengamos de artists de los elementos recibido, su id y lo metemos en la variable artistaId
    }

    console.log(artistaId);  //Muestra la ID de un elemento específico


    this.variable_router.navigate([ '/artist', artistaId ]);  //Vamos a la página del artista con la is, el especifico
    
  }

}
