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

    onScrollDown(ev) {
        console.log('scrolled down!!', ev);

        // add another 20 items
        // const start = this.sum;
        // this.sum += 20;
        // this.appendItems(start, this.sum);

        // this.direction = 'down'
    }



    cities;
    categories;
    mainCategories;
    advertisemets;
    search = {};
    keyFilter = [];



    // forScrool
    array = [];
    sum = 100;
    throttle = 20;
    scrollDistance = 1;
    scrollUpDistance = 2;
    direction = '';


    ngOnInit() {
        this.APIServ.get("cities").subscribe(data => {
            this.cities = data;
        });

        this.APIServ.get("categories").subscribe(data => {
            this.categories = data;
        });

        this.APIServ.get("categories?filter=%7B%22include%22%3A[%22subCategories%22]%7D").subscribe(data => {
            this.mainCategories = data;
        });

        this.APIServ.get("advertisemets/actived").subscribe(data => {
            this.advertisemets = data;
        });

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

    getAdvertisemets(type, data) {
        // let query: string;
        let query;
        
        if (type == 0) {
            query={"where":{"categoryId":data.categoryID}}
            // query = "{\'where\':{\'categoryId:\'" + data.categoryID + ",\'status\':\'active\'}}";
            this.keyFilter = [];
        } else if (type == 1) {
            query={"where":{"categoryId":data.categoryID,"subCategoryId":data.subCategoryID}}
            // query = "{\'where\':{\'categoryId\':" + data.categoryID + ",\'subCategoryId\':" + data.subCategoryID + ",\'status\':\'active\'}}";
            this.keyFilter = this.mainCategories.find(x => x.id == data.categoryID).subCategories.find(y => y.id == data.subCategoryID).fields;
            console.log(this.keyFilter);
        }
        else if (type == 2) {
            query={"where":{"categoryId":data.search.category,"cityId":data.search.city}}            
            // query = "{\'where\':{\'categoryId\':" + data.search.category + ",\'cityId\':" + data.search.city + ",\'status\':\'active\'}}";
        }
        this.APIServ.get("advertisemets/actived?filter=" + JSON.stringify(query)).subscribe(data => {
            this.advertisemets = data;
        });
        console.log(query);
        //         http://104.217.253.15:3000/api/advertisements?filter=
        // {"where":{
        // "categoryId":1,
        // "subCategoryId":3,
        // "status":"active",
        // "cityId":3
        // },
        // "order":"createdAt ASC",
        // "limit":10,
        // "skip":90,
        // "include":["category"]}
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


}
