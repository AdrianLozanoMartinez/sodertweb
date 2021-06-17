import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ServiciofireService } from './servicio/serviciofire.service';

@Injectable({
  providedIn: 'root'
})
export class GuardprotegergirebaseangularGuard implements CanActivate {

  constructor ( private auth: ServiciofireService, 
                private router: Router ){

  }


  canActivate(): boolean{ //Dejamos solo boolean porque es lo que vamos a usar/recibir
    /*next: ActivatedRouteSnapshot,   //Contiene la ruta que va a navegar
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {  //RouterStateSnapshot -> Contiene el estado actual de la ruta*/
      
      if( this.auth.estaAutenticado() ){
        return true;
      }else{
        this.router.navigateByUrl('/loginangularfirebase');
        return false;
      }
  }
 
  
}
