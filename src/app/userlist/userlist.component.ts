import { Component } from '@angular/core';
import { UsercardComponent } from '../usercard/usercard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [UsercardComponent,CommonModule],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {
  users = [
    { name: 'Alice', role: 'Admin' },
    { name: 'Bob', role: 'Contributor' },
    { name: 'Charlie', role: 'Viewer' }
  ];
}
