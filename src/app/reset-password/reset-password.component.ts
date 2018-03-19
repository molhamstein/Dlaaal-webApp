import { MainService } from './../Services/main.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'reset-password',
    templateUrl: 'reset-password.component.html',
    styleUrls: ['reset-password.component.scss']
})
export class ResetPasswordComponent {
    token;
    user;
    message;
    constructor(public dialog: MatDialog,public mainServ:MainService , private route: ActivatedRoute) {
        this.user={};
        this.route.queryParams
            .filter(params => params.access_token)
            .subscribe(params => {
                this.token = params.access_token;
            });
    }
    ngOnInit() {
       $("html, body").animate({ scrollTop: 0 }, "slow");
    }
    resetPassword() {
          this.mainServ.APIServ.resetPassWord("users/reset-password", this.user,this.token).subscribe((data: string) => {
            if (this.mainServ.APIServ.getErrorCode() == 0) {
                this.mainServ.globalServ.goTo('/')
            } else if (this.mainServ.APIServ.getErrorCode() == 401) {
                this.message = "لرجاء التحقق من اسم المستخدم و كلمه المرور";
                this.mainServ.APIServ.setErrorCode(0);
            }else this.mainServ.globalServ.somthingError();
        });
    }
}
