import { GlobalService } from './../Services/global.service';
import { ReportModalComponent } from './../report-modal/report-modal.component';
import { FullScreenModalComponent } from './../full-screen-modal/full-screen-modal.component';
import { CommunictionModalComponent } from './../communiction-modal/communiction-modal.component';
import { MatDialog } from '@angular/material';
import { CallApiService } from './../Services/call-api.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: 'advertising',
    templateUrl: 'advertising.component.html',
    styleUrls: ['advertising.component.scss']
})
export class AdvertisingComponent {
    addID;
    advertisemet
    reports;
    constructor(public globalServ:GlobalService,private route: ActivatedRoute, public APIServ: CallApiService, public dialog: MatDialog) {
        this.route.params.subscribe(addID => this.addID = addID.addID);
    }
    ngOnInit() {
        this.APIServ.get("advertisemets/" + this.addID).subscribe(data => {
            this.advertisemet = data;
        });
        this.reports=[{'title': "غير أخلاقي",'id':0},{'title': "متكرر",'id':1},{'title': "غير مسموح",'id':2}]
        
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
            width: '35%',
            data: { phone: this.advertisemet.phone }

        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    makeReport(reportId){
       let reports= this.reports.find(x => x.id == reportId)
       let dialogRef = this.dialog.open(ReportModalComponent, {
            data: { title: reports.title }

        });

        dialogRef.afterClosed().subscribe(result => {
            if(result){
                this.globalServ.goTo("")
            }
        });
    }

}
