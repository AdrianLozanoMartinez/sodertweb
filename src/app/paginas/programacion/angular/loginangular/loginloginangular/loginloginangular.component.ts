import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';  //
import { UsuarioModel } from '../model/usuario.model';

@Component({
  selector: 'app-loginloginangular',
  templateUrl: './loginloginangular.component.html',
  styleUrls: ['./loginloginangular.component.css']
})
export class LoginloginangularComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel(); //

  constructor() { }

  ngOnInit(): void {
  }

  login ( form: NgForm ){  // 

    if( form.invalid ){
        return;
    }
    console.log(form);
    console.log(this.usuario);
    
  }
}
