import { CallApiService } from './call-api.service';
import { MatDialog } from '@angular/material';
import { ErrorModalComponent } from './../error-modal/error-modal.component';
import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class GlobalService {
  notification;
  unreadNot;

  private unreadNotBeh = new BehaviorSubject<number>(0);
  private notificationBeh = new BehaviorSubject<any>([]);

  private filteringBeh = new BehaviorSubject<any>({});

  castUnreadNotBeh = this.unreadNotBeh.asObservable();
  castNotificationBeh = this.notificationBeh.asObservable();
  castFilteringBeh = this.filteringBeh.asObservable();
  constructor(private router: Router, private route: ActivatedRoute, public dialog: MatDialog, public APIServe: CallApiService) {
    this.notification = [];
    this.unreadNot = 0;
  }


  goTo2(id) {
    this.router.navigateByUrl('/detail').then(() => this.router.navigateByUrl('/detail/' + id));

  }

  editUnreadNotBeh(unreadNotBeh) {
    this.unreadNotBeh.next(unreadNotBeh);
  }

  editNotificationBeh(notificationBeh) {
    this.notificationBeh.next(notificationBeh);
  }


  editFilteringBeh(filteringBeh) {
    this.filteringBeh.next(filteringBeh);
  }

  getNotification() {
    return this.notification;
  }



  setNotification(notification) {
    this.notification = notification;
  }

  setUnreadNot(unreadNot) {
    this.unreadNot = unreadNot;
  }

  getUnreadNot() {
    return this.unreadNot;
  }

  private diff_minutes(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60);
    return Math.abs(Math.round(diff));

  }

  private diff_hours(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    return Math.abs(Math.round(diff));

  }

  private diff_days(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round(diff));

  }

  private diff_week(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24 * 7);
    return Math.abs(Math.round(diff));

  }

  private diff_month(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24 * 30);
    return Math.abs(Math.round(diff));

  }
  calculatDateAdv(date) {
    var time = this.diff_minutes(new Date(), new Date(date))
    if (time < 1)
      return "الأن"
    else if (time < 60)
      return time + " دقيقة ";
    else if (this.diff_hours(new Date(), new Date(date)) < 24)
      return this.diff_hours(new Date(), new Date(date)) + " ساعة ";
    else if (this.diff_days(new Date(), new Date(date)) < 7)
      return this.diff_days(new Date(), new Date(date)) + " يوم ";
    else if (this.diff_week(new Date(), new Date(date)) < 4)
      return this.diff_week(new Date(), new Date(date)) + " اسبوع ";
    else
      return date

  }

  goTo(newURL) {
    this.router.navigate([newURL]);
  }
  reload() {
    location.reload();
  }

  errorDialog(title, containt, withRefrech: boolean = false) {
    let dialogRef = this.dialog.open(ErrorModalComponent, {
      width: '50%',
      data: { title: title, containt: containt }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (withRefrech == true) {
        location.reload();
      }
    });
  }

  somthingError() {
    this.APIServe.setErrorCode(0);
    this.errorDialog('حدث خطأ', "هناك مشكلة ما")
  }

}
