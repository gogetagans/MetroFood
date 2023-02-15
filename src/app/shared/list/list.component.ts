import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Post } from '@models/interfaces/posts.model';
import { PostsService } from '@services/postsService/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSortModule]
})

export class ListComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  isEmptyArray = false;
  subscriptions = new Subscription();
  displayedColumns: Array<string> = ['userId', 'id', 'title', 'body'];
  dataSource: MatTableDataSource<Post>;
  constructor(private postsService: PostsService) {

  }
  checkEmptyList(): boolean | void {
    const { data } = this.dataSource;
    this.isEmptyArray = data.length === 0;
  }

  ngOnInit(): void {
    this.subscriptions.add(this.postsService.getPosts().subscribe(
      (data: Post[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;

        this.checkEmptyList();
      }
    ));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

