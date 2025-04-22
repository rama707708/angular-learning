import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart-service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cart: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(items => {
      this.cart = items;
    });
  }

  remove(index: number) {
    this.cartService.removeFromCart(index);
  }
  clear(){
    this.cartService.clearCart();
  }
}
