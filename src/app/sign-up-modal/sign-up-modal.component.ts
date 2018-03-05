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
    constructor(public thisDialog: MatDialogRef<SignUpModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public APIServ: CallApiService, public LoginSer: LoginService) {
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
            this.APIServ.post("users", this.newUser).subscribe(data => {

                if (this.APIServ.getErrorCode() == 0) {
                    // alert("Success")
                    this.LoginSer.logIn(data);
                } else if (this.APIServ.getErrorCode() == 422) {
                    this.message = "هذا البريد الالكتروني مسجل مسبقا";
                    this.APIServ.setErrorCode(0);
                }
            });
        }

    }

    login() {
        this.thisDialog.close(true);
    }
    closeModal(){
        this.thisDialog.close();
    }

}
