import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '@models/interfaces/posts.model';
import { PostsService } from '@services/postsService/posts.service';

const MAX_ELEMENTS = 20;

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})

export class SearchbarComponent implements OnInit, OnDestroy {
  postsArray = new Array<Post>();
  filteredArray = new Array<Post>();
  subscriptions = new Subscription();
  postsLength = 0;
  @ViewChild('textSearch') textSearch: ElementRef<HTMLInputElement>;
  constructor(private postsService: PostsService) { }

  private filterSearch(text: string): Post[] {
    this.filteredArray = this.postsArray;
    return this.filteredArray.filter((data: Post) => {
      const { id, userId, title, body } = data;
      return title.includes(text) || body.includes(text) || id.toString().includes(text) || userId.toString().includes(text)
    });
  }

  search(): void {
    const text = this.textSearch.nativeElement.value;
    this.postsLength = this.filterSearch(text).length;
    this.postsService.setPosts(this.filterSearch(text));
  }

  ngOnInit(): void {
    this.subscriptions.add(this.postsService.getRequestPosts().subscribe(
      (data: Post[]) => {
        this.postsArray = data.slice(0, MAX_ELEMENTS);
        this.postsLength = this.postsArray.length;
        this.postsService.setPosts(this.postsArray);
      }
    ));
  }

  isEmpty(): boolean {
    return this.postsLength === 0;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
