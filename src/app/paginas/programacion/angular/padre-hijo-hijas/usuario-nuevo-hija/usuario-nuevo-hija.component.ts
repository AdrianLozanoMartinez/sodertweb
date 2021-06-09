import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  //Para navegar entre los enlaces y así coger la id

@Component({
  selector: 'app-usuario-nuevo-hija',
  templateUrl: './usuario-nuevo-hija.component.html',
  styleUrls: ['./usuario-nuevo-hija.component.css']
})
export class UsuarioNuevoHijaComponent implements OnInit {

  constructor( private router: ActivatedRoute ) { 

    this.router.parent.params.subscribe( parametroObtenido =>{  //params nos devuelve un observable que nos tenemos que subscribir. Obtenemos lo que le mandemos por el URL, en este caso la id

      console.log("Ruta HIJA Usuario Nuevo");
      console.log(parametroObtenido);  //Mostramos lo que obtenemos lo que nos manda desde la url al entrar en el padre / usuario / id_del_usuario. Dentro de él los parámetros (hijas )
      
    })
  }

  ngOnInit(): void {
  }

}
