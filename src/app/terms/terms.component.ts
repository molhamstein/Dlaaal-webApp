import { Component } from '@angular/core';

@Component({
    selector: 'terms',
    templateUrl: 'terms.component.html',
    styleUrls: ['terms.component.scss']
})
export class TermsComponent {
ngOnInit() {
       $("html, body").animate({ scrollTop: 0 }, "slow");
    }
}
