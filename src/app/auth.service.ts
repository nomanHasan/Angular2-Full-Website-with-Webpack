import { Injectable } from '@angular/core';
import {Headers, Http, URLSearchParams, Response } from '@angular/http';
import { User } from './user';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  username: string = "";
  accountType: string = "";
  authToken: string = "";

  constructor(private http: Http){}

  authUrl = "api/users/authenticate";

  login(username, password): Promise<any>{
    
    var headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username',username);
    urlSearchParams.append('password',password);
    let body = urlSearchParams.toString();

    console.log(this.authUrl, body, headers);

    return this.http.post(this.authUrl, body, {headers: headers})
    .toPromise()
    .then((response: Response)=>{
      console.log(response);
       var body = response.json();
       if(body.success == true){
          localStorage.setItem('username', body.payload.username );
          localStorage.setItem("accountType", body.payload.accountType);
          localStorage.setItem("name", body.payload.name);
          localStorage.setItem("contactNo", body.payload.contactNo);
          localStorage.setItem("location", JSON.stringify(body.payload.location));
          localStorage.setItem("email", body.payload.email);
          localStorage.setItem("auth_token", body.token);
       }
       return body;
    })
    .catch(this.handleError);
  }

  isLoggedIn(): boolean{
    this.username = localStorage.getItem("username");
    if(this.username != null && localStorage.getItem("auth_token")){
      if(this.username.length != 0){
        return true;
      }else{
        return false;
      }
    }else {
      return false;
    }
  }

  isTeacher() : boolean {
    if(this.isLoggedIn()){
      this.accountType = localStorage.getItem("accountType");
      if(this.accountType != null){
        if(this.accountType.length != 0){
          if(this.accountType == "Teacher"){
            return true;
          }else return false;
        }else return false;
      }else return false;
    }else return false;
  }

  isStudent() : boolean {
    if(this.isLoggedIn()){
      this.accountType = localStorage.getItem("accountType");
      if(this.accountType != null){
        if(this.accountType.length != 0){
          if(this.accountType == "Guardian/Student"){
            return true;
          }else return false;
        }else return false;
      }else return false;
    }else return false;
  }

  getUser(){
    var user = new User("","","","","","");
    user.username = localStorage.getItem("username");
    user.name = localStorage.getItem("name");
    user.email = localStorage.getItem("email");
    user.contactNo = localStorage.getItem("contactNo");
    user.accountType = localStorage.getItem("accountType");
    user.location = JSON.parse(localStorage.getItem("location"));

    console.log("GetUser called "+ user);
    console.log(user);
    
    
    return user;
  }

logout() {
  localStorage.setItem('username', "" );
  localStorage.setItem("accountType", "");
  localStorage.setItem("auth_token", "");
  localStorage.setItem("name", "");
  localStorage.setItem("contactNo", "");
  localStorage.setItem("email", "");
  localStorage.setItem("location", "");
}

 private handleError(error: any) : Promise<any>{
    console.error('An error Occured FOR WHAT REASON WHO KNOWS ', error);
    return Promise.reject(error.message|| error);
  }
}
