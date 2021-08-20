import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  signIn(email: string , password : string){
    return new Promise <void> (
      (resolve, reject)=>{
        firebase.auth().signInWithEmailAndPassword(email ,password).then(
          ()=>{resolve()
          console.log('sigin done');} , 
          (err)=>{
            console.log('sigin error '+err  );
          }
        )
      }
    )

  }
  signUp(email: string, password: string) {
    console.log(email, password)
    return new Promise<void>(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
            console.log('sign up done');
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
}
  signOut(){
    console.log('out');
    return new Promise<void>(
      (res , rej )=>{
        firebase.auth().signOut().then(
          ()=>{
            res()
          } , 
          (err)=>rej(err))
      }
    )
   

  }
}
