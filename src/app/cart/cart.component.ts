import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart-service';
import { CommonModule } from '@angular/common';
import { productservice } from '../services/product-service';
import { CartItem } from '../cartItem';

@Component({
  selector: 'app-cart',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
cartItems:CartItem[]=[];
// Suggested code may be subject to a license. Learn more: ~LicenseLog:4037716939.
total:number=0;
constructor(private cartService: CartService, private productservice:productservice) {}
ngOnInit() {
this.cartService.cart$.subscribe(items => {
this.cartItems=[];
items.forEach((item:any)=>

{
const filteredIndex=this.cartItems.findIndex((cartItem:CartItem)=>cartItem.product==item.product);
if( filteredIndex==-1){
  const cartItem=new CartItem();
  cartItem.product=item.product;
  cartItem.price=item.price;
  cartItem.quantity=1;
  this.cartItems.push(cartItem);
}
else{
this.cartItems[filteredIndex].quantity++;
}
});
this.total=this.getTotal();
});

}
getTotal(){
  let total=0;
  this.cartItems.forEach((item:CartItem)=>{
    total+=item.price*item.quantity;
  });
  return total;
}

  remove(index: number) {
    this.cartService.removeFromCart(index);
  }
  clear(){
    this.cartService.clearCart();
  }
}

