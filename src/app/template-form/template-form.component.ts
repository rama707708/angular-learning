import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  Reading = false;
  Coding = false;
  Traveling = false;
  decsion: string = '';


  name: string = '';
  date: string = '';
  timein: string = '';
  timeout: string = '';

  selectedCity: string = '';

  get hobbiesInvalid(): boolean {
   if(this.Reading || this.Coding || this.Traveling){
    return false;
   }
  else {
    return true;
  }
  }
 
  onSubmit(form: any) {
    debugger;
    if (form.valid && !this.hobbiesInvalid) {
      console.log('Form submitted successfully!', form.value);
    } else {
      console.log('Form has errors.');
    }
  }
}