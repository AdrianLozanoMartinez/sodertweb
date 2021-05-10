import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variablesangular',
  templateUrl: './variablesangular.component.html',
  styleUrls: ['./variablesangular.component.css']
})
export class VariablesangularComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//html
variable_ts_html=`{{variable_ts_html}}`;
}
