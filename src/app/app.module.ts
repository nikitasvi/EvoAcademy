import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BookService } from './services/book.service';
import { AddBookDialogComponent } from './components/add-book-dialog/add-book-dialog.component';

@NgModule({
  declarations: [AppComponent, AddBookDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
