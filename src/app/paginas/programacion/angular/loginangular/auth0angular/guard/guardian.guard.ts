import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';  //Servicio de auth0 instalado al llamarlo en el module

@Injectable({
  providedIn: 'root'
})
export class GuardianGuard implements CanActivate {  //Podemos cambiar o ampliar aquí las demás opciones: implements CanActivate, otro, otro...

  //Creamos un constructor
  constructor( private auth: AuthService){}  //Variable que metemos el servicio declarado en el module


  canActivate(
    next: ActivatedRouteSnapshot,   //Ruta que queremos entrar
    state: RouterStateSnapshot): Observable<boolean> {  //Estado. Devuelve observable o promesa o un simple boolean

    return this.auth.isAuthenticated$;//Al poner el servicio instalado por ponerlo en el module de auth0
  }
  
}
