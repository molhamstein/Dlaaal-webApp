import { GlobalService } from './../Services/global.service';
import { SignUpModalComponent } from './../sign-up-modal/sign-up-modal.component';
import { SignInModalComponent } from './../sign-in-modal/sign-in-modal.component';
import { MatDialog } from '@angular/material';
import { LoginService } from './../Services/login.service';
import { CallApiService } from './../Services/call-api.service';
import { Component } from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent {
    isLogin: boolean;
    constructor(public globalServ:GlobalService,public dialog: MatDialog, public loginSer: LoginService, public APIServ: CallApiService) {
        this.isLogin = this.loginSer.isLogin();
    }
    openSignUpDialog() {

        let dialogRef = this.dialog.open(SignUpModalComponent, {
            width: '35%',
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result) {
                this.openSignInDialog()
            }
        });
    }
    openSignInDialog() {
        let dialogRef = this.dialog.open(SignInModalComponent, {
            width: '35%',
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    logout() {
        this.loginSer.logout();
    }
    hrefAddAdv() {
        if (this.isLogin) {
            this.globalServ.goTo("addAdvertising")
        } else {
            this.openSignInDialog();
        }
    }
}
