import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../book/book.service';
import {Book} from '../book/Book';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  id!: number;
  book!: Book;

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) {
  }

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

  onClick(id: number): void {
    if (confirm('Bạn chắc chứ?')) {
      this.bookService.deleteBook(id)
        .subscribe(
          data => {
            console.log(data);
            this.gotoList();
          },
          error => console.log(error));
    }
  }

}
