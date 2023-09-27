import { Component } from '@angular/core';
import { BookService } from './services/book.service';
import { MatDialog } from '@angular/material/dialog';
import { AddBookDialogComponent } from './components/add-book-dialog/add-book-dialog.component';
import { Book } from './models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public displayedColumns: string[] = ['number', 'name', 'author'];
  public books: Book[] = [];

  constructor(
    private readonly bookService: BookService,
    private readonly dialog: MatDialog,
  ) {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
  }

  public addBook() {
    const dialogRef = this.dialog.open(AddBookDialogComponent, {
      width: '700px',
      maxWidth: '100vw',
      disableClose: false,
      closeOnNavigation: true,
    });
  }
}
