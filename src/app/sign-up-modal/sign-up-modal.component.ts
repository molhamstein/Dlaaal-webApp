import { ErrorModalComponent } from './../error-modal/error-modal.component';
import { MainService } from './../Services/main.service';
import { Component, Inject, VERSION } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
    selector: 'sign-up-modal',
    templateUrl: 'sign-up-modal.component.html',
    styleUrls: ['sign-up-modal.component.scss']
})
export class SignUpModalComponent {
    newUser = {};
    message = "";
    constructor(public dialog: MatDialog, public thisDialog: MatDialogRef<SignUpModalComponent>, public mainServ: MainService, @Inject(MAT_DIALOG_DATA) public data: any) {
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
        else if (this.newUser['confirmPassword'] == "" || this.newUser['confirmPassword'] == null) {
            this.message = "تاكيد كلمة السر"
        }

        if (this.message != "") {
            this.message = "الرجاء إدخال حقل " + this.message;
        }
        else if (this.newUser['confirmPassword'] != this.newUser['password']) {
            this.message = "لا يوجد تطابق بين كلمة السر وتاكيد كلمة السر"
        }
        else {
            this.newUser['lastName'] = "test";
            this.mainServ.APIServ.post("users", this.newUser).subscribe(data => {

                if (this.mainServ.APIServ.getErrorCode() == 0) {
                    let dialogRef = this.dialog.open(ErrorModalComponent, {
                        width: '50%',
                        data: { title: "إنشاء الحساب", containt: "أهلا وسهلا بك في دلال الرجاء التحقق من بريدك الالكتروني" }
                    });
                    dialogRef.afterClosed().subscribe(result => {
                        this.mainServ.APIServ.post("users/login", { "email": this.newUser["email"], "password": this.newUser["password"] }).subscribe((data: string) => {
                            if (this.mainServ.APIServ.getErrorCode() == 0) {

                                this.mainServ.loginServ.logIn(data);
                            } else this.mainServ.globalServ.somthingError();
                        });
                    });


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

    public version = VERSION.full;
    public reactiveForm: FormGroup = new FormGroup({
        recaptchaReactive: new FormControl(null, Validators.required)
    });

}
