
// import { Component, OnInit } from '@angular/core';
// import { PostService } from '../../../services/post.service';
// import { Post } from '../../../models/post.model';

// @Component({
//   selector: 'app-home',
//   template: `
//     <div class="filters">
//       <h3>Filter Posts</h3>
//       <label for="category">Category:</label>
//       <select [(ngModel)]="selectedCategory" (change)="onFilterChange()">
//         <option value="">All Categories</option>
//         <option *ngFor="let category of categories" [value]="category">{{ category }}</option>
//       </select>

//       <label for="tags">Tags:</label>
//       <input [(ngModel)]="selectedTags" (keyup)="onFilterChange()" placeholder="Enter tags separated by commas" />
//     </div>

//     <div *ngFor="let post of posts" class="post-card">
//       <h2>{{ post.title }}</h2>
//       <p>{{ post.body }}</p>
//       <button *ngIf="post.id" (click)="deletePost(post.id)">Delete Post</button>
//     </div>
//   `
// })
// export class HomeComponent implements OnInit {
//   posts: Post[] = [];
//   selectedCategory = '';
//   selectedTags = '';
//   categories = ['Technology', 'Health', 'Education']; // Пример категорий, получи их с бэкенда
//   tags = ['angular', 'django', 'python']; // Пример тегов, получи их с бэкенда

//   constructor(private postService: PostService) {}

//   ngOnInit(): void {
//     this.getPosts();
//   }

//   onFilterChange(): void {
//     this.getPosts();
//   }

//   getPosts(): void {
//     this.postService
//       .getPosts(this.selectedCategory, this.selectedTags ? this.selectedTags.split(',') : [])
//       .subscribe((data) => {
//         console.log('Received posts:', data); // Логируем данные
//         this.posts = data;
//       });
//   }

//   deletePost(id: number): void {
//     this.postService.deletePost(id).subscribe(() => {
//       this.getPosts(); // После удаления перезагружаем посты
//     });
//   }
// }

// src/app/pages/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  selectedCategory = '';
  selectedTags = '';
  categories = ['Technology', 'Health', 'Education']; // Пример категорий
  tags = ['angular', 'django', 'python']; // Пример тегов

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();  // Убедись, что получаем посты
  }

  onFilterChange(): void {
    this.getPosts();  // Обновляем посты при изменении фильтра
  }

  getPosts(): void {
    this.postService.getPosts(this.selectedCategory, this.selectedTags ? this.selectedTags.split(',') : [])
      .subscribe((data) => {
        this.posts = data;
      });
  }

  deletePost(id: number): void {
    this.postService.deletePost(id).subscribe(() => {
      this.getPosts();  // Обновляем посты после удаления
    });
  }
}
