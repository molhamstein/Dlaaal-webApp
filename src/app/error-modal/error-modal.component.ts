import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
    selector: 'error-modal',
    templateUrl: 'error-modal.component.html',
    styleUrls: ['error-modal.component.scss']
})
export class ErrorModalComponent {
      title;
      containt;
    constructor(public dialogRef: MatDialogRef<ErrorModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.title = data.title;
        this.containt = data.containt;
    }
    cansel() {
        this.dialogRef.close(false);
    }
}
