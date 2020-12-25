import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UpdateBookComponent} from './book/update-book/update-book.component';
import {CreateBookComponent} from './book/create-book/create-book.component';
import {BookListComponent} from './book/book-list/book-list.component';
import {BookDetailComponent} from './book/book-detail/book-detail.component';
import {FormsModule} from '@angular/forms';
import { DeleteBookComponent } from './delete-book/delete-book.component';



@NgModule({
  declarations: [
    AppComponent,
    UpdateBookComponent,
    CreateBookComponent,
    BookListComponent,
    BookDetailComponent,
    DeleteBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
