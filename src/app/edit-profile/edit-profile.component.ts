import { GlobalService } from './../Services/global.service';
import { ActivatedRoute } from '@angular/router';
import { CallApiService } from './../Services/call-api.service';
import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
    selector: 'edit-profile',
    templateUrl: 'edit-profile.component.html',
    styleUrls: ['edit-profile.component.scss']
})
export class EditProfileComponent {
    newUser={};
    message;
    constructor(private route: ActivatedRoute, public globalSer: GlobalService, public thisDialog: MatDialogRef<EditProfileComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public APIServ: CallApiService) {

    }
    ngOnInit() {
        this.APIServ.get("users/me").subscribe(data => {
            if (this.APIServ.getErrorCode() == 0)
                this.newUser = data;
            else
                this.globalSer.somthingError()
        });
    }
    editProfile() {
        if (this.newUser['firstName'] == "" || this.newUser['firstName'] == null) {
            this.message = "الأسم"
        } else if (this.newUser['phone'] == "" || this.newUser['phone'] == null) {
            this.message = "الرقم"
        } else if (this.newUser['email'] == "" || this.newUser['email'] == null) {
            this.message = "الأيميل"
        }
        if (this.message != "") {
            this.message = "الرجاء إدخال حقل " + this.message;
        } else {
            this.APIServ.put("/users/" + this.newUser['id'], this.newUser).subscribe(data => {

                if (this.APIServ.getErrorCode() == 0) {
                    this.thisDialog.close(false);
                } else if (this.APIServ.getErrorCode() == 422) {
                    this.message = "هذا البريد الالكتروني مسجل مسبقا";
                    this.APIServ.setErrorCode(0);
                } else
                    this.globalSer.somthingError()
            });
        }

    }

    changePassword() {
        this.thisDialog.close(true);
    }

    closeModal() {
        this.thisDialog.close();
    }
}
