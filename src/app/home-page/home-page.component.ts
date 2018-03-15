import { ForgetPasswordModalComponent } from './../forget-password-modal/forget-password-modal.component';
import { GlobalService } from './../Services/global.service';
import { element } from 'protractor';
import { CallApiService } from './../Services/call-api.service';
import { SignInModalComponent } from './../sign-in-modal/sign-in-modal.component';
import { LoginService } from './../Services/login.service';
import { SignUpModalComponent } from './../sign-up-modal/sign-up-modal.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

@Component({
    selector: 'home-page',
    templateUrl: 'home-page.component.html',
    styleUrls: ['home-page.component.scss']
})
export class HomePageComponent {
    isLogin: boolean;
    constructor(public globalServ: GlobalService, public dialog: MatDialog, public loginSer: LoginService, public APIServ: CallApiService) {
        this.isLogin = this.loginSer.isLogin();
        this.noData = false;

    }






    cities;
    categories;
    mainCategories;
    advertisemets;
    search = {};
    keyFilter = [];
    subCategories;


    // forScrool
    array = [];
    throttle = 100;
    scrollDistance = 2;
    scrollUpDistance = 2;
    direction = '';
    loader: boolean = false;
    lastType;
    lastData;
    noData: boolean;
    notificationBeh = [];
    unreadNotBeh;


    ngOnInit() {
        this.search['fields'] = []
        this.globalServ.castUnreadNotBeh.subscribe(unreadNotBeh => this.unreadNotBeh = unreadNotBeh)
        this.globalServ.castNotificationBeh.subscribe(notificationBeh => this.notificationBeh = notificationBeh)
        $("html, body").animate({ scrollTop: 0 }, "slow");

        this.search['max'] = 100000000;
        this.search['min'] = 0;
        this.APIServ.get("cities").subscribe(data => {
            this.cities = data;
        });

        this.APIServ.get("categories").subscribe(data => {
            this.categories = data;
        });

        this.APIServ.get("categories?filter=%7B%22include%22%3A[%22subCategories%22]%7D").subscribe(data => {
            this.mainCategories = data;

        });
        this.getAdvertisemets(-1, {});

        window.addEventListener('scroll', this.scroll, true); //third parameter


    }

    ngOnDestroy() {
        window.removeEventListener('scroll', this.scroll, true);
    }


    getNotification(isScroll: boolean = false) {
        let limit, skip, query;
        if (isScroll) {
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
    onScrollUpNoti() {
        this.getNotification(true);

    }

    visitNot(isRead, id) {

    }

    scroll() {
        var topOfOthDiv = $(".CategoriesContainer").offset().top;
        if ($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            // this.viewNavBar=true;

            $(".MenuContainer").fadeIn('slow');
            // $("#dvid").show(); //reached the desired point -- show div
        } else {
            $(".MenuContainer").fadeOut('slow');
            // this.viewNavBar=false;
        }
        //handle your scroll here
        //notice the 'odd' function assignment to a class field
        //this is used to be able to remove the event listener
    };
    logout() {
        this.loginSer.logout();
    }

    toggleNot() {
        $(".NotificationMenuDown").toggleClass('NotificationMenu--isShown');
    }


    calculateDate(date) {
        return this.globalServ.calculatDateAdv(date);
    }

    getAdvertisemets(type, data, isScrol: boolean = false, isTopSearch: boolean = false) {
        if (isScrol && this.noData || this.loader == true) {
            return;
        } else {
            this.noData = false
        }
        let query, skip, limit;
        this.lastType = type;
        this.lastData = data;
        limit = 10;
        if (isScrol == true) {
            skip = this.advertisemets.length;
        } else {
            skip = 0;
            if (!(type == 0 && isTopSearch))
                this.advertisemets = [];
        }
        if (type == -1) {
            query = { "order": "createdAt ASC", "limit": 10, "skip": 0 };
        } else if (type == 0) {
            if (!isScrol) {
                $('html, body').animate({
                    scrollTop: $(".ItemsContainer").offset().top - 100
                }, 2000);

            }
            this.search['category'] = data.categoryID;
            this.subCategories = this.mainCategories.find(x => x.id == data.categoryID).subCategories;
            query = { "where": { "categoryId": data.categoryID }, "order": "createdAt ASC", "limit": limit, "skip": skip }
            this.keyFilter = [];
        } else if (type == 1) {
            if (!isScrol) {
                $('html, body').animate({
                    scrollTop: $(".ItemsContainer").offset().top - 100
                }, 2000);

            }
            this.search['category'] = data.categoryID;
            this.subCategories = this.mainCategories.find(x => x.id == data.categoryID).subCategories;
            this.search['subCategory'] = data.subCategoryID;
            query = { "where": { "categoryId": data.categoryID, "subCategoryId": data.subCategoryID }, "order": "createdAt ASC", "limit": limit, "skip": skip }
            this.keyFilter = this.mainCategories.find(x => x.id == data.categoryID).subCategories.find(y => y.id == data.subCategoryID).fields;
            if (!isScrol)
                this.keyFilter.forEach((element, index) => {
                    this.search['fields'][index] = {};
                });
        }
        else if (type == 2) {
            if (isTopSearch && !isScrol) {
                $('html, body').animate({
                    scrollTop: $(".ItemsContainer").offset().top - 100
                }, 2000);
            }
            if (data.search.title != "" && data.search.title != null) {
                // let title = "%" + data.search.title + "%"
                query = { "where": { "categoryId": data.search.category, "cityId": data.search.city, "title": { "like": data.search.title } }, "order": "createdAt ASC", "limit": limit, "skip": skip }
            } else
                query = { "where": { "categoryId": data.search.category, "cityId": data.search.city }, "order": "createdAt ASC", "limit": limit, "skip": skip }

        }
        else if (type == 3) {
            console.log(this.search['fields']);
            let fiedsQuery = [];
            if (this.keyFilter.length != 0) {
                this.keyFilter.forEach((element, index) => {
                    if (this.search['fields'][index].value != "" && this.search['fields'][index].value != null) {
                        alert(element.key);
                        fiedsQuery.push({
                            "fields": {
                                "elemMatch": {
                                    "key": element.key,
                                    "value": this.search['fields'][index].value
                                }
                            }
                        })
                    }
                });
            }
            if (data.search.title != "" && data.search.title != null) {
                if (fiedsQuery.length == 0)
                    query = { "where": { "title": { "like": data.search.title }, "categoryId": data.search.category, "cityId": data.search.city, "subCategoryId": data.search.subCategory, "price": { "between": [data.search.min, data.search.max.toFixed(25)] } }, "order": "createdAt ASC", "limit": limit, "skip": skip }
                else
                    query = { "where": { "and": fiedsQuery, "title": { "like": data.search.title }, "categoryId": data.search.category, "cityId": data.search.city, "subCategoryId": data.search.subCategory, "price": { "between": [data.search.min, data.search.max.toFixed(25)] } }, "order": "createdAt ASC", "limit": limit, "skip": skip }

            }
            else
                if (fiedsQuery.length == 0)
                    query = { "where": { "categoryId": data.search.category, "cityId": data.search.city, "subCategoryId": data.search.subCategory, "price": { "between": [data.search.min, data.search.max.toFixed(25)] } }, "order": "createdAt ASC", "limit": limit, "skip": skip }
                else
                    query = { "where": { "and": fiedsQuery, "categoryId": data.search.category, "cityId": data.search.city, "subCategoryId": data.search.subCategory, "price": { "between": [data.search.min, data.search.max.toFixed(25)] } }, "order": "createdAt ASC", "limit": limit, "skip": skip }

        }
        if (!(type == 0 && isTopSearch)) {
            this.loader = true;
            this.getData(query, isScrol, limit, type);

        }
        else {
            setTimeout(() => {
                this.advertisemets = [];
                this.loader = true;
                this.getData(query, isScrol, limit, type);
            }, 1500)
        }

    }



    getData(query, isScrol, limit, type) {
        this.APIServ.get("advertisemets/actived?filter=" + JSON.stringify(query)).subscribe((data: any) => {
            if (this.APIServ.getErrorCode() == 0) {
                if (data.length == 0) {
                    this.noData = true;
                } else {
                    if (data.length < limit && type != -1)
                        this.noData = true;
                    data.forEach(element => {
                        if (element.category)
                            this.advertisemets.push(element);
                    });
                }
            } else this.globalServ.somthingError()
            this.loader = false;
        });
    }

    reseat() {
        this.getAdvertisemets(-1, {});
    }
    openMenu() {
        $(".DropMenu-Down").toggleClass('DropMenu--isShown');
    }

    changeCategory(categortID) {
        this.subCategories = this.mainCategories.find(x => x.id == categortID).subCategories;
        this.keyFilter = [];

    }
    changeSubCategory(subCategoryID) {
        this.search["fields"] = [];
        this.keyFilter = this.mainCategories.find(x => x.id == this.search["category"]).subCategories.find(y => y.id == subCategoryID).fields;
        this.keyFilter.forEach((element, index) => {
            this.search['fields'][index] = {};
        });
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

    onScrollDown(ev) {
        if (this.lastType != -1)
            this.getAdvertisemets(this.lastType, this.lastData, true);
    }
    hrefAddAdv() {
        if (this.isLogin) {
            this.globalServ.goTo("addAdvertising")
        } else {
            this.openSignInDialog();
        }
    }

    cheackOdd(number) {
        if ($('.FiltersPanelContianer').is(':visible')) {
            return true;
        }
        // console.log (this.keyFilter.length==0);
        return number % 2 == 0;
    }

}


