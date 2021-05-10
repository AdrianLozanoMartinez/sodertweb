export class EmpresaModel {        //Ponemos el nombre que sea pero le ponemos Model para no cofundirnos
        id: string;
        empresa: string;  
        direccion1: string;
        direccion2: string;
        direccion3: string;
        fechacurriculum: Date;
        curriculum: boolean;
        informacion: string;
        seleccionado: boolean;
        puesto: number;
        jornada: number;
        tipo: string;
        

            constructor() {
            this.curriculum = false;                 //Iniciamos la variable (vivo) con true/false
            this.seleccionado = false;                 //Iniciamos la variable (vivo) con true/false
            }
            
        }
