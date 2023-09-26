import { Component } from '@angular/core';
import { IBook } from './interfaces/book.interface';
import { BookService } from './services/book.service';
import { MatDialog } from '@angular/material/dialog';
import { AddBookDialogComponent } from './components/add-book-dialog/add-book-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public displayedColumns: string[] = ['number', 'name', 'author'];
  public books: IBook[];

  constructor(
    private readonly bookService: BookService,
    private readonly dialog: MatDialog
  ) {
    this.books = this.bookService.getBooks();
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
