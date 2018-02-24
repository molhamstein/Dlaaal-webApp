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
    constructor(public dialog: MatDialog, public loginSer: LoginService, public APIServ: CallApiService) {
        this.isLogin = this.loginSer.isLogin();
        this.appendItems(0, this.sum);

    }

    addItems(startIndex, endIndex, _method) {
        for (let i = 0; i < this.sum; ++i) {
            this.array.push(i);
        }
    }


    appendItems(startIndex, endIndex) {
        this.addItems(startIndex, endIndex, 'push');
    }

    prependItems(startIndex, endIndex) {
        this.addItems(startIndex, endIndex, 'unshift');
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
    sum = 100;
    throttle = 100;
    scrollDistance = 2;
    scrollUpDistance = 2;
    direction = '';
    loader: boolean = false;
    lastType;
    lastData;



    ngOnInit() {
        this.search['max']=100000000;
        this.search['min']=0;
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
        if (this.isLogin) {
            let userID = this.loginSer.getUserId();
            this.APIServ.get("users/" + userID + "/notifications").subscribe(data => {
                this.categories = data;
            });
        }

    }

    logout() {
        this.loginSer.logout();
    }

    diff_hours(dt2, dt1) {

        var diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= (60 * 60);
        return Math.abs(Math.round(diff));

    }

    diff_days(dt2, dt1) {

        var diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= (60 * 60 * 24);
        return Math.abs(Math.round(diff));

    }

    diff_week(dt2, dt1) {

        var diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= (60 * 60 * 24 * 7);
        return Math.abs(Math.round(diff));

    }

    diff_month(dt2, dt1) {

        var diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= (60 * 60 * 24 * 30);
        return Math.abs(Math.round(diff));

    }

    calculateDate(date) {
        var time = this.diff_hours(new Date(), new Date(date))
        if (time < 24)
            return time + " ساعة ";
        else if (this.diff_days(new Date(), new Date(date)) < 7)
            return this.diff_days(new Date(), new Date(date)) + " يوم ";
        else if (this.diff_week(new Date(), new Date(date)) < 4)
            return this.diff_week(new Date(), new Date(date)) + " اسبوع ";
        else if (this.diff_month(new Date(), new Date(date)) < 12)
            return this.diff_month(new Date(), new Date(date)) + " شهر ";
        else
            return date


    }

    getAdvertisemets(type, data, isScrol: boolean = false) {

        this.loader = true;
        let query, skip, limit;
        this.lastType = type;
        this.lastData = data;
        limit = 10;
        if (isScrol == true) {
            skip = this.advertisemets.length;
        } else {
            skip = 0;
            this.advertisemets = [];
        }
        if (type == -1) {
            query = { "order": "createdAt ASC", "limit": 10, "skip": 0 };
        } else if (type == 0) {
            this.search['category'] = data.categoryID;
            this.subCategories = this.mainCategories.find(x => x.id == data.categoryID).subCategories;
            query = { "where": { "categoryId": data.categoryID }, "order": "createdAt ASC", "limit": limit, "skip": skip }
            this.keyFilter = [];
        } else if (type == 1) {
            this.search['category'] = data.categoryID;
            this.subCategories = this.mainCategories.find(x => x.id == data.categoryID).subCategories;
            this.search['subCategory'] = data.subCategoryID;
            query = { "where": { "categoryId": data.categoryID, "subCategoryId": data.subCategoryID }, "order": "createdAt ASC", "limit": limit, "skip": skip }
            this.keyFilter = this.mainCategories.find(x => x.id == data.categoryID).subCategories.find(y => y.id == data.subCategoryID).fields;
            console.log(this.keyFilter);
        }
        else if (type == 2) {
            query = { "where": { "categoryId": data.search.category, "cityId": data.search.city }, "order": "createdAt ASC", "limit": limit, "skip": skip }
            // query = "{\'where\':{\'categoryId\':" + data.search.category + ",\'cityId\':" + data.search.city + ",\'status\':\'active\'}}";
        }
        else if (type == 3) {
            query = { "where": { "categoryId": data.search.category, "cityId": data.search.city, "subCategoryId": data.search.subCategory, "price": { "between": [data.search.min, data.search.max] } }, "order": "createdAt ASC", "limit": limit, "skip": skip }
            // query = "{\'where\':{\'categoryId\':" + data.search.category + ",\'cityId\':" + data.search.city + ",\'status\':\'active\'}}";
        }
        this.APIServ.get("advertisemets/actived?filter=" + JSON.stringify(query)).subscribe((data: any) => {
            let test = [];
            // data = JSON.parse(data['_body']);
            data.forEach(element => {
                this.advertisemets.push(element);
            });
            this.loader = false;
        });

    }

    changeCategory(categortID) {
        this.subCategories = this.mainCategories.find(x => x.id == categortID).subCategories;
        this.keyFilter = [];

    }
    changeSubCategory(subCategoryID) {
        this.keyFilter = this.mainCategories.find(x => x.id == this.search["category"]).subCategories.find(y => y.id == subCategoryID).fields;
    }

    openSignUpDialog() {

        let dialogRef = this.dialog.open(SignUpModalComponent, {
            width: '35%',
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
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



    onScrollDown(ev) {
        if (this.lastType != -1)
            this.getAdvertisemets(this.lastType, this.lastData, true);
    }

}


