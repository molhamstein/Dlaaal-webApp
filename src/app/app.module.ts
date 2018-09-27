import { SaveSearchModelComponent } from './save-search-model/save-search-model.component';
import { MainService } from './Services/main.service';
import { EditAdvertisingComponent } from './edit-advertising/edit-advertising.component';
import { EditOrDeactiveModalComponent } from './edit-or-deactive-modal/edit-or-deactive-modal.component';
import { ActivateComponent } from './activate/activate.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgetPasswordModalComponent } from './forget-password-modal/forget-password-modal.component';
import { ContactUsModalComponent } from './contact-us-modal/contact-us-modal.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
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
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { PersistenceModule } from 'angular-persistence';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import * as $ from 'jquery';
import { NgxCarouselModule } from 'ngx-carousel';

import 'hammerjs';
import { HttpClientModule } from '@angular/common/http';
import { ImageCompress } from "ngx-image-compress";
import { ImageCompressService, ResizeOptions, ImageUtilityService } from 'ng2-image-compress';
import { Ng2ImgToolsModule } from 'ng2-img-tools'; // <-- import the module

import { Ng2ImgMaxModule } from 'ng2-img-max'; // <-- import the module


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy } from '@angular/common';



import { RecaptchaModule, RecaptchaSettings, RECAPTCHA_SETTINGS } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import { AppComponent } from './app.component';

const globalSettings: RecaptchaSettings = { siteKey: '6LcOuyYTAAAAAHTjFuqhA52fmfJ_j5iFk5PsfXaU' };

@NgModule({
  declarations: [
    AppComponent,
    SignUpModalComponent, SaveSearchModelComponent, EditAdvertisingComponent, EditOrDeactiveModalComponent, ActivateComponent, ResetPasswordComponent, ForgetPasswordModalComponent, ContactUsModalComponent, TermsComponent, PrivacyPolicyComponent, ChangePasswordComponent, EditProfileComponent, ErrorModalComponent, ReportModalComponent, FullScreenModalComponent, SignInModalComponent, HomePageComponent, AdvertisingComponent, CommunictionModalComponent, AddAdvertisingComponent, HeaderComponent, ProfileComponent
  ],
  imports: [
    ReactiveFormsModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    // Main
    BrowserModule, FormsModule, BrowserAnimationsModule, HttpClientModule, NgxCarouselModule, PersistenceModule,
    // Route
    RouterModule.forRoot(routes, { useHash: true })

    // material
    , MatDialogModule, MatFormFieldModule, MatInputModule, InfiniteScrollModule, MatSliderModule,
    // comprase Image
    Ng2ImgToolsModule, Ng2ImgMaxModule
  ],
  entryComponents: [ChangePasswordComponent, SaveSearchModelComponent, EditOrDeactiveModalComponent, ForgetPasswordModalComponent, ContactUsModalComponent, EditProfileComponent, SignUpModalComponent, ErrorModalComponent, ReportModalComponent, SignInModalComponent, CommunictionModalComponent, FullScreenModalComponent],
  providers: [
    {
    provide: RECAPTCHA_SETTINGS,
    useValue: globalSettings
  }
    , MainService, CookieService, LoginService, CallApiService, GlobalService, ImageCompressService, ResizeOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }
