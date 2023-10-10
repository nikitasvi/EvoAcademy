import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostService } from 'src/app/services/posts.service';
import { Post } from 'src/models/post.model';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  public canEdit = false;
  public post: Post = new Post(0, 0, '', '');

  constructor(
    private readonly postService: PostService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.has('id')) {
        const postId = Number(params.get('id'));
        this.postService.getPost(postId).subscribe((data) => {
          this.post = data;
        });
      }
    });
  }
}
