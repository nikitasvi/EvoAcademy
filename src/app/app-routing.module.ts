import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'item',
    loadChildren: () =>
      import('./components/page/page-routing.module').then((m) => m.PageRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
