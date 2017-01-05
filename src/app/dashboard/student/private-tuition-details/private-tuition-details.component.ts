import { Component, OnInit } from '@angular/core';
import { PrivateTuitionService } from '../private-tuition.service';
import { PrivateTuition } from '../private-tuition';
import {ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-private-tuition-details',
  templateUrl: './private-tuition-details.component.html',
  styleUrls: ['./private-tuition-details.component.css']
})
export class PrivateTuitionDetailsComponent implements OnInit {

  constructor(private tuitionService: PrivateTuitionService,
    private route: ActivatedRoute
  ) { }

  tuition: PrivateTuition ;

  ngOnInit() {
    this.route.params
    .switchMap((params: Params)=> this.tuitionService.getPrivateTuitionById(params['id']))
    .subscribe(tuition=> {
      console.log(tuition);
      this.tuition = tuition 
    });
    console.log(this.route.params);
    console.log(this.tuition);
    
    
  }

}
