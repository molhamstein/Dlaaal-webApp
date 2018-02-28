import { LoginService } from './../Services/login.service';
import { CallApiService } from './../Services/call-api.service';
import { Component } from '@angular/core';

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.scss']
})
export class ProfileComponent {
    userID
    follwers
    constructor(public APIServe: CallApiService, logInSer: LoginService) {
        this.userID = logInSer.getUserId();
    }
    ngOnInit() {
        this.APIServe.get("users/"+this.userID+"/followers").subscribe(data => {
            this.follwers = data;
        });
 
    }
}
