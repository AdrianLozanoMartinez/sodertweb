import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.css']
})
export class HostingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//Html
c=`{`;
ru=`        ".read": "now < 1599775200000",  // 2020-9-11
            ".write": "now < 1599775200000",  // 2020-9-11`;
sc=`<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/7.19.1/firebase-app.js"></script>`;
scr=`<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>`;
body=`<body>`;
x=`<body>:

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {`;
xx=`
  apiKey: "**********",
  authDomain: "sodertweb.firebaseapp.com",
  databaseURL: "https://sodertweb.firebaseio.com",
  projectId: "sodertweb",
  storageBucket: "sodertweb.appspot.com",
  messagingSenderId: "*****"`;
xxx=`
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
</script>`;
}
