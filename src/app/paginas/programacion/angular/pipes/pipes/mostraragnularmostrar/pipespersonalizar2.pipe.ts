import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipespersonalizar2'
})
export class Pipespersonalizar2Pipe implements PipeTransform {

  transform(value: string, variable_boolean: boolean = true ): string {  
    
    value = value.toLocaleLowerCase(); 

    let variable_nombres = value.split(' '); 

    console.log(variable_nombres);
    
    if ( variable_boolean ){   
      variable_nombres = variable_nombres.map ( variable_nombres => {   
        return variable_nombres[0].toUpperCase() + variable_nombres.substr(1);
        
      });
        console.log(variable_nombres);   
        

      }else{   //Si quiero poner mayúscula solo la primera
        
        variable_nombres[0] = variable_nombres[0] [0].toUpperCase() + variable_nombres[0].substr(1)//En la primera palabra variable_nombres[0] metemos la mayúscula de la primera letra de la primera palabra variable_nombres[0] [0] y le sumamos el resto desde la posición [1]
        
        console.log(variable_nombres); 
      
      }
    
      return variable_nombres.join(' ');
}



}