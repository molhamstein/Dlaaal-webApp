import { EditOrDeactiveModalComponent } from './../edit-or-deactive-modal/edit-or-deactive-modal.component';
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

import { NgxCarousel } from 'ngx-carousel';




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
    isMyAdv: boolean;
    public carouselTileItems: Array<any>;
    public carouselTile: NgxCarousel;
    constructor(public logInSer: LoginService, public globalServ: GlobalService, private route: ActivatedRoute, public APIServ: CallApiService, public dialog: MatDialog) {
        this.route.params.subscribe(addID => this.addID = addID.addID);
        this.advertisemet = {}
        this.isMyAdv = false;
        this.APIServ.get("advertisemets/" + this.addID).subscribe(data => {
            if (this.APIServ.getErrorCode() == 0) {
                this.advertisemet = data;
                if (this.logInSer.getUserId() == this.advertisemet.ownerId) {
                    this.isMyAdv = true;
                }
            }
            else
                this.globalServ.somthingError()

        });
        this.APIServ.get("reports").subscribe(data => {
            if (this.APIServ.getErrorCode() == 0)
                this.reports = data;
            else
                this.globalServ.somthingError()
        });
    }

    ngOnInit() {

        $("html, body").animate({ scrollTop: 0 }, "slow");
        this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        this.carouselTile = {
            grid: { xs: 1, sm: 2, md: 3, lg: 5, all: 0 },
            slide: 2,
            speed: 400,
            animation: 'lazy',
            point: {
                visible: true,
                pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 50%;
            border: 1px solid rgb(115, 115, 115);
            padding: 4px;
            background-color: rgba(0, 0, 0, 0.55);
            margin: 0 3px;
            transition-timing-function: cubic-bezier(.17, .67, .83, .67);
            transition: .4s;
          }
          .ngxcarouselPoint li.active {
            background: #31b70d;
            border: 1px solid rgb(49, 183, 13);
            transform: scale(1.2);
          }
        `
            },
            load: 2,
            touch: true,
            loop: true,
            easing: 'ease'

        }
    }

    public onmoveFn(event: Event) {
        // carouselLoad will trigger this funnction when your load value reaches
        // it is helps to load the data by parts to increase the performance of the app
        // must use feature to all carousel
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
            data: { phone: this.advertisemet.owner.phone }

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
        else if (reportId != "تبليغ") {
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
                else
                    this.globalServ.somthingError()
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
            else
                this.globalServ.somthingError()
        });
    }

    chaoesActionModal() {
        let dialogRef = this.dialog.open(EditOrDeactiveModalComponent, {
            panelClass: 'communictioDialogStyle',
            data: { Id: this.advertisemet.id }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result == false) {
                this.globalServ.goTo("")
            } else if (result) {
                this.globalServ.goTo("edit/" + this.advertisemet.id)
            }
        });
    }


}
