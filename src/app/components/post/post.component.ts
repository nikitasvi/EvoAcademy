import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {
  public post: any;

  constructor(private routes: ActivatedRoute) {}

  ngOnInit(): void {
    this.routes.data.subscribe((response: any) => {
      this.post = response.post;
    });

    console.log('Post: ', this.post);
  }
}
