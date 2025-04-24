import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onEditPost(id: number) {
    console.log('Edit post with id:', id);
  }

  onDeletePost(id: number) {
    console.log('Delete post with id:', id);
  }

  onAddComment(id: number) {
    console.log('Add comment to post with id:', id);
  }
}