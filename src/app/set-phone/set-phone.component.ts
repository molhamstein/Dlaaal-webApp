import { MatDialogRef } from '@angular/material/dialog';
import { MainService } from './../Services/main.service';
import { Component } from '@angular/core';

@Component({
    selector: 'set-phone',
    templateUrl: 'set-phone.component.html',
    styleUrls: ['set-phone.component.scss']
})
export class SetPhoneComponent {

    user;
    message;
    constructor(public mainServ: MainService, public dialogRef: MatDialogRef<SetPhoneComponent>) {
        this.user = {};
    }
    closeModal() {
        this.dialogRef.close();
    }

    setPhone() {
        if (this.user['phone'] == "" || this.user['phone'] == null) {
            this.message = "الرجاء إدخال حقل الرقم";
            return;
        }
        this.mainServ.APIServ.put("users/" + this.mainServ.loginServ.getUserId(), this.user).subscribe((data: string) => {
            if (this.mainServ.APIServ.getErrorCode() == 0) {
                this.dialogRef.close();
            } else this.mainServ.globalServ.somthingError()

        });

    }
}
