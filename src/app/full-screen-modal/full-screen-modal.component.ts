import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
    selector: 'full-screen-modal',
    templateUrl: 'full-screen-modal.component.html',
    styleUrls: ['full-screen-modal.component.scss']
})
export class FullScreenModalComponent {
URL;
constructor(public dialogRef: MatDialogRef<FullScreenModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.URL=this.data.URL;
    }
}
