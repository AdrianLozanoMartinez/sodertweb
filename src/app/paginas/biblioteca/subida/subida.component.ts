import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';   //--> VIDEO COMPRADO
import { AngularFireStorage } from '@angular/fire/storage';//   --> VIDEO COMPRADO
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-subida',
  templateUrl: './subida.component.html',
  styleUrls: ['./subida.component.css']
})
export class SubidaComponent implements OnInit {
  
  jd = true;
  carmen = false;
  aaron = false;
  
  imgSrc: string; //Quitamos de aquí para ponerlo en el reset
  selectedImage: any =null;
  
  formularioCliente: FormGroup;//   --> VIDEO COMPRADO
  porcentajeSubida: number =0;
  urlImagen: string=''
  
  constructor( 
              //  private router: Router,
               private db: AngularFirestore, //   --> VIDEO COMPRADO
               private storage: AngularFireStorage, //   --> VIDEO COMPRADO
               private fb:FormBuilder//   --> VIDEO COMPRADO
              ) { }
  
  ngOnInit() {
   //VALIDACIONES --> VIDEO COMPRADO
   this.formularioCliente = this.fb.group({
     titulo: ['', Validators.required],
     imageUrl: [''],
     descripcion: [''],
     trailer: [''],
     carmen: [''],
     aaron: [''],
     categoria: ['']
   })
    this.resetform();//del otro video ingles
  }
  
  resetform(){//del otro video ingles
    this.formularioCliente.reset();
    this.formularioCliente.setValue({
      titulo: '',
      imageUrl: '',
      descripcion: '',
      trailer: '',
      carmen: '',
      aaron: '',
      categoria: ''
    });
    this.imgSrc='../../../assets/imagenes/drop-images.png';//Lo quitamos de la variable de arriba para reiniciarlo aquí
    this.selectedImage=null;//Ponemos la selección en nulo para quitarla al reiniciar
  }
  
  //   --> VIDEO COMPRADO
  agregar(){
    this.formularioCliente.value.imgUrl= this.urlImagen
    console.log(this.formularioCliente.value);
    // ;
    this.db.collection('pelis').add(this.formularioCliente.value).then((termino)=>{
      console.log('Registro creado');
      this.resetform();//del otro video ingles
    })
  }
  //   --> VIDEO COMPRADO
  subirImagen(evento){
    if(evento.target.files.length>0){
  
      //ingles
      const reader = new FileReader();
      reader.onload = (e:any) => this.imgSrc = e.target.result;//carga (onload) la imagen (imgSrc) como string declarada arriba igual al resultado (result)
      reader.readAsDataURL(evento.target.files[0]);
      this.selectedImage = evento.target.files[0];//selectedImage declaramos arriba como null. selectedImage coge la imagen
  
      //comprado
      let nombre = new Date().getTime().toString()
      let archivo = evento.target.files[0] //o file o archivo
      console.log(evento);
      let extension = archivo.name.toString().substring(archivo.name.toString().lastIndexOf('.'))
      let ruta = 'pelis/'+nombre+extension;
      const referencia = this.storage.ref(ruta)
      const tarea = referencia.put(archivo)
      tarea.then((objeto)=> {
        console.log('Imagen subida')
  
        referencia.getDownloadURL().subscribe((url)=>{
          console.log(url);
          this.urlImagen=url;
        })
      })
      tarea.percentageChanges().subscribe((porcentaje)=>{
        this.porcentajeSubida = parseInt( porcentaje.toString());
      })
    }
    else{//Sino se muestra por defecto esta imagen
      this.imgSrc = '../../../assets/imagenes/drop-images.png';
      this.selectedImage = null;//selectedImage se declara null para no coger imagen
    }
  }
  
  
  
  }
  