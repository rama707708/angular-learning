import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userName:string='';
  
constructor( private userservice:UserService){
  this.userservice.getUserInfo().subscribe((res:any)=>{
this.userName=res.firstName;
    console.log(res);
  })

}


}
