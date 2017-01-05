import { Component, OnInit } from '@angular/core';
import { PublicTuitionService } from '../public-tuition.service';
import { PublicTuition } from '../public-tuition';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { User } from '../../../user';
import { AuthService } from '../../../auth.service';


import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-public-tuition-details',
  templateUrl: './public-tuition-details.component.html',
  styleUrls: ['./public-tuition-details.component.css']
})
export class PublicTuitionDetailsComponent implements OnInit {

  constructor(
    private tuitionService: PublicTuitionService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) { }

  tuition: PublicTuition;
  message: string;
  offer: number;


  ngOnInit() {
    this.route.params
    .switchMap((params: Params)=> this.tuitionService.getPublicTuitionById(params['id']))
    .subscribe(tuition=> {
      console.log(tuition);
      this.tuition = tuition 
    });
  }

  onSubmit(value: number, content){
    console.log(value);
    this.offer = value;
    this.tuitionService.applyForTuition(value)
    .then(res=> {
      if(res.success){

        this.message = "Applied to the Tuition ";
        this.modalService.open(content).result.then((result)=>{
          this.router.navigate(['/dashboard/applied-tuition']);
        });
      }else{

      }
      
    });
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
    }, (reason) => {

    });
  }

}
