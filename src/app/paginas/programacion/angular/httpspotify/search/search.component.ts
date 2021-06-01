import { Component, OnInit } from '@angular/core';
import { ServiciospotifyService } from '../servicio/serviciospotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas_variable:any[] = [];

  variable_LoadingBuscar: boolean;

  constructor( private variable_servicio: ServiciospotifyService) { }

  ngOnInit(): void {
  }

  buscar( terminoRecibido: string ){

      console.log(terminoRecibido);

      this.variable_LoadingBuscar = true;

      this.variable_servicio.getArtista( terminoRecibido )
                            .subscribe( (datoRecibido:any) => {
                              console.log(datoRecibido);
                              this.artistas_variable = datoRecibido;

                              this.variable_LoadingBuscar = false;
                            });
  }


//Html
c=`{`;
co=`<`;
f=`*`;
p=`(`;
t=`[`;
}
