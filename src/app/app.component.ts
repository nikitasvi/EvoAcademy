import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public data: any;

  constructor(private toDoService: TodoService) {}

  ngOnInit(): void {
    this.toDoService.getData().subscribe({
      next: (response) => {
        console.log('Результат получения данных из сервера:', response);
        this.data = response;
      },
      error: (error: HttpErrorResponse) => console.log(error.error),
    });
  }
}
