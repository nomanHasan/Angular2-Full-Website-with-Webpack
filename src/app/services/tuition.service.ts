import { Injectable } from '@angular/core';
import { HttpClient } from '../http-client';
import { Tuition } from '../models/tuition';
import { Response, Headers, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TuitionService {

  constructor(private http: HttpClient) { }

  
  getPublicTuition(offset):Promise<Tuition[]>{
    let getURL = `api/jobs/public/${offset}`;
    
    return this.http.get(getURL)
    .toPromise()
    .then(res =>{
      console.log("RES FROM SERVICE");
      
      console.log(res);
      return res.json().jobs as Tuition[];
    })
    .catch(this.handleError);
  }

  getPublicTuitionById(id):Promise<Tuition>{
    console.log(id);
    
    let getURL = `api/jobs/public-detail/`+id;
    
    return this.http.get(getURL)
    .toPromise()
    .then(res =>{
      console.log(res);
      return res.json().job as Tuition;
    })
    .catch(this.handleError);
  }

  applyForTuition(id, offer): Promise<any>{
    // console.log("ID: ");
    // console.log(id);
  
    let applyURL = `api/jobs/apply-tuition`;

    let urlSearchParams = new URLSearchParams();

    urlSearchParams.append("offer", offer);
    urlSearchParams.append("jobId", id);
    var body = urlSearchParams.toString();

    return this.http.post(applyURL, body)
    .toPromise()
    .then(res => {
      return res.json();
    })
    .catch(this.handleError);          
  }

  getAppliedTuition(offset): Promise<Tuition[]>{
    let getURL = `api/jobs/applied/${offset}`;
    
    return this.http.get(getURL)
    .toPromise()
    .then(res =>{
      console.log("RES FROM SERVICE");
      
      console.log(res);
      return res.json().jobs as Tuition[];
    })
    .catch(this.handleError);
  }

  getAppliedTuitionById(id):Promise<Tuition>{
    console.log(id);
    
    let getURL = `api/jobs/applied-detail/`+id;
    
    return this.http.get(getURL)
    .toPromise()
    .then(res =>{
      console.log(res);
      return res.json().job as Tuition;
    })
    .catch(this.handleError);
  }

  cancelApplicationById(id):Promise<any>{
    console.log(id);
    
    let getURL = `api/jobs/cancel-application/`+id;
    
    return this.http.get(getURL)
    .toPromise()
    .then(res =>{
      console.log(res);
      return res.json() ;
    })
    .catch(this.handleError);
  }

  createTuition(tuition: Tuition): Promise<any>{
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

  getPrivateTuition(offset):Promise<Tuition[]>{
    let getURL = `api/jobs/private/${offset}`;

    return this.http.get(getURL)
    .toPromise()
    .then(res =>{
      console.log(res);
      return res.json().jobs.docs as Tuition[];
    })
    .catch(this.handleError);
  }

  getPrivateTuitionById(id):Promise<Tuition>{
    console.log(id);
    
    let getURL = `api/jobs/private-detail/`+id;
    
    return this.http.get(getURL)
    .toPromise()
    .then(res =>{
      console.log(res);
      return res.json().job as Tuition;
    })
    .catch(this.handleError);
  }

  selectApplicatoin(ids, tuition): Promise<any>{
    let selectTuitionUrl = `api/jobs/select-tuition`;

    ids = JSON.stringify(ids);
    console.log(ids);

    let urlSearchParams = new URLSearchParams();

    urlSearchParams.append("applicants", ids);
    urlSearchParams.append("tuition", tuition);
    var body = urlSearchParams.toString();

    console.log("Body: " + body);
    
    return this.http.post(selectTuitionUrl, body)
    .toPromise()
    .then(res => {
      return res.json();
    })
    .catch(this.handleError);     

  }

  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}


}
