import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import{productservice} from './../services/product-service'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
productList:any[]=[];
products:any[]=[];
product='';
price = 0;
constructor(private productService:productservice, private userservice:UserService) {}

  ngOnInit() {
   this.userservice.getUser().subscribe(
    (res:any) => console.log('Login successful:', res),
    (err:any) => console.error('Login failed:', err)
  );
 

  this.productService.product$.subscribe(products => {
    this.productList = products;
  });
  }

addProdct(){
const filteredProducts = this.productList.filter(product => product.product === this.product);
if(filteredProducts&&filteredProducts.length>0)
{
  alert('product exist');
    return;
}
if(this.price<=0){
  alert('price should be greater than 0');
  return;

}
 this.products.push({product:this.product,price:this.price})
  this.productService.addProduct({product:this.product,price:this.price});
  this.product='';
  this.price=0;
  
}
ngOnDestroy(): void {
  
}
}