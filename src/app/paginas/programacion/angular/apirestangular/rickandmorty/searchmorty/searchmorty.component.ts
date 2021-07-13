import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchmorty',
  templateUrl: './searchmorty.component.html',
  styleUrls: ['./searchmorty.component.css']
})
export class SearchmortyComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  onSearch( value: string){ //Debe ser value como en el html, no puede ser otro nombre, porque coge el valor de lo que introduzcamos

    console.log('Buscar -> ', value);
    

    if(value && value.length > 3){  //Si lo que introducimos existe y es más de 3 letras
      this.router.navigate(['listmorty'], //1º parámetro. Nos redigimos a una página
      {                          
        queryParams: { variablequeryparams: value }, //2º parámetro
      });
    }
  }


}
