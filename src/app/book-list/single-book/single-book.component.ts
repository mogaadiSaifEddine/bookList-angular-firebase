import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss']
})
export class SingleBookComponent implements OnInit {
  book: Book={
    photo :'' ,
    title :'' , 
    author : ''
  }
  constructor(private bookServie : BooksService , 
              private router : Router, 
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.bookServie.getOneBook(+id).then(
      (book : Book)=>{
        this.book=book

      })

  }
  onBack = ()=>{
    this.router.navigate(['/books'])  
  }

}
