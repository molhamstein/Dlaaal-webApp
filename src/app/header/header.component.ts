import { ForgetPasswordModalComponent } from './../forget-password-modal/forget-password-modal.component';
import { GlobalService } from './../Services/global.service';
import { SignUpModalComponent } from './../sign-up-modal/sign-up-modal.component';
import { SignInModalComponent } from './../sign-in-modal/sign-in-modal.component';
import { MatDialog } from '@angular/material';
import { LoginService } from './../Services/login.service';
import { CallApiService } from './../Services/call-api.service';
import { Component, Input } from '@angular/core';



@Component({
    selector: 'header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent {
    isLogin: boolean;
    notificationBeh = [];
    unreadNotBeh;



    array = [];
    throttle = 100;
    scrollDistance = 2;
    scrollUpDistance = 2;
    constructor(public globalServ: GlobalService, public dialog: MatDialog, public loginSer: LoginService, public APIServ: CallApiService) {
        this.isLogin = this.loginSer.isLogin();

        // this.unreadNot=5;

    }

    onScrollDownNoti() {
        if ($(".NotificationMenuTop").hasClass("NotificationMenu--isShown")) {
            this.getNotification(true)
        }

    }

    getNotification(isScroll: boolean = false) {
        let unreadNot = 0;
        let limit, skip, query;
        if (this.isLogin && this.notificationBeh.length == 0 || isScroll) {
            limit = 5;
            skip = this.notificationBeh.length;
            query = { "order": "createdAt ASC", "limit": limit, "skip": skip, "include": ["advertisement"] }

            this.APIServ.get("users/" + this.loginSer.getUserId() + "/notifications?filter=" + JSON.stringify(query)).subscribe((data: any) => {
                for (var index = 0; index < data.length; index++) {
                    var element = data[index];
                    if (!element.isRead) {
                        this.globalServ.editUnreadNotBeh(this.unreadNotBeh + 1)
                    }
                    if (element.advertisement)
                        this.notificationBeh.push(element);
                }
                this.globalServ.editNotificationBeh(this.notificationBeh);
            });
        }
    }

    ngOnInit() {
        this.globalServ.castUnreadNotBeh.subscribe(unreadNotBeh => this.unreadNotBeh = unreadNotBeh)
        this.globalServ.castNotificationBeh.subscribe(notificationBeh => this.notificationBeh = notificationBeh)
        this.getNotification()

    }

    visitNot(isRead, idNot,idAdd) {
        if(isRead){
            this.globalServ.goTo2(idAdd)
        }
    }
    toggleNot() {
        $(".NotificationMenuTop").toggleClass('NotificationMenu--isShown');
    }

    openMenu(){
        $(".DropMenu-Top").toggleClass('DropMenu--isShown');
    }
    openSignUpDialog() {

        let dialogRef = this.dialog.open(SignUpModalComponent, {
            // width: '35%',
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
            // width: '35%',
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result) {
                this.openForgetPassDialog();
            }
        });
    }

    openForgetPassDialog() {
        let dialogRef = this.dialog.open(ForgetPasswordModalComponent, {
            // width: '35%',
            // width: '50%',
            panelClass: 'communictioDialogStyle',

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
