import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
declare var bootstrap: any;
@Component({
  selector: 'app-createuser',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './createuser.component.html',
  styleUrl: './createuser.component.css'
})
export class CreateuserComponent {
isSubmitted=false;

  myForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    contacttype:new FormControl('',[Validators.required])
  });
  modalRefAdd: any;
  constructor(){

  }
  ngAfterViewInit() {
    const modalElementAdd = document.getElementById('addModal');

    if (modalElementAdd) {
      this.modalRefAdd = new bootstrap.Modal(modalElementAdd); // @ts-ignore for TS to ignore bootstrap global

    }

  }
  onSubmit() {
    this.isSubmitted = true;
    if (this.myForm.valid) {
      this.modalRefAdd.show();
      this.myForm.reset();
      sessionStorage.setItem('user', JSON.stringify(this.myForm.value));
      this.isSubmitted = false;
   }
   else{
      console.log(this.myForm.value);
  }
  }
}
