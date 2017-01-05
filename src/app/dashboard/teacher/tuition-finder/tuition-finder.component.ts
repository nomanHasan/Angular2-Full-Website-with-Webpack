import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicTuitionService } from '../public-tuition.service';
import { PublicTuition } from '../public-tuition';

@Component({
  selector: 'app-tuition-finder',
  templateUrl: './tuition-finder.component.html',
  styleUrls: ['./tuition-finder.component.css']
})
export class TuitionFinderComponent implements OnInit {

  constructor(
    private publicTuitionService: PublicTuitionService,
    private router: Router
  ) { }

  tuitions: Array<PublicTuition>;

  ngOnInit() {
    this.publicTuitionService.getPublicTuition(0)
    .then(res=>{
      console.log(res);
      this.tuitions = res;
      console.log(this.tuitions);
    });
  }

}
