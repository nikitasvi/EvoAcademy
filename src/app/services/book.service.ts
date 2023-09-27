import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Array<Book> = [
    new Book(1, 'Два капитана', 'Каверин Винеамин Александрович'),
    new Book(2, 'Капитанская дочка', 'Пушкин Александр Сергеевич'),
    new Book(3, 'Ревизор', 'Гоголь Николай Васильевич'),
  ];

  private booksSubject = new BehaviorSubject<Book[]>(this.books);

  public getBooks(): Observable<Array<Book>> {
    return this.booksSubject.asObservable();
  }

  public addBook(book: Book): void {
    this.books.push(book);
    this.booksSubject.next([...this.books]);
  }

  public getLength(): number {
    return this.books.length;
  }
}
