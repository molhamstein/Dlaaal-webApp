import { MainService } from './../Services/main.service';
import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { AuthService } from "angular4-social-login";
// import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";

import {
    AuthService,
    FacebookLoginProvider,
    GoogleLoginProvider,
    LinkedinLoginProvider
} from 'angular5-social-auth';


@Component({
    selector: 'sign-in-modal',
    templateUrl: 'sign-in-modal.component.html',
    styleUrls: ['sign-in-modal.component.scss']
})
export class SignInModalComponent {
    user = {};
    rememberPass;
    message;
    loader;
    constructor(private socialAuthService: AuthService, private authService: AuthService, public thisDialog: MatDialogRef<SignInModalComponent>, public mainServ: MainService, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.loader = false;
        this.rememberPass = true;
    }
    login() {
        this.loader = true;
        this.mainServ.APIServ.post("users/login?include=user", this.user).subscribe((data: string) => {
            this.loader = false;
            if (this.mainServ.APIServ.getErrorCode() == 0) {
                this.mainServ.loginServ.logIn(data, this.rememberPass);
            } else if (this.mainServ.APIServ.getErrorCode() == 401) {
                this.message = "لرجاء التحقق من اسم المستخدم و كلمه المرور";
                this.mainServ.APIServ.setErrorCode(0);

            } else if (this.mainServ.APIServ.getErrorCode() == 412) {
                this.message = "تم استخدام البريد الالكتروني في حساب اخر";
                this.mainServ.APIServ.setErrorCode(0);

            } else this.mainServ.globalServ.somthingError();
        });
    }


    forgetPassword() {
        this.thisDialog.close(true);
    }

    closeModal() {
        this.thisDialog.close();
    }


    public socialSignIn(socialPlatform: string) {
        let socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
        } else if (socialPlatform == "google") {
            socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
        } else if (socialPlatform == "linkedin") {
            socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
        }

        this.socialAuthService.signIn(socialPlatformProvider).then(
            (userData) => {
                console.log(socialPlatform + " sign in data : ", userData);
                // Now sign-in with userData   
                this.loader = true;
                this.mainServ.APIServ.post("users/facebookLogin", userData).subscribe((data: string) => {
                    this.loader = false;
                    if (this.mainServ.APIServ.getErrorCode() == 0) {
                        this.mainServ.loginServ.logIn(data, this.rememberPass);
                    } else this.mainServ.globalServ.somthingError();
                });
            }
        );
    }

    // signInWithFB(): void {
    //     console.log(this.authService.signIn(FacebookLoginProvider.PROVIDER_ID));
    // }


}
