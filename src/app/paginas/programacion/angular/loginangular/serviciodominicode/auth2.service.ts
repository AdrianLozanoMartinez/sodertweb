import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

//NO RECOMENDADO (Relacionado con navbar.ts y .html)
//  import { User } from 'firebase';
//  import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Auth2Service {

  //NO RECOMENDADO (Relacionado con navbar.ts y .html)
  // public user: User;

  constructor( public afAuth: AngularFireAuth ) { }

  async login( emailRecibir:string, passwordRecibir:string ){//recibe 2 parámetros
    try{
      const result = await this.afAuth.signInWithEmailAndPassword( emailRecibir, passwordRecibir );
      return result;
    }
    catch (err) {
      console.log(err);
    }
  }

  async register( emailRecibir:string, passwordRecibir:string ){
    try{
      const result = await this.afAuth.createUserWithEmailAndPassword( emailRecibir, passwordRecibir );
      return result;
    }
    catch(err){
        console.log(err);
    }
  }

  async logout(){
    try{
      await this.afAuth.signOut();
    }
    catch(err){
      console.log(err);
    }
  }

  //NO RECOMENDADO (Relacionado con navbar.ts y .html)
  /* getCurrentUser(){  //Coger usuario logeado

       return this.afAuth.authState.pipe(first()).toPromise();
  } */
}