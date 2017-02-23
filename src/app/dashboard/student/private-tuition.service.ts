import { Injectable } from '@angular/core';
import { HttpClient } from '../../http-client';
import { PrivateTuition } from './private-tuition';
import { Response, Headers, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class PrivateTuitionService {

  constructor(private http: HttpClient) { }


  createTuition(tuition: PrivateTuition): Promise<any>{
    let createURL = "api/jobs";
    console.log("Create Tuition");
    console.log(tuition);

    var jsString = JSON.stringify(tuition); 

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append("tuition", jsString);

    let body = urlSearchParams.toString();

    return this.http.post(createURL, body)
    .toPromise()
    .then(res =>{
      console.log(res);
      return res.json();
    })
    .catch(this.handleError);
  }

  getPrivateTuition(offset):Promise<PrivateTuition[]>{
    let getURL = `api/jobs/private/${offset}`;

    return this.http.get(getURL)
    .toPromise()
    .then(res =>{
      console.log(res);
      return res.json().jobs as PrivateTuition[];
    })
    .catch(this.handleError);
  }

  getPrivateTuitionById(id):Promise<PrivateTuition>{
    console.log(id);
    
    let getURL = `api/jobs/private-detail/`+id;
    
    return this.http.get(getURL)
    .toPromise()
    .then(res =>{
      console.log(res);
      return res.json().job as PrivateTuition;
    })
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

}
