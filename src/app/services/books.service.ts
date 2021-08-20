import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../models/book/book.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books : Book[]=[]
  booksSubject = new Subject<Book[]>()

  constructor() { }
emitBooks(){
  this.booksSubject.next(this.books)
}
saveBooks(){
  firebase.database().ref('/books').set(this.books)
}
getBooks(){
  firebase.database().ref('/books').on('value' , (data)=>{
    this.books =data?.val()
    this.emitBooks()
  })
}
getOneBook(id : number) {
  return new Promise((res , rej)=>{
    firebase.database().ref('/books/'+id).once('value').then(
      (data)=>{
        res(data.val())
      } , 
      (err)=>{
        rej(err)
      })
  })
}
addOneBook = (book : Book)=>{
  this.books.push(book) ; 
  this.emitBooks()
  this.saveBooks()

}
deleteBook (bookdel : Book) {
  this.books.filter((book)=>bookdel !==book)
  this.saveBooks()
  this.emitBooks()
}
}
