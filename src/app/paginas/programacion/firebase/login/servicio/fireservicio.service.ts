import { Injectable } from '@angular/core';
//Servicio Http - Conexión con Firebase
import { HttpClient } from '@angular/common/http';
//Model - Estructura de datos
import { UsuarioModel } from '../../../angular/loginangular/model/usuario.model';
//Token - map
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FireservicioService {
//Crear usuario 
//https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]  //Copiamos la parte que se repite y lo metemos en la variable url

//Login usuario 
//https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]  //Copiamos la parte que se repite y lo metemos en la variable url 

    private url = 'https://identitytoolkit.googleapis.com/v1/accounts:sign';
       private apikey = 'AIzaSyBXBZUhEffME9i58aVvigvAkSoOgCEfSPg';                 //Cambia API_KEY por proyecto

       usartoken: string;

  constructor(  

  //Servicio Http - Conexión con Firebase    
  private http: HttpClient ) { 

    this.leertoken();                                                          //Token - Lo ponemos en el constructor para nada más inicial ver si lo está leyendo

  } 

  login (usuario: UsuarioModel){

    ///////////Opción 1/////////////////
    /*Metemos en la variable (variable_login) los datos del model (UsuarioModel), 
      ESPECIFICANDO los campos*/
    /*const variable_login = {                      
        email: usuario.email,
        password: usuario.password,
        returnSecureToken: true
      };*/
    ///////////Opción 2/////////////////
    /*Metemos en la variable (variable_login) los datos del model (UsuarioModel), 
    TODOS (...)*/
    const variable_login = {                     
        ...usuario,
        returnSecureToken: true
      };
    
    
      ///////////Opción A/////////////////
    /*Metemos en la variable del servicio (http) la dirección  en formato POST, 
      para que no se vea la información en la barra de direcciones*/
    //return this.http.post(   
        /*Variable (url) que contiene la dirección igual que registro + InWithPassword?key= 
          (Especial del login) + variable (apikey) especial de cada proyecto*/                                           
     /*`${ this.url }InWithPassword?key=${ this.apikey }`,       
        variable_login
      ).pipe(map( resp => {
        console.log ('Entro en el mapa del RXJS');
        this.guardartoken( resp['idToken'] );
        return resp;
      })
      );*/
      ///////////Opción B/////////////////
      /*Metemos en la variable del servicio (http) la dirección  en formato POST, 
        para que no se vea la información en la barra de direcciones*/
    return this.http.post(this.url + 'InWithPassword?key=' + this.apikey, variable_login).pipe(map( resp => {        //Si no da error se ejecuta la función de abajo. Pipe -> Puede usar el operador map. CatchError -> Para atrapar el error. Proviene igual que el map del rxjs. Se pone entre el pipe y el map (pipe(catchError map...)). En este caso no lo usamos
      console.log ('Entro en el mapa del RXJS');                                                                       //Map -> Permite obtener la respuesta del post y pasarla por el map (puede transformar, servir como intermediario solamente o regresar lo que queramos...). Almacenar el token. Si hay un error el map nunca se dispara. map( resp => {: Obtendríamos la respuesta
      this.guardartoken( resp['idToken'] );                                                                            //Guardamos de la respuesta (resp) el 'idToken'
      return resp;
        })
        );   
                   /*Variable (url) que contiene la dirección igual que registro + InWithPassword?key= 
                     (Especial del login) + variable (apikey) especial de cada proyecto*/                                                                                           
    }

    /*La variable del token debe ser llamado igual que el que pusimos en 
      private guardartoken (idToken: string) -> localStorage.setItem
      ('token', idToken). En este caso lo llamamos token*/
    logout(){
      localStorage.removeItem('token');                                   
    }

    private guardartoken (idToken: string){                            //idToken -> Lo que estamos recibiendo en este momento
      this.usartoken = idToken;
        localStorage.setItem('token', idToken);                                 //Llamamos al localStorage (almacen que se observa en el navegador -> aplicación) y lo almacenamos en la propiedad llamada 'token' (Puede ser otro nombre, pero es donde se almacena el token y en logout se llamará igual) y el valor que almacenamos (idToken) en string
      
      let hoy = new Date();                                                  //Metemos en la variable hoy la fecha actual
      hoy.setSeconds( 3600 );                                                 //Sacamos 1h después de la hora actual
      localStorage.setItem('variableExpira', hoy.getTime().toString() );      //Metemos en la variableExpira cuando expira (hoy.getTime() -> variable hoy cogemos la fecha con la función getTime) y lo pasamos a string (.toString()) para que no de error
      }
      
      leertoken(){
        if (localStorage.getItem('token')){
          this.usartoken=localStorage.getItem('token');                         //Metemos en usartoken la obtención del token
          }else{
          this.usartoken='';                                                    //Lo inicializamos como vacío
          }
        return this.usartoken;
        }

        guardEstaAutentificado(): boolean{                                 //Método para saber si estamos autentificado a través del token (Nivel básico de controlar). Regresa un boolean para saber si o no se hace la condición de abajo
          if ( this.usartoken.length < 2 ){                               //Si el token es menor de 2 o no existe, devuelve false, sale de la función. Return this.usartoken.length > 2: Si el token que recoge es mayor de 2 caracteres lo devuelve. El usartoken se encuentra en el servicio ServiciofirebaseService en la función guardartoken (Saca el token, email almacenado en el localStorage 
            return false;
          }
        
          const variableExpira = Number (localStorage.getItem('variableExpira'));     //Transformamos en número el token que teníamos en string en private guardartoken. Lo metemos en const para no poderlo cambiar el valor
          const variableExpira2 = new Date();                                         //Metemos en la variable variableExpira2 el día/hora actual. Lo metemos en const para no poderlo cambiar el valor
            variableExpira2.setTime(variableExpira);                                    //Comparamos la expiración actual (variableExpira2) con la expiración futura de 1h (variableExpira)
        
              if ( variableExpira2 > new Date() ){                                   //Si el tiempo actual (variableExpira2) es mayor que el actual (new Date)
                return true;                                                            //No expiró aún
                  }else{
              return false;                                                           //En caso contrario, si expiró el tiempo
            }
        }
        
}