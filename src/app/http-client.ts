import { Injectable } from '@angular/core';
import {Headers, Http } from '@angular/http';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpClient {
  constructor(private http: Http) {}

  createAuthorizationHeader(headers: Headers) {
    var auth_token = localStorage.getItem("auth_token");
    headers.append('x-access-token', auth_token);
    
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new Headers();
    
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
    console.log({url, data, headers: headers });
    
    return this.http.post(url, data, {
      headers: headers
    });
  }
}
