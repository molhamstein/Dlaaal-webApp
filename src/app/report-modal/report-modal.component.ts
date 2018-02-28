import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
    selector: 'report-modal',
    templateUrl: 'report-modal.component.html',
    styleUrls: ['report-modal.component.scss']
})
export class ReportModalComponent {
    title;
    constructor(public dialogRef: MatDialogRef<ReportModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.title = data.title;
    }
    cansel() {
        this.dialogRef.close(false);
    }
    ok() {
        this.dialogRef.close(true);
    }
}
