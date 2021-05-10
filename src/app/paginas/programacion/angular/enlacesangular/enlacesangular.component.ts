import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enlacesangular',
  templateUrl: './enlacesangular.component.html',
  styleUrls: ['./enlacesangular.component.css']
})
export class EnlacesangularComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//Html
a=`[routerLink]="['/home']"`;
b=`routerLink="/home"`;
d=`[routerLink]="['/home','paginas','1','2']"`;
e=`[routerLink]="['/home',i]"`;
}
