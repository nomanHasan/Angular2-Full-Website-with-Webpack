import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../models/login-user';
import { AuthService } from '../auth.service';
import {Location} from '@angular/common';
import {Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  submitted = false;
  model= new LoginUser("","");
  message= "LoginComponent";

  constructor(private authService: AuthService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {

  }
  onSubmit() {
    this.authService.login(this.model.username, this.model.password)
    .then(res => {
      if(res.success == true){
        this.router.navigate(['/home']);
      }else{
        this.message = res.Error;
      }
    });
  }
  onClose(){
    this.location.back();
  }

}

