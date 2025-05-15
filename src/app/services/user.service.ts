import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
  
})
export class UserService {
  userInfo = new BehaviorSubject<any>(null);
//$userInfo = this.userInfo.asObservable();

  constructor(private http: HttpClient) { 


  }
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1524749763.
  getUser(username:string,password:string)
  {
    const body = {
      username: username,
      password: password
    };
    return this.http.post('https://dummyjson.com/auth/login', body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: false // <-- important
    })
}

/* providing access token in bearer */
getUserInfo(){
  return this.http.get('https://dummyjson.com/user/me');

}

getallusers(){
  return this.http.get('https://dummyjson.com/users');

 

}

searchUser(name:any){
  return this.http.get('https://dummyjson.com/users/search?q='+name)

}

sortUser(){
  return this.http.get('https://dummyjson.com/users?sortBy=firstName&order=asc');

}

gettodos(){
  
  return this.http.get('https://dummyjson.com/todos');


}

deletetodo(id:any){
  return this.http.delete('https://dummyjson.com/todos/'+id);

}

getproducts(){
  return this.http.get('https://dummyjson.com/products');

}
}
