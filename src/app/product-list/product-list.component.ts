import { Component, Input } from '@angular/core';
import {Product, products} from '../products'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-list',
  // imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [...products];
  constructor(private route: ActivatedRoute,){}
  ngonInit(): void{
    this.route.paramMap.subscribe(param => {
      const categoryName = param.get('categoryName');
      if(categoryName){
        this.products = products.filter(product => product.category === categoryName);
      }
      else{
        this.products = products;
      }
    });
  }
  share(){
    window.open('https://t.me/share/url?url=https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000')

  }
  shareProd(product: Product){
    window.open("https://telegram.me/share/url?url=" + product.productLink)
  }
  onNotify(){
    window.alert('You will be notified when the product goes on sale');
  }
  onDeleteProduct(productDelete: Product){
    const index =this.products.findIndex(product => product.id === productDelete.id);
    if (index != -1){
      this.products.splice(index,1);
    }
  }
}
