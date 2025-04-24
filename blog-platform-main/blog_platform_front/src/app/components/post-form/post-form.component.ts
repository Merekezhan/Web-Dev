import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-form',
  template: `
    <h2>Create New Post</h2>
    <form (ngSubmit)="onSubmit()">
      <input [(ngModel)]="post.title" name="title" placeholder="Title" required />
      <textarea [(ngModel)]="post.body" name="body" placeholder="Body" required></textarea>
      <input [(ngModel)]="post.category" name="category" placeholder="Category" />
      <input [(ngModel)]="post.tags" name="tags" placeholder="Tags (comma separated)" />
      <button type="submit">Create Post</button>
    </form>
  `,
})
export class PostFormComponent {
  post: Post = { title: '', body: '', category: '', tags: [] };

  constructor(private postService: PostService, private router: Router) {}

  onSubmit(): void {
    this.postService.createPost(this.post).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
