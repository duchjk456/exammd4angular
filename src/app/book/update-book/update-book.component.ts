import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../book.service';
import {Book} from '../Book';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  id!: number;
  book!: Book;
  submitted = false;

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

  onSubmit(): void {
    this.updateBook();
  }

  updateBook(): void {
    this.bookService.updateBooks(this.id, this.book).subscribe(data => {
      this.book = new Book();
      alert('Update succsess!');
      this.gotoList();
    }, error => console.log(error));
  }

  gotoList(): void {
    if (confirm('Thông tin bạn nhập sẽ không được lưu lại!')) {
      this.router.navigate(['/books']);
    }
  }
}


