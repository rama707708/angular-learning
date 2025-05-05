import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
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
  onStartDateChange() {
    // if (this.date1) {
    //   const start = new Date(this.date1);
    //   const end = new Date(start);
    //   end.setDate(start.getDate() + 15);
      // Auto-fill date2
    //   this.date2 = end.toISOString().split('T')[0];
    //   this.dateRangeInvalid = false;
    // }
  }
  onEndDateChange() {
    // if (this.date2) {
    //   const end = new Date(this.date2);
    //   const start = new Date(end);
    //   start.setDate(end.getDate() - 15);
    //   this.date1 = start.toISOString().split('T')[0];
    //   this.dateRangeInvalid = false;
    // }
    console.log('User changed date2 to:', this.date2);
    this.validateDateRange();
  }
  
  private validateDateRange() {
    const start = new Date(this.date1);
    const end = new Date(this.date2);
    const diffDays = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);

    this.dateRangeInvalid = diffDays < 0 || diffDays > 15;
  }

  get hobbiesInvalid(): boolean {
    if (this.Reading || this.Coding || this.Traveling) {
      return false;
    }
    else {
      return true;
    }
  }

  // onSubmit(form: any) {
  //   debugger;
  //   if (form.valid && !this.hobbiesInvalid) {
  //     console.log('Form submitted successfully!', form.value);
  //   } else {
  //     console.log('Form has errors.');
  //   }
  // }
  onSubmit(form: any) {
    this.validateDateRange();
    if (!form.valid) {
      return;
    }

  
    if (this.dateRangeInvalid) {
      return;
    }

    this.dateRangeInvalid = false;
    console.log('Form submitted:', { date1: this.date1, date2: this.date2 });
  }
}