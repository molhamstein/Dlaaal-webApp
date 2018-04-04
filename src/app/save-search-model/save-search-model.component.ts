import { MainService } from './../Services/main.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
    selector: 'save-search-model',
    templateUrl: 'save-search-model.component.html',
    styleUrls: ['save-search-model.component.scss']
})
export class SaveSearchModelComponent {
    constructor(public thisDialog: MatDialogRef<SaveSearchModelComponent>, public mainServ: MainService) {

    }
    message;
    saveName;
    closeModal() {
        this.thisDialog.close();
    }

    save() {
        if (this.saveName == "" || this.saveName == null)
            this.message = "الرجاء إدخال حقل اسم عملية البحث "
        else
            this.thisDialog.close({ "saveName": this.saveName });
    }
}
