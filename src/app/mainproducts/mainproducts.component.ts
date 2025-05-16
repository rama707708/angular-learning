import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';
declare var bootstrap: any;
@Component({
  selector: 'app-mainproducts',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './mainproducts.component.html',
  styleUrl: './mainproducts.component.css'
})
export class MainproductsComponent implements OnInit{
  allProducts: any;
  modalRefDelete: any;
  selectedProduct:any={};
  modalRefEdit:any;
constructor(private userservice:UserService){

}
ngOnInit() {
this.getAllProducts();
}
getAllProducts(){
  this.userservice.getAllProducts().subscribe((res:any)=>{
    console.log(res)
  this.allProducts=res.products;

  })
}
ngAfterViewInit() {
  const modalElementDelete = document.getElementById('delModal');
  const modalElementEdit = document.getElementById('editModal');
  if (modalElementDelete) {
    this.modalRefDelete = new bootstrap.Modal(modalElementDelete); // @ts-ignore for TS to ignore bootstrap global
   
  }
  if (modalElementEdit) {
    this.modalRefEdit = new bootstrap.Modal(modalElementEdit); // @ts-ignore for TS to ignore bootstrap global
   
  }
}

onEdit(product:any){
  
this.selectedProduct=product;
this.modalRefEdit.show();
}

onDelete(product:any){
this.userservice.deleteProducts(product.id).subscribe((res:any)=>{
console.log(res);
if(res.isDeleted==true){
this.modalRefDelete.show();
}
});

}

save(){
  this.userservice.editProducts(this.selectedProduct.id, this.selectedProduct).subscribe((res:any)=>{
    console.log(res)
      })
}

}
