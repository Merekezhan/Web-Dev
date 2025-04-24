

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './pages/auth/login/login.component';
// import { PostListComponent } from './components/post-list/post-list.component';

// const routes: Routes = [
//   { path: '', component: PostListComponent },
//   { path: 'login', component: LoginComponent },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { PostListComponent } from './components/post-list/post-list.component';  // Импортируй компоненты

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },  // Главная страница (переход на посты)
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'posts', component: PostListComponent },  // Страница с постами
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

