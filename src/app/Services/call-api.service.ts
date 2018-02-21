import { LoginService } from './login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Response } from '@angular/http';
import 'rxjs/add/operator/Map';
import 'rxjs/Rx';

@Injectable()
export class CallApiService {
  headers2 = new HttpHeaders({ 'Content-Type': 'application/json' })


  // private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };


  constructor(public http: HttpClient,public loginSer : LoginService) {
    this.headers2 = this.headers2.append("Authorization", "Basic " + btoa("username:password"));
    // this.headers2 = this.headers2.append("Content-Type", "application/json");
  }
  // urlArray = [
  //   "cities",
  //   "categories",
  //   "users",
  //   "users/login"
  // ];
  readonly baseUrl = "http://104.217.253.15:3000/api/"


  get(url) {
    let _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' ,"Authorization":this.loginSer.getId()}) };
    return this.http.get(this.baseUrl + url, _options).map((Response: Response) => {
      return Response;
    })
  }


  post(url, data) {
    return this.http.post(this.baseUrl + url, data).map((Response: Response) => {
      return Response;
    })
  }

  put() {

  }
}
