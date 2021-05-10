import { Injectable } from '@angular/core';
//Conexión con firebase
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../model/fileitem.model';

@Injectable({
  providedIn: 'root'
})
export class ServiciodesubidaService {

 /*Variable (CARPETA_IMAGENES) lugar donde pondremos (img) las 
      imágenes (referencia de la imagen y la propia imagen)*/
      private CARPETA_IMAGENES = 'img';                                        

      //Variable (db) dodne metemos el servicio (AngularFirestore)
      constructor( private db: AngularFirestore ) { }                        
    
      /*Método para guardar en firebase, recibimos una imagen (imagen) y 
        dentro especificamos el nombre (nombre) y la imagen (url) en sí*/
        private guardarImagen( imagen: { nombre: string, url: string } ) {   
        /*Grabarlo a firebase. Metemos en la variable (this.db) del servicio(AngularFirestore), 
          hacemos una colección (collection) y especificamos el lugar donde lo quiero guardar 
          (`/${ this.CARPETA_IMAGENES }`). add -> Añadir la imagen a la carpeta*/
        this.db.collection(`/${ this.CARPETA_IMAGENES }`).add( imagen );     
    }                                        
    
      /*Carga imágenes con conexión a Firebase, es llamada por el componente.ts que a su vez 
        llama al componente.ts el componente.html. Lo mete en la variable (imagenes) de 
        tipo/model (FileItem)*/
    cargarImagenesFirebase ( imagenes:FileItem[] ) { 
        //Ver en consola las imágenes cargadas                       
        console.log(imagenes); 
   /*Referencia al storage
      Creamos una constante (storageRef) para hacer referencia con función (.ref()) 
      al storage con función (.storage()) de firebase. Hacer uso de la API y de todas 
      las cosas configuradas con relación a firebase*/
      const storageRef = firebase.storage().ref();                     

      /*Barrido de todas las imágenes que tenemos aquí
        Recorremos con for las variables que cargaremos (imagenes) y metemos una a 
        una en una variable local (item)*/
   for ( const item of imagenes ){     
           /*La variable local (item) punto (.) subvariable (estaSubiendo) es true, 
             es decir, si se está subiendo*/                        
          item.estaSubiendo = true;                                

          //Si la variable local (item) punto (.) subvariable (progreso) es mayor o igual a 100, que continue (continue;)
          if( item.progreso >= 100 ){                          
          continue;
          }

          /*Si no se ha subido del todo
            Constante (UploadTask) que se le da el tipo de datos de firebase (firebase.storage.UploadTask), 
            para almacenar algo en un sitio (storageRef.child), la almacenamos en la carpeta (`${ this.CARPETA_IMAGENES }/) 
            con el nombre del archivo (${ item.nombreArchivo }`), para subirlo (put) el archivo (item.archivos) con el nombre, los megas...*/
        const UploadTask: firebase.storage.UploadTask = storageRef.child(`${ this.CARPETA_IMAGENES }/${ item.nombreArchivo }`).put( item.archivo );      

          //Ejecutar la tare anterior (Si no se ha subido del todo, lo subimos)
          //Que se dispare firebase.storage.TaskEvent cada vez que el estado cambie y haga
      UploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED,    
          /*Metemos en la variable snapshot (snapshot) el tipado de firebase storage (firebase.storage.UploadTaskSnapshot), usamos la variable que coge el 
            model (item) punto (.) subvariable (progreso) es igual (=) a la variable Snapshot con los bytes transferido (snapshot.bytesTransferred) dividido 
            por el total de bytes (.totalBytes), lo multiplicamos por 100 (*100) para sacar el procentaje*/   
          ( snapshot: firebase.storage.UploadTaskSnapshot ) => item.progreso = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100,  
          /*Manejamos el error, si comete un error lo muestra en rojo (console.error) y muestra el error que nos regresa firebase 
            (console.error('Error al subir', error ))*/                      
          ( error ) => console.error('Error al subir', error ), 
          //Ponemos un coba cuando sale correcto     
          () => {                                                
              console.log('Imagen cargada correctamente');
              //Para que no de error y coja en el firebase
              UploadTask.snapshot.ref.getDownloadURL().then((url) =>{
              /*Se mete en la variable del model (item) especialmente dentro del subvariable (.url) la dirección completo que nos 
                regresa firebase (UploadTask.snapshot.downloadURL)*/   
              item.url = url;           
              //Ponemos que la variable del model (item) en especial la subvariable (.estaSubiendo) es false porque ya se ha subido                             
              item.estaSubiendo = false;                             
              //Guardar nombre anterior imagen, referencia en Realtime Database
              /*Cogemos de la función (guardarImagen()) el nombre (nombre) y el url (url) obtenido de dicha función private 
                guardarImagen( imagen: { nombre: string, url: string } )*/
             this.guardarImagen({  
              /*nombreArchivo y url proviene de la función guardarImagen descrita arriba 
                (private guardarImagen( imagen: { nombreArchivo: string, urlImagen: string }))*/                              
                nombre: item.nombreArchivo, 
                url: item.url
              });
          });
      });
      }
}
}