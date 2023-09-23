import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InlineComponent } from './components/inline/inline.component';

const routes: Routes = [
  {
    path: 'open-graph',
    component: InlineComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
