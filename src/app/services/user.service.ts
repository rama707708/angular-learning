import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
  
})
export class UserService {


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
}