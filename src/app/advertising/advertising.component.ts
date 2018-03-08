import { HeaderComponent } from './../header/header.component';
import { LoginService } from './../Services/login.service';
import { GlobalService } from './../Services/global.service';
import { ReportModalComponent } from './../report-modal/report-modal.component';
import { FullScreenModalComponent } from './../full-screen-modal/full-screen-modal.component';
import { CommunictionModalComponent } from './../communiction-modal/communiction-modal.component';
import { MatDialog } from '@angular/material';
import { CallApiService } from './../Services/call-api.service';
import { Component, ViewChild } from '@angular/core';
import { Directive } from '@angular/core';

import { ActivatedRoute } from "@angular/router";



@Component({
    selector: 'advertising',
    templateUrl: 'advertising.component.html',
    styleUrls: ['advertising.component.scss']

})
export class AdvertisingComponent {
    @ViewChild(HeaderComponent) private headerChild: HeaderComponent;

    addID;
    advertisemet;
    reports;
    constructor(public logInSer: LoginService, public globalServ: GlobalService, private route: ActivatedRoute, public APIServ: CallApiService, public dialog: MatDialog) {
        this.route.params.subscribe(addID => this.addID = addID.addID);
        this.advertisemet={}
        this.APIServ.get("advertisemets/" + this.addID).subscribe(data => {
            this.advertisemet = data;
        });
        this.APIServ.get("reports").subscribe(data => {
            this.reports = data;
        });
    }
        onRefresh() {
        alert("SSS");
    }
    ngOnInit() {
       $("html, body").animate({ scrollTop: 0 }, "slow");
        // this.APIServ.get("advertisemets/" + this.addID).subscribe(data => {
        //     this.advertisemet = data;
        // });
        // this.APIServ.get("reports").subscribe(data => {
        //     this.reports = data;
        // });
        // this.reports=[{'title': "غير أخلاقي",'id':0},{'title': "متكرر",'id':1},{'title': "غير مسموح",'id':2}]

    }

    openFullScreenImage(imageURL) {
        let dialogRef = this.dialog.open(FullScreenModalComponent, {
            width: '100%',
            panelClass: 'myDialogStyle',
            data: { URL: imageURL }

        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    openCommunicationDialog() {
        let dialogRef = this.dialog.open(CommunictionModalComponent, {
            // width: '35%',
            panelClass: 'communictioDialogStyle',
            data: { phone: this.advertisemet.phone }

        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result) {
                this.globalServ.goTo("profile/" + this.advertisemet.ownerId)
            }
        });
    }
    makeReport(reportId) {
        if (!this.logInSer.isLogin())
            this.headerChild.openSignInDialog();
        else {
            let reports = this.reports.find(x => x.id == reportId)
            let dialogRef = this.dialog.open(ReportModalComponent, {
                data: { report: reports, userID: this.logInSer.getUserId(), addID: this.addID }
            });

            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this.globalServ.goTo("")
                }
            });
        }
    }

    addToBookmark() {
        if (this.logInSer.isLogin())
            this.APIServ.put("users/" + this.logInSer.getUserId() + "/bookmarks/rel/" + this.addID, { "ownerId": this.advertisemet.ownerId, "advertisementId": this.addID }).subscribe(data => {
                if (this.APIServ.getErrorCode() == 0) {
                    this.advertisemet.isBookmarked = true;
                    this.globalServ.errorDialog("إضافة إعلان إلى المفضلة", "تمت الإضافة بنجاح");
                }
            });
        else {
            this.headerChild.openSignInDialog();
        }
    }
    deleteFromBookmark() {
        this.APIServ.delete("users/" + this.logInSer.getUserId() + "/bookmarks/rel/" + this.addID).subscribe(data => {
            if (this.APIServ.getErrorCode() == 0) {
                this.advertisemet.isBookmarked = false;
                this.globalServ.errorDialog("حذف إعلان من المفضلة", "تم الحذف بنجاح");
            }
        });
    }


}
