import { Component, OnInit } from '@angular/core';

import { BlogService } from '../../../services/blog/blog.service';

import { BASE_IMAGE_PATH } from './../../../constants/urls';

@Component({
  selector: 'app-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.css']
})
export class BlogHeaderComponent implements OnInit {
  public search: string;
  public searchResults: any[];
  public imagesPath: string;

  public navMobile: string;

  constructor(
    private blogService: BlogService
  ) {
    this.imagesPath = BASE_IMAGE_PATH;
    this.navMobile = 'nav-mobile-none';
  }

  ngOnInit() {
    this.searchResults = new Array<any>();
  }

  onKeyup(): void {
    if (this.search.length > 0) {
      this.blogService.searchPosts(this.search).subscribe((res: any) => {
        this.searchResults = res;
      });
    } else {
      this.searchResults = [];
    }
  }

  renmoveList(): void {
    this.searchResults = [];
    this.search = null;
  }

  toggleNavMobile(): void {
    if (this.navMobile === 'nav-mobile-block') {
      this.navMobile = 'nav-mobile-none';
    } else {
      this.navMobile = 'nav-mobile-block';
    }
  }
}
