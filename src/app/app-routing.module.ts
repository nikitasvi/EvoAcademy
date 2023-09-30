import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { resolve } from './components/post/pre-fetching-post.resolver';

const routes: Routes = [
  {
    path: 'post',
    component: PostComponent,
    resolve: {
      post: resolve,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
