import { MainService } from './../Services/main.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
    selector: 'forget-password-modal',
    templateUrl: 'forget-password-modal.component.html',
    styleUrls: ['forget-password-modal.component.scss']
})
export class ForgetPasswordModalComponent {
    user;
    message;
    constructor(public mainServ:MainService,  public dialogRef: MatDialogRef<ForgetPasswordModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.user = {};
    }
    closeModal() {
        this.dialogRef.close();
    }

    sendEmail() {
        this.mainServ.APIServ.post("users/reset", this.user).subscribe((data: string) => {
            if (this.mainServ.APIServ.getErrorCode() == 0) {
                this.message = "الرجاء التحقق في البريد الألكتروني الخاص بك";
            } else if (this.mainServ.APIServ.getErrorCode() == 401) {
                this.message = "لرجاء التحقق من اسم المستخدم و كلمه المرور";
                this.mainServ.APIServ.setErrorCode(0);
            } else this.mainServ.globalServ.somthingError()

        });
    }

}
