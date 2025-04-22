import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class productservice {
    private products = new BehaviorSubject<any[]>([]);
    product$ = this.products.asObservable();

    addProduct(item:any){ 
    const currentproduct = this.products.value;
    currentproduct.push(item);
    this.products.next(currentproduct);
    }
  }