// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app.component';
// import { HttpClientModule } from '@angular/common/http';
// import { AlbumsService } from './services/albums.service';
// import { FormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module'; 
// import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

// import { HomeComponent } from './components/home/home.component';
// import { AboutComponent } from './components/about/about.component';
// import { AlbumsComponent } from './components/albums/albums.component';
// import { AlbumPhotosComponent } from './components/album-photos/album-photos.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     AboutComponent,
//     AlbumsComponent,
//     AlbumDetailComponent,
//     AlbumPhotosComponent
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     AppRoutingModule, // ✅ Оставляем только его
//     FormsModule,
//     CommonModule,
//     RouterModule
//   ],
//   providers: [AlbumsService],
//   bootstrap: [AppComponent]
// })
// export class AppModule {}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // ✅ Импорт маршрутизации
import { AlbumsService } from './services/albums.service';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { AlbumPhotosComponent } from './components/album-photos/album-photos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AlbumsComponent,
    AlbumDetailComponent,
    AlbumPhotosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, // ✅ Здесь подключаем маршрутизацию
    FormsModule,
  ],
  providers: [AlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
