
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Post } from '../models/post.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class PostService {
//   private apiUrl = 'http://localhost:8000/api/posts/';

//   constructor(private http: HttpClient) {}

//   getPosts(): Observable<Post[]> {
//     return this.http.get<Post[]>(this.apiUrl);
//   }

//   createPost(post: Post): Observable<Post> {
//     return this.http.post<Post>(this.apiUrl, post);
//   }

//   updatePost(id: number, post: Post): Observable<Post> {
//     return this.http.put<Post>(`${this.apiUrl}${id}/`, post);
//   }

//   deletePost(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}${id}/`);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:8000/api/posts/';  // Убедись, что URL правильный

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }

  updatePost(id: number, post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}${id}/`, post);
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
