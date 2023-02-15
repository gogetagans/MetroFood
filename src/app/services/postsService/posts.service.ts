import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { APIPOSTS } from '@models/enums/api-posts.enum';
import { Post } from '@models/interfaces/posts.model';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  list$: Subject<Post[]> = new Subject();
  constructor() { }

  public getRequestPosts(): Observable<Post[]> {
    return from(
      fetch(APIPOSTS.GETPOSTS).then((response) => {
        return response.json();
      }));
  }

  getPosts(): Observable<Post[]> {
    return this.list$.asObservable();
  }

  setPosts(data: Post[]): void {
    this.list$.next(data);
  }
}
