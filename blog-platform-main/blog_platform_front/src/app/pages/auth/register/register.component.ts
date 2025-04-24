import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    if (this.password === this.confirmPassword) {
      this.authService.register({ email: this.email, password: this.password }).subscribe(
        (res) => {
          localStorage.setItem('token', res.token); // Сохраняем токен
          this.router.navigate(['/posts']);  // Перенаправляем на страницу с постами
        },
        (err) => {
          console.error('Ошибка при регистрации', err);
        }
      );
    } else {
      alert('Пароли не совпадают!');
    }
  }
}
