import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  // Suggested code may be subject to a license. Learn more: ~LicenseLog:2937843102.
  constructor(private userService: UserService, private router: Router) { }
  username: string = '';
  password: string = '';
  loggedinUserDetail: any='';

  ngOnInit(){

  }

  login() {
    this.userService.getUser(this.username, this.password).subscribe((res: any) => {
      console.log(res);
      if (res) {
        const user = JSON.stringify(res);
        this.userService.userInfo.next(user);
        console.log(user);
        sessionStorage.setItem('userinfo', user);
       
        this. getloggedinUserDetail();
      }
    },
      (error) => {
        if (error) {
          console.error('Login failed', error);
          const errorid = document.getElementById('errormes');
          if (errorid) {
            errorid.innerHTML = 'Login failed. Please check your credentials!';
          }
        }
      });
  }

  getloggedinUserDetail(){
this.userService.getUserInfo().subscribe((res:any)=>{
sessionStorage.setItem('role', res.role)
this.router.navigate(['/home']);

}
)

  }
}