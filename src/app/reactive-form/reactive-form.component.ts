import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit{
  Reading = false;
  Coding = false;
  Traveling = false;
  decsion: string = '';
  dateRangeInvalid: boolean = false;

  name: string = '';
  date1: string = '';
  date2: string = '';
  timein: string = '';
  timeout: string = '';
  selectedCity: string = '';
  
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  ngOnInit(){

}



}
