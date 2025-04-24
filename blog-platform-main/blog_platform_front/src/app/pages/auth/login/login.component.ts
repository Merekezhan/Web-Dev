// // src/app/login/login.component.ts

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// // import { AuthService } from '../services/auth.service';  
// import { AuthService } from '../../../services/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   email = '';     
//   password = '';  

//   constructor(private authService: AuthService, private router: Router) {}


//   onLogin() {
//     this.authService.login({ email: this.email, password: this.password }).subscribe(
//       (res) => {
//         localStorage.setItem('token', res.token);  // Сохраняем токен в localStorage
//         this.router.navigate(['/posts']);  // Перенаправляем на страницу с постами
//       },
//       (err) => {
//         console.error('Ошибка при входе', err);  // Если ошибка, выводим в консоль
//       }
//     );
//   }
// }
import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.email, this.password);
  }
}


