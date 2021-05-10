export class UnoModel {        //Ponemos el nombre que sea pero le ponemos Model para no cofundirnos
    id: string;
    nombre: string;
    poder: string;
    vivo: boolean;

    constructor() {
    this.vivo = true;                 //Iniciamos la variable (vivo) con true/false
    }
}