import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit{
  Reading = false;
  Coding = false;
  Traveling = false;
  decsion: string = '';
  dateRangeInvalid: boolean = false;
  isSubmitted: boolean=false;
  name: string = '';
  date1: string = '';
  date2: string = '';
  timein: string = '';
  timeout: string = '';
  selectedCity: string = '';
  selectedCountry: string = '';
  states=[] as any;

  
  reactiveForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
    Date1: new FormControl('', [Validators.required]),
    Date2: new FormControl('', [Validators.required, Validators.minLength(6)]),
    timein:new FormControl('', [Validators.required]),
    timeout:new FormControl('', [Validators.required]),
    signup:new FormControl('', [Validators.required]),
   // checkbox:new FormControl('', [Validators.required]),
    dropdown:new FormControl('', [Validators.required]),
    hobbies: new FormArray([], Validators.required),
    statedropdown:new FormControl('', [Validators.required]),
    country:new FormControl('', [Validators.required]),
  });

  ngOnInit(){

}

oncountryselected(){

if(this.reactiveForm.controls.country.value){
this.selectedCountry=this.reactiveForm.controls.country.value;
}
else{
  this.selectedCountry='';
}
this.states=[];
if(this.selectedCountry=='india'){
  this.states.push('Andhra','Telengana','Tamilnadu');

}
else if(this.selectedCountry=='usa'){
  this.states.push('New York','California','Texas');
}

}
onCitySelect(){
  if(this.reactiveForm.controls.dropdown.value){
    this.selectedCity = this.reactiveForm.controls.dropdown.value;
  }
  else{
    this.selectedCity = '';
  }
if(this.selectedCity=='hyderbad'){
  this.reactiveForm.controls.statedropdown.setValue('Telengana');
}
else if(this.selectedCity=='chennai'){
  this.reactiveForm.controls.statedropdown.setValue('Tamilnadu');
}

}

onStartDateChange(){

}
onCheckboxChange(event: any) {
  const hobbiesArray = this.reactiveForm.get('hobbies') as FormArray;
  if (event.target.checked) {
    hobbiesArray.push(new FormControl(event.target.value));
  }
  else {
    const index = hobbiesArray.controls.findIndex(x => x.value === event.target.value);
    hobbiesArray.removeAt(index);
  }
}

// get hobbiesInvalid(): boolean {
//   if (this.Reading || this.Coding || this.Traveling) {
//     this.reactiveForm.controls.checkbox.setErrors({checkbox:false});
//     return false;
//   }
//   else {
//     this.reactiveForm.controls.checkbox.setErrors({checkbox:true});
//     return true;
//   }
// }

onEndDateChange() {
  this.validateDateRange();
}

private validateDateRange() {
  const start = new Date(this.date1);
  const end = new Date(this.date2);
  const diffDays = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);

  this.dateRangeInvalid = diffDays < 0 || diffDays > 15;
  if(this.dateRangeInvalid){
    this.reactiveForm.controls.Date2.setErrors({daterange:true});
  }
}
onSubmit(){
this.isSubmitted=true;
//this.hobbiesInvalid;
if (this.reactiveForm.valid) {
  console.log(this.reactiveForm.value);
} else {
  console.log('Form invalid');
}

}


}
