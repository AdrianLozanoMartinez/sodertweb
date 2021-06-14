import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.css']
})
export class CicloVidaComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    // console.log("constructor");
    
   }

  ngOnInit(): void {
    // console.log("ngOnInit");

  }

  ngOnChanges(){
      // console.log("ngOnChanges");
      
  }

  ngDoCheck(){
      // console.log("ngDoCheck");
      
  }

  ngAfterContentInit(){
      // console.log("ngAfterContentInit");
      
  }

  ngAfterContentChecked(){
      // console.log("ngAfterContentChecked");
      
  }

  ngAfterViewInit(){
      // console.log("ngAfterViewInit");
      
  }

  ngAfterViewChecked(){
      // console.log("ngAfterViewChecked");
      
  }

  ngOnDestroy(){
      // console.log("ngOnDestroy");
      
  }


//Html
c=`{`;
co=`<`;
f=`*`;
p=`(`;
t=`[`;
}
