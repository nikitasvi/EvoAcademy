import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { roleGuard } from './role.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'post/:id',
    component: PostDetailsComponent,
    canActivate: [roleGuard()],
  },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
