import { MainService } from './../Services/main.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
    selector: 'report-modal',
    templateUrl: 'report-modal.component.html',
    styleUrls: ['report-modal.component.scss']
})
export class ReportModalComponent {
    title;
    addID;
    userID;
    reportID;
    constructor(public mainServ: MainService ,public dialogRef: MatDialogRef<ReportModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.title = data.report.name;
        this.reportID = data.report.id;
        this.addID = data.addID;
        this.userID = data.userID;
    }
    cansel() {
        this.dialogRef.close(false);
    }
    ok() {
        let data = {
            "userId": this.userID,
            "reportId": 0,
            "advertisementId": this.addID
        }
        this.mainServ.APIServ.post("advertisemets/" + this.addID + "/reports", data).subscribe((data: string) => {
            if (this.mainServ.APIServ.getErrorCode() == 0) {
                this.dialogRef.close(true);
            }else this.mainServ.globalServ.somthingError();
            });
    }
    closeModal() {
        this.dialogRef.close();
    }
}
