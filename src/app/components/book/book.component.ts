import { Component } from '@angular/core';
import { BooksService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
})
export class BookComponent {
  constructor(public bookService: BooksService) {}
}
