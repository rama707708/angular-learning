import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
  
})
export class UserService {

  constructor(private http: HttpClient) { 

  }
  getUser()
  {
    const body = {
      username: 'emilys',
      password: 'emilyspass'
    };
    return this.http.post('https://dummyjson.com/auth/login', body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: false // <-- important
    })
}
}