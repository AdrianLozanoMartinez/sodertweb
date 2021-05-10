import { Component, OnInit } from '@angular/core';
import { FileItem } from '../model/fileitem.model';
import { ServiciodesubidaService } from '../servicio/serviciodesubida.service';

@Component({
  selector: 'app-subidafire',
  templateUrl: './subidafire.component.html',
  styleUrls: ['./subidafire.component.css']
})
export class SubidafireComponent implements OnInit {

   /*Variable (archivos) que mete dentro el model (FileItem) 
    en forma de arreglo ( [] = [] )*/
    archivos: FileItem[] = []; 

    estaSobreElemento = false; 

    //Metemos en la variable (_cargaImagenes) el servicio.ts 
    constructor( public _cargaImagenes: ServiciodesubidaService ) { }  

    ngOnInit(): void {
    }

  //Función llamada en el html y esta llama al servidor para cargar las imágenes
  cargarImagenes(){             
    /*Mete en la variable del servicio(_cargaImagenes) la función (cargarImagenesFirebase) 
    que se encuentra en el servicio y mandamos la variable del model (this.archivos) 
    a la función del servicio nombrado*/
    this._cargaImagenes.cargarImagenesFirebase( this.archivos );        
  }


   /*pruebaSobreElemento( event ){                            //Recibimos un elemento (event). Cuando usamos (mouseSobre)="pruebaSobreElemento($event)" en el html
        console.log(event);
    }*/

    //Función llamada en el componente.html para limpiar los archivos que muestra
    limpiarArchivos(){
      //Inicializa a vacío ([]) la variable declarada (archivos) en el componente.ts que proviene del model (FileItem)                                    
  this.archivos = [];                                
}

}