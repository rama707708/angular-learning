import { Component, getNgModuleById, OnInit } from '@angular/core';
import { productservice } from '../services/product-service';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart-service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  standalone: true,
  imports:[CommonModule,FormsModule]
})
export class ProductListComponent implements OnInit {
onSearchTextChange($event: Event) {
throw new Error('Method not implemented.');
}
  
  searchTerm: string = '';
  price = 0;
  productList: any;
  filteredProductList: any;

  constructor(private productservice: productservice, private cartservice:CartService) {

  }

  ngOnInit(): void {
    this.getProduct();
    this.filteredProductList=this.productList
  }

  getProduct() { 
    this.productservice.product$.subscribe((data)=>{
      console.log(data);
      this.productList=data;
      this.filteredProductList = [...this.productList]
    });
  }

  filterProducts() {
    const search = this.searchTerm.trim().toLowerCase();
  
    if (!search) {
      this.filteredProductList = [...this.productList];
      return;
    }
  
    this.filteredProductList = this.productList.filter((item: any) =>
      (item.product || '').toLowerCase().includes(search)
    );
  }

  addToCart(product:any) {
    this.cartservice.addToCart(product);
    console.log(product);  
  }
}
