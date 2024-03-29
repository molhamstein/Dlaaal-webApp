import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { PersistenceModule } from 'angular-persistence';

import { PersistenceService } from 'angular-persistence';



@Injectable()
export class LoginService {
  isLogIn;
  isRemember;
  userId;
  id;
  avatar
  constructor(private persistenceService: PersistenceService, private cookieService: CookieService, private router: Router) {
    if (this.cookieService.get('isRemember') == "true") {
      this.isLogIn = this.isLoginCook();
      this.isRemember = true;
    }
    else if (this.cookieService.get('isRemember') == "false") {
      this.isLogIn = this.isLoginSet();
      this.isRemember = false;
    }
    else {
      this.isLogIn = false;
    }
    if (this.isLogIn) {
      this.init();
    }
  }

  init() {
    if (this.isRemember) {
      this.userId = this.cookieService.get("dalalUserId");
      this.id = this.cookieService.get("dalalId");
      this.avatar = this.cookieService.get("dalalAvatar");
    } else {
      this.userId = sessionStorage.getItem("dalalUserId");
      this.id = sessionStorage.getItem("dalalId");
      this.avatar = sessionStorage.getItem("dalalAvatar");
    }
  }

  isLogin() {
    return this.isLogIn;
  }

  getUserId() {
    if (this.userId != "")
      return this.userId;
  }

  getId() {
    return this.id;
  }

  getAvatar() {
    return this.avatar;
  }


  logIn(data, rememberPass: boolean = true) {
    this.isRemember=rememberPass;
    this.isLogIn=true;
    if (rememberPass) {
      this.cookieService.set('isRemember', "true");
      this.logInCook(data);
    }
    else {
      this.cookieService.set('isRemember', "false");
      this.logInSet(data);
    }
    this.init();
  }

  logout() {
    this.cookieService.set('isRemember', "");

    if (this.isRemember) {
      this.logoutCook();
    }
    else {
      this.logoutSet();
    }



    if ("/myprofile/me" == this.router.url) {
      this.router.navigateByUrl('/myprofile/me').then(() => this.router.navigateByUrl('/'));
      location.reload();
    } else if ("/addAdvertising" == this.router.url) {
      this.router.navigateByUrl('/addAdvertising').then(() => this.router.navigateByUrl('/'));
      location.reload();
    } else
      location.reload();
  }


  setAvatar(newAvatar) {
    if (this.isRemember) {
      this.setAvatarCook(newAvatar);
    }
    else {
      this.setAvatarSet(newAvatar);
    }
  }



  isLoginCook() {
    if (this.cookieService.get('dalalUserId') == null) {
      return false;
    }
    else {
      return true;
    }
  }

  logInCook(data) {
    this.cookieService.set('dalalUserId', data.userId);
    this.cookieService.set('dalalId', data.id);
    if (data.user != null)
      this.cookieService.set('dalalAvatar', data.user.avatar);
    // }
    location.reload();
  }



  logoutCook() {
    this.cookieService.delete('dalalUserId');
    this.cookieService.delete('dalalId');
    this.cookieService.delete('dalalAvatar');

  }


  setAvatarCook(newAvatar) {
    this.cookieService.set('dalalAvatar', newAvatar);
  }




  isLoginSet() {
    if (sessionStorage.getItem('dalalUserId') == null) {
      return false;
    }
    else {
      return true;
    }
  }

  logInSet(data) {

    sessionStorage.setItem('dalalUserId', data.userId);
    sessionStorage.setItem('dalalId', data.id);
    if (data.user != null)
      sessionStorage.setItem('dalalAvatar', data.user.avatar);
    location.reload();
  }



  logoutSet() {
    sessionStorage.removeItem('dalalUserId');
    sessionStorage.removeItem('dalalId');
    sessionStorage.removeItem('dalalAvatar');

  }


  setAvatarSet(newAvatar) {
    sessionStorage.setItem('dalalAvatar', newAvatar);
  }


}
