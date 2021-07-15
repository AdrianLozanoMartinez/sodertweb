//Por defecto
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

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
import { VariablejavascriptComponent } from './paginas/programacion/javascript/variablejavascript/variablejavascript.component';
import { FuncionesjavascriptComponent } from './paginas/programacion/javascript/funcionesjavascript/funcionesjavascript.component';
import { CondicionesjavascriptComponent } from './paginas/programacion/javascript/condicionesjavascript/condicionesjavascript.component';
import { VarletconstComponent } from './paginas/programacion/javascript/variablejavascript/varletconst/varletconst.component';
import { ObjetosComponent } from './paginas/programacion/javascript/variablejavascript/objetos/objetos.component';
import { FetchapiComponent } from './paginas/programacion/javascript/fetchapi/fetchapi.component';
import { AsyncawaitComponent } from './paginas/programacion/javascript/asyncawait/asyncawait.component';
import { MapjavascriptComponent } from './paginas/programacion/javascript/mapjavascript/mapjavascript.component';
import { TipoComponent } from './paginas/programacion/typescript/variabletype/tipo/tipo.component';
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
import { SincronasComponent } from './paginas/programacion/angular/formulariosangular/reactivosangular/validaciones/sincronas/sincronas.component';
import { AsincronasComponent } from './paginas/programacion/angular/formulariosangular/reactivosangular/validaciones/asincronas/asincronas.component';
import { PersonalizadasComponent } from './paginas/programacion/angular/formulariosangular/reactivosangular/validaciones/personalizadas/personalizadas.component';
import { PersocontraComponent } from './paginas/programacion/angular/formulariosangular/reactivosangular/validaciones/persocontra/persocontra.component';
import { CogercargarComponent } from './paginas/programacion/angular/formulariosangular/reactivosangular/cogercargar/cogercargar.component';
import { ArreglosestaticComponent } from './paginas/programacion/angular/formulariosangular/reactivosangular/arreglosestatic/arreglosestatic.component';
import { ArreglosdinamicComponent } from './paginas/programacion/angular/formulariosangular/reactivosangular/arreglosdinamic/arreglosdinamic.component';
import { DetectarcambiosComponent } from './paginas/programacion/angular/formulariosangular/reactivosangular/detectarcambios/detectarcambios.component';
import { HostingangularComponent } from './paginas/programacion/angular/hostingangular/hostingangular.component';
import { ExtensionesComponent } from './paginas/programacion/angular/instalacionangular/extensiones/extensiones.component';
import { FontsgoogleprincipalComponent } from './paginas/programacion/fontsgoogle/fontsgoogleprincipal.component';
import { FuncionesangularComponent } from './paginas/programacion/angular/funcionesangular/funcionesangular.component';
import { ServiceoneComponent } from './paginas/programacion/angular/serviciounovarias/serviceone/serviceone.component';
import { Serviceone2Component } from './paginas/programacion/angular/serviciounovarias/serviceone2/serviceone2.component';
import { BuscadorComponent } from './paginas/programacion/angular/buscador/buscador.component';
import { BuscadorprincipalComponent } from './paginas/programacion/angular/buscador/buscadorprincipal/buscadorprincipal.component';
import { MostrarangularmostrarComponent } from './paginas/programacion/angular/mostrarangularmostrar/mostrarangularmostrar.component';
import { TarjetaComponent } from './paginas/programacion/angular/serviciounovarias/serviciosssvariasss/tarjeta/tarjeta.component';
import { Tarjeta2Component } from './paginas/programacion/angular/serviciounovarias/serviciosssvariasss/tarjeta2/tarjeta2.component';
import { Buscador2Component } from './paginas/programacion/angular/buscador/buscador2/buscador2.component';
import { PipesComponent } from './paginas/programacion/angular/pipes/pipes.component';
import { PipespersonalizarPipe } from './paginas/programacion/angular/pipes/pipes/pipespersonalizar.pipe';
import { ServiciopadreehijoComponent } from './paginas/programacion/angular/serviciounovarias/serviciopadreehijo/serviciopadreehijo.component';
import { HttpspotifyComponent } from './paginas/programacion/angular/httpspotify/httpspotify.component';
import { SearchComponent } from './paginas/programacion/angular/httpspotify/search/search.component';
import { ArtistaComponent } from './paginas/programacion/angular/httpspotify/artista/artista.component';
import { PeticionhttpComponent } from './paginas/programacion/angular/httpspotify/peticionhttp/peticionhttp.component';
import { MostrarhttpspotifyComponent } from './paginas/programacion/angular/httpspotify/mostrarhttpspotify/mostrarhttpspotify.component';
import { NgstyleComponent } from './paginas/programacion/angular/directivas/ngstyle/ngstyle.component';
import { NgclassComponent } from './paginas/programacion/angular/directivas/ngclass/ngclass.component';
import { ResaltadoDirective } from './paginas/programacion/angular/directivas/personalizada/resaltado.directive';
import { DirectivapersonalizadaComponent } from './paginas/programacion/angular/directivas/personalizada/directivapersonalizada/directivapersonalizada.component';
import { ApirestangularComponent } from './paginas/programacion/angular/apirestangular/apirestangular.component';
import { PokemonangularComponent } from './paginas/programacion/angular/apirestangular/pokemonangular/pokemonangular.component';
import { NgswitchComponent } from './paginas/programacion/angular/directivas/ngswitch/ngswitch.component';
import { PadreHijoHijasComponent } from './paginas/programacion/angular/padre-hijo-hijas/padre-hijo-hijas.component';
import { UsuarioHijaComponent } from './paginas/programacion/angular/padre-hijo-hijas/usuario-hija/usuario-hija.component';
import { UsuarioNuevoHijaComponent } from './paginas/programacion/angular/padre-hijo-hijas/usuario-nuevo-hija/usuario-nuevo-hija.component';
import { UsuarioEditarHijaComponent } from './paginas/programacion/angular/padre-hijo-hijas/usuario-editar-hija/usuario-editar-hija.component';
import { UsuarioDetalleHijaComponent } from './paginas/programacion/angular/padre-hijo-hijas/usuario-detalle-hija/usuario-detalle-hija.component';
import { CicloVidaComponent } from './paginas/programacion/angular/ciclo-vida/ciclo-vida.component';
import { Auth0angularComponent } from './paginas/programacion/angular/loginangular/auth0angular/auth0angular.component';
import { ProtegidaComponent } from './paginas/programacion/angular/loginangular/auth0angular/protegida/protegida.component';
import { LoginangulargeneralComponent } from './paginas/programacion/angular/loginangular/loginangulargeneral/loginangulargeneral.component';
import { Loginangulargeneral2Component } from './paginas/programacion/angular/loginangular/loginangulargeneral2/loginangulargeneral2.component';
import { LoginloginangularComponent } from './paginas/programacion/angular/loginangular/loginloginangular/loginloginangular.component';
import { RegistroregistroangularComponent } from './paginas/programacion/angular/loginangular/registroregistroangular/registroregistroangular.component';
import { FirebaseangularloginfirebaseComponent } from './paginas/programacion/angular/loginangular/firebaseangularloginfirebase/firebaseangularloginfirebase.component';
import { Auth0auth0Component } from './paginas/programacion/auth0auth0/auth0auth0.component';
import { RegistrofirebaseangularrComponent } from './paginas/programacion/angular/loginangular/firebaseangularloginfirebase/registrofirebaseangularr/registrofirebaseangularr.component';
import { LoginangularloginfirebaseComponent } from './paginas/programacion/angular/loginangular/firebaseangularloginfirebase/loginangularloginfirebase/loginangularloginfirebase.component';
import { ProtegergirebaseangularComponent } from './paginas/programacion/angular/loginangular/firebaseangularloginfirebase/protegergirebaseangular/protegergirebaseangular.component';
import { TemplateformularioangularComponent } from './paginas/programacion/angular/formularioangularprincipal/formularioangulargeneral/templateformularioangular/templateformularioangular.component';
import { ReactivoformularioangularComponent } from './paginas/programacion/angular/formularioangularprincipal/formularioangulargeneral/reactivoformularioangular/reactivoformularioangular.component';
import { FirebaseformularioangularComponent } from './paginas/programacion/angular/formularioangularprincipal/firebaseformularioangular/firebaseformularioangular.component';
import { FormularioangularprincipalComponent } from './paginas/programacion/angular/formularioangularprincipal/formularioangularprincipal.component';
import { LogindominicodeComponent } from './paginas/programacion/angular/loginangular/logindominicode/logindominicode.component';
import { RegistrardominicodeComponent } from './paginas/programacion/angular/loginangular/registrardominicode/registrardominicode.component';
import { Firebase2formaComponent } from './paginas/programacion/angular/loginangular/firebase2forma/firebase2forma.component';
import { NavbarloginComponent } from './paginas/programacion/angular/loginangular/navbarlogin/navbarlogin.component';
import { PokemontodosComponent } from './paginas/programacion/angular/apirestangular/pokemonangular/pokemontodos/pokemontodos.component';
import { RickandmortyComponent } from './paginas/programacion/angular/apirestangular/rickandmorty/rickandmorty.component';
import { SearchmortyComponent } from './paginas/programacion/angular/apirestangular/rickandmorty/searchmorty/searchmorty.component';
import { ListmortyComponent } from './paginas/programacion/angular/apirestangular/rickandmorty/listmorty/listmorty.component';
import { CharacterDetailsComponent } from './paginas/programacion/angular/apirestangular/rickandmorty/character-details/character-details.component';
import { PokemonbuscarComponent } from './paginas/programacion/angular/apirestangular/pokemonangular/pokemonbuscar/pokemonbuscar.component';
import { Listmorty2Component } from './paginas/programacion/angular/apirestangular/rickandmorty/listmorty2/listmorty2.component';
import { PokemondetalleComponent } from './paginas/programacion/angular/apirestangular/pokemonangular/pokemondetalle/pokemondetalle.component';


//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';

//Scroll
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

//Programación - Angular - PipeLenguaje
import { registerLocaleData } from '@angular/common';

import nombre_pipe_espanol from '@angular/common/locales/es';
registerLocaleData(nombre_pipe_espanol);

import nombre_pipe_frances from '@angular/common/locales/fr';
registerLocaleData(nombre_pipe_frances);

//Programación - Angular - Servicios/Formularios/Directivas/etc
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  //Formulario Template, Reactivo
import { HttpClientModule } from '@angular/common/http';  //Servicio API Países (Json)

//Programación - Angular - Auth0
import { AuthModule } from '@auth0/auth0-angular';

//Programación - Python
import { PythonComponent } from './paginas/programacion/python/python.component';

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
import { SubirarchivosComponent } from './paginas/programacion/firebase/subirarchivos/subirarchivos.component';
import { SubidafireComponent } from './paginas/programacion/firebase/subirarchivos/subidafire/subidafire.component';
import { DirectivasubidaDirective } from './paginas/programacion/firebase/subirarchivos/directiva/directivasubida.directive';
import { MostrarComponent } from './paginas/programacion/firebase/subirarchivos/mostrar/mostrar.component';
 //Conexión con firebase
 import { AngularFireModule } from '@angular/fire';                //Iniciar la conexión con Firebase
 import { AngularFirestoreModule } from '@angular/fire/firestore';
 import { AngularFireAuthModule } from '@angular/fire/auth';       //Trabaja con las autentificaciones
 //Environment - Lo pide abajo en el imports por AngularFireModule
 import { environment } from 'src/environments/environment';              
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
import { IonicangularComponent } from './paginas/programacion/angular/ionicangular/ionicangular.component';
import { InstalacionionicComponent } from './paginas/programacion/angular/ionicangular/instalacionionic/instalacionionic.component';
import { AgregarionicangularComponent } from './paginas/programacion/angular/ionicangular/agregarionicangular/agregarionicangular.component';
import { ComplementosionicangularComponent } from './paginas/programacion/angular/ionicangular/complementosionicangular/complementosionicangular.component';
import { EstructuraionicangularComponent } from './paginas/programacion/angular/ionicangular/estructuraionicangular/estructuraionicangular.component';

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
import { ServiciospotifyService } from './paginas/programacion/angular/httpspotify/servicio/serviciospotify.service';

//Pipes
import { Pipespersonalizar2Pipe } from './paginas/programacion/angular/pipes/pipes/mostraragnularmostrar/pipespersonalizar2.pipe';
import { PipespersonalizadaurlPipe } from './paginas/programacion/angular/pipes/pipes/mostraragnularmostrar/pipespersonalizadaurl.pipe';
import { PipespersonalizaocultarPipe } from './paginas/programacion/angular/pipes/pipes/mostraragnularmostrar/pipespersonalizaocultar.pipe';
import { PipespotifyPipe } from './paginas/programacion/angular/httpspotify/pipe/pipespotify.pipe';
import { TarjetasspotifyComponent } from './paginas/programacion/angular/httpspotify/tarjetasspotify/tarjetasspotify.component';
import { LoadingspotifyComponent } from './paginas/programacion/angular/httpspotify/loadingspotify/loadingspotify.component';
import { ArtistaguiaComponent } from './paginas/programacion/angular/httpspotify/artistaguia/artistaguia.component';
import { PipeDomSeguroPipe } from './paginas/programacion/angular/httpspotify/pipe/pipe-dom-seguro.pipe';

//Librerías
import { JqueryComponent } from './paginas/programacion/jquery/jquery.component';
import { TetherComponent } from './paginas/programacion/tether/tether.component';
import { BootswatchComponent } from './paginas/programacion/bootswatch/bootswatch.component';






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
    VariablejavascriptComponent,
    FuncionesjavascriptComponent,
    CondicionesjavascriptComponent,
    VarletconstComponent,
    ObjetosComponent,
    FetchapiComponent,
    AsyncawaitComponent,
    MapjavascriptComponent,
    TipoComponent,
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
    SincronasComponent,
    AsincronasComponent,
    PersonalizadasComponent,
    PersocontraComponent,
    CogercargarComponent,
    ArreglosestaticComponent,
    ArreglosdinamicComponent,
    DetectarcambiosComponent,
    HostingangularComponent,
    ExtensionesComponent,
    FontsgoogleprincipalComponent,
    FuncionesangularComponent,
    ServiceoneComponent,
    BuscadorComponent,
    ServiciopadreehijoComponent,
    Serviceone2Component,
    BuscadorprincipalComponent,
    MostrarangularmostrarComponent,
    TarjetaComponent,
    Tarjeta2Component,
    Buscador2Component,
    PipesComponent,
    HttpspotifyComponent,
    SearchComponent,
    ArtistaComponent,
    PeticionhttpComponent,
    MostrarhttpspotifyComponent,
    NgstyleComponent,
    NgclassComponent,
    ResaltadoDirective,
    DirectivapersonalizadaComponent,
    ApirestangularComponent,
    PokemonangularComponent,
    NgswitchComponent,
    PadreHijoHijasComponent,
    UsuarioHijaComponent,
    UsuarioNuevoHijaComponent,
    UsuarioEditarHijaComponent,
    UsuarioDetalleHijaComponent,
    CicloVidaComponent,
    Auth0angularComponent,
    ProtegidaComponent,
    LoginangulargeneralComponent,
    Loginangulargeneral2Component,
    LoginloginangularComponent,
    RegistroregistroangularComponent,
    FirebaseangularloginfirebaseComponent,
    Auth0auth0Component,
    RegistrofirebaseangularrComponent,
    LoginangularloginfirebaseComponent,
    ProtegergirebaseangularComponent,
    TemplateformularioangularComponent,
    ReactivoformularioangularComponent,
    FirebaseformularioangularComponent,
    FormularioangularprincipalComponent,
    LogindominicodeComponent,
    RegistrardominicodeComponent,
    Firebase2formaComponent,
    NavbarloginComponent,
    PokemontodosComponent,
    RickandmortyComponent,
    SearchmortyComponent,
    ListmortyComponent,
    CharacterDetailsComponent,
    Listmorty2Component,
    PokemonbuscarComponent,
    PokemondetalleComponent,
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
    SubirarchivosComponent,
    SubidafireComponent,
    DirectivasubidaDirective,
    MostrarComponent,
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
    IonicangularComponent,
    InstalacionionicComponent,
    EstructuraionicangularComponent,
    ComplementosionicangularComponent,
    AgregarionicangularComponent,
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
    //Pipes
    PipespersonalizarPipe,
    Pipespersonalizar2Pipe,
    PipespersonalizadaurlPipe,
    PipespersonalizaocultarPipe,
    PipespotifyPipe,
    TarjetasspotifyComponent,
    LoadingspotifyComponent,
    ArtistaguiaComponent,
    PipeDomSeguroPipe,
    //Librerias
    JqueryComponent,
    TetherComponent,
    BootswatchComponent 
  ],
  imports: [
    //Por defecto
    BrowserModule,
    //Conexión con app.routing.ts - Enlazar páginas
    routing,
    /*Conexión con firebase
    Puede ser firebase o firebaseConfig, depende lo que hayamos puesto en 
    environment.ts -> firebaseConfig: { apiKey: "AIzaSyBXBZUhEffME9i58aVvigv...*/
    AngularFireModule.initializeApp(environment.firebaseConfig),   //Iniciar la conexión con Firebase
    AngularFirestoreModule,  
    AngularFireAuthModule,  //Trabaja con las autentificaciones
   //Programación - Angular - Servicios/Formularios/Directivas/etc
    FormsModule,        //Formulario Template
    ReactiveFormsModule, //Formulario Reactivo
    HttpClientModule,    //Servicio API Países (Json)
    AuthModule.forRoot({  //Auth0
      domain: 'sodert.eu.auth0.com',
      clientId: 'VBi7E1WT6AJmEHChD4WTwoGHpLDecvJy'
    }),
    //Scroll
    InfiniteScrollModule,
    //Angular Material  
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule
  ],
  providers: [
    //Conexión con app.routing.ts - Enlazar páginas
    appRoutingProviders,
    ServiciospotifyService,
    ServiciodepruebaService,
    {
        provide: LOCALE_ID,
        useValue: 'es'
    }
  ],
  //Por defecto - Librería
  bootstrap: [AppComponent]
})
//Por defecto
export class AppModule { }
