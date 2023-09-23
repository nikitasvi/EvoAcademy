import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-inline',
  templateUrl: './inline.component.html',
})
export class InlineComponent {
  public metaTags: HTMLMetaElement[];

  constructor(private meta: Meta) {
    this.meta.addTags([
      { property: 'og:title', content: 'The Rock' },
      { property: 'og:type', content: 'video.movie' },
      { property: 'og:url', content: '//www.imdb.com/title/tt0117500/' },
    ]);

    this.metaTags = this.meta.getTags('property');
  }
}
