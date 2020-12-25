import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../book.service';
import {Book} from '../Book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  id!: number;
  book!: Book;
  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
    this.book = new Book();
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBook(this.id).subscribe(data => {
        this.book = data;
      },
      error => console.log(error));
  }
  gotoList(): void {
    this.router.navigate(['/books']);
  }

}
