import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PrivateTuitionService } from '../private-tuition.service';
import {PrivateTuition} from '../private-tuition';

@Component({
  selector: 'app-private-tuition-list',
  templateUrl: './private-tuition-list.component.html',
  styleUrls: ['./private-tuition-list.component.css']
})
export class PrivateTuitionListComponent implements OnInit {

  constructor(private privateTuitionService: PrivateTuitionService,
  private router: Router,
  ) { }

  tuitions: Array<PrivateTuition>;

  ngOnInit() {
    this.privateTuitionService.getPrivateTuition(0)
    .then(res=>{
      console.log(res);
      
      this.tuitions = res;
      console.log(this.tuitions);
      
    });
  }

}
