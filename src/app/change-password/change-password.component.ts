import { CallApiService } from './../Services/call-api.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
    selector: 'change-password',
    templateUrl: 'change-password.component.html',
    styleUrls: ['change-password.component.scss']
})
export class ChangePasswordComponent {
    password;
    message="";
    constructor(public dialogRef: MatDialogRef<ChangePasswordComponent>, public APIServ: CallApiService) {
        this.password = { "oldPassword": "", "newPassword": "" };
    }
    editPassword() {
        this.APIServ.post("users/change-password", this.password).subscribe(data => {

            if (this.APIServ.getErrorCode() == 0) {
                alert("Success")
                // this.LoginSer.logIn(data);
            }else  if (this.APIServ.getErrorCode() == 400) {
               this.message="كلمة السر الحالية خاطئة"
            }
        });
    }
    closeModal(){
        this.dialogRef.close();
    }
}
