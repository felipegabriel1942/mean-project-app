import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  /*posts = [
    { title: 'First Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { title: 'Second Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { title: 'Third Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
  ];*/
  posts: Post[] = [];
  private postSub: Subscription;


  constructor(public postsService: PostsService) { }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postSub = this.postsService.getPostUpdateListener()
    .subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
