import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../../model/usuario.model';
import { catchError, first, map } from 'rxjs/operators';   //Token
//first de Dominicode

//Dominicode
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ServiciofireService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:sign'; 

  private apikey = 'AIzaSyBXBZUhEffME9i58aVvigvAkSoOgCEfSPg';

  TokenUsuario: string;  //Se inicializa sin valor (undefined) porque hasta que no se identifique no obtenemos ningún token
  
    //Copiamos la parte que se repite y lo metemos en la variable url

    //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]              //Crear usuario
    //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]   //Login usuario

  constructor( private http: HttpClient,
              //Dominicode
               public afAuth: AngularFireAuth ) { 
    this.leerToken();  //Así nada más empezar vemos si tenemos algún token inicializado
  }

  registrar ( usuario: UsuarioModel ){  //En la documentación pone que necesitaremos email, password y token (que debe ser true para que me devuelva). Email y password viene declarado en el Model y por ello en la variable usuario
                                        //https://firebase.google.com/docs/reference/rest/auth -> Request Body Payload -> email, password y returnSecureToken

      //Compleja                                  
      /*const authData = {                //Como viene incluido en el model email/password tenemos que declarar el token
            email: usuario.email,       //Del model
            password: usuario.password, //Del model
            returnSecureToken: true     //Copiamos el token de la web y la declaramos en true
      };*/              
      
      //Reducida
      const authData = {                //Como viene incluido en el model email/password tenemos que declarar el token
        ...usuario,                 //Del model
        returnSecureToken: true     //Copiamos el token de la web y la declaramos en true
      }; 
  


  //LLAMAR A NUESTRO SERVICIO HTTP POSTP PARA CREAR

    //Compleja
    /*return this.http.post(                        //return -> Para poderme subscribirme en otro lugar
      `${ this.url }Up?key=${ this.apikey }`,    //Dirección donde hacemos el post y usamos el servicio API
      authData                                    //Argumento que le enviamos a la dirección (email, password y token)
    );*/ 

    //Reducida - Usamos aquí el TOKEN para no manejar en el Ts los errores (o eso creo por ahora)
    return this.http.post(this.url + 'Up?key=' + this.apikey, authData)
                          .pipe( //catchError Se podría controlar el error, pero ya lo controlamos en el Ts
                            map( resp => {   //Dentro del Pipe nos permite usar el map (Transforma la información como queramos o servir solo de intermediario, lee la respuesta y si viene el token lo almacena. La ventaja del map que si el post da un error no se va a disparar)
                              console.log('Entro en el pipe -> map'); 
                              this.guardarToken ( resp ['idToken']); //Voy a mandar a guardarToken el ID del token que es lo que obtengo de la API, debe ser exactamente igual escrito
                              return resp;  //Meto en una tuvería (pipe) y filtro (map) lo que quiero obtener (['idToken'])
                          })/*,
                          catchError(err => {   //SI QUEREMOS CONTROLAR EL ERROR AQUÍ O EN EL TS
                            console.log(err.error.error.message);
                            return err;
                          })*/
                         );
  }


  login( usuario: UsuarioModel ){//En la documentación pone que necesitaremos email, password y token (que debe ser true para que me devuelva). Email y password viene declarado en el Model y por ello en la variable usuario
                                        //https://firebase.google.com/docs/reference/rest/auth -> Request Body Payload -> email, password y returnSecureToken

      //Compleja                                  
      /*const authData = {                //Como viene incluido en el model email/password tenemos que declarar el token
            email: usuario.email,       //Del model
            password: usuario.password, //Del model
            returnSecureToken: true     //Copiamos el token de la web y la declaramos en true
      };*/              
      
      //Reducida
      const authData = {                //Como viene incluido en el model email/password tenemos que declarar el token
        ...usuario,                 //Del model
        returnSecureToken: true     //Copiamos el token de la web y la declaramos en true
      }; 
  


  //LLAMAR A NUESTRO SERVICIO HTTP POSTP PARA CREAR

    //Compleja
    /*return this.http.post(                        //return -> Para poderme subscribirme en otro lugar
      `${ this.url }InWithPassword?key=${ this.apikey }`,    //Dirección donde hacemos el post y usamos el servicio API
      authData                                    //Argumento que le enviamos a la dirección (email, password y token)
    );*/ 

    //Reducida
    return this.http.post(this.url + 'InWithPassword?key=' + this.apikey, authData)
                        .pipe( //catchError Se podría controlar el error, pero ya lo controlamos en el Ts
                          map( resp => {   //Dentro del Pipe nos permite usar el map (Transforma la información como queramos o servir solo de intermediario, lee la respuesta y si viene el token lo almacena. La ventaja del map que si el post da un error no se va a disparar)
                            console.log('Entro en el pipe -> map'); 
                            this.guardarToken ( resp ['idToken']); //Voy a mandar a guardarToken el ID del token que es lo que obtengo de la API, debe ser exactamente igual escrito
                            return resp;  //Meto en una tuvería (pipe) y filtro (map) lo que quiero obtener (['idToken'])
                          })/*,
                          catchError(err => {   //SI QUEREMOS CONTROLAR EL ERROR AQUÍ O EN EL TS
                            console.log(err.error.error.message);
                            return err;
                          })*/
                        );


    }


//////////////////////////////////////////////////////*TOKEN*///////////////////////////////////////////////////////////////////////////////////////////////

  private guardarToken ( IDToken_Recibido: string ){   //Según video idToken
    this.TokenUsuario = IDToken_Recibido;
    localStorage.setItem('AlmacenaToken', IDToken_Recibido); //ID Token lo almacenamos en AlmacenaToken, su forma es un string y lo cogemos del IDToken_Recibido

    ////////////////////////////////////////////Validación de la fecha
    let hoy = new Date();   //hoy fecha actual
    hoy.setSeconds( 3600 );   //hoy  1h en el futuro y lo convierte en número continuo (1558457400681)

    localStorage.setItem('expira', hoy.getTime().toString() );  //Almacenamos en localStorage. expira u otro nombre, getTime -> Coge la fecha en número continuo (1558457400681) y para almacenar en localStorage es necesario convertirlo en string por eso usamos toString() 
  }



  leerToken(){
      if( localStorage.getItem('AlmacenaToken') ){  //Si existe el token
        this.TokenUsuario = localStorage.getItem('AlmacenaToken');  //Metemos en la variable el token que está almacenado si coincide por la condición de arriba
      }
      else{  //Si no existe el token
        this.TokenUsuario = '';  //Lo inicializamos en vacío
      }

      return this.TokenUsuario;
  }


  estaAutenticado(): boolean {  //El resultado dará un boolean
     
    
    if( this.TokenUsuario.length <2 ){
      return false;
    }
    
    const expiraVariable = Number(localStorage.getItem('expira'));  //Coge la fecha que se guarda en el localStorage en formato string y lo transformamos en número

    const expiraDate = new Date();  //Metemos la fecha actual
    expiraDate.setTime(expiraVariable);  //Fecha en la que el token expira. Porque cogemos la fecha actual (expiraDate) y la comparamos con la fecha futura (expiraVariable) realizada en guardarToken


    if ( expiraDate > new Date() ){  //Si la fecha futura es mayor que la actual es que aún estamos autentificado
        return true;
    }
    else{     //Si la fecha futura es menor que la actual es que ya expiró
      return false;
    }
    
                  
  }

  logout(){
    localStorage.removeItem('AlmacenaToken');
  }





//Dominicode - REGISTER
async registerDominicode ( email: string, password: string ){
  try{
    const result = await this.afAuth.createUserWithEmailAndPassword( email, password );
    return result;//createUserWithEmailAndPassword única diferencia con register
  }catch (error) {
    console.log(error); 
  }
}

//Dominicode - LOGIN
async loginDominicode( email: string, password: string ){
    try{
      const result = await this.afAuth.signInWithEmailAndPassword( email, password );
      return result;
    }catch (error) {
      console.log(error);
    }
}

//Dominicode - LOGOUT
async logoutDominicode(){
  try{
    await this.afAuth.signOut();
  }catch (error){
    console.log(error);
  }
}

//Dominicode - Conseguir usuario
getCurrentUser(){
  return this.afAuth.authState.pipe(first()).toPromise();
}





}
