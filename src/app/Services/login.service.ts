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
  logIn(data, rememberPass: boolean = true) {
    // if (rememberPass) {
    //   var now = new Date();
    //   var exp = 1;
    //   this.cookieService.set('dalalUserId', data.userIdm, exp)
    //   this.cookieService.set('dalalId', data.id, exp);
    //   if (data.user != null)
    //     this.cookieService.set('dalalAvatar', data.user.avatar, exp);
    // }
    // else {
      this.cookieService.set('dalalUserId', data.userId);
      this.cookieService.set('dalalId', data.id);
      if (data.user != null)
        this.cookieService.set('dalalAvatar', data.user.avatar);
    // }
    location.reload();
  }

  logout() {
    this.cookieService.delete('dalalUserId');
    this.cookieService.delete('dalalId');
    this.cookieService.delete('dalalAvatar');

    if ("/myprofile/me" == this.router.url) {
      this.router.navigateByUrl('/myprofile/me').then(() => this.router.navigateByUrl('/'));
      location.reload();
    }else if ("/addAdvertising" == this.router.url) {
      this.router.navigateByUrl('/addAdvertising').then(() => this.router.navigateByUrl('/'));
      location.reload();
    } else
      location.reload();
  }

  getAvatar() {
    return this.cookieService.get("dalalAvatar");
  }
  setAvatar(newAvatar) {
    this.cookieService.set('dalalAvatar', newAvatar);
  }
}
