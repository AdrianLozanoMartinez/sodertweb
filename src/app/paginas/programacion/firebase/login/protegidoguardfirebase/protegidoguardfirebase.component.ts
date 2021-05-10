import { Component, OnInit } from '@angular/core';
import { FireservicioService } from '../servicio/fireservicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-protegidoguardfirebase',
  templateUrl: './protegidoguardfirebase.component.html',
  styleUrls: ['./protegidoguardfirebase.component.css']
})
export class ProtegidoguardfirebaseComponent implements OnInit {

  constructor( private servicefire: FireservicioService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  salir(){
    this.servicefire.logout();
    this.router.navigateByUrl('/home');   //  /login o /home u /otro
  }

}
