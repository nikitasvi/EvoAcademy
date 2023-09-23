import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/item/details/details.component';
import { ListComponent } from './components/item/list/list.component';
import { MainComponent } from './components/main/main.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ItemComponent } from './components/item/item.component';

const itemRoutes: Routes = [
  { path: 'details', component: DetailsComponent },
  { path: 'list', component: ListComponent },
];

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'item/:id',
    component: ItemComponent,
    children: itemRoutes,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
