import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';    //Coge el url y limpiarlo o validar

@Pipe({
  name: 'pipeDomSeguro'
})
export class PipeDomSeguroPipe implements PipeTransform {

  constructor ( private variable_DomSanitizer: DomSanitizer) {}


  transform(value: string): any {  //Spotify => Value -> Uri

    const url = 'https://open.spotify.com/embed?uri=';

    return this.variable_DomSanitizer.bypassSecurityTrustResourceUrl ( url + value );  //Si confiamos en el url. Retorna un SafeResourceUrl, lo vemos al ponernos encima de bypassSecurityTrustResourceUrl. Nos permite pasar la seguridad de un url de confianza
  }

}
