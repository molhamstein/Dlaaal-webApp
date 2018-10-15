webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Services/call-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_service__ = __webpack_require__("../../../../../src/app/Services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_Map__ = __webpack_require__("../../../../rxjs/add/operator/Map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_Map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_Map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CallApiService = /** @class */ (function () {
    // private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    // RewriteCond %{ENV:HTTPS} !on [NC]
    // RewriteRule ^(.*)$ https://www.dlaaal.com/$1 [R,L]
    // RewriteCond %{ENV:HTTPS} on [NC]
    // RewriteCond %{HTTP_HOST} ^dlaaal\.com$ [NC]
    // RewriteRule ^(.*)$ https://www.dlaaal.com/$1 [R,L]
    function CallApiService(http, loginSer) {
        this.http = http;
        this.loginSer = loginSer;
        this.headers2 = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' });
        // urlArray = [
        //   "cities",
        //   "categories",
        //   "users",
        //   "users/login"
        // ];
        this.baseUrl = "https://dlaaal.com/api/";
        // readonly baseUrl = "http://localhost:7500/api/"
        this.errorCode = 0;
        this.headers2 = this.headers2.append("Authorization", "Basic " + btoa("username:password"));
        // this.headers2 = this.headers2.append("Content-Type", "application/json");
    }
    // get(url) {
    //   let _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', "Authorization": this.loginSer.getId() }) };
    //   return this.http.get(this.baseUrl + url, _options).map((Response: Response) => {
    //     return Response;
    //   })
    // }
    CallApiService.prototype.setErrorCode = function (errorCode) {
        this.errorCode = errorCode;
    };
    CallApiService.prototype.getErrorCode = function () {
        return this.errorCode;
    };
    CallApiService.prototype.get = function (url) {
        var _this = this;
        var auth;
        if (this.loginSer.getId() != null) {
            auth = this.loginSer.getId();
        }
        else {
            auth = "";
        }
        var _options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', "Authorization": auth }) };
        return this.http.get(this.baseUrl + url, _options).map(function (Response) {
            return Response;
        }).catch(function (response) {
            _this.errorCode = response['error'].statusCode;
            // console.log(response);
            if (_this.errorCode == 401 && response['error'].code == "AUTHORIZATION_REQUIRED")
                _this.loginSer.logout();
            return "E";
        });
    };
    CallApiService.prototype.handleError = function (error) {
        console.log('err: ', error);
        var errMsg;
        errMsg = error.message ? error.message : error.toString();
        var data = { errMsg: "errMsg", error: "error" };
        console.log("data");
        console.log(data);
        var data2 = JSON.stringify(data);
        console.log("data2");
        console.log(data2);
        return JSON.stringify(data);
    };
    CallApiService.prototype.post = function (url, data) {
        var _this = this;
        var auth;
        if (this.loginSer.getId() != null) {
            auth = this.loginSer.getId();
        }
        else {
            auth = "";
        }
        var _options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', "Authorization": auth }) };
        return this.http.post(this.baseUrl + url, data, _options).map(function (Response) {
            return Response;
        }).catch(function (Response) {
            _this.errorCode = Response.status;
            return "E";
        });
    };
    CallApiService.prototype.resetPassWord = function (url, data, token) {
        var _this = this;
        var _options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', "Authorization": token }) };
        return this.http.post(this.baseUrl + url, data, _options).map(function (Response) {
            return Response;
        }).catch(function (Response) {
            _this.errorCode = Response.status;
            return "E";
        });
    };
    CallApiService.prototype.activeAccount = function (url, token) {
        var _this = this;
        var _options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', "Authorization": token }) };
        return this.http.put(this.baseUrl + url, {}, _options).map(function (Response) {
            return Response;
        }).catch(function (Response) {
            _this.errorCode = Response.status;
            return "E";
        });
    };
    CallApiService.prototype.put = function (url, data) {
        var _this = this;
        var auth;
        if (this.loginSer.getId() != null) {
            auth = this.loginSer.getId();
        }
        else {
            auth = "";
        }
        var _options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', "Authorization": auth }) };
        return this.http.put(this.baseUrl + url, data, _options).map(function (Response) {
            return Response;
        }).catch(function (Response) {
            _this.errorCode = Response.status;
            return "E";
        });
    };
    CallApiService.prototype.delete = function (url) {
        var _this = this;
        var auth;
        if (this.loginSer.getId() != null) {
            auth = this.loginSer.getId();
        }
        else {
            auth = "";
        }
        var _options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', "Authorization": auth }) };
        return this.http.delete(this.baseUrl + url, _options).map(function (Response) {
            return Response;
        }).catch(function (Response) {
            _this.errorCode = Response.status;
            return "E";
        });
    };
    CallApiService.prototype.uploadImage = function (url, data, length) {
        var _this = this;
        var fd = new FormData();
        for (var index = 0; index < length; index++) {
            fd.append("file", data[index], data[index].name);
        }
        var auth;
        if (this.loginSer.getId() != null) {
            auth = this.loginSer.getId();
        }
        else {
            auth = "";
        }
        var _options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": auth }) };
        return this.http.post(this.baseUrl + url, fd, _options).timeout(90000).map(function (Response) {
            return Response;
        }).catch(function (Response) {
            _this.errorCode = Response.status;
            return "E";
        });
    };
    CallApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__login_service__["a" /* LoginService */]])
    ], CallApiService);
    return CallApiService;
}());



/***/ }),

/***/ "../../../../../src/app/Services/global.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__call_api_service__ = __webpack_require__("../../../../../src/app/Services/call-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_modal_error_modal_component__ = __webpack_require__("../../../../../src/app/error-modal/error-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GlobalService = /** @class */ (function () {
    function GlobalService(router, route, dialog, APIServe) {
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.APIServe = APIServe;
        this.unreadNotBeh = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"](0);
        this.notificationBeh = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.filteringBeh = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.castUnreadNotBeh = this.unreadNotBeh.asObservable();
        this.castNotificationBeh = this.notificationBeh.asObservable();
        this.castFilteringBeh = this.filteringBeh.asObservable();
        this.notification = [];
        this.unreadNot = 0;
    }
    GlobalService.prototype.goTo2 = function (id) {
        var _this = this;
        this.router.navigateByUrl('/detail').then(function () { return _this.router.navigateByUrl('/detail/' + id); });
    };
    GlobalService.prototype.editUnreadNotBeh = function (unreadNotBeh) {
        this.unreadNotBeh.next(unreadNotBeh);
    };
    GlobalService.prototype.editNotificationBeh = function (notificationBeh) {
        this.notificationBeh.next(notificationBeh);
    };
    GlobalService.prototype.editFilteringBeh = function (filteringBeh) {
        this.filteringBeh.next(filteringBeh);
    };
    GlobalService.prototype.getNotification = function () {
        return this.notification;
    };
    GlobalService.prototype.setNotification = function (notification) {
        this.notification = notification;
    };
    GlobalService.prototype.setUnreadNot = function (unreadNot) {
        this.unreadNot = unreadNot;
    };
    GlobalService.prototype.getUnreadNot = function () {
        return this.unreadNot;
    };
    GlobalService.prototype.diff_minutes = function (dt2, dt1) {
        var diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= (60);
        return Math.abs(Math.round(diff));
    };
    GlobalService.prototype.diff_hours = function (dt2, dt1) {
        var diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= (60 * 60);
        return Math.abs(Math.round(diff));
    };
    GlobalService.prototype.diff_days = function (dt2, dt1) {
        var diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= (60 * 60 * 24);
        return Math.abs(Math.round(diff));
    };
    GlobalService.prototype.diff_week = function (dt2, dt1) {
        var diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= (60 * 60 * 24 * 7);
        return Math.abs(Math.round(diff));
    };
    GlobalService.prototype.diff_month = function (dt2, dt1) {
        var diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= (60 * 60 * 24 * 30);
        return Math.abs(Math.round(diff));
    };
    GlobalService.prototype.calculatDateAdv = function (date) {
        var time = this.diff_minutes(new Date(), new Date(date));
        var pipe = new __WEBPACK_IMPORTED_MODULE_6__angular_common__["DatePipe"]('en-US'); // Use your own locale
        if (time < 1)
            return "الأن";
        else if (time < 60)
            return time + " دقيقة ";
        else if (this.diff_hours(new Date(), new Date(date)) < 24)
            return this.diff_hours(new Date(), new Date(date)) + " ساعة ";
        else if (this.diff_days(new Date(), new Date(date)) < 7)
            return this.diff_days(new Date(), new Date(date)) + " يوم ";
        else
            return pipe.transform(date, 'dd-MM-yyyy');
    };
    GlobalService.prototype.goTo = function (newURL) {
        this.router.navigate([newURL]);
    };
    GlobalService.prototype.reload = function () {
        location.reload();
    };
    GlobalService.prototype.errorDialog = function (title, containt, withRefrech) {
        if (withRefrech === void 0) { withRefrech = false; }
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__error_modal_error_modal_component__["a" /* ErrorModalComponent */], {
            width: '50%',
            data: { title: title, containt: containt }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (withRefrech == true) {
                location.reload();
            }
        });
    };
    GlobalService.prototype.somthingError = function () {
        this.APIServe.setErrorCode(0);
        this.errorDialog('حدث خطأ', "هناك مشكلة ما");
    };
    GlobalService.prototype.convertNumber = function (fromNum) {
        if (typeof fromNum != 'string') {
            return fromNum;
        }
        console.log("fromNum");
        console.log(fromNum);
        console.log("fromNum.length");
        console.log(fromNum.length);
        var result = "";
        var number;
        var arabicMap = {
            '٩': 9,
            '٨': 8,
            '٧': 7,
            '٦': 6,
            '٥': 5,
            '٤': 4,
            '٣': 3,
            '٢': 2,
            '١': 1,
            '٠': 0
        };
        for (var index = 0; index < fromNum.length; index++) {
            var element = fromNum.charAt(index);
            console.log("element");
            console.log(element);
            if (arabicMap[element] != null)
                result += arabicMap[element];
            else
                result += element;
        }
        ;
        console.log("result");
        console.log(result);
        number = Number(result);
        console.log("number");
        console.log(number);
        return number;
    };
    GlobalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_0__call_api_service__["a" /* CallApiService */]])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "../../../../../src/app/Services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_persistence__ = __webpack_require__("../../../../angular-persistence/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(persistenceService, cookieService, router) {
        this.persistenceService = persistenceService;
        this.cookieService = cookieService;
        this.router = router;
        if (this.cookieService.get('isRemember') == "true") {
            this.isLogIn = this.isLoginCook();
            this.isRemember = true;
        }
        else if (this.cookieService.get('isRemember') == "false") {
            this.isLogIn = this.isLoginSet();
            this.isRemember = false;
        }
        else {
            this.isLogIn = false;
        }
        if (this.isLogIn) {
            this.init();
        }
    }
    LoginService.prototype.init = function () {
        if (this.isRemember) {
            this.userId = this.cookieService.get("dalalUserId");
            this.id = this.cookieService.get("dalalId");
            this.avatar = this.cookieService.get("dalalAvatar");
        }
        else {
            this.userId = sessionStorage.getItem("dalalUserId");
            this.id = sessionStorage.getItem("dalalId");
            this.avatar = sessionStorage.getItem("dalalAvatar");
        }
    };
    LoginService.prototype.isLogin = function () {
        return this.isLogIn;
    };
    LoginService.prototype.getUserId = function () {
        if (this.userId != "")
            return this.userId;
    };
    LoginService.prototype.getId = function () {
        return this.id;
    };
    LoginService.prototype.getAvatar = function () {
        return this.avatar;
    };
    LoginService.prototype.logIn = function (data, rememberPass) {
        if (rememberPass === void 0) { rememberPass = true; }
        this.isRemember = rememberPass;
        this.isLogIn = true;
        if (rememberPass) {
            this.cookieService.set('isRemember', "true");
            this.logInCook(data);
        }
        else {
            this.cookieService.set('isRemember', "false");
            this.logInSet(data);
        }
        this.init();
    };
    LoginService.prototype.logout = function () {
        var _this = this;
        this.cookieService.set('isRemember', "");
        if (this.isRemember) {
            this.logoutCook();
        }
        else {
            this.logoutSet();
        }
        if ("/myprofile/me" == this.router.url) {
            this.router.navigateByUrl('/myprofile/me').then(function () { return _this.router.navigateByUrl('/'); });
            location.reload();
        }
        else if ("/addAdvertising" == this.router.url) {
            this.router.navigateByUrl('/addAdvertising').then(function () { return _this.router.navigateByUrl('/'); });
            location.reload();
        }
        else
            location.reload();
    };
    LoginService.prototype.setAvatar = function (newAvatar) {
        if (this.isRemember) {
            this.setAvatarCook(newAvatar);
        }
        else {
            this.setAvatarSet(newAvatar);
        }
    };
    LoginService.prototype.isLoginCook = function () {
        if (this.cookieService.get('dalalUserId') == null) {
            return false;
        }
        else {
            return true;
        }
    };
    LoginService.prototype.logInCook = function (data) {
        this.cookieService.set('dalalUserId', data.userId);
        this.cookieService.set('dalalId', data.id);
        if (data.user != null)
            this.cookieService.set('dalalAvatar', data.user.avatar);
        // }
        location.reload();
    };
    LoginService.prototype.logoutCook = function () {
        this.cookieService.delete('dalalUserId');
        this.cookieService.delete('dalalId');
        this.cookieService.delete('dalalAvatar');
    };
    LoginService.prototype.setAvatarCook = function (newAvatar) {
        this.cookieService.set('dalalAvatar', newAvatar);
    };
    LoginService.prototype.isLoginSet = function () {
        if (sessionStorage.getItem('dalalUserId') == null) {
            return false;
        }
        else {
            return true;
        }
    };
    LoginService.prototype.logInSet = function (data) {
        sessionStorage.setItem('dalalUserId', data.userId);
        sessionStorage.setItem('dalalId', data.id);
        if (data.user != null)
            sessionStorage.setItem('dalalAvatar', data.user.avatar);
        location.reload();
    };
    LoginService.prototype.logoutSet = function () {
        sessionStorage.removeItem('dalalUserId');
        sessionStorage.removeItem('dalalId');
        sessionStorage.removeItem('dalalAvatar');
    };
    LoginService.prototype.setAvatarSet = function (newAvatar) {
        sessionStorage.setItem('dalalAvatar', newAvatar);
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angular_persistence__["b" /* PersistenceService */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/Services/main.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_service__ = __webpack_require__("../../../../../src/app/Services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("../../../../../src/app/Services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__call_api_service__ = __webpack_require__("../../../../../src/app/Services/call-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainService = /** @class */ (function () {
    function MainService(APIServ, loginServ, globalServ) {
        this.APIServ = APIServ;
        this.loginServ = loginServ;
        this.globalServ = globalServ;
    }
    MainService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__call_api_service__["a" /* CallApiService */], __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_0__global_service__["a" /* GlobalService */]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "../../../../../src/app/activate/activate.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\r\n<!--component html goes here -->\r\n<div class=\"MainContainer\">\r\n    <div class=\"HeaderBackground\">\r\n        <header></header>\r\n        <div class=\"Triangle\">\r\n            <div class=\"Jumbotron\" data-paroller-factor=\"-0.2\">\r\n                <div class=\"Jumbotron-title\">هل تبحث عن شيئ معيّن ؟</div>\r\n\r\n                <div class=\"Jumbotron-subtitle\">\r\n                    الكثير من الاعلانات بانتظارك لتفقدها\r\n                </div>\r\n            </div>\r\n            <div class=\"Triangle--spacer\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"Content\">\r\n        <div class=\"GridContainer customPage\">\r\n            <div [ngClass]=\"{'hidden':verify==0}\">\r\n                <h1>تم تأكيد الحساب بنجاح</h1>\r\n                <button style=\"margin-top: 10px;max-width: 173px;    padding: 0px;\" (click)=\"gotoPgage()\" class=\"SignUpModule-body-inputcontainer SignUpModule-body-btn\">\r\n                العودة للصفحة الرئيسية</button>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n<!--Below main container end-->"

/***/ }),

/***/ "../../../../../src/app/activate/activate.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hidden {\n  display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/activate/activate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_main_service__ = __webpack_require__("../../../../../src/app/Services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActivateComponent = /** @class */ (function () {
    function ActivateComponent(dialog, mainServ, route) {
        var _this = this;
        this.dialog = dialog;
        this.mainServ = mainServ;
        this.route = route;
        this.verify = 0;
        this.route.queryParams
            .filter(function (params) { return params.token; })
            .subscribe(function (params) {
            _this.token = params.token;
            _this.userID = params.uid;
            _this.mainServ.APIServ.get("users/confirm?uid=" + _this.userID + "&token=" + _this.token).subscribe(function (data) {
                if (_this.mainServ.APIServ.getErrorCode() == 0) {
                    _this.verify = 1;
                    // this.mainServ.globalServ.goTo('/')
                }
                else
                    _this.mainServ.globalServ.somthingError();
            });
        });
    }
    ActivateComponent.prototype.gotoPgage = function () {
        this.mainServ.globalServ.goTo('/');
    };
    ActivateComponent.prototype.ngOnInit = function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    };
    ActivateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'activate',
            template: __webpack_require__("../../../../../src/app/activate/activate.component.html"),
            styles: [__webpack_require__("../../../../../src/app/activate/activate.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_0__Services_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ActivateComponent);
    return ActivateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/add-advertising/add-advertising.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"MainContainer\">\r\n  <div class=\"HeaderBackground\">\r\n    <header></header>\r\n    <div class=\"Triangle Triangle--pages\">\r\n      <div class=\"Triangle--pages-title\">\r\n        إضافة إعلان جديد\r\n      </div>\r\n\r\n      <div class=\"Triangle--spacer\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"Content\">\r\n    <div class=\"GridContainer\">\r\n      <div class=\"HeaderBoxContianer HeaderBoxContianer--addpage\">\r\n        <div class=\"HeaderBox HeaderBox--adspage\">\r\n          <div class=\"AddNewForm-inputcontainer\">\r\n            <label for=\"name\">عنوان الإعلان</label>\r\n            <input [(ngModel)]=\"search.title\" class=\"AddNewForm-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\r\n          </div>\r\n        </div>\r\n        <div class=\"HeaderBox HeaderBox--adspage\" *ngIf=\"isCategoryFree==false\">\r\n          <div class=\"AddNewForm-inputcontainer\">\r\n            <label for=\"name\">السعر المطلوب</label>\r\n            <input type=\"text\" onkeydown=\"return ( event.ctrlKey || event.altKey \r\n                    || (47<event.keyCode && event.keyCode<58 && event.shiftKey==false) \r\n                    || (95<event.keyCode && event.keyCode<106)\r\n                    || (event.keyCode==8) || (event.keyCode==9) \r\n                    || (event.keyCode>34 && event.keyCode<40) \r\n                    || (event.keyCode==46) )\" [(ngModel)]=\"search.price\" class=\"AddNewForm-inputcontainer-text\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"AddNewContainer\">\r\n        <div class=\"AddNewForm\">\r\n          <div class=\"AddNewForm-column\">\r\n            <div class=\"AddNewForm-inputcontainer\">\r\n              <select [(ngModel)]=\"search.cityId\" class=\"AddNewForm-inputcontainer-select AddNewForm-down AddNewForm-inputcontainer-select--lg\">\r\n                                <option [ngValue]=\"undefined\" selected>اختر المدينة</option>\r\n\t\t\t\t\t\t        <option *ngFor=\"let city of cities\" value=\"{{city.id}}\" >{{city.name}}</option>\r\n                            </select>\r\n            </div>\r\n\r\n            <div class=\"AddNewForm-inputcontainer\">\r\n              <select (change)=\"changeCategory($event.target.value)\" [(ngModel)]=\"search.categoryId\" class=\"AddNewForm-inputcontainer-select AddNewForm-down AddNewForm-inputcontainer-select--md\">\r\n                            \t<option [ngValue]=\"undefined\" selected>اختر الفئة</option>\r\n\t\t\t\t        \t\t<option *ngFor=\"let category of categories\" value=\"{{category.id}}\" >{{category.title}}</option> \r\n                            </select>\r\n              <select (change)=\"changeSubCategory($event.target.value)\" [(ngModel)]=\"search.subCategoryId\" class=\"AddNewForm-inputcontainer-select AddNewForm-down AddNewForm-inputcontainer-select--sm\">\r\n                                <option [ngValue]=\"undefined\" selected> اختر الفئة الفرعية</option>\t\t\t\t\t\t\t\t \r\n                                <option *ngFor=\"let subCategory of subCategories\" value=\"{{subCategory.id}}\" >{{subCategory.title}}</option>\t\r\n                            </select>\r\n            </div>\r\n\r\n            <div class=\"AddNewForm-inputcontainer\" *ngFor=\"let oneKey of vetcorKeyFilter; let i = index;\">\r\n              <label for=\"name\">{{oneKey.key}} </label>\r\n              <input *ngIf=\"oneKey.type == 'text' \" [(ngModel)]=\"search.fields[i].value\" class=\"AddNewForm-inputcontainer-text\" type=\"text\"\r\n                value=\"\" name=\"name\">\r\n              <input type=\"text\" onkeydown=\"return ( event.ctrlKey || event.altKey \r\n                    || (47<event.keyCode && event.keyCode<58 && event.shiftKey==false) \r\n                    || (95<event.keyCode && event.keyCode<106)\r\n                    || (event.keyCode==8) || (event.keyCode==9) \r\n                    || (event.keyCode>34 && event.keyCode<40) \r\n                    || (event.keyCode==46) )\" *ngIf=\"oneKey.type == 'number' \" [(ngModel)]=\"search.fields[i].value\" class=\"AddNewForm-inputcontainer-text\"\r\n                value=\"\" name=\"name\">\r\n              <select style=\"width: 100%\" *ngIf=\"oneKey.type == 'choose' \" (change)=\"changeValue($event.target.value,i)\" [(ngModel)]=\"search.fields[i].value\"\r\n                class=\"AddNewForm-inputcontainer-select AddNewForm-down AddNewForm-inputcontainer-select--md\">\r\n                                <option [ngValue]=\"undefined\" selected>اختر {{oneKey.key}}</option>     \r\n                                <option *ngFor=\"let oneValue of oneKey.values\" value=\"{{oneValue.value}}\" >{{oneValue.value}}</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n            </div>\r\n\r\n            <div class=\"AddNewForm-inputcontainer\">\r\n              <label for=\"name\" style=\"direction:  rtl;\">العنوان (الجادة, الشارع) </label>\r\n              <input [(ngModel)]=\"search.address\" class=\"AddNewForm-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\r\n            </div>\r\n            <div class=\"AddNewForm-inputcontainer\">\r\n              <label for=\"name\" style=\"direction:  rtl;\">الشرح (يمكنك شرح إعلانك بشكل مفصل) </label>\r\n              <input [(ngModel)]=\"search.description\" class=\"AddNewForm-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\r\n            </div>\r\n          </div>\r\n          <div class=\"AddNewForm-column\">\r\n            <div [ngClass]=\"{'hidden':images.length==0}\" class=\"AddNewForm-imagescontainer AddNewForm-imagescontainer--lg\">\r\n              <div class=\"AddNewForm-imagescontainer-largeimage\">\r\n                <img src=\"{{images[0]}}\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"AddNewForm-imagescontainer AddNewForm-imagescontainer--sm\">\r\n              <div *ngFor=\"let value of images;let i=index\" class=\"AddNewForm-imagescontainer-smallimage\">\r\n                <div (click)=\"deleteImage(i)\" class=\"openImage cursorPointer\"></div>\r\n                <img src=\"{{value}}\" />\r\n              </div>\r\n              <div *ngFor=\"let image of imageOnLoad;let i = index\" class=\"AddNewForm-imagescontainer-smallimage\" style=\"    position: relative;\">\r\n                <img id=\"{{'uploadImage'+i}}\" />\r\n                <img src=\"assets/imgs/infinity_loader_by_volorf.gif\" style=\"position:  absolute;opacity: 0.5;top: 0px;height: 100%;left:  0px;width: 100%;\"\r\n                />\r\n\r\n              </div>\r\n\r\n\r\n\r\n              <div (click)=\"openSelectImage()\" for=\"file\" class=\"AddNewForm-imagescontainer-browseimage cursorPointer\">\r\n                <input multiple type=\"file\" style=\"display:none\" id=\"files\" accept=\"image/*\" (change)=\"onChange($event)\" />\r\n                <img src=\"assets/imgs/browse.png\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"AddNewForm-submitcontainer\">\r\n              <div class=\"AddNewForm-checkboxcontainer\">\r\n                <input type=\"checkbox\" id=\"checkbox_id\" [(ngModel)]=\"isAgree\" value=\"value\">\r\n                <label for=\"checkbox_id\">\r\n                                    أوافق على\r\n                                    <div class=\"u-textPrimaryColor cursorPointer\" routerLink=\"{{'/terms'}}\">شروط الاستخدام</div>\r\n                                     و\r\n                                    <div class=\"u-textPrimaryColor cursorPointer\" routerLink=\"{{'/privacy'}}\">اتفاقية الخصوصية</div>\r\n                                </label>\r\n              </div>\r\n              <div class=\"AddNewForm-btn\" [ngStyle]=\"{'background-color':  isAgree ? '#257310' : '#257310a1'}\" (click)=\"addAdvertising()\">\r\n                إضافة إعلان\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"ItemsContainer-loader\" style=\"width:  100%;position:  absolute;height:  100%;\" [ngClass]=\"{'hidden':loader==0}\">\r\n          <img src=\"assets/imgs/spinner.svg\" alt=\"Kiwi standing on oval\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!--Below main container end-->\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n<!--\r\n<div class=\"Footer\">\r\n\r\n    <div class=\"Footer-about\">\r\n        <div class=\"Footer-about-title\">\r\n            عن دلال\r\n        </div>\r\n        <div class=\"Footer-about-body\">\r\n            شرح بسيط عن دلال ...<br> الموقع الأفضل للبيع و الشراء عبر الانترنت\r\n        </div>\r\n        <div class=\"Footer-about-bar\">\r\n            <div class=\"Footer-about-bar-item\">\r\n                شروط الاستخدام\r\n            </div>\r\n            <div class=\"Footer-about-bar-item\">\r\n                سياسية الخصوصية\r\n            </div>\r\n            <div class=\"Footer-about-bar-item\">\r\n                تواصل معنا\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"Footer-contact\">\r\n        <div class=\"Footer-contact-title\">\r\n            تواصل معنا على.....\r\n        </div>\r\n        <div class=\"Footer-contact-icons\">\r\n            <div class=\"Footer-contact-icon\" style=\"background-image: url('../imgs/facebook.svg');\">\r\n\r\n            </div>\r\n            <div class=\"Footer-contact-icon\" style=\"background-image: url('../imgs/insta.svg');\">\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"Footer-right\">\r\n\r\n        <div class=\"Footer-right-text\">\r\n            All Rights Reserved\r\n        </div>\r\n        <div class=\"Footer-right-logo\">\r\n            <img src=\"../imgs/logo.png\" alt=\"\">\r\n        </div>\r\n    </div>\r\n</div>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/add-advertising/add-advertising.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hidden {\n  display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-advertising/add-advertising.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAdvertisingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__set_phone_set_phone_component__ = __webpack_require__("../../../../../src/app/set-phone/set-phone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_main_service__ = __webpack_require__("../../../../../src/app/Services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_image_compress__ = __webpack_require__("../../../../ng2-image-compress/ng2-image-compress.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_image_compress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_image_compress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_pica_dist_pica__ = __webpack_require__("../../../../pica/dist/pica.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_pica_dist_pica___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_pica_dist_pica__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_img_max__ = __webpack_require__("../../../../ng2-img-max/dist/ng2-img-max.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddAdvertisingComponent = /** @class */ (function () {
    function AddAdvertisingComponent(mainServ, dialog, ng2ImgMaxService, imgCompressService) {
        this.mainServ = mainServ;
        this.dialog = dialog;
        this.ng2ImgMaxService = ng2ImgMaxService;
        this.imgCompressService = imgCompressService;
        this.keyFilter = [];
        this.vetcorKeyFilter = [];
        this.search = {};
        this.isAgree = false;
        this.images = [];
        this.imageOnLoad = [];
        this.processedImages = [];
        this.showTitle = false;
        this.isCategoryFree = false;
        this.maxWidth = 8000;
        this.maxHeight = 5000;
        this.search['fields'] = [];
        this.loader = false;
    }
    AddAdvertisingComponent.prototype.ngOnInit = function () {
        var _this = this;
        $("html, body").animate({ scrollTop: 0 }, "slow");
        this.mainServ.APIServ.get("cities").subscribe(function (data) {
            if (_this.mainServ.APIServ.getErrorCode() == 0)
                _this.cities = data;
            else
                _this.mainServ.globalServ.somthingError();
        });
        this.mainServ.APIServ.get("categories?filter=%7B%22include%22%3A[%22subCategories%22]%7D").subscribe(function (data) {
            if (_this.mainServ.APIServ.getErrorCode() == 0)
                _this.categories = data;
            else
                _this.mainServ.globalServ.somthingError();
        });
    };
    AddAdvertisingComponent.prototype.resize = function (filesTarget) {
        var pica = __WEBPACK_IMPORTED_MODULE_5_pica_dist_pica__({ features: ['js', 'wasm', 'ww', 'cib'] });
        var imageTarget = filesTarget;
        // imageTarget.onload = (image) => {
        var currentWidth = imageTarget.naturalWidth || imageTarget.width;
        var currentHeight = imageTarget.naturalHeight || imageTarget.height;
        console.log("currentWidth");
        console.log(currentWidth);
        var newWidth = currentWidth;
        var newHeight = currentHeight;
        if (newWidth > this.maxWidth) {
            newWidth = this.maxWidth;
            //resize height proportionally
            var ratio = this.maxWidth / currentWidth; //is gonna be <1
            newHeight = newHeight * ratio;
        }
        currentHeight = newHeight;
        if (newHeight > this.maxHeight) {
            newHeight = this.maxHeight;
            //resize width proportionally
            var ratio = this.maxHeight / currentHeight; //is gonna be <1
            newWidth = newWidth * ratio;
        }
        if (newHeight === currentHeight && newWidth === currentWidth) {
            // this.utilityLoading = false;
            // this.uploadImage(fileTarget); // this is your functions to upload after you reisze
        }
        else {
            // To canvas
            var toCanvas = document.createElement('canvas');
            toCanvas.width = newWidth;
            toCanvas.height = newHeight;
            pica.resize(imageTarget, toCanvas)
                .then(function (result) { return pica.toBlob(result, 'image/jpeg', 90); })
                .then(function (blob) {
                // this.utilityLoading = false;
                // let file: any = blob;
                // file.name = fileTarget.name;
                // this.uploadImage(<File>file) // this is your functions to upload after you reisze
            })
                .catch(function (error) {
                // this.utilityLoading = false;
                console.error('resizing error:' + error.message, error);
            });
        }
        // }
    };
    AddAdvertisingComponent.prototype.releadImage = function (innerIndex, file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var id = 'uploadImage' + innerIndex;
            document.getElementById(id).setAttribute('src', reader.result);
            // this.text = reader.result;
        };
        reader.readAsDataURL(file);
    };
    AddAdvertisingComponent.prototype.dataURLtoFile = function (dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    };
    AddAdvertisingComponent.prototype.onChange = function (event) {
        var _this = this;
        var files = [].slice.call(event.target.files);
        var allFilles = event.target.files;
        var images = [];
        this.imageOnLoad = Array(files.length);
        var innerIndex = 0;
        for (var i = 0; i < allFilles.length; i++) {
            var file = allFilles[i];
            var x;
            console.log("fromOut");
            console.log(i);
            this.releadImage(i, file);
        }
        var files2 = Array.from(event.target.files);
        //         this.ng2ImgMaxService.compressImage(fileTarget, this.maxSize, true)
        // .subscribe( 
        //    result => {
        //    this.resize(result);
        //    },
        //    err => {
        //    console.error('error when compressed',err)
        //    this.uploadImage(err.compressedFile)
        //       }
        //   )
        files.forEach(function (fileElement, index) {
            var countDelete = 0;
            _this.ng2ImgMaxService.compress([fileElement], 0.5, true, true).subscribe(function (result) {
                _this.mainServ.APIServ.uploadImage("files/images/upload", [result], 1).subscribe(function (data) {
                    _this.imageOnLoad = [];
                    countDelete++;
                    if (_this.mainServ.APIServ.getErrorCode() == 0)
                        data.forEach(function (element) {
                            _this.images.push(element);
                        });
                    else
                        _this.mainServ.globalServ.somthingError();
                });
            });
        });
        // ImageCompressService.filesArrayToCompressedImageSource(files).then(observableImages => {
        //     observableImages.subscribe((image) => {
        //         // images.push(this.dataURLtoFile(image.imageDataUrl,"1"));
        //         images.push(image);
        //     }, (error) => {
        //         console.log("Error while converting");
        //     }, () => {
        //         this.processedImages = images;
        //         this.showTitle = true;
        //         this.ng2ImgMaxService.resize(files, 2000, 1000).subscribe((result) => {
        //             console.log(result);
        //         });
        //         // this.mainServ.APIServ.uploadImage("files/images/upload", images, files.length).subscribe((data: any) => {
        //         //     this.imageOnLoad = [];
        //         //     if (this.mainServ.APIServ.getErrorCode() == 0)
        //         //         data.forEach(element => {
        //         //             this.images.push(element);
        //         //         });
        //         //     else
        //         //         this.mainServ.globalServ.somthingError()
        //         // });
        //     });
        // });
        // ImageCompressService.filesToCompressedImageSource(event.target.files).then(observableImages => {
        //     observableImages.subscribe((image) => {
        //         images.push(image.compressedImage);
        //     }, (error) => {
        //         console.log("Error while converting");
        //     }, () => {
        //         console.log("files");
        //         console.log(event.target.files);
        //         console.log("images");
        //         console.log(images);
        //         this.processedImages = images;
        //         this.mainServ.APIServ.uploadImage("files/images/upload", event.target.files, files.length).subscribe((data: any) => {
        //             this.imageOnLoad = [];
        //             if (this.mainServ.APIServ.getErrorCode() == 0)
        //                 data.forEach(element => {
        //                     this.images.push(element);
        //                 });
        //             else
        //                 this.mainServ.globalServ.somthingError()
        //         });
        //         this.showTitle = true;
        //     });
        // });
    };
    AddAdvertisingComponent.prototype.compare = function (a, b) {
        if (a.priority < b.priority)
            return 1;
        if (a.priority > b.priority)
            return -1;
        return 0;
    };
    AddAdvertisingComponent.prototype.changeCategory = function (categortID) {
        var _this = this;
        this.search["subCategoryId"];
        this.isCategoryFree = this.categories.find(function (x) { return x.id == categortID; }).isFree;
        this.keyFilter = [];
        if (this.categories.find(function (x) { return x.id == categortID; }).fields)
            this.keyFilter = JSON.parse(JSON.stringify(this.categories.find(function (x) { return x.id == categortID; }).fields));
        this.keyFilter.sort(this.compare);
        this.vetcorKeyFilter = [];
        if (this.keyFilter)
            this.keyFilter.forEach(function (element, index) {
                if (element.type == "choose") {
                    var tempValue = [];
                    element.values.forEach(function (elementValue) {
                        tempValue.push({ value: elementValue.value, fields: elementValue.fields });
                    });
                    _this.vetcorKeyFilter.push({ type: element.type, key: element.key, _id: element._id, values: tempValue, lengthChilde: 0 });
                }
                else
                    _this.vetcorKeyFilter.push({ type: element.type, key: element.key, _id: element._id });
                _this.search['fields'][index] = {};
            });
        this.subCategories = this.categories.find(function (x) { return x.id == categortID; }).subCategories;
    };
    AddAdvertisingComponent.prototype.changeSubCategory = function (subCategoryID) {
        var _this = this;
        // if (this.keyFilter)
        //     var lastLength = this.vetcorKeyFilter.length;
        // else {
        //     this.keyFilter = [];
        //     var lastLength = 0;
        // }
        this.keyFilter = [];
        this.changeCategory(this.search["categoryId"]);
        var newFields = this.categories.find(function (x) { return x.id == _this.search["categoryId"]; }).subCategories.find(function (y) { return y.id == subCategoryID; }).fields;
        newFields.forEach(function (element) {
            _this.keyFilter.push(element);
        });
        this.vetcorKeyFilter = [];
        this.keyFilter.sort(this.compare);
        for (var index = 0; index < this.keyFilter.length; index++) {
            var element = this.keyFilter[index];
            if (element.type == "choose") {
                var tempValue = [];
                element.values.forEach(function (elementValue) {
                    tempValue.push({ value: elementValue.value, fields: elementValue.fields });
                });
                this.vetcorKeyFilter.push({ type: element.type, key: element.key, _id: element._id, values: tempValue, lengthChilde: 0 });
            }
            else
                this.vetcorKeyFilter.push({ type: element.type, key: element.key, _id: element._id });
            this.search['fields'][index] = {};
        }
        ;
    };
    AddAdvertisingComponent.prototype.deleteFielde = function (field, indexFields) {
        var length = field.lengthChilde;
        for (var indexDel = 0; indexDel < length; indexDel++) {
            if (this.vetcorKeyFilter[indexFields + 1].type == "choose" && this.vetcorKeyFilter[indexFields + 1].lengthChilde > 0) {
                this.deleteFielde(this.vetcorKeyFilter[indexFields + 1], indexFields + 1);
            }
            this.vetcorKeyFilter.splice(indexFields + 1, 1);
            this.search["fields"].splice(indexFields + 1, 1);
        }
    };
    AddAdvertisingComponent.prototype.changeValue = function (value, indexFields) {
        var field = this.vetcorKeyFilter[indexFields];
        this.deleteFielde(this.vetcorKeyFilter[indexFields], indexFields);
        var option = field.values.find(function (x) { return x.value == value; });
        field.lengthChilde = option.fields.length;
        for (var index = option.fields.length; index > 0; index--) {
            var element = option.fields[index - 1];
            if (element.type == "choose") {
                var tempValue = [];
                element.values.forEach(function (elementValue) {
                    tempValue.push({ value: elementValue.value, fields: elementValue.fields });
                });
                this.vetcorKeyFilter.splice(indexFields + 1, 0, { type: element.type, key: element.key, _id: element._id, values: tempValue, lengthChilde: 0 });
            }
            else
                this.vetcorKeyFilter.splice(indexFields + 1, 0, { type: element.type, key: element.key, _id: element._id });
            this.search["fields"].splice(indexFields + 1, 0, {});
        }
    };
    AddAdvertisingComponent.prototype.openSelectImage = function () {
        document.getElementById('files').click();
    };
    AddAdvertisingComponent.prototype.addAdvertising = function () {
        var _this = this;
        // this.search['fields'] = [];
        if (this.isAgree) {
            var fieldName_1 = "";
            if (this.search['address'] == "" || this.search['address'] == null) {
                fieldName_1 = "عنوان الإعلان";
            }
            else if ((this.search['price'] == "" || this.search['price'] == null || this.search['price'] == 0) && this.isCategoryFree == false) {
                fieldName_1 = "السعر";
            }
            else if (this.search['cityId'] == "" || this.search['cityId'] == null) {
                fieldName_1 = "المدينة";
            }
            else if (this.search['categoryId'] == "" || this.search['categoryId'] == null) {
                fieldName_1 = "الفئة";
            }
            else if (this.search['subCategoryId'] == "" || this.search['subCategoryId'] == null) {
                fieldName_1 = "الفئة الفرعية";
            }
            else if (this.search['title'] == "" || this.search['title'] == null) {
                fieldName_1 = "العنوان";
            }
            else if (this.search['description'] == "" || this.search['description'] == null) {
                fieldName_1 = "شرح";
            }
            this.vetcorKeyFilter.forEach(function (element, index) {
                // if (element.key == null) {
                _this.search['fields'][index].key = element.key;
                _this.search['fields'][index].type = element.type;
                _this.search['fields'][index]._id = element._id;
                if (element.type == "number" && _this.search['fields'][index].value != null) {
                    _this.search['fields'][index].value = _this.mainServ.globalServ.convertNumber(_this.search['fields'][index].value);
                }
                if ((_this.search['fields'][index].value == "" || _this.search['fields'][index].value == null) && fieldName_1 == "") {
                    fieldName_1 = element.key;
                }
                // }
            });
            this.search['images'] = this.images;
            if (this.search['images'].length == 0 && fieldName_1 == "") {
                fieldName_1 = "الصور";
            }
            this.search['ownerId'] = this.mainServ.loginServ.getUserId();
            console.log(this.search);
            if (fieldName_1 == "") {
                this.loader = true;
                // this.search['price']="٢٢٢٢"
                // alert(this.search['price']);
                if (this.isCategoryFree) {
                    this.search['isFree'] = true;
                }
                else
                    this.search['price'] = this.mainServ.globalServ.convertNumber(this.search['price']);
                this.mainServ.APIServ.post("advertisemets", this.search).subscribe(function (data) {
                    _this.loader = false;
                    if (_this.mainServ.APIServ.getErrorCode() == 0) {
                        _this.mainServ.globalServ.goTo("detail/" + data.id);
                    }
                    else if (_this.mainServ.APIServ.getErrorCode() == 403) {
                        _this.mainServ.APIServ.setErrorCode(0);
                        _this.mainServ.globalServ.errorDialog("فشل إضافة إعلان", "الرجاء التأكد من أن الحساب مفعل");
                    }
                    else if (_this.mainServ.APIServ.getErrorCode() == 405) {
                        _this.mainServ.APIServ.setErrorCode(0);
                        _this.setUserNumber();
                    }
                    else
                        _this.mainServ.globalServ.somthingError();
                });
            }
            else {
                this.mainServ.globalServ.errorDialog(" خطأ إدخال", "الرجاء التحقق من ملئ " + fieldName_1 + " بالقيمه المناسبه ");
            }
        }
    };
    AddAdvertisingComponent.prototype.deleteImage = function (index) {
        this.images.splice(index, 1);
    };
    AddAdvertisingComponent.prototype.setUserNumber = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__set_phone_set_phone_component__["a" /* SetPhoneComponent */], {
            // width: '35%',
            // width: '50%',
            panelClass: 'communictioDialogStyle',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    AddAdvertisingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'add-advertising',
            template: __webpack_require__("../../../../../src/app/add-advertising/add-advertising.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-advertising/add-advertising.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_6_ng2_img_max__["b" /* Ng2ImgMaxService */], __WEBPACK_IMPORTED_MODULE_4_ng2_image_compress__["ImageCompressService"]])
    ], AddAdvertisingComponent);
    return AddAdvertisingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/advertising/advertising.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\r\n\r\n\r\n<div class=\"MainContainer\">\r\n  <div class=\"HeaderBackground\">\r\n    <header></header>\r\n\r\n    <div class=\"Triangle Triangle--pages\">\r\n    </div>\r\n    <div class=\"Triangle--spacer\"></div>\r\n  </div>\r\n  <div class=\"Content\" *ngIf=\"advertisemet.images!=null\">\r\n    <div class=\"GridContainer\">\r\n      <div class=\"HeaderBoxContianer HeaderBoxContianer--detailspage\">\r\n        <div class=\"HeaderBox HeaderBox--detailspage\">\r\n          <!--<div>-->\r\n          <div class=\"HeaderBox--detailspage-image cursorPointer\" (click)=\"openLightgallery()\" [ngStyle]=\"{'background-image': 'url(' +advertisemet.images[0] + ')'}\">\r\n\r\n            <!--<div class=\"HeaderBox--detailspage-image cursorPointer\"  (click)=\"openFullScreenImage(advertisemet.images[0])\" [ngStyle]=\"{'background-image': 'url(' +advertisemet.images[0] + ')'}\">-->\r\n          </div>\r\n          <!--</div>-->\r\n          <div class=\"HeaderBox--detailspage-body\">\r\n            <div class=\"HeaderBox--detailspage-body-header\">\r\n              <div class=\"HeaderBox--detailspage-body-header-title\">\r\n                {{advertisemet.title}}\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"HeaderBox--detailspage-body-footer\">\r\n              <div class=\"HeaderBox--detailspage-body-footer-views\">\r\n                {{advertisemet.viewsCount}}\r\n              </div>\r\n              <div class=\"HeaderBox--detailspage-body-footer-date\">\r\n                <!--10/10/2015-->\r\n                {{advertisemet.createdAt | date : \"dd/MM/yyyy\"}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"HeaderBox HeaderBox--detailspage HeaderBox--stretch\">\r\n          <div class=\"HeaderBox--detailspage-pricecontainer\" *ngIf=\"advertisemet.price!=0\">\r\n            <div class=\"HeaderBox--detailspage-pricecontainer-num\">{{advertisemet.price |number}} </div>\r\n            <div class=\"HeaderBox--detailspage-pricecontainer-text\"> ل.س</div>\r\n          </div>\r\n          <div class=\"HeaderBox--detailspage-pricecontainer\" *ngIf=\"advertisemet.price==0\">\r\n            <div class=\"HeaderBox--detailspage-pricecontainer-text\"> Free </div>\r\n          </div>\r\n\r\n          <div class=\"HeaderBox--detailspage-btncontainer\">\r\n            <div class=\"HeaderBox--detailspage-callusbtn\" *ngIf=\"isMyAdv==false\" (click)=\"openCommunicationDialog()\">\r\n              اتصل\r\n            </div>\r\n            <div class=\"HeaderBox--detailspage-callusbtn edit\" *ngIf=\"isMyAdv\" (click)=\"edit()\">\r\n              تعديل\r\n            </div>\r\n            <div class=\"HeaderBox--detailspage-callusbtn delete\" *ngIf=\"isMyAdv\" (click)=\"deactive()\">\r\n              <!-- <span></span> -->\r\n              حذف\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"AddDetailsContainer\">\r\n      <div class=\"AddDetailsForm\">\r\n        <div class=\"AddDetailsForm-column\">\r\n          <!--<div class=\"AddDetailsForm-header\">\r\n            <div class=\"AddDetailsForm-header-title title2\">\r\n              {{advertisemet.city.name}}\r\n            </div>\r\n          </div>-->\r\n\r\n          <div class=\"AddDetailsForm-header\">\r\n            <div class=\"AddDetailsForm-header-title\">\r\n              {{advertisemet.category.title}}\r\n            </div>\r\n          </div>\r\n          <div class=\"AddDetailsForm-category\">\r\n            <div class=\"AddDetailsForm-category-title\">\r\n              {{advertisemet.subCategory.title}}\r\n            </div>\r\n            <div class=\"AddDetailsForm-category-subcat\">\r\n              {{advertisemet.city.name}}\r\n            </div>\r\n          </div>\r\n          <div class=\"AddDetailsForm-inputcontainer\">\r\n            <label for=\"name\">العنوان</label>\r\n            <div class=\"AddDetailsForm-inputcontainer-text\">\r\n              {{advertisemet.address}}\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"AddDetailsForm-inputcontainer\" *ngFor=\"let oneField of advertisemet.fields\">\r\n            <label for=\"name\">{{oneField.key}}</label>\r\n            <div class=\"AddDetailsForm-inputcontainer-text\">\r\n              {{oneField.value}}\r\n            </div>\r\n          </div>\r\n          <div class=\"AddDetailsForm-inputcontainer\">\r\n            <label for=\"name\">الشرح</label>\r\n            <div class=\"AddDetailsForm-inputcontainer-text\">\r\n              {{advertisemet.description}}\r\n            </div>\r\n          </div>\r\n\r\n          <!--<div class=\"AddDetailsForm-inputcontainer\">\r\n              <label for=\"name\">اسم المنتج</label>\r\n              <div class=\"AddDetailsForm-inputcontainer-text\">\r\n                قيمة الحقل\r\n              </div>\r\n            </div>\r\n            <div class=\"AddDetailsForm-inputcontainer\">\r\n              <label for=\"name\">اسم المنتج</label>\r\n              <div class=\"AddDetailsForm-inputcontainer-text\">\r\n                قيمة الحقل\r\n              </div>\r\n            </div>\r\n            <div class=\"AddDetailsForm-inputcontainer\">\r\n              <label for=\"name\">اسم المنتج</label>\r\n              <div class=\"AddDetailsForm-inputcontainer-text\">\r\n                قيمة الحقل\r\n              </div>\r\n            </div>\r\n            <div class=\"AddDetailsForm-inputcontainer\">\r\n              <label for=\"name\">اسم المنتج</label>\r\n              <div class=\"AddDetailsForm-inputcontainer-text\">\r\n                قيمة الحقل\r\n              </div>\r\n            </div>\r\n            <div class=\"AddDetailsForm-inputcontainer\">\r\n              <label for=\"name\">اسم المنتج</label>\r\n              <div class=\"AddDetailsForm-inputcontainer-text\">\r\n                قيمة الحقل\r\n              </div>\r\n            </div>-->\r\n        </div>\r\n        <div class=\"AddDetailsForm-column\">\r\n\r\n          <ngx-carousel id=\"lightgallery2\" [inputs]=\"carouselTile\" style=\"width:  100%;direction:  initial;\">\r\n            <!--*ngFor=\"let oneImage of advertisemet.images\"-->\r\n            <ngx-tile NgxCarouselItem [attr.data-responsive]=\"oneImage\" [attr.data-src]=\"oneImage\" *ngFor=\"let oneImage of advertisemet.images\">\r\n              <!--<div  class=\"openImage cursorPointer\"></div>-->\r\n              <div [ngStyle]=\"{'background-image': 'url(' +oneImage + ')'}\" style=\"background-size: cover;width: 100%;height: 180px;border-radius: 5px; background-position:center\">\r\n              </div>\r\n            </ngx-tile>\r\n\r\n\r\n            <button NgxCarouselPrev class='leftRs'>&lt;</button>\r\n            <button NgxCarouselNext class='rightRs'>&gt;</button>\r\n          </ngx-carousel>\r\n\r\n          <div class=\"AddDetailsForm-imagescontainer AddDetailsForm-imagescontainer--lg\">\r\n            <div class=\"AddDetailsForm-imagescontainer-largeimage cursorPointer\" (click)=\"openLightgallery()\">\r\n              <img src=\"{{advertisemet.images[0]}}\" />\r\n            </div>\r\n          </div>\r\n          <div id=\"lightgallery\" class=\"AddDetailsForm-imagescontainer AddDetailsForm-imagescontainer--sm\">\r\n            <div [attr.data-responsive]=\"oneImage\" [attr.id]=\"'lightgallery_'+ i\" [attr.data-src]=\"oneImage\" class=\"AddDetailsForm-imagescontainer-smallimage cursorPointer\"\r\n              *ngFor=\"let oneImage of advertisemet.images;let i = index\">\r\n              <img src=\"{{oneImage}}\" />\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!--<div class=\"AddDetailsForm-imagescontainer AddDetailsForm-imagescontainer--sm\">\r\n            <div (click)=\"openFullScreenImage(oneImage)\" class=\"AddDetailsForm-imagescontainer-smallimage cursorPointer\" *ngFor=\"let oneImage of advertisemet.images\">\r\n              <img src=\"{{oneImage}}\" />\r\n            </div>\r\n          </div>-->\r\n          <div class=\"AddDetailsForm-pricepontainer\" *ngIf=\"advertisemet.price!=0\">\r\n            <div class=\"AddDetailsForm-pricepontainer-num\">{{advertisemet.price |number}}</div>\r\n            <div class=\"AddDetailsForm-pricepontainer-text\"> ل.س</div>\r\n          </div>\r\n\r\n          <div class=\"AddDetailsForm-pricepontainer\" *ngIf=\"advertisemet.price==0\">\r\n            <div class=\"AddDetailsForm-pricepontainer-text\">Free</div>\r\n          </div>\r\n\r\n          <div class=\"AddDetailsForm-buttonscontainers\">\r\n            <div *ngIf=\"isMyAdv==false\" (click)=\"openCommunicationDialog()\" class=\"AddDetailsForm-inputcontainer AddDetailsForm-inputcontainer--btn  AddDetailsForm-btn AddDetailsForm-btn--contact \">\r\n              التواصل مع البائع\r\n            </div>\r\n\r\n            <div class=\"AddDetailsForm-inputcontainer AddDetailsForm-inputcontainer--btn  \">\r\n              <select *ngIf=\"isMyAdv==false\" (change)=\"makeReport($event.target.value)\" class=\"cursorPointer AddDetailsForm-inputcontainer-select  AddNewForm-down  AddDetailsForm-inputcontainer-select--sm AddDetailsForm-inputcontainer-select--btnalign\">\r\n                <option [ngValue]=\"undefined\" selected>تبليغ</option>\r\n                <option class=\"cursorPointer\" *ngFor=\"let oneReport of reports\" value=\"{{oneReport.id}}\">{{oneReport.name}}</option>\r\n              </select>\r\n              <!--<div (click)=\"addToBookmark()\" [ngClass]=\"{'hidden':advertisemet.isBookmarked || advertisemet.isBookmarked==null }\" class=\"AddDetailsForm-inputcontainer AddDetailsForm-btn AddDetailsForm-btn--addfav\">\r\n                  إضافة إلى المفضلة{{advertisemet.isBookmarked}}\r\n                </div>\r\n                <div (click)=\"deleteFromBookmark()\" [ngClass]=\"{'hidden':!advertisemet.isBookmarked || advertisemet.isBookmarked==null}\" class=\"AddDetailsForm-inputcontainer AddDetailsForm-btn AddDetailsForm-btn--addfav\">\r\n                  حذف من المفضلة{{advertisemet.isBookmarked}}\r\n                </div>-->\r\n              <div (click)=\"addToBookmark()\" *ngIf=\"!advertisemet.isBookmarked\" class=\"AddDetailsForm-inputcontainer AddDetailsForm-btn AddDetailsForm-btn--addfav\">\r\n                إضافة إلى المفضلة\r\n              </div>\r\n              <div (click)=\"deleteFromBookmark()\" *ngIf=\"advertisemet.isBookmarked\" class=\"AddDetailsForm-inputcontainer AddDetailsForm-btn AddDetailsForm-btn--addfav\">\r\n                حذف من المفضلة\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--Below main container end-->\r\n\r\n\r\n\r\n\r\n  <!--<div class=\"Footer\">\r\n\r\n      <div class=\"Footer-about\">\r\n        <div class=\"Footer-about-title\">\r\n          عن دلال\r\n        </div>\r\n        <div class=\"Footer-about-body\">\r\n          شرح بسيط عن دلال ...<br> الموقع الأفضل للبيع و الشراء عبر الانترنت\r\n        </div>\r\n        <div class=\"Footer-about-bar\">\r\n          <div class=\"Footer-about-bar-item\">\r\n            شروط الاستخدام\r\n          </div>\r\n          <div class=\"Footer-about-bar-item\">\r\n            سياسية الخصوصية\r\n          </div>\r\n          <div class=\"Footer-about-bar-item\">\r\n            تواصل معنا\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"Footer-contact\">\r\n        <div class=\"Footer-contact-title\">\r\n          تواصل معنا على.....\r\n        </div>\r\n        <div class=\"Footer-contact-icons\">\r\n          <div class=\"Footer-contact-icon\" style=\"background-image: url('../imgs/facebook.svg');\">\r\n\r\n          </div>\r\n          <div class=\"Footer-contact-icon\" style=\"background-image: url('../imgs/insta.svg');\">\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"Footer-right\">\r\n\r\n        <div class=\"Footer-right-text\">\r\n          All Rights Reserved\r\n        </div>\r\n        <div class=\"Footer-right-logo\">\r\n          <img src=\"../imgs/logo.png\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>-->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/advertising/advertising.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hidden {\n  display: none; }\n\nh1 {\n  min-height: 200px;\n  background-color: #ccc;\n  text-align: center;\n  line-height: 200px; }\n\n.leftRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  -webkit-box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);\n          box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);\n  border-radius: 999px;\n  left: 0; }\n\n.rightRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  -webkit-box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);\n          box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);\n  border-radius: 999px;\n  right: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/advertising/advertising.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertisingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_main_service__ = __webpack_require__("../../../../../src/app/Services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_modal_report_modal_component__ = __webpack_require__("../../../../../src/app/report-modal/report-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__full_screen_modal_full_screen_modal_component__ = __webpack_require__("../../../../../src/app/full-screen-modal/full-screen-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communiction_modal_communiction_modal_component__ = __webpack_require__("../../../../../src/app/communiction-modal/communiction-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdvertisingComponent = /** @class */ (function () {
    function AdvertisingComponent(mainServ, route, dialog) {
        var _this = this;
        this.mainServ = mainServ;
        this.route = route;
        this.dialog = dialog;
        this.openLightgallery = function () {
            $("#lightgallery_0").click();
        };
        this.route.params.subscribe(function (addID) { return _this.addID = addID.addID; });
        this.advertisemet = {};
        this.isMyAdv = false;
        this.mainServ.APIServ.get("advertisemets/" + this.addID).subscribe(function (data) {
            if (_this.mainServ.APIServ.getErrorCode() == 0) {
                _this.advertisemet = data;
                setTimeout(function () {
                    $("#lightgallery").lightGallery({
                        share: false,
                        thumbnail: false
                    });
                    ;
                    $("#lightgallery2").lightGallery({
                        selector: 'ngx-tile',
                        share: false,
                        thumbnail: false
                    });
                    $("#lightgallery3").lightGallery({
                        selector: '.AddDetailsForm-imagescontainer-smallimage',
                        share: false,
                        thumbnail: false
                    });
                    ;
                    console.log($("#lightgallery"));
                }, 2000);
                if (_this.mainServ.loginServ.getUserId() == _this.advertisemet.ownerId) {
                    _this.isMyAdv = true;
                }
            }
            else
                _this.mainServ.globalServ.somthingError();
        });
        this.mainServ.APIServ.get("reports").subscribe(function (data) {
            if (_this.mainServ.APIServ.getErrorCode() == 0)
                _this.reports = data;
            else
                _this.mainServ.globalServ.somthingError();
        });
    }
    AdvertisingComponent.prototype.ngOnInit = function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        this.carouselTile = {
            grid: { xs: 1, sm: 2, md: 3, lg: 5, all: 0 },
            slide: 2,
            speed: 400,
            animation: 'lazy',
            point: {
                visible: true,
                pointStyles: "\n          .ngxcarouselPoint {\n            list-style-type: none;\n            text-align: center;\n            padding: 12px;\n            margin: 0;\n            white-space: nowrap;\n            overflow: auto;\n            box-sizing: border-box;\n          }\n          .ngxcarouselPoint li {\n            display: inline-block;\n            border-radius: 50%;\n            border: 1px solid rgb(115, 115, 115);\n            padding: 4px;\n            background-color: rgba(0, 0, 0, 0.55);\n            margin: 0 3px;\n            transition-timing-function: cubic-bezier(.17, .67, .83, .67);\n            transition: .4s;\n          }\n          .ngxcarouselPoint li.active {\n            background: #31b70d;\n            border: 1px solid rgb(49, 183, 13);\n            transform: scale(1.2);\n          }\n        "
            },
            load: 2,
            touch: true,
            loop: true,
            easing: 'ease'
        };
    };
    AdvertisingComponent.prototype.onmoveFn = function (event) {
        // carouselLoad will trigger this funnction when your load value reaches
        // it is helps to load the data by parts to increase the performance of the app
        // must use feature to all carousel
    };
    AdvertisingComponent.prototype.openFullScreenImage = function (imageURL) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__full_screen_modal_full_screen_modal_component__["a" /* FullScreenModalComponent */], {
            width: '100%',
            panelClass: 'myDialogStyle',
            data: { URL: imageURL }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    AdvertisingComponent.prototype.openCommunicationDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__communiction_modal_communiction_modal_component__["a" /* CommunictionModalComponent */], {
            // width: '35%',
            panelClass: 'communictioDialogStyle',
            data: { phone: this.advertisemet.owner.phone }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result) {
                _this.mainServ.globalServ.goTo("profile/" + _this.advertisemet.ownerId);
            }
        });
    };
    AdvertisingComponent.prototype.makeReport = function (reportId) {
        var _this = this;
        if (!this.mainServ.loginServ.isLogin())
            this.headerChild.openSignInDialog();
        else if (reportId != "تبليغ") {
            var reports = this.reports.find(function (x) { return x.id == reportId; });
            var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__report_modal_report_modal_component__["a" /* ReportModalComponent */], {
                data: { report: reports, userID: this.mainServ.loginServ.getUserId(), addID: this.addID }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result) {
                    _this.mainServ.globalServ.goTo("");
                }
            });
        }
    };
    AdvertisingComponent.prototype.addToBookmark = function () {
        var _this = this;
        if (this.mainServ.loginServ.isLogin())
            this.mainServ.APIServ.put("users/" + this.mainServ.loginServ.getUserId() + "/bookmarks/rel/" + this.addID, { "ownerId": this.advertisemet.ownerId, "advertisementId": this.addID }).subscribe(function (data) {
                if (_this.mainServ.APIServ.getErrorCode() == 0) {
                    _this.advertisemet.isBookmarked = true;
                    _this.mainServ.globalServ.errorDialog("إضافة إعلان إلى المفضلة", "تمت الإضافة بنجاح");
                }
                else
                    _this.mainServ.globalServ.somthingError();
            });
        else {
            this.headerChild.openSignInDialog();
        }
    };
    AdvertisingComponent.prototype.deleteFromBookmark = function () {
        var _this = this;
        this.mainServ.APIServ.delete("users/" + this.mainServ.loginServ.getUserId() + "/bookmarks/rel/" + this.addID).subscribe(function (data) {
            if (_this.mainServ.APIServ.getErrorCode() == 0) {
                _this.advertisemet.isBookmarked = false;
                _this.mainServ.globalServ.errorDialog("حذف إعلان من المفضلة", "تم الحذف بنجاح");
            }
            else
                _this.mainServ.globalServ.somthingError();
        });
    };
    // chaoesActionModal() {
    //     let dialogRef = this.dialog.open(EditOrDeactiveModalComponent, {
    //         panelClass: 'communictioDialogStyle',
    //         data: { Id: this.advertisemet.id, ads: this.advertisemet }
    //     });
    //     dialogRef.afterClosed().subscribe(result => {
    //         if (result == false) {
    //             this.mainServ.globalServ.goTo("")
    //         } else if (result) {
    //             this.mainServ.globalServ.goTo("edit/" + this.advertisemet.id)
    //         }
    //     });
    // }
    AdvertisingComponent.prototype.deactive = function () {
        var _this = this;
        this.advertisemet.status = "deactive";
        this.mainServ.APIServ.put("advertisemets/" + this.advertisemet.id, this.advertisemet).subscribe(function (data) {
            if (_this.mainServ.APIServ.getErrorCode() == 0) {
                _this.mainServ.globalServ.goTo("");
            }
            else
                _this.mainServ.globalServ.somthingError();
        });
    };
    AdvertisingComponent.prototype.edit = function () {
        this.mainServ.globalServ.goTo("edit/" + this.advertisemet.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__header_header_component__["a" /* HeaderComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__header_header_component__["a" /* HeaderComponent */])
    ], AdvertisingComponent.prototype, "headerChild", void 0);
    AdvertisingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
            selector: 'advertising',
            template: __webpack_require__("../../../../../src/app/advertising/advertising.component.html"),
            styles: [__webpack_require__("../../../../../src/app/advertising/advertising.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__Services_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatDialog */]])
    ], AdvertisingComponent);
    return AdvertisingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>\r\n<div class=\"Footer\">\r\n\r\n\t<div class=\"Footer-about\">\r\n\t\t<div class=\"Footer-about-title\">\r\n\t\t\tعن دلّال\r\n\t\t</div>\r\n\t\t<div class=\"Footer-about-body\">\r\n\t\t\tشرح بسيط عن دلّال ...<br> الموقع الأفضل للبيع و الشراء عبر الانترنت\r\n\t\t</div>\r\n\t\t<div class=\"Footer-about-bar\">\r\n\t\t\t<div class=\"Footer-about-bar-item cursorPointer\" routerLink=\"{{'/terms'}}\">\r\n\t\t\t\tشروط الاستخدام\r\n\t\t\t</div>\r\n\t\t\t<div class=\"Footer-about-bar-item cursorPointer\" routerLink=\"{{'/privacy'}}\" >\r\n\t\t\t\tسياسية الخصوصية\r\n\t\t\t</div>\r\n\t\t\t<div class=\"Footer-about-bar-item cursorPointer\" (click)=\"openContactUs()\">\r\n\t\t\t\tتواصل معنا\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"Footer-contact\">\r\n\t\t<div class=\"Footer-contact-title\">\r\n\t\t\tتواصل معنا\r\n\t\t</div>\r\n\t\t<div class=\"Footer-contact-icons\">\r\n\t\t\t<a href=\"#\" class=\"Footer-contact-icon\" style=\"background-image: url('assets/imgs/facebook.svg');\">\r\n\r\n  </a>\r\n\t\t\t<a href=\"#\" class=\"Footer-contact-icon\" style=\"background-image: url('assets/imgs/insta.svg');\">\r\n\r\n  </a>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\t<div class=\"Footer-right\">\r\n\r\n\t\t<div class=\"Footer-right-text\">\r\n\t\t\tAll Rights Reserved\r\n\t\t</div>\r\n\t\t<div class=\"Footer-right-logo\">\r\n\t\t\t<img src=\"assets/imgs/logo.png\" alt=\"\">\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_us_modal_contact_us_modal_component__ = __webpack_require__("../../../../../src/app/contact-us-modal/contact-us-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_call_api_service__ = __webpack_require__("../../../../../src/app/Services/call-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_global_service__ = __webpack_require__("../../../../../src/app/Services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_login_service__ = __webpack_require__("../../../../../src/app/Services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = /** @class */ (function () {
    function AppComponent(router, logInSer, globalServ, APIServ, dialog) {
        this.router = router;
        this.logInSer = logInSer;
        this.globalServ = globalServ;
        this.APIServ = APIServ;
        this.dialog = dialog;
    }
    AppComponent.prototype.ngOnInit = function () {
        // let url = window.location.href;
        // if (url.indexOf("www.") != -1) {
        //   url = url.replace("www.", '');
        //   window.open(url, '_self');
        // }
    };
    AppComponent.prototype.openContactUs = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__contact_us_modal_contact_us_modal_component__["a" /* ContactUsModalComponent */], {});
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.globalServ.errorDialog("إرسال رسالة", "تمت عملية الإرسال بنجاح");
            }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__Services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_3__Services_global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_2__Services_call_api_service__["a" /* CallApiService */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatDialog */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAuthServiceConfigs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__set_phone_set_phone_component__ = __webpack_require__("../../../../../src/app/set-phone/set-phone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__save_search_model_save_search_model_component__ = __webpack_require__("../../../../../src/app/save-search-model/save-search-model.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_main_service__ = __webpack_require__("../../../../../src/app/Services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_advertising_edit_advertising_component__ = __webpack_require__("../../../../../src/app/edit-advertising/edit-advertising.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_or_deactive_modal_edit_or_deactive_modal_component__ = __webpack_require__("../../../../../src/app/edit-or-deactive-modal/edit-or-deactive-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__activate_activate_component__ = __webpack_require__("../../../../../src/app/activate/activate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forget_password_modal_forget_password_modal_component__ = __webpack_require__("../../../../../src/app/forget-password-modal/forget-password-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_us_modal_contact_us_modal_component__ = __webpack_require__("../../../../../src/app/contact-us-modal/contact-us-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__terms_terms_component__ = __webpack_require__("../../../../../src/app/terms/terms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__privacy_policy_privacy_policy_component__ = __webpack_require__("../../../../../src/app/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__change_password_change_password_component__ = __webpack_require__("../../../../../src/app/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__edit_profile_edit_profile_component__ = __webpack_require__("../../../../../src/app/edit-profile/edit-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__error_modal_error_modal_component__ = __webpack_require__("../../../../../src/app/error-modal/error-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__report_modal_report_modal_component__ = __webpack_require__("../../../../../src/app/report-modal/report-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__full_screen_modal_full_screen_modal_component__ = __webpack_require__("../../../../../src/app/full-screen-modal/full-screen-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Services_global_service__ = __webpack_require__("../../../../../src/app/Services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__add_advertising_add_advertising_component__ = __webpack_require__("../../../../../src/app/add-advertising/add-advertising.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__communiction_modal_communiction_modal_component__ = __webpack_require__("../../../../../src/app/communiction-modal/communiction-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__advertising_advertising_component__ = __webpack_require__("../../../../../src/app/advertising/advertising.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Services_call_api_service__ = __webpack_require__("../../../../../src/app/Services/call-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__sign_in_modal_sign_in_modal_component__ = __webpack_require__("../../../../../src/app/sign-in-modal/sign-in-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__Services_login_service__ = __webpack_require__("../../../../../src/app/Services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__sign_up_modal_sign_up_modal_component__ = __webpack_require__("../../../../../src/app/sign-up-modal/sign-up-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_material_slider__ = __webpack_require__("../../../material/esm5/slider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_angular_persistence__ = __webpack_require__("../../../../angular-persistence/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ngx_carousel__ = __webpack_require__("../../../../ngx-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_ng2_image_compress__ = __webpack_require__("../../../../ng2-image-compress/ng2-image-compress.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_ng2_image_compress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_41_ng2_image_compress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_ng2_img_tools__ = __webpack_require__("../../../../ng2-img-tools/dist/ng2-img-tools.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_ng2_img_max__ = __webpack_require__("../../../../ng2-img-max/dist/ng2-img-max.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_ng_recaptcha__ = __webpack_require__("../../../../ng-recaptcha/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_ng_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_46_ng_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_ng_recaptcha_forms__ = __webpack_require__("../../../../ng-recaptcha/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_ng_recaptcha_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_47_ng_recaptcha_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49_angular5_social_auth__ = __webpack_require__("../../../../angular5-social-auth/angular5-social-auth.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49_angular5_social_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_49_angular5_social_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































 // <-- import the module
 // <-- import the module





// import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
// import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";

function getAuthServiceConfigs() {
    var config = new __WEBPACK_IMPORTED_MODULE_49_angular5_social_auth__["AuthServiceConfig"]([
        {
            id: __WEBPACK_IMPORTED_MODULE_49_angular5_social_auth__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new __WEBPACK_IMPORTED_MODULE_49_angular5_social_auth__["FacebookLoginProvider"]("239549383453276")
        }
    ]);
    return config;
}
// let config = new AuthServiceConfig([
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider("Google-OAuth-Client-Id")
//   },
//   {
//     id: FacebookLoginProvider.PROVIDER_ID,
//     provider: new FacebookLoginProvider("239549383453276")
//   }
// ]);
var globalSettings = { siteKey: '6LcQEXUUAAAAAAGiOR4aO02f1UYyVK_6D4eUmNVa' };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_36__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_48__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_29__sign_up_modal_sign_up_modal_component__["a" /* SignUpModalComponent */], __WEBPACK_IMPORTED_MODULE_1__save_search_model_save_search_model_component__["a" /* SaveSearchModelComponent */], __WEBPACK_IMPORTED_MODULE_0__set_phone_set_phone_component__["a" /* SetPhoneComponent */], __WEBPACK_IMPORTED_MODULE_3__edit_advertising_edit_advertising_component__["a" /* EditAdvertisingComponent */], __WEBPACK_IMPORTED_MODULE_4__edit_or_deactive_modal_edit_or_deactive_modal_component__["a" /* EditOrDeactiveModalComponent */], __WEBPACK_IMPORTED_MODULE_5__activate_activate_component__["a" /* ActivateComponent */], __WEBPACK_IMPORTED_MODULE_6__reset_password_reset_password_component__["a" /* ResetPasswordComponent */], __WEBPACK_IMPORTED_MODULE_7__forget_password_modal_forget_password_modal_component__["a" /* ForgetPasswordModalComponent */], __WEBPACK_IMPORTED_MODULE_8__contact_us_modal_contact_us_modal_component__["a" /* ContactUsModalComponent */], __WEBPACK_IMPORTED_MODULE_9__terms_terms_component__["a" /* TermsComponent */], __WEBPACK_IMPORTED_MODULE_10__privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */], __WEBPACK_IMPORTED_MODULE_11__change_password_change_password_component__["a" /* ChangePasswordComponent */], __WEBPACK_IMPORTED_MODULE_12__edit_profile_edit_profile_component__["a" /* EditProfileComponent */], __WEBPACK_IMPORTED_MODULE_13__error_modal_error_modal_component__["a" /* ErrorModalComponent */], __WEBPACK_IMPORTED_MODULE_14__report_modal_report_modal_component__["a" /* ReportModalComponent */], __WEBPACK_IMPORTED_MODULE_15__full_screen_modal_full_screen_modal_component__["a" /* FullScreenModalComponent */], __WEBPACK_IMPORTED_MODULE_25__sign_in_modal_sign_in_modal_component__["a" /* SignInModalComponent */], __WEBPACK_IMPORTED_MODULE_28__home_page_home_page_component__["a" /* HomePageComponent */], __WEBPACK_IMPORTED_MODULE_21__advertising_advertising_component__["a" /* AdvertisingComponent */], __WEBPACK_IMPORTED_MODULE_20__communiction_modal_communiction_modal_component__["a" /* CommunictionModalComponent */], __WEBPACK_IMPORTED_MODULE_18__add_advertising_add_advertising_component__["a" /* AddAdvertisingComponent */], __WEBPACK_IMPORTED_MODULE_19__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_17__profile_profile_component__["a" /* ProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_45__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_46_ng_recaptcha__["RecaptchaModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_47_ng_recaptcha_forms__["RecaptchaFormsModule"],
                // Main
                __WEBPACK_IMPORTED_MODULE_35__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_45__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_44__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_40__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_38_ngx_carousel__["a" /* NgxCarouselModule */], __WEBPACK_IMPORTED_MODULE_34_angular_persistence__["a" /* PersistenceModule */],
                // Route
                __WEBPACK_IMPORTED_MODULE_24__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_23__app_routes__["a" /* routes */], { useHash: true })
                // material
                ,
                __WEBPACK_IMPORTED_MODULE_30__angular_material_dialog__["c" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_32__angular_material__["b" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_33__angular_material_input__["b" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_37_ngx_infinite_scroll__["a" /* InfiniteScrollModule */], __WEBPACK_IMPORTED_MODULE_31__angular_material_slider__["a" /* MatSliderModule */],
                // comprase Image
                __WEBPACK_IMPORTED_MODULE_42_ng2_img_tools__["a" /* Ng2ImgToolsModule */], __WEBPACK_IMPORTED_MODULE_43_ng2_img_max__["a" /* Ng2ImgMaxModule */],
                __WEBPACK_IMPORTED_MODULE_49_angular5_social_auth__["SocialLoginModule"]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_11__change_password_change_password_component__["a" /* ChangePasswordComponent */], __WEBPACK_IMPORTED_MODULE_0__set_phone_set_phone_component__["a" /* SetPhoneComponent */], __WEBPACK_IMPORTED_MODULE_1__save_search_model_save_search_model_component__["a" /* SaveSearchModelComponent */], __WEBPACK_IMPORTED_MODULE_4__edit_or_deactive_modal_edit_or_deactive_modal_component__["a" /* EditOrDeactiveModalComponent */], __WEBPACK_IMPORTED_MODULE_7__forget_password_modal_forget_password_modal_component__["a" /* ForgetPasswordModalComponent */], __WEBPACK_IMPORTED_MODULE_8__contact_us_modal_contact_us_modal_component__["a" /* ContactUsModalComponent */], __WEBPACK_IMPORTED_MODULE_12__edit_profile_edit_profile_component__["a" /* EditProfileComponent */], __WEBPACK_IMPORTED_MODULE_29__sign_up_modal_sign_up_modal_component__["a" /* SignUpModalComponent */], __WEBPACK_IMPORTED_MODULE_13__error_modal_error_modal_component__["a" /* ErrorModalComponent */], __WEBPACK_IMPORTED_MODULE_14__report_modal_report_modal_component__["a" /* ReportModalComponent */], __WEBPACK_IMPORTED_MODULE_25__sign_in_modal_sign_in_modal_component__["a" /* SignInModalComponent */], __WEBPACK_IMPORTED_MODULE_20__communiction_modal_communiction_modal_component__["a" /* CommunictionModalComponent */], __WEBPACK_IMPORTED_MODULE_15__full_screen_modal_full_screen_modal_component__["a" /* FullScreenModalComponent */]],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_49_angular5_social_auth__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_46_ng_recaptcha__["RECAPTCHA_SETTINGS"],
                    useValue: globalSettings,
                },
                ,
                __WEBPACK_IMPORTED_MODULE_2__Services_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_26_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_27__Services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_22__Services_call_api_service__["a" /* CallApiService */], __WEBPACK_IMPORTED_MODULE_16__Services_global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_41_ng2_image_compress__["ImageCompressService"], __WEBPACK_IMPORTED_MODULE_41_ng2_image_compress__["ResizeOptions"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_48__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_advertising_edit_advertising_component__ = __webpack_require__("../../../../../src/app/edit-advertising/edit-advertising.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activate_activate_component__ = __webpack_require__("../../../../../src/app/activate/activate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__privacy_policy_privacy_policy_component__ = __webpack_require__("../../../../../src/app/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terms_terms_component__ = __webpack_require__("../../../../../src/app/terms/terms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_advertising_add_advertising_component__ = __webpack_require__("../../../../../src/app/add-advertising/add-advertising.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__advertising_advertising_component__ = __webpack_require__("../../../../../src/app/advertising/advertising.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");









// export const routing = RouterModule.forRoot(APP_ROUTES, { enableTracing: true })
var routes = [
    {
        path: 'detail/:addID',
        component: __WEBPACK_IMPORTED_MODULE_7__advertising_advertising_component__["a" /* AdvertisingComponent */]
    }, {
        path: 'edit/:addID',
        component: __WEBPACK_IMPORTED_MODULE_0__edit_advertising_edit_advertising_component__["a" /* EditAdvertisingComponent */]
    }, {
        path: "home",
        component: __WEBPACK_IMPORTED_MODULE_8__home_page_home_page_component__["a" /* HomePageComponent */]
    }, {
        path: "addAdvertising",
        component: __WEBPACK_IMPORTED_MODULE_6__add_advertising_add_advertising_component__["a" /* AddAdvertisingComponent */]
    }, {
        path: "profile/:userID",
        component: __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a" /* ProfileComponent */]
    }, {
        path: "myprofile/:userID",
        component: __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a" /* ProfileComponent */]
    }, {
        path: "terms",
        component: __WEBPACK_IMPORTED_MODULE_4__terms_terms_component__["a" /* TermsComponent */]
    }, {
        path: "privacy",
        component: __WEBPACK_IMPORTED_MODULE_3__privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */]
    }, {
        path: "login/reset-password",
        component: __WEBPACK_IMPORTED_MODULE_2__reset_password_reset_password_component__["a" /* ResetPasswordComponent */]
    }, {
        path: "login/verify",
        component: __WEBPACK_IMPORTED_MODULE_1__activate_activate_component__["a" /* ActivateComponent */]
    },
    {
        path: "**",
        component: __WEBPACK_IMPORTED_MODULE_8__home_page_home_page_component__["a" /* HomePageComponent */]
    }
];


/***/ }),

/***/ "../../../../../src/app/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\r\n<!--component html goes here -->\r\n<!--component html goes here -->\r\n<!--<div id=\"\" class=\"ModalContainer\">\r\n\t\t\t<div class=\"SignUpModuleContainer\">-->\r\n\r\n<div class=\"SignUpModule\">\r\n    <div class=\"SignUpModule-header\" style=\"direction: rtl;\">\r\n        <div class=\"SignUpModule-header-title\">\r\n            تعديل كلمة السر\r\n        </div>\r\n        <div class=\"SignUpModule-header-close\" (click)=\"closeModal()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"SignUpModule-body\">\r\n                <label for=\"name\" style=\"color: red\">{{message}}</label>\r\n\r\n        <div class=\"SignUpModule-body-inputcontainer\">\r\n            <label for=\"name\">كلمة السر القديمة</label>\r\n           \r\n            <input [(ngModel)]=\"password.oldPassword\" (focus)=\"message='';\" class=\"SignUpModule-body-inputcontainer-text\" type=\"password\" value=\"\" name=\"name\">\r\n        </div>\r\n         <div class=\"SignUpModule-body-inputcontainer\">\r\n            <label for=\"name\">كلمة السر الحديثة</label>\r\n            <input [(ngModel)]=\"password.newPassword\" (focus)=\"message='';\" class=\"SignUpModule-body-inputcontainer-text\" type=\"password\" value=\"\" name=\"name\">\r\n        </div>\r\n        <button (click)=\"editPassword()\" class=\"SignUpModule-body-inputcontainer SignUpModule-body-btn\">\r\n            تعديل كلمة السر\r\n        </button>\r\n    </div>\r\n</div>\r\n<!--</div>\r\n\t\t</div>-->"

/***/ }),

/***/ "../../../../../src/app/change-password/change-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_global_service__ = __webpack_require__("../../../../../src/app/Services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_call_api_service__ = __webpack_require__("../../../../../src/app/Services/call-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(dialogRef, APIServ, globalServ) {
        this.dialogRef = dialogRef;
        this.APIServ = APIServ;
        this.globalServ = globalServ;
        this.message = "";
        this.password = { "oldPassword": "", "newPassword": "" };
    }
    ChangePasswordComponent.prototype.editPassword = function () {
        var _this = this;
        this.APIServ.post("users/change-password", this.password).subscribe(function (data) {
            if (_this.APIServ.getErrorCode() == 0) {
                _this.dialogRef.close(true);
            }
            else if (_this.APIServ.getErrorCode() == 400) {
                _this.message = "كلمة السر الحالية خاطئة";
                _this.APIServ.setErrorCode(0);
            }
            else
                _this.globalServ.somthingError();
        });
    };
    ChangePasswordComponent.prototype.closeModal = function () {
        this.dialogRef.close();
    };
    ChangePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'change-password',
            template: __webpack_require__("../../../../../src/app/change-password/change-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/change-password/change-password.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__["d" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_1__Services_call_api_service__["a" /* CallApiService */], __WEBPACK_IMPORTED_MODULE_0__Services_global_service__["a" /* GlobalService */]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/communiction-modal/communiction-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"SignInModule\">\r\n    <div class=\"SignInModule-header\" style=\"direction: rtl;\">\r\n        <div class=\"SignInModule-header-title\">\r\n            معلومات الاتصال\r\n        </div>\r\n        <div class=\"SignInModule-header-close\" (click)=\"closeModal()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"SignInModule-body\">\r\n        <label style=\"text-align: center;width: 100%;\"> <a href=\"tel:{{data.phone}}\">{{data.phone}}</a> \r\n           :للتواصل مع صاحب الإعلان </label> \r\n        <br>\r\n        <label>\r\n        أو عن طريق زيارة \r\n        <a (click)=\"goToPage()\" style=\"color: #257310\">صفحته الشخصية</a>\r\n        </label>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/communiction-modal/communiction-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/communiction-modal/communiction-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunictionModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CommunictionModalComponent = /** @class */ (function () {
    function CommunictionModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CommunictionModalComponent.prototype.goToPage = function () {
        this.dialogRef.close(true);
    };
    CommunictionModalComponent.prototype.closeModal = function () {
        this.dialogRef.close();
    };
    CommunictionModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'communiction-modal',
            template: __webpack_require__("../../../../../src/app/communiction-modal/communiction-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/communiction-modal/communiction-modal.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */], Object])
    ], CommunictionModalComponent);
    return CommunictionModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contact-us-modal/contact-us-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\r\n<!--component html goes here -->\r\n<!--<div id=\"\" class=\"ModalContainer\">\r\n\t\t\t<div class=\"SignInModuleContainer\">-->\r\n<div class=\"SignInModule\">\r\n    <div class=\"SignInModule-header\" style=\"direction: rtl;\">\r\n        <div class=\"SignInModule-header-title\">\r\n            تواصل معنا\r\n        </div>\r\n        <div class=\"SignInModule-header-close\" (click)=\"closeModal()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"SignInModule-body\">\r\n        <label for=\"name\" style=\"color: red\">{{message}}</label>\r\n        <div class=\"SignInModule-body-inputcontainer\">\r\n            <label for=\"name\">البريد الإلكتروني</label>\r\n            <input [(ngModel)]=\"mail.email\" (focus)=\"message='';\" class=\"SignInModule-body-inputcontainer-text\" type=\"email\" value=\"\"\r\n                name=\"name\">\r\n        </div>\r\n        <div class=\"SignInModule-body-inputcontainer\">\r\n            <label for=\"name\">الموضوع</label>\r\n            <input [(ngModel)]=\"mail.subject\" (focus)=\"message='';\" class=\"SignInModule-body-inputcontainer-text\" type=\"text\" value=\"\"\r\n                name=\"name\">\r\n        </div>\r\n        <div class=\"SignInModule-body-inputcontainer\">\r\n            <label for=\"name\">الرسالة</label>\r\n            <textarea style=\"resize: none;height: 130px;\" [(ngModel)]=\"mail.message\" (focus)=\"message='';\" class=\"SignInModule-body-inputcontainer-text\"\r\n                value=\"\" name=\"name\"></textarea>\r\n        </div>\r\n\r\n        <div (click)=\"send()\" class=\"SignInModule-body-inputcontainer SignInModule-body-btn\">\r\n            إرسال\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!--</div>\r\n\t\t</div>-->"

/***/ }),

/***/ "../../../../../src/app/contact-us-modal/contact-us-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact-us-modal/contact-us-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_main_service__ = __webpack_require__("../../../../../src/app/Services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactUsModalComponent = /** @class */ (function () {
    function ContactUsModalComponent(dialogRef, mainServ) {
        this.dialogRef = dialogRef;
        this.mainServ = mainServ;
        this.mail = {};
    }
    ContactUsModalComponent.prototype.send = function () {
        var _this = this;
        if (this.mail['email'] == "" || this.mail['email'] == null) {
            this.message = "الإيميل";
        }
        else if (this.mail['subject'] == "" || this.mail['subject'] == null) {
            this.message = "العنوان";
        }
        else if (this.mail['message'] == "" || this.mail['message'] == null) {
            this.message = "الرسالة";
        }
        if (this.message != "") {
            this.message = "الرجاء إدخال حقل " + this.message;
        }
        else {
            this.mainServ.APIServ.post("users/contactUs", this.mail).subscribe(function (data) {
                if (_this.mainServ.APIServ.getErrorCode() == 0) {
                    _this.dialogRef.close(true);
                }
                else {
                    _this.message = "الرجاء المحاولة لاحقاً";
                    _this.mainServ.APIServ.setErrorCode(0);
                }
            });
        }
    };
    ContactUsModalComponent.prototype.closeModal = function () {
        this.dialogRef.close();
    };
    ContactUsModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'contact-us-modal',
            template: __webpack_require__("../../../../../src/app/contact-us-modal/contact-us-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact-us-modal/contact-us-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_0__Services_main_service__["a" /* MainService */]])
    ], ContactUsModalComponent);
    return ContactUsModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/edit-advertising/edit-advertising.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\r\n<div class=\"MainContainer\">\r\n    <div class=\"HeaderBackground\">\r\n        <header></header>\r\n        <div class=\"Triangle Triangle--pages\">\r\n            <div class=\"Triangle--pages-title\">\r\n                تعديل إعلان\r\n            </div>\r\n\r\n            <div class=\"Triangle--spacer\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"Content\">\r\n        <div class=\"GridContainer\">\r\n            <div class=\"HeaderBoxContianer HeaderBoxContianer--addpage\">\r\n                <div class=\"HeaderBox HeaderBox--adspage\">\r\n                    <div class=\"AddNewForm-inputcontainer\">\r\n                        <label for=\"name\">عنوان الإعلان</label>\r\n                        <input [(ngModel)]=\"search.title\" class=\"AddNewForm-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"HeaderBox HeaderBox--adspage\" *ngIf=\"isCategoryFree==false\">\r\n                    <div class=\"AddNewForm-inputcontainer\">\r\n                        <label for=\"name\">السعر المطلوب</label>\r\n                        <input type=\"text\" onkeydown=\"return ( event.ctrlKey || event.altKey \r\n                    || (47<event.keyCode && event.keyCode<58 && event.shiftKey==false) \r\n                    || (95<event.keyCode && event.keyCode<106)\r\n                    || (event.keyCode==8) || (event.keyCode==9) \r\n                    || (event.keyCode>34 && event.keyCode<40) \r\n                    || (event.keyCode==46) )\" [(ngModel)]=\"search.price\" class=\"AddNewForm-inputcontainer-text\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"AddNewContainer\">\r\n                <div class=\"AddNewForm\">\r\n                    <div class=\"AddNewForm-column\">\r\n                        <div class=\"AddNewForm-inputcontainer\">\r\n                            <select [(ngModel)]=\"search.cityId\" class=\"AddNewForm-inputcontainer-select AddNewForm-down AddNewForm-inputcontainer-select--lg\">\r\n                                <option [ngValue]=\"undefined\" selected>اختر المدينة</option>\r\n\t\t\t\t\t\t        <option *ngFor=\"let city of cities\" value=\"{{city.id}}\" >{{city.name}}</option>\r\n                            </select>\r\n                        </div>\r\n\r\n                        <div class=\"AddNewForm-inputcontainer\">\r\n                            <select (change)=\"changeCategory($event.target.value)\" [(ngModel)]=\"search.categoryId\" class=\"AddNewForm-inputcontainer-select AddNewForm-down AddNewForm-inputcontainer-select--md\">\r\n                            \t<option [ngValue]=\"undefined\" selected>اختر الفئة</option>\r\n\t\t\t\t        \t\t<option *ngFor=\"let category of categories\" value=\"{{category.id}}\" >{{category.title}}</option> \r\n                            </select>\r\n                            <select (change)=\"changeSubCategory($event.target.value)\" [(ngModel)]=\"search.subCategoryId\" class=\"AddNewForm-inputcontainer-select AddNewForm-down AddNewForm-inputcontainer-select--sm\">\r\n                                <option [ngValue]=\"undefined\" selected> اختر الفئة الفرعية</option>\t\t\t\t\t\t\t\t \r\n                                <option *ngFor=\"let subCategory of subCategories\" value=\"{{subCategory.id}}\" >{{subCategory.title}}</option>\t\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"AddNewForm-inputcontainer\">\r\n                            <label for=\"name\">عنوان </label>\r\n                            <input [(ngModel)]=\"search.address\" class=\"AddNewForm-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\r\n                        </div>\r\n                        <div class=\"AddNewForm-inputcontainer\">\r\n                            <label for=\"name\">شرح </label>\r\n                            <input [(ngModel)]=\"search.description\" class=\"AddNewForm-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\r\n                        </div>\r\n                        <div class=\"AddNewForm-inputcontainer\" *ngFor=\"let oneKey of vetcorKeyFilter; let i = index;\">\r\n                            <label for=\"name\">{{oneKey.key}} </label>\r\n                            <input *ngIf=\"oneKey.type == 'text' \" [(ngModel)]=\"search.fields[i].value\" class=\"AddNewForm-inputcontainer-text\" type=\"text\"\r\n                                value=\"\" name=\"name\">\r\n                            <input type=\"text\" onkeydown=\"return ( event.ctrlKey || event.altKey \r\n                    || (47<event.keyCode && event.keyCode<58 && event.shiftKey==false) \r\n                    || (95<event.keyCode && event.keyCode<106)\r\n                    || (event.keyCode==8) || (event.keyCode==9) \r\n                    || (event.keyCode>34 && event.keyCode<40) \r\n                    || (event.keyCode==46) )\" *ngIf=\"oneKey.type == 'number' \" [(ngModel)]=\"search.fields[i].value\" class=\"AddNewForm-inputcontainer-text\"\r\n                                value=\"\" name=\"name\">\r\n                            <select style=\"width: 100%\" *ngIf=\"oneKey.type == 'choose' \" (change)=\"changeValue($event.target.value,i)\" [(ngModel)]=\"search.fields[i].value\"\r\n                                class=\"AddNewForm-inputcontainer-select AddNewForm-down AddNewForm-inputcontainer-select--md\">\r\n\t\t\t\t\t\t\t\t \t<option *ngFor=\"let oneValue of oneKey.values\" value=\"{{oneValue.value}}\" >{{oneValue.value}}</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"AddNewForm-column\">\r\n                        <div [ngClass]=\"{'hidden':images.length==0}\" class=\"AddNewForm-imagescontainer AddNewForm-imagescontainer--lg\">\r\n                            <div class=\"AddNewForm-imagescontainer-largeimage\">\r\n                                <img src=\"{{images[0]}}\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"AddNewForm-imagescontainer AddNewForm-imagescontainer--sm\">\r\n                            <div *ngFor=\"let value of images;let i=index\" class=\"AddNewForm-imagescontainer-smallimage\">\r\n                                <div (click)=\"deleteImage(i)\" class=\"openImage cursorPointer\"></div>\r\n                                <img src=\"{{value}}\" />\r\n                            </div>\r\n                            <div *ngFor=\"let image of imageOnLoad;let i = index\" class=\"AddNewForm-imagescontainer-smallimage\" style=\"    position: relative;\">\r\n                                <img id=\"{{'uploadImage'+i}}\" />\r\n                                <img src=\"assets/imgs/infinity_loader_by_volorf.gif\" style=\"position:  absolute;opacity: 0.5;top: 0px;height: 100%;left:  0px;width: 100%;\"\r\n                                />\r\n\r\n                            </div>\r\n\r\n\r\n                            <div (click)=\"openSelectImage()\" for=\"file\" class=\"AddNewForm-imagescontainer-browseimage cursorPointer\">\r\n                                <input multiple type=\"file\" style=\"display:none\" id=\"files\" (change)=\"onChange($event)\" />\r\n                                <img src=\"assets/imgs/browse.png\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"AddNewForm-submitcontainer\">\r\n                            <!--<div class=\"AddNewForm-checkboxcontainer\">\r\n                                <input type=\"checkbox\" id=\"checkbox_id\" [(ngModel)]=\"isAgree\" value=\"value\">\r\n                                <label for=\"checkbox_id\">\r\n                                    أوافق على\r\n                                    <div class=\"u-textPrimaryColor cursorPointer\" routerLink=\"{{'/terms'}}\">شروط الاستخدام</div>\r\n                                     و\r\n                                    <div class=\"u-textPrimaryColor cursorPointer\" routerLink=\"{{'/privacy'}}\">اتفاقية الخصوصية</div>\r\n                                </label>\r\n                            </div>-->\r\n                            <div class=\"AddNewForm-btn\" style=\"width: 40%;;margin: 28px 5%\" (click)=\"editAdvertising()\">\r\n                                تعديل\r\n                            </div>\r\n                            <div class=\"AddNewForm-btn\" style=\"width: 40%;;margin: 28px 5%;background-color:  red;\" routerLink=\"{{'/detail/'+search.id}}\">\r\n                                إلغاء\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"ItemsContainer-loader\" style=\"width:  100%;position:  absolute;height:  100%;\" [ngClass]=\"{'hidden':loader==false}\">\r\n                    <img src=\"assets/imgs/spinner.svg\" alt=\"Kiwi standing on oval\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!--Below main container end-->\r\n\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/edit-advertising/edit-advertising.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hidden {\n  display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-advertising/edit-advertising.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAdvertisingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_main_service__ = __webpack_require__("../../../../../src/app/Services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditAdvertisingComponent = /** @class */ (function () {
    function EditAdvertisingComponent(mainServ, route) {
        var _this = this;
        this.mainServ = mainServ;
        this.route = route;
        this.keyFilter = [];
        this.tempFields = [];
        this.vetcorKeyFilter = [];
        this.search = {};
        this.isAgree = false;
        this.images = [];
        this.imageOnLoad = [];
        // this.search['fields'] = [];
        this.route.params.subscribe(function (addID) { return _this.addID = addID.addID; });
        this.loader = false;
    }
    EditAdvertisingComponent.prototype.ngOnInit = function () {
        var _this = this;
        $("html, body").animate({ scrollTop: 0 }, "slow");
        this.mainServ.APIServ.get("cities").subscribe(function (data) {
            _this.cities = data;
        });
        this.mainServ.APIServ.get("categories?filter=%7B%22include%22%3A[%22subCategories%22]%7D").subscribe(function (data) {
            _this.categories = data;
            _this.mainServ.APIServ.get("advertisemets/" + _this.addID).subscribe(function (data) {
                if (_this.mainServ.APIServ.getErrorCode() == 0) {
                    _this.search = data;
                    _this.tempFields = _this.search['fields'];
                    _this.search['fields'] = [];
                    _this.initFildes(_this.search['categoryId'], _this.search['subCategoryId']);
                    // this.changeCategory(this.search['categoryId'], true);
                    // this.changeSubCategory(this.search['subCategoryId'], true);
                    _this.images = _this.search['images'];
                }
                else
                    _this.mainServ.globalServ.somthingError();
            });
        });
    };
    // oneField(fields, numVlaue) {
    //     fields.forEach((element, index) => {
    //         numVlaue++;
    //         if (element.type == "choose") {
    //             var tempValue = [];
    //             element.values.forEach(elementValue => {
    //                 tempValue.push({ value: elementValue.value, fields: elementValue.fields })
    //             });
    //             let newFildes = element.values.find(x => x.value == this.search["fields"][numVlaue - 1].value).fields;
    //             this.vetcorKeyFilter.push({ type: element.type, key: element.key,_id: element._id, values: tempValue, lengthChilde: newFildes.length })
    //             numVlaue = this.oneField(newFildes, numVlaue);
    //         }
    //         else
    //             this.vetcorKeyFilter.push({ type: element.type, key: element.key ,_id: element._id})
    //     });
    //     return numVlaue;
    // }
    EditAdvertisingComponent.prototype.oneField = function (fields) {
        var _this = this;
        fields.forEach(function (element, index) {
            var thisField = _this.tempFields.find(function (x) { return x._id == element._id; });
            if (thisField)
                _this.search['fields'].push({ "value": thisField.value });
            else
                _this.search['fields'].push({});
            if (element.type == "choose") {
                var tempValue = [];
                element.values.forEach(function (elementValue) {
                    tempValue.push({ value: elementValue.value, fields: elementValue.fields });
                });
                if (thisField) {
                    var newFildes = element.values.find(function (x) { return x.value == thisField.value; }).fields;
                    _this.vetcorKeyFilter.push({ type: element.type, key: element.key, _id: element._id, values: tempValue, lengthChilde: newFildes.length });
                    _this.oneField(newFildes);
                }
                else {
                    _this.vetcorKeyFilter.push({ type: element.type, key: element.key, _id: element._id, values: tempValue, lengthChilde: 0 });
                }
            }
            else {
                _this.vetcorKeyFilter.push({ type: element.type, key: element.key, _id: element._id });
            }
        });
    };
    EditAdvertisingComponent.prototype.initFildes = function (categortID, subCategoryID) {
        var _this = this;
        this.isCategoryFree = this.categories.find(function (x) { return x.id == categortID; }).isFree;
        this.vetcorKeyFilter = [];
        var numValue = 0;
        this.subCategories = this.categories.find(function (x) { return x.id == categortID; }).subCategories;
        this.keyFilter = this.categories.find(function (x) { return x.id == categortID; }).fields;
        if (this.keyFilter)
            this.oneField(this.keyFilter);
        this.keyFilter = this.categories.find(function (x) { return x.id == _this.search["categoryId"]; }).subCategories.find(function (y) { return y.id == subCategoryID; }).fields;
        if (this.keyFilter)
            this.oneField(this.keyFilter);
    };
    EditAdvertisingComponent.prototype.releadImage = function (innerIndex, file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var id = 'uploadImage' + innerIndex;
            document.getElementById(id).setAttribute('src', reader.result);
            // this.text = reader.result;
        };
        reader.readAsDataURL(file);
    };
    EditAdvertisingComponent.prototype.onChange = function (event) {
        var _this = this;
        var files = [].slice.call(event.target.files);
        var allFilles = event.target.files;
        this.imageOnLoad = Array(files.length);
        var innerIndex = 0;
        for (var i = 0; i < allFilles.length; i++) {
            var file = allFilles[i];
            var x;
            console.log("fromOut");
            console.log(i);
            this.releadImage(i, file);
        }
        this.mainServ.APIServ.uploadImage("files/images/upload", event.target.files, files.length).subscribe(function (data) {
            _this.imageOnLoad = [];
            data.forEach(function (element) {
                _this.images.push(element);
            });
        });
    };
    // changeCategory(categortID, isFirst: boolean = false) {
    //     this.subCategories = this.categories.find(x => x.id == categortID).subCategories;
    //     this.keyFilter = [];
    //     if (!isFirst) {
    //         this.search['fields'] = [];
    //         this.search['category'] = this.categories.find(x => x.id == categortID);
    //     }
    // }
    EditAdvertisingComponent.prototype.changeCategory = function (categortID) {
        var _this = this;
        this.isCategoryFree = this.categories.find(function (x) { return x.id == categortID; }).isFree;
        this.subCategories = this.categories.find(function (x) { return x.id == categortID; }).subCategories;
        this.keyFilter = JSON.parse(JSON.stringify(this.categories.find(function (x) { return x.id == categortID; }).fields));
        // this.keyFilter = this.categories.find(x => x.id == categortID).fields;
        this.vetcorKeyFilter = [];
        if (this.keyFilter)
            this.keyFilter.forEach(function (element, index) {
                if (element.type == "choose") {
                    var tempValue = [];
                    element.values.forEach(function (elementValue) {
                        tempValue.push({ value: elementValue.value, fields: elementValue.fields });
                    });
                    _this.vetcorKeyFilter.push({ type: element.type, key: element.key, _id: element._id, values: tempValue, lengthChilde: 0 });
                }
                else
                    _this.vetcorKeyFilter.push({ type: element.type, key: element.key, _id: element._id });
                _this.search['fields'][index] = {};
            });
    };
    // changeSubCategory(subCategoryID, isFirst: boolean = false) {
    //     this.keyFilter = this.categories.find(x => x.id == this.search["categoryId"]).subCategories.find(y => y.id == subCategoryID).fields;
    //     if (!isFirst) {
    //         this.search['subCategory'] = this.categories.find(x => x.id == this.search["categoryId"]).subCategories.find(y => y.id == subCategoryID)
    //         this.search['fields'] = [];
    //         this.keyFilter.forEach((element, index) => {
    //             this.search['fields'][index] = {};
    //         });
    //     }
    // }
    EditAdvertisingComponent.prototype.changeSubCategory = function (subCategoryID) {
        var _this = this;
        if (this.keyFilter)
            var lastLength = this.vetcorKeyFilter.length;
        else {
            this.keyFilter = [];
            var lastLength = 0;
        }
        var newFields = this.categories.find(function (x) { return x.id == _this.search["categoryId"]; }).subCategories.find(function (y) { return y.id == subCategoryID; }).fields;
        newFields.forEach(function (element) {
            _this.keyFilter.push(element);
        });
        for (var index = lastLength; index < this.keyFilter.length; index++) {
            var element = this.keyFilter[index];
            if (element.type == "choose") {
                var tempValue = [];
                element.values.forEach(function (elementValue) {
                    tempValue.push({ value: elementValue.value, fields: elementValue.fields });
                });
                this.vetcorKeyFilter.push({ type: element.type, key: element.key, _id: element._id, values: tempValue, lengthChilde: 0 });
            }
            else
                this.vetcorKeyFilter.push({ type: element.type, key: element.key, _id: element._id });
            this.search['fields'][index] = {};
        }
        ;
    };
    EditAdvertisingComponent.prototype.deleteFielde = function (field, indexFields) {
        var length = field.lengthChilde;
        for (var indexDel = 0; indexDel < length; indexDel++) {
            if (this.vetcorKeyFilter[indexFields + 1].type == "choose" && this.vetcorKeyFilter[indexFields + 1].lengthChilde > 0) {
                this.deleteFielde(this.vetcorKeyFilter[indexFields + 1], indexFields + 1);
            }
            this.vetcorKeyFilter.splice(indexFields + 1, 1);
            this.search["fields"].splice(indexFields + 1, 1);
        }
    };
    EditAdvertisingComponent.prototype.changeValue = function (value, indexFields) {
        // console.log("value")
        // console.log(value)
        // console.log("value")
        // console.log(indexFields)
        // console.log("befor")
        // console.log(this.vetcorKeyFilter)
        var field = this.vetcorKeyFilter[indexFields];
        // console.log("field")
        // console.log(field)
        // var length = field.lengthChilde
        // for (var indexDel = 0; indexDel < length; indexDel++) {
        //     this.vetcorKeyFilter.splice(indexFields + 1, 1)
        //     this.search["fields"].splice(indexFields + 1, 1)
        // }
        this.deleteFielde(field, indexFields);
        var option = field.values.find(function (x) { return x.value == value; });
        // console.log("option")
        // console.log(option)
        field.lengthChilde = option.fields.length;
        // console.log("lengthChilde")
        // console.log(field.lengthChilde)
        for (var index = option.fields.length; index > 0; index--) {
            var element = option.fields[index - 1];
            if (element.type == "choose") {
                var tempValue = [];
                element.values.forEach(function (elementValue) {
                    tempValue.push({ value: elementValue.value, fields: elementValue.fields });
                });
                this.vetcorKeyFilter.splice(indexFields + 1, 0, { type: element.type, key: element.key, _id: element._id, values: tempValue, lengthChilde: 0 });
            }
            else
                this.vetcorKeyFilter.splice(indexFields + 1, 0, { type: element.type, key: element.key, _id: element._id });
            this.search["fields"].splice(indexFields + 1, 0, {});
        }
        console.log("finish");
        console.log(this.vetcorKeyFilter);
    };
    EditAdvertisingComponent.prototype.openSelectImage = function () {
        document.getElementById('files').click();
    };
    EditAdvertisingComponent.prototype.editAdvertising = function () {
        var _this = this;
        var fieldName = "";
        if (this.search['address'] == "" || this.search['address'] == null) {
            fieldName = "عنوان الإعلان";
        }
        else if (this.search['price'] == "" || this.search['price'] == null) {
            fieldName = "السعر";
        }
        else if (this.search['cityId'] == "" || this.search['cityId'] == null) {
            fieldName = "المدينة";
        }
        else if (this.search['categoryId'] == "" || this.search['categoryId'] == null) {
            fieldName = "الفئة";
        }
        else if (this.search['subCategoryId'] == "" || this.search['subCategoryId'] == null) {
            fieldName = "الفئة الفرعية";
        }
        else if (this.search['title'] == "" || this.search['title'] == null) {
            fieldName = "العنوان";
        }
        else if (this.search['description'] == "" || this.search['description'] == null) {
            fieldName = "شرح";
        }
        this.vetcorKeyFilter.forEach(function (element, index) {
            _this.search['fields'][index].key = element.key;
            _this.search['fields'][index].type = element.type;
            _this.search['fields'][index]._id = element._id;
            if ((_this.search['fields'][index].value == "" || _this.search['fields'][index].value == null) && fieldName == "") {
                fieldName = element.key;
            }
        });
        this.search['images'] = this.images;
        if (this.search['images'].length == 0 && fieldName == "") {
            fieldName = "الصور";
        }
        this.search['ownerId'] = this.mainServ.loginServ.getUserId();
        if (fieldName == "") {
            this.search['price'] = this.mainServ.globalServ.convertNumber(this.search['price']);
            this.search['city'] = this.cities.find(function (x) { return x.id == _this.search["cityId"]; });
            this.loader = true;
            this.mainServ.APIServ.put("advertisemets/" + this.search["id"], this.search).subscribe(function (data) {
                _this.loader = false;
                if (_this.mainServ.APIServ.getErrorCode() == 0) {
                    _this.mainServ.globalServ.goTo("detail/" + data.id);
                }
                else if (_this.mainServ.APIServ.getErrorCode() == 403) {
                    _this.mainServ.APIServ.setErrorCode(0);
                    _this.mainServ.globalServ.errorDialog("فشل إضافة إعلان", "الرجاء التأكد من أن الحساب مفعل");
                }
                else
                    _this.mainServ.globalServ.somthingError();
            });
        }
        else {
            this.mainServ.globalServ.errorDialog(" خطأ إدخال", "الرجاء التحقق من ملئ " + fieldName + " بالقيمه المناسبه ");
        }
    };
    EditAdvertisingComponent.prototype.deleteImage = function (index) {
        this.images.splice(index, 1);
    };
    EditAdvertisingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'edit-advertising',
            template: __webpack_require__("../../../../../src/app/edit-advertising/edit-advertising.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit-advertising/edit-advertising.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__Services_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], EditAdvertisingComponent);
    return EditAdvertisingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/edit-or-deactive-modal/edit-or-deactive-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\r\n<!--<div class=\"SignInModule\">\r\n    <div class=\"SignInModule-header\" style=\"direction: rtl;\">\r\n        <div class=\"SignInModule-header-title\">\r\n            إعلان شخصي\r\n        </div>\r\n        <div class=\"SignInModule-header-close\" (click)=\"closeModal()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"SignInModule-body\" style=\"direction:  rtl;\">\r\n        <label>  هذا الإعلان خاص بك يمكنك </label> \r\n        <br>\r\n        <label>\r\n        \r\n        <a class=\"cursorPointer\" (click)=\"gotToEdit()\" style=\"color: #257310\">تعديله</a>\r\n        أو\r\n        <a class=\"cursorPointer\" (click)=\"deactive()\" style=\"color: #257310\">حذفه</a>        \r\n        </label>\r\n    </div>\r\n</div>-->\r\n\r\n<div class=\"SignInModule\">\r\n    <div class=\"SignInModule-header\" style=\"direction: rtl;\">\r\n        <div class=\"SignInModule-header-title\">\r\n            إعلان شخصي\r\n        </div>\r\n        <div class=\"SignInModule-header-close\" (click)=\"closeModal()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"SignInModule-body\" style=\"direction:  rtl;\">\r\n        <p>  هذا الإعلان خاص بك  </p> \r\n        <div  class=\"editOrDeact\">\r\n            <div class=\"parent \"><div (click)=\"deactive()\" class=\"childe deactive\"></div>\r\n            <p (click)=\"deactive()\">حذف </p>\r\n            </div>\r\n            <div class=\"parent\"><div (click)=\"gotToEdit()\" class=\"childe edit\"></div>\r\n            <p (click)=\"gotToEdit()\">تعديل</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/edit-or-deactive-modal/edit-or-deactive-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-or-deactive-modal/edit-or-deactive-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditOrDeactiveModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_main_service__ = __webpack_require__("../../../../../src/app/Services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditOrDeactiveModalComponent = /** @class */ (function () {
    function EditOrDeactiveModalComponent(dialogRef, mainServ, data) {
        this.dialogRef = dialogRef;
        this.mainServ = mainServ;
        this.data = data;
        this.advId = data.Id;
        this.ads = data.ads;
    }
    EditOrDeactiveModalComponent.prototype.deactive = function () {
        var _this = this;
        this.ads.status = "deactive";
        this.mainServ.APIServ.put("advertisemets/" + this.advId, this.ads).subscribe(function (data) {
            if (_this.mainServ.APIServ.getErrorCode() == 0) {
                _this.dialogRef.close(false);
            }
            else
                _this.mainServ.globalServ.somthingError();
        });
    };
    EditOrDeactiveModalComponent.prototype.gotToEdit = function () {
        this.dialogRef.close(true);
    };
    EditOrDeactiveModalComponent.prototype.closeModal = function () {
        this.dialogRef.close();
    };
    EditOrDeactiveModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'edit-or-deactive-modal',
            template: __webpack_require__("../../../../../src/app/edit-or-deactive-modal/edit-or-deactive-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit-or-deactive-modal/edit-or-deactive-modal.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_0__Services_main_service__["a" /* MainService */], Object])
    ], EditOrDeactiveModalComponent);
    return EditOrDeactiveModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/edit-profile/edit-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\r\n<!--component html goes here -->\r\n<!--<div id=\"\" class=\"ModalContainer\">\r\n\t\t\t<div class=\"SignUpModuleContainer\">-->\r\n\r\n<div class=\"SignUpModule\">\r\n    <div class=\"SignUpModule-header\" style=\"direction: rtl;\">\r\n        <div class=\"SignUpModule-header-title\">\r\n            تعديل معلومات الحساب\r\n        </div>\r\n        <div class=\"SignUpModule-header-close\" (click)=\"closeModal()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"SignUpModule-body\">\r\n\r\n        <label for=\"name\" style=\"color: red\">{{message}}</label>\r\n\r\n        <div class=\"SignUpModule-body-inputcontainer\">\r\n            <label for=\"name\">الأسم</label>\r\n            <input [(ngModel)]=\"newUser.firstName\" (focus)=\"message='';\" class=\"SignUpModule-body-inputcontainer-text\" type=\"text\" value=\"\"\r\n                name=\"name\">\r\n        </div>\r\n        <div class=\"SignUpModule-body-inputcontainer\">\r\n            <label for=\"name\">الرقم</label>\r\n            <input [(ngModel)]=\"newUser.phone\" (focus)=\"message='';\" class=\"SignUpModule-body-inputcontainer-text\" type=\"text\" value=\"\"\r\n                name=\"name\">\r\n        </div>\r\n        <div class=\"SignUpModule-body-inputcontainer\">\r\n            <label for=\"name\">الايميل</label>\r\n            <input [(ngModel)]=\"newUser.email\" (focus)=\"message='';\" class=\"SignUpModule-body-inputcontainer-text\" type=\"text\" value=\"\"\r\n                name=\"name\">\r\n        </div>\r\n        <!--<div class=\"SignUpModule-body-inputcontainer\">\r\n            <label for=\"name\">كلمة السر</label>\r\n            <input [(ngModel)]=\"newUser.password\" (focus)=\"message='';\" class=\"SignUpModule-body-inputcontainer-text\" type=\"password\" value=\"\" name=\"name\">\r\n        </div>-->\r\n        <button (click)=\"editProfile()\" class=\"SignUpModule-body-inputcontainer SignUpModule-body-btn\">\r\n           تعديل\r\n        </button>\r\n    </div>\r\n    <div class=\"SignUpModule-footer\">\r\n        <div class=\"u-textPrimaryColor cursorPointer\" (click)=\"changePassword()\">\r\n            .تغيير كلمة السر \r\n        </div>\r\n\r\n        تريد تغيير كلمة السر\r\n\r\n    </div>\r\n\r\n</div>\r\n<!--</div>\r\n\t\t</div>-->"

/***/ }),

/***/ "../../../../../src/app/edit-profile/edit-profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-profile/edit-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_main_service__ = __webpack_require__("../../../../../src/app/Services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(route, mainServ, thisDialog, data) {
        this.route = route;
        this.mainServ = mainServ;
        this.thisDialog = thisDialog;
        this.data = data;
        this.newUser = {};
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainServ.APIServ.get("users/me").subscribe(function (data) {
            if (_this.mainServ.APIServ.getErrorCode() == 0)
                _this.newUser = data;
            else
                _this.mainServ.globalServ.somthingError();
        });
    };
    EditProfileComponent.prototype.editProfile = function () {
        var _this = this;
        if (this.newUser['firstName'] == "" || this.newUser['firstName'] == null) {
            this.message = "الأسم";
        }
        else if (this.newUser['phone'] == "" || this.newUser['phone'] == null) {
            this.message = "الرقم";
        }
        else if (this.newUser['email'] == "" || this.newUser['email'] == null) {
            this.message = "الأيميل";
        }
        if (this.message != "") {
            this.message = "الرجاء إدخال حقل " + this.message;
        }
        else {
            this.mainServ.APIServ.put("/users/" + this.newUser['id'], this.newUser).subscribe(function (data) {
                if (_this.mainServ.APIServ.getErrorCode() == 0) {
                    _this.thisDialog.close(false);
                }
                else if (_this.mainServ.APIServ.getErrorCode() == 422) {
                    _this.message = "هذا البريد الالكتروني مسجل مسبقا";
                    _this.mainServ.APIServ.setErrorCode(0);
                }
                else
                    _this.mainServ.globalServ.somthingError();
            });
        }
    };
    EditProfileComponent.prototype.changePassword = function () {
        this.thisDialog.close(true);
    };
    EditProfileComponent.prototype.closeModal = function () {
        this.thisDialog.close();
    };
    EditProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'edit-profile',
            template: __webpack_require__("../../../../../src/app/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit-profile/edit-profile.component.scss")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_0__Services_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__["d" /* MatDialogRef */], Object])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/error-modal/error-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\r\n<div class=\"SignInModule\">\r\n    <div class=\"SignInModule-header\" style=\"direction: rtl;\">\r\n        <div class=\"SignInModule-header-title\">\r\n            {{title}}\r\n        </div>\r\n        <div class=\"SignInModule-header-close\" (click)=\"closeModal()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"SignInModule-body\">\r\n        <div class=\"SignInModule-body-inputcontainer\">\r\n            <label for=\"name\">{{containt}}</label>\r\n        </div>\r\n        \r\n        <div (click)=\"cansel()\" class=\"SignInModule-body-inputcontainer SignInModule-body-btn\">\r\n            تم\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/error-modal/error-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error-modal/error-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ErrorModalComponent = /** @class */ (function () {
    function ErrorModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.title = data.title;
        this.containt = data.containt;
    }
    ErrorModalComponent.prototype.cansel = function () {
        this.dialogRef.close(false);
    };
    ErrorModalComponent.prototype.closeModal = function () {
        this.dialogRef.close();
    };
    ErrorModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'error-modal',
            template: __webpack_require__("../../../../../src/app/error-modal/error-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/error-modal/error-modal.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_material_dialog__["d" /* MatDialogRef */], Object])
    ], ErrorModalComponent);
    return ErrorModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/forget-password-modal/forget-password-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\r\n<!--component html goes here -->\r\n<!--<div id=\"\" class=\"ModalContainer\">\r\n\t\t\t<div class=\"SignInModuleContainer\">-->\r\n<div class=\"SignInModule\">\r\n\t<div class=\"SignInModule-header\" style=\"direction: rtl;\">\r\n\t\t<div class=\"SignInModule-header-title\">\r\n\t\t\tنسيت كلمة السر\r\n\t\t</div>\r\n\t\t<div class=\"SignInModule-header-close\" (click)=\"closeModal()\">\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"SignInModule-body\">\r\n\t\t\t<label for=\"name\" style=\"color: red\">{{message}}</label>\r\n\t\t<div class=\"SignInModule-body-inputcontainer\">\r\n\t\t\t<label for=\"name\">الإيميل</label>\r\n\t\t\t<input [(ngModel)]=\"user.email\" (focus)=\"message='';\" class=\"SignInModule-body-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\r\n\t\t</div>\r\n\t\t<div (click)=\"sendEmail()\" class=\"SignInModule-body-inputcontainer SignInModule-body-btn\">\r\n\t\t\tإرسال \r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!--</div>\r\n\t\t</div>-->"

/***/ }),

/***/ "../../../../../src/app/forget-password-modal/forget-password-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forget-password-modal/forget-password-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPasswordModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_main_service__ = __webpack_require__("../../../../../src/app/Services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ForgetPasswordModalComponent = /** @class */ (function () {
    function ForgetPasswordModalComponent(mainServ, dialogRef, data) {
        this.mainServ = mainServ;
        this.dialogRef = dialogRef;
        this.data = data;
        this.user = {};
    }
    ForgetPasswordModalComponent.prototype.closeModal = function () {
        this.dialogRef.close();
    };
    ForgetPasswordModalComponent.prototype.sendEmail = function () {
        var _this = this;
        this.mainServ.APIServ.post("users/reset", this.user).subscribe(function (data) {
            if (_this.mainServ.APIServ.getErrorCode() == 0) {
                _this.message = "الرجاء التحقق في البريد الألكتروني الخاص بك";
            }
            else if (_this.mainServ.APIServ.getErrorCode() == 401) {
                _this.message = "لرجاء التحقق من اسم المستخدم و كلمه المرور";
                _this.mainServ.APIServ.setErrorCode(0);
            }
            else
                _this.mainServ.globalServ.somthingError();
        });
    };
    ForgetPasswordModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'forget-password-modal',
            template: __webpack_require__("../../../../../src/app/forget-password-modal/forget-password-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/forget-password-modal/forget-password-modal.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__Services_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */], Object])
    ], ForgetPasswordModalComponent);
    return ForgetPasswordModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/full-screen-modal/full-screen-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"dialog\">\r\n    <img src=\"{{URL}}\"></div>"

/***/ }),

/***/ "../../../../../src/app/full-screen-modal/full-screen-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/full-screen-modal/full-screen-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullScreenModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var FullScreenModalComponent = /** @class */ (function () {
    function FullScreenModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.URL = this.data.URL;
    }
    FullScreenModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'full-screen-modal',
            template: __webpack_require__("../../../../../src/app/full-screen-modal/full-screen-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/full-screen-modal/full-screen-modal.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_material_dialog__["d" /* MatDialogRef */], Object])
    ], FullScreenModalComponent);
    return FullScreenModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\r\n<div class=\"Header\">\r\n\t<div class=\"TopMenu\">\r\n\t\t<div class=\"u-flex u-flexRowReverse u-flexAlignCenter u-flexJustifyStart  u-fill\">\r\n\t\t\t<i class=\"TopMenu-item TopMenu-item--iconDots\" (click)=\"openMenu()\" *ngIf=\"isLogin\">\r\n\t\t\t\t\t\t\t<ul class=\"DropMenu DropMenu-Top\">\r\n\t\t\t\t\t\t\t\t<li class=\"DropMenu-item\" routerLink=\"{{'/terms'}}\">شروط الإستخدام </li>\r\n\t\t\t\t\t\t\t\t<li class=\"DropMenu-divider\"></li>\r\n\t\t\t\t\t\t\t\t<li class=\"DropMenu-item\" routerLink=\"{{'/privacy'}}\">سياسة الخصوصية</li>\r\n\t\t\t\t\t\t\t\t<li class=\"DropMenu-divider\"></li>\r\n\t\t\t\t\t\t\t\t<li class=\"DropMenu-item\" (click)=\"logout()\">تسجيل الخروج</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</i>\r\n\t\t\t<!-- <a (click)=\"hrefAddAdv()\" class=\"TopMenu-item u-customBtn\">\r\n\t\t\t\t\t\t<img class=\"\" src=\"assets/imgs/w-plus.svg\" alt=\"\">\r\n\t\t\t\t\t\t<span class=\"u-hideOnMedium u-after10p\" >إضافة إعلان</span>\r\n\t\t\t\t\t</a> -->\r\n\t\t\t<div href=\"#\" class=\"u-after10p\" *ngIf=\"isLogin\">\r\n\t\t\t\t<figure class=\"Avatar Avatar--lg cursorPointer\">\r\n\t\t\t\t\t<img src=\"{{profileImage}}\" alt=\"avatar\" routerLink=\"{{'/myprofile/me'}}\">\r\n\t\t\t\t</figure>\r\n\t\t\t</div>\r\n\t\t\t<i class=\"TopMenu-item TopMenu-item--iconBell\" (click)=\"toggleNot()\" *ngIf=\"isLogin\">\r\n\t\t\t\t\t\t\t\t<span class=\"Badge Badge--center\" *ngIf=\"unreadNotBeh!=0\" [attr.data-badge]=\"unreadNotBeh\"></span>\r\n\t\t\t\t\t\t\t\t<ul class=\"NotificationMenu NotificationMenuTop\"   data-infinite-scroll debounce [infiniteScrollDistance]=\"scrollDistance\" [infiniteScrollUpDistance]=\"scrollUpDistance\"\r\n [infiniteScrollThrottle]=\"throttle\" [scrollWindow]=\"false\" (scrolled)=\"onScrollDownNoti()\">\r\n\t\t\t\t\t\t\t\t\t<div *ngFor=\"let oneNot of notificationBeh\">\r\n\t\t\t\t\t\t\t\t\t\t<!--routerLink=\"{{'/detail/'+oneNot.advertisement.id}}\"-->\r\n\t\t\t\t\t\t\t\t<li class=\"NotificationMenu-item\" [ngClass]=\"{'isReadNot' : !oneNot.isRead }\"  (click)=\"visitNot(oneNot.isRead,oneNot.advertisement.id,oneNot.id)\" >\r\n\t\t\t\t\t\t\t\t\t<div href=\"#\" class=\"u-after10p u-inlineBlock\">\r\n\t\t\t\t\t\t              <figure class=\"Avatar Avatar--lg\">\r\n\t\t\t\t\t\t                <img src=\"{{oneNot.advertisement.images[0]}}\" alt=\"avatar\">\r\n\t\t\t\t\t\t              </figure>\r\n\t\t\t\t\t\t            </div>\r\n\t\t\t\t\t\t            <div class=\"u-inlineBlock u-alignTop\">\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"oneNot.type=='NEW_ADS'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tقام\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span> {{oneNot.advertisement.owner.firstName}} </span>\r\n\t\t\t\t\t\t\t\t\t\t\t \t بإضافة إعلان جديد\r\n\t\t\t\t\t\t\t\t\t\t\t </div>\r\n\t\t\t\t\t\t\t\t\t\t\t <div *ngIf=\"oneNot.type=='SEARCH_ADS'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tإعلان يوافق\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span> {{oneNot.name}} </span>\r\n\t\t\t\t\t\t\t\t\t\t\t \t \r\n\t\t\t\t\t\t\t\t\t\t\t </div>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"NotificationMenu-item-date\">{{oneNot.createdAt | date:'yyyy/MM/dd'}}</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class=\"NotificationMenu-divider\"></li>\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!--<li class=\"NotificationMenu-divider\"></li>\r\n\t\t\t\t\t\t\t\t<li class=\"NotificationMenu-item\">\r\n\t\t\t\t\t\t\t\t\t<div href=\"#\" class=\"u-after10p u-inlineBlock\">\r\n\t\t\t\t\t\t              <figure class=\"Avatar Avatar--lg\">\r\n\t\t\t\t\t\t                <img src=\"assets/imgs/avatar.jpg\" alt=\"avatar\">\r\n\t\t\t\t\t\t              </figure>\r\n\t\t\t\t\t\t            </div>\r\n\t\t\t\t\t\t            <div class=\"u-inlineBlock u-alignTop\">\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\tقام\r\n\t\t\t\t\t\t\t\t\t\t\t<span> أبو عبدو </span>\r\n\t\t\t\t\t\t\t\t\t\t \t بإضافة إعلان جديد\r\n\t\t\t\t\t\t\t\t\t\t </div>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"NotificationMenu-item-date\">12/12/2018</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class=\"NotificationMenu-divider\"></li>\r\n\t\t\t\t\t\t\t\t<li class=\"NotificationMenu-item\">\r\n\t\t\t\t\t\t\t\t\t<div href=\"#\" class=\"u-after10p u-inlineBlock\">\r\n\t\t\t\t\t\t              <figure class=\"Avatar Avatar--lg\">\r\n\t\t\t\t\t\t                <img src=\"assets/imgs/avatar.jpg\" alt=\"avatar\">\r\n\t\t\t\t\t\t              </figure>\r\n\t\t\t\t\t\t            </div>\r\n\t\t\t\t\t\t            <div class=\"u-inlineBlock u-alignTop\">\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\tقام\r\n\t\t\t\t\t\t\t\t\t\t\t<span> أبو عبدو </span>\r\n\t\t\t\t\t\t\t\t\t\t \t بإضافة إعلان جديد\r\n\t\t\t\t\t\t\t\t\t\t </div>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"NotificationMenu-item-date\">12/12/2018</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</li>-->\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t            </i>\r\n\t\t\t<a class=\"TopMenu-item cursorPointer\" (click)=\"openSignInDialog()\" *ngIf=\"!isLogin\">الدخول</a>\r\n\t\t\t<a class=\"TopMenu-item cursorPointer\" (click)=\"openSignUpDialog()\" *ngIf=\"!isLogin\">حساب جديد</a>\r\n\t\t</div>\r\n\t\t<div class=\"u-flexAlignSelfStart\">\r\n\t\t\t<img class=\"TopMenu-item TopMenu-item--logo cursorPointer\" routerLink=\"{{''}}\" src=\"assets/imgs/logo.png\" alt=\"\">\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_main_service__ = __webpack_require__("../../../../../src/app/Services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__forget_password_modal_forget_password_modal_component__ = __webpack_require__("../../../../../src/app/forget-password-modal/forget-password-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up_modal_sign_up_modal_component__ = __webpack_require__("../../../../../src/app/sign-up-modal/sign-up-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_in_modal_sign_in_modal_component__ = __webpack_require__("../../../../../src/app/sign-in-modal/sign-in-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(mainServ, dialog) {
        this.mainServ = mainServ;
        this.dialog = dialog;
        this.notificationBeh = [];
        this.array = [];
        this.throttle = 100;
        this.scrollDistance = 2;
        this.scrollUpDistance = 2;
        this.isLogin = this.mainServ.loginServ.isLogin();
        // this.unreadNot=5;
    }
    HeaderComponent.prototype.onScrollDownNoti = function () {
        if ($(".NotificationMenuTop").hasClass("NotificationMenu--isShown")) {
            this.getNotification(true);
        }
    };
    HeaderComponent.prototype.getNotification = function (isScroll) {
        var _this = this;
        if (isScroll === void 0) { isScroll = false; }
        var unreadNot = 0;
        var limit, skip, query;
        if (this.isLogin && this.notificationBeh.length == 0 || isScroll) {
            limit = 5;
            skip = this.notificationBeh.length;
            query = { "order": "createdAt DESC", "limit": limit, "skip": skip, "include": ["advertisement"] };
            this.mainServ.APIServ.get("users/" + this.mainServ.loginServ.getUserId() + "/notifications?filter=" + JSON.stringify(query)).subscribe(function (data) {
                for (var index = 0; index < data.length; index++) {
                    var element = data[index];
                    if (!element.isRead) {
                        _this.mainServ.globalServ.editUnreadNotBeh(_this.unreadNotBeh + 1);
                    }
                    if (element.advertisement)
                        _this.notificationBeh.push(element);
                }
                _this.mainServ.globalServ.editNotificationBeh(_this.notificationBeh);
            });
        }
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainServ.globalServ.castUnreadNotBeh.subscribe(function (unreadNotBeh) { return _this.unreadNotBeh = unreadNotBeh; });
        this.mainServ.globalServ.castNotificationBeh.subscribe(function (notificationBeh) { return _this.notificationBeh = notificationBeh; });
        this.getNotification();
        this.profileImage = this.mainServ.loginServ.getAvatar();
        if (this.profileImage == null || this.profileImage == "" || this.profileImage == "undefined") {
            this.profileImage = "assets/imgs/defult_img.jpg";
        }
    };
    HeaderComponent.prototype.visitNot = function (isRead, id, notId) {
        var _this = this;
        if (isRead == false) {
            this.mainServ.APIServ.put("users/" + this.mainServ.loginServ.getUserId() + "/mak-notifications-read/" + notId, {}).subscribe(function (data) {
                _this.mainServ.globalServ.editUnreadNotBeh(_this.unreadNotBeh - 1);
                _this.notificationBeh.find(function (x) { return x.id == notId; }).isRead = true;
                _this.mainServ.globalServ.editNotificationBeh(_this.notificationBeh);
                _this.mainServ.globalServ.goTo2(id);
            });
        }
        else
            this.mainServ.globalServ.goTo2(id);
    };
    HeaderComponent.prototype.toggleNot = function () {
        $(".NotificationMenuTop").toggleClass('NotificationMenu--isShown');
    };
    HeaderComponent.prototype.openMenu = function () {
        $(".DropMenu-Top").toggleClass('DropMenu--isShown');
    };
    HeaderComponent.prototype.openSignUpDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__sign_up_modal_sign_up_modal_component__["a" /* SignUpModalComponent */], {});
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result) {
                _this.openSignInDialog();
            }
        });
    };
    HeaderComponent.prototype.openSignInDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__sign_in_modal_sign_in_modal_component__["a" /* SignInModalComponent */], {});
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result) {
                _this.openForgetPassDialog();
            }
        });
    };
    HeaderComponent.prototype.openForgetPassDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__forget_password_modal_forget_password_modal_component__["a" /* ForgetPasswordModalComponent */], {
            // width: '35%',
            // width: '50%',
            panelClass: 'communictioDialogStyle',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    HeaderComponent.prototype.logout = function () {
        this.mainServ.loginServ.logout();
    };
    HeaderComponent.prototype.hrefAddAdv = function () {
        if (this.isLogin) {
            this.mainServ.globalServ.goTo("addAdvertising");
        }
        else {
            this.openSignInDialog();
        }
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__Services_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatDialog */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\r\n\r\n<!--<div class=\"demo-gallery\">\r\n\t<ul id=\"lightgallery\">\r\n\t\t<li data-responsive=\"https://sachinchoolur.github.io/lightgallery.js/static/img/1-375.jpg 375, https://sachinchoolur.github.io/lightgallery.js/static/img/1-480.jpg 480, https://sachinchoolur.github.io/lightgallery.js/static/img/1.jpg 800\"\r\n\t\t data-src=\"https://sachinchoolur.github.io/lightgallery.js/static/img/1-1600.jpg\" data-sub-html=\"<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>\">\r\n\t\t\t<a>\r\n          <img class=\"img-responsive\" src=\"https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-1.jpg\">\r\n          <div class=\"demo-gallery-poster\">\r\n            <img src=\"https://sachinchoolur.github.io/lightgallery.js/static/img/zoom.png\">\r\n          </div>\r\n        </a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>-->\r\n<div class=\"MainContainer\" data-infinite-scroll debounce [infiniteScrollDistance]=\"scrollDistance\" [infiniteScrollUpDistance]=\"scrollUpDistance\"\r\n  [infiniteScrollThrottle]=\"throttle\" (scrolled)=\"onScrollDown()\">\r\n  <div class=\"HeaderBackground\">\r\n    <header></header>\r\n    <div class=\"Triangle\">\r\n      <div class=\"Jumbotron\" data-paroller-factor=\"-0.2\">\r\n        <div class=\"Jumbotron-title\">هل تبحث عن شيئ معيّن ؟</div>\r\n        <div class=\"SearchBar\">\r\n          <div class=\"SearchBar-box\" (click)=\"getAdvertisemets(2,{'search':search},false,true)\"></div>\r\n          <select name=\"city\" class=\"SearchBar-location\" [(ngModel)]=\"search.city\">\r\n\t\t\t\t\t\t<option [ngValue]=\"undefined\" selected>\r\n\t\t\t\t\t\t\t{{isMobileSize() ? \"المدينة\" : \"أختر المدينة\"}}\r\n\t\t\t\t\t\t\t<!--{{isMobileSize()== false : \"اختر المدينة\" : \"المدينة\"}}-->\r\n\t\t\t\t\t\t\t<!--{{foo == \"bar\" | iif : \"it's true\" : \"no, it's not\"}}-->\r\n\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t<option *ngFor=\"let city of cities\" value=\"{{city.id}}\">{{city.name}}</option>\r\n\t\t\t\t\t</select>\r\n          <select name=\"category\" class=\"SearchBar-category\" [(ngModel)]=\"search.category\" (change)=\"changeCategory($event.target.value)\">>\r\n\t\t\t\t\t\t<option [ngValue]=\"undefined\" selected>\r\n\t\t\t\t\t\t\t{{isMobileSize() ? \"الفئة\" : \"أختر الفئة\"}}\r\n\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t<option *ngFor=\"let category of mainCategories\" value=\"{{category.id}}\">{{category.title}}</option>\r\n\t\t\t\t\t</select>\r\n          <input class=\"SearchBar-input\" (keyup.enter)=\"getAdvertisemets(2,{'search':search},false,true)\" id=\"\" [placeholder]=\"isMobileSize() ? 'أبحث عن' : 'أنا أبحث عن'\"\r\n            type=\"text\" [(ngModel)]=\"search.title\">\r\n\r\n        </div>\r\n        <div class=\"Jumbotron-subtitle\">\r\n          <!--أكثر من\r\n\t\t\t\t\t<span class=\"u-num\">300</span> إعلان بإنتظارك لتتفقدها-->\r\n          الكثير من الاعلانات بانتظارك لتفقدها\r\n          <a (click)=\"hrefAddAdv()\" class=\"TopMenu-item u-customBtn u-customBtnJumbotron\">\r\n\t\t\t\t\t\t<img class=\"\" src=\"assets/imgs/w-plus.svg\" alt=\"\">\r\n\t\t\t\t\t\t<span class=\"u-hideOnMedium u-after10p\" >إضافة إعلان</span>\r\n\t\t\t\t\t</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"Triangle--spacer\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"Content\">\r\n    <div class=\"GridContainer\">\r\n      <div class=\"CategoriesContainer\">\r\n        <div class=\"CategoryBox\" *ngFor=\"let mainCategory of mainCategories\">\r\n          <div (click)=\"getAdvertisemets(0,{'categoryID':mainCategory.id})\" class=\"CategoryBox-head cursorPointer\" [ngStyle]=\"{'background-image': 'url(' + mainCategory.image + ')'}\">\r\n            <span class=\"CategoryBox-head-title\">{{mainCategory.title}}</span>\r\n          </div>\r\n          <div class=\"CategoryBox-body\">\r\n            <ul>\r\n              <li (click)=\"getAdvertisemets(1,{'categoryID':mainCategory.id,'subCategoryID':mainSubCategory.id})\" *ngFor=\"let mainSubCategory of mainCategory.subCategories\">\r\n                {{mainSubCategory.title}}\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div id=\"Menu\" class=\"MenuContainer MenuContainer--isFixed\" style=\"display: none\">\r\n\r\n        <div class=\"ContentMenu\">\r\n          <div class=\"u-flex u-flexRowReverse u-flexWrap u-flexAlignCenter u-fill\">\r\n            <i class=\"ContentMenu-item ContentMenu-item--iconDots\" (click)=\"openMenu()\" *ngIf=\"isLogin\">\r\n\t\t\t\t\t\t\t<ul class=\"DropMenu DropMenu-Down\">\r\n\t\t\t\t\t\t\t\t<li class=\"DropMenu-item\">شروط الإستخدام</li>\r\n\t\t\t\t\t\t\t\t<li class=\"DropMenu-divider\"></li>\r\n\t\t\t\t\t\t\t\t<li class=\"DropMenu-item\">سياسة الخصوصية</li>\r\n\t\t\t\t\t\t\t\t<li class=\"DropMenu-divider\"></li>\r\n\t\t\t\t\t\t\t\t<li class=\"DropMenu-item\" (click)=\"logout()\">تسجيل الخروج</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</i>\r\n            <a (click)=\"hrefAddAdv()\" class=\"ContentMenu-item u-customBtn\">\r\n              <!-- <i class=\"ContentMenu-item-iconPlus\"> </i> -->\r\n              <img class=\"\" src=\"assets/imgs/w-plus.svg\" alt=\"\">\r\n              <span class=\"u-hideOnMedium u-after10p\">إضافة إعلان</span>\r\n            </a>\r\n            <div href=\"#\" class=\"u-after10p\" *ngIf=\"isLogin\">\r\n              <figure class=\"Avatar Avatar--lg cursorPointer\">\r\n                <img src=\"{{profileImage}}\" alt=\"avatar\" routerLink=\"{{'/myprofile/me'}}\">\r\n              </figure>\r\n            </div>\r\n\r\n            <i class=\"ContentMenu-item ContentMenu-item--iconBell\" (click)=\"toggleNot()\" *ngIf=\"isLogin\">\r\n\t\t\t\t\t\t\t<span class=\"Badge Badge--center\" *ngIf=\"unreadNotBeh!=0\" [attr.data-badge]=\"unreadNotBeh\"></span>\r\n\t\t\t\t\t\t\t<ul class=\"NotificationMenu NotificationMenuDown\" data-infinite-scroll debounce [infiniteScrollDistance]=\"scrollDistance\"\r\n\t\t\t\t\t\t\t [infiniteScrollUpDistance]=\"scrollUpDistance\" [infiniteScrollThrottle]=\"throttle\" [scrollWindow]=\"false\" (scrolled)=\"onScrollUpNoti()\">\r\n\t\t\t\t\t\t\t\t<div *ngFor=\"let oneNot of notificationBeh\">\r\n\t\t\t\t\t\t\t\t\t<li [ngStyle]=\"{'background-color':oneNot.isRead == false ? '#afafaf75' : 'auto' }\" (click)=\"visitNot(oneNot.isRead,oneNot.advertisement.id,oneNot.id)\"\r\n\t\t\t\t\t\t\t\t\t class=\"NotificationMenu-item\">\r\n\t\t\t\t\t\t\t\t\t\t<div href=\"#\" class=\"u-after10p u-inlineBlock\">\r\n\t\t\t\t\t\t\t\t\t\t\t<figure class=\"Avatar Avatar--lg\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{oneNot.advertisement.images[0]}}\" alt=\"avatar\">\r\n\t\t\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"u-inlineBlock u-alignTop\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"oneNot.type=='NEW_ADS'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tقام\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span> {{oneNot.advertisement.owner.firstName}} </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\tبإضافة إعلان جديد\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"oneNot.type=='SEARCH_ADS'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tإعلان يوافق\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span> {{oneNot.name}} </span>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"NotificationMenu-item-date\">{{oneNot.createdAt | date:'yyyy/MM/dd'}}</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"NotificationMenu-divider\"></li>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</i>\r\n            <a class=\"ContentMenu-item cursorPointer\" (click)=\"openSignInDialog()\" *ngIf=\"!isLogin\">الدخول</a>\r\n            <a class=\"ContentMenu-item u-before10p cursorPointer\" (click)=\"openSignUpDialog()\" *ngIf=\"!isLogin\">حساب جديد</a>\r\n            <img class=\"ContentMenu-item ContentMenu-item--logo u-hidden u-showOn700\" src=\"assets/imgs/logo.png\" alt=\"\">\r\n            <div class=\"FilterSearchBar\">\r\n              <div class=\"FilterSearchBar-box\" (click)=\"getAdvertisemets(2,{'search':search})\"></div>\r\n\r\n              <select name=\"city\" [(ngModel)]=\"search.city\" class=\"FilterSearchBar-location\">\r\n\t\t\t\t\t\t\t\t<option [ngValue]=\"undefined\" selected>اختر المدينة</option>\r\n\r\n\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let city of cities\" value=\"{{city.id}}\">{{city.name}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n              <select name=\"category\" [(ngModel)]=\"search.category\" (change)=\"changeCategory($event.target.value)\" class=\"FilterSearchBar-category\">\r\n\t\t\t\t\t\t\t\t<option [ngValue]=\"undefined\" selected>اختر الفئة</option>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let category of mainCategories\" value=\"{{category.id}}\">{{category.title}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n              <input class=\"FilterSearchBar-input\" (keyup.enter)=\"getAdvertisemets(2,{'search':search})\" [(ngModel)]=\"search.title\" id=\"\"\r\n                placeholder=\"أنا أبحث عن\" type=\"text\">\r\n            </div>\r\n          </div>\r\n          <div class=\"u-flexAlignSelfStart u-hideOn700 u-afterAuto\">\r\n            <img class=\"ContentMenu-item ContentMenu-item--logo\" src=\"assets/imgs/logo.png\" alt=\"\">\r\n          </div>\r\n        </div>\r\n        <!--<div class=\"CategoryBar\">\r\n\t\t\t\t\t<div class=\"CategoryBar-item\" (click)=\"getAdvertisemets(0,{'categoryID':mainCategory.id})\" *ngFor=\"let mainCategory of mainCategories\">\r\n\t\t\t\t\t\t{{mainCategory.title}}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>-->\r\n      </div>\r\n      <div class=\"FullContainer\">\r\n        <div class=\"FiltersPanelContianer\" [ngClass]=\"{'hidden':lastType == -1}\">\r\n          <div class=\"FiltersPanel\">\r\n            <div class=\"FiltersPanel-header\">\r\n              <div class=\"FiltersPanel-header-title\">\r\n                البحث المتقدم Filter\r\n              </div>\r\n              <div class=\"FiltersPanel-header-collapse\" (click)=\"collapse()\">\r\n                --\r\n              </div>\r\n              <div class=\"FiltersPanel-header-close\" (click)=\"reseat()\">\r\n\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"FiltersPanel-main\">\r\n              <div class=\"FiltersPanel-body\">\r\n                <div class=\"FiltersPanel-body-inputcontainer\">\r\n                  <label for=\"name\"> </label>\r\n                  <input [(ngModel)]=\"search.title\" (keyup.enter)=\"getAdvertisemets(3,{'search':search})\" class=\"FiltersPanel-body-inputcontainer-text\"\r\n                    placeholder=\"أنا أبحث عن\" type=\"text\" value=\"\" name=\"name\">\r\n                </div>\r\n                <div class=\"FiltersPanel-body-inputcontainer\">\r\n\r\n                  <label for=\"name\"> </label>\r\n                  <div class=\"FiltersPanel-body-inputcontainer-close\" *ngIf=\"search.city!=null\" (click)=\"search.city=undefined\">\r\n                    ×\r\n                  </div>\r\n                  <select class=\"FiltersPanel-body-select FiltersPanel-body-down\" [(ngModel)]=\"search.city\">\r\n\t\t\t\t\t\t\t\t\t\t<option [ngValue]=\"undefined\" selected>اختر المدينة</option>\r\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let city of cities\" value=\"{{city.id}}\">{{city.name}}</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n                </div>\r\n                <div class=\"FiltersPanel-body-inputcontainer\">\r\n                  <label for=\"name\"> </label>\r\n                  <div class=\"FiltersPanel-body-inputcontainer-close\" *ngIf=\"search.category!=null\" (click)=\"search.category=undefined\">\r\n                    ×\r\n                  </div>\r\n                  <select class=\"FiltersPanel-body-select FiltersPanel-body-down\" [(ngModel)]=\"search.category\" (change)=\"changeCategory($event.target.value)\">>\r\n\t\t\t\t\t\t\t\t\t\t<option [ngValue]=\"undefined\" selected>اختر الفئة</option>\r\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let category of mainCategories\" value=\"{{category.id}}\">{{category.title}}</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n                </div>\r\n\r\n                <div class=\"FiltersPanel-body-inputcontainer\">\r\n                  <label for=\"name\"> </label>\r\n                  <div class=\"FiltersPanel-body-inputcontainer-close\" *ngIf=\"search.subCategory!=null\" (click)=\"search.subCategory=undefined\">\r\n                    ×\r\n                  </div>\r\n\r\n                  <select class=\"FiltersPanel-body-select FiltersPanel-body-down\" (change)=\"changeSubCategory($event.target.value)\" [(ngModel)]=\"search.subCategory\">\r\n\t\t\t\t\t\t\t\t\t\t<option [ngValue]=\"undefined\" selected> اختر الفئة الفرعية</option>\r\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let subCategory of subCategories\" value=\"{{subCategory.id}}\">{{subCategory.title}}</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n                </div>\r\n                <div class=\"FiltersPanel-body-inputcontainer\" *ngFor=\"let oneKey of vetcorKeyFilter;let i=index\">\r\n                  <div *ngIf=\"oneKey.isInFilter==true\">\r\n                    <label for=\"name\">{{oneKey.key}}</label>\r\n                    <input *ngIf=\"oneKey.type == 'text'\" (keyup.enter)=\"getAdvertisemets(3,{'search':search})\" [(ngModel)]=\"search.fields[i].value\"\r\n                      class=\"FiltersPanel-body-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\r\n                    <input type=\"text\" onkeydown=\"return ( event.ctrlKey || event.altKey \r\n                    || (47<event.keyCode && event.keyCode<58 && event.shiftKey==false) \r\n                    || (95<event.keyCode && event.keyCode<106)\r\n                    || (event.keyCode==8) || (event.keyCode==9) \r\n                    || (event.keyCode>34 && event.keyCode<40) \r\n                    || (event.keyCode==46) )\" *ngIf=\"oneKey.type == 'number' \" (keyup.enter)=\"getAdvertisemets(3,{'search':search})\"\r\n                      [(ngModel)]=\"search.fields[i].value\" class=\"FiltersPanel-body-inputcontainer-text\" value=\"\" name=\"name\">\r\n                    <div *ngIf=\"oneKey.type == 'choose' \" style=\"position: relative\">\r\n                      <div style=\"top: 17px;\" class=\"FiltersPanel-body-inputcontainer-close\" *ngIf=\"search.fields[i].value!=null\" (click)=\"search.fields[i].value=undefined\">\r\n                        ×\r\n                      </div>\r\n                      <select (change)=\"changeValue($event.target.value,i)\" [(ngModel)]=\"search.fields[i].value\" class=\"FiltersPanel-body-select FiltersPanel-body-down\">\r\n\t\t\t\t\t\t\t\t\t\t<option [ngValue]=\"undefined\" selected>أختر {{oneKey.key}}</option>\r\n                      \r\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let oneValue of oneKey.values\" value=\"{{oneValue.value}}\">{{oneValue.value}}</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"FiltersPanel-body-inputcontainer\">\r\n                  <label for=\"name\"> أقل سعر </label>\r\n                  <input type=\"text\" onkeydown=\"return ( event.ctrlKey || event.altKey \r\n                    || (47<event.keyCode && event.keyCode<58 && event.shiftKey==false) \r\n                    || (95<event.keyCode && event.keyCode<106)\r\n                    || (event.keyCode==8) || (event.keyCode==9) \r\n                    || (event.keyCode>34 && event.keyCode<40) \r\n                    || (event.keyCode==46) )\" class=\"FiltersPanel-body-inputcontainer-text\" (keyup.enter)=\"getAdvertisemets(3,{'search':search})\"\r\n                    [(ngModel)]=\"search.min\" value=\"\" name=\"name\">\r\n                </div>\r\n\r\n                <div class=\"FiltersPanel-body-inputcontainer\">\r\n                  <label for=\"name\"> أكبر سعر </label>\r\n                  <input type=\"text\" onkeydown=\"return ( event.ctrlKey || event.altKey \r\n                    || (47<event.keyCode && event.keyCode<58 && event.shiftKey==false) \r\n                    || (95<event.keyCode && event.keyCode<106)\r\n                    || (event.keyCode==8) || (event.keyCode==9) \r\n                    || (event.keyCode>34 && event.keyCode<40) \r\n                    || (event.keyCode==46) )\" class=\"FiltersPanel-body-inputcontainer-text\" (keyup.enter)=\"getAdvertisemets(3,{'search':search})\"\r\n                    [(ngModel)]=\"search.max\" value=\"\" name=\"name\">\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"FiltersPanel-footer-save\" (click)=\"sveSearch({'search':search})\" *ngIf=\"isLogin\">\r\n                حفظ\r\n              </div>\r\n              <div class=\"FiltersPanel-footer-search\" (click)=\"getAdvertisemets(3,{'search':search})\">\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ItemsContainer\" [ngClass]=\"{'ItemsContainer--filtespanelexpanded':lastType != -1}\">\r\n          <div class=\"ItemBlock cursorPointer\" *ngFor=\"let advertisemet of advertisemets\" routerLink=\"{{'/detail/'+advertisemet.id}}\">\r\n            <div class=\"ItemSummary\">\r\n              <div class=\"ItemSummary-head\">\r\n                <div class=\"ItemSummary-head-title\">\r\n                  {{advertisemet.category.title}}\r\n                </div>\r\n                <div class=\"ItemSummary-head-date ItemSummary-head-date--text\">\r\n                  {{calculateDate(advertisemet.createdAt)}}\r\n                </div>\r\n              </div>\r\n              <div class=\"ItemSummary-head-date ItemSummary-head-date--text  ItemSummary-head-city--text\">\r\n                {{advertisemet.city.name}}\r\n              </div>\r\n              <div class=\"ItemSummary-desc\">\r\n                {{advertisemet.title}}\r\n              </div>\r\n              <div class=\"ItemSummary-price\" *ngIf=\"advertisemet.price!=0\">\r\n                <span class=\"ItemSummary-price-num\">{{advertisemet.price | number}}</span>\r\n                <span class=\"ItemSummary-price-text\">ل.س</span>\r\n              </div>\r\n              <div class=\"ItemSummary-price\" *ngIf=\"advertisemet.price==0\">\r\n                <span class=\"ItemSummary-price-num\">Free</span>\r\n              </div>\r\n              <div class=\"ItemSummary-action\">\r\n                <a routerLink=\"{{'/detail/'+advertisemet.id}}\" class=\"ItemSummary-action-btn\">\r\n\t\t\t\t\t\t\t\t\tمشاهدة المزيد\r\n\t\t\t\t\t\t\t\t</a>\r\n                <div class=\"ItemSummary-action-views\">\r\n                  <span> {{advertisemet.viewsCount}} </span>\r\n\r\n                  <img src=\"assets/imgs/eye.svg\" alt=\"\" style=\"height: 24px;\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ItemBlock-img\" [ngStyle]=\"{'background-image': 'url(' + advertisemet.images[0] + ')'}\">\r\n            </div>\r\n          </div>\r\n          <div class=\"ItemBlock emptyBloack\" *ngIf=\"!cheackOdd(advertisemets.length)\">\r\n\r\n          </div>\r\n\r\n          <div class=\"ItemsContainer-loader\" [ngClass]=\"{'hidden':loader==0}\">\r\n            <img src=\"assets/imgs/spinner.svg\" alt=\"Kiwi standing on oval\">\r\n          </div>\r\n          <div class=\"ItemsContainer-loader\" [ngClass]=\"{'hidden':noData==0}\">\r\n            <img src=\"assets/imgs/empty placeholder.png\" alt=\"Kiwi standing on oval\">\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div id=\"SignUpModal\" class=\"ModalContainer\">\r\n      <div class=\"SignUpModuleContainer\">\r\n        <div class=\"SignUpModule\">\r\n          <div class=\"SignUpModule-header\">\r\n            <div class=\"SignUpModule-header-title\">\r\n              حساب جديد\r\n            </div>\r\n            <div class=\"SignUpModule-header-close\">\r\n            </div>\r\n          </div>\r\n          <div class=\"SignUpModule-body\">\r\n            <div class=\"SignUpModule-body-inputcontainer\">\r\n              <label for=\"name\">اسم الحقل</label>\r\n              <input class=\"SignUpModule-body-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\r\n            </div>\r\n            <div class=\"SignUpModule-body-inputcontainer\">\r\n              <label for=\"name\">اسم الحقل</label>\r\n              <input class=\"SignUpModule-body-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\r\n            </div>\r\n            <div class=\"SignUpModule-body-inputcontainer\">\r\n              <label for=\"name\">اسم الحقل</label>\r\n              <input class=\"SignUpModule-body-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\r\n            </div>\r\n            <div class=\"SignUpModule-body-inputcontainer\">\r\n              <label for=\"name\">اسم الحقل</label>\r\n              <input class=\"SignUpModule-body-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\r\n            </div>\r\n            <div class=\"SignUpModule-body-inputcontainer SignUpModule-body-inputcontainer-checkboxcontainer\">\r\n              <input type=\"checkbox\" class=\"SignUpModule-body-inputcontainer-checkboxlabel\" id=\"checkbox_id\" value=\"value\">\r\n              <label for=\"checkbox_id\">\r\n\t\t\t\t\t\t\t\tأوافق على\r\n\t\t\t\t\t\t\t\t<div class=\"u-textPrimaryColor\">شروط الاستخدام</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"u-textPrimaryColor\">اتفاقية الخصوصية</div>\r\n\t\t\t\t\t\t\t</label>\r\n            </div>\r\n            <div class=\"SignUpModule-body-inputcontainer SignUpModule-body-btn\">\r\n              إنشاء الحساب\r\n            </div>\r\n          </div>\r\n          <div class=\"SignUpModule-footer\">\r\n            لديك حساب مسبقاً\r\n            <div class=\"u-textPrimaryColor\">\r\n              قم بتسجيل الدخول .\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br />\r\n    <br />\r\n    <br />\r\n    <div id=\"SignInModal\" class=\"ModalContainer\">\r\n      <div class=\"SignInModuleContainer\">\r\n        <div class=\"SignInModule\">\r\n          <div class=\"SignInModule-header\">\r\n            <div class=\"SignInModule-header-title\">\r\n              تسجيل الدخول\r\n            </div>\r\n            <div class=\"SignInModule-header-close\">\r\n            </div>\r\n          </div>\r\n          <div class=\"SignInModule-body\">\r\n            <div class=\"SignInModule-body-inputcontainer\">\r\n              <label for=\"name\">اسم المستخدم</label>\r\n              <input class=\"SignInModule-body-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\r\n            </div>\r\n            <div class=\"SignInModule-body-inputcontainer\">\r\n              <label for=\"name\">كلمة السر</label>\r\n              <input class=\"SignInModule-body-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\r\n            </div>\r\n            <div class=\"SignInModule-body-inputcontainer SignInModule-body-inputcontainer-checkboxcontainer\">\r\n              <input type=\"checkbox\" class=\"SignInModule-body-inputcontainer-checkboxlabel\" id=\"checkbox_id2\" value=\"value\">\r\n              <label for=\"checkbox_id2\">\r\n\t\t\t\t\t\t\t\tتذكر كلمة المرور\r\n\t\t\t\t\t\t\t</label>\r\n            </div>\r\n            <div class=\"SignInModule-body-inputcontainer SignInModule-body-btn\">\r\n              تسجيل الدخول\r\n            </div>\r\n            <div class=\"SignInModule-body-inputcontainer u-textCenter\">\r\n              <div class=\"u-textPrimaryColor\"> هل نسيت كلمة السر ؟</div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div style=\"display:none;text-align: center;\">\r\n  <div style=\"font-family: 'OpenSans-Regular' \">\r\n    OpenSans Regular\r\n    <br/> اوبن سانس عادي 1234 ل.س\r\n  </div>\r\n  <br/>\r\n  <br/>\r\n  <div style=\"font-family: 'OpenSans-ExtraBold' \">\r\n    OpenSans-ExtraBold\r\n    <br/> اوبن سانس 1234 ل.س\r\n  </div>\r\n  <br/>\r\n  <br/>\r\n  <div style=\"font-family: 'Swessra-light' \">\r\n    Swessra-light\r\n    <br/> سويسرا خفيف 1234 ل.س\r\n  </div>\r\n  <br/>\r\n  <br/>\r\n  <div style=\"font-family: 'Swessra-medium' \">\r\n    Swessra-medium\r\n    <br/> سويسرا وسط 1234 ل.س\r\n  </div>\r\n  <br/>\r\n  <br/>\r\n</div>\r\n\r\n<div style=\"display: none\" class=\"CategoriesContainer\">\r\n  <div class=\"CategoryBoxSub cursorPointer\" *ngFor=\"let mainCategory of mainCategories\">\r\n    <div class=\"CategoryBoxSub-head\" [ngStyle]=\"{'background-image': 'url(' + mainCategory.image + ')'}\" (click)=\"getAdvertisemets(0,{'categoryID':mainCategory.id},false,true)\">\r\n      <span class=\"CategoryBoxSub-head-title\">{{mainCategory.title}}</span>\r\n    </div>\r\n  </div>\r\n  <!--<div class=\"CategoryBoxSub\">\r\n\t\t<div class=\"CategoryBoxSub-head\" style=\"background-image: url('assets/imgs/bear.jpg');\">\r\n\t\t\t<span class=\"CategoryBoxSub-head-title\">مركبات</span>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"CategoryBoxSub\">\r\n\t\t<div class=\"CategoryBoxSub-head\" style=\"background-image: url('assets/imgs/realS.jpg');\">\r\n\t\t\t<span class=\"CategoryBoxSub-head-title\">مركبات</span>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"CategoryBoxSub\">\r\n\t\t<div class=\"CategoryBoxSub-head\" style=\"background-image: url('assets/imgs/watch.jpg');\">\r\n\t\t\t<span class=\"CategoryBoxSub-head-title\">مركبات</span>\r\n\t\t</div>\r\n\t</div>-->\r\n</div>\r\n\r\n\r\n\r\n<div style=\"display:none;text-align: center;\">\r\n  <div style=\"font-family: 'OpenSans-Regular' \">\r\n    OpenSans Regular\r\n    <br/> اوبن سانس عادي 1234 ل.س\r\n  </div>\r\n  <br/>\r\n  <br/>\r\n  <div style=\"font-family: 'OpenSans-ExtraBold' \">\r\n    OpenSans-ExtraBold\r\n    <br/> اوبن سانس 1234 ل.س\r\n  </div>\r\n  <br/>\r\n  <br/>\r\n  <div style=\"font-family: 'Swessra-light' \">\r\n    Swessra-light\r\n    <br/> سويسرا خفيف 1234 ل.س\r\n  </div>\r\n  <br/>\r\n  <br/>\r\n  <div style=\"font-family: 'Swessra-medium' \">\r\n    Swessra-medium\r\n    <br/> سويسرا وسط 1234 ل.س\r\n  </div>\r\n  <br/>\r\n  <br/>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hidden {\n  display: none; }\n\n.search-results {\n  height: 100%; }\n\n.title {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  width: 100%; }\n\n.title small {\n  color: #eaeaea; }\n\n.emptyBloack {\n  background-color: #f5f7f8 !important;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border: none; }\n\n@media screen and (max-width: 1250px) {\n  .emptyBloack {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__save_search_model_save_search_model_component__ = __webpack_require__("../../../../../src/app/save-search-model/save-search-model.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_main_service__ = __webpack_require__("../../../../../src/app/Services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forget_password_modal_forget_password_modal_component__ = __webpack_require__("../../../../../src/app/forget-password-modal/forget-password-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_in_modal_sign_in_modal_component__ = __webpack_require__("../../../../../src/app/sign-in-modal/sign-in-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sign_up_modal_sign_up_modal_component__ = __webpack_require__("../../../../../src/app/sign-up-modal/sign-up-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(mainServ, dialog) {
        this.mainServ = mainServ;
        this.dialog = dialog;
        this.advertisemets = [];
        this.search = {};
        this.keyFilter = [];
        this.saveSearch = false;
        // forScrool
        this.array = [];
        this.throttle = 100;
        this.scrollDistance = 2;
        this.scrollUpDistance = 2;
        this.direction = '';
        this.loader = false;
        this.notificationBeh = [];
        this.isLogin = this.mainServ.loginServ.isLogin();
        this.noData = false;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.search['fields'] = [];
        this.mainServ.globalServ.castUnreadNotBeh.subscribe(function (unreadNotBeh) { return _this.unreadNotBeh = unreadNotBeh; });
        this.mainServ.globalServ.castNotificationBeh.subscribe(function (notificationBeh) { return _this.notificationBeh = notificationBeh; });
        this.mainServ.globalServ.castFilteringBeh.subscribe(function (filter) { return _this.tempFilter = filter; });
        $("html, body").animate({ scrollTop: 0 }, "slow");
        this.search['max'] = "100000000";
        this.search['min'] = "0";
        this.mainServ.APIServ.get("cities").subscribe(function (data) {
            _this.cities = data;
        });
        this.mainServ.APIServ.get("categories").subscribe(function (data) {
            _this.categories = data;
        });
        this.mainServ.APIServ.get("categories?filter=%7B%22include%22%3A[%22subCategories%22]%7D").subscribe(function (data) {
            _this.mainCategories = data;
            _this.mainServ.globalServ.castFilteringBeh.subscribe(function (filter) { return _this.tempFilter = filter; });
            if (!(_this.tempFilter.name == "" || _this.tempFilter.name == null)) {
                // this.search=this.tempFilter;
                // this.search['city'] = this.tempFilter['cityId'];
                _this.search['category'] = _this.tempFilter['categoryId'];
                _this.search['subCategory'] = _this.tempFilter['subCategoryId'];
                _this.initFildes(_this.search['category'], _this.search['subCategory']);
                _this.search['max'] = _this.tempFilter['maxPrice'];
                _this.search['min'] = _this.tempFilter['minPrice'];
                _this.search['title'] = _this.tempFilter['title'];
                // this.getAdvertisemets(-1, {});
                // this.mainServ.globalServ.editFilteringBeh({});
                _this.getAdvertisemets(3, { "search": _this.search });
                console.log("this.tempFilter.fields");
                console.log(_this.tempFilter["fields"]);
            }
        });
        if (this.tempFilter.name == "" || this.tempFilter.name == null)
            this.getAdvertisemets(-1, {});
        window.addEventListener('scroll', this.scroll, true); //third parameter
        this.profileImage = this.mainServ.loginServ.getAvatar();
        if (this.profileImage == null || this.profileImage == "" || this.profileImage == "undefined") {
            this.profileImage = "assets/imgs/defult_img.jpg";
        }
        if (this.isMobileSize(799) == true) {
            this.collapse();
        }
    };
    // oneField(fields, fieldValue) {
    //     let numVlaue = this.vetcorKeyFilter.length;
    //     fields.forEach((element, index) => {
    //         if (this.tempFilter["fields"][fieldValue] != null && element.key == this.tempFilter["fields"][fieldValue].key) {
    //             this.search['fields'][numVlaue] = { "value": this.tempFilter["fields"][fieldValue].value }
    //             fieldValue++;
    //         }
    //         else
    //             this.search['fields'][numVlaue] = {}
    //         numVlaue++;
    //         if (element.type == "choose") {
    //             var tempValue = [];
    //             element.values.forEach(elementValue => {
    //                 tempValue.push({ value: elementValue.value, fields: elementValue.fields })
    //             });
    //             if (this.search['fields'][numVlaue - 1].value != null) {
    //                 let newFildes = element.values.find(x => x.value == this.tempFilter["fields"][fieldValue - 1].value).fields;
    //                 this.vetcorKeyFilter.push({ type: element.type,priority: element.priority, key: element.key, _id: element._id, values: tempValue, lengthChilde: newFildes.length })
    //                 fieldValue = this.oneField(newFildes, fieldValue);
    //             } else {
    //                 this.vetcorKeyFilter.push({ type: element.type,priority: element.priority, key: element.key, _id: element._id, values: tempValue, lengthChilde: 0 })
    //             }
    //         }
    //         else
    //             this.vetcorKeyFilter.push({ type: element.type,priority: element.priority, key: element.key, _id: element._id })
    //     });
    //     return fieldValue;
    // }
    HomePageComponent.prototype.oneField = function (fields) {
        var _this = this;
        fields.forEach(function (element, index) {
            var thisField = _this.tempFilter["fields"].find(function (x) { return x._id == element._id; });
            if (thisField)
                _this.search['fields'].push({ "value": thisField.value });
            else
                _this.search['fields'].push({});
            if (element.type == "choose") {
                var tempValue = [];
                element.values.forEach(function (elementValue) {
                    tempValue.push({ value: elementValue.value, fields: elementValue.fields });
                });
                if (thisField) {
                    var newFildes = element.values.find(function (x) { return x.value == thisField.value; }).fields;
                    _this.vetcorKeyFilter.push({ type: element.type, isInFilter: element.isInFilter, priority: element.priority, key: element.key, _id: element._id, values: tempValue, lengthChilde: newFildes.length });
                    _this.oneField(newFildes);
                }
                else {
                    _this.vetcorKeyFilter.push({ type: element.type, isInFilter: element.isInFilter, priority: element.priority, key: element.key, _id: element._id, values: tempValue, lengthChilde: 0 });
                }
            }
            else {
                _this.vetcorKeyFilter.push({ type: element.type, isInFilter: element.isInFilter, priority: element.priority, key: element.key, _id: element._id });
            }
        });
    };
    HomePageComponent.prototype.initFildes = function (categortID, subCategoryID) {
        this.vetcorKeyFilter = [];
        var fieldValue = 0;
        if (categortID != null) {
            this.subCategories = this.mainCategories.find(function (x) { return x.id == categortID; }).subCategories;
            this.keyFilter = this.mainCategories.find(function (x) { return x.id == categortID; }).fields;
            // if (this.keyFilter)
            // alert("rrr");
            // this.oneField(this.keyFilter);
            if (subCategoryID != null) {
                this.keyFilter = this.keyFilter.concat(this.mainCategories.find(function (x) { return x.id == categortID; }).subCategories.find(function (y) { return y.id == subCategoryID; }).fields);
            }
            if (this.keyFilter) {
                this.keyFilter.sort(this.compare);
                this.oneField(this.keyFilter);
            }
        }
    };
    HomePageComponent.prototype.ngOnDestroy = function () {
        window.removeEventListener('scroll', this.scroll, true);
    };
    HomePageComponent.prototype.getNotification = function (isScroll) {
        var _this = this;
        if (isScroll === void 0) { isScroll = false; }
        var limit, skip, query;
        if (isScroll) {
            limit = 5;
            skip = this.notificationBeh.length;
            query = { "order": "createdAt DESC", "limit": limit, "skip": skip, "include": ["advertisement"] };
            this.mainServ.APIServ.get("users/" + this.mainServ.loginServ.getUserId() + "/notifications?filter=" + JSON.stringify(query)).subscribe(function (data) {
                for (var index = 0; index < data.length; index++) {
                    var element = data[index];
                    if (!element.isRead) {
                        _this.mainServ.globalServ.editUnreadNotBeh(_this.unreadNotBeh + 1);
                    }
                    if (element.advertisement)
                        _this.notificationBeh.push(element);
                }
                _this.mainServ.globalServ.editNotificationBeh(_this.notificationBeh);
            });
        }
    };
    HomePageComponent.prototype.onScrollUpNoti = function () {
        this.getNotification(true);
    };
    HomePageComponent.prototype.visitNot = function (isRead, id, notId) {
        var _this = this;
        if (isRead == false) {
            this.mainServ.APIServ.put("users/" + this.mainServ.loginServ.getUserId() + "/mak-notifications-read/" + notId, {}).subscribe(function (data) {
                _this.mainServ.globalServ.editUnreadNotBeh(_this.unreadNotBeh - 1);
                _this.notificationBeh.find(function (x) { return x.id == notId; }).isRead = true;
                _this.mainServ.globalServ.editNotificationBeh(_this.notificationBeh);
                _this.mainServ.globalServ.goTo("detail/" + id);
            });
        }
        else
            this.mainServ.globalServ.goTo("detail/" + id);
    };
    HomePageComponent.prototype.scroll = function () {
        var topOfOthDiv = $(".CategoriesContainer").offset().top;
        if ($(window).scrollTop() > topOfOthDiv) {
            $(".MenuContainer").fadeIn('slow');
        }
        else {
            $(".MenuContainer").fadeOut('slow');
        }
        //handle your scroll here
        //notice the 'odd' function assignment to a class field
        //this is used to be able to remove the event listener
    };
    ;
    HomePageComponent.prototype.logout = function () {
        this.mainServ.loginServ.logout();
    };
    HomePageComponent.prototype.toggleNot = function () {
        $(".NotificationMenuDown").toggleClass('NotificationMenu--isShown');
    };
    HomePageComponent.prototype.calculateDate = function (date) {
        return this.mainServ.globalServ.calculatDateAdv(date);
    };
    HomePageComponent.prototype.getAdvertisemets = function (type, data, isScrol, isTopSearch) {
        var _this = this;
        if (isScrol === void 0) { isScrol = false; }
        if (isTopSearch === void 0) { isTopSearch = false; }
        if (isScrol && this.noData || this.loader == true) {
            return;
        }
        else {
            this.noData = false;
        }
        var query, skip, limit;
        this.lastType = type;
        this.lastData = data;
        limit = 10;
        if (isScrol == true) {
            skip = this.advertisemets.length;
        }
        else {
            skip = 0;
            if (!(type == 0 && isTopSearch))
                this.advertisemets = [];
        }
        if (type == -1) {
            query = { "order": "createdAt DESC", "limit": 10, "skip": 0 };
        }
        else if (type == 0) {
            if (!isScrol) {
                $('html, body').animate({
                    scrollTop: $(".ItemsContainer").offset().top - 100
                }, 2000);
            }
            this.search['category'] = data.categoryID;
            this.subCategories = this.mainCategories.find(function (x) { return x.id == data.categoryID; }).subCategories;
            query = { "where": { "categoryId": data.categoryID }, "order": "createdAt DESC", "limit": limit, "skip": skip };
            this.changeCategory(data.categoryID);
        }
        else if (type == 1) {
            if (!isScrol) {
                $('html, body').animate({
                    scrollTop: $(".ItemsContainer").offset().top - 100
                }, 2000);
            }
            this.search['category'] = data.categoryID;
            this.subCategories = this.mainCategories.find(function (x) { return x.id == data.categoryID; }).subCategories;
            this.search['subCategory'] = data.subCategoryID;
            query = { "where": { "categoryId": data.categoryID, "subCategoryId": data.subCategoryID }, "order": "createdAt DESC", "limit": limit, "skip": skip };
            this.changeCategory(data.categoryID);
            this.changeSubCategory(data.subCategoryID);
        }
        else if (type == 2) {
            if (isTopSearch && !isScrol) {
                $('html, body').animate({
                    scrollTop: $(".ItemsContainer").offset().top - 100
                }, 2000);
            }
            if (data.search.title != "" && data.search.title != null) {
                // let title = "%" + data.search.title + "%"
                query = { "where": { "categoryId": data.search.category, "cityId": data.search.city, "title": { "like": data.search.title } }, "order": "createdAt DESC", "limit": limit, "skip": skip };
            }
            else
                query = { "where": { "categoryId": data.search.category, "cityId": data.search.city }, "order": "createdAt DESC", "limit": limit, "skip": skip };
        }
        else if (type == 3) {
            if (!isScrol) {
                $('html, body').animate({
                    scrollTop: $(".ItemsContainer").offset().top - 100
                }, 2000);
            }
            var fiedsQuery_1 = [];
            if (this.vetcorKeyFilter && this.vetcorKeyFilter.length != 0) {
                this.vetcorKeyFilter.forEach(function (element, index) {
                    if (_this.search['fields'][index].value != "" && _this.search['fields'][index].value != null) {
                        fiedsQuery_1.push({
                            "fields": {
                                "elemMatch": {
                                    "key": element.key,
                                    "value": _this.search['fields'][index].value,
                                    "_id": element._id
                                }
                            }
                        });
                    }
                });
            }
            if (data.search.title != "" && data.search.title != null) {
                if (fiedsQuery_1.length == 0)
                    query = { "where": { "title": { "like": data.search.title }, "categoryId": data.search.category, "cityId": data.search.city, "subCategoryId": data.search.subCategory, "price": { "between": [this.mainServ.globalServ.convertNumber(data.search.min), this.mainServ.globalServ.convertNumber(data.search.max)] } }, "order": "createdAt DESC", "limit": limit, "skip": skip };
                else
                    query = { "where": { "and": fiedsQuery_1, "title": { "like": data.search.title }, "categoryId": data.search.category, "cityId": data.search.city, "subCategoryId": data.search.subCategory, "price": { "between": [this.mainServ.globalServ.convertNumber(data.search.min), this.mainServ.globalServ.convertNumber(data.search.max)] } }, "order": "createdAt DESC", "limit": limit, "skip": skip };
            }
            else if (fiedsQuery_1.length == 0)
                query = { "where": { "categoryId": data.search.category, "cityId": data.search.city, "subCategoryId": data.search.subCategory, "price": { "between": [this.mainServ.globalServ.convertNumber(data.search.min), this.mainServ.globalServ.convertNumber(data.search.max)] } }, "order": "createdAt DESC", "limit": limit, "skip": skip };
            else
                query = { "where": { "and": fiedsQuery_1, "categoryId": data.search.category, "cityId": data.search.city, "subCategoryId": data.search.subCategory, "price": { "between": [this.mainServ.globalServ.convertNumber(data.search.min), this.mainServ.globalServ.convertNumber(data.search.max)] } }, "order": "createdAt DESC", "limit": limit, "skip": skip };
        }
        if (!(type == 0 && isTopSearch)) {
            this.loader = true;
            this.getData(query, isScrol, limit, type);
        }
        else {
            setTimeout(function () {
                _this.advertisemets = [];
                _this.loader = true;
                _this.getData(query, isScrol, limit, type);
            }, 1500);
        }
    };
    HomePageComponent.prototype.deleteFielde = function (field, indexFields) {
        var length = field.lengthChilde;
        for (var indexDel = 0; indexDel < length; indexDel++) {
            if (this.vetcorKeyFilter[indexFields + 1].type == "choose" && this.vetcorKeyFilter[indexFields + 1].lengthChilde > 0) {
                this.deleteFielde(this.vetcorKeyFilter[indexFields + 1], indexFields + 1);
            }
            this.vetcorKeyFilter.splice(indexFields + 1, 1);
            this.search["fields"].splice(indexFields + 1, 1);
        }
    };
    HomePageComponent.prototype.changeValue = function (value, indexFields) {
        var field = this.vetcorKeyFilter[indexFields];
        this.deleteFielde(this.vetcorKeyFilter[indexFields], indexFields);
        var option = field.values.find(function (x) { return x.value == value; });
        field.lengthChilde = option.fields.length;
        for (var index = option.fields.length; index > 0; index--) {
            var element = option.fields[index - 1];
            if (element.type == "choose") {
                var tempValue = [];
                element.values.forEach(function (elementValue) {
                    tempValue.push({ value: elementValue.value, fields: elementValue.fields });
                });
                this.vetcorKeyFilter.splice(indexFields + 1, 0, { type: element.type, isInFilter: element.isInFilter, priority: element.priority, key: element.key, _id: element._id, values: tempValue, lengthChilde: 0 });
            }
            else
                this.vetcorKeyFilter.splice(indexFields + 1, 0, { type: element.type, isInFilter: element.isInFilter, priority: element.priority, key: element.key, _id: element._id });
            this.search["fields"].splice(indexFields + 1, 0, {});
        }
    };
    HomePageComponent.prototype.getData = function (query, isScrol, limit, type) {
        var _this = this;
        var addSearch = "";
        if (type == "3" && this.saveSearch)
            addSearch = "&save=true";
        this.mainServ.APIServ.get("advertisemets/actived?filter=" + JSON.stringify(query) + addSearch).subscribe(function (data) {
            if (_this.mainServ.APIServ.getErrorCode() == 0) {
                if (data.length == 0) {
                    _this.noData = true;
                }
                else {
                    if (data.length < limit && type != -1)
                        _this.noData = true;
                    data.forEach(function (element) {
                        if (element.category)
                            _this.advertisemets.push(element);
                    });
                }
            }
            else
                _this.mainServ.globalServ.somthingError();
            _this.loader = false;
        });
    };
    HomePageComponent.prototype.reseat = function () {
        this.getAdvertisemets(-1, {});
    };
    HomePageComponent.prototype.collapse = function () {
        $(".FiltersPanel-main").toggle();
        // $("").toggle();
        // $("").toggle();
    };
    HomePageComponent.prototype.openMenu = function () {
        $(".DropMenu-Down").toggleClass('DropMenu--isShown');
    };
    HomePageComponent.prototype.compare = function (a, b) {
        if (a.priority < b.priority)
            return 1;
        if (a.priority > b.priority)
            return -1;
        return 0;
    };
    HomePageComponent.prototype.changeCategory = function (categoryID) {
        var _this = this;
        this.subCategories = this.mainCategories.find(function (x) { return x.id == categoryID; }).subCategories;
        this.keyFilter = JSON.parse(JSON.stringify(this.categories.find(function (x) { return x.id == categoryID; }).fields));
        this.keyFilter.sort(this.compare);
        this.vetcorKeyFilter = [];
        if (this.keyFilter)
            this.keyFilter.forEach(function (element, index) {
                if (element.type == "choose") {
                    var tempValue = [];
                    element.values.forEach(function (elementValue) {
                        tempValue.push({ value: elementValue.value, fields: elementValue.fields });
                    });
                    _this.vetcorKeyFilter.push({ type: element.type, isInFilter: element.isInFilter, priority: element.priority, key: element.key, _id: element._id, values: tempValue, lengthChilde: 0 });
                }
                else
                    _this.vetcorKeyFilter.push({ type: element.type, isInFilter: element.isInFilter, priority: element.priority, key: element.key, _id: element._id });
                _this.search['fields'][index] = {};
            });
    };
    HomePageComponent.prototype.changeSubCategory = function (subCategoryID) {
        var _this = this;
        if (this.keyFilter)
            var lastLength = this.keyFilter.length;
        else {
            this.keyFilter = [];
            var lastLength = 0;
        }
        var newFields = this.mainCategories.find(function (x) { return x.id == _this.search["category"]; }).subCategories.find(function (y) { return y.id == subCategoryID; }).fields;
        newFields.forEach(function (element) {
            _this.keyFilter.push(element);
        });
        this.vetcorKeyFilter = [];
        this.keyFilter.sort(this.compare);
        for (var index = 0; index < this.keyFilter.length; index++) {
            var element = this.keyFilter[index];
            if (element.type == "choose") {
                var tempValue = [];
                element.values.forEach(function (elementValue) {
                    tempValue.push({ value: elementValue.value, fields: elementValue.fields });
                });
                this.vetcorKeyFilter.push({ type: element.type, isInFilter: element.isInFilter, priority: element.priority, key: element.key, _id: element._id, values: tempValue, lengthChilde: 0 });
            }
            else
                this.vetcorKeyFilter.push({ type: element.type, isInFilter: element.isInFilter, priority: element.priority, key: element.key, _id: element._id });
            this.search['fields'][index] = {};
        }
        ;
    };
    HomePageComponent.prototype.openSignUpDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__sign_up_modal_sign_up_modal_component__["a" /* SignUpModalComponent */], {});
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result) {
                _this.openSignInDialog();
            }
        });
    };
    HomePageComponent.prototype.openSignInDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__sign_in_modal_sign_in_modal_component__["a" /* SignInModalComponent */], {});
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result) {
                _this.openForgetPassDialog();
            }
        });
    };
    HomePageComponent.prototype.openForgetPassDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__forget_password_modal_forget_password_modal_component__["a" /* ForgetPasswordModalComponent */], {
            // width: '35%',
            // width: '50%',
            panelClass: 'communictioDialogStyle',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    HomePageComponent.prototype.onScrollDown = function (ev) {
        if (this.lastType != -1 && this.lastType != null)
            this.getAdvertisemets(this.lastType, this.lastData, true);
    };
    HomePageComponent.prototype.hrefAddAdv = function () {
        if (this.isLogin) {
            this.mainServ.globalServ.goTo("addAdvertising");
        }
        else {
            this.openSignInDialog();
        }
    };
    HomePageComponent.prototype.cheackOdd = function (number) {
        if ($('.FiltersPanelContianer').is(':visible')) {
            return true;
        }
        // console.log (this.keyFilter.length==0);
        return number % 2 == 0;
    };
    HomePageComponent.prototype.sveSearch = function (data) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__save_search_model_save_search_model_component__["a" /* SaveSearchModelComponent */], {
            //   width: '70%',
            panelClass: 'communictioDialogStyle'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result) {
                var query = void 0, fields_1 = [];
                _this.vetcorKeyFilter.forEach(function (element, index) {
                    if (_this.search['fields'][index].value != "" && _this.search['fields'][index].value != null) {
                        fields_1.push({
                            "key": element.key,
                            "_id": element._id,
                            "value": _this.search['fields'][index].value
                        });
                    }
                });
                query = { "name": result.saveName, "fields": fields_1, "title": data.search.title, "minPrice": data.search.min, "maxPrice": data.search.max, "subCategoryId": data.search.subCategory, "categoryId": data.search.category, "cityId": data.search.city };
                _this.mainServ.APIServ.post("searches", query).subscribe(function (data) {
                    _this.mainServ.globalServ.errorDialog("إضافة عملية بحث", "تمت الإضافة بنجاح");
                });
            }
        });
    };
    HomePageComponent.prototype.isMobileSize = function (defultSize) {
        if (defultSize === void 0) { defultSize = 600; }
        var size = $(window).width();
        if (size > defultSize) {
            return false;
        }
        else {
            return true;
        }
    };
    HomePageComponent.prototype.clean = function () {
        alert("ssss");
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
            selector: 'home-page',
            template: __webpack_require__("../../../../../src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home-page/home-page.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatDialog */]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/privacy-policy/privacy-policy.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\r\n<!--component html goes here -->\r\n<div class=\"MainContainer\">\r\n\t<div class=\"HeaderBackground\">\r\n\t\t<header></header>\r\n\t\t<div class=\"Triangle\">\r\n\t\t\t<div class=\"Jumbotron\" data-paroller-factor=\"-0.2\">\r\n\t\t\t\t<!--<div class=\"Jumbotron-title\">هل تبحث عن شيئ معيّن ؟</div>-->\r\n\r\n\t\t\t\t<!--<div class=\"Jumbotron-subtitle\">\r\n\t\t\t\t\tالكثير من الاعلانات بانتظارك لتفقدها\r\n\t\t\t\t</div>-->\r\n\t\t\t</div>\r\n\t\t\t<div class=\"Triangle--spacer\"></div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"Content\">\r\n\t\t<div class=\"GridContainer customPage\">\r\n\t\t\t<h1>سياسة الخصوصية</h1>\r\n\t\t\t<h3>سياسة الخصوصية</h3>\r\n\t\t\t<span>تُدرك إدارة موقع دلّال حرصك على المعلومات التي نجمعها عنك واهتمامك حيال كيفية استخدامنا لها، ولكي تكون على بينة وإدراك\r\n\t\t\t\tكامل، نضع بين يديك سياسة الخصوصية، ونحن بدورنا نقدر ثقتكم بنا والتي تضمن لكم التعامل مع معلوماتكم بعناية وثقة. من خلال\r\n\t\t\t\tزيارتك لموقع دلّال أنت تقبل الأمور الواردة في هذه البيان.\r\n\t\t\t</span>\r\n\t\t\t<h3>ما هي المعلومات التي يتم جمعها من قبل موقع دلّال عنك؟</h3>\r\n\t\t\t<span>المعلومات التي نجمعها من مستخدمي موقع دلّال تساعدنا على أن نقدم لهم خدمة أفضل مبنية على الطبيعة الشخصية للمستخدم للتحسين\r\n\t\t\t\tمن طريقة تصفحك كمستخدم لموقع دلّال. التالية هي أنواع المعلومات التي نجمعها: المعلومات التي نجمعها عنك من خلال تسجيلك\r\n\t\t\t\tفي الموقع وهي (البريد الإلكتروني، الاسم الأول، الاسم الثاني). من خلال تسجيلك ستحصل على حساب أو عضوية في الموقع وهي مكونة\r\n\t\t\t\tمن اسم مستخدم وكلمة سر تتيح لك استخدام الموقع المعلومات التي تقوم بتقديمها: نقوم بتخزين المعلومات المُدخلة على موقعنا\r\n\t\t\t\tبأكثر من وسيلة، مثلاً عند تسجيلك في الموقع أو عند إضافتك لمعلومات الإعلانات عند إضافة إعلان، يتم استخدام بريدك الإلكتروني\r\n\t\t\t\tالذي سجلت فيه كوسيلة ليسهل علينا الردّ على طلباتكم وإعلامكم بكل ما هو جديد في الموقع، وتذكر انه كلما زادت صحة المعلومات\r\n\t\t\t\tالمقدمة من قبلكم، زادت المزايا المقدمة للمستخدم. المعلومات الآلية: يمكننا الحصول على أنواع معينة من المعلومات الخاصة\r\n\t\t\t\tبك عند الدخول إلى موقع دلّال، وذلك باستخدام \"الكوكيز\" ليتم تخزين طريقة تصفحك للموقع، وهذه المعلومات تساعدنا بتقديم خدمة\r\n\t\t\t\tأفضل لك. الاتصالات بالبريد الإلكتروني: نحن نستقبل تأكيداً عن طريق تفعيل روابط التأكيد التي نرسلها لك بالبريد الإلكتروني\r\n\t\t\t\tفي معظم الإجراءات والاشتراكات التي تقوم بها والتي تتطلب تأكيدك. المعلومات الواردة من مصادر أخرى: يجوز لنا الحصول على\r\n\t\t\t\tمعلومات عنك من مصادر أخرى وإضافتها إلى معلومات حسابك لدينا، مثلاً كأن تقوم بالتسجيل في موقعنا عن طريق حسابك على الفيسبوك،\r\n\t\t\t\tبالتالي نستخدم بريدك المستخدم في الفيسبوك كبريد سجلت به لدى موقعنا. المعلومات المطلوبة من قسم خدمات الزبائن: قد تتواصل\r\n\t\t\t\tمع قسم خدمة الزبائن لطلب أو استفسار أو مشكلة أو اي نوع آخر من الطلبات أو قد يتواصل معك خدمة الزبائن لنفس الأغراض سابقة\r\n\t\t\t\tالذكر، وقد يترتب على هذا التواصل طلب معلومات معينة منك والتي تساهم في حل مشكلتك أو استفسارك مثال لا الحصر: نوع المتصفح،\r\n\t\t\t\tرقم هاتفك، مزود الإنترنت لديك وغيرها الكثير. وكل هذه المعلومات تستخدم لمساعدتك على حل المشكلة التي تواجهك.\r\n\r\n\t\t\t</span>\r\n\t\t\t<h3>ماذا عن الكوكيز؟\r\n\t\t\t</h3>\r\n\r\n\t\t\t<span>الكوكيز، والتي هي معروفة بالعالم الرقمي \"ملفات تعريف الارتباط\" لتشغيل القرص الصلب لجهاز الكمبيوتر من خلال متصفح الويب\r\n\t\t\t\tالخاص بك لتمكين انظمتنا من تخصيص المتصفح الخاص بك وتوفير ميزات مثل، الموقع المفضل، الدولة المفضلة ... وغيرها. عادة ما\r\n\t\t\t\tتقوم معظم المتصفحات بإخبارك عندما تتلقى كوكيز جديدة وترشدك إلى كيفية تعطيلها، ننصحك بعدم تعطيل الكوكيز الخاصة بموقع موقع\r\n\t\t\t\tدلّال فهي تساعدك في تحقيق الاستفادة الكاملة من مميزات الموقع لذا ننصح بتركها مفتوحة.\r\n\t\t\t</span>\r\n\r\n\t\t\t<h3>\r\n\t\t\t\tهل يتقاسم (يشارك) موقع دلّال المعلومات التي يتلقاها؟\r\n\t\t\t</h3>\r\n\t\t\t<span>المعلومات عن مستخدمي موقع دلّال هو جزء مهم من عملنا، ولن نسمح ببيع هذه المعلومات للآخرين. ولكن فقط يتم تبادل معلومات مستخدمي\r\n\t\t\t\tموقع دلّال فقط كما هو موضح أدناه: إضافة إعلان: عند إضافة إعلانك من خلال موقع دلّال فإنه يطلب منك أن تقدم لنا معلومات\r\n\t\t\t\tالاتصال الخاصة بك، ذلك لتسهيل عملية التواصل بين الطرفين (صاحب الإعلان، والمهتم به). وكلاء: نحن نستخدم شركات أخرى وأفراد\r\n\t\t\t\tلأداء بعض المهام نيابة عنا. مثل إرسال رسائل ترويجية في البريد الإلكتروني، وتحليل البيانات وتقديم المساعدة في مجال التسويق\r\n\t\t\t\tوغيرها من الخدمات، سواء في شكل دوري أو حسب ما يقتضي الطلب. عروض ترويجية: أحيانا نقوم بإرسال عروض لمجموعات مختارة من مستخدمي\r\n\t\t\t\tموقع دلّال حول آخر العروض التي نقدمها على الموقع. يتم نشر بيانات الحساب وغيرها من المعلومات الشخصية حسب شروط الاستخدام\r\n\t\t\t\tالمتفق عليها. وذلك حماية من أساليب الاحتيال والحد من مخاطر الائتمان. خلاف لما هو مبين أعلاه، سوف تتلقى تحذيرا عند مشاركة\r\n\t\t\t\tالبيانات مع طرف ثالث. إلغاء اشتراكك في النشرة البريدية: في أي وقت يمكنك الضغط على رابط \"إلغاء الاشتراك\" الموجود في أي\r\n\t\t\t\tبريد إلكتروني او نشرة بريدية مُرسلة من موقع دلّال.\r\n\t\t\t</span>\r\n\t\t\t<h3>\r\n\t\t\t\tضمان معلوماتك الخاصة\r\n\t\t\t</h3>\r\n\t\t\t<span>من المهم بالنسبة لك الحماية ضد الوصول غير المصرح به إلى كلمة السر الخاصة بك وإلى جهاز الكمبيوتر الخاص بك. ويجب أن تكون\r\n\t\t\t\tعلى يقين من أنك قمت بتسجيل الخروج بعد الانتهاء من استخدام أي جهاز كمبيوتر مشترك.\r\n\t\t\t</span>\r\n\t\t\t<h3>\r\n\t\t\t\tشروط الاستخدام:\r\n\t\t\t</h3>\r\n\t\t\t<span>إذا اخترت زيارة موقع دلّال فإن زيارتك وأي خلاف حول الخصوصية يخضع لسياسة الخصوصية ولأحكام وشروط الاستخدام اتفاقية المستخدم.\r\n\t\t\t\tإذا كان لديك أية مخاوف حول الخصوصية في موقع دلّال يرجى الاتصال بنا وسنحاول حلها. تابعوا موقعنا باستمرار لكل ما هو جديد\r\n\t\t\t\tحول التغييرات الطارئة على كل من سياسة الخصوصية وأحكام وشروط الاستخدام.\r\n\t\t\t</span>\r\n\t\t\t<h3>\r\n\r\n\t\t\t\tالتواصل مع الإدارة:\r\n\t\t\t</h3>\r\n\t\t\t<span>في أي وقت يمكنك التواصل مع إدارة موقع دلّال على البريد الرسمي للشركة <b>( Info@dlaaal.com ) </b>.\r\n\t\t\t\t<br>\r\n\t\t\t\tالاسم التجاري: <b>(شركة موقع دلّال\r\n\t\t\t\tللإعلانات المبوبة الإلكترونية)</b>.\r\n\t\t\t\t<br>\r\n\t\t\t\t يمكننا استقبال مكالمتك حول أي استفسارات من الساعة<b> (10 صباحاً) </b>الى الساعة <b>(7 مساءً)</b>. على\r\n\t\t\t\tهاتف رقم: <b>00971558112411</b>\r\n\t\t\t</span>\r\n\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n</div>\r\n<!--Below main container end-->"

/***/ }),

/***/ "../../../../../src/app/privacy-policy/privacy-policy.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/privacy-policy/privacy-policy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent() {
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    };
    PrivacyPolicyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'privacy-policy',
            template: __webpack_require__("../../../../../src/app/privacy-policy/privacy-policy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/privacy-policy/privacy-policy.component.scss")]
        })
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"MainContainer\" data-infinite-scroll debounce [infiniteScrollDistance]=\"scrollDistance\" [infiniteScrollUpDistance]=\"scrollUpDistance\"\r\n  [infiniteScrollThrottle]=\"throttle\" (scrolled)=\"onScrollDown()\">\r\n  <div class=\"HeaderBackground\">\r\n    <header></header>\r\n    <div class=\"Triangle Triangle--pages\">\r\n\r\n      <div class=\"Triangle--spacer\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"Content\">\r\n    <div class=\"GridContainer\">\r\n      <div class=\"HeaderBoxContianer HeaderBoxContianer--profilepage\" *ngIf=\"userData.firstName != null\">\r\n        <div class=\"HeaderBox HeaderBox--profilepage-usercontainer\">\r\n          <div class=\"HeaderBox HeaderBox--profilepage-usercontainer-avatar\">\r\n            <div class=\"myImage\">\r\n              <img src=\"{{imageProfile}}\" [ngClass]=\"{'hidden': uploadingImage}\" />\r\n              <img id=\"{{'uploadImage'}}\" [ngClass]=\"{'hidden': !uploadingImage}\" />\r\n              <img src=\"assets/imgs/infinity_loader_by_volorf.gif\" [ngClass]=\"{'hidden': !uploadingImage}\" style=\"position:  absolute;opacity: 0.5;top: 0px;height: 100%;left:  0px;width: 100%;\"\r\n              />\r\n\r\n              <div *ngIf=\"isMyProfile\" _ngcontent-c1=\"\" (click)=\"openSelectImage()\" class=\"hoverDiv cursorPointer\" style=\"\">\r\n                <span _ngcontent-c1=\"\" class=\"glyphicon glyphicon-camera\"></span>\r\n                <span _ngcontent-c1=\"\">تغيير الصورة</span>\r\n                <input type=\"file\" style=\"display:none\" id=\"files\" (change)=\"onChange($event)\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"HeaderBox HeaderBox--profilepage-usercontainer-username\">\r\n            {{userData.firstName}}\r\n          </div>\r\n        </div>\r\n        <div class=\"HeaderBox HeaderBox--profilepage-detailscontainer\">\r\n          <div class=\"HeaderBox HeaderBox--profilepage-detailscontainer-column\">\r\n            <div class=\"HeaderBox HeaderBox--profilepage-detailscontainer-column-title\">\r\n              الإعلانات المضافة\r\n            </div>\r\n            <div class=\"HeaderBox HeaderBox--profilepage-detailscontainer-column-value\">\r\n              {{userData.advertisementCount| number}}\r\n            </div>\r\n          </div>\r\n          <div class=\"HeaderBox HeaderBox--profilepage-detailscontainer-column\">\r\n            <div class=\"HeaderBox HeaderBox--profilepage-detailscontainer-column-title\">\r\n              المتابعون\r\n            </div>\r\n            <div class=\"HeaderBox HeaderBox--profilepage-detailscontainer-column-value\">\r\n              {{userData.followersCount| number}}\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n        <!--[ngClass]=\"{'hidden':isPluse()}\"-->\r\n        <div class=\"HeaderBox HeaderBox--profilepage-btncontainer\">\r\n          <div (click)=\"editProfile()\" *ngIf=\"isMyProfile\" class=\"HeaderBox--profilepage-editbtn\">\r\n\r\n          </div>\r\n          <div *ngIf=\"isPluse()\" (click)=\"follow()\" class=\"HeaderBox--profilepage-editbtn\" [ngStyle]=\"{'background-image': 'url(assets/imgs/plus.svg)'}\">\r\n\r\n          </div>\r\n          <div *ngIf=\"isMin()\" (click)=\"unFollow()\" class=\"HeaderBox--profilepage-editbtn\" [ngStyle]=\"{'background-image': 'url(assets/imgs/Minus.svg)'}\">\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"UserProfileContainer\">\r\n      <div class=\"UserProfile\">\r\n        <div class=\"UserProfile-navtabs\">\r\n          <div class=\"UserProfile-navtabs-tab cursorPointer\" (click)=\"setTab(1)\" [ngClass]=\"{'UserProfile-navtabs-tab--active':isSetTab(1),'hidden':!isMyProfile}\">\r\n            قائمة التفضيلات\r\n          </div>\r\n          <div class=\"UserProfile-navtabs-tab cursorPointer\" (click)=\"setTab(3)\" [ngClass]=\"{'UserProfile-navtabs-tab--active':isSetTab(3),'hidden':!isMyProfile}\">\r\n            قائمة البحث\r\n          </div>\r\n          <div class=\"UserProfile-navtabs-tab cursorPointer\" (click)=\"setTab(2)\" [ngClass]=\"{'UserProfile-navtabs-tab--active':isSetTab(2)}\">\r\n            <!--إعلاناتي-->\r\n            {{isMyProfile ? \"إعلاناتي\" : \"إعلانات\"}}\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"UserProfile-navcontent\">\r\n          <div class=\"ItemsContainer\">\r\n            <div class=\"ItemsContainer\" [ngClass]=\"{'hidden': getTab()!=1}\">\r\n              <div *ngFor=\"let oneBookMark of bookmarks\" routerLink=\"{{'/detail/'+oneBookMark.id}}\" class=\"ItemBlock cursorPointer\">\r\n                <div class=\"ItemSummary\">\r\n                  <div class=\"ItemSummary-head\">\r\n                    <div class=\"ItemSummary-head-title\">\r\n                      {{oneBookMark.category.title}}\r\n                    </div>\r\n                    <div class=\"ItemSummary-head-date ItemSummary-head-date--text\">\r\n                      {{calculateDate(oneBookMark.createdAt)}}\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ItemSummary-desc\">\r\n                    {{oneBookMark.title}}\r\n                  </div>\r\n                  <div class=\"ItemSummary-price\" *ngIf=\"oneBookMark.price!=0\">\r\n                    <span class=\"ItemSummary-price-num\">{{oneBookMark.price | number}}</span>\r\n                    <span class=\"ItemSummary-price-text\">ل.س</span>\r\n                  </div>\r\n                  <div class=\"ItemSummary-price\" *ngIf=\"oneBookMark.price==0\">\r\n                    <span class=\"ItemSummary-price-num\">Free</span>\r\n                  </div>\r\n\r\n                  <div class=\"ItemSummary-action\">\r\n                    <a routerLink=\"{{'/detail/'+oneBookMark.id}}\" class=\"ItemSummary-action-btn\">\r\n    \t\t\t\t\t\t\t\t\tمشاهدة المزيد\r\n    \t\t\t\t\t\t\t\t</a>\r\n                    <div class=\"ItemSummary-action-views\">\r\n                      <span> {{oneBookMark.viewsCount}} </span>\r\n\r\n                      <img src=\"assets/imgs/eye.svg\" alt=\"\" style=\"height: 24px;\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ItemBlock-img\" [ngStyle]=\"{'background-image': 'url(' + oneBookMark.images[0] + ')'}\">\r\n                </div>\r\n              </div>\r\n              <div class=\"ItemBlock emptyBloack\" *ngIf=\"!cheackOdd(bookmarks.length)\">\r\n\r\n              </div>\r\n              <div class=\"ItemsContainer-loader\" [ngClass]=\"{'hidden':loaderBook==0}\">\r\n                <img src=\"assets/imgs/spinner.svg\" alt=\"Kiwi standing on oval\">\r\n              </div>\r\n              <div class=\"ItemsContainer-loader\" [ngClass]=\"{'hidden':noBook==0}\">\r\n                <img src=\"assets/imgs/empty placeholder.png\" alt=\"Kiwi standing on oval\">\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"ItemsContainer\" [ngClass]=\"{'hidden':getTab()!=2}\">\r\n              <div *ngFor=\"let oneAdvertisemet of advertisemets\" routerLink=\"{{'/detail/'+oneAdvertisemet.id}}\" class=\"ItemBlock cursorPointer\">\r\n                <div class=\"ItemSummary\">\r\n                  <div class=\"ItemSummary-head\">\r\n                    <div class=\"ItemSummary-head-title\">\r\n                      {{oneAdvertisemet.category.title}}\r\n                    </div>\r\n                    <div class=\"ItemSummary-head-date ItemSummary-head-date--text\">\r\n                      {{calculateDate(oneAdvertisemet.createdAt)}}\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ItemSummary-head-date ItemSummary-head-date--text  ItemSummary-head-city--text\">\r\n                    {{oneAdvertisemet.city.name}}\r\n                  </div>\r\n                  <div class=\"ItemSummary-desc\">\r\n                    {{oneAdvertisemet.title}}\r\n                  </div>\r\n                  <div class=\"ItemSummary-price\" *ngIf=\"oneAdvertisemet.price!=0\">\r\n                    <span class=\"ItemSummary-price-num\">{{oneAdvertisemet.price | number}}</span>\r\n                    <span class=\"ItemSummary-price-text\">ل.س</span>\r\n                  </div>\r\n                  <div class=\"ItemSummary-price\" *ngIf=\"oneAdvertisemet.price==0\">\r\n                    <span class=\"ItemSummary-price-num\">Free</span>\r\n                  </div>\r\n                  <div class=\"ItemSummary-action\">\r\n                    <a routerLink=\"{{'/detail/'+oneAdvertisemet.id}}\" class=\"ItemSummary-action-btn\">\r\n    \t\t\t\t\t\t\t\t\tمشاهدة المزيد\r\n    \t\t\t\t\t\t\t\t</a>\r\n                    <div class=\"ItemSummary-action-views\">\r\n                      <span> {{oneAdvertisemet.viewsCount}} </span>\r\n\r\n                      <img src=\"assets/imgs/eye.svg\" alt=\"\" style=\"height: 24px;\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ItemBlock-img\" [ngStyle]=\"{'background-image': 'url(' + oneAdvertisemet.images[0] + ')'}\">\r\n                </div>\r\n              </div>\r\n              <div class=\"ItemBlock emptyBloack\" *ngIf=\"!cheackOdd(advertisemets.length)\">\r\n\r\n              </div>\r\n\r\n              <div class=\"ItemsContainer-loader\" [ngClass]=\"{'hidden':loaderAdd==0}\">\r\n                <img src=\"assets/imgs/spinner.svg\" alt=\"Kiwi standing on oval\">\r\n              </div>\r\n              <div class=\"ItemsContainer-loader\" [ngClass]=\"{'hidden':noAdd==0}\">\r\n                <img src=\"assets/imgs/empty placeholder.png\" alt=\"Kiwi standing on oval\">\r\n              </div>\r\n            </div>\r\n            <div class=\"ItemsContainer\" [ngClass]=\"{'hidden':getTab()!=3}\">\r\n              <div *ngFor=\"let oneSearch of searches;let i=index\" class=\"ItemBlock\">\r\n                <div class=\"ItemSummary\">\r\n                  <div class=\"ItemSummary-head\">\r\n                    <div class=\"ItemSummary-head-title-search\">\r\n                      أنا أبحث عن\r\n                    </div>\r\n                    <div (click)=\"deleteSearch(oneSearch.id,i)\" class=\"ItemSummary-head-close cursorPointer\">\r\n\r\n                    </div>\r\n                    <div class=\"ItemSummary-head-date ItemSummary-head-date--text\">\r\n                      {{calculateDate(oneSearch.createdAt)}}\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ItemSummary-desc\">\r\n                    {{oneSearch.name}}\r\n                  </div>\r\n                  <div class=\"ItemSummary-action\">\r\n                    <a (click)=\"applyFilter(i)\" class=\"ItemSummary-action-btn\">\r\n    \t\t\t\t\t\t\t\t\tعرض النتائج\r\n    \t\t\t\t\t\t\t\t</a>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"ItemBlock emptyBloack\" *ngIf=\"!cheackOdd(advertisemets.length)\">\r\n\r\n              </div>\r\n\r\n              <div class=\"ItemsContainer-loader\" [ngClass]=\"{'hidden':loaderSearch==0}\">\r\n                <img src=\"assets/imgs/spinner.svg\" alt=\"Kiwi standing on oval\">\r\n              </div>\r\n              <div class=\"ItemsContainer-loader\" [ngClass]=\"{'hidden':noAdd==0}\">\r\n                <img src=\"assets/imgs/empty placeholder.png\" alt=\"Kiwi standing on oval\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <!--Below main container end-->\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hidden {\n  display: none; }\n\n.hoverDiv {\n  display: none;\n  height: 180px;\n  border-radius: 50%;\n  padding-top: 5.7em;\n  padding-bottom: 5.7em;\n  width: 180px;\n  background-color: rgba(128, 128, 128, 0.54902);\n  text-align: center;\n  position: absolute;\n  top: 0px; }\n\n.hoverDiv span {\n    text-align: center; }\n\n.myImage {\n  position: relative; }\n\n.myImage:hover .hoverDiv {\n  display: inline-block; }\n\n.emptyBloack {\n  background-color: #f5f7f8 !important;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border: none; }\n\n@media screen and (max-width: 1250px) {\n  .emptyBloack {\n    display: none; } }\n\n.ItemBlock {\n  min-height: 135px;\n  max-width: 580px; }\n\n.ItemBlock .ItemSummary {\n    width: 100%; }\n\n.ItemBlock .ItemSummary .ItemSummary-head {\n      position: relative; }\n\n.ItemBlock .ItemSummary .ItemSummary-head .ItemSummary-head-title-search {\n        color: #a0a0a0;\n        font-weight: bold;\n        font-size: 23px;\n        width: 70%;\n        padding: 13px 4% 7px 14%; }\n\n.ItemBlock .ItemSummary .ItemSummary-head .ItemSummary-head-date {\n        margin-left: 30px; }\n\n.ItemBlock .ItemSummary .ItemSummary-head .ItemSummary-head-close {\n        position: absolute;\n        background-size: 40px 40px;\n        height: 50px;\n        background-repeat: no-repeat;\n        width: 50px;\n        left: -16px;\n        top: -28px;\n        background-image: url(" + escape(__webpack_require__("../../../../../src/assets/imgs/close icon.png")) + "); }\n\n.ItemBlock .ItemSummary .ItemSummary-desc {\n      color: inherit;\n      font-size: 16px;\n      padding: 0px 4%;\n      margin: 15px 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_main_service__ = __webpack_require__("../../../../../src/app/Services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_password_change_password_component__ = __webpack_require__("../../../../../src/app/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_profile_edit_profile_component__ = __webpack_require__("../../../../../src/app/edit-profile/edit-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(dialog, mainServ, route) {
        this.dialog = dialog;
        this.mainServ = mainServ;
        this.route = route;
        this.uploadingImage = false;
        this.isMyProfile = false;
        this.loaderBook = false;
        this.loaderSearch = false;
        this.loaderAdd = false;
        this.noBook = false;
        this.noAdd = false;
        this.noSearch = false;
        this.bookmarks = [];
        this.searches = [];
        this.advertisemets = [];
        this.throttle = 100;
        this.scrollDistance = 2;
        this.scrollUpDistance = 2;
        var param;
        this.userData = {};
        this.route.params.subscribe(function (data) { return param = data.userID; });
        if (param == "me") {
            this.setTab(1);
            this.isMyProfile = true;
            this.userID = mainServ.loginServ.getUserId();
        }
        else {
            if (param == mainServ.loginServ.getUserId()) {
                this.isMyProfile = true;
            }
            this.userID = param;
            this.isMyProfile = false;
            this.setTab(2);
        }
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        $("html, body").animate({ scrollTop: 0 }, "slow");
        // this.mainServ.APIServ.get("users/" + this.userID + "/followers").subscribe(data => {
        //     this.follwers = data;
        // });
        if (this.isMyProfile) {
            this.getData(1);
            this.getData(3);
        }
        if (this.isMyProfile)
            this.mainServ.APIServ.get("users/me").subscribe(function (data) {
                _this.userData = data;
                if (_this.userData['avatar'] == null)
                    _this.imageProfile = "assets/imgs/defult_img.jpg";
                else
                    _this.imageProfile = _this.userData['avatar'];
            });
        else {
            this.mainServ.APIServ.get("users/" + this.userID).subscribe(function (data) {
                _this.userData = data;
                if (_this.userData['avatar'] == null)
                    _this.imageProfile = "assets/imgs/defult_img.jpg";
                else
                    _this.imageProfile = _this.userData['avatar'];
            });
        }
        this.getData(2);
    };
    ProfileComponent.prototype.openSelectImage = function () {
        document.getElementById('files').click();
    };
    ProfileComponent.prototype.releadImage = function (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var id = 'uploadImage';
            document.getElementById(id).setAttribute('src', reader.result);
            // this.text = reader.result;
        };
        reader.readAsDataURL(file);
    };
    ProfileComponent.prototype.onChange = function (event) {
        var _this = this;
        this.uploadingImage = true;
        var Fille = event.target.files[0];
        this.releadImage(Fille);
        this.mainServ.APIServ.uploadImage("files/Profile/upload", event.target.files, 1).subscribe(function (data) {
            if (_this.mainServ.APIServ.getErrorCode() == 0) {
                _this.uploadingImage = false;
                data.forEach(function (element) {
                    _this.imageProfile = element;
                });
                _this.userData['avatar'] = _this.imageProfile;
                _this.mainServ.APIServ.put("/users/" + _this.userData['id'], _this.userData).subscribe(function (data) {
                    if (_this.mainServ.APIServ.getErrorCode() == 0) {
                        _this.mainServ.loginServ.setAvatar(_this.imageProfile);
                        _this.mainServ.globalServ.reload();
                    }
                    else
                        _this.mainServ.globalServ.somthingError();
                });
            }
            else {
                _this.mainServ.globalServ.somthingError();
            }
        });
    };
    ProfileComponent.prototype.editProfile = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__edit_profile_edit_profile_component__["a" /* EditProfileComponent */], {});
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.changePassword();
            }
            else if (result == false)
                _this.mainServ.globalServ.errorDialog('تعديل الحساب', 'تم تعديل معلومات الحساب', true);
        });
    };
    ProfileComponent.prototype.changePassword = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__change_password_change_password_component__["a" /* ChangePasswordComponent */], {});
        dialogRef.afterClosed().subscribe(function (result) {
            if (result)
                _this.mainServ.globalServ.errorDialog('تعديل الحساب', 'تم تعديل كلمة السر');
            console.log('The dialog was closed');
        });
    };
    ProfileComponent.prototype.calculateDate = function (date) {
        return this.mainServ.globalServ.calculatDateAdv(date);
    };
    ProfileComponent.prototype.setTab = function (tabNum) {
        this.tabNow = tabNum;
    };
    ProfileComponent.prototype.isSetTab = function (tabNum) {
        return this.tabNow == tabNum;
    };
    ProfileComponent.prototype.getTab = function () {
        return this.tabNow;
    };
    ProfileComponent.prototype.getData = function (setNum, isFirst, isScrol) {
        var _this = this;
        if (isFirst === void 0) { isFirst = false; }
        if (isScrol === void 0) { isScrol = false; }
        var url, query, skip, limit;
        limit = 10;
        if (isScrol == true) {
            if (setNum == 2)
                skip = this.advertisemets.length;
            else if (setNum == 1)
                skip = this.bookmarks.length;
            else
                skip = this.searches.length;
        }
        else {
            skip = 0;
        }
        if (setNum == 1) {
            url = "users/" + this.userID + "/bookmarks?filter=";
            query = { "order": "createdAt ASC", "limit": limit, "skip": skip };
            if (this.noBook || this.loaderBook) {
                return;
            }
            this.loaderBook = true;
        }
        else if (setNum == 2) {
            url = "advertisemets/actived?filter=";
            query = { "where": { "ownerId": this.userID }, "order": "createdAt ASC", "limit": limit, "skip": skip };
            if (this.noAdd || this.loaderAdd) {
                return;
            }
            this.loaderAdd = true;
        }
        else {
            url = "searches?filter=";
            query = { "where": { "ownerId": this.userID }, "order": "createdAt ASC", "limit": limit, "skip": skip };
            if (this.noSearch || this.loaderSearch) {
                return;
            }
            this.loaderSearch = true;
        }
        this.mainServ.APIServ.get(url + JSON.stringify(query)).subscribe(function (data) {
            if (_this.mainServ.APIServ.getErrorCode() == 0) {
                if (setNum == 1) {
                    if (data.length < limit) {
                        _this.noBook = true;
                    }
                    data.forEach(function (element) {
                        if (element.category)
                            _this.bookmarks.push(element);
                    });
                    _this.loaderBook = false;
                }
                else if (setNum == 2) {
                    if (data.length < limit) {
                        _this.noAdd = true;
                    }
                    data.forEach(function (element) {
                        if (element.category)
                            _this.advertisemets.push(element);
                    });
                    _this.loaderAdd = false;
                }
                else {
                    if (data.length < limit) {
                        _this.noSearch = true;
                    }
                    data.forEach(function (element) {
                        _this.searches.push(element);
                    });
                    _this.loaderSearch = false;
                }
            }
            else
                _this.mainServ.globalServ.somthingError();
        });
    };
    ProfileComponent.prototype.onScrollDown = function () {
        this.getData(this.tabNow, false, true);
    };
    ProfileComponent.prototype.cheackOdd = function (number) {
        return number % 2 == 0;
    };
    ProfileComponent.prototype.isPluse = function () {
        if (!this.userData.isFollowed && !this.isMyProfile)
            return true;
        else
            return false;
    };
    ProfileComponent.prototype.isMin = function () {
        if (this.userData.isFollowed && !this.isMyProfile)
            return true;
        else
            return false;
    };
    ProfileComponent.prototype.unFollow = function () {
        var _this = this;
        this.mainServ.APIServ.delete("users/" + this.mainServ.loginServ.getUserId() + "/following/rel/" + this.userID).subscribe(function (data) {
            if (_this.mainServ.APIServ.getErrorCode() == 0) {
                _this.mainServ.APIServ.get("users/" + _this.userID).subscribe(function (data) {
                    _this.userData = data;
                });
                _this.mainServ.globalServ.errorDialog("إلغاء متابعة", "تم إلغاء المتابعة بنجاح");
            }
        });
    };
    ProfileComponent.prototype.follow = function () {
        var _this = this;
        if (this.mainServ.loginServ.isLogin())
            this.mainServ.APIServ.put("users/" + this.mainServ.loginServ.getUserId() + "/following/rel/" + this.userID, {}).subscribe(function (data) {
                if (_this.mainServ.APIServ.getErrorCode() == 0) {
                    _this.mainServ.APIServ.get("users/" + _this.userID).subscribe(function (data) {
                        _this.userData = data;
                    });
                    _this.mainServ.globalServ.errorDialog("القيام بمتابعة", "تمت المتابعة بنجاح");
                }
            });
        else {
            this.headerChild.openSignInDialog();
        }
    };
    ProfileComponent.prototype.deleteSearch = function (id, index) {
        var _this = this;
        this.mainServ.APIServ.delete("searches/" + id).subscribe(function (data) {
            if (_this.mainServ.APIServ.getErrorCode() == 0) {
                _this.searches.splice(index, 1);
                _this.mainServ.globalServ.errorDialog("حذف", "تمت عملية الحذف بنجاح");
            }
        });
    };
    ProfileComponent.prototype.applyFilter = function (index) {
        this.mainServ.globalServ.editFilteringBeh(this.searches[index]);
        this.mainServ.globalServ.goTo("/");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__header_header_component__["a" /* HeaderComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__header_header_component__["a" /* HeaderComponent */])
    ], ProfileComponent.prototype, "headerChild", void 0);
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
            selector: 'profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_0__Services_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/report-modal/report-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\r\n<!--component html goes here -->\r\n<!--<div id=\"\" class=\"ModalContainer\">\r\n\t\t\t<div class=\"SignInModuleContainer\">-->\r\n<div class=\"SignInModule\">\r\n    <div class=\"SignInModule-header\" style=\"direction: rtl;\">\r\n        <div class=\"SignInModule-header-title\">\r\n            القيام بالتبليغ\r\n        </div>\r\n        <div class=\"SignInModule-header-close\" (click)=\"closeModal()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"SignInModule-body\">\r\n        <div class=\"SignInModule-body-inputcontainer\">\r\n            <label for=\"name\">هل انت متاكد تريد القيام بتبليغ هذا الإعلان على أنه {{title}}</label>\r\n        </div>\r\n        <div (click)=\"ok()\" class=\"SignInModule-body-inputcontainer SignInModule-body-btn\">\r\n            موافق\r\n        </div>\r\n        <div (click)=\"cansel()\" class=\"SignInModule-body-inputcontainer SignInModule-body-btn\">\r\n            إلغاء\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>\r\n\r\n<!--</div>\r\n\t\t</div>-->"

/***/ }),

/***/ "../../../../../src/app/report-modal/report-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/report-modal/report-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_main_service__ = __webpack_require__("../../../../../src/app/Services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ReportModalComponent = /** @class */ (function () {
    function ReportModalComponent(mainServ, dialogRef, data) {
        this.mainServ = mainServ;
        this.dialogRef = dialogRef;
        this.data = data;
        this.title = data.report.name;
        this.reportID = data.report.id;
        this.addID = data.addID;
        this.userID = data.userID;
    }
    ReportModalComponent.prototype.cansel = function () {
        this.dialogRef.close(false);
    };
    ReportModalComponent.prototype.ok = function () {
        var _this = this;
        var data = {
            "userId": this.userID,
            "reportId": this.reportID,
            "advertisementId": this.addID
        };
        this.mainServ.APIServ.post("advertisemets/" + this.addID + "/reports", data).subscribe(function (data) {
            if (_this.mainServ.APIServ.getErrorCode() == 0) {
                _this.dialogRef.close(true);
            }
            else
                _this.mainServ.globalServ.somthingError();
        });
    };
    ReportModalComponent.prototype.closeModal = function () {
        this.dialogRef.close();
    };
    ReportModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'report-modal',
            template: __webpack_require__("../../../../../src/app/report-modal/report-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/report-modal/report-modal.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__Services_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */], Object])
    ], ReportModalComponent);
    return ReportModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reset-password/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\r\n<div class=\"MainContainer\">\r\n    <div class=\"HeaderBackground\">\r\n\r\n        <header></header>\r\n        <div class=\"Triangle\">\r\n            <div class=\"Jumbotron\" data-paroller-factor=\"-0.2\">\r\n                <div class=\"Jumbotron-title\">هل تبحث عن شيئ معيّن ؟</div>\r\n\r\n                <div class=\"Jumbotron-subtitle\">\r\n                    أكثر من\r\n                    <span class=\"u-num\">300</span> إعلان بإنتظارك لتتفقدها\r\n                </div>\r\n            </div>\r\n            <div class=\"Triangle--spacer\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"Content\">\r\n        <div class=\"GridContainer\"style=\"padding: 5%;\">\r\n\r\n            <!--component html goes here -->\r\n            <!--component html goes here -->\r\n            <!--<div id=\"\" class=\"ModalContainer\">\r\n\t\t\t<div class=\"SignInModuleContainer\">-->\r\n            <div class=\"SignInModule\">\r\n                <div class=\"SignInModule-body\">\r\n                    <div class=\"SignInModule-body-inputcontainer\">\r\n                        <label for=\"name\">كلمة السر الجديدة</label>\r\n                        <input [(ngModel)]=\"user.newPassword\" class=\"SignInModule-body-inputcontainer-text\" type=\"text\" value=\"\"\r\n                            name=\"name\">\r\n                    </div>\r\n                    <div (click)=\"resetPassword()\" class=\"SignInModule-body-inputcontainer SignInModule-body-btn\">\r\n                        إعادة تعيين كلمة السر\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!--</div>\r\n\t\t</div>-->\r\n\r\n        </div>\r\n\r\n\r\n\r\n    </div>\r\n    <!--Below main container end-->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/reset-password/reset-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".customPage {\n  padding: 20px 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_main_service__ = __webpack_require__("../../../../../src/app/Services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(dialog, mainServ, route) {
        var _this = this;
        this.dialog = dialog;
        this.mainServ = mainServ;
        this.route = route;
        this.user = {};
        this.route.queryParams
            .filter(function (params) { return params.access_token; })
            .subscribe(function (params) {
            _this.token = params.access_token;
        });
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    };
    ResetPasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        this.mainServ.APIServ.resetPassWord("users/reset-password", this.user, this.token).subscribe(function (data) {
            if (_this.mainServ.APIServ.getErrorCode() == 0) {
                _this.mainServ.globalServ.goTo('/');
            }
            else if (_this.mainServ.APIServ.getErrorCode() == 401) {
                _this.message = "لرجاء التحقق من اسم المستخدم و كلمه المرور";
                _this.mainServ.APIServ.setErrorCode(0);
            }
            else
                _this.mainServ.globalServ.somthingError();
        });
    };
    ResetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'reset-password',
            template: __webpack_require__("../../../../../src/app/reset-password/reset-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reset-password/reset-password.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_0__Services_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/save-search-model/save-search-model.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\r\n<!--<div id=\"\" class=\"ModalContainer\">\r\n\t\t\t<div class=\"SignUpModuleContainer\">-->\r\n\r\n<div class=\"SignUpModule\">\r\n    <div class=\"SignUpModule-header\" style=\"direction: rtl;\">\r\n        <div class=\"SignUpModule-header-title\">\r\n            إضافة عملية بحث\r\n        </div>\r\n        <div class=\"SignUpModule-header-close\" (click)=\"closeModal()\">\r\n        </div>\r\n    </div>\r\n    <div class=\"SignUpModule-body\">\r\n\t\t<label for=\"name\">سيتم إعلامك عندما يتم إضافة إعلانات مطابقة لهذا البحث</label>\r\n        \r\n\t\t<label for=\"name\" style=\"color: red\">{{message}}</label>\r\n\r\n        <div class=\"SignUpModule-body-inputcontainer\">\r\n            <label for=\"name\">أسم عملية البحث</label>\r\n            <input [(ngModel)]=\"saveName\" (keyup.enter)=\"save()\"  (focus)=\"message=''; \"class=\"SignUpModule-body-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\r\n        </div>\r\n        <button  (click)=\"save()\" class=\"SignUpModule-body-inputcontainer SignUpModule-body-btn\">\r\n            إنشاء\r\n        </button>\r\n    </div>\r\n</div>\r\n<!--</div>\r\n\t\t</div>-->"

/***/ }),

/***/ "../../../../../src/app/save-search-model/save-search-model.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/save-search-model/save-search-model.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveSearchModelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_main_service__ = __webpack_require__("../../../../../src/app/Services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SaveSearchModelComponent = /** @class */ (function () {
    function SaveSearchModelComponent(thisDialog, mainServ) {
        this.thisDialog = thisDialog;
        this.mainServ = mainServ;
    }
    SaveSearchModelComponent.prototype.closeModal = function () {
        this.thisDialog.close();
    };
    SaveSearchModelComponent.prototype.save = function () {
        if (this.saveName == "" || this.saveName == null)
            this.message = "الرجاء إدخال حقل اسم عملية البحث ";
        else
            this.thisDialog.close({ "saveName": this.saveName });
    };
    SaveSearchModelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'save-search-model',
            template: __webpack_require__("../../../../../src/app/save-search-model/save-search-model.component.html"),
            styles: [__webpack_require__("../../../../../src/app/save-search-model/save-search-model.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_0__Services_main_service__["a" /* MainService */]])
    ], SaveSearchModelComponent);
    return SaveSearchModelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/set-phone/set-phone.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\n<div class=\"SignInModule\">\n\t<div class=\"SignInModule-header\" style=\"direction: rtl;\">\n\t\t<div class=\"SignInModule-header-title\">\n\t\t\tتثبيت رقم الهاتف\n\t\t</div>\n\t\t<div class=\"SignInModule-header-close\" (click)=\"closeModal()\">\n\t\t</div>\n\t</div>\n\t<div class=\"SignInModule-body\">\n\t\t\t<label for=\"name\" style=\"color: red\">{{message}}</label>\n\t\t<div class=\"SignInModule-body-inputcontainer\">\n\t\t\t<label for=\"name\">الرقم</label>\n\t\t\t<input [(ngModel)]=\"user.phone\" (focus)=\"message='';\" class=\"SignInModule-body-inputcontainer-text\" type=\"tel\" value=\"\" name=\"name\">\n\t\t</div>\n\t\t<div (click)=\"setPhone()\" class=\"SignInModule-body-inputcontainer SignInModule-body-btn\">\n\t\t\tتثبيت \n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/set-phone/set-phone.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/set-phone/set-phone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetPhoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_main_service__ = __webpack_require__("../../../../../src/app/Services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SetPhoneComponent = /** @class */ (function () {
    function SetPhoneComponent(mainServ, dialogRef) {
        this.mainServ = mainServ;
        this.dialogRef = dialogRef;
        this.user = {};
    }
    SetPhoneComponent.prototype.closeModal = function () {
        this.dialogRef.close();
    };
    SetPhoneComponent.prototype.setPhone = function () {
        var _this = this;
        if (this.user['phone'] == "" || this.user['phone'] == null) {
            this.message = "الرجاء إدخال حقل الرقم";
            return;
        }
        this.mainServ.APIServ.put("users/" + this.mainServ.loginServ.getUserId(), this.user).subscribe(function (data) {
            if (_this.mainServ.APIServ.getErrorCode() == 0) {
                _this.dialogRef.close();
            }
            else
                _this.mainServ.globalServ.somthingError();
        });
    };
    SetPhoneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'set-phone',
            template: __webpack_require__("../../../../../src/app/set-phone/set-phone.component.html"),
            styles: [__webpack_require__("../../../../../src/app/set-phone/set-phone.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_0__angular_material_dialog__["d" /* MatDialogRef */]])
    ], SetPhoneComponent);
    return SetPhoneComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sign-in-modal/sign-in-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\r\n<!--<div id=\"\" class=\"ModalContainer\">\r\n\t\t\t<div class=\"SignInModuleContainer\">-->\r\n<div class=\"SignInModule\" style=\"position: relative;overflow: hidden;\">\r\n  <div class=\"SignInModule-header\" style=\"direction: rtl;\">\r\n    <div class=\"SignInModule-header-title\">\r\n      تسجيل الدخول\r\n    </div>\r\n    <div class=\"SignInModule-header-close\" (click)=\"closeModal()\">\r\n    </div>\r\n  </div>\r\n  <div class=\"SignInModule-body\">\r\n    <label for=\"name\" style=\"color: red\">{{message}}</label>\r\n    <div class=\"SignInModule-body-inputcontainer\">\r\n      <label for=\"name\">الإيميل</label>\r\n      <input [(ngModel)]=\"user.email\" (keyup.enter)=\"login()\" (focus)=\"message='';\" class=\"SignInModule-body-inputcontainer-text\"\r\n        type=\"email\" value=\"\" name=\"name\">\r\n    </div>\r\n    <div class=\"SignInModule-body-inputcontainer\">\r\n      <label for=\"name\">كلمة السر</label>\r\n      <input [(ngModel)]=\"user.password\" (keyup.enter)=\"login()\" (focus)=\"message='';\" class=\"SignInModule-body-inputcontainer-text\"\r\n        type=\"password\" value=\"\" name=\"name\">\r\n    </div>\r\n    <div class=\"SignInModule-body-inputcontainer SignInModule-body-inputcontainer-checkboxcontainer\">\r\n      <input type=\"checkbox\" [(ngModel)]=\"rememberPass\" style=\"float: right;\" class=\"SignInModule-body-inputcontainer-checkboxlabel\"\r\n        id=\"checkbox_id2\" value=\"value\">\r\n      <label for=\"checkbox_id2\">\r\n              تذكر كلمة المرور\r\n              </label>\r\n    </div>\r\n    <div (click)=\"login()\" class=\"SignInModule-body-inputcontainer SignInModule-body-btn\">\r\n      تسجيل الدخول\r\n    </div>\r\n    <div (click)=\"socialSignIn('facebook')\" class=\"SignInModule-body-inputcontainer SignInModule-body-btn\" style=\"background-color: #4267b2;\">\r\n    Facebook\r\n    </div>\r\n\r\n    <div class=\"SignInModule-body-inputcontainer u-textCenter\">\r\n      <div class=\"u-textPrimaryColor cursorPointer\" (click)=\"forgetPassword()\"> هل نسيت كلمة السر ؟</div>\r\n    </div>\r\n    <div class=\"ItemsContainer-loader\" style=\"width:  100%;position:  absolute;height:  100%;\" [ngClass]=\"{'hidden':loader==0}\">\r\n      <img src=\"assets/imgs/spinner.svg\" alt=\"Kiwi standing on oval\">\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<!--</div>\r\n\t\t</div>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/sign-in-modal/sign-in-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-dialog-container {\n  padding: 0 !important; }\n\n.hidden {\n  display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sign-in-modal/sign-in-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_main_service__ = __webpack_require__("../../../../../src/app/Services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular5_social_auth__ = __webpack_require__("../../../../angular5-social-auth/angular5-social-auth.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular5_social_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular5_social_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




// import { AuthService } from "angular4-social-login";
// import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";

var SignInModalComponent = /** @class */ (function () {
    function SignInModalComponent(socialAuthService, authService, thisDialog, mainServ, data) {
        this.socialAuthService = socialAuthService;
        this.authService = authService;
        this.thisDialog = thisDialog;
        this.mainServ = mainServ;
        this.data = data;
        this.user = {};
        this.loader = false;
        this.rememberPass = true;
    }
    SignInModalComponent.prototype.login = function () {
        var _this = this;
        this.loader = true;
        this.mainServ.APIServ.post("users/login?include=user", this.user).subscribe(function (data) {
            _this.loader = false;
            alert(_this.mainServ.APIServ.getErrorCode());
            if (_this.mainServ.APIServ.getErrorCode() == 0) {
                _this.mainServ.loginServ.logIn(data, _this.rememberPass);
            }
            else if (_this.mainServ.APIServ.getErrorCode() == 401) {
                _this.message = "لرجاء التحقق من اسم المستخدم و كلمه المرور";
                _this.mainServ.APIServ.setErrorCode(0);
            }
            else if (_this.mainServ.APIServ.getErrorCode() == 412) {
                _this.message = "تم استخدام البريد الالكتروني في حساب اخر";
                _this.mainServ.APIServ.setErrorCode(0);
            }
            else
                _this.mainServ.globalServ.somthingError();
        });
    };
    SignInModalComponent.prototype.forgetPassword = function () {
        this.thisDialog.close(true);
    };
    SignInModalComponent.prototype.closeModal = function () {
        this.thisDialog.close();
    };
    SignInModalComponent.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = __WEBPACK_IMPORTED_MODULE_3_angular5_social_auth__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "google") {
            socialPlatformProvider = __WEBPACK_IMPORTED_MODULE_3_angular5_social_auth__["GoogleLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "linkedin") {
            socialPlatformProvider = __WEBPACK_IMPORTED_MODULE_3_angular5_social_auth__["LinkedinLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            console.log(socialPlatform + " sign in data : ", userData);
            // Now sign-in with userData   
            _this.loader = true;
            _this.mainServ.APIServ.post("users/facebookLogin", userData).subscribe(function (data) {
                _this.loader = false;
                if (_this.mainServ.APIServ.getErrorCode() == 0) {
                    _this.mainServ.loginServ.logIn(data, _this.rememberPass);
                }
                else
                    _this.mainServ.globalServ.somthingError();
            });
        });
    };
    SignInModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'sign-in-modal',
            template: __webpack_require__("../../../../../src/app/sign-in-modal/sign-in-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sign-in-modal/sign-in-modal.component.scss")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angular5_social_auth__["AuthService"], __WEBPACK_IMPORTED_MODULE_3_angular5_social_auth__["AuthService"], __WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__["d" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_0__Services_main_service__["a" /* MainService */], Object])
    ], SignInModalComponent);
    return SignInModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sign-up-modal/sign-up-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\r\n<!--<div id=\"\" class=\"ModalContainer\">\r\n\t\t\t<div class=\"SignUpModuleContainer\">-->\r\n\r\n<div class=\"SignUpModule\">\r\n  <div class=\"SignUpModule-header\" style=\"direction: rtl;\">\r\n    <div class=\"SignUpModule-header-title\">\r\n      حساب جديد\r\n    </div>\r\n    <div class=\"SignUpModule-header-close\" (click)=\"closeModal()\">\r\n    </div>\r\n  </div>\r\n  <div class=\"SignUpModule-body\">\r\n    <label for=\"name\" style=\"color: red\">{{message}}</label>\r\n\r\n    <div class=\"SignUpModule-body-inputcontainer\">\r\n      <label for=\"name\">الأسم</label>\r\n      <input [(ngModel)]=\"newUser.firstName\" (focus)=\"message='';\" class=\"SignUpModule-body-inputcontainer-text\" type=\"text\" value=\"\"\r\n        name=\"name\">\r\n    </div>\r\n    <div class=\"SignUpModule-body-inputcontainer\">\r\n      <label for=\"name\">الرقم</label>\r\n      <input [(ngModel)]=\"newUser.phone\" (focus)=\"message='';\" class=\"SignUpModule-body-inputcontainer-text\" type=\"number\" value=\"\"\r\n        name=\"name\">\r\n    </div>\r\n    <div class=\"SignUpModule-body-inputcontainer\">\r\n      <label for=\"name\">الايميل</label>\r\n      <input [(ngModel)]=\"newUser.email\" (focus)=\"message='';\" class=\"SignUpModule-body-inputcontainer-text\" type=\"text\" value=\"\"\r\n        name=\"name\">\r\n    </div>\r\n    <div class=\"SignUpModule-body-inputcontainer\">\r\n      <label for=\"name\">كلمة السر</label>\r\n      <input [(ngModel)]=\"newUser.password\" (focus)=\"message='';\" class=\"SignUpModule-body-inputcontainer-text\" type=\"password\"\r\n        value=\"\" name=\"name\">\r\n    </div>\r\n\r\n    <form [formGroup]=\"reactiveForm\">\r\n      <re-captcha data-theme=\"dark \" siteKey=\"6LcQEXUUAAAAAAGiOR4aO02f1UYyVK_6D4eUmNVa\" formControlName=\"recaptchaReactive\"></re-captcha>\r\n    </form>\r\n\r\n    <div class=\"SignUpModule-body-inputcontainer SignUpModule-body-inputcontainer-checkboxcontainer\">\r\n      <input type=\"checkbox\" style=\"float: right\" [(ngModel)]=\"isAgree\" class=\"SignUpModule-body-inputcontainer-checkboxlabel\"\r\n        id=\"checkbox_id\" value=\"value\">\r\n      <label for=\"checkbox_id\">\r\n                 \r\n                  <div class=\"u-textPrimaryColor cursorPointer\" (click)=\"goto('/terms')\">شروط الاستخدام</div>\r\n  \r\n                <div class=\"u-textPrimaryColor cursorPointer\" (click)=\"goto('/privacy')\">اتفاقية الخصوصية</div>\r\n                 أوافق على\r\n                </label>\r\n    </div>\r\n    <!--reactiveForm.invalid-->\r\n    <!--style=\"width: 100%\"-->\r\n    <button [disabled]=\"!isAgree\" (click)=\"signup()\" class=\"SignUpModule-body-inputcontainer SignUpModule-body-btn\">\r\n            إنشاء الحساب\r\n        </button>\r\n\r\n  </div>\r\n  <div class=\"SignUpModule-footer\">\r\n    لديك حساب مسبقاً\r\n    <div class=\"u-textPrimaryColor cursorPointer\" (click)=\"login()\">\r\n      قم بتسجيل الدخول .\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<!--</div>\r\n\t\t</div>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/sign-up-modal/sign-up-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-dialog-container {\n  padding: 0 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sign-up-modal/sign-up-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error_modal_error_modal_component__ = __webpack_require__("../../../../../src/app/error-modal/error-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_main_service__ = __webpack_require__("../../../../../src/app/Services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var SignUpModalComponent = /** @class */ (function () {
    function SignUpModalComponent(dialog, thisDialog, mainServ, data) {
        this.dialog = dialog;
        this.thisDialog = thisDialog;
        this.mainServ = mainServ;
        this.data = data;
        this.newUser = {};
        this.message = "";
        this.version = __WEBPACK_IMPORTED_MODULE_2__angular_core__["VERSION"].full;
        this.reactiveForm = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormGroup"]({
            recaptchaReactive: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required)
        });
    }
    SignUpModalComponent.prototype.signup = function () {
        var _this = this;
        if (this.newUser['firstName'] == "" || this.newUser['firstName'] == null) {
            this.message = "الأسم";
        }
        else if (this.newUser['phone'] == "" || this.newUser['phone'] == null) {
            this.message = "الرقم";
        }
        else if (this.newUser['email'] == "" || this.newUser['email'] == null) {
            this.message = "الأيميل";
        }
        else if (this.newUser['password'] == "" || this.newUser['password'] == null) {
            this.message = "كلمة السر";
        }
        if (this.message != "") {
            this.message = "الرجاء إدخال حقل " + this.message;
        }
        else {
            this.newUser['lastName'] = "test";
            this.mainServ.APIServ.post("users", this.newUser).subscribe(function (data) {
                if (_this.mainServ.APIServ.getErrorCode() == 0) {
                    var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__error_modal_error_modal_component__["a" /* ErrorModalComponent */], {
                        width: '50%',
                        data: { title: "إنشاء الحساب", containt: "أهلا وسهلا بك في دلال الرجاء التحقق من بريدك الالكتروني" }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        _this.mainServ.APIServ.post("users/login", { "email": _this.newUser["email"], "password": _this.newUser["password"] }).subscribe(function (data) {
                            if (_this.mainServ.APIServ.getErrorCode() == 0) {
                                _this.mainServ.loginServ.logIn(data);
                            }
                            else
                                _this.mainServ.globalServ.somthingError();
                        });
                    });
                }
                else if (_this.mainServ.APIServ.getErrorCode() == 422) {
                    _this.message = "هذا البريد الالكتروني مسجل مسبقا";
                    _this.mainServ.APIServ.setErrorCode(0);
                }
                else
                    _this.mainServ.globalServ.somthingError();
            });
        }
    };
    SignUpModalComponent.prototype.login = function () {
        this.thisDialog.close(true);
    };
    SignUpModalComponent.prototype.closeModal = function () {
        this.thisDialog.close();
    };
    SignUpModalComponent.prototype.goto = function (url) {
        this.mainServ.globalServ.goTo(url);
        this.thisDialog.close();
    };
    SignUpModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'sign-up-modal',
            template: __webpack_require__("../../../../../src/app/sign-up-modal/sign-up-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sign-up-modal/sign-up-modal.component.scss")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__["d" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_1__Services_main_service__["a" /* MainService */], Object])
    ], SignUpModalComponent);
    return SignUpModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/terms/terms.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\r\n<div class=\"MainContainer\">\r\n\t<div class=\"HeaderBackground\">\r\n\t\t<header></header>\r\n\t\t<div class=\"Triangle\">\r\n\t\t\t<div class=\"Jumbotron\" data-paroller-factor=\"-0.2\">\r\n\t\t\t\t<!--<div class=\"Jumbotron-title\">هل تبحث عن شيئ معيّن ؟</div>\r\n\r\n\t\t\t\t<div class=\"Jumbotron-subtitle\">\r\n\t\t\t\t\tالكثير من الاعلانات بانتظارك لتفقدها\r\n\t\t\t\t</div>-->\r\n\t\t\t</div>\r\n\t\t\t<div class=\"Triangle--spacer\"></div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"Content\">\r\n\t\t<div class=\"GridContainer customPage\">\r\n\r\n\t\t\t<h1>شروط الاستخدام</h1>\r\n\t\t\t<h3>شروط الاستخدام</h3>\r\n\t\t\t<span>\r\nمرحبا بكم في موقع دلّال للإعلانات المبوبة. توضح هذه الصفحة شروط الاستخدام التي يتيح لك موقع دلّال بموجبها الدخول إلى الموقع واستخدامه، سواء بصفة زائر أو مستخدم مسجل. لذلك نرجو قراءة شروط الاستخدام هذه بعناية قبل أن تبدأ باستخدام الموقع.\r\n\r\nوبمجرد دخولك إلى الموقع واستخدامك إياه، تكون قد قبلت بشروط الاستخدام هذه ووافقت على الالتزام بها.\r\n\r\nوإذا لم توافق على هذه الشروط، فلا يسمح لك باستخدام الموقع.\r\n\r\n</span>\r\n\r\n\t\t\t<h3>\r\n\t\t\t\tمحتوى الاعلان\r\n\r\n\t\t\t</h3>\r\n\t\t\t<span>\r\nالمحتوى الموجود على موقع دلّال نابع من المستخدمين والأعضاء المسجلين في الموقع، وبالتالي لا يتحمل موقع دلّال اي مسؤولية عن المحتوى المُضاف ويتحمل المستخدمين كافة المسؤولية. يقوم موقع دلّال بدور رقابي على الإعلانات والمحتوى المُضاف من قبل المستخدمين بطريقتين، قبل الإضافة (ولا تشمل جميع الإعلانات) حيث ان بعض الإعلانات لا تظهر على الموقع إلا بموافقة إدارة الموقع، والنوع الثاني، بعد الإضافة، حيث تظهر الإعلانات على الموقع ومن ثم يتم مراقبتها وتصحيحيها إن لزم الأمر.\r\nولذلك، لا يسمح للعضو بنشر إعلانات بمحتوى مُخالف لسياسة المحتوى لشركة دلّال سواء على الموقع الإلكتروني الخاص بالشركة أو على الصفحات الإجتماعية. مع العلم أن مثل هذه الإعلانات سوف يتم حذفها مباشرة من قبل مسؤولي الموقع. وكمثال عليها لا للحصر:\r\n \r\n<ul>\r\n\t<li>\r\nالإعلانات المكررة، حيث لا يسمح بتكرار الإعلان أكثر من مرة واحدة، بدلاً عن ذلك يمكن إعادة نشرها. والعضويات المكررة حيث لا يجوز أن يمتلك العضو أكثر من عضوية واحدة، وسيتم حذف العضويات الجديدة والابقاء على الأقدم، حيث يتم التأكيد عليها من قبل فريق مراقبة المحتوى ومن ثم تعطيلها.\r\n\t</li>\r\n\t<li>\r\nإعلانات النصب والاحتيال مثل: (إعلانات وهمية للسيارات والهواتف الخلوية والقروض والتي هدفها النصب على مستخدمين الموقع) حيث يتم التأكيد عليها من قبل فريق مراقبة المحتوى ومن ثم تعطيلها.\r\n\t</li>\r\n\t<li>\r\nإعلانات جمع السير الذاتية حيث يتم التأكيد عليها من قبل فريق مراقبة المحتوى ومن ثم تعطيلها.\r\n\t</li>\r\n\t<li>\r\nإعلانات شركات التوظيف والتي تهدف الى جمع السير الذاتية وبيعها، حيث يتم التأكيد عليها من قبل فريق مراقبة المحتوى ومن ثم تعطيلها.\r\n\t</li>\r\n\t<li>\r\nالإعلانات التي ثبت بأن المعلن عنها قام بمخالفة وتم التبليغ عنها من قبل مستخدمين آخرين من الموقع أو ثبت أنها بخصوص إزعاج مستخدمين أخرين. حيث يتم التأكيد عليها من قبل فريق مراقبة المحتوى ومن ثم تعطيلها.\r\nالإعلانات التي تحتوي على (بيع أو تأجير أو تداول أو الإعلان أو الترويج) للمواد الممنوعة على موقع دلّال مثل: (بيع الأعضاء البشرية، الأسلحة، الآثار، الحشيش والمخدرات وما شابهها، والممنوعات بكافة انواعها، وذلك يحدد حسب قانون الجمهورية العربية السورية) بالإضافة الى الذم والقدح والتشهير والشتائم والكلمات المخلّة للآداب والعرف العام.\r\n\r\n\t</li>\r\n <li>\r\nإعلانات أعمال التخريب مثل: (الإيذاء والقاتل المأجور والحرق والقتل والاغتصاب والتكسير والضرب وعصابات العنف) وما شابه ذلك.\r\n </li>\r\n <li>\r\nإعلانات السحر والشعوذة (سواء الخدمات أو بيع أشياء ذات علاقة بها مثل: الخواتم والتعويذات).\r\n </li>\r\n <li>\r\nإعلانات العلاج بالقرآن، مثل: (علاج بالرقية الشريعة لعلاج الحسد والسحر والمس).     \r\n </li>\r\n <li>\r\nالإعلانات الترويجية خصوصاً إذا كانت لمواقع أو قنوات تلفزيونية أو دعاية لشركة دون وجود منتج فعلي في الإعلان. وهدفها الترويج لمواقع أو منتديات أو التجارة الإلكترونية، والإعلانات العادية التي تحتوي على روابط خارجية بقصد الترويج.\r\n </li>\r\n <li>\r\nإعلانات التسويق الشبكي كإعلانات الربح عن طريق الإنترنت مثل: (الربح عن طريق الكليك أو النقرات أو تجارة الفوركس)\r\n </li>\r\n <li>\r\nإعلانات الزواج والتعارف أو الخطابة غير مسموح بنشرها، حيث أن هدفها ليس تجاري مطلقاً. \r\n </li>\r\n <li>\r\nإعلانات خدمات شطب السيارات القديمة والغير صالحة او منتهية التسجيل وإعلانات سيارات او دراجات لا توجد لها تسجيل ساري الصلاحية مثل (سيارات غير مرخصة أو درجات غير مرخصة للبيع). وهي غير مسموحة ويعاقب قانون الجمهورية العربية السورية على حيازتها أو الإتجار بها. \r\n </li>\r\n <li>\r\nالإعلانات غير الواضحة وليس لها صلة بالهدف الذي من أجله أنشئ موقع دلّال، وعلى سبيل المثال لا الحصر الإعلانات التالية: (طلب مساعدات مالية، التبليغ عن شخص أو إعلانات التشهير) وهدفها أن تُشهر بالأفراد والشركات.    \r\n </li>\r\n <li>\r\nإعلانات الأجهزة الكهربائية الممنوعة مثل: (أجهزة كشف الذهب، أجهزة التنصت، قلم تصوير، كاميرا صغيرة، صاعق كهربائي، أجهزة فك التشفير، أجهزة كشف الرادار أو اللاسلكي) وما شابه ذلك من الأجهزة، وكذلك إعلانات (الأدوات أو الأدوية الجنسية) وهي غير مسموحة ويعاقب قانون الجمهورية العربية السورية ا على حيازتها أو الإتجار بها.\r\n </li>\r\n <li>\r\nإعلانات بيع العملات الأثرية أو اي نوع من الآثار القديمة حيث يعاقب قانون الجمهورية العربية السورية على حيازتها او التجارة بها.\r\n </li>\r\n <li>\r\nإعلانات مطلوب مساعدة مالية، قروض وغيرها والتي تطلب إرسال مبالغ مالية مسبقاً.\r\n </li>\r\n <li>\r\nإعلانات بيع الحيوانات الخطيرة مثل: (الأفاعي، النمور، الأسود).\r\n  </li>\r\n <li>          \r\nإعلانات بيع الدخان أو التبغ أو السيجارأو الغليون أو الأرجيلة وما شابه ذلك، وأي إعلان يروّج عنها مثل: إعلانات ضمان وبيع وإيجار محلات بيع الدخان والمقاهي. \r\n </li>\r\n <li>\r\nإعلانات تأشيرات للبيع أو للتنازل أو مطلوب مثل؛ (الحصول على فيزا إلى دولة معينة).                   \r\n </li>\r\n <li>\r\nإعلانات بيع ريسيفرات ومحطات مدفوعة وغيرها عبر أقمار أخرى والتي لا يكون المعلن عيها وكيلاً رسمياً للخدمة. \r\n </li>\r\n <li>\r\nإعلانات بيع فيش الألعاب مثل: فيش لعبة 8 pool ball coins, poker للبيع والتي تهدف إلى المقامرة. \r\n </li>\r\n <li>\r\nإعلانات مطلوب سلع او خدمات للشراء مثل: (مطلوب سيارات أو أراضي أو خدمات أو مشاريع أو شركاء لمشاريع) بالإضاقة الى اعلانات مطلوب من غير تفاصيل كاملة حول المطلوب.\r\n </li>\r\n <li>\r\nإعلانات بيع الملابس والفساتين الني لا تحتوي على صور، والتي تحتوي على صور غير لائقة وتخل بالآداب العامة. \r\n </li>\r\n <li>\r\nالإعلانات العادية، ولكن جزء من مواصفات الإعلان موجود على رابط فيسبوك أو رابط خارجي يتم نقل أو تنزيل ثم تحميل جزء مواصفات الإعلان من صفحة الفيسبوك أو الرابط الخارجي إلى داخل الإعلان ويتم حذف الرابط.\r\n </li>\r\n <li>\r\nالإعلانات الدولية عن سلع أو منتجات موجودة خارج البلاد العربية المنتشر بها موقع دلّال، أو نشر إعلانات خارج نطاق الدولة المعلن بها في موقع دلّال. \r\n \r\n</li>\r\n <li>\r\nأما بالنسبة لاسم المستخدم، احرص على انتقاء اسم ذو معنى، لائق من الناحية الأخلاقية والعرف العام والثقافة العربية، ولا يرتبط بشركة او فئة معينة ولا التشبيه باسم يرتبط ب ”موقع دلّال” أو “Dlaaal\"، مثل: (إدارة موقع دلّال، كونترول موقع دلّال...) ويحبذ استخدام اسمك الشخصي عوضاً عنه وتجنّب استخدام الكلمات المسيئة.\r\n</li>\r\n\r\n</ul> \r\n</span>\r\n\r\n\t\t\t<h3>\r\n\t\t\t\tنصائح التعامل الآمن\r\n\t\t\t</h3>\r\n\t\t\t<span>\r\nنصائح لتتعرف على الإعلانات المشكوك فيها:\r\n</span>\r\n<ul>\r\n\t\t\t<li><h4>\r\n\t\t\t\tلا ترسل أي مبالغ مالية\r\n\t\t\t</h4></li>\r\n\t\t\t<span>\r\nعادة ما يطلب المعلنون المشكوك بأمرهم تحويل مبالغ مالية (أو جزء من المبلغ المالي) إلكترونياً او عن طريق مكاتب التحويل.\r\n</span>\r\n\t\t\t<li><h4>\r\n\t\t\t\tصيغة الإعلان ووجود الأخطاء اللغوية والإملائية\r\n\t\t\t</h4></li>\r\n\t\t\t<span>\r\nوذلك بسبب أن المعلنين المشكوك بأمرهم عادة ما يكونون من جنسيات غير عربية، فيلجئون إلى ترجمة الإعلانات إلى العربية. فيبدو الإعلان غريباً. \r\n</span>\r\n\t\t\t<li><h4>\r\n\t\t\t\tصور المنتج\r\n\t\t\t</h4></li>\r\n\t\t\t<span>\r\nعادة ما يستخدم المحتالين صور من الإنترنت، لانه يستسهل الأمر، ولا يوجد لديه منتج فعلي.\r\n</span>\r\n\r\n\t\t\t<li><h4>\r\n\t\t\t\tإعلان بعرض مغري غير منطقي\r\n\t\t\t</h4></li>\r\n\t\t\t<span>\r\nعادة ما يقوم المعلنون المشكوك بأمرهم انّ يضعوا اعلان مغري يكاد لا يصدق. مثال منتج بحالة رائعة ولدواعى السفر بنصف الثمن، لذا عليك ان تتوخى الحذر عند التعامل مع مثل هؤلاء المعلنين.\r\n</span>\r\n\t\t\t<li><h4>\r\n\t\t\t\tتأكد من سعر المنتج\r\n\t\t\t</h4></li>\r\n\t\t\t<span>\r\nعادة ما يضع المعلنون المشكوك بأمرهم أسعار غير منطقية لجذب المشترين والإحتيال عليهم، تأكد من متوسط سعر المنتج الذي ترغب في شراءه.\r\n</span>\r\n\t\t\t<li><h4>\r\n\t\t\t\tالشروع في إتمام الصفقة:\r\n\t\t\t</h4></li>\r\n\t\t\t<span>\r\nتفحص المُراد شراءه بشكل جيد للتأكد من سلامته، كما ننصحك بالتأكد من الأوراق الثبوتية (في حال تطلب الأمر)\r\n</span>\r\n\r\n</ul>\r\n\t\t\t<h3>\r\n\t\t\t\tالخصوصية\r\n\t\t\t</h3>\r\n\t\t\t<span>\r\nيرجى مراجعة سياسة الخصوصية والتي تحكم أيضا زيارتك لموقع دلّال لفهم أكثر لممارساتنا.\r\n</span>\r\n\t\t\t<h3>\r\n\t\t\t\tحقوق الطبع والنشر للمحتوى\r\n\t\t\t</h3>\r\n\t\t\t<span>\r\nجميع المحتويات الواردة في هذا الموقع، مثل النصوص والرسومات والشعارات، والأيقونات، والصور والصوت، والتنزيلات الرقمية، وتجميع البيانات، هو ملك لموقع دلّال وهي مضمونه ومحمية. جميع محتويات هذا الموقع هي ملكية حصرية لموقع دلّال. فلا يحق لك نسخ أو تعديل أي شيء عالموقع من حيث المحتوى. كما لا يحق لك الدخول إلى قاعدة البيانات الخاصة او استخدام اي برمجية تخترق صفحات موقع دلّال.\r\n</span>\r\n\t\t\t<h3>\r\n\t\t\t\tنفي الضمان وعدم تحمل المسؤولية\r\n\t\t\t</h3>\r\n\t\t\t<span>\r\n\t\t\tإنك تقر وتوافق على أن استخدام الموقع الالكتروني والخدمات هو تماماً على مسؤوليتك الخاصة ، وأن الموقع و الخدمة هي مقدمة على\r\n\t\t\tأساس \"كما هي\" أو \" كما هي متاحة\" دون أي ضمانات من أي نوع. موقع دلّال لا يتحمل أية ضمانات أو إقرارات حول دقة أو اكتمال\r\n\t\t\tمحتوى الموقع أو محتوى أي مواقع طرف ثالث له علاقة بالموقع و لا تتحمل أية مسؤولية أو مسائلة لأي أخطاء ، أو الإصابة الشخصية\r\n\t\t\tأو أضرار في الممتلكات من أي نوع، الناتجة عن الوصول إليك واستخدام الموقع و الخدمة، أي دخول غير مصرح إليك أو استخدام خدمتنا\r\n\t\t\tو / أو أي جميع المعلومات الشخصية و / أو المعلومات المالية المخزنة، الفيروسات، أو ما شابه ذلك والتي قد تكون مرسلة إليك\r\n\t\t\tأو عبر الموقع الإلكتروني من قبل أي طرف ثالث، و / ​​أو أي أخطاء أو حذف في أي محتوى أو عن أي خسارة أو ضرر من أي نوع يتم\r\n\t\t\tتكبده كنتيجة لاستعمال أي محتوى تم نشره بالبريد الإلكتروني ، لنقلها أو إتاحتها عبر الموقع الإلكتروني أو الخدمة. موقع دلّال\r\n\t\t\tلا يتحمل المسؤولية عن أي منتج أو الخدمة المعلن عنها أو التي يقدمها طرف ثالث عن طريق الموقع او اي موقع بارتباط تشعبي أو\r\n\t\t\tواردة في أي شعار أو دعاية أخرى.\r\n\t\t\t</span>\r\n\t\t\t<h3>\r\n\t\t\t\tاتصل بنا\r\n\t\t\t</h3>\r\n\t\t\t<span>\r\nإن كان لديك أي استفسار حول شروط الإستخدام، الرجاء الاتصال بنا عن طريق البريد الإكتروني: <b>info@dlaaal.com</b>  بعنوان \"شروط الاستخدام\".\r\n\t</span>\r\n\r\n\r\n\t\t</div>\r\n\r\n\r\n\r\n\t</div>\r\n\t<!--Below main container end-->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/terms/terms.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/terms/terms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TermsComponent = /** @class */ (function () {
    function TermsComponent() {
    }
    TermsComponent.prototype.ngOnInit = function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    };
    TermsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'terms',
            template: __webpack_require__("../../../../../src/app/terms/terms.component.html"),
            styles: [__webpack_require__("../../../../../src/app/terms/terms.component.scss")]
        })
    ], TermsComponent);
    return TermsComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/imgs/close icon.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAuCAYAAAC8jpA0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAqFJREFUeNrUmY11gjAQgEMW0A2kE4gDtLJB3UCdQLuBnaB0Au0GuIF2geIGuoEsUHrxHX2IIeaOgHrv5fGeevjlcn9JvCzLhGvJXrwAHl0YifedHV2/36sDDXA+PEYwQhgKtFfx01RNAMZGDZjIplVoAO0i6BxGn/m/ahIxjAVMYN8oNAAvELbjcLW/qPBW0OijsWH560qK4JETaABWlv0Q7chWud614DVCA/AKHmPRrhwQPCFD3wi46C5hFbgWGoCVb83EbUWB+zpXkRrgyR0AC8xQ2nwuNcUiEvcjfVx1o6VXhBycYtBwg81WZphyL6HhC1XlhpRAwdK9IwJPGXpRlaUjamRjkIQEgCnorBh6QzBqeAaNH/Q4qYgAcAJm6OUyKVt6Xid3WgCcATPBx9is/UO/WqagoLJKVQNogZkyOkFjANrKEvO4LbgRGC23IbS4o9zSAXG2tuADx8AC3yu83+eT4pCxVOxlZwLn8iRr+JfR4g0BK/El08oscAfA+oapYfDawK6gWxeJRaOOUAKSUgGN0ElLwJzSXQl9bAPYIXjCtfTVSlfugR2Bp0pXVm1p6gDjO3+IJd82+whJPFej9hJLx+BxMeWtbf2JUThYldNo6cLe0EpJ56sWlU4LTqyQ6/y8T+IyxZabzU4ZnPDHZ+CMkh5dHNbgC5fEje2eUZqn6JsUvS0YNtSeMAE4pU1NMcdzTlIPRL1BcZtX7j3mhBd1BP/ol6L3Wd6XXpzlEd2kadkBcHC1y8M8/HUHwHnc2LWmAD65MXh+XHEk9dM3BD8Iw9n01U0Agr+1CKyuLwITsDYQK0p0gFWz3yDwO8AurNpb4pWcSokL8QhXcpp+4XEuPzUT8AXtmvl01Yy9Dls81xf6OBG/EMwb187/J8AA8o6NrTb9v9IAAAAASUVORK5CYII="

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map