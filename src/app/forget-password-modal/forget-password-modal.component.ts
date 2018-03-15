import { GlobalService } from './../Services/global.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CallApiService } from './../Services/call-api.service';
import { Component, Inject } from '@angular/core';

@Component({
    selector: 'forget-password-modal',
    templateUrl: 'forget-password-modal.component.html',
    styleUrls: ['forget-password-modal.component.scss']
})
export class ForgetPasswordModalComponent {
    user;
    message;
    constructor(public APIServ: CallApiService, public globalSer: GlobalService, public dialogRef: MatDialogRef<ForgetPasswordModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.user = {};
    }
    closeModal() {
        this.dialogRef.close();
    }

    sendEmail() {
        this.APIServ.post("users/reset", this.user).subscribe((data: string) => {
            if (this.APIServ.getErrorCode() == 0) {
                this.message = "الرجاء التحقق في البريد الألكتروني الخاص بك";
            } else if (this.APIServ.getErrorCode() == 401) {
                this.message = "لرجاء التحقق من اسم المستخدم و كلمه المرور";
                this.APIServ.setErrorCode(0);
            } else this.globalSer.somthingError()

        });
    }

}
