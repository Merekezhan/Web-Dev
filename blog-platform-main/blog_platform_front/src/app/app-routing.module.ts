
// import { Routes } from '@angular/router';
// import { RouterModule } from '@angular/router';
// import { LoginComponent } from './pages/auth/login/login.component';  // Импортируем standalone компоненты
// import { RegisterComponent } from './pages/auth/register/register.component';
// import { PostListComponent } from './components/post-list/post-list.component';  // Пример компонента с постами

// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'posts', component: PostListComponent },
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
// ];

// export const AppRoutingModule = RouterModule.forRoot(routes);
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { HomeComponent } from './pages/home/home/home.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },  // Убедись, что добавлен правильный маршрут для HomeComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


