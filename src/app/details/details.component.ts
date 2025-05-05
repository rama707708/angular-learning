import { Component, OnInit } from '@angular/core';
import { TemplateFormComponent } from "../template-form/template-form.component";
import { ReactiveFormComponent } from "../reactive-form/reactive-form.component";
import { JavascriptFormComponent } from "../javascript-form/javascript-form.component";
import { productservice } from '../services/product-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [TemplateFormComponent, ReactiveFormComponent, JavascriptFormComponent,CommonModule,FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  radiovalue:string = '';
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

  userselectedradio(value:any){
  this.radiovalue=value;


}
}
