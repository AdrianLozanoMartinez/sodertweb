export class MunicipiosModel {        //Ponemos el nombre que sea pero le ponemos Model para no cofundirnos
        id: string;
        comunidad: string;
        provincia: string;  //Málaga
        malaga: boolean;  
        cadiz: boolean;  
        granada: boolean;  
        sevilla: boolean;  
        huelva: boolean;  
        jaen: boolean;  
        cordoba: boolean;  
        almeria: boolean;  
        municipio: string;
        direccion1: string;
        direccion2: string;
        direccion3: string;
        direccion4: string;
        sedeelectronica: string;
        distancia: string;
        tiempo: string;
        fechainstancia: Date;
        bolsaechada: boolean;
        informacion: string;
        seleccionado: boolean;
        puesto1: number;
        tipo1: string;
        puesto2: number;
        tipo2: string;
        puesto3: number;
        tipo3: string;
        puesto4: number;
        tipo4: string;
        

            constructor() {
            this.bolsaechada = false;                 //Iniciamos la variable (vivo) con true/false
            this.seleccionado = false;                 //Iniciamos la variable (vivo) con true/false
            this.malaga = false;                 //Iniciamos la variable (vivo) con true/false
            this.cadiz = false;                 //Iniciamos la variable (vivo) con true/false
            this.granada = false;                 //Iniciamos la variable (vivo) con true/false
            this.sevilla = false;                 //Iniciamos la variable (vivo) con true/false
            this.huelva = false;                 //Iniciamos la variable (vivo) con true/false
            this.jaen = false;                 //Iniciamos la variable (vivo) con true/false
            this.cordoba = false;                 //Iniciamos la variable (vivo) con true/false
            this.almeria = false;                 //Iniciamos la variable (vivo) con true/false
            }
            
        }
