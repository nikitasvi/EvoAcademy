import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { TodoState } from './store/todo.state';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, NgxsModule.forRoot([TodoState])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
