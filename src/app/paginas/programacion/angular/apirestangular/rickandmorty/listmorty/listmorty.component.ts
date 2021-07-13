import { Component, OnInit } from '@angular/core';
import { Character } from '../interface/character.interface';
import { ServicecharacterService } from '../service/servicecharacter.service';
//Filter -> Arreglar buscar
import { filter, take } from 'rxjs/operators';
//Buscar. Router, NavigationEnd -> Arreglar buscar
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';

type RequestInfo = {
  next: string;
};

@Component({
  selector: 'app-listmorty',
  templateUrl: './listmorty.component.html',
  styleUrls: ['./listmorty.component.css']
})
export class ListmortyComponent implements OnInit {

  characters: Character[]=[];  //Almacenamos personajes

  private pageNum=1;
  private NombreDePersonajes:string;
  
  info:RequestInfo={  //Almacenamos si tenemos otra página
    next: null,
  };

  constructor( private CharacterSvc: ServicecharacterService,
                //Buscar
               private route: ActivatedRoute,
               //Arreglar buscar
               private router: Router ) { 
                 this.onUrlChanged(); //Se dispara después de introducir la búsqueda la 1º vez, como el ngOnit solo se dispara una vez, por eso disparamos desde el constructor que es el 2º en dispararse
               }

  ngOnInit(): void {
    //Buscar
    this.getCharactersByQuery();
  }

  //MOSTRAR TODO
  private getDataFromService(): void{
    this.CharacterSvc.searchCharacters(this.NombreDePersonajes, this.pageNum)
                                      .pipe(take(1))
                                      .subscribe( (resp:any) => {
        if(resp?.results?.length){
          console.log('Recibimos -> ', resp);
      
          const { info, results } = resp;
          this.characters = [...this.characters, ...results ];
          this.info = info;
        }

        else{
          this.characters = [];
        }
    });
  }


  //Buscar - Vamos a recibir lo que los usuarios busquen
  private getCharactersByQuery():void{

    this.route.queryParams.pipe(
      take(1) ).subscribe( (RecibeParams: ParamMap) => {
        //console.log('Params -> ', RecibeParams );
        
        this.NombreDePersonajes = RecibeParams['variablequeryparams'];  //variablequeryparams proviene del ts de search y lo mostramos y cogemos en la url del navegador
        this.getDataFromService();
      });

  }


  //Arreglar los cambios de una busqueda a otra sin actualizar o ir para atrás. Cuando lau url cambie que pasará
  private onUrlChanged(): void {

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)).subscribe(
        () => {
          this.characters = [];
          this.pageNum = 1;
          this.getCharactersByQuery();
        });
  }





}