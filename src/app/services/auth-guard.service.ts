import { Injectable } from '@angular/core';
import { CanActivate, Router  } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private  route : Router) { }

  canActivate():Observable<boolean>|Promise<boolean>|boolean{
    return new Promise (  
      (res , rej )=>{
        firebase.auth().onAuthStateChanged(
          (user : object)=>{
            user ? res(true)  : this.route.navigate(['/auth' , 'signin'])
          } , 
          (err)=>{
            rej(err)
          }
        )
          }
        )
      }
    
  }

