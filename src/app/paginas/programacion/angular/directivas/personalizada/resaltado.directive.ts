import { Directive, ElementRef, HostListener, Input } from '@angular/core';   //ElementRef -> Operar con elementos html
                                                        // HostListener -> Para estar penddiente lo que nos da el atributo html
                                                        //Input -> Obtener dato del Html

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private VariableElementRef:ElementRef ) {

    // VariableElementRef.nativeElement.style.backgroundColor = "yellow";  //Se queda fijo el efecto. Metemos en la variable del ElementRef el stylo del fondo amarillo. Ponemos backgroundColor en vez de background-color. Se quita la - y se pone mayúscula
   }

   @HostListener('mouseenter') mouseEntro(){
    
    this.VariableElementRef.nativeElement.style.backgroundColor = "yellow";  //mouseenter -> Se activa al pasar el ratón pero se conserva el efecto, si queremos sacar el efecto debemos hacer otra cosa. mouseEntro -> Nombre a elección
    }

  @HostListener('mouseleave') mouseSalio(){
      this.VariableElementRef.nativeElement.style.backgroundColor = null;  //mouseleave -> Se activa al quitar el ratón pero se conserva el efecto (null -> ninguno), si queremos sacar el efecto debemos hacer otra cosa. mouseSalio -> Nombre a elección
  }

 // @HostListener('mouseleave') mouseSalio2(){
      //this.VariableElementRef.nativeElement.style.backgroundColor = "green";  //mouseleave -> Se activa al quitar el ratón pero se conserva el efecto (green -> se queda en verde), si queremos sacar el efecto debemos hacer otra cosa. mouseSalio2 -> Nombre a elección
  //}










@Input("appResaltado") variableLocal:string;  //Le decimos que esa variable (appResaltado) viene de fuera y la metemos en una variable local (variableLocal). appResaltado proviene del selector de arriba que define la directiva


  @HostListener('mouseenter') mouseEntro2(){
      //console.log( this.variableLocal );   //Nos muestra en la consola el string que enviamos desde el html (orange -> color/otro dato)
      this.resaltar( this.variableLocal || 'yellow' );  //Al pasar (mouseenter) el ratón encima llama a la variable/función de abajo cogiendo la variable, sino obtiene variable saldrá amarillo, que es el valor por defecto
    }

    @HostListener('mouseleave') mouseSalio2(){
      this.resaltar( null );   //Al quitar (mouseleave) el ratón de encima llama al valor null (nulo) para quitar la propiedad
  }


  private resaltar( colorRecibido:string ){
    this.VariableElementRef.nativeElement.style.backgroundColor = colorRecibido;   //Aplica a la variable (VariableElementRef) el efecto del style cuando es llamado la función (resaltar())
  }

}
