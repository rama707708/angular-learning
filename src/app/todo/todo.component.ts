
declare var bootstrap: any;
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './todo.component.html', 
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  todoData:any;
  todorowData:any;
  displayDialog: boolean = false;
  modalRef: any;
  modalRefEdit:any;
  modalRefsuccess:any;
  id:any;
  completed:boolean=false;

  constructor(private userservice: UserService){

  }
  ngOnInit(): void {
  this.gettodos();
  }

  ngAfterViewInit(): void {
    const modalElement = document.getElementById('deleteModal');
    const modalElementedit = document.getElementById('editModal');//successModal
    const modalElementsuccess = document.getElementById('successModal');
    if (modalElement) {
      this.modalRef = new bootstrap.Modal(modalElement);
    }
     if(modalElementedit){
      this.modalRefEdit = new bootstrap.Modal(modalElementedit);
    }
    if(modalElementsuccess){
      this.modalRefsuccess = new bootstrap.Modal(modalElementsuccess);
    }
  }

  gettodos(){
    this.userservice.gettodos().subscribe((data:any)=>{
      console.log(data);
      this.todoData=data.todos;
    })
  }
  
onEdit(todo:any){

// Suggested code may be subject to a license. Learn more: ~LicenseLog:4204697641.
//this.userservice.edittodo(todo.id,{ todo:'updated',completed:true}).subscribe((data:any)=>{
this.id=todo.id;
this.todorowData=todo.todo;
this.completed=todo.completed;
this.modalRefEdit.show();

//  console.log(data);
// })


  }
  onDelete(todo:any){
    //this.modalRef.show();
    
    this.userservice.deletetodo(todo.id).subscribe((data:any)=>{
   console.log(data)
   this.id=data.id;
   if(data.isDeleted==true){
    this.modalRef.show();
   }
    })
  }

  save(){
    debugger;
this.userservice.edittodo(this.id,{ todo:this.todorowData,completed:this.completed}).subscribe((data:any)=>{
  console.log('save', data);
  this.modalRefsuccess.show();
})
  }

 }



