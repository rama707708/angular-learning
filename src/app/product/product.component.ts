import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{productservice} from './../services/product-service'

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
product='';
price=0;
constructor(private productService:productservice) {}

addProdct(){
  this.productService.addProduct({product:this.product,price:this.price})
}

}
