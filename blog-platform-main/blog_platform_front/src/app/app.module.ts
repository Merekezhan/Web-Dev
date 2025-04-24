
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

// import { AppRoutingModule } from './app-routing.module';
// import { AuthService } from './services/auth.service';  // Импортируем AuthService

// @NgModule({
//   imports: [
//     BrowserModule,
//     FormsModule,
//     HttpClientModule,
//     AppRoutingModule,  // Оставляем AppRoutingModule для маршрутизации
//   ],
//   providers: [AuthService]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Импортируем FormsModule для использования ngModel
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';  // Импортируем AuthService
import { PostCardComponent } from './components/post-card/post-card.component';

// Компоненты проекта
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/home/home/home.component';
import { PostFormComponent } from './components/post-form/post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,  // Добавляем компонент Login
    HomeComponent,    // Добавляем компонент Home
    PostFormComponent,  // Добавляем компонент для создания поста
  ],
  imports: [
    BrowserModule,
    FormsModule,   // Не забудь добавить FormsModule
    HttpClientModule,
    AppRoutingModule,  // Маршрутизация
  ],
  providers: [AuthService],  // Сервис для аутентификации
  bootstrap: [AppComponent],  // Основной компонент
})
export class AppModule { }
