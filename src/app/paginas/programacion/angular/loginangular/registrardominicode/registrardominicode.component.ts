import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';  //Formularios reactivos - Controles
import { Auth2Service } from '../serviciodominicode/auth2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrardominicode',
  templateUrl: './registrardominicode.component.html',
  styleUrls: ['./registrardominicode.component.css']//,
  //providers: [AuthService]  //Si no queremos incluirlo en el module y solamente esté disponible en esta zona, la quitaríamos del module
})
export class RegistrardominicodeComponent implements OnInit {

  registerForm = new FormGroup({  //Control por reactivo (ts)
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor( private authSvc: Auth2Service,
                private router: Router ) { }

  ngOnInit(): void {
  }

  async onRegister(){
    const {email, password} = this.registerForm.value;  //EXTRAEMOS LOS DATOS de las variables de registerForm. Debe ser igual que en registerForm (email y password)
    try{
      const user = await this.authSvc.register(email,password);  //Lo que extraemos lo mandamos a la función que está en el servicio que opera con firebase
      console.log('Form ->', this.registerForm.value);  //Nos muestra el resultado del registro
      if(user){
          this.router.navigate(['/']);
      }
    }
    catch (err) {
      console.log(err);
  }
}

}
