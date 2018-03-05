import { Component } from '@angular/core';

@Component({
    selector: 'privacy-policy',
    templateUrl: 'privacy-policy.component.html',
    styleUrls: ['privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {
    ngOnInit() {
       $("html, body").animate({ scrollTop: 0 }, "slow");
    }

}
