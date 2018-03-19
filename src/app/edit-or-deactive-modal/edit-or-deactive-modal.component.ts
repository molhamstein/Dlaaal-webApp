import { MainService } from './../Services/main.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
    selector: 'edit-or-deactive-modal',
    templateUrl: 'edit-or-deactive-modal.component.html',
    styleUrls: ['edit-or-deactive-modal.component.scss']
})
export class EditOrDeactiveModalComponent {
    advId;
    constructor(public dialogRef: MatDialogRef<EditOrDeactiveModalComponent>, public mainServ:MainService, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.advId = data.Id;

    }

    deactive() {
        this.mainServ.APIServ.delete("advertisemets/" + this.advId).subscribe(data => {
            if (this.mainServ.APIServ.getErrorCode() == 0) {
                this.dialogRef.close(false);
            } else this.mainServ.globalServ.somthingError();
        });
    }

    gotToEdit() {
        this.dialogRef.close(true);
    }

    closeModal() {
        this.dialogRef.close();
    }
}
