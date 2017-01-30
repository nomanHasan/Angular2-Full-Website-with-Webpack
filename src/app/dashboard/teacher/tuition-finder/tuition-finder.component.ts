import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TuitionService } from '../../../services/tuition.service';
import { Tuition } from '../../../models/tuition';

@Component({
  selector: 'app-tuition-finder',
  templateUrl: './tuition-finder.component.html',
  styleUrls: ['./tuition-finder.component.css']
})
export class TuitionFinderComponent implements OnInit {

  constructor(
    private publicTuitionService: TuitionService,
    private router: Router
  ) { }

  tuitions: Array<Tuition>;

  ngOnInit() {
    this.publicTuitionService.getPublicTuition(0)
    .then(res=>{
      console.log("RES FROM PublicTuition");
      
      console.log(res);
      this.tuitions = res;
      console.log("RES + TUITION");
      
      console.log(this.tuitions);
    });
  }

}
