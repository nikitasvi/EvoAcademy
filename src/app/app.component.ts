import { Component } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiClient } from './services/api-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private readonly apiClient: ApiClient) {}

  public getPosts() {
    this.apiClient.get('posts').subscribe((data) => console.log(data));
  }

  public getComments() {
    const options = {
      params: new HttpParams().set('postId', 1),
    };

    this.apiClient
      .get('comments', options)
      .subscribe((data) => console.log(data));
  }

  public createPost() {
    this.apiClient.post('posts', {}).subscribe((data) => console.log(data));
  }

  public getPost() {
    this.apiClient.get('post').subscribe({
      next: (data) => console.log(data),
      error: (error) => console.error('Server error:', error),
    });
  }

  public getPostsWithHeaders() {
    const options = {
      headers: new HttpHeaders({ 'X-Test': '1' }),
      responseType: 'text',
    };

    this.apiClient.get('posts', options).subscribe((data) => console.log(data));
  }

  public deletePost() {
    this.apiClient.delete('posts/1').subscribe((data) => console.log(data));
  }
}
