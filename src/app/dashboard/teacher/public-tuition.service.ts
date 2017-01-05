import { Injectable } from '@angular/core';
import { HttpClient } from '../../http-client';
import { PublicTuition } from './public-tuition';
import { Response, Headers, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PublicTuitionService {

  constructor(private http: HttpClient) { }

  
  getPublicTuition(offset):Promise<PublicTuition[]>{
    let getURL = `api/jobs/public/${offset}`;
    
    return this.http.get(getURL)
    .toPromise()
    .then(res =>{
      console.log(res);
      return res.json().jobs as PublicTuition[];
    })
    .catch(this.handleError);
  }

  getPublicTuitionById(id):Promise<PublicTuition>{
    console.log(id);
    
    let getURL = `api/jobs/public-detail/`+id;
    
    return this.http.get(getURL)
    .toPromise()
    .then(res =>{
      console.log(res);
      return res.json().job as PublicTuition;
    })
    .catch(this.handleError);
  }

  applyForTuition(offer): Promise<any>{
     
    let applyURL = `api/jobs/apply-tuition`;

    let urlSearchParams = new URLSearchParams();

    urlSearchParams.append("offer", offer);

    var body = urlSearchParams.toString();

    return this.http.post(applyURL, body)
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
