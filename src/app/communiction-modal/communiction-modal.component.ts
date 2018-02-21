import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
    selector: 'communiction-modal',
    templateUrl: 'communiction-modal.component.html',
    styleUrls: ['communiction-modal.component.scss']
})
export class CommunictionModalComponent {
    constructor(public dialogRef: MatDialogRef<CommunictionModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
        
    }
}
