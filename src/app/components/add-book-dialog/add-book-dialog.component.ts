import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-book-dialog',
  templateUrl: './add-book-dialog.component.html',
  styleUrls: ['./add-book-dialog.component.css'],
})
export class AddBookDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddBookDialogComponent>) {}
}
