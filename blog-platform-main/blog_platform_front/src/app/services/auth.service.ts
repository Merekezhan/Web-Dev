// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:8000/api'; 

  constructor(private http: HttpClient) {}


  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login/`, data); // Отправляем запрос на бэкенд
  }


  register(data: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register/`, data); // Отправляем запрос на бэкенд
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
  isLoggedIn(): boolean {
    return !!this.getToken(); // Если токен есть, значит пользователь авторизован
  }
}
