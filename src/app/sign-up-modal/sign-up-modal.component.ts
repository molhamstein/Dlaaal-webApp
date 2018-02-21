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
    constructor(public thisDialog: MatDialogRef<SignUpModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any,public APIServ: CallApiService,public LoginSer:LoginService) {
    }

    signup() {
        console.log(this.newUser);
        this.APIServ.post("users",this.newUser).subscribe(data => {
            this.LoginSer.logIn(data);
        });

    }


}
