import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post';
import { PostService } from '../post.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts$().subscribe(
      response => this.posts = response)
  }

  numbers: Observable<number> = of(1,2,3,4,5,6,7,8,9,10);

  words: Observable<string> = new Observable<string>(
    (observer) =>{
      observer.next("hello");
      observer.next("world");
      setTimeout(() => {
        observer.next("final")
      },2000);
    }
  );
}