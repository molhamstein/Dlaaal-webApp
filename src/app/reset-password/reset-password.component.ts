import { GlobalService } from './../Services/global.service';
import { ActivatedRoute } from '@angular/router';
import { CallApiService } from './../Services/call-api.service';
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
    constructor(public dialog: MatDialog,public globalSer:GlobalService ,public APIServe: CallApiService, private route: ActivatedRoute) {
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
          this.APIServe.resetPassWord("users/reset-password", this.user,this.token).subscribe((data: string) => {
            if (this.APIServe.getErrorCode() == 0) {
                this.globalSer.goTo('/')
            } else if (this.APIServe.getErrorCode() == 401) {
                this.message = "لرجاء التحقق من اسم المستخدم و كلمه المرور";
                this.APIServe.setErrorCode(0);
            }
        });
    }
}
