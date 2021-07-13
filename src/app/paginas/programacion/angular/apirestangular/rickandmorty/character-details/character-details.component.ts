import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../interface/character.interface';
import { ActivatedRoute } from '@angular/router';
import { ServicecharacterService } from '../service/servicecharacter.service';
import { Location } from '@angular/common';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  character$: Observable<Character>;

  constructor( private route: ActivatedRoute, private characterSvc: ServicecharacterService, private location: Location) { }

  ngOnInit(): void {
    this.route.params.pipe( take(1) ).subscribe((CogeDato) => {//Cogemos parametros del url para buscar ese personaje
         
      //const id = params['id'];  //De lo que nos devuelve cogemos la id y la metemos en una variable
      
      //this.character$ = this.characterSvc.getDetails(id); //Mediante la función del servicio cogemos la id y la metemos en la variable character$
      
      this.character$ = this.characterSvc.getDetails( CogeDato ['id']);
    });
  }

  onGoBack():void{
    this.location.back();
    //Otra opción
    //window.history.back();
  }

}
