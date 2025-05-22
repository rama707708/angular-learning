import { Component, OnInit } from '@angular/core';
import { TemplateFormComponent } from "../template-form/template-form.component";
import { ReactiveFormComponent } from "../reactive-form/reactive-form.component";
import { JavascriptFormComponent } from "../javascript-form/javascript-form.component";
import { productservice } from '../services/product-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CanComponentDeactivate } from '../userlist/candeactivate';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [TemplateFormComponent, ReactiveFormComponent, JavascriptFormComponent,CommonModule,FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit , CanComponentDeactivate{
  radiovalue:string = '';
  isDirty: boolean = false;
  constructor (private productService:productservice){
   
  }
  canDeactivate(): boolean {
    if (!this.isDirty) {
      return true;
    }
    else {
    const confirmLeave = confirm('You have unsaved changes. Are you sure you want to leave?');
    if (confirmLeave) {
      this.isDirty = false; // reset state
    }
    return confirmLeave;
  }
    
     
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
  this.isDirty = true;

}
}
