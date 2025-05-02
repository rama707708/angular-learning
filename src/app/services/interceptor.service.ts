import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
debugger;
    const userinfo = sessionStorage.getItem('userinfo');
    console.log("userinfo from session:",userinfo);
    if (userinfo) {
      const token = JSON.parse(userinfo).accessToken;
      console.log("Token from userinfo:",token);
      if (token) {
        console.log("Token found");
      } else {
        console.log("No token found");
      }
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      });
    } else {
      console.log("No token found");
    }
    return next.handle(request);
  }
}
export * from './interceptor.service';