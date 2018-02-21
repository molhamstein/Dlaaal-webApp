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
    constructor(private route: ActivatedRoute, public APIServ: CallApiService, public dialog: MatDialog) {
        this.route.params.subscribe(addID => this.addID = addID.addID);
    }
    ngOnInit() {
        this.APIServ.get("advertisemets/" + this.addID).subscribe(data => {
            this.advertisemet = data;
        });
    }

    openCommunicationDialog() {
        let dialogRef = this.dialog.open(CommunictionModalComponent, {
            width: '35%',
            data: { phone :  this.advertisemet.phone}

        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

}
