import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private baseUrl = 'http://localhost:8000/api/posts'; 

  constructor(private http: HttpClient) {}


  getPosts(category?: string, tags?: string[]): Observable<Post[]> {
    let url = this.baseUrl;
    if (category || tags) {
      const queryParams = new URLSearchParams();
      if (category) queryParams.set('category', category);
      if (tags) queryParams.set('tags', tags.join(','));
      url += `?${queryParams.toString()}`;
    }
    return this.http.get<Post[]>(url);
  }


  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.baseUrl, post);
  }


  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
