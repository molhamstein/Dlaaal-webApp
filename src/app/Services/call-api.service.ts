import { LoginService } from './login.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Response } from '@angular/http';
import 'rxjs/add/operator/Map';
import 'rxjs/Rx';

@Injectable()
export class CallApiService {
  headers2 = new HttpHeaders({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' })


  // private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

// RewriteCond %{ENV:HTTPS} !on [NC]
// RewriteRule ^(.*)$ https://www.dlaaal.com/$1 [R,L]

// RewriteCond %{ENV:HTTPS} on [NC]
// RewriteCond %{HTTP_HOST} ^dlaaal\.com$ [NC]
// RewriteRule ^(.*)$ https://www.dlaaal.com/$1 [R,L]

  constructor(public http: HttpClient, public loginSer: LoginService) {
    this.headers2 = this.headers2.append("Authorization", "Basic " + btoa("username:password"));
    // this.headers2 = this.headers2.append("Content-Type", "application/json");
  }
  // urlArray = [
  //   "cities",
  //   "categories",
  //   "users",
  //   "users/login"
  // ];
  readonly baseUrl = "https://dlaaal.com/api/"
  // readonly baseUrl = "http://localhost:7500/api/"
  private errorCode = 0;

  // get(url) {
  //   let _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', "Authorization": this.loginSer.getId() }) };
  //   return this.http.get(this.baseUrl + url, _options).map((Response: Response) => {
  //     return Response;
  //   })
  // }

  public setErrorCode(errorCode) {
    this.errorCode = errorCode;
  }

  public getErrorCode() {
    return this.errorCode
  }

  get(url) {
    let auth;
    if (this.loginSer.getId() != null) {
      auth = this.loginSer.getId();
    } else {
      auth = ""
    }
    let _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', "Authorization": auth }) };

    return this.http.get(this.baseUrl + url, _options).map((Response: Response) => {
      return Response;
    }).catch((response: Response) => {
      this.errorCode = response['error'].statusCode;
      // console.log(response);
      if (this.errorCode == 401 && response['error'].code == "AUTHORIZATION_REQUIRED")
        this.loginSer.logout()
      return "E";
    });
  }

  public handleError(error: Response | any) {
    console.log('err: ', error)
    let errMsg: string;
    errMsg = error.message ? error.message : error.toString();
    let data = { errMsg: "errMsg", error: "error" };
    console.log("data");
    console.log(data);
    let data2 = JSON.stringify(data);
    console.log("data2");
    console.log(data2);
    return JSON.stringify(data);
  }

  post(url, data) {
    let auth;
    if (this.loginSer.getId() != null) {
      auth = this.loginSer.getId();
    } else {
      auth = ""
    }
    let _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', "Authorization": auth }) };

    return this.http.post(this.baseUrl + url, data, _options).map((Response: Response) => {
      return Response;
    }).catch((Response: Response) => {
      this.errorCode = Response.status;
      return "E";
    });
  }


  resetPassWord(url, data, token) {
    let _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', "Authorization": token }) };

    return this.http.post(this.baseUrl + url, data, _options).map((Response: Response) => {
      return Response;
    }).catch((Response: Response) => {
      this.errorCode = Response.status;
      return "E";
    });
  }


  activeAccount(url, token) {
    let _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', "Authorization": token }) };

    return this.http.put(this.baseUrl + url, {}, _options).map((Response: Response) => {
      return Response;
    }).catch((Response: Response) => {
      this.errorCode = Response.status;
      return "E";
    });
  }


  put(url, data) {

    let auth;
    if (this.loginSer.getId() != null) {
      auth = this.loginSer.getId();
    } else {
      auth = ""
    }
    let _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', "Authorization": auth }) };

    return this.http.put(this.baseUrl + url, data, _options).map((Response: Response) => {
      return Response;
    }).catch((Response: Response) => {
      this.errorCode = Response.status;
      return "E";
    });
  }

  delete(url) {
    let auth;
    if (this.loginSer.getId() != null) {
      auth = this.loginSer.getId();
    } else {
      auth = ""
    }
    let _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', "Authorization": auth }) };

    return this.http.delete(this.baseUrl + url, _options).map((Response: Response) => {
      return Response;
    }).catch((Response: Response) => {
      this.errorCode = Response.status;
      return "E";
    });
  }

  uploadImage(url, data, length) {
    let fd = new FormData();
    for (var index = 0; index < length; index++) {
      fd.append("file", data[index], data[index].name)
    }
    let auth;
    if (this.loginSer.getId() != null) {
      auth = this.loginSer.getId();
    } else {
      auth = ""
    }
    let _options = { headers: new HttpHeaders({ "Authorization": auth }) };

    return this.http.post(this.baseUrl + url, fd, _options).timeout(90000).map((Response: Response) => {
      return Response;
    }).catch((Response: Response) => {
      this.errorCode = Response.status;
      return "E";
    });
  }

}
