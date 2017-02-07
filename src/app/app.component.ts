import { Component, OnInit, Input } from '@angular/core';
import {AuthService} from "./auth.service";
import { User } from "./models/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  user: User;

  isLoggedIn() {
     return this.authService.isLoggedIn() ;
  }

  constructor(private authService : AuthService){}

  ngOnInit(){
    this.user = this.authService.getUser();
  }

  onLogout() {
    this.authService.logout();
    console.log("Logout");
  }
}
