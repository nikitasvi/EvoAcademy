import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostComponent } from './components/post/post.component';
import { ApiClient } from './services/api-client';

@NgModule({
  declarations: [AppComponent, PostComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [ApiClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
