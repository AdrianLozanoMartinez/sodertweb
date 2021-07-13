//Scroll - Inject
import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { Character } from '../interface/character.interface';
import { ServicecharacterService } from '../service/servicecharacter.service';
import { filter, take } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';

//Scroll
import { DOCUMENT } from '@angular/common';


type RequestInfo = {
  next: string;
};


@Component({
  selector: 'app-listmorty2',
  templateUrl: './listmorty2.component.html',
  styleUrls: ['./listmorty2.component.css']
})
export class Listmorty2Component implements OnInit {

  
  characters: Character[]=[];  

  private pageNum2=1;
  private NombreDePersonajes2:string;

  //Scroll - hideScrolHeight / showScrollHeight
  private hideScrolHeight= 200;
  private showScrollHeight= 500;
  showGoUpButton = false;
  
  info:RequestInfo={  
    next: null,
  };
               //Scroll - @Inject(DOCUMENT) private document: Document,
  constructor( @Inject(DOCUMENT) private document: Document,
               private CharacterSvc2: ServicecharacterService,
               private route2: ActivatedRoute,
               private router2: Router ) { 
                 this.onUrlChanged2(); 
               }

  ngOnInit(): void {
    this.getCharactersByQuery2();
  }

  //MOSTRAR TODO
  private getDataFromService2(): void{
    this.CharacterSvc2.searchCharacters(this.NombreDePersonajes2, this.pageNum2)
                                      .pipe(take(1))
                                      .subscribe( (resp2:any) => {
        if(resp2?.results?.length){
          console.log('Recibimos -> ', resp2);
      
          const { info, results } = resp2;
          this.characters = [...this.characters, ...results ];
          this.info = info;
        }

        else{
          this.characters = [];
        }
    });
  }


  //Buscar
  private getCharactersByQuery2():void{

    this.route2.queryParams.pipe(
      take(1) ).subscribe( (RecibeParams2: ParamMap) => {
       
        this.NombreDePersonajes2 = RecibeParams2['variablequeryparams'];  
        this.getDataFromService2();
      });

  }


  //Arreglar busqueda 
  private onUrlChanged2(): void {

    this.router2.events.pipe(
      filter((event) => event instanceof NavigationEnd)).subscribe(
        () => {
          this.characters = [];
          this.pageNum2 = 1;
          this.getCharactersByQuery2();
        });
  }


  
  onScrollDown(){   //Si hay más páginas que cuando baje aumente en una página más
    if(this.info.next){  //Si hay más página
      this.pageNum2++;  //Aumente 1 
      this.getDataFromService2();  //Se muestre esa página nueva
    }
  } 

  onScrollTop():void{  //Va arriba de la página
      this.document.body.scrollTop = 0; //Safari
      this.document.documentElement.scrollTop = 0; //Otros
  }


  @HostListener('window:scroll', [])   //Escuchamos el scroll
  onWindowScroll():void{    //Método que se va a ejecutar
    const yOffSet = window.pageYOffset;
    if( (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollHeight ){  //Si es mayor que la variable (showScrollHeight) mayor de 500
        this.showGoUpButton = true;
    }
    else if(this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideScrolHeight){  //Si es menor que la variable (hideScrolHeight) menor de 200
      this.showGoUpButton = false;
    }
  }
} 