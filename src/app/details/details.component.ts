import { Component, OnInit } from '@angular/core';
import { TemplateFormComponent } from "../template-form/template-form.component";
import { ReactiveFormComponent } from "../reactive-form/reactive-form.component";
import { JavascriptFormComponent } from "../javascript-form/javascript-form.component";
import { productservice } from '../services/product-service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [TemplateFormComponent, ReactiveFormComponent, JavascriptFormComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  constructor (private productService:productservice){

  }
  async ngOnInit(){
    await this.showProducts();
  }
  async showProducts(){
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2303937232.
    const response = await this.productService.getProducts();
    console.log(response);
    const products  = response.products;
    console.log(products);
  }

}
