// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { categories } from './category'

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   categories = categories;
// }
import { Component } from '@angular/core';
import { categories } from './category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = categories;
}
