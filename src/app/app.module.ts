import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ErrorModalComponent } from './error-modal/error-modal.component';
import { ReportModalComponent } from './report-modal/report-modal.component';
import { FullScreenModalComponent } from './full-screen-modal/full-screen-modal.component';
import { GlobalService } from './Services/global.service';
import { ProfileComponent } from './profile/profile.component';
import { AddAdvertisingComponent } from './add-advertising/add-advertising.component';
import { HeaderComponent } from './header/header.component';
import { CommunictionModalComponent } from './communiction-modal/communiction-modal.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { CallApiService } from './Services/call-api.service';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { SignInModalComponent } from './sign-in-modal/sign-in-modal.component';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './Services/login.service';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpModalComponent } from './sign-up-modal/sign-up-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import 'hammerjs';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms'; 




import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpModalComponent,ChangePasswordComponent,EditProfileComponent,ErrorModalComponent,ReportModalComponent,FullScreenModalComponent,SignInModalComponent,HomePageComponent,AdvertisingComponent,CommunictionModalComponent,AddAdvertisingComponent,HeaderComponent,ProfileComponent
  ],
  imports: [
    // Main
    BrowserModule,FormsModule,BrowserAnimationsModule,HttpClientModule,
    // Route
    RouterModule.forRoot(routes)
    // material
    ,MatDialogModule,MatFormFieldModule,MatInputModule,InfiniteScrollModule,MatSliderModule
  ],
  entryComponents:[ChangePasswordComponent,EditProfileComponent,SignUpModalComponent,ErrorModalComponent,ReportModalComponent,SignInModalComponent,CommunictionModalComponent,FullScreenModalComponent],
  providers: [CookieService,LoginService,CallApiService,GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
