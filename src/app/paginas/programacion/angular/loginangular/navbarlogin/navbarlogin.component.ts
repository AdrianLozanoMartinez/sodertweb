import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Auth2Service } from '../serviciodominicode/auth2.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-navbarlogin',
  templateUrl: './navbarlogin.component.html',
  styleUrls: ['./navbarlogin.component.css']
})
export class NavbarloginComponent implements OnInit {

  //NO RECOMENDADO (Relacionado con servicio.ts y navbar.html): public isLogged = false; //Para saber si estamos longeado, lo inicializamos en false (no). Dominicode

  //NO RECOMENDADO (Relacionado con servicio.ts y navbar.html): public user: any;  //Para coger usuario, lo inicializamos en nulo. Dominicode

  public user$: Observable<any> = this.authSvc.afAuth.user; //Meto en la variable el usuario para poder leer en comprobaciones

  constructor( private authSvc:Auth2Service,
                private router: Router ) { }

  //Dominicode NO RECOMENDADO (Relacionado con servicio.ts y navbar.html):
   /*async */ngOnInit() { /*  //Para coger el usuario
   
    this.user = await this.authSvc.getCurrentUser();  //Cogemos si existe usuario de la función getCurrentUser del servicio

      if (this.user){ //Si existe usuario que lo cogemos de arriba
        this.isLogged = true; //Si existe usuario ponemos la propiedad en true, de ese modo podemos mostrar/no botones/cosas si estamos longeados
        console.log('User -> ', this.user);
      }*/
    }


  async onLogout(){
    try{
      await this.authSvc.logout();
      this.router.navigate(['/loginfb']);
    }
    catch(err){
      console.log(err);
    }
  }
  

}
