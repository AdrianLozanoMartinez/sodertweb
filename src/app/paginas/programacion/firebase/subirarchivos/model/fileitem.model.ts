export class FileItem{

    public archivo: File;                           //Metemos en la variable (archivo) la propiedad File (Lleva el peso del archivo, nombre, tipo...)
    public nombreArchivo: string;                   //Aunque en File ya lo tiene, pero es para acceder mejor
    public url: string;                             //Contiene la dirección de la imagen cuando esté subida a firebase
    public estaSubiendo: boolean;                   //Nos dirá si la imagen se está subiendo en ese momento o pendiente de subir
    public progreso: number;                        //Manejaremos el porcentaje de la subida

    constructor( archivo2: File ){                   //Recibimos un archivo

        this.archivo = archivo2;                    //Metemos la variable archivo la variable archivo
        this.nombreArchivo = archivo2.name;         /*Metemos en la variable (nombreArchivo) el nombre (name) de la variable (archivo2), 
                                                    que nos da la opción al identificarlo por el tipo File*/
        this.estaSubiendo = false;                  /*Metemos en la variable (estaSubiendo) el valor de false para iniciar la subida, 
                                                    ya que si está en true, significa que está subiendo y de ese modo reiniciamos*/
        this.progreso = 0;                          //Metemos en la variable (progreso) el valor de 0 para iniciar el progreso de subida

    }

}