import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  //Para navegar entre los enlaces y así coger la id

@Component({
  selector: 'app-usuario-hija',
  templateUrl: './usuario-hija.component.html',
  styleUrls: ['./usuario-hija.component.css']
})
export class UsuarioHijaComponent implements OnInit {

  constructor( private router: ActivatedRoute ) { 

    this.router.params.subscribe( parametroObtenido =>{  //params nos devuelve un observable que nos tenemos que subscribir. Obtenemos lo que le mandemos por el URL, en este caso la id

      console.log("Ruta PADRE");
      console.log(parametroObtenido);  //Mostramos lo que obtenemos lo que nos manda desde la url al entrar en el padre / usuario / id_del_usuario. Dentro de él los parámetros (hijas )
      
    })
  }

  ngOnInit(): void {
  }
  //Html
  c=`{`;
  co=`<`;
  f=`*`;
  p=`(`;
  t=`[`;
}
