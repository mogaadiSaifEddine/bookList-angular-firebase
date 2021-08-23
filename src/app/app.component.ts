import { Component } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularFireBaseApp';
  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyDVLVyZoGyyquEG66RDRf2V7spSttUa4tA",
      authDomain: "angfirebase-books.firebaseapp.com",
      projectId: "angfirebase-books",
      databaseURL: "https://angfirebase-books-default-rtdb.europe-west1.firebasedatabase.app",

      storageBucket: "angfirebase-books.appspot.com",
      messagingSenderId: "181074024220",
      appId: "1:181074024220:web:a9031ed38b3e64f90dccd9",
      measurementId: "G-GSTNWSNDB1"
    };
    firebase.initializeApp(firebaseConfig)
    
  }
}
