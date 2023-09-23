import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ItemComponent } from './components/page/item/item.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, MainComponent, ItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
