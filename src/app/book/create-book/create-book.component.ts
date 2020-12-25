import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BookService} from '../book.service';
import {Book} from '../Book';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  book: Book = new Book();
  submitted = false;

  constructor(private router: Router, private bookService: BookService) {
  }

  ngOnInit(): void {
  }
  save(): void {
    this.bookService.createBook(this.book).subscribe((data: any) => {
        this.book = new Book();
        this.gotoList();
      },
      (error: any) => console.log(error));
  }
  onSubmit(): void {
    this.submitted = true;
    this.save();
  }
  gotoList(): void {
    this.router.navigate(['/books']);
  }

}
