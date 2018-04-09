import { ContactUsModalComponent } from './contact-us-modal/contact-us-modal.component';
import { CallApiService } from './Services/call-api.service';
import { GlobalService } from './Services/global.service';
import { LoginService } from './Services/login.service';
import { SignUpModalComponent } from './sign-up-modal/sign-up-modal.component';
import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(public logInSer: LoginService, public globalServ: GlobalService,  public APIServ: CallApiService, public dialog: MatDialog) {
    
  }
  openContactUs(){
       let dialogRef = this.dialog.open(ContactUsModalComponent, {
            // width: '35%',
        });

        dialogRef.afterClosed().subscribe(result => {
          if(result){
            this.globalServ.errorDialog("إرسال رسالة","تمت عملية الإرسال بنجاح")
          }
        });
  }
  
}

 
