import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TuitionService } from '../../../services/tuition.service';
import { Tuition } from '../../../models/tuition';

@Component({
  selector: 'app-applied-tuition-list',
  templateUrl: './applied-tuition-list.component.html',
  styleUrls: ['./applied-tuition-list.component.css']
})
export class AppliedTuitionListComponent implements OnInit {

  constructor(
    private tuitionService: TuitionService,
    private router: Router
  ) { }

  tuitions: Array<Tuition>;

  ngOnInit() {
    this.tuitionService.getAppliedTuition(0)
    .then(res=>{
      console.log("RES FROM PublicTuition");
      
      console.log(res);
      this.tuitions = res;
      console.log("RES + TUITION");
      
      console.log(this.tuitions);
    });
  }

}
