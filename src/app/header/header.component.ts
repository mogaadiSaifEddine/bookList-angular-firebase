import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth = false

  constructor(private authService : AuthService , 
              private route : Router) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (user :object )=>{
        console.log(user);
        this.isAuth = user ? true  : false
        }
      
      
    )
    
    
  }
  logout=()=>{
    console.log(this.isAuth);
    if (this.isAuth){this.authService.signOut()}
    this.route.navigate(['/auth/signin'])

  }

}
