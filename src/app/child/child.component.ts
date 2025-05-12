import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule,CommonModule,HighlightDirective],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})

export class ChildComponent implements OnChanges {
  username: string = '';
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  isDisabled = false;
  isSpecial = true;
  myColor = 'pink';
  titleText = 'Angular Property Binding Demo';
  isHighlighted:boolean=true;
  selectedColor:string='';
 @Input() name: string='';
 @Input() favbook: string='';
 @Input() Myfavsport: string = '';
userInputname='';
@Output() changeNameEvent =new EventEmitter<string>();
@Output() emitEmojiselected =new EventEmitter<string>();
@Output() greet = new EventEmitter<string>();
//@Input() data: string = '';

bestWishes() {
  this.greet.emit("best of luck");
}

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
