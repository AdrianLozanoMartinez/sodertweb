//Conexión con app.module.ts - Enlazar páginas
import { ModuleWithProviders } from '@angular/core';
//Conexión con app.module.ts - Enlazar páginas - CanActivate -> Angular
import { Routes, RouterModule, CanActivate } from '@angular/router';  //DEBE IR DE ESTE MODO, TODO JUNTO, SINO NO FUNCIONA BIEN

//Componentes - Especiales
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { ErrorComponent } from './componentes/error/error.component';
import { PieComponent } from './componentes/pie/pie.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';

//Programacion
import { ProgramacionComponent } from './paginas/programacion/programacion.component';
import { GitComponent } from './paginas/programacion/git/git.component';
import { TerminalComponent } from './paginas/programacion/terminal/terminal.component';
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
import { ColorcssComponent } from './paginas/programacion/css/colorcss/colorcss.component';
import { CssbordeComponent } from './paginas/programacion/css/cssborde/cssborde.component';
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
import { CartasbootComponent } from './paginas/programacion/bootstrap/cartasboot/cartasboot.component';
import { DisplaybootComponent } from './paginas/programacion/bootstrap/displayboot/displayboot.component';
import { NavbootComponent } from './paginas/programacion/bootstrap/navboot/navboot.component';
import { ImagenbootComponent } from './paginas/programacion/bootstrap/imagenboot/imagenboot.component';
import { FormulariobootComponent } from './paginas/programacion/bootstrap/formularioboot/formularioboot.component';
//Programacion - JavaScript
import { JavascriptComponent } from './paginas/programacion/javascript/javascript.component';
//Programacion - SQL
import { SqlComponent } from './paginas/programacion/sql/sql.component';
import { BasededatosComponent } from './paginas/programacion/sql/basededatos/basededatos.component';
//Programacion - PHP
import { PhpComponent } from './paginas/programacion/php/php.component';
import { EstructuraphpComponent } from './paginas/programacion/php/estructuraphp/estructuraphp.component';
//Python
import { PythonComponent } from './paginas/programacion/python/python.component';
//Programacion - Angular
import { AngularComponent } from './paginas/programacion/angular/angular.component';
import { InstalacionangularComponent } from './paginas/programacion/angular/instalacionangular/instalacionangular.component';
import { ArranqueangularComponent } from './paginas/programacion/angular/arranqueangular/arranqueangular.component';
import { HostingangularComponent } from './paginas/programacion/angular/hostingangular/hostingangular.component';
import { Serviceone2Component } from './paginas/programacion/angular/serviciounovarias/serviceone2/serviceone2.component';
import { BuscadorComponent } from './paginas/programacion/angular/buscador/buscador.component';
import { TarjetaComponent } from './paginas/programacion/angular/serviciounovarias/serviciosssvariasss/tarjeta/tarjeta.component';
import { Tarjeta2Component } from './paginas/programacion/angular/serviciounovarias/serviciosssvariasss/tarjeta2/tarjeta2.component';
import { ArtistaComponent } from './paginas/programacion/angular/httpspotify/artista/artista.component';
import { UsuarioHijaComponent } from './paginas/programacion/angular/padre-hijo-hijas/usuario-hija/usuario-hija.component';
import { UsuarioNuevoHijaComponent } from './paginas/programacion/angular/padre-hijo-hijas/usuario-nuevo-hija/usuario-nuevo-hija.component';
import { UsuarioEditarHijaComponent } from './paginas/programacion/angular/padre-hijo-hijas/usuario-editar-hija/usuario-editar-hija.component';
import { UsuarioDetalleHijaComponent } from './paginas/programacion/angular/padre-hijo-hijas/usuario-detalle-hija/usuario-detalle-hija.component';
import { ProtegidaComponent } from './paginas/programacion/angular/loginangular/auth0angular/protegida/protegida.component';
import { GuardianGuard } from './paginas/programacion/angular/loginangular/auth0angular/guard/guardian.guard';
import { LoginloginangularComponent } from './paginas/programacion/angular/loginangular/loginloginangular/loginloginangular.component';
import { RegistroregistroangularComponent } from './paginas/programacion/angular/loginangular/registroregistroangular/registroregistroangular.component';
import { RegistrofirebaseangularrComponent } from './paginas/programacion/angular/loginangular/firebaseangularloginfirebase/registrofirebaseangularr/registrofirebaseangularr.component';
import { LoginangularloginfirebaseComponent } from './paginas/programacion/angular/loginangular/firebaseangularloginfirebase/loginangularloginfirebase/loginangularloginfirebase.component';
import { ProtegergirebaseangularComponent } from './paginas/programacion/angular/loginangular/firebaseangularloginfirebase/protegergirebaseangular/protegergirebaseangular.component';
import { GuardprotegergirebaseangularGuard } from './paginas/programacion/angular/loginangular/firebaseangularloginfirebase/guardprotegergirebaseangular.guard';
import { LogindominicodeComponent } from './paginas/programacion/angular/loginangular/logindominicode/logindominicode.component';
import { RegistrardominicodeComponent } from './paginas/programacion/angular/loginangular/registrardominicode/registrardominicode.component';
import { ListmortyComponent } from './paginas/programacion/angular/apirestangular/rickandmorty/listmorty/listmorty.component';
import { CharacterDetailsComponent } from './paginas/programacion/angular/apirestangular/rickandmorty/character-details/character-details.component';
import { PokemondetalleComponent } from './paginas/programacion/angular/apirestangular/pokemonangular/pokemondetalle/pokemondetalle.component';
import { Reactivov2p1Component } from './paginas/programacion/angular/formularioangularprincipal/formularioangulargeneral/reactivoformularioangular/reactivoformangularvalidar/reactivov2p1/reactivov2p1.component';
import { Reactivov2pComponent } from './paginas/programacion/angular/formularioangularprincipal/formularioangulargeneral/reactivoformularioangular/reactivoformangularvalidar/reactivov2p/reactivov2p.component';
import { UnoalgomejorComponent } from './paginas/programacion/angular/apirestangular/pokemonalgomejor/unoalgomejor/unoalgomejor.component';

//Programacion - Hosting
import { HostinggeneralComponent } from './paginas/programacion/hostinggeneral/hostinggeneral.component';
//Programacion - Firebase
import { HostingComponent } from './paginas/programacion/firebase/hosting/hosting.component';
import { FirebaseComponent } from './paginas/programacion/firebase/firebase.component';
import { FormulariosfirebaseComponent } from './paginas/programacion/firebase/formulariosfirebase/formulariosfirebase.component';
import { Forfireunelementohtml3Component } from './paginas/programacion/firebase/formulariosfirebase/forfireunelementohtml3/forfireunelementohtml3.component';
import { ForfireunelementohtmlComponent } from './paginas/programacion/firebase/formulariosfirebase/forfireunelementohtml/forfireunelementohtml.component';
import { ForfirevarioselementoshtmlComponent } from './paginas/programacion/firebase/formulariosfirebase/forfirevarioselementoshtml/forfirevarioselementoshtml.component';
import { Forfireunelementohtml2Component } from './paginas/programacion/firebase/formulariosfirebase/forfireunelementohtml2/forfireunelementohtml2.component';
import { Forfireunelementohtml4Component } from './paginas/programacion/firebase/formulariosfirebase/forfireunelementohtml4/forfireunelementohtml4.component';
import { Forfireunelementohtml5Component } from './paginas/programacion/firebase/formulariosfirebase/forfireunelementohtml5/forfireunelementohtml5.component';
import { Forfirevarioselementoshtml2Component } from './paginas/programacion/firebase/formulariosfirebase/forfirevarioselementoshtml2/forfirevarioselementoshtml2.component';
import { Forfirevarioselementoshtml3Component } from './paginas/programacion/firebase/formulariosfirebase/forfirevarioselementoshtml3/forfirevarioselementoshtml3.component';
import { Forfirevarioselementoshtml4Component } from './paginas/programacion/firebase/formulariosfirebase/forfirevarioselementoshtml4/forfirevarioselementoshtml4.component';
import { SubirarchivosComponent } from './paginas/programacion/firebase/subirarchivos/subirarchivos.component';
import { SubidafireComponent } from './paginas/programacion/firebase/subirarchivos/subidafire/subidafire.component';

//Programacion - Auth0
import { Auth0auth0Component } from './paginas/programacion/auth0auth0/auth0auth0.component';
//Programacion - Servidor Local
import { ServidorlocalComponent } from './paginas/programacion/servidorlocal/servidorlocal.component';
//Programacion - Fontawesome
import { FontawesomeComponent } from './paginas/programacion/fontawesome/fontawesome.component';
import { InstalacionfontawesomeComponent } from './paginas/programacion/fontawesome/instalacionfontawesome/instalacionfontawesome.component';
import { ConfiguracionfontComponent } from './paginas/programacion/fontawesome/configuracionfont/configuracionfont.component';
//Programacion - Sweepalert2
import { Sweepalert2Component } from './paginas/programacion/sweepalert2/sweepalert2.component';
import { Instalacionsweepalert2Component } from './paginas/programacion/sweepalert2/instalacionsweepalert2/instalacionsweepalert2.component';
import { ConfiguracionsweepComponent } from './paginas/programacion/sweepalert2/configuracionsweep/configuracionsweep.component';
import { EjemplossweepComponent } from './paginas/programacion/sweepalert2/ejemplossweep/ejemplossweep.component';
import { MetodossweepComponent } from './paginas/programacion/sweepalert2/metodossweep/metodossweep.component';
//Programacion - Toastr
import { ToastrComponent } from './paginas/programacion/toastr/toastr.component';
//Programacion - C#
import { CComponent } from './paginas/programacion/c/c.component';
//Programacion - Typescript
import { TypescriptComponent } from './paginas/programacion/typescript/typescript.component';

//Programacion - Ionic
import { IonicComponent } from './paginas/programacion/ionic/ionic.component';

//Fonts google
import { FontsgoogleprincipalComponent } from './paginas/programacion/fontsgoogle/fontsgoogleprincipal.component';

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


//Librerías
import { JqueryComponent } from './paginas/programacion/jquery/jquery.component';
import { TetherComponent } from './paginas/programacion/tether/tether.component';
import { BootswatchComponent } from './paginas/programacion/bootswatch/bootswatch.component';

//Routes/routing específico de usuario
import { USUARIO_ROUTES } from './paginas/programacion/angular/padre-hijo-hijas/usuario.routes';




export const appRoutes: Routes = [
  //Componentes - Especiales
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'pie', component: PieComponent},
  { path: 'cabecera', component: CabeceraComponent},
  { path: 'appcomponente', component: AppComponent},
  //Programacion
  { path: 'programacion', component: ProgramacionComponent},
  { path: 'git', component: GitComponent},
  { path: 'terminal', component: TerminalComponent},
  //Programacion - Html
  { path: 'html', component: HtmlComponent},
  { path: 'letrashtml', component: LetrashtmlComponent},
  { path: 'enlacehtml', component: EnlacehtmlComponent},
  { path: 'formulariohtml', component: FormulariohtmlComponent},
  { path: 'tablashtml', component: TablashtmlComponent},
  { path: 'imagen', component: ImagenComponent},
  { path: 'botonhtml', component: BotonhtmlComponent},
  //Programacion - Css
  { path: 'css', component: CssComponent},
  { path: 'alineacioncss', component: AlineacioncssComponent},
  { path: 'colorcss', component: ColorcssComponent},
  { path: 'cssborde', component: CssbordeComponent},
  { path: 'imagencss', component: ImagencssComponent},
  { path: 'palabrascss', component: PalabrascssComponent},
  { path: 'movimientoscss', component: MovimientoscssComponent},
  { path: 'trlb', component: TrlbComponent},
  //Programacion - Bootstrap
  { path: 'bootstrap', component: BootstrapComponent},
  { path: 'estructurabootstrap', component: EstructurabootstrapComponent},
  { path: 'alineacionbootstrap', component: AlineacionbootstrapComponent},
  { path: 'alerta', component: AlertaComponent},
  { path: 'letrasboot', component: LetrasbootComponent},
  { path: 'bordesboot', component: BordesbootComponent},
  { path: 'botonboot', component: BotonbootComponent},
  { path: 'tablaboot', component: TablabootComponent},
  { path: 'cartasboot', component: CartasbootComponent},
  { path: 'displayboot', component: DisplaybootComponent},
  { path: 'imagenboot', component: ImagenbootComponent},
  { path: 'formularioboot', component: FormulariobootComponent},
  { path: 'navboot', component: NavbootComponent},
  //Programacion - JavaScript
  { path: 'javascript', component: JavascriptComponent},
  //Programacion - SQL
  { path: 'sql', component: SqlComponent},
  { path: 'basededatos', component: BasededatosComponent},
  //Programacion - PHP
  { path: 'php', component: PhpComponent},
  { path: 'estructuraphp', component: EstructuraphpComponent},
  //Python
  { path: 'python', component: PythonComponent},
  //Programacion - Angular
  { path: 'angular', component: AngularComponent},
  { path: 'instalacionangular', component: InstalacionangularComponent},
  { path: 'arranqueangular', component: ArranqueangularComponent},
  { path: 'hostingangular', component: HostingangularComponent},
  { path: 'variable_html/:id', component: Serviceone2Component},
  { path: 'buscador/:termino_buscar', component: BuscadorComponent},
  { path: 'buscador2/:termino_buscar', component: BuscadorComponent},
  { path: 'tarjeta', component: TarjetaComponent},
  { path: 'tarjeta2', component: Tarjeta2Component},
  { path: 'artist/:id', component: ArtistaComponent },
  { path: 'usuarioH/:id', component: UsuarioHijaComponent, children: USUARIO_ROUTES},
  { path: 'protegida', component: ProtegidaComponent, canActivate: [ GuardianGuard ]}, //Dentro de los [] metemos todos los guard que tendrá que pasar antes de entrar en el enlace
  { path: 'loginloginangular', component: LoginloginangularComponent},
  { path: 'registroregistroangular', component: RegistroregistroangularComponent},
  { path: 'registrofirebaseangularr', component: RegistrofirebaseangularrComponent},
  { path: 'loginangularfirebase', component: LoginangularloginfirebaseComponent},
  { path: 'protegergirebaseangular', component: ProtegergirebaseangularComponent, canActivate: [ GuardprotegergirebaseangularGuard ]},
  { path: 'loginfb', component: LogindominicodeComponent},
  { path: 'registrarfb', component: RegistrardominicodeComponent},
  { path: 'listmorty', component: ListmortyComponent},
  { path: 'character-details/:id', component: CharacterDetailsComponent},
  { path: 'pokemondetalle/:id', component: PokemondetalleComponent},
  { path: 'passss', component: Reactivov2p1Component},
  { path: 'personalizar', component: Reactivov2pComponent},
  { path: 'unoalgomejor/:id', component: UnoalgomejorComponent},
  //Programacion - Hosting
  { path: 'hostinggeneral', component: HostinggeneralComponent},
  //Programacion - Firebase
  { path: 'hosting', component: HostingComponent},
  { path: 'firebase', component: FirebaseComponent},
  { path: 'formulariosfirebase', component: FormulariosfirebaseComponent},
  { path: 'unelemento/:id', component: ForfireunelementohtmlComponent},        //Coger la id (posición/index) del producto
  { path: 'unelemento2/:id', component: Forfireunelementohtml2Component},        //Coger la id (posición/index) del producto
  { path: 'unelemento3/:id', component: Forfireunelementohtml3Component},        //Coger la id (posición/index) del producto
  { path: 'unelemento4/:id', component: Forfireunelementohtml4Component},        //Coger la id (posición/index) del producto
  { path: 'unelemento5/:id', component: Forfireunelementohtml5Component},        //Coger la id (posición/index) del producto
  { path: 'varioselementos', component: ForfirevarioselementoshtmlComponent},
  { path: 'varioselementos2', component: Forfirevarioselementoshtml2Component},
  { path: 'varioselementos3', component: Forfirevarioselementoshtml3Component},
  { path: 'varioselementos4', component: Forfirevarioselementoshtml4Component},
  //Auth0
  { path: 'auth0', component: Auth0auth0Component},
  //Fonts google
  { path: 'fontsgoogle', component: FontsgoogleprincipalComponent},
  { path: 'subirarchivos', component: SubirarchivosComponent},
  { path: 'subidafire', component: SubidafireComponent},
  //Programacion - Servidor Local
  { path: 'servidorlocal', component: ServidorlocalComponent},
  //Programacion - Fonts Google
  { path: 'configuracionfont', component: ConfiguracionfontComponent},
  //Programacion - Fontawesome
  { path: 'fontawesome', component: FontawesomeComponent},
  { path: 'instalacionfont', component: InstalacionfontawesomeComponent},
  //Programacion - Sweepalert2
  { path: 'sweepalert2', component: Sweepalert2Component},
  { path: 'instalacionsweepalert2', component: Instalacionsweepalert2Component},
  { path: 'configuracionsweepalert2', component: ConfiguracionsweepComponent},
  { path: 'ejemplossweep', component: EjemplossweepComponent},
  { path: 'metodossweep', component: MetodossweepComponent},
  //Programacion - C#
  { path: 'c', component: CComponent},
  //Programacion - Typescript
  { path: 'typescript', component: TypescriptComponent},
  //Programacion - Ionic
  { path: 'ionic', component: IonicComponent},
  //Programacion - Toastr
  { path: 'toastr', component: ToastrComponent},
  //Librerías
  { path: 'jquery', component: JqueryComponent},
  { path: 'tether', component: TetherComponent},
  { path: 'bootswatch', component: BootswatchComponent},
  //Empleo
  { path: 'empleo', component: EmpleoComponent},
  { path: 'empresas', component: EmpresasComponent},
  { path: 'ayuntamiento', component: AyuntamientoComponent},
  { path: 'ayuntamientoid/:id', component: AyuntamientoidComponent},
  { path: 'empresaid/:id', component: EmpresaidComponent},

  //Personal
  { path: 'personal', component: PersonalComponent},
  { path: 'personalid/:id', component: PersonalidComponent},

   //Deudas
   { path: 'deudas', component: DeudasComponent},
   { path: 'deudasid/:id', component: DeudasidComponent},


    //Componentes Error - Opción 1
    { path: '**', component: ErrorComponent},
    //Componentes Error - Opción 2
    { path: '**', pathMatch: 'full', redirectTo: 'home'},
    //Componentes Error - Opción 2
    { path: '**', component: HomeComponent }
];
//Conexión con app.module.ts - Enlazar páginas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot (appRoutes);