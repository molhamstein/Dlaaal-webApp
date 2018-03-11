import { HeaderComponent } from './../header/header.component';
import { ChangePasswordComponent } from './../change-password/change-password.component';
import { MatDialog } from '@angular/material';
import { EditProfileComponent } from './../edit-profile/edit-profile.component';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from './../Services/global.service';
import { LoginService } from './../Services/login.service';
import { CallApiService } from './../Services/call-api.service';
import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.scss']
})
export class ProfileComponent {
    @ViewChild(HeaderComponent) private headerChild: HeaderComponent;
    tabNow;
    loader;
    imageProfile = "assets/imgs/defult_img.jpg";
    uploadingImage = false;
    userID
    isMyProfile: boolean = false;
    userData
    follwers
    loaderBook = false;
    loaderAdd = false;
    noBook = false;
    noAdd = false;
    bookmarks = [];
    advertisemets = [];
    throttle = 100;
    scrollDistance = 2;
    scrollUpDistance = 2;
    constructor(public dialog: MatDialog, public APIServe: CallApiService, public logInSer: LoginService, public globalServ: GlobalService, private route: ActivatedRoute) {
        let param;
        this.route.params.subscribe(data => param = data.userID);
        if (param == "me") {
            this.setTab(1);
            this.isMyProfile = true;
            this.userID = logInSer.getUserId();
        }
        else {
            if (param == logInSer.getUserId()) {
                this.isMyProfile = true;
            }
            this.userID = param
            this.isMyProfile = false;
            this.setTab(2);

        }
    }
    ngOnInit() {
        $("html, body").animate({ scrollTop: 0 }, "slow");

        this.APIServe.get("users/" + this.userID + "/followers").subscribe(data => {
            this.follwers = data;
        });
        if (this.isMyProfile)
            this.getData(true);

        if (this.isMyProfile)
            this.APIServe.get("users/me").subscribe(data => {
                this.userData = data;
            });
        else {
            this.APIServe.get("users/" + this.userID).subscribe(data => {
                this.userData = data;
            });
        }
        this.getData(false);

    }

    openSelectImage() {
        document.getElementById('files').click();
    }

    releadImage(file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var id = 'uploadImage';
            document.getElementById(id).setAttribute('src', reader.result);
            // this.text = reader.result;
        }
        reader.readAsDataURL(file);
    }
    onChange(event: any) {
        this.uploadingImage = true;
        let Fille = event.target.files[0];
        this.releadImage(Fille);


        this.APIServe.uploadImage("files/images/upload", event.target.files, 1).subscribe((data: any) => {
            this.uploadingImage = false;
            data.forEach(element => {
                this.imageProfile = element;
            });
        });
    }

    editProfile() {
        let dialogRef = this.dialog.open(EditProfileComponent, {
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result) {
                this.changePassword();
            }
        });
    }

    changePassword() {
        let dialogRef = this.dialog.open(ChangePasswordComponent, {
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    calculateDate(date) {
        return this.globalServ.calculatDateAdv(date);
    }

    setTab(tabNum) {
        this.tabNow = tabNum;
    }

    isSetTab(tabNum) {
        return this.tabNow == tabNum
    }

    getData(isBookMark, isScrol: boolean = false) {
        let url, query, skip, limit;
        limit = 10;
        if (isScrol == true) {
            if (!isBookMark)
                skip = this.advertisemets.length;
            else
                skip = this.bookmarks.length;
        } else {
            skip = 0;
        }

        if (isBookMark) {
            url = "users/" + this.userID + "/bookmarks?filter=";
            query = { "order": "createdAt ASC", "limit": limit, "skip": skip };
            if (this.noBook || this.loaderBook) {
                return;
            }
            this.loaderBook = true;
        } else {
            url = "advertisemets/actived?filter=";
            query = { "where": { "ownerId": this.userID }, "order": "createdAt ASC", "limit": limit, "skip": skip };
            if (this.noAdd || this.loaderAdd) {
                return;
            }
            this.loaderAdd = true;
        }
        this.APIServe.get(url + JSON.stringify(query)).subscribe((data: any) => {
            if (isBookMark) {
                if (data.length < limit) {
                    this.noBook = true;
                }
                data.forEach(element => {
                    if (element.category)
                        this.bookmarks.push(element);
                });
                this.loaderBook = false;
            } else {
                if (data.length < limit) {
                    this.noAdd = true;
                }
                data.forEach(element => {
                    if (element.category)
                        this.advertisemets.push(element);
                });
                this.loaderAdd = false;

            }
        });

    }
    onScrollDown() {
        if (this.tabNow == 1) {
            this.getData(true, true)
        } else {
            this.getData(false, true)
        }
    }
    cheackOdd(number) {
        return number % 2 == 0;
    }

    isPluse() {
        if (!this.userData.isFollowed && !this.isMyProfile)
            return true;
        else
            return false;
    }
    isMin() {
        if (this.userData.isFollowed && !this.isMyProfile)
            return true;
        else
            return false;
    }

    unFollow() {
        this.APIServe.delete("users/" + this.logInSer.getUserId() + "/following/rel/" + this.userID).subscribe(data => {
            if (this.APIServe.getErrorCode() == 0) {
                this.APIServe.get("users/" + this.userID).subscribe(data => {
                    this.userData = data;
                });
                this.globalServ.errorDialog("إلغاء متابعة", "تم إلغاء المتابعة بنجاح");
            }
        });
    }
    follow() {
        if (this.logInSer.isLogin())
            this.APIServe.put("users/" + this.logInSer.getUserId() + "/following/rel/" + this.userID, { "ownerId": this.userID, "userId": this.logInSer.getUserId() }).subscribe(data => {
                if (this.APIServe.getErrorCode() == 0) {
                    this.APIServe.get("users/" + this.userID).subscribe(data => {
                        this.userData = data;
                    });
                    this.globalServ.errorDialog("القيام بمتابعة", "تمت المتابعة بنجاح");
                }
            });
        else {
            this.headerChild.openSignInDialog();
        }
    }

}
