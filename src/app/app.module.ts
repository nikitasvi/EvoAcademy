import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { ResponseService } from './services/response.service';

@NgModule({
  declarations: [AppComponent, ItemsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ResponseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
