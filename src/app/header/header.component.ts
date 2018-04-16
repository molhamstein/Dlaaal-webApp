import { MainService } from './../Services/main.service';
import { ForgetPasswordModalComponent } from './../forget-password-modal/forget-password-modal.component';
import { SignUpModalComponent } from './../sign-up-modal/sign-up-modal.component';
import { SignInModalComponent } from './../sign-in-modal/sign-in-modal.component';
import { MatDialog } from '@angular/material';
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
    profileImage;


    array = [];
    throttle = 100;
    scrollDistance = 2;
    scrollUpDistance = 2;
    constructor(public mainServ: MainService, public dialog: MatDialog) {
        this.isLogin = this.mainServ.loginServ.isLogin();

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
            query = { "order": "createdAt DESC", "limit": limit, "skip": skip, "include": ["advertisement"] }

            this.mainServ.APIServ.get("users/" + this.mainServ.loginServ.getUserId() + "/notifications?filter=" + JSON.stringify(query)).subscribe((data: any) => {
                for (var index = 0; index < data.length; index++) {
                    var element = data[index];
                    if (!element.isRead) {
                        this.mainServ.globalServ.editUnreadNotBeh(this.unreadNotBeh + 1)
                    }
                    if (element.advertisement)
                        this.notificationBeh.push(element);
                }
                this.mainServ.globalServ.editNotificationBeh(this.notificationBeh);
            });
        }
    }

    ngOnInit() {
        this.mainServ.globalServ.castUnreadNotBeh.subscribe(unreadNotBeh => this.unreadNotBeh = unreadNotBeh)
        this.mainServ.globalServ.castNotificationBeh.subscribe(notificationBeh => this.notificationBeh = notificationBeh)
        this.getNotification()
        this.profileImage = this.mainServ.loginServ.getAvatar();
        if (this.profileImage == null || this.profileImage == "" || this.profileImage == "undefined") {
            this.profileImage = "assets/imgs/defult_img.jpg"
        }
    }

    visitNot(isRead, id,notId) {
        if (isRead == false) {
            alert("make Read")
            this.mainServ.APIServ.put("users/" + this.mainServ.loginServ.getUserId() + "/mak-notifications-read/" + notId, {}).subscribe((data: any) => {
                this.mainServ.globalServ.editUnreadNotBeh(this.unreadNotBeh - 1);
                this.notificationBeh.find(x => x.id == notId).isRead=true;
                this.mainServ.globalServ.editNotificationBeh(this.notificationBeh);
                this.mainServ.globalServ.goTo2(id)
            })
        } else
            this.mainServ.globalServ.goTo2(id)
    }

    toggleNot() {
        $(".NotificationMenuTop").toggleClass('NotificationMenu--isShown');
    }

    openMenu() {
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
        this.mainServ.loginServ.logout();
    }
    hrefAddAdv() {
        if (this.isLogin) {
            this.mainServ.globalServ.goTo("addAdvertising")
        } else {
            this.openSignInDialog();
        }
    }

}
