import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BookService } from './services/book.service';
import { AddBookDialogComponent } from './components/add-book-dialog/add-book-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { ValidationErrorsComponent } from './components/validation-errors/validation-errors.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookDialogComponent,
    ValidationErrorsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
