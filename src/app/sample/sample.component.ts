import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css'
})
export class SampleComponent {

  searchControl = new FormControl('');
  results: any[] = [];


  constructor(private userService: UserService) {
    
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => this.userService.searchProducts(query ?? '')) //
    ).subscribe((data: any[]) => {
      this.results = data;
    });

    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe((data:any) => {
      this.userService.searchProducts(data ?? '').subscribe((res:any)=>{
    this.results=res.products;
      })
    })
    
     
    
  }

}
