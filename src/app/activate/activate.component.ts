import { ActivatedRoute } from '@angular/router';
import { CallApiService } from './../Services/call-api.service';
import { GlobalService } from './../Services/global.service';
import { MatDialog } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'activate',
    templateUrl: 'activate.component.html',
    styleUrls: ['activate.component.scss']
})
export class ActivateComponent {
    token;
    userID;
    constructor(public dialog: MatDialog, public globalSer: GlobalService, public APIServe: CallApiService, private route: ActivatedRoute) {
        alert("SSS");
        this.route.queryParams
            .filter(params => params.token)
            .subscribe(params => {
                this.token=params.token;
                this.userID=params.uid;
                this.APIServe.activeAccount("/users/"+this.userID+"/activate", this.token).subscribe((data: string) => {
                    if (this.APIServe.getErrorCode() == 0) {
                        alert("Success")
                        // this.globalSer.goTo('/')
                    } else if (this.APIServe.getErrorCode() == 401) {
                        this.APIServe.setErrorCode(0);
                    }
                });
            });
    }
    ngOnInit() {
       $("html, body").animate({ scrollTop: 0 }, "slow");
    }
}
