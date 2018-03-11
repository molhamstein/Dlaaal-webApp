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
    newUser;
    message;
    constructor(private route: ActivatedRoute, public thisDialog: MatDialogRef<EditProfileComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public APIServ: CallApiService) {

    }
    ngOnInit() {
        this.APIServ.get("users/me").subscribe(data => {
            this.newUser = data;
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
        // else if (this.newUser['password'] == "" || this.newUser['password'] == null) {
        //     this.message = "كلمة السر"
        // }
        if (this.message != "") {
            this.message = "الرجاء إدخال حقل " + this.message;
        } else {
            this.APIServ.put("/users/" + this.newUser.id, this.newUser).subscribe(data => {

                if (this.APIServ.getErrorCode() == 0) {
                    alert("Success")
                    // this.LoginSer.logIn(data);
                } else if (this.APIServ.getErrorCode() == 422) {
                    this.message = "هذا البريد الالكتروني مسجل مسبقا";
                    this.APIServ.setErrorCode(0);
                }
            });
        }

    }

    changePassword(){
        this.thisDialog.close(true);
    }

        closeModal(){
        this.thisDialog.close();
    }
}