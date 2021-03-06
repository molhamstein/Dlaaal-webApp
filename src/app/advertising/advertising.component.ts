import { MainService } from './../Services/main.service';
import { EditOrDeactiveModalComponent } from './../edit-or-deactive-modal/edit-or-deactive-modal.component';
import { HeaderComponent } from './../header/header.component';
import { ReportModalComponent } from './../report-modal/report-modal.component';
import { FullScreenModalComponent } from './../full-screen-modal/full-screen-modal.component';
import { CommunictionModalComponent } from './../communiction-modal/communiction-modal.component';
import { MatDialog } from '@angular/material';
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
    lg;
    lg2;
    public carouselTileItems: Array<any>;
    public carouselTile: NgxCarousel;
    constructor(public mainServ: MainService, private route: ActivatedRoute, public dialog: MatDialog) {
        this.route.params.subscribe(addID => this.addID = addID.addID);
        this.advertisemet = {}
        this.isMyAdv = false;
        this.mainServ.APIServ.get("advertisemets/" + this.addID).subscribe(data => {
            if (this.mainServ.APIServ.getErrorCode() == 0) {
                this.advertisemet = data;
                setTimeout(function () {


                    ($("#lightgallery") as any).lightGallery({
                        share: false,
                        thumbnail: false
                    });;
                    ($("#lightgallery2") as any).lightGallery({
                        selector: 'ngx-tile',
                        share: false,
                        thumbnail: false
                    });
                    ($("#lightgallery3") as any).lightGallery({
                        selector: '.AddDetailsForm-imagescontainer-smallimage',
                        share: false,
                        thumbnail: false
                    });;

                    console.log($("#lightgallery"));
                }, 2000);

                if (this.mainServ.loginServ.getUserId() == this.advertisemet.ownerId) {
                    this.isMyAdv = true;
                }
            }
            else
                this.mainServ.globalServ.somthingError()

        });
        this.mainServ.APIServ.get("reports").subscribe(data => {
            if (this.mainServ.APIServ.getErrorCode() == 0)
                this.reports = data;
            else
                this.mainServ.globalServ.somthingError()
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
                this.mainServ.globalServ.goTo("profile/" + this.advertisemet.ownerId)
            }
        });
    }
    makeReport(reportId) {
        if (!this.mainServ.loginServ.isLogin())
            this.headerChild.openSignInDialog();
        else if (reportId != "تبليغ") {
            let reports = this.reports.find(x => x.id == reportId)
            let dialogRef = this.dialog.open(ReportModalComponent, {
                data: { report: reports, userID: this.mainServ.loginServ.getUserId(), addID: this.addID }
            });

            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this.mainServ.globalServ.goTo("")
                }
            });
        }
    }

    addToBookmark() {
        if (this.mainServ.loginServ.isLogin())
            this.mainServ.APIServ.put("users/" + this.mainServ.loginServ.getUserId() + "/bookmarks/rel/" + this.addID, { "ownerId": this.advertisemet.ownerId, "advertisementId": this.addID }).subscribe(data => {
                if (this.mainServ.APIServ.getErrorCode() == 0) {
                    this.advertisemet.isBookmarked = true;
                    this.mainServ.globalServ.errorDialog("إضافة إعلان إلى المفضلة", "تمت الإضافة بنجاح");
                }
                else
                    this.mainServ.globalServ.somthingError()
            });
        else {
            this.headerChild.openSignInDialog();
        }
    }
    deleteFromBookmark() {
        this.mainServ.APIServ.delete("users/" + this.mainServ.loginServ.getUserId() + "/bookmarks/rel/" + this.addID).subscribe(data => {
            if (this.mainServ.APIServ.getErrorCode() == 0) {
                this.advertisemet.isBookmarked = false;
                this.mainServ.globalServ.errorDialog("حذف إعلان من المفضلة", "تم الحذف بنجاح");
            }
            else
                this.mainServ.globalServ.somthingError()
        });
    }

    // chaoesActionModal() {
    //     let dialogRef = this.dialog.open(EditOrDeactiveModalComponent, {
    //         panelClass: 'communictioDialogStyle',
    //         data: { Id: this.advertisemet.id, ads: this.advertisemet }
    //     });

    //     dialogRef.afterClosed().subscribe(result => {
    //         if (result == false) {
    //             this.mainServ.globalServ.goTo("")
    //         } else if (result) {
    //             this.mainServ.globalServ.goTo("edit/" + this.advertisemet.id)
    //         }
    //     });
    // }

    deactive() {
        this.advertisemet.status = "deactive"
        this.mainServ.APIServ.put("advertisemets/" + this.advertisemet.id, this.advertisemet).subscribe(data => {
            if (this.mainServ.APIServ.getErrorCode() == 0) {
                this.mainServ.globalServ.goTo("")
            } else this.mainServ.globalServ.somthingError();
        });
    }
    edit() {
        this.mainServ.globalServ.goTo("edit/" + this.advertisemet.id)
    }
    openLightgallery = function () {
        $("#lightgallery_0").click();
    }

}
