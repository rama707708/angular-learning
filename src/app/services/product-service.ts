import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  
  export class productservice {
    constructor(private http: HttpClient) { 


    }
    private products = new BehaviorSubject<any[]>([]);
    product$ = this.products.asObservable();

    addProduct(item:any){ 
    const currentproduct = this.products.value;
    currentproduct.push(item);
    this.products.next(currentproduct);
    }

  async getProducts(): Promise<any>{
     return await this.http.get('https://dummyjson.com/products').toPromise();
  }

  }