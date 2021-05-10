import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracionfont',
  templateUrl: './configuracionfont.component.html',
  styleUrls: ['./configuracionfont.component.css']
})
export class ConfiguracionfontComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //Html
  c=`{`;
  font=`<script src="https://kit.fontawesome.com/e0f3b21040.js"crossorigin="anonymous"></script>`;
  icono=`<i class="fa fa-user-circle" aria-hidden="true"></i>`;
  t1=`<i class="fa fa-camera-retro fa-lg"></i>`;
t2=`<i class="fa fa-camera-retro fa-2x"></i>`;
t3=`<i class="fa fa-camera-retro fa-3x"></i>`;
t4=`<i class="fa fa-camera-retro fa-4x"></i>`;
t5=`<i class="fa fa-camera-retro fa-5x"></i>`;
home=`<a class="list-group-item" href="#"><i class="fa fa-home fa-fw" aria-hidden="true"></i>`;
inicio=`<i class="fa fa-quote-left fa-3x fa-pull-left fa-border" aria-hidden="true"></i>`;
lo=`<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading...</span>`;
lo1=`<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading...</span>`;
lo2=`<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading...</span>`;
lo3=`<i class="fa fa-cog fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading...</span>`;
ro=`<i class="fa fa-shield"></i>`;
ro90=`<i class="fa fa-shield fa-rotate-90"></i>`;
ro180=`<i class="fa fa-shield fa-rotate-180"></i>`;
ro270=`<i class="fa fa-shield fa-rotate-270"></i>`;
roho=`<i class="fa fa-shield fa-flip-horizontal"></i>`;
rove=`<i class="fa fa-shield fa-flip-vertical"></i>`;
sta=`<span class="fa-stack fa-lg">`;
stafue=`<i class="fa fa-square-o fa-stack-2x"></i>`;
staden=`<i class="fa fa-twitter fa-stack-1x"></i>`;
sp=`</span>`;
inn=`<i class="fa fa-twitter fa-stack-1x fa-inverse"></i>`;
color=`<i class="fa fa-twitter fa-stack-1x text-danger"></i>`;
izq=`<a class="btn btn-lg btn-success" href="#"><i class="fa fa-flag fa-2x pull-left"></i>Icono a la Izquierda</a>`;
der=`<a class="btn btn-lg btn-primary" href="#"><i class="fa fa-flag fa-2x pull-right"></i>Icono a la Derecha</a>`;
titu=`<div class="btn-group">
<a class="btn btn-default" href="#">
    <i class="fa fa-twitter" title="Tídulo al pasar ratón"></i>
</a>
</div>`;
usuario=`<div class="input-group margin-bottom-sm">
<span class="input-group-addon"><i class="fa fa-envelope-o fa-fw"></i></span>
<input class="form-control" type="text" placeholder="Email address">
</div>
<div class="input-group">
<span class="input-group-addon"><i class="fa fa-key fa-fw"></i></span>
<input class="form-control" type="password" placeholder="Password">
</div>`;
}
