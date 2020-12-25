import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books!: any;

  constructor(private bookService: BookService, private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.books = this.bookService.getBooksList();
  }

  deleteBook(id: number): void {
    this.router.navigate(['books/delete', id]);
  }
  bookUpdate(id: number): void {
    this.router.navigate(['books/update', id]);
  }

}
