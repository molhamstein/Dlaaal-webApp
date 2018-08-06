import { EditAdvertisingComponent } from './edit-advertising/edit-advertising.component';
import { ActivateComponent } from './activate/activate.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsComponent } from './terms/terms.component';
import { ProfileComponent } from './profile/profile.component';
import { AddAdvertisingComponent } from './add-advertising/add-advertising.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
// export const routing = RouterModule.forRoot(APP_ROUTES, { enableTracing: true })

export const routes: Routes = [
    {
        path: 'detail/:addID',
        component: AdvertisingComponent
    },{
        path: 'edit/:addID',
        component: EditAdvertisingComponent
    }, {
        path: "home",
        component: HomePageComponent
    }, {
        path: "addAdvertising",
        component: AddAdvertisingComponent
    }, {
        path: "profile/:userID",
        component: ProfileComponent
    }, {
        path: "myprofile/:userID",
        component: ProfileComponent
    }, {
        path: "terms",
        component: TermsComponent
    }, {
        path: "privacy",
        component: PrivacyPolicyComponent
    }, {
        path: "login/reset-password",
        component: ResetPasswordComponent
    }, {
        path: "login/verify",
        component: ActivateComponent
    },
    {
        path: "",
        component: HomePageComponent
    }, {
        path: "**",
        component: HomePageComponent
    }
]