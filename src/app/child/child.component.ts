import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})

export class ChildComponent implements OnChanges {
 @Input() name: string='';
userInputname='';
@Output() changeNameEvent =new EventEmitter<string>();
@Output() emitEmojiselected =new EventEmitter<string>();
//@Input() data: string = '';

selectEmoji(selectedEmoji:string) {
  this.emitEmojiselected.emit(selectedEmoji);
  }


  emitUserName() {
    if(this.userInputname){
    this.changeNameEvent.emit(this.userInputname);
    this.userInputname='';
    }
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['name']){
      this.userInputname=this.name;
    }
  
  }

}
