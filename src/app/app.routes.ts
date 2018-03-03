import { ProfileComponent } from './profile/profile.component';
import { AddAdvertisingComponent } from './add-advertising/add-advertising.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'detail/:addID', component: AdvertisingComponent },
    {
        path: "home",
        component: HomePageComponent
    }, {
        path: "addAdvertising",
        component: AddAdvertisingComponent
    }, {
        path: "profile/:userID",
        component: ProfileComponent
    },{
        path: "**",
        component: HomePageComponent
    },
]