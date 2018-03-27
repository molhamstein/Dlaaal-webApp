import { MainService } from './../Services/main.service';
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
    constructor(public thisDialog: MatDialogRef<SignUpModalComponent>, public mainServ:MainService, @Inject(MAT_DIALOG_DATA) public data: any) {
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
            this.mainServ.APIServ.post("users", this.newUser).subscribe(data => {

                if (this.mainServ.APIServ.getErrorCode() == 0) {

                    this.mainServ.APIServ.post("users/login", {"email":this.newUser["email"],"password":this.newUser["password"]}).subscribe((data: string) => {
                        if (this.mainServ.APIServ.getErrorCode() == 0) {
                            this.mainServ.loginServ.logIn(data);
                        } else this.mainServ.globalServ.somthingError();
                    });
                    // alert("Success")
                    // this.mainServ.loginServ.logIn(data);
                } else if (this.mainServ.APIServ.getErrorCode() == 422) {
                    this.message = "هذا البريد الالكتروني مسجل مسبقا";
                    this.mainServ.APIServ.setErrorCode(0);
                } else this.mainServ.globalServ.somthingError();
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
