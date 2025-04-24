
import { Component } from '@angular/core';
import { PostCardComponent } from '../post-card/post-card.component';  

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostCardComponent],  
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    { title: 'Post 1', body: 'Body of post 1' },
    { title: 'Post 2', body: 'Body of post 2' }
  ];
}
