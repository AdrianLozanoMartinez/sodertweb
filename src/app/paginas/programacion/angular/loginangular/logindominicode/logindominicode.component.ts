import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';  //
import { UsuarioModel } from '../model/usuario.model';
import { ServiciofireService } from '../firebaseangularloginfirebase/servicio/serviciofire.service';

//Dominicode FormGroup y FormControl


@Component({
  selector: 'app-logindominicode',
  templateUrl: './logindominicode.component.html',
  styleUrls: ['./logindominicode.component.css'],
  //Dominicode
  providers: [ServiciofireService]
})
export class LogindominicodeComponent implements OnInit {

  // usuario: UsuarioModel = new UsuarioModel(); //

  // //Dominicode
  // loginForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // });

  constructor( //private authSvc: ServiciofireService 
    ) { }

  ngOnInit(): void {
  }

  // login ( form: NgForm ){  // 

  //   if( form.invalid ){
  //       return;
  //   }
  //   console.log(form);
  //   console.log(this.usuario);
    
  // }


  // //Dominicode
  // onLogin(){
  //   // console.log('Form->', this.loginForm.value);
  //   const { email, password } = this.loginForm.value;
  //   this.authSvc.login( email );
  // }
}