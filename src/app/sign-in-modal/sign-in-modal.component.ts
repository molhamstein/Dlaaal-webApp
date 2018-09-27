import { MainService } from './../Services/main.service';
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
    rememberPass;
    message;
    loader;
    constructor(public thisDialog: MatDialogRef<SignInModalComponent>, public mainServ: MainService, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.loader = false;
        this.rememberPass = true;
    }
    login() {
        this.loader = true;
        this.mainServ.APIServ.post("users/login?include=user", this.user).subscribe((data: string) => {
            this.loader = false;
            if (this.mainServ.APIServ.getErrorCode() == 0) {
                this.mainServ.loginServ.logIn(data, this.rememberPass);
            } else if (this.mainServ.APIServ.getErrorCode() == 401) {
                this.message = "لرجاء التحقق من اسم المستخدم و كلمه المرور";
                this.mainServ.APIServ.setErrorCode(0);
            } else this.mainServ.globalServ.somthingError();
        });
    }


    forgetPassword() {
        this.thisDialog.close(true);
    }

    closeModal() {
        this.thisDialog.close();
    }
}
