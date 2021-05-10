import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
//Servicio.ts creado para conectar firebase al proyecto 
import { FireservicioService } from '../servicio/fireservicio.service';

@Injectable({
  providedIn: 'root'
})
export class ElguardianGuard implements CanActivate {

       //Manejo del servicio
constructor( private variableServicio: FireservicioService,  
  //Enlaces de páginas
  private router: Router){}

  canActivate(
    //Ruta que el usuario quiere navegar, podemos imprimir en consola, tiene nombre de la ruta, los argumentos...Se puede omitir
    next: ActivatedRouteSnapshot,
    //Ruta actual. Se puede omitir
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //Puede retornar un observable, promesa (promise) o un booleano normal 
    //return true; //-> Se elimina o se comenta (//)
 

        //Si estamos autentificados entramos en el componente protegido
      if(this.variableServicio.guardEstaAutentificado()){       
        //guardEstaAutentificado() función del servicio.ts                      
      return true;                                                                    
      }else{
        //Si no estamos longeado nos manda al login
      this.router.navigateByUrl('/login');                                               
      }
  }


}


