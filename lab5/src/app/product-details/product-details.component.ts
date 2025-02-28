import { Component, OnInit} from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  // imports: [],
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  product: Product | undefined;

  constructor(private route: ActivatedRoute){};

  ngOnInit(): void{
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(product => product.id === productIdFromRoute);

  }
  like(product: Product){
    if(!this.product) return;

    window.alert('Your like has been added!');
    this.product.likes+=1;
  }

}
