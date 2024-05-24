import { Injectable } from '@angular/core';
import { Post } from './shared/post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts$(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl);
  }
}
