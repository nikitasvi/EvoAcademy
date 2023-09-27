import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-book-dialog',
  templateUrl: './add-book-dialog.component.html',
  styleUrls: ['./add-book-dialog.component.css'],
})
export class AddBookDialogComponent {
  public bookForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, this.validateInput]),
    author: new FormControl('', [Validators.required, this.validateInput]),
  });

  constructor(
    public dialogRef: MatDialogRef<AddBookDialogComponent>,
    private readonly bookService: BookService
  ) {}

  public onSubmit() {
    if (this.bookForm.valid) {
      this.bookService.addBook(
        new Book(this.bookService.getLength() + 1, this.title, this.author)
      );
      this.dialogRef.close();
    }
  }

  private get title(): string {
    return this.bookForm.get('title')?.value;
  }

  private get author(): string {
    return this.bookForm.get('author')?.value;
  }

  private validateInput(control: FormControl): ValidationErrors | null {
    const value = control.value;

    const containsOnlyRussianLetters = /^[а-яА-Я]*$/.test(value);
    const containsNumbers = /\d/.test(value);
    const containsSpaces = /\s/.test(value);
    const containsSpecialCharacters = /[^\s\dа-яА-Яa-zA-Z]/.test(value);

    const errors: ValidationErrors = {};

    if (!containsOnlyRussianLetters) {
      errors['invalidCharacters'] = true;
    }

    if (containsNumbers) {
      errors['containsNumbers'] = true;
    }

    if (containsSpaces) {
      errors['containsSpaces'] = true;
    }

    if (containsSpecialCharacters) {
      errors['containsSpecialCharacters'] = true;
    }

    return Object.keys(errors).length > 0 ? errors : null;
  }
}
