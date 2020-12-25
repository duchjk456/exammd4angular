import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookDetailComponent} from './book/book-detail/book-detail.component';
import {BookListComponent} from './book/book-list/book-list.component';
import {CreateBookComponent} from './book/create-book/create-book.component';
import {UpdateBookComponent} from './book/update-book/update-book.component';
import {DeleteBookComponent} from './delete-book/delete-book.component';

const routes: Routes = [
  {path: 'books', component: BookListComponent},
  {path: 'books/detail/:id', component: BookDetailComponent},
  {path: 'books/create', component: CreateBookComponent},
  {path: 'books/update/:id', component: UpdateBookComponent},
  {path: 'books/delete/:id', component: DeleteBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
