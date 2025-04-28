import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-app-nav',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './app-nav.component.html',
  styleUrl: './app-nav.component.css'
})
export class AppNavComponent {
  user:string='';
  
  constructor(private router: Router, private userService:UserService){

  }
ngOnInit(){
  this.userService.userInfo.subscribe(user=>{
    if(user){
      const userinfo=JSON.parse(user);
      this.user=userinfo.username;
    }
  });
}

  isLoggedIn(): boolean {
   // return !!sessionStorage.getItem('userinfo');
   if (sessionStorage.getItem('userinfo') !== null) {
    return true;
  } else {
    return false;
  }

  }
  
  logout(){
    sessionStorage.removeItem('userinfo');
    this.router.navigate(['/login']);
  }
}
