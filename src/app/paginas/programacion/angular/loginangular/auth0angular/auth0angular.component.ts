import { Component, OnInit, Inject  } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth0angular',
  templateUrl: './auth0angular.component.html',
  styleUrls: ['./auth0angular.component.css']
})
export class Auth0angularComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}

  ngOnInit(): void {

  }

//Html
c=`{`;
co=`<`;
f=`*`;
p=`(`;
t=`[`;
}
