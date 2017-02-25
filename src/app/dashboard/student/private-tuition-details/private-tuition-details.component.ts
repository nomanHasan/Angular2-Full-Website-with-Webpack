import { Component, OnInit } from '@angular/core';
import { TuitionService } from '../../../services/tuition.service';
import { Tuition, Element, Applicant, TeacherInfo } from '../../../models/tuition';
import {Router, ActivatedRoute, Params } from '@angular/router';


import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-private-tuition-details',
  templateUrl: './private-tuition-details.component.html',
  styleUrls: ['./private-tuition-details.component.css']
})
export class PrivateTuitionDetailsComponent implements OnInit {

  constructor(private tuitionService: TuitionService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) { }

  tuition: Tuition ;
  elements: Array<Element>;
  selectedElements: Array<Element>;
  applicant: Applicant;
  teacherInfo: TeacherInfo;
  message: string;

  ngOnInit() {
    this.route.params
    .switchMap((params: Params)=> this.tuitionService.getPrivateTuitionById(params['id']))
    .subscribe(tuition=> {
      console.log(tuition);
      this.tuition = tuition;
      this.elements = this.tuition.applicants;
      this.selectedElements = this.tuition.selected;
      console.log("Tuition Elements");
      
      console.log(this.elements);
      console.log("Tuition Details");
      
      console.log(this.tuition);
    });
    console.log(this.route.params);
  }

  select(id){
    console.log("Applicant Selected");
    console.log(id); 
    for(var i = 0 ; i <this.elements.length; i++){
      if(this.elements[i].applicant._id == id){
        if(this.selectedElements.length < 2){
          this.selectedElements.push(this.elements[i]);
          // this.elements.splice(i, 1);
        }else{
          var elem: Element = this.selectedElements[0];
          this.selectedElements[0] = this.selectedElements[1];
          this.selectedElements[1] = this.elements[i];
          // this.elements.splice(i, 1);
          // this.elements.push(elem);
        }
      }
    }   
  }

  remove(id){
    console.log("Applicant Selected");
    console.log(this.selectedElements[0]); 
    for(var i = 0 ; i <this.selectedElements.length; i++){
      if(this.selectedElements[i].applicant._id == id){
        // this.elements.push(this.selectedElements[i]);
        this.selectedElements.splice(i, 1);
      }
    }   
  }

  submit(content){
    var tuitionIds = [];

    for(var i =0; i< this.selectedElements.length; i++){
      tuitionIds.push(this.selectedElements[i].applicant._id);
    } 
    console.log(tuitionIds);

    this.tuitionService.selectApplicatoin(tuitionIds, this.tuition._id).then(res =>{
      if(res.success){

        this.message = "Uploaded Selected Teachers";
        this.modalService.open(content).result.then((result)=>{
          this.router.navigate(['/dashboard/my-tuition']);
        });
      }else{

      }
    }).catch((err=> console.log(err)));
  }


  open(content) {
    this.modalService.open(content).result.then((result) => {
    }, (reason) => {

    });
  }
}
