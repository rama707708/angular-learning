import 'bootstrap';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import bootstrap from 'bootstrap';



@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './todo.component.html', 
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  todoData:any;
  displayDialog: boolean = false;
  modalRef: any;
  constructor(private userservice: UserService){

  }
  ngOnInit(): void {
  this.gettodos();
  }

  ngAfterViewInit(): void {
    const modalElement = document.getElementById('deleteModal');
    if (modalElement) {
      this.modalRef = new bootstrap.Modal(modalElement);
    }
  }

  gettodos(){
    this.userservice.gettodos().subscribe((data:any)=>{
      console.log(data);
      this.todoData=data.todos;
    })
  }
  
  onEdit(){

  }
  onDelete(todo:any){
    this.userservice.deletetodo(todo.id).subscribe((data:any)=>{
console.log('del', data)
    })
  }

 

 }



