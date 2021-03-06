import { MainService } from './../Services/main.service';
import { ActivatedRoute } from '@angular/router';
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
    verify = 0;
    constructor(public dialog: MatDialog, public mainServ: MainService, private route: ActivatedRoute) {
        this.route.queryParams
            .filter(params => params.token)
            .subscribe(params => {
                this.token = params.token;
                this.userID = params.uid;
                this.mainServ.APIServ.get("users/confirm?uid=" + this.userID + "&token=" + this.token).subscribe((data: string) => {
                    if (this.mainServ.APIServ.getErrorCode() == 0) {
                        this.verify = 1;
                        // this.mainServ.globalServ.goTo('/')
                    } else this.mainServ.globalServ.somthingError()
                });
            });
    }
    gotoPgage() {
        this.mainServ.globalServ.goTo('/')
    }
    ngOnInit() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }
}
