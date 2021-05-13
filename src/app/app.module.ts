//Por defecto
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Conexión con app.routing.ts - Enlazar páginas - Angular
import { routing, appRoutingProviders } from './app.routing';

//Componentes - Especiales
import { HomeComponent } from './paginas/home/home.component';
import { ErrorComponent } from './componentes/error/error.component';
import { PieComponent } from './componentes/pie/pie.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';

//Programacion
import { ProgramacionComponent } from './paginas/programacion/programacion.component';
import { GitComponent } from './paginas/programacion/git/git.component';
import { TerminalComponent } from './paginas/programacion/terminal/terminal.component';
import { WindowsComponent } from './paginas/programacion/terminal/windows/windows.component';
import { LinuxComponent } from './paginas/programacion/terminal/linux/linux.component';
//Programacion - Html
import { HtmlComponent } from './paginas/programacion/html/html.component';
import { LetrashtmlComponent } from './paginas/programacion/html/letrashtml/letrashtml.component';
import { EnlacehtmlComponent } from './paginas/programacion/html/enlacehtml/enlacehtml.component';
import { FormulariohtmlComponent } from './paginas/programacion/html/formulariohtml/formulariohtml.component';
import { TablashtmlComponent } from './paginas/programacion/html/tablashtml/tablashtml.component';
import { ImagenComponent } from './paginas/programacion/html/imagen/imagen.component';
import { BotonhtmlComponent } from './paginas/programacion/html/botonhtml/botonhtml.component';
//Programacion - Css
import { CssComponent } from './paginas/programacion/css/css.component';
import { AlineacioncssComponent } from './paginas/programacion/css/alineacioncss/alineacioncss.component';
import { PadrehijoComponent } from './paginas/programacion/css/estructuracss/padrehijo/padrehijo.component';
import { ColorcssComponent } from './paginas/programacion/css/colorcss/colorcss.component';
import { CssbordeComponent } from './paginas/programacion/css/cssborde/cssborde.component';
import { IdclassComponent } from './paginas/programacion/css/estructuracss/idclass/idclass.component';
import { PseudoelementoComponent } from './paginas/programacion/css/estructuracss/pseudoelemento/pseudoelemento.component';
import { ImagencssComponent } from './paginas/programacion/css/imagencss/imagencss.component';
import { PalabrascssComponent } from './paginas/programacion/css/palabrascss/palabrascss.component';
import { MovimientoscssComponent } from './paginas/programacion/css/movimientoscss/movimientoscss.component';
import { TrlbComponent } from './paginas/programacion/css/alineacioncss/trlb/trlb.component';
//Programacion - Bootstrap
import { BootstrapComponent } from './paginas/programacion/bootstrap/bootstrap.component';
import { EstructurabootstrapComponent } from './paginas/programacion/bootstrap/estructurabootstrap/estructurabootstrap.component';
import { AlineacionbootstrapComponent } from './paginas/programacion/bootstrap/alineacionbootstrap/alineacionbootstrap.component';
import { AlertaComponent } from './paginas/programacion/bootstrap/alerta/alerta.component';
import { LetrasbootComponent } from './paginas/programacion/bootstrap/letrasboot/letrasboot.component';
import { BordesbootComponent } from './paginas/programacion/bootstrap/bordesboot/bordesboot.component';
import { BotonbootComponent } from './paginas/programacion/bootstrap/botonboot/botonboot.component';
import { TablabootComponent } from './paginas/programacion/bootstrap/tablaboot/tablaboot.component';
import { ColortablabootComponent } from './paginas/programacion/bootstrap/tablaboot/colortablaboot/colortablaboot.component';
import { CartasbootComponent } from './paginas/programacion/bootstrap/cartasboot/cartasboot.component';
import { DisplaybootComponent } from './paginas/programacion/bootstrap/displayboot/displayboot.component';
import { NavbootComponent } from './paginas/programacion/bootstrap/navboot/navboot.component';
import { ImagenbootComponent } from './paginas/programacion/bootstrap/imagenboot/imagenboot.component';
import { FormulariobootComponent } from './paginas/programacion/bootstrap/formularioboot/formularioboot.component';
import { CarouselbootComponent } from './paginas/programacion/bootstrap/imagenboot/carouselboot/carouselboot.component';
import { Carouselboot2Component } from './paginas/programacion/bootstrap/imagenboot/carouselboot2/carouselboot2.component';
import { Colortabla2bootComponent } from './paginas/programacion/bootstrap/tablaboot/colortabla2boot/colortabla2boot.component';
//Programacion - JavaScript
import { JavascriptComponent } from './paginas/programacion/javascript/javascript.component';
import { EstructurajavascriptComponent } from './paginas/programacion/javascript/estructurajavascript/estructurajavascript.component';
import { EjecutarjavascriptComponent } from './paginas/programacion/javascript/ejecutarjavascript/ejecutarjavascript.component';
import { InstalacionjavascriptComponent } from './paginas/programacion/javascript/instalacionjavascript/instalacionjavascript.component';
import { WebjavascriptComponent } from './paginas/programacion/javascript/webjavascript/webjavascript.component';
import { ExtensionesjavascriptComponent } from './paginas/programacion/javascript/extensionesjavascript/extensionesjavascript.component';
//Programacion - SQL
import { SqlComponent } from './paginas/programacion/sql/sql.component';
import { BasededatosComponent } from './paginas/programacion/sql/basededatos/basededatos.component';
//Programacion - PHP
import { PhpComponent } from './paginas/programacion/php/php.component';
import { EstructuraphpComponent } from './paginas/programacion/php/estructuraphp/estructuraphp.component';
//Programacion - Angular
import { AngularComponent } from './paginas/programacion/angular/angular.component';
import { InstalacionangularComponent } from './paginas/programacion/angular/instalacionangular/instalacionangular.component';
import { ArranqueangularComponent } from './paginas/programacion/angular/arranqueangular/arranqueangular.component';
import { FormulariosangularComponent } from './paginas/programacion/angular/formulariosangular/formulariosangular.component';
import { ReactivosangularComponent } from './paginas/programacion/angular/formulariosangular/reactivosangular/reactivosangular.component';
import { TemplatesangularComponent } from './paginas/programacion/angular/formulariosangular/templatesangular/templatesangular.component';
import { ValidarbasicoComponent } from './paginas/programacion/angular/formulariosangular/templatesangular/validarbasico/validarbasico.component';
import { ValidarbootstrapComponent } from './paginas/programacion/angular/formulariosangular/templatesangular/validarbootstrap/validarbootstrap.component';
import { SincronasComponent } from './paginas/programacion/angular/formulariosangular/reactivosangular/validaciones/sincronas/sincronas.component';
import { AsincronasComponent } from './paginas/programacion/angular/formulariosangular/reactivosangular/validaciones/asincronas/asincronas.component';
import { PersonalizadasComponent } from './paginas/programacion/angular/formulariosangular/reactivosangular/validaciones/personalizadas/personalizadas.component';
import { PaisestempalteComponent } from './paginas/programacion/angular/formulariosangular/templatesangular/paisestempalte/paisestempalte.component';
import { PersocontraComponent } from './paginas/programacion/angular/formulariosangular/reactivosangular/validaciones/persocontra/persocontra.component';
import { CogercargarComponent } from './paginas/programacion/angular/formulariosangular/reactivosangular/cogercargar/cogercargar.component';
import { ArreglosestaticComponent } from './paginas/programacion/angular/formulariosangular/reactivosangular/arreglosestatic/arreglosestatic.component';
import { ArreglosdinamicComponent } from './paginas/programacion/angular/formulariosangular/reactivosangular/arreglosdinamic/arreglosdinamic.component';
import { DetectarcambiosComponent } from './paginas/programacion/angular/formulariosangular/reactivosangular/detectarcambios/detectarcambios.component';
import { HostingangularComponent } from './paginas/programacion/angular/hostingangular/hostingangular.component';
import { LoginangularComponent } from './paginas/programacion/angular/loginangular/loginangular.component';
import { ServiciounovariasComponent } from './paginas/programacion/angular/serviciounovarias/serviciounovarias.component';
import { ExtensionesComponent } from './paginas/programacion/angular/instalacionangular/extensiones/extensiones.component';
import { FontsgoogleprincipalComponent } from './paginas/programacion/fontsgoogle/fontsgoogleprincipal.component';
import { FuncionesangularComponent } from './paginas/programacion/angular/funcionesangular/funcionesangular.component';
import { ServiceoneComponent } from './paginas/programacion/angular/serviciounovarias/serviceone/serviceone.component';
import { Serviceone2Component } from './paginas/programacion/angular/serviciounovarias/serviceone2/serviceone2.component';
//Python
import { PythonComponent } from './paginas/programacion/python/python.component';
//Programación - Angular - Servicios/Formularios/Directivas/etc
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  //Formulario Template, Reactivo
import { HttpClientModule } from '@angular/common/http';  //Servicio API Países (Json)
//Programacion - Hosting
import { HostinggeneralComponent } from './paginas/programacion/hostinggeneral/hostinggeneral.component';
//Programacion - Firebase
import { HostingComponent } from './paginas/programacion/firebase/hosting/hosting.component';
import { FirebaseComponent } from './paginas/programacion/firebase/firebase.component';
import { FormulariosfirebaseComponent } from './paginas/programacion/firebase/formulariosfirebase/formulariosfirebase.component';
import { Forfireunelementohtml2Component } from './paginas/programacion/firebase/formulariosfirebase/forfireunelementohtml2/forfireunelementohtml2.component';
import { ForfireunelementohtmlComponent } from './paginas/programacion/firebase/formulariosfirebase/forfireunelementohtml/forfireunelementohtml.component';
import { ForfirevarioselementoshtmlComponent } from './paginas/programacion/firebase/formulariosfirebase/forfirevarioselementoshtml/forfirevarioselementoshtml.component';
import { Forfireunelementohtml3Component } from './paginas/programacion/firebase/formulariosfirebase/forfireunelementohtml3/forfireunelementohtml3.component';
import { Forfireunelementohtml4Component } from './paginas/programacion/firebase/formulariosfirebase/forfireunelementohtml4/forfireunelementohtml4.component';
import { Forfireunelementohtml5Component } from './paginas/programacion/firebase/formulariosfirebase/forfireunelementohtml5/forfireunelementohtml5.component';
import { Forfirevarioselementoshtml2Component } from './paginas/programacion/firebase/formulariosfirebase/forfirevarioselementoshtml2/forfirevarioselementoshtml2.component';
import { Forfirevarioselementoshtml3Component } from './paginas/programacion/firebase/formulariosfirebase/forfirevarioselementoshtml3/forfirevarioselementoshtml3.component';
import { Forfirevarioselementoshtml4Component } from './paginas/programacion/firebase/formulariosfirebase/forfirevarioselementoshtml4/forfirevarioselementoshtml4.component';
import { ProyectoComponent } from './paginas/programacion/firebase/proyecto/proyecto.component';
import { LoginComponent } from './paginas/programacion/firebase/login/login.component';
import { LoginnormalComponent } from './paginas/programacion/angular/loginangular/loginnormal/loginnormal.component';
import { ExistenciaComponent } from './paginas/programacion/firebase/login/existencia/existencia.component';
import { MensajecargaerrorComponent } from './paginas/programacion/firebase/login/mensajecargaerror/mensajecargaerror.component';
import { RecordarComponent } from './paginas/programacion/firebase/login/recordar/recordar.component';
import { ProtegidoguardfirebaseComponent } from './paginas/programacion/firebase/login/protegidoguardfirebase/protegidoguardfirebase.component';
import { ProtegidoguardfirebaseloginComponent } from './paginas/programacion/firebase/login/protegidoguardfirebaselogin/protegidoguardfirebaselogin.component';
import { SubirarchivosComponent } from './paginas/programacion/firebase/subirarchivos/subirarchivos.component';
import { InstalacionfirebaseComponent } from './paginas/programacion/firebase/instalacionfirebase/instalacionfirebase.component';
import { SubidafireComponent } from './paginas/programacion/firebase/subirarchivos/subidafire/subidafire.component';
import { DirectivasubidaDirective } from './paginas/programacion/firebase/subirarchivos/directiva/directivasubida.directive';
import { MostrarComponent } from './paginas/programacion/firebase/subirarchivos/mostrar/mostrar.component';
 //Conexión con firebase
 import { AngularFireModule } from '@angular/fire';
 import { AngularFirestoreModule } from '@angular/fire/firestore';
 //Environment - Lo pide abajo en el imports por AngularFireModule
 import { environment } from 'src/environments/environment';              
//Programacion - Auth0
import { Auth0Component } from './paginas/programacion/auth0/auth0.component';
//Programacion - Servidor Local
import { ServidorlocalComponent } from './paginas/programacion/servidorlocal/servidorlocal.component';
//Programacion - Fonts Google
import { ConfiguracionfontComponent } from './paginas/programacion/fontawesome/configuracionfont/configuracionfont.component';
//Programacion - Fontawesome
import { FontawesomeComponent } from './paginas/programacion/fontawesome/fontawesome.component';
import { InstalacionfontawesomeComponent } from './paginas/programacion/fontawesome/instalacionfontawesome/instalacionfontawesome.component';
//Programacion - Sweepalert2
import { Sweepalert2Component } from './paginas/programacion/sweepalert2/sweepalert2.component';
import { Instalacionsweepalert2Component } from './paginas/programacion/sweepalert2/instalacionsweepalert2/instalacionsweepalert2.component';
import { ConfiguracionsweepComponent } from './paginas/programacion/sweepalert2/configuracionsweep/configuracionsweep.component';
import { InputComponent } from './paginas/programacion/sweepalert2/configuracionsweep/input/input.component';
import { PositionComponent } from './paginas/programacion/sweepalert2/configuracionsweep/position/position.component';
import { GrowComponent } from './paginas/programacion/sweepalert2/configuracionsweep/grow/grow.component';
import { EjemplossweepComponent } from './paginas/programacion/sweepalert2/ejemplossweep/ejemplossweep.component';
import { MetodossweepComponent } from './paginas/programacion/sweepalert2/metodossweep/metodossweep.component';
import { ImagenurlComponent } from './paginas/programacion/sweepalert2/configuracionsweep/imagenurl/imagenurl.component';
//Programacion - Toastr
import { ToastrComponent } from './paginas/programacion/toastr/toastr.component';

//Programacion - C#
import { CComponent } from './paginas/programacion/c/c.component';

//Programacion - Typescript
import { TypescriptComponent } from './paginas/programacion/typescript/typescript.component';
import { InstalaciontypeComponent } from './paginas/programacion/typescript/instalaciontype/instalaciontype.component';
import { InstalaciontypelinuxmacComponent } from './paginas/programacion/typescript/instalaciontypelinuxmac/instalaciontypelinuxmac.component';
import { Instalaciontypelinuxmac2Component } from './paginas/programacion/typescript/instalaciontypelinuxmac2/instalaciontypelinuxmac2.component';
import { VariabletypeComponent } from './paginas/programacion/typescript/variabletype/variabletype.component';
import { FuncionestypeComponent } from './paginas/programacion/typescript/funcionestype/funcionestype.component';
import { FuncionamientotypeComponent } from './paginas/programacion/typescript/funcionamientotype/funcionamientotype.component';
import { PromesastypeComponent } from './paginas/programacion/typescript/promesastype/promesastype.component';

//Programacion - Ionic
import { IonicComponent } from './paginas/programacion/ionic/ionic.component';

//Empleo
import { EmpleoComponent } from './paginas/empleo/empleo.component';
import { EmpresasComponent } from './paginas/empleo/empresas/empresas.component';
import { AyuntamientoComponent } from './paginas/empleo/ayuntamientoss/ayuntamiento/ayuntamiento.component';
import { AyuntamientoidComponent } from './paginas/empleo/ayuntamientoss/ayuntamientoid/ayuntamientoid.component';
import { EmpresaidComponent } from './paginas/empleo/empresas/empresaid/empresaid.component';

//Personal
import { PersonalComponent } from './paginas/personal/personal.component';
import { PersonalidComponent } from './paginas/personal/personalid/personalid.component';

//Deudas
import { DeudasComponent } from './paginas/deudas/deudas.component';
import { DeudasidComponent } from './paginas/deudas/deudasid/deudasid.component';

//Servicios
import { ServiciodepruebaService } from './paginas/programacion/angular/serviciounovarias/serviciodeprueba.service';


@NgModule({
  declarations: [
    //Por defecto
    AppComponent,
    //Componentes - Especiales
    HomeComponent,
    ErrorComponent,
    PieComponent,
    CabeceraComponent,
    //Programacion
    ProgramacionComponent,
    GitComponent,
    TerminalComponent,
    WindowsComponent,
    LinuxComponent,
    //Programacion - Html
    HtmlComponent,
    LetrashtmlComponent,
    EnlacehtmlComponent,
    FormulariohtmlComponent,
    TablashtmlComponent,
    ImagenComponent,
    BotonhtmlComponent,
    //Programacion - Css
    CssComponent,
    AlineacioncssComponent,
    PadrehijoComponent,
    ColorcssComponent,
    CssbordeComponent,
    IdclassComponent,
    PseudoelementoComponent,
    ImagencssComponent,
    PalabrascssComponent,
    MovimientoscssComponent, 
    TrlbComponent,
    //Programacion - Bootstrap
    BootstrapComponent,
    EstructurabootstrapComponent,
    AlineacionbootstrapComponent,
    AlertaComponent,
    LetrasbootComponent,
    BordesbootComponent,
    BotonbootComponent,
    TablabootComponent,
    ColortablabootComponent,
    CartasbootComponent,
    DisplaybootComponent,
    NavbootComponent,
    ImagenbootComponent,
    FormulariobootComponent,
    CarouselbootComponent,
    Carouselboot2Component,
    Colortabla2bootComponent,
    //Programacion - JavaScript
    JavascriptComponent,
    EstructurajavascriptComponent,
    EjecutarjavascriptComponent,
    InstalacionjavascriptComponent,
    WebjavascriptComponent,
    ExtensionesjavascriptComponent,
    //Programacion - SQL
    SqlComponent,
    BasededatosComponent,
    //Programacion - PHP
    PhpComponent,
    EstructuraphpComponent,
    //Programacion - Angular
    AngularComponent,
    InstalacionangularComponent,
    ArranqueangularComponent,
    FormulariosangularComponent,
    ReactivosangularComponent,
    TemplatesangularComponent,
    ValidarbasicoComponent,
    ValidarbootstrapComponent,
    PaisestempalteComponent,
    SincronasComponent,
    AsincronasComponent,
    PersonalizadasComponent,
    PersocontraComponent,
    CogercargarComponent,
    ArreglosestaticComponent,
    ArreglosdinamicComponent,
    DetectarcambiosComponent,
    HostingangularComponent,
    LoginangularComponent,
    ServiciounovariasComponent,
    ExtensionesComponent,
    FontsgoogleprincipalComponent,
    FuncionesangularComponent,
    ServiceoneComponent,
    //Programacion - Hosting
    HostinggeneralComponent,
    //Programacion - Firebase
    FirebaseComponent,
    FormulariosfirebaseComponent,
    Forfireunelementohtml2Component,
    ForfireunelementohtmlComponent,
    ForfirevarioselementoshtmlComponent,
    Forfireunelementohtml3Component,
    Forfireunelementohtml4Component,
    Forfireunelementohtml5Component,
    Forfirevarioselementoshtml2Component,
    Forfirevarioselementoshtml3Component,
    Forfirevarioselementoshtml4Component,
    HostingComponent,
    ProyectoComponent,
    LoginComponent,
    LoginnormalComponent,
    ExistenciaComponent,
    MensajecargaerrorComponent,
    RecordarComponent,
    ProtegidoguardfirebaseComponent,
    ProtegidoguardfirebaseloginComponent,
    SubirarchivosComponent,
    InstalacionfirebaseComponent,
    SubidafireComponent,
    DirectivasubidaDirective,
    MostrarComponent,
    //Programacion - Auth0
    Auth0Component,
    //Programacion - Servidor Local
    ServidorlocalComponent,
    //Programacion - Fontawesome
    FontawesomeComponent,
    InstalacionfontawesomeComponent,
    ConfiguracionfontComponent,
    //Programacion - Sweepalert2
    Sweepalert2Component,
    Instalacionsweepalert2Component,
    ConfiguracionsweepComponent,
    InputComponent,
    PositionComponent,
    GrowComponent,
    EjemplossweepComponent,
    MetodossweepComponent,
    ImagenurlComponent,
    //Programacion - Toastr
    ToastrComponent,
    //Programacion - C#
    CComponent,
    //Python
    PythonComponent,
    //Programacion - Typescript
    TypescriptComponent,
    InstalaciontypeComponent,
    InstalaciontypelinuxmacComponent,
    Instalaciontypelinuxmac2Component,
    VariabletypeComponent,
    FuncionestypeComponent,
    FuncionamientotypeComponent,
    PromesastypeComponent,
    //Programacion - Ionic
    IonicComponent,
    //Empleo
    EmpleoComponent,
    EmpresasComponent,
    AyuntamientoComponent,
    AyuntamientoidComponent,
    EmpresaidComponent,
    //Personal
    PersonalComponent,
    PersonalidComponent,
    //Deudas
    DeudasComponent,
    DeudasidComponent,
    Serviceone2Component,
  ],
  imports: [
    //Por defecto
    BrowserModule,
    //Conexión con app.routing.ts - Enlazar páginas
    routing,
    /*Conexión con firebase
    Puede ser firebase o firebaseConfig, depende lo que hayamos puesto en 
    environment.ts -> firebaseConfig: { apiKey: "AIzaSyBXBZUhEffME9i58aVvigv...*/
    AngularFireModule.initializeApp(environment.firebaseConfig),   
    AngularFirestoreModule,
   //Programación - Angular - Servicios/Formularios/Directivas/etc
    FormsModule,        //Formulario Template
    ReactiveFormsModule, //Formulario Reactivo
    HttpClientModule    //Servicio API Países (Json)
  ],
  providers: [
    //Conexión con app.routing.ts - Enlazar páginas
    appRoutingProviders,
    ServiciodepruebaService
  ],
  //Por defecto - Librería
  bootstrap: [AppComponent]
})
//Por defecto
export class AppModule { }
