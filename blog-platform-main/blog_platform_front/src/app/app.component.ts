
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],  
  template: `
    <h1>Welcome to My Blog!</h1>
    <a routerLink="/login">Login</a> | 
    <a routerLink="/register">Register</a> | 
    <a routerLink="/posts">Posts</a>
    <router-outlet></router-outlet> 
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
