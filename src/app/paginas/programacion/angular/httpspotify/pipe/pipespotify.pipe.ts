import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipespotify'
})
export class PipespotifyPipe implements PipeTransform {

  transform( variables_images: any[] ): string {
   
   
   if ( !variables_images ) {
    return 'assets/imagenes/noimage.png';
   }
   
   if ( variables_images.length > 0 ) {
     return variables_images[0].url;
   }

   else{ 
     return 'assets/imagenes/noimage.png';
   }
   
   
   
  }

}
