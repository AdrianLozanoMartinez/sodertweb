import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metodossweep',
  templateUrl: './metodossweep.component.html',
  styleUrls: ['./metodossweep.component.css']
})
export class MetodossweepComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//Html
c=`{`;
  sweep=`<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>`;
  x=`'&times;'`;
  ti=`<h1>Título</h1>`;
  mee=`title: '<strong>HTML <u>example</u></strong>',
icon: 'info',
html:
  'You can use <b>bold text</b>, ' +
  '<a href="//sweetalert2.github.io">links</a> ' +
  'and other HTML tags',
showCloseButton: true,
showCancelButton: true,
focusConfirm: false,
confirmButtonText:
  '<i class="fa fa-thumbs-up"></i> Great!',
confirmButtonAriaLabel: 'Thumbs up, great!',
cancelButtonText:
  '<i class="fa fa-thumbs-down"></i>',
cancelButtonAriaLabel: 'Thumbs down'`;
co=`confirmButtonText: 'Next &rarr;',`;
coo=`<pre><code>$`;
coop=`{answers}</code></pre>`;
vawe=`'<input id="swal-input1" class="swal2-input">' +
'<input id="swal-input2" class="swal2-input">',`;
irracional=`const ipAPI = '//api.ipify.org?format=json'

Swal.queue([{
  title: 'Your public IP',
  confirmButtonText: 'Show my public IP',
  text:
    'Your public IP will be received ' +
    'via AJAX request',
  showLoaderOnConfirm: true,
  preConfirm: () => {
    return fetch(ipAPI)
      .then(response => response.json())
      .then(data => Swal.insertQueueStep(data.ip))
      .catch(() => {
        Swal.insertQueueStep({
          icon: 'error',
          title: 'Unable to get your public IP'
        })
      })
  }
}])`;
fon=`<i class="fa fa-square-o fa-stack-2x"></i>`;
t=`<h1>Hola</h1>`;
}
