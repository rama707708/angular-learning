import { Component } from '@angular/core';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  constructor(private cartService: CartService) {}

  addProduct() {
    const product = { name: 'Apple', price: 1.99 };
    this.cartService.addToCart(product);
  }
}
