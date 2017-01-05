import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) {}

  canActivate() :Observable<boolean>|Promise<boolean>|boolean {
    return this.authService.isLoggedIn();
  }
}

@Injectable()
export class NotForUserGuard implements CanActivate {

  constructor(private authService: AuthService) {}

  canActivate() :Observable<boolean>|Promise<boolean>|boolean {
      console.log("NOTFORUSR Guard CAlled ");
      
    return !this.authService.isLoggedIn();
  }
}