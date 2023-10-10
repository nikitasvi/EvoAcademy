import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiClient } from './api-client';
import { Post } from 'src/models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  public posts: Array<Post> = new Array<Post>();

  constructor(private readonly apiClient: ApiClient) {}

  public getPosts(): Observable<Post[]> {
    return this.apiClient.get<Array<Post>>('posts');
  }

  public getPost(postId: number): Observable<Post> {
    return this.apiClient.get<Post>(`posts/${postId}`);
  }
}
