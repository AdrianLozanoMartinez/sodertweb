export class DeudasModel {        //Ponemos el nombre que sea pero le ponemos Model para no cofundirnos
        id: string;
        persona: string;  
        articulo: string;
        articulo2: string;
        articulo3: string;
        articulo4: string;
        articulo5: string;
        articulo6: string;
        articulo7: string;
        articulo8: string;
        articulo9: string;
        articulo10: string;
        precio: string;
        precio2: string;
        precio3: string;
        precio4: string;
        precio5: string;
        precio6: string;
        precio7: string;
        precio8: string;
        precio9: string;
        precio10: string;
        fechaDepedido: Date;
        pagado: boolean;
        tienda: string;
        fechaPagado: Date;
        formaDePagado: boolean;
        motivo: string;
        
            constructor() {
            this.pagado = false;                 
            this.formaDePagado = false;                 
            }
            
        }
