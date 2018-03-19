import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
    selector: 'contact-us-modal',
    templateUrl: 'contact-us-modal.component.html',
    styleUrls: ['contact-us-modal.component.scss']
})
export class ContactUsModalComponent {
message;
mail;
send(){
    
}
    constructor( public dialogRef: MatDialogRef<ContactUsModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    }
    closeModal(){
        this.dialogRef.close();
    }
}
