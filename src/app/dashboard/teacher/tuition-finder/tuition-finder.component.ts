import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TuitionService } from '../../../services/tuition.service';
import { Tuition } from '../../../models/tuition';
import { User } from '../../../models/user';
import { AuthService } from '../../../auth.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-tuition-finder',
  templateUrl: './tuition-finder.component.html',
  styleUrls: ['./tuition-finder.component.css']
})
export class TuitionFinderComponent implements OnInit {

  constructor(
    private publicTuitionService: TuitionService,
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) { }

  tuitions: Array<Tuition>;
  user: User;
  isTeacherInfoValid: boolean = false;

  ngOnInit() {
    this.user = this.authService.getUser();
    this.updateTeacherValidation();
    this.publicTuitionService.getPublicTuition(0)
    .then(res=>{
      console.log("RES FROM PublicTuition");
      
      console.log(res);
      this.tuitions = res;
      console.log("RES + TUITION");
      
      console.log(this.tuitions);
    });
  }

  updateTeacherValidation(){
    this.isTeacherInfoValid = this.user.isTeacherInfoValid().stat;
  }

  onSubmit(){
    console.log(this.user.teacherInfo);
    this.updateTeacherValidation();
    console.log(this.isTeacherInfoValid);
    this.userService.updateTeacherInfo(this.user.teacherInfo);
  }

}
