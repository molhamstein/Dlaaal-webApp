import { GlobalService } from './../Services/global.service';
import { LoginService } from './../Services/login.service';
import { CallApiService } from './../Services/call-api.service';
import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'sign-up-modal',
    templateUrl: 'sign-up-modal.component.html',
    styleUrls: ['sign-up-modal.component.scss']
})
export class SignUpModalComponent {
    newUser = {};
    message = "";
    constructor(public thisDialog: MatDialogRef<SignUpModalComponent>, public globalServ: GlobalService, @Inject(MAT_DIALOG_DATA) public data: any, public APIServ: CallApiService, public LoginSer: LoginService) {
    }

    signup() {
        if (this.newUser['firstName'] == "" || this.newUser['firstName'] == null) {
            this.message = "الأسم"
        } else if (this.newUser['phone'] == "" || this.newUser['phone'] == null) {
            this.message = "الرقم"
        } else if (this.newUser['email'] == "" || this.newUser['email'] == null) {
            this.message = "الأيميل"
        } else if (this.newUser['password'] == "" || this.newUser['password'] == null) {
            this.message = "كلمة السر"
        }
        if (this.message != "") {
            this.message = "الرجاء إدخال حقل " + this.message;
        } else {
            this.newUser['lastName'] = "test";
            this.APIServ.post("users", this.newUser).subscribe(data => {

                if (this.APIServ.getErrorCode() == 0) {

                    this.APIServ.post("users/login", {"email":this.newUser["email"],"password":this.newUser["password"]}).subscribe((data: string) => {
                        if (this.APIServ.getErrorCode() == 0) {
                            this.LoginSer.logIn(data);
                        } else this.globalServ.somthingError();
                    });
                    // alert("Success")
                    // this.LoginSer.logIn(data);
                } else if (this.APIServ.getErrorCode() == 422) {
                    this.message = "هذا البريد الالكتروني مسجل مسبقا";
                    this.APIServ.setErrorCode(0);
                } else this.globalServ.somthingError();
            });
        }

    }

    login() {
        this.thisDialog.close(true);
    }
    closeModal() {
        this.thisDialog.close();
    }

}
