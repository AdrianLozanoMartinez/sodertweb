import { Component, OnInit } from '@angular/core';
import { ServiciospotifyService } from './servicio/serviciospotify.service';

@Component({
  selector: 'app-httpspotify',
  templateUrl: './httpspotify.component.html',
  styleUrls: ['./httpspotify.component.css']
})
export class HttpspotifyComponent implements OnInit {

  constructor( private variable_servicio: ServiciospotifyService) { 
    this.variable_servicio.get_spotify();
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
