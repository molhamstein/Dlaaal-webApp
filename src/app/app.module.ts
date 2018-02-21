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
    SignUpModalComponent,SignInModalComponent,HomePageComponent,AdvertisingComponent,CommunictionModalComponent,HeaderComponent
  ],
  imports: [
    // Main
    BrowserModule,FormsModule,BrowserAnimationsModule,HttpClientModule,
    // Route
    RouterModule.forRoot(routes)
    // material
    ,MatDialogModule,MatFormFieldModule,MatInputModule,InfiniteScrollModule
  ],
  entryComponents:[SignUpModalComponent,SignInModalComponent,CommunictionModalComponent],
  providers: [CookieService,LoginService,CallApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
