import { Component } from '@angular/core';
import { TemplateFormComponent } from "../template-form/template-form.component";
import { ReactiveFormComponent } from "../reactive-form/reactive-form.component";
import { JavascriptFormComponent } from "../javascript-form/javascript-form.component";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [TemplateFormComponent, ReactiveFormComponent, JavascriptFormComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

}
