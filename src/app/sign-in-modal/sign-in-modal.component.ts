import { LoginService } from './../Services/login.service';
import { CallApiService } from './../Services/call-api.service';
import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'sign-in-modal',
    templateUrl: 'sign-in-modal.component.html',
    styleUrls: ['sign-in-modal.component.scss']
})
export class SignInModalComponent {
    user = {};
    message;
    constructor(public thisDialog: MatDialogRef<SignInModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public LoginSer: LoginService, public APIServ: CallApiService) {

    }
    login() {
        this.APIServ.post("users/login", this.user).subscribe((data: string) => {
            if (this.APIServ.getErrorCode() == 0) {
                this.LoginSer.logIn(data);
            } else if (this.APIServ.getErrorCode() == 401) {
                this.message = "لرجاء التحقق من اسم المستخدم و كلمه المرور";
                this.APIServ.setErrorCode(0);
            }
        });
    }
}
