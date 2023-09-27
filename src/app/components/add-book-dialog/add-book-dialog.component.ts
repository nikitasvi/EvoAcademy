import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-book-dialog',
  templateUrl: './add-book-dialog.component.html',
  styleUrls: ['./add-book-dialog.component.css'],
})
export class AddBookDialogComponent {
  public bookForm: FormGroup = new  FormGroup({
    title: new FormControl('', [Validators.required, Validators.pattern(/[А-Яа-я]+/)]),
    author: new FormControl('', [Validators.required, Validators.pattern(/[А-Яа-я]+/)]),
  });
  
  constructor(public dialogRef: MatDialogRef<AddBookDialogComponent>,
    private readonly bookService: BookService) {
  }

  public onSubmit() {
    if (this.bookForm.valid) {
      this.bookService.addBook(new Book(
        this.bookService.getLength() + 1,
        this.title,
        this.author,
      ));
      this.dialogRef.close();
    }
  }

  public get title(): string {
    return this.bookForm.get('title')?.value;
  }

  public get author(): string {
    return this.bookForm.get('author')?.value;
  }
}
