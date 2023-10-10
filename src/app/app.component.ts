import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TodoState } from './store/todo.state';
import { AddTodo, RemoveTodo } from './store/todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newTodo: string = '';

  @Select(TodoState.getTodos) todos$: Observable<string[]> | undefined;

  constructor(private store: Store) {}

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.store.dispatch(new AddTodo(this.newTodo));
      this.newTodo = '';
    }
  }

  removeTodo(todo: string) {
    this.store.dispatch(new RemoveTodo(todo));
  }
}
