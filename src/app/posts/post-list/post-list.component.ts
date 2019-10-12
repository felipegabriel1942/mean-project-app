import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  /*posts = [
    { title: 'First Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { title: 'Second Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { title: 'Third Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
  ];*/

  @Input() posts: Post[] = [];

  constructor() { }

  ngOnInit() {

  }

}
