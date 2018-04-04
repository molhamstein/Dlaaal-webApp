import { MainService } from './../Services/main.service';
import { HeaderComponent } from './../header/header.component';
import { ChangePasswordComponent } from './../change-password/change-password.component';
import { MatDialog } from '@angular/material';
import { EditProfileComponent } from './../edit-profile/edit-profile.component';
import { ActivatedRoute } from '@angular/router';
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
    imageProfile;
    uploadingImage = false;
    userID
    isMyProfile: boolean = false;
    userData
    follwers
    loaderBook = false;
    loaderSearch = false;
    loaderAdd = false;
    noBook = false;
    noAdd = false;
    noSearch = false;
    bookmarks = [];
    searches = [];
    advertisemets = [];
    throttle = 100;
    scrollDistance = 2;
    scrollUpDistance = 2;
    constructor(public dialog: MatDialog, public mainServ: MainService, private route: ActivatedRoute) {
        let param;
        this.userData = {}
        this.route.params.subscribe(data => param = data.userID);
        if (param == "me") {
            this.setTab(1);
            this.isMyProfile = true;
            this.userID = mainServ.loginServ.getUserId();
        }
        else {
            if (param == mainServ.loginServ.getUserId()) {
                this.isMyProfile = true;
            }
            this.userID = param
            this.isMyProfile = false;
            this.setTab(2);

        }
    }
    ngOnInit() {
        $("html, body").animate({ scrollTop: 0 }, "slow");

        this.mainServ.APIServ.get("users/" + this.userID + "/followers").subscribe(data => {
            this.follwers = data;
        });
        if (this.isMyProfile) {
            this.getData(1);
            this.getData(3);
        }
        if (this.isMyProfile)
            this.mainServ.APIServ.get("users/me").subscribe(data => {
                this.userData = data;
                if (this.userData['avatar'] == null)
                    this.imageProfile = "assets/imgs/defult_img.jpg";
                else
                    this.imageProfile = this.userData['avatar'];

            });
        else {
            this.mainServ.APIServ.get("users/" + this.userID).subscribe(data => {
                this.userData = data;
                if (this.userData['avatar'] == null)
                    this.imageProfile = "assets/imgs/defult_img.jpg";
                else
                    this.imageProfile = this.userData['avatar'];

            });
        }
        this.getData(2);

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


        this.mainServ.APIServ.uploadImage("files/images/upload", event.target.files, 1).subscribe((data: any) => {
            if (this.mainServ.APIServ.getErrorCode() == 0) {
                this.uploadingImage = false;
                data.forEach(element => {
                    this.imageProfile = element;
                });
                this.userData['avatar'] = this.imageProfile;
                this.mainServ.APIServ.put("/users/" + this.userData['id'], this.userData).subscribe(data => {

                    if (this.mainServ.APIServ.getErrorCode() == 0) {
                        this.mainServ.globalServ.errorDialog('تعديل الصورة الشخصية', "تم تعديل الصورة بنجاح");
                        this.mainServ.loginServ.setAvatar(this.imageProfile);
                    } else
                        this.mainServ.globalServ.somthingError()
                });


            }
            else {
                this.mainServ.globalServ.somthingError();
            }

        });
    }

    editProfile() {
        let dialogRef = this.dialog.open(EditProfileComponent, {
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.changePassword();
            } else if (result == false)
                this.mainServ.globalServ.errorDialog('تعديل الحساب', 'تم تعديل معلومات الحساب', true)
        });
    }

    changePassword() {
        let dialogRef = this.dialog.open(ChangePasswordComponent, {
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result)
                this.mainServ.globalServ.errorDialog('تعديل الحساب', 'تم تعديل كلمة السر')
            console.log('The dialog was closed');
        });
    }

    calculateDate(date) {
        return this.mainServ.globalServ.calculatDateAdv(date);
    }

    setTab(tabNum) {
        this.tabNow = tabNum;
    }

    isSetTab(tabNum) {
        return this.tabNow == tabNum
    }

    getTab() {
        return this.tabNow;
    }

    getData(setNum, isFirst: boolean = false, isScrol: boolean = false) {
        let url, query, skip, limit;
        limit = 10;
        if (isScrol == true) {
            if (setNum == 2)
                skip = this.advertisemets.length;
            else if (setNum == 1)
                skip = this.bookmarks.length;
            else
                skip = this.searches.length;

        } else {
            skip = 0;
        }

        if (setNum == 1) {
            url = "users/" + this.userID + "/bookmarks?filter=";
            query = { "order": "createdAt ASC", "limit": limit, "skip": skip };
            if (this.noBook || this.loaderBook) {
                return;
            }
            this.loaderBook = true;
        } else if (setNum == 2) {
            url = "advertisemets/actived?filter=";
            query = { "where": { "ownerId": this.userID }, "order": "createdAt ASC", "limit": limit, "skip": skip };
            if (this.noAdd || this.loaderAdd) {
                return;
            }
            this.loaderAdd = true;
        }
        else {
            url = "searches?filter=";
            query = { "where": { "ownerId": this.userID }, "order": "createdAt ASC", "limit": limit, "skip": skip };
            if (this.noSearch || this.loaderSearch) {
                return;
            }
            this.loaderSearch = true;
        }
        this.mainServ.APIServ.get(url + JSON.stringify(query)).subscribe((data: any) => {
            if (this.mainServ.APIServ.getErrorCode() == 0) {

                if (setNum == 1) {
                    if (data.length < limit) {
                        this.noBook = true;
                    }
                    data.forEach(element => {
                        if (element.category)
                            this.bookmarks.push(element);
                    });
                    this.loaderBook = false;
                } else if (setNum == 2) {
                    if (data.length < limit) {
                        this.noAdd = true;
                    }
                    data.forEach(element => {
                        if (element.category)
                            this.advertisemets.push(element);
                    });
                    this.loaderAdd = false;

                } else {
                    if (data.length < limit) {
                        this.noSearch = true;
                    }
                    data.forEach(element => {
                        this.searches.push(element);
                    });
                    this.loaderSearch = false;
                }
            } else this.mainServ.globalServ.somthingError();
        });

    }
    onScrollDown() {
        this.getData(this.tabNow, false, true)
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
        this.mainServ.APIServ.delete("users/" + this.mainServ.loginServ.getUserId() + "/following/rel/" + this.userID).subscribe(data => {
            if (this.mainServ.APIServ.getErrorCode() == 0) {
                this.mainServ.APIServ.get("users/" + this.userID).subscribe(data => {
                    this.userData = data;
                });
                this.mainServ.globalServ.errorDialog("إلغاء متابعة", "تم إلغاء المتابعة بنجاح");
            }
        });
    }
    follow() {
        if (this.mainServ.loginServ.isLogin())
            this.mainServ.APIServ.put("users/" + this.mainServ.loginServ.getUserId() + "/following/rel/" + this.userID, {}).subscribe(data => {
                if (this.mainServ.APIServ.getErrorCode() == 0) {
                    this.mainServ.APIServ.get("users/" + this.userID).subscribe(data => {
                        this.userData = data;
                    });
                    this.mainServ.globalServ.errorDialog("القيام بمتابعة", "تمت المتابعة بنجاح");
                }
            });
        else {
            this.headerChild.openSignInDialog();
        }
    }

    deleteSearch(id, index) {
        this.mainServ.APIServ.delete("searches/" + id).subscribe(data => {
            if (this.mainServ.APIServ.getErrorCode() == 0) {
                this.searches.splice(index, 1);
                this.mainServ.globalServ.errorDialog("حذف", "تمت عملية الحذف بنجاح");
            }
        });
    }

    applyFilter(index) {
        this.mainServ.globalServ.editFilteringBeh(this.searches[index]);
        this.mainServ.globalServ.goTo("/")
    }

}
