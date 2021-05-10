import { Component, OnInit } from '@angular/core';
//Para usar [(ngModel)] 
import { NgForm } from '@angular/forms';     
//Para usar la estructura definida en model -> UsuarioModel                    
import { UsuarioModel } from '../model/usuario.model';           

@Component({
  selector: 'app-loginnormal',
  templateUrl: './loginnormal.component.html',
  styleUrls: ['./loginnormal.component.css']
})
export class LoginnormalComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel (); 

  constructor() { }

  ngOnInit(): void {
  }

  //Recibe formulario
  login (form:NgForm){  
    //Si el formulario es invalido se salga del formulario, no envíe/ni coja datos                                         
    if(form.invalid){                                               
    return;
  }
  
  //Si es válido (else) muestre console.log(this.usuario);
  console.log(this.usuario);                                          
  console.log('Imprimir si el formulario es válido');
  
}

}
