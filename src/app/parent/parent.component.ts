import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { LoggerComponent } from '../logger/logger.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, CommonModule,FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  isActive = false;
  parentData: string = 'Initial Data';
  showChild: boolean = true;
  message: string = '';
  names: string[] = [];
  parentName: string = '';
  bookname: string = 'Angular';
  selectedEmoji:string='';
  changeName(nameFromChild: string) {
    console.log('Received name from child:', nameFromChild);
    this.names.push(nameFromChild);
    console.log('Updated names:', this.names);
  }
  toggleChild() {
    this.showChild = !this.showChild;
  }

  onDelete(index: number) {
    this.names.splice(index, 1);
  }
  onEdit(index: number) {
    this.parentName = this.names[index];
  }

  showEmoji(emoji:string){
    this.selectedEmoji = emoji;

  }
}
