import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-app-nav',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './app-nav.component.html',
  styleUrl: './app-nav.component.css'
})
export class AppNavComponent {
  user:string='';
  
  constructor(private router: Router){

  }
ngOnInit(){
  const userinfo=sessionStorage.getItem('userinfo');
  if(userinfo){
    const user=JSON.parse(userinfo);
    this.user=user.username;
  }
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
