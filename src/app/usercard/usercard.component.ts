import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { UserlistComponent } from '../userlist/userlist.component';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.css'
})
export class UsercardComponent {
@Input() user: { name: string; age: number; } ={name:'', age:0};
@Input() username: string = '';
@Input() role: string = '';
@ViewChild(UserlistComponent) userListComponentRef!: UserlistComponent;
getRoleStyle() {
  switch (this.role.toLowerCase()) {
    case 'admin':
      return { color: 'white', background: 'red', padding: '4px', borderRadius: '4px' };
    case 'contributor':
      return { color: 'white', background: 'blue', padding: '4px', borderRadius: '4px' };
    default:
      return { color: 'white', background: 'gray', padding: '4px', borderRadius: '4px' };
  }
}
}
