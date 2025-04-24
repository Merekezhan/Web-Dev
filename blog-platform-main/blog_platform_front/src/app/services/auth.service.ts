// // src/app/auth/auth.service.ts

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class AuthService {
//   private apiUrl = 'http://localhost:8000/api'; 

//   constructor(private http: HttpClient) {}


//   login(data: { email: string; password: string }): Observable<any> {
//     return this.http.post(`${this.apiUrl}/login/`, data); // Отправляем запрос на бэкенд
//   }


//   register(data: { email: string; password: string }): Observable<any> {
//     return this.http.post(`${this.apiUrl}/register/`, data); // Отправляем запрос на бэкенд
//   }

//   saveToken(token: string) {
//     localStorage.setItem('token', token);
//   }

//   getToken(): string | null {
//     return localStorage.getItem('token');
//   }

//   logout() {
//     localStorage.removeItem('token');
//   }
//   isLoggedIn(): boolean {
//     return !!this.getToken(); // Если токен есть, значит пользователь авторизован
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/api/token/`;
  private loggedInUser = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const loginData = { email, password };
    this.http.post<any>(this.apiUrl, loginData).subscribe(response => {
      localStorage.setItem('access_token', response.access);
      this.loggedInUser.next(response);
    });
  }

  logout() {
    localStorage.removeItem('access_token');
    this.loggedInUser.next(null);
  }

  get isLoggedIn() {
    return this.loggedInUser.asObservable();
  }
}
