import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';

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

edittodo(id:any,todo:any){
  return this.http.put('https://dummyjson.com/todos/'+id, todo);

}

getproducts(){
  return this.http.get('https://dummyjson.com/products');

}
searchProducts(query: string) {
  return this.http.get<any>(`https://dummyjson.com/products/search?q=${query}`).pipe(
     // extract only products
    catchError(error => {
      console.error('Error occurred:', error);
      return of([]); // return empty array on error
    })
  );
}

getAllProducts(){
  return this.http.get('https://dummyjson.com/products');

}
editProducts(id:any,products:any){
  return this.http.patch('https://dummyjson.com/products/'+id, products);

}
deleteProducts(id:any){
  return this.http.delete('https://dummyjson.com/products/'+id);
}

}