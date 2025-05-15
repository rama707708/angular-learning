import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3925194544.
export class HomeComponent implements OnInit{
  allUsers:any;
  userList:any;
  filterusers:any;
  searchValue:string='';
// Suggested code may be subject to a license. Learn more: ~LicenseLog:190204476.
  ngOnInit() {
    this.getallusers();
  }

// Suggested code may be subject to a license. Learn more: ~LicenseLog:890562144.
  constructor(private router: Router, private userservice:UserService){
const userRole=sessionStorage.getItem('role');
if (userRole!='admin'){

// Suggested code may be subject to a license. Learn more: ~LicenseLog:3197400264.
  this.router.navigate(['/profile']);
}


  }

getallusers(){
this.userservice.getallusers().subscribe((res:any)=>{
console.log(res);
this.userList=res.users;

})
  }

search(){

this.filterusers=[];
this.userservice.searchUser(this.searchValue).subscribe((res:any)=>{
  console.log('searchuser', res)
  this.userList=res.users;

// debugger;
//  this.filterusers=this.allUsers.filter((user:any)=>user.firstName.toLowerCase().includes(this.searchValue.toLowerCase()));
//  this.userList=this.filterusers;
//  debugger;
//  if(this.searchValue==''){
//   this.userList=res.users;
//  }
  });

  }

  sorting(){
   
    this.userservice.sortUser().subscribe((res:any)=>{
      console.log('sort', res)
  this.userList=res.users;
  });

}
}
