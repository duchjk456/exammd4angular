import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {
  }

  getBook(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createBook(book: object): Observable<object> {
    return this.http.post(`${this.baseUrl}/`, book);
  }

  updateBooks(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getBooksList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }

}
