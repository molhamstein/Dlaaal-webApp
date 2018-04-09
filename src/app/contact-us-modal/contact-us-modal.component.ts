import { MainService } from './../Services/main.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
    selector: 'contact-us-modal',
    templateUrl: 'contact-us-modal.component.html',
    styleUrls: ['contact-us-modal.component.scss']
})
export class ContactUsModalComponent {
    message;
    mail={};
   
    constructor(public dialogRef: MatDialogRef<ContactUsModalComponent>, public mainServ: MainService) {
    }
     send() {
        if (this.mail['email'] == "" || this.mail['email'] == null) {
            this.message = "الإيميل"
        } else if (this.mail['subject'] == "" || this.mail['subject'] == null) {
            this.message = "العنوان"
        } else if (this.mail['message'] == "" || this.mail['message'] == null) {
            this.message = "الرسالة"
        }
        if (this.message != "") {
            this.message = "الرجاء إدخال حقل " + this.message;
        } else {
            this.mainServ.APIServ.post("users/contactUs", this.mail).subscribe(data => {

                if (this.mainServ.APIServ.getErrorCode() == 0) {
                    this.dialogRef.close(true);

                } else {
                    this.message = "الرجاء المحاولة لاحقاً";
                    this.mainServ.APIServ.setErrorCode(0);
                }
            });
        }
    }
    closeModal() {
        this.dialogRef.close();
    }
}
