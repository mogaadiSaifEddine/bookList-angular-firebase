import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from '../models/book/book.model';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit , OnDestroy {
  Books : Book[]=[]
  booksSubscription : Subscription= new Subscription()
  constructor(private bookService : BooksService , 
              private route : Router) { 

              }

  ngOnInit(): void {
    this.booksSubscription = this.bookService.booksSubject.subscribe(
        (books : Book[])=>{
          this.Books=books
        }
    ) ;  
    this.bookService.emitBooks()
  }
  onNewBook(){
    this.route.navigate(['/books' , 'new'])
  }

  onDeleteBook (book : Book) {
    this.bookService.deleteBook(book)
  }
  onViewBook (id : number){
    this.route.navigate(['/books' , '/view',id])  
  }
  ngOnDestroy(){


 }

}
