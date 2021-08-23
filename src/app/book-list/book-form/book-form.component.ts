import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  bookForm = new FormGroup({

  })

  constructor(private formBuilder : FormBuilder, 
              private route : Router, 
              private bookService : BooksService) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm(){
    this.bookForm=this.formBuilder.group({
      title : ['' , [Validators.required]], 
      author : ['' , [Validators.required]] , 
    })
  }
  onSubmit(){
     this.route.navigate(['/books'])
    const title = this.bookForm.get('title')?.value
    const author = this.bookForm.get('author')?.value
    const newBook = new Book (
      title , 
      author
    )
    this.bookService.addOneBook(newBook)
   
  }

}
