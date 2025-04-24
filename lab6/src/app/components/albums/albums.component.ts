// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-albums',
//   imports: [],
//   templateUrl: './albums.component.html',
//   styleUrl: './albums.component.css'
// })
// export class AlbumsComponent {

// }
import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe(data => {
      this.albums = data;
    });
  }
  trackById(index: number, album: any): number {
    return album.id;
  }
  

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }
}

