import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  constructor() {

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
    var time = this.diff_hours(new Date(), new Date(date))
    if (time < 24)
      return time + " ساعة ";
    else if (this.diff_days(new Date(), new Date(date)) < 7)
      return this.diff_days(new Date(), new Date(date)) + " يوم ";
    else if (this.diff_week(new Date(), new Date(date)) < 4)
      return this.diff_week(new Date(), new Date(date)) + " اسبوع ";
    else if (this.diff_month(new Date(), new Date(date)) < 12)
      return this.diff_month(new Date(), new Date(date)) + " شهر ";
    else
      return date

  }

}
