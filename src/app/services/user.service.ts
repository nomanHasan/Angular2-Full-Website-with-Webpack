import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import {User } from '../models/user';
import { HttpClient} from '../http-client';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(private http: Http, private authHttp: HttpClient) { }

  searchByUsername(term: string): Promise<any>{
    return this.http.get('api/users/username/'+term)
    .toPromise()
    .then((response:Response)=> {
      console.log(response.json());
      
      return response.json();
    })
    .catch(this.handleError);
  }

  searchByContactNo(term: string): Promise<any>{
    return this.http.get('api/users/contactno/'+term)
    .toPromise()
    .then((response:Response)=> {      
      return response.json();
    })
    .catch(this.handleError);
  }

  getUserInfo(term: string): Promise<any>{
    return this.authHttp.get('api/account/user_info')
    .toPromise()
    .then(res=>{
      
      return res.json();
    })
    .catch(this.handleError);
  }

  updateAddress(location: any): Promise<any>{
    var updateAddressUrl = "api/accounts/address";
    console.log(location);
    
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append("district", location.district);
    urlSearchParams.append("city", location.city);
    urlSearchParams.append("thana", location.thana);
    urlSearchParams.append("zone", location.zone);
    urlSearchParams.append("address", location.address);
    urlSearchParams.append("street", location.street);
    urlSearchParams.append("house", location.house);

    let body = urlSearchParams.toString();

    console.log(body);
    
    return this.authHttp.post(updateAddressUrl, body )
    .toPromise()
    .then(res=>{

      console.log(res.json());
      if(res.json().success){
        
        localStorage.setItem("location", JSON.stringify(res.json().location));
      }
      return res.json();
    })
    .catch(this.handleError);
  }

  updateTeacherInfo(teacherInfo: any): Promise<any>{
    var updateAddressUrl = "api/accounts/teacherinfo";
    console.log(teacherInfo);
    
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append("institution", teacherInfo.institution);
    urlSearchParams.append("level", teacherInfo.level);
    urlSearchParams.append("sex", teacherInfo.sex);
    urlSearchParams.append("age", teacherInfo.age);

    let body = urlSearchParams.toString();

    console.log(body);
    
    return this.authHttp.post(updateAddressUrl, body )
    .toPromise()
    .then(res=>{

      console.log(res.json());
      if(res.json().success){
        
        localStorage.setItem("teacherInfo", JSON.stringify(res.json().teacherInfo));
      }
      return res.json();
    })
    .catch(this.handleError);
  }

  createUser(user: User){
    var creatUrl = "api/users/create";
    var headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append("username", user.username);
    urlSearchParams.append("name",user.name);
    urlSearchParams.append("contactNo", user.contactNo);
    urlSearchParams.append("email", user.email);
    urlSearchParams.append("password", user.password);
    urlSearchParams.append("accountType", user.accountType);

    let body = urlSearchParams.toString();

    return this.http.post(creatUrl, body, {headers: headers})
    .toPromise()
    .then((res:Response)=>{
      return res.json().data;
    }).catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

}
