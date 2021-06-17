import { Component, OnInit } from '@angular/core';
import { ServiciofireService } from '../servicio/serviciofire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-protegergirebaseangular',
  templateUrl: './protegergirebaseangular.component.html',
  styleUrls: ['./protegergirebaseangular.component.css']
})
export class ProtegergirebaseangularComponent implements OnInit {

  constructor( private auth: ServiciofireService,
               private router: Router) { }

  ngOnInit(): void {
  }

  salir(){
    this.auth.logout();
    this.router.navigateByUrl('/loginangularfirebase');
  }
}
