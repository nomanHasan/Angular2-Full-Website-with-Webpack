import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService) { }

  studentFlag: boolean;
  teacherFlag: boolean;
  ngOnInit() {
    this.studentFlag = this.IsStudent();
    this.teacherFlag = this.IsTeacher();

  }

  IsTeacher() {
    return this.authService.isTeacher();
  }

  IsStudent() {
    return this.authService.isStudent();
  }
}
