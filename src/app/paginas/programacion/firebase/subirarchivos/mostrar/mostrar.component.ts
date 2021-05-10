import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

//Exportamos la interface (Item) sacando dos variable (nombre y url)
export interface Item { nombre: string; url:string; }  

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  //Cogido de angular/firebase
  private itemsCollection: AngularFirestoreCollection<Item>;                 
    items: Observable<Item[]>;                                               

  constructor( private afs: AngularFirestore ) {

        //Cambiamos 'items' por 'img' que es donde tenemos la carpeta, si fuera video, sería 'video'
        this.itemsCollection = afs.collection<Item>('img');             
        this.items = this.itemsCollection.valueChanges();

    }

  ngOnInit(): void {
  }

}