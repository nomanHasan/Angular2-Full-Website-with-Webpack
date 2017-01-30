import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TuitionService } from '../../../services/tuition.service';
import { Tuition } from '../../../models/tuition';

@Component({
  selector: 'app-applied-tuition-details',
  templateUrl: './applied-tuition-details.component.html',
  styleUrls: ['./applied-tuition-details.component.css']
})
export class AppliedTuitionDetailsComponent implements OnInit {

  constructor(private tuitionService: TuitionService,
            private router: Router,
            private route: ActivatedRoute
  ) { }

  tuition: Tuition;

  ngOnInit() {
    this.route.params
    .switchMap((params: Params)=> this.tuitionService.getAppliedTuitionById(params['id']))
    .subscribe(tuition=> {
      console.log(tuition);
      this.tuition = tuition;
      console.log(this.tuition);
      
    });
  }

  cancelApplication(){
    this.tuitionService.cancelApplicationById(this.tuition._id)
    .then(res=>{
      if(res.success){
        this.router.navigate(['/dashboard/applied-tuition/']);
      }
    });
  }

}
