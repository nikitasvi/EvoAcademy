import { Injectable } from '@angular/core';
import { IBook } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: IBook[] = [
    {
      number: 1,
      name: 'Dva kapitana',
      author: 'Kaverin Vineamin Aleksandrovich',
    },
    {
      number: 2,
      name: 'Kapitanskaya dochka',
      author: 'Pushkin Aleksandr Sergeevich',
    },
    {
      number: 3,
      name: 'Revizor',
      author: 'Gogol Nikolai Vasilevich',
    },
  ];

  public getBooks(): IBook[] {
    return this.books;
  }
}
