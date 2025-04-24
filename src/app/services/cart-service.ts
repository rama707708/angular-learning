import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private cart = new BehaviorSubject<any[]>([]);
  cart$ = this.cart.asObservable();

  addToCart(item: any) {
    const currentCart = this.cart.value;
    const newArry=[...currentCart, item];
    this.cart.next(newArry);
  }

  removeFromCart(index: number) {
    const updatedCart = this.cart.value.filter((_, i) => i !== index);
    this.cart.next(updatedCart);
  }

  clearCart() {
    this.cart.next([]);
  }
}
