import { Component, OnInit } from '@angular/core';
// import Swal from 'sweetalert2'
// import { ServicivimisterioService } from '../../servicio/servicivimisterio.service';
// import { JdModel } from '../../models/jd.model'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {

   /*jd: JdModel[] = []; 

  private itemsCollection: AngularFirestoreCollection<Item>;                 
  items: Observable<Item[]>;  

  constructor( private servicio: ServicivimisterioService, private afs: AngularFirestore ) { 
    this.itemsCollection = afs.collection<Item>('civimisterio');             
    this.items = this.itemsCollection.valueChanges();
  }

  ngOnInit() {
    this.servicio.getTodosElementos().subscribe( variableRespuestaTodos => {     
      console.log(variableRespuestaTodos);
      this.jd = variableRespuestaTodos;                                                  
    });
    /*Swal.fire({
      title : '<h1>¡¡¡En construcción!!!</h1>',
      text: 'Disculpen las molestias',
      icon: 'warning', 
      iconHtml: '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>',
      showConfirmButton: false,
      background: 'black',
    })
  }*/
  pelis: any[] = new Array<any>();//   --> VIDEO COMPRADO

  constructor( private db: AngularFirestore //   --> VIDEO COMPRADO
     ) { }

  ngOnInit() {
    //this.service.getImageDetailList();//Llama al servicio a la función de conseguir listado de imagen
  this.db.collection('pelis').valueChanges().subscribe((resultado)=>{//   --> VIDEO COMPRADO
    this.pelis=resultado;
  })
  }

}
