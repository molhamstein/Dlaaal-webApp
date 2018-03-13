import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LoginService {

  constructor(private cookieService: CookieService, private router: Router) { }

  isLogin() {
    if (this.cookieService.get('dalalUserId') == "") {
      return false;
    }
    else {
      return true;
    }
  }

  getUserId() {
    let user = this.cookieService.get("dalalUserId");
    if (user != "")
      return user;
  }

  getId() {
    let user = this.cookieService.get("dalalId");
    // if (user != "")
    return user;
  }
  logIn(data) {
    console.log(data);
    this.cookieService.set('dalalUserId', data.userId);
    this.cookieService.set('dalalId', data.id);
    location.reload();

  }

  logout() {
    this.cookieService.set('dalalUserId', "");
    this.cookieService.set('dalalId', "");
    console.log(this.router.url);
    if ("/myprofile/me" == this.router.url) {
      location.href='/';
    } else
      location.reload();
  }
}
