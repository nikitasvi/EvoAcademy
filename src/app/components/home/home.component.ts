import { Component } from '@angular/core';
import { ApiClient } from 'src/app/services/api-client';
import { RoleService } from 'src/app/services/role.service';
import { Post } from 'src/models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public posts: Array<Post> = new Array<Post>();

  constructor(
    private readonly apiClient: ApiClient,
    public roleService: RoleService
  ) {
    this.apiClient
      .get<Array<Post>>('posts')
      .subscribe((posts) => (this.posts = posts));
  }
}
