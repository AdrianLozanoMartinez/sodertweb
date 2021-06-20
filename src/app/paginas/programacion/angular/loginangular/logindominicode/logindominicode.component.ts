import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';  //Formularios reactivos - Controles
import { Auth2Service } from '../serviciodominicode/auth2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logindominicode',
  templateUrl: './logindominicode.component.html',
  styleUrls: ['./logindominicode.component.css']//,
  //providers: [AuthService]  //Si no queremos incluirlo en el module y solamente esté disponible en esta zona, la quitaríamos del module
})
export class LogindominicodeComponent implements OnInit {

  loginForm = new FormGroup({  //Control por reactivo (ts)
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor( private authSvc: Auth2Service,
                private router: Router ) { }

  ngOnInit(): void {
  }

  async onLogin(){  
    const {email, password} = this.loginForm.value;  //EXTRAEMOS LOS DATOS de las variables de loginForm. Debe ser igual que en loginForm (email y password)
    try{ 
      const user = await this.authSvc.login(email,password);   //Lo que extraemos lo mandamos a la función que está en el servicio que opera con firebase

      if (user){
          this.router.navigate(['/']);  //Si hay usuario nos lleva a la raíz
      }

    }
    catch(err){
      console.log('Form ->', this.loginForm.value);  //
    }
    
  }
}
