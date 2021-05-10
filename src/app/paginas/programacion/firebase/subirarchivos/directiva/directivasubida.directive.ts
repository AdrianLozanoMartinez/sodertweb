/*EventEmitter -> Hablar con el padre. ElementRef -> Relaciona directamente con el componente.html. 
  HostListener -> Escucha cuando el ratón (drop o drap) está encima entre otras cosas. Input -> 
  Recibir información del padre. Output -> Relacionado con EventEmitter y le dice al padre, tengo 
  algo aquí haz algo con ello*/
import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core'; 
import { FileItem } from '../model/fileitem.model';   

@Directive({
  //Cogemos el appNgDropFiles para añadirlo en el html y así usarlo
  selector: '[appDirectivasubida]'
})
export class DirectivasubidaDirective {

  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();  //Para hablar con el padre (@Output()), ponemos un nombre a un elemento (mouseSobre) de tipo EventEmitter, que emite un boolean

  @Input() archivos: FileItem[] = [];                       //Relaciona con la directiva (NgDropFilesDirective) la variable (archivos) que se encuentra en componente.ts(SubirarchivoComponent) llamado y usado por la función (cargarImagenes) que a su vez llama al servicio.ts(cargarImagenesFirebase) y es un model (FileItem) formado en arreglo ([] = [])

  constructor() { }

  //Emite cuando llega elemento
  @HostListener('dragover', ['$event'])                      //Cuando suceda el dragover (Se está arrastrando algo sobre el elemento), esto va a disparar un elemento ($event)
      public onDragEnter ( event: any ){                 //Función (onDragEnter) que recibe el elemento (event) de tipo any, disparamos una notificación cuando el ratón esté encima del drop pero para hablar con el padre o el elemento que lo contiene debemos hacer @Output()
          this.mouseSobre.emit( true );                      //Mete en el elemento (mouseSobre) lo que queremos emitir (emit), true
          this._prevenirDetener( event );            //Función (_prevenirDetener ()) y recibimos un elemento (event)
      }
  
      //Emite cuando se va el elemento
      @HostListener('dragleave', ['$event'])                 //Cuando suceda el dragleave (Se saca fuera el elemento), esto va a disparar un elemento ($event)
      public onDragLeave ( event: any ){                 //Función (onDragLeave) que recibe el elemento (event) de tipo any, disparamos una notificación cuando el ratón está fuera del drop pero para hablar con el padre o el elemento que lo contiene debemos hacer @Output()
        this.mouseSobre.emit( false );
      }

    //Cuando suelta el elemento sobre el drop, para recibirlo
    @HostListener('drop', ['$event'])                            //Cuando suelta el elemento sobre el drop, para recibirlo
    public onDrop ( event: any ){

        //Mejora la compatibilidad del drop entre navegadores
        const transferencia = this._getTransferencia( event );   //Mete en la constante (transferencia) lo que obtenemos de la función (_getTransferencia) con el elemento (event) recibido. En transferencia tenemos los datos que queremos tener

            if ( !transferencia ){                           //Sino existe datos en transferencia provoca un return
                return;
            }

            this._extraerArchivos( transferencia.files );       //Si hay información que emitir, llamo a la función (_extraerArchivos) y esos archivos que extraigo se encuentra en la constante creada (transferencia) punto (.) de tipo files

            this._prevenirDetener( event );                    //No abra todo

            this.mouseSobre.emit( false );

    }

    //Mejora la compatibilidad del drop entre navegadores
    private _getTransferencia ( event: any ){                                               //Función (_getTransferencia) donde recibimos el evento (event) de tipo any. Mejora la compatibilidad del drop entre navegadores
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;     //Devuelve (return) el evento (event) y de él quiero el dataTransfer, si lo hay (?) usalo (event.dataTransfer) pero sino (:) otros navegadores tienen la información en (event.originalEvent.dataTransfer)
    }

    //Extraer archivo
    private _extraerArchivos( archivosLista: FileList ){                                   //Metemos en la función (_extraerArchivos) la variable (archivosLista) de tipo (FileList). FileList es un objeto que recibe todos los archivos que hemos hecho en drag and drop
        console.log(archivosLista);

        //Extraer los datos que necesitamos sobre los archivosLista conseguidos - Si da error, deshabilitar la regla forin en esta parte, sobre la bombilla
        for ( const propiedad in Object.getOwnPropertyNames( archivosLista) ){             //For para coger cada elemento, mete en la constante (propiedad) la propiedad/efecto del Object.getOwnPropertyNames que hace es poner los datos en arreglo ([]) los datos (archivosLista). Si da error, deshabilitar la regla forin en esta parte, sobre la bombilla
            const archivoTemporal = archivosLista[propiedad];                                  //Metemos en la constante (archivoTemporal) los archivos (archivosLista) en arreglo ([propiedad]). Si da error, deshabilitar la regla forin en esta parte, sobre la bombilla

            if (this._archivoPuedeSerCargado ( archivoTemporal )){                         //Si el archivo puede ser cargado

                const nuevoArchivo = new FileItem ( archivoTemporal );                        //Constante (nuevoArchivo) es igual que new FileItem que recibe un archivo (archivoTemporal)
                this.archivos.push( nuevoArchivo );

            }
        }

        console.log(this.archivos);
    }



    //VALIDACIONES

    //Validaciones si es dropeado (_archivoYaFueDroppeado) y si es una imagen(SoloImagen) -> Combina ambas condiones
    private _archivoPuedeSerCargado ( archivo: File ): boolean{                                 //Crea función/variable (_archivoPuedeSerCargado) que recibe una variable del model (variableArchivo) de tipo (File), debiendo regresar un boolean
        if ( !this._archivoYaFueDroppeado( archivo.name ) && this._esImagen ( archivo.type)){   //Si (if) el archivo (archivo.name) ya fue dropeado (!this._archivoYaFueDroppeado) y (&&) es una imagen (this._esImagen) y recibo/mando el tipo (type). Si cumple devuelve (return) true, sino (else) false
            return true;
        }else{
            return false;
        }
    }


    //Validaciones privadas porque no salen del archivo directiva.ts - Evita que la imagen se abra al hacer el drop
    private _prevenirDetener ( event ){
        event.preventDefault();                                                                 //Evita que la imagen se abra al hacer el drop
        event.stopPropagation();                                                                //Evita que la imagen se abra al hacer el drop
    }


    //Validaciones si es dropeado (_archivoYaFueDroppeado) y si es una imagen(SoloImagen) -> Combina ambas condiones
    private _archivoYaFueDroppeado( nombreArchivo: string ): boolean { //Se manda como dirección (nombreArchivo)      //Función (_archivoYaFueDroppeado) para detectar si el archivo (variableNombreArchivo) ya fue dropeado y regresamos un boolean (true/false)
        for ( const archivo of this.archivos ){                                                                       //For para recorrer todos los elementos del model (FileItem) del archivo (archivos) y lo metemos en una constante (archivo)

            if( archivo.nombreArchivo === nombreArchivo ){                                                            //Si (if) el archivo local creado en el for (archivo) punto (.) subvariable rela/directo del model del nombre del archivo (nombreArchivo) es igual (==) a la variable nueva recibida (variableNombreArchivo)
              console.log('El archivo ' + nombreArchivo + ' ya esta agregado');
              return true;                                                                                                //Devuelve true si es igual (Ya está dropeado/agregado), sino devuelve un return false (No lo está)
            }
        }
        return false;
    }


    //Validaciones privadas - Solo recibir imágenes (En otras ocaciones, también vídeos, doc...)
    private _esImagen ( tipoArchivo: string ): boolean{                                                               //Creamos función ()_esImagen()) donde recibimos el tipo del archivo (tipoArchivo) y regresa un boolean, devolviendo (return)...
        return ( tipoArchivo === '' || tipoArchivo === undefined ) ? false: tipoArchivo.startsWith('image');              //En vez de 'image' puede ser 'video'. Devuelve (return) si el tipo del archivo, variable (tipoArchivo) es igual (===) a vacío ('') o (||) es indefinido (undefined) devuelve false (? false), es decir no lo coge

    //Para vídeos - NO USADO PERO FUNCIONA LLAMANDO A ESTE MÉTODO EN VEZ DEL OTRO, O CAMBIANDO IMAGE POR VIDEO EN EL ANTERIOR
    /*private _esImagen ( tipoArchivo: string ): boolean{
        return ( tipoArchivo === '' || tipoArchivo === undefined ) ? false: tipoArchivo.startsWith('video');              //En vez de 'image' puede ser 'video. Condición para saber si es una imagen, si el tipo de archivo contiene el nombre image. En vez de 'image' puede ser 'video''
    }*/

    }
}