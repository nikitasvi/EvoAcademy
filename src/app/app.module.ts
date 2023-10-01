import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToDoInterceptor } from './to-do.interceptor';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ToDoInterceptor, multi: true },
    TodoService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
