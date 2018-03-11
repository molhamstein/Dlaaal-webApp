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
    function CallApiService(http, loginSer) {
        this.http = http;
        this.loginSer = loginSer;
        this.headers2 = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        // urlArray = [
        //   "cities",
        //   "categories",
        //   "users",
        //   "users/login"
        // ];
        this.baseUrl = "http://104.217.253.15:3000/api/";
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
        var _options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', "Authorization": this.loginSer.getId() }) };
        return this.http.get(this.baseUrl + url, _options).map(function (Response) {
            return Response;
        }).catch(function (response) {
            var data = { errMsg: "errMsg", error: "error" };
            return JSON.stringify(data);
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
        var _options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', "Authorization": this.loginSer.getId() }) };
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
        var _options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', "Authorization": this.loginSer.getId() }) };
        return this.http.put(this.baseUrl + url, data, _options).map(function (Response) {
            return Response;
        }).catch(function (Response) {
            _this.errorCode = Response.status;
            return "E";
        });
    };
    CallApiService.prototype.delete = function (url) {
        var _this = this;
        var _options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', "Authorization": this.loginSer.getId() }) };
        return this.http.delete(this.baseUrl + url, _options).map(function (Response) {
            return Response;
        }).catch(function (Response) {
            _this.errorCode = Response.status;
            return "E";
        });
    };
    CallApiService.prototype.uploadImage = function (url, data, length) {
        var fd = new FormData();
        for (var index = 0; index < length; index++) {
            fd.append("file", data[index], data[index].name);
        }
        var _options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "Authorization": this.loginSer.getId() }) };
        return this.http.post(this.baseUrl + url, fd, _options).map(function (Response) {
            return Response;
        });
    };
    CallApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
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
        this.unreadNotBeh = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](0);
        this.notificationBeh = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.castUnreadNotBeh = this.unreadNotBeh.asObservable();
        this.castNotificationBeh = this.notificationBeh.asObservable();
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
        var time = this.diff_hours(new Date(), new Date(date));
        if (time < 24)
            return time + " ساعة ";
        else if (this.diff_days(new Date(), new Date(date)) < 7)
            return this.diff_days(new Date(), new Date(date)) + " يوم ";
        else if (this.diff_week(new Date(), new Date(date)) < 4)
            return this.diff_week(new Date(), new Date(date)) + " اسبوع ";
        else if (this.diff_month(new Date(), new Date(date)) < 12)
            return this.diff_month(new Date(), new Date(date)) + " شهر ";
        else
            return date;
    };
    GlobalService.prototype.goTo = function (newURL) {
        this.router.navigate([newURL]);
    };
    GlobalService.prototype.reload = function () {
        location.reload();
    };
    GlobalService.prototype.errorDialog = function (title, containt) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__error_modal_error_modal_component__["a" /* ErrorModalComponent */], {
            width: '50%',
            data: { title: title, containt: containt }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    GlobalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_0__call_api_service__["a" /* CallApiService */]])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "../../../../../src/app/Services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
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
    function LoginService(cookieService) {
        this.cookieService = cookieService;
    }
    LoginService.prototype.isLogin = function () {
        if (this.cookieService.get('dalalUserId') == "") {
            return false;
        }
        else {
            return true;
        }
    };
    LoginService.prototype.getUserId = function () {
        var user = this.cookieService.get("dalalUserId");
        if (user != "")
            return user;
    };
    LoginService.prototype.getId = function () {
        var user = this.cookieService.get("dalalId");
        // if (user != "")
        return user;
    };
    LoginService.prototype.logIn = function (data) {
        console.log(data);
        this.cookieService.set('dalalUserId', data.userId);
        this.cookieService.set('dalalId', data.id);
        location.reload();
    };
    LoginService.prototype.logout = function () {
        this.cookieService.set('dalalUserId', "");
        this.cookieService.set('dalalId', "");
        location.reload();
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/activate/activate.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\n<!--component html goes here -->\n<div class=\"MainContainer\">\n    <div class=\"HeaderBackground\">\n\n        <header></header>\n        <div class=\"Triangle\">\n            <div class=\"Jumbotron\" data-paroller-factor=\"-0.2\">\n                <div class=\"Jumbotron-title\">هل تبحث عن شيئ معيّن ؟</div>\n\n                <div class=\"Jumbotron-subtitle\">\n                    أكثر من\n                    <span class=\"u-num\">300</span> إعلان بإنتظارك لتتفقدها\n                </div>\n            </div>\n            <div class=\"Triangle--spacer\"></div>\n        </div>\n    </div>\n    <div class=\"Content\">\n        <div class=\"GridContainer\"style=\"padding: 5%;\">\n\n            <!--component html goes here -->\n            <!--component html goes here -->\n            <!--<div id=\"\" class=\"ModalContainer\">\n\t\t\t<div class=\"SignInModuleContainer\">-->\n        \n\n            <!--</div>\n\t\t</div>-->\n\n        </div>\n\n\n\n    </div>\n    <!--Below main container end-->\n</div>"

/***/ }),

/***/ "../../../../../src/app/activate/activate.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/activate/activate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_call_api_service__ = __webpack_require__("../../../../../src/app/Services/call-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_global_service__ = __webpack_require__("../../../../../src/app/Services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    function ActivateComponent(dialog, globalSer, APIServe, route) {
        var _this = this;
        this.dialog = dialog;
        this.globalSer = globalSer;
        this.APIServe = APIServe;
        this.route = route;
        alert("SSS");
        this.route.queryParams
            .filter(function (params) { return params.token; })
            .subscribe(function (params) {
            _this.token = params.token;
            _this.userID = params.uid;
            _this.APIServe.activeAccount("/users/" + _this.userID + "/activate", _this.token).subscribe(function (data) {
                if (_this.APIServe.getErrorCode() == 0) {
                    alert("Success");
                    // this.globalSer.goTo('/')
                }
                else if (_this.APIServe.getErrorCode() == 401) {
                    _this.APIServe.setErrorCode(0);
                }
            });
        });
    }
    ActivateComponent.prototype.ngOnInit = function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    };
    ActivateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'activate',
            template: __webpack_require__("../../../../../src/app/activate/activate.component.html"),
            styles: [__webpack_require__("../../../../../src/app/activate/activate.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_2__Services_global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_1__Services_call_api_service__["a" /* CallApiService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]])
    ], ActivateComponent);
    return ActivateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/add-advertising/add-advertising.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"MainContainer\">\n    <div class=\"HeaderBackground\">\n        <header></header>\n        <div class=\"Triangle Triangle--pages\">\n            <div class=\"Triangle--pages-title\">\n                إضافة إعلان جديد\n            </div>\n\n            <div class=\"Triangle--spacer\"></div>\n        </div>\n    </div>\n    <div class=\"Content\">\n        <div class=\"GridContainer\">\n            <div class=\"HeaderBoxContianer HeaderBoxContianer--addpage\">\n                <div class=\"HeaderBox HeaderBox--adspage\">\n                    <div class=\"AddNewForm-inputcontainer\">\n                        <label for=\"name\">عنوان الإعلان</label>\n                        <input [(ngModel)]=\"search.address\" class=\"AddNewForm-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\n                    </div>\n                </div>\n                <div class=\"HeaderBox HeaderBox--adspage\">\n                    <div class=\"AddNewForm-inputcontainer\">\n                        <label for=\"name\">السعر المطلوب</label>\n                        <input [(ngModel)]=\"search.price\" class=\"AddNewForm-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"AddNewContainer\">\n                <div class=\"AddNewForm\">\n                    <div class=\"AddNewForm-column\">\n                        <div class=\"AddNewForm-inputcontainer\">\n                            <select [(ngModel)]=\"search.cityId\" class=\"AddNewForm-inputcontainer-select AddNewForm-down AddNewForm-inputcontainer-select--lg\">\n                                <option [ngValue]=\"undefined\" selected>اختر المدينة</option>\n\t\t\t\t\t\t        <option *ngFor=\"let city of cities\" value=\"{{city.id}}\" >{{city.name}}</option>\n                            </select>\n                        </div>\n\n                        <div class=\"AddNewForm-inputcontainer\">\n                            <select (change)=\"changeCategory($event.target.value)\" [(ngModel)]=\"search.categoryId\" class=\"AddNewForm-inputcontainer-select AddNewForm-down AddNewForm-inputcontainer-select--md\">\n                            \t<option [ngValue]=\"undefined\" selected>اختر الفئة</option>\n\t\t\t\t        \t\t<option *ngFor=\"let category of categories\" value=\"{{category.id}}\" >{{category.title}}</option> \n                            </select>\n                            <select (change)=\"changeSubCategory($event.target.value)\" [(ngModel)]=\"search.subCategoryId\" class=\"AddNewForm-inputcontainer-select AddNewForm-down AddNewForm-inputcontainer-select--sm\">\n                                <option [ngValue]=\"undefined\" selected> اختر الفئة الفرعية</option>\t\t\t\t\t\t\t\t \n                                <option *ngFor=\"let subCategory of subCategories\" value=\"{{subCategory.id}}\" >{{subCategory.title}}</option>\t\n                            </select>\n                        </div>\n                        <div class=\"AddNewForm-inputcontainer\">\n                            <label for=\"name\">عنوان </label>\n                            <input [(ngModel)]=\"search.title\" class=\"AddNewForm-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\n                        </div>\n                        <div class=\"AddNewForm-inputcontainer\">\n                            <label for=\"name\">شرح </label>\n                            <input [(ngModel)]=\"search.description\" class=\"AddNewForm-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\n                        </div>\n                        <div class=\"AddNewForm-inputcontainer\" *ngFor=\"let oneKey of keyFilter; let i = index;\">\n                            <label for=\"name\">{{oneKey.key}} </label>\n                            <input *ngIf=\"oneKey.type == 'text' \" [(ngModel)]=\"search.fields[i].value\" class=\"AddNewForm-inputcontainer-text\" type=\"text\"\n                                value=\"\" name=\"name\">\n                            <input *ngIf=\"oneKey.type == 'number' \" [(ngModel)]=\"search.fields[i].value\" class=\"AddNewForm-inputcontainer-text\" type=\"number\"\n                                value=\"\" name=\"name\">\n                            <select style=\"width: 100%\" *ngIf=\"oneKey.type == 'choose' \" [(ngModel)]=\"search.fields[i].value\" class=\"AddNewForm-inputcontainer-select AddNewForm-down AddNewForm-inputcontainer-select--md\">\n\t\t\t\t\t\t\t\t \t<option *ngFor=\"let value of oneKey.values\" value=\"{{value}}\" >{{value}}</option>\n\t\t\t\t\t\t\t\t</select>\n                        </div>\n                    </div>\n                    <div class=\"AddNewForm-column\">\n                        <div [ngClass]=\"{'hidden':images.length==0}\" class=\"AddNewForm-imagescontainer AddNewForm-imagescontainer--lg\">\n                            <div class=\"AddNewForm-imagescontainer-largeimage\">\n                                <img src=\"{{images[0]}}\" />\n                            </div>\n                        </div>\n                        <div class=\"AddNewForm-imagescontainer AddNewForm-imagescontainer--sm\">\n                            <div *ngFor=\"let value of images\" class=\"AddNewForm-imagescontainer-smallimage\">\n                                <img src=\"{{value}}\" />\n                            </div>\n                            <div *ngFor=\"let image of imageOnLoad;let i = index\" class=\"AddNewForm-imagescontainer-smallimage\" style=\"    position: relative;\">\n                                <img id=\"{{'uploadImage'+i}}\" />\n                                <img src=\"assets/imgs/infinity_loader_by_volorf.gif\" style=\"position:  absolute;opacity: 0.5;top: 0px;height: 100%;left:  0px;width: 100%;\"\n                                />\n\n                            </div>\n\n\n                            <div (click)=\"openSelectImage()\" for=\"file\" class=\"AddNewForm-imagescontainer-browseimage cursorPointer\">\n                                <input multiple type=\"file\" style=\"display:none\" id=\"files\" (change)=\"onChange($event)\" />\n                                <img src=\"assets/imgs/browse.png\" />\n                            </div>\n                        </div>\n                        <div class=\"AddNewForm-submitcontainer\">\n                            <div class=\"AddNewForm-checkboxcontainer\">\n                                <input type=\"checkbox\" id=\"checkbox_id\" [(ngModel)]=\"isAgree\" value=\"value\">\n                                <label for=\"checkbox_id\">\n                                    أوافق على\n                                    <div class=\"u-textPrimaryColor\" routerLink=\"{{'/terms'}}\">شروط الاستخدام</div>\n                                     و\n                                    <div class=\"u-textPrimaryColor\" routerLink=\"{{'/privacy'}}\">اتفاقية الخصوصية</div>\n                                </label>\n                            </div>\n                            <div class=\"AddNewForm-btn\" [ngStyle]=\"{'background-color':  isAgree ? '#257310' : '#257310a1'}\" (click)=\"addAdvertising()\">\n                                إضافة إعلان\n                            </div>\n                        </div>\n\n\n                    </div>\n\n                </div>\n                <div class=\"ItemsContainer-loader\" style=\"width:  100%;position:  absolute;height:  100%;\" [ngClass]=\"{'hidden':loader==0}\">\n                    <img src=\"assets/imgs/spinner.svg\" alt=\"Kiwi standing on oval\">\n                </div>\n            </div>\n        </div>\n\n        <!--Below main container end-->\n\n\n    </div>\n\n</div>\n<!--\n<div class=\"Footer\">\n\n    <div class=\"Footer-about\">\n        <div class=\"Footer-about-title\">\n            عن دلال\n        </div>\n        <div class=\"Footer-about-body\">\n            شرح بسيط عن دلال ...<br> الموقع الأفضل للبيع و الشراء عبر الانترنت\n        </div>\n        <div class=\"Footer-about-bar\">\n            <div class=\"Footer-about-bar-item\">\n                شروط الاستخدام\n            </div>\n            <div class=\"Footer-about-bar-item\">\n                سياسية الخصوصية\n            </div>\n            <div class=\"Footer-about-bar-item\">\n                تواصل معنا\n            </div>\n        </div>\n    </div>\n    <div class=\"Footer-contact\">\n        <div class=\"Footer-contact-title\">\n            تواصل معنا على.....\n        </div>\n        <div class=\"Footer-contact-icons\">\n            <div class=\"Footer-contact-icon\" style=\"background-image: url('../imgs/facebook.svg');\">\n\n            </div>\n            <div class=\"Footer-contact-icon\" style=\"background-image: url('../imgs/insta.svg');\">\n\n            </div>\n        </div>\n\n    </div>\n    <div class=\"Footer-right\">\n\n        <div class=\"Footer-right-text\">\n            All Rights Reserved\n        </div>\n        <div class=\"Footer-right-logo\">\n            <img src=\"../imgs/logo.png\" alt=\"\">\n        </div>\n    </div>\n</div>-->"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_global_service__ = __webpack_require__("../../../../../src/app/Services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_login_service__ = __webpack_require__("../../../../../src/app/Services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_call_api_service__ = __webpack_require__("../../../../../src/app/Services/call-api.service.ts");
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




var AddAdvertisingComponent = /** @class */ (function () {
    function AddAdvertisingComponent(globalSer, APIServ, loginSer) {
        this.globalSer = globalSer;
        this.APIServ = APIServ;
        this.loginSer = loginSer;
        this.keyFilter = [];
        this.search = {};
        this.isAgree = false;
        this.images = [];
        this.imageOnLoad = [];
        this.search['fields'] = [];
        this.loader = false;
    }
    AddAdvertisingComponent.prototype.ngOnInit = function () {
        var _this = this;
        $("html, body").animate({ scrollTop: 0 }, "slow");
        this.APIServ.get("cities").subscribe(function (data) {
            _this.cities = data;
        });
        this.APIServ.get("categories?filter=%7B%22include%22%3A[%22subCategories%22]%7D").subscribe(function (data) {
            _this.categories = data;
        });
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
    AddAdvertisingComponent.prototype.onChange = function (event) {
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
        this.APIServ.uploadImage("files/images/upload", event.target.files, files.length).subscribe(function (data) {
            _this.imageOnLoad = [];
            data.forEach(function (element) {
                _this.images.push(element);
            });
        });
    };
    AddAdvertisingComponent.prototype.changeCategory = function (categortID) {
        this.subCategories = this.categories.find(function (x) { return x.id == categortID; }).subCategories;
        this.keyFilter = [];
        this.search['fields'] = [];
    };
    AddAdvertisingComponent.prototype.changeSubCategory = function (subCategoryID) {
        var _this = this;
        this.search['fields'] = [];
        this.keyFilter = this.categories.find(function (x) { return x.id == _this.search["categoryId"]; }).subCategories.find(function (y) { return y.id == subCategoryID; }).fields;
        this.keyFilter.forEach(function (element, index) {
            _this.search['fields'][index] = {};
        });
    };
    AddAdvertisingComponent.prototype.openSelectImage = function () {
        document.getElementById('files').click();
    };
    AddAdvertisingComponent.prototype.addAdvertising = function () {
        var _this = this;
        if (this.isAgree) {
            var fieldName_1 = "";
            if (this.search['address'] == "" || this.search['address'] == null) {
                fieldName_1 = "عنوان الإعلان";
            }
            else if (this.search['price'] == "" || this.search['price'] == null) {
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
            this.keyFilter.forEach(function (element, index) {
                _this.search['fields'][index].key = element.key;
                _this.search['fields'][index].type = element.type;
                if ((_this.search['fields'][index].value == "" || _this.search['fields'][index].value == null) && fieldName_1 == "") {
                    fieldName_1 = element.key;
                }
            });
            this.search['images'] = this.images;
            if (this.search['images'].length == 0 && fieldName_1 == "") {
                fieldName_1 = "الصور";
            }
            this.search['ownerId'] = this.loginSer.getUserId();
            if (fieldName_1 == "") {
                this.loader = true;
                this.APIServ.post("advertisemets", this.search).subscribe(function (data) {
                    // this.globalSer.goTo("detail/" + data.id)
                    _this.loader = false;
                    if (_this.APIServ.getErrorCode() == 0) {
                        _this.globalSer.goTo("detail/" + data.id);
                    }
                    else if (_this.APIServ.getErrorCode() == 403) {
                        _this.APIServ.setErrorCode(0);
                        _this.globalSer.errorDialog("فشل إضافة إعلان", "الرجاء التأكد من أن الحساب مفعل");
                    }
                });
            }
            else {
                this.globalSer.errorDialog(" خطأ إدخال", "الرجاء التحقق من ملئ " + fieldName_1 + " بالقيمه المناسبه ");
            }
        }
    };
    AddAdvertisingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'add-advertising',
            template: __webpack_require__("../../../../../src/app/add-advertising/add-advertising.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-advertising/add-advertising.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__Services_global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_2__Services_call_api_service__["a" /* CallApiService */], __WEBPACK_IMPORTED_MODULE_1__Services_login_service__["a" /* LoginService */]])
    ], AddAdvertisingComponent);
    return AddAdvertisingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/advertising/advertising.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\n<div class=\"MainContainer\">\n  <div class=\"HeaderBackground\">\n    <header></header>\n\n    <div class=\"Triangle Triangle--pages\">\n    </div>\n    <div class=\"Triangle--spacer\"></div>\n  </div>\n  <div class=\"Content\" *ngIf=\"advertisemet.images!=null\">\n    <div class=\"GridContainer\">\n      <div class=\"HeaderBoxContianer HeaderBoxContianer--detailspage\">\n        <div class=\"HeaderBox HeaderBox--detailspage\">\n          <div class=\"HeaderBox--detailspage-image\" [ngStyle]=\"{'background-image': 'url(' +advertisemet.images[0] + ')'}\">\n          </div>\n          <div class=\"HeaderBox--detailspage-body\">\n            <div class=\"HeaderBox--detailspage-body-header\">\n              <div class=\"HeaderBox--detailspage-body-header-title\">\n                {{advertisemet.title}}\n              </div>\n\n            </div>\n            <div class=\"HeaderBox--detailspage-body-footer\">\n              <div class=\"HeaderBox--detailspage-body-footer-views\">\n                {{advertisemet.viewsCount}}\n              </div>\n              <div class=\"HeaderBox--detailspage-body-footer-date\">\n                <!--10/10/2015-->\n                {{advertisemet.createdAt | date : \"dd/MM/yyyy\"}}\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"HeaderBox HeaderBox--detailspage HeaderBox--stretch\">\n          <div class=\"HeaderBox--detailspage-pricecontainer\">\n            <div class=\"HeaderBox--detailspage-pricecontainer-num\">{{advertisemet.price |number}} </div>\n            <div class=\"HeaderBox--detailspage-pricecontainer-text\"> ل.س</div>\n          </div>\n          <div class=\"HeaderBox--detailspage-btncontainer\">\n            <div class=\"HeaderBox--detailspage-callusbtn\" (click)=\"openCommunicationDialog()\">\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"AddDetailsContainer\">\n      <div class=\"AddDetailsForm\">\n        <div class=\"AddDetailsForm-column\">\n          <div class=\"AddDetailsForm-header\">\n            <div class=\"AddDetailsForm-header-title\">\n              {{advertisemet.category.title}}\n            </div>\n          </div>\n          <div class=\"AddDetailsForm-category\">\n            <div class=\"AddDetailsForm-category-title\">\n              {{advertisemet.subCategory.title}}\n            </div>\n            <div class=\"AddDetailsForm-category-subcat\">\n              {{advertisemet.address}}\n            </div>\n          </div>\n          <div class=\"AddDetailsForm-inputcontainer\">\n          </div>\n\n          <div class=\"AddDetailsForm-inputcontainer\" *ngFor=\"let oneField of advertisemet.fields\">\n            <label for=\"name\">{{oneField.key}}</label>\n            <div class=\"AddDetailsForm-inputcontainer-text\">\n              {{oneField.value}}\n            </div>\n          </div>\n          <!--<div class=\"AddDetailsForm-inputcontainer\">\n              <label for=\"name\">اسم المنتج</label>\n              <div class=\"AddDetailsForm-inputcontainer-text\">\n                قيمة الحقل\n              </div>\n            </div>\n            <div class=\"AddDetailsForm-inputcontainer\">\n              <label for=\"name\">اسم المنتج</label>\n              <div class=\"AddDetailsForm-inputcontainer-text\">\n                قيمة الحقل\n              </div>\n            </div>\n            <div class=\"AddDetailsForm-inputcontainer\">\n              <label for=\"name\">اسم المنتج</label>\n              <div class=\"AddDetailsForm-inputcontainer-text\">\n                قيمة الحقل\n              </div>\n            </div>\n            <div class=\"AddDetailsForm-inputcontainer\">\n              <label for=\"name\">اسم المنتج</label>\n              <div class=\"AddDetailsForm-inputcontainer-text\">\n                قيمة الحقل\n              </div>\n            </div>\n            <div class=\"AddDetailsForm-inputcontainer\">\n              <label for=\"name\">اسم المنتج</label>\n              <div class=\"AddDetailsForm-inputcontainer-text\">\n                قيمة الحقل\n              </div>\n            </div>-->\n        </div>\n        <div class=\"AddDetailsForm-column\">\n\n          <ngx-carousel [inputs]=\"carouselTile\" style=\"\n    width:  100%;\n    direction:  initial;\n\">\n            <!--*ngFor=\"let oneImage of advertisemet.images\"-->\n            <ngx-tile NgxCarouselItem *ngFor=\"let oneImage of advertisemet.images\">\n              <div (click)=\"openFullScreenImage(oneImage)\" [ngStyle]=\"{'background-image': 'url(' +oneImage + ')'}\" style=\"background-size: cover;\n    width: 100%;\n    height: 180px;\n    border-radius: 5px;\">\n              </div>\n            </ngx-tile>\n\n\n            <button NgxCarouselPrev class='leftRs'>&lt;</button>\n            <button NgxCarouselNext class='rightRs'>&gt;</button>\n          </ngx-carousel>\n          <div class=\"AddDetailsForm-imagescontainer AddDetailsForm-imagescontainer--lg\">\n            <div class=\"AddDetailsForm-imagescontainer-largeimage\" (click)=\"openFullScreenImage(advertisemet.images[0])\">\n              <img src=\"{{advertisemet.images[0]}}\" />\n            </div>\n          </div>\n          <div class=\"AddDetailsForm-imagescontainer AddDetailsForm-imagescontainer--sm\">\n            <div (click)=\"openFullScreenImage(oneImage)\" class=\"AddDetailsForm-imagescontainer-smallimage\" *ngFor=\"let oneImage of advertisemet.images\">\n              <img src=\"{{oneImage}}\" />\n            </div>\n          </div>\n          <div class=\"AddDetailsForm-pricepontainer\">\n            <div class=\"AddDetailsForm-pricepontainer-num\">{{advertisemet.price |number}}</div>\n            <div class=\"AddDetailsForm-pricepontainer-text\"> ل.س</div>\n          </div>\n          <div class=\"AddDetailsForm-buttonscontainers\">\n            <div (click)=\"openCommunicationDialog()\" class=\"AddDetailsForm-inputcontainer AddDetailsForm-inputcontainer--btn  AddDetailsForm-btn AddDetailsForm-btn--contact \">\n              التواصل مع البائع\n            </div>\n\n            <div class=\"AddDetailsForm-inputcontainer AddDetailsForm-inputcontainer--btn  \">\n              <select (change)=\"makeReport($event.target.value)\" class=\"AddDetailsForm-inputcontainer-select  AddNewForm-down  AddDetailsForm-inputcontainer-select--sm AddDetailsForm-inputcontainer-select--btnalign\">\n                <option [ngValue]=\"undefined\" selected>تبليغ</option>\n                    <option *ngFor=\"let oneReport of reports\" value=\"{{oneReport.id}}\" >{{oneReport.name}}</option>\t\n                 </select>\n              <!--<div (click)=\"addToBookmark()\" [ngClass]=\"{'hidden':advertisemet.isBookmarked || advertisemet.isBookmarked==null }\" class=\"AddDetailsForm-inputcontainer AddDetailsForm-btn AddDetailsForm-btn--addfav\">\n                  إضافة إلى المفضلة{{advertisemet.isBookmarked}}\n                </div>\n                <div (click)=\"deleteFromBookmark()\" [ngClass]=\"{'hidden':!advertisemet.isBookmarked || advertisemet.isBookmarked==null}\" class=\"AddDetailsForm-inputcontainer AddDetailsForm-btn AddDetailsForm-btn--addfav\">\n                  حذف من المفضلة{{advertisemet.isBookmarked}}\n                </div>-->\n              <div (click)=\"addToBookmark()\" *ngIf=\"!advertisemet.isBookmarked\" class=\"AddDetailsForm-inputcontainer AddDetailsForm-btn AddDetailsForm-btn--addfav\">\n                إضافة إلى المفضلة\n              </div>\n              <div (click)=\"deleteFromBookmark()\" *ngIf=\"advertisemet.isBookmarked\" class=\"AddDetailsForm-inputcontainer AddDetailsForm-btn AddDetailsForm-btn--addfav\">\n                حذف من المفضلة\n              </div>\n            </div>\n\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--Below main container end-->\n\n\n\n\n  <!--<div class=\"Footer\">\n\n      <div class=\"Footer-about\">\n        <div class=\"Footer-about-title\">\n          عن دلال\n        </div>\n        <div class=\"Footer-about-body\">\n          شرح بسيط عن دلال ...<br> الموقع الأفضل للبيع و الشراء عبر الانترنت\n        </div>\n        <div class=\"Footer-about-bar\">\n          <div class=\"Footer-about-bar-item\">\n            شروط الاستخدام\n          </div>\n          <div class=\"Footer-about-bar-item\">\n            سياسية الخصوصية\n          </div>\n          <div class=\"Footer-about-bar-item\">\n            تواصل معنا\n          </div>\n        </div>\n      </div>\n      <div class=\"Footer-contact\">\n        <div class=\"Footer-contact-title\">\n          تواصل معنا على.....\n        </div>\n        <div class=\"Footer-contact-icons\">\n          <div class=\"Footer-contact-icon\" style=\"background-image: url('../imgs/facebook.svg');\">\n\n          </div>\n          <div class=\"Footer-contact-icon\" style=\"background-image: url('../imgs/insta.svg');\">\n\n          </div>\n        </div>\n\n      </div>\n      <div class=\"Footer-right\">\n\n        <div class=\"Footer-right-text\">\n          All Rights Reserved\n        </div>\n        <div class=\"Footer-right-logo\">\n          <img src=\"../imgs/logo.png\" alt=\"\">\n        </div>\n      </div>\n    </div>-->\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_login_service__ = __webpack_require__("../../../../../src/app/Services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_global_service__ = __webpack_require__("../../../../../src/app/Services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_modal_report_modal_component__ = __webpack_require__("../../../../../src/app/report-modal/report-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__full_screen_modal_full_screen_modal_component__ = __webpack_require__("../../../../../src/app/full-screen-modal/full-screen-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__communiction_modal_communiction_modal_component__ = __webpack_require__("../../../../../src/app/communiction-modal/communiction-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Services_call_api_service__ = __webpack_require__("../../../../../src/app/Services/call-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function AdvertisingComponent(logInSer, globalServ, route, APIServ, dialog) {
        var _this = this;
        this.logInSer = logInSer;
        this.globalServ = globalServ;
        this.route = route;
        this.APIServ = APIServ;
        this.dialog = dialog;
        this.route.params.subscribe(function (addID) { return _this.addID = addID.addID; });
        this.advertisemet = {};
        this.APIServ.get("advertisemets/" + this.addID).subscribe(function (data) {
            _this.advertisemet = data;
        });
        this.APIServ.get("reports").subscribe(function (data) {
            _this.reports = data;
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
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__full_screen_modal_full_screen_modal_component__["a" /* FullScreenModalComponent */], {
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
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__communiction_modal_communiction_modal_component__["a" /* CommunictionModalComponent */], {
            // width: '35%',
            panelClass: 'communictioDialogStyle',
            data: { phone: this.advertisemet.phone }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result) {
                _this.globalServ.goTo("profile/" + _this.advertisemet.ownerId);
            }
        });
    };
    AdvertisingComponent.prototype.makeReport = function (reportId) {
        var _this = this;
        if (!this.logInSer.isLogin())
            this.headerChild.openSignInDialog();
        else {
            var reports = this.reports.find(function (x) { return x.id == reportId; });
            var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__report_modal_report_modal_component__["a" /* ReportModalComponent */], {
                data: { report: reports, userID: this.logInSer.getUserId(), addID: this.addID }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result) {
                    _this.globalServ.goTo("");
                }
            });
        }
    };
    AdvertisingComponent.prototype.addToBookmark = function () {
        var _this = this;
        if (this.logInSer.isLogin())
            this.APIServ.put("users/" + this.logInSer.getUserId() + "/bookmarks/rel/" + this.addID, { "ownerId": this.advertisemet.ownerId, "advertisementId": this.addID }).subscribe(function (data) {
                if (_this.APIServ.getErrorCode() == 0) {
                    _this.advertisemet.isBookmarked = true;
                    _this.globalServ.errorDialog("إضافة إعلان إلى المفضلة", "تمت الإضافة بنجاح");
                }
            });
        else {
            this.headerChild.openSignInDialog();
        }
    };
    AdvertisingComponent.prototype.deleteFromBookmark = function () {
        var _this = this;
        this.APIServ.delete("users/" + this.logInSer.getUserId() + "/bookmarks/rel/" + this.addID).subscribe(function (data) {
            if (_this.APIServ.getErrorCode() == 0) {
                _this.advertisemet.isBookmarked = false;
                _this.globalServ.errorDialog("حذف إعلان من المفضلة", "تم الحذف بنجاح");
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_0__header_header_component__["a" /* HeaderComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__header_header_component__["a" /* HeaderComponent */])
    ], AdvertisingComponent.prototype, "headerChild", void 0);
    AdvertisingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["n" /* Component */])({
            selector: 'advertising',
            template: __webpack_require__("../../../../../src/app/advertising/advertising.component.html"),
            styles: [__webpack_require__("../../../../../src/app/advertising/advertising.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_2__Services_global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_7__Services_call_api_service__["a" /* CallApiService */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatDialog */]])
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n<div class=\"Footer\">\n\n\t<div class=\"Footer-about\">\n\t\t<div class=\"Footer-about-title\">\n\t\t\tعن دلال\n\t\t</div>\n\t\t<div class=\"Footer-about-body\">\n\t\t\tشرح بسيط عن دلال ...<br> الموقع الأفضل للبيع و الشراء عبر الانترنت\n\t\t</div>\n\t\t<div class=\"Footer-about-bar\">\n\t\t\t<div class=\"Footer-about-bar-item cursorPointer\" routerLink=\"{{'/terms'}}\">\n\t\t\t\tشروط الاستخدام\n\t\t\t</div>\n\t\t\t<div class=\"Footer-about-bar-item cursorPointer\" routerLink=\"{{'/privacy'}}\" >\n\t\t\t\tسياسية الخصوصية\n\t\t\t</div>\n\t\t\t<div class=\"Footer-about-bar-item cursorPointer\" (click)=\"openContactUs()\">\n\t\t\t\tتواصل معنا\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"Footer-contact\">\n\t\t<div class=\"Footer-contact-title\">\n\t\t\tتواصل معنا على.....\n\t\t</div>\n\t\t<div class=\"Footer-contact-icons\">\n\t\t\t<a href=\"#\" class=\"Footer-contact-icon\" style=\"background-image: url('assets/imgs/facebook.svg');\">\n\n  </a>\n\t\t\t<a href=\"#\" class=\"Footer-contact-icon\" style=\"background-image: url('assets/imgs/insta.svg');\">\n\n  </a>\n\t\t</div>\n\n\t</div>\n\t<div class=\"Footer-right\">\n\n\t\t<div class=\"Footer-right-text\">\n\t\t\tAll Rights Reserved\n\t\t</div>\n\t\t<div class=\"Footer-right-logo\">\n\t\t\t<img src=\"assets/imgs/logo.png\" alt=\"\">\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact_us_modal_contact_us_modal_component__ = __webpack_require__("../../../../../src/app/contact-us-modal/contact-us-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_call_api_service__ = __webpack_require__("../../../../../src/app/Services/call-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_global_service__ = __webpack_require__("../../../../../src/app/Services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_login_service__ = __webpack_require__("../../../../../src/app/Services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
    function AppComponent(logInSer, globalServ, APIServ, dialog) {
        this.logInSer = logInSer;
        this.globalServ = globalServ;
        this.APIServ = APIServ;
        this.dialog = dialog;
    }
    AppComponent.prototype.openContactUs = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__contact_us_modal_contact_us_modal_component__["a" /* ContactUsModalComponent */], {});
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__Services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_2__Services_global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_1__Services_call_api_service__["a" /* CallApiService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatDialog */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activate_activate_component__ = __webpack_require__("../../../../../src/app/activate/activate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forget_password_modal_forget_password_modal_component__ = __webpack_require__("../../../../../src/app/forget-password-modal/forget-password-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_us_modal_contact_us_modal_component__ = __webpack_require__("../../../../../src/app/contact-us-modal/contact-us-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terms_terms_component__ = __webpack_require__("../../../../../src/app/terms/terms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__privacy_policy_privacy_policy_component__ = __webpack_require__("../../../../../src/app/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__change_password_change_password_component__ = __webpack_require__("../../../../../src/app/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__edit_profile_edit_profile_component__ = __webpack_require__("../../../../../src/app/edit-profile/edit-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__error_modal_error_modal_component__ = __webpack_require__("../../../../../src/app/error-modal/error-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__report_modal_report_modal_component__ = __webpack_require__("../../../../../src/app/report-modal/report-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__full_screen_modal_full_screen_modal_component__ = __webpack_require__("../../../../../src/app/full-screen-modal/full-screen-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Services_global_service__ = __webpack_require__("../../../../../src/app/Services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__add_advertising_add_advertising_component__ = __webpack_require__("../../../../../src/app/add-advertising/add-advertising.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__communiction_modal_communiction_modal_component__ = __webpack_require__("../../../../../src/app/communiction-modal/communiction-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__advertising_advertising_component__ = __webpack_require__("../../../../../src/app/advertising/advertising.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Services_call_api_service__ = __webpack_require__("../../../../../src/app/Services/call-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__sign_in_modal_sign_in_modal_component__ = __webpack_require__("../../../../../src/app/sign-in-modal/sign-in-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Services_login_service__ = __webpack_require__("../../../../../src/app/Services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__sign_up_modal_sign_up_modal_component__ = __webpack_require__("../../../../../src/app/sign-up-modal/sign-up-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_material_slider__ = __webpack_require__("../../../material/esm5/slider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_ngx_carousel__ = __webpack_require__("../../../../ngx-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_30__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_37__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_24__sign_up_modal_sign_up_modal_component__["a" /* SignUpModalComponent */], __WEBPACK_IMPORTED_MODULE_0__activate_activate_component__["a" /* ActivateComponent */], __WEBPACK_IMPORTED_MODULE_1__reset_password_reset_password_component__["a" /* ResetPasswordComponent */], __WEBPACK_IMPORTED_MODULE_2__forget_password_modal_forget_password_modal_component__["a" /* ForgetPasswordModalComponent */], __WEBPACK_IMPORTED_MODULE_3__contact_us_modal_contact_us_modal_component__["a" /* ContactUsModalComponent */], __WEBPACK_IMPORTED_MODULE_4__terms_terms_component__["a" /* TermsComponent */], __WEBPACK_IMPORTED_MODULE_5__privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */], __WEBPACK_IMPORTED_MODULE_6__change_password_change_password_component__["a" /* ChangePasswordComponent */], __WEBPACK_IMPORTED_MODULE_7__edit_profile_edit_profile_component__["a" /* EditProfileComponent */], __WEBPACK_IMPORTED_MODULE_8__error_modal_error_modal_component__["a" /* ErrorModalComponent */], __WEBPACK_IMPORTED_MODULE_9__report_modal_report_modal_component__["a" /* ReportModalComponent */], __WEBPACK_IMPORTED_MODULE_10__full_screen_modal_full_screen_modal_component__["a" /* FullScreenModalComponent */], __WEBPACK_IMPORTED_MODULE_20__sign_in_modal_sign_in_modal_component__["a" /* SignInModalComponent */], __WEBPACK_IMPORTED_MODULE_23__home_page_home_page_component__["a" /* HomePageComponent */], __WEBPACK_IMPORTED_MODULE_16__advertising_advertising_component__["a" /* AdvertisingComponent */], __WEBPACK_IMPORTED_MODULE_15__communiction_modal_communiction_modal_component__["a" /* CommunictionModalComponent */], __WEBPACK_IMPORTED_MODULE_13__add_advertising_add_advertising_component__["a" /* AddAdvertisingComponent */], __WEBPACK_IMPORTED_MODULE_14__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__["a" /* ProfileComponent */]
            ],
            imports: [
                // Main
                __WEBPACK_IMPORTED_MODULE_29__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_36__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_35__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_34__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_32_ngx_carousel__["a" /* NgxCarouselModule */],
                // Route
                __WEBPACK_IMPORTED_MODULE_19__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_routes__["a" /* routes */], { enableTracing: true })
                // material
                ,
                __WEBPACK_IMPORTED_MODULE_25__angular_material_dialog__["c" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_27__angular_material__["b" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_28__angular_material_input__["b" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_31_ngx_infinite_scroll__["a" /* InfiniteScrollModule */], __WEBPACK_IMPORTED_MODULE_26__angular_material_slider__["a" /* MatSliderModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_6__change_password_change_password_component__["a" /* ChangePasswordComponent */], __WEBPACK_IMPORTED_MODULE_2__forget_password_modal_forget_password_modal_component__["a" /* ForgetPasswordModalComponent */], __WEBPACK_IMPORTED_MODULE_3__contact_us_modal_contact_us_modal_component__["a" /* ContactUsModalComponent */], __WEBPACK_IMPORTED_MODULE_7__edit_profile_edit_profile_component__["a" /* EditProfileComponent */], __WEBPACK_IMPORTED_MODULE_24__sign_up_modal_sign_up_modal_component__["a" /* SignUpModalComponent */], __WEBPACK_IMPORTED_MODULE_8__error_modal_error_modal_component__["a" /* ErrorModalComponent */], __WEBPACK_IMPORTED_MODULE_9__report_modal_report_modal_component__["a" /* ReportModalComponent */], __WEBPACK_IMPORTED_MODULE_20__sign_in_modal_sign_in_modal_component__["a" /* SignInModalComponent */], __WEBPACK_IMPORTED_MODULE_15__communiction_modal_communiction_modal_component__["a" /* CommunictionModalComponent */], __WEBPACK_IMPORTED_MODULE_10__full_screen_modal_full_screen_modal_component__["a" /* FullScreenModalComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_21_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_22__Services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_17__Services_call_api_service__["a" /* CallApiService */], __WEBPACK_IMPORTED_MODULE_11__Services_global_service__["a" /* GlobalService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_37__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activate_activate_component__ = __webpack_require__("../../../../../src/app/activate/activate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__privacy_policy_privacy_policy_component__ = __webpack_require__("../../../../../src/app/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__terms_terms_component__ = __webpack_require__("../../../../../src/app/terms/terms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_advertising_add_advertising_component__ = __webpack_require__("../../../../../src/app/add-advertising/add-advertising.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__advertising_advertising_component__ = __webpack_require__("../../../../../src/app/advertising/advertising.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");








// export const routing = RouterModule.forRoot(APP_ROUTES, { enableTracing: true })
var routes = [
    {
        path: 'detail/:addID',
        component: __WEBPACK_IMPORTED_MODULE_6__advertising_advertising_component__["a" /* AdvertisingComponent */]
    }, {
        path: "home",
        component: __WEBPACK_IMPORTED_MODULE_7__home_page_home_page_component__["a" /* HomePageComponent */]
    }, {
        path: "addAdvertising",
        component: __WEBPACK_IMPORTED_MODULE_5__add_advertising_add_advertising_component__["a" /* AddAdvertisingComponent */]
    }, {
        path: "profile/:userID",
        component: __WEBPACK_IMPORTED_MODULE_4__profile_profile_component__["a" /* ProfileComponent */]
    }, {
        path: "myprofile/:userID",
        component: __WEBPACK_IMPORTED_MODULE_4__profile_profile_component__["a" /* ProfileComponent */]
    }, {
        path: "terms",
        component: __WEBPACK_IMPORTED_MODULE_3__terms_terms_component__["a" /* TermsComponent */]
    }, {
        path: "privacy",
        component: __WEBPACK_IMPORTED_MODULE_2__privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */]
    }, {
        path: "login/reset-password",
        component: __WEBPACK_IMPORTED_MODULE_1__reset_password_reset_password_component__["a" /* ResetPasswordComponent */]
    }, {
        path: "login/verify",
        component: __WEBPACK_IMPORTED_MODULE_0__activate_activate_component__["a" /* ActivateComponent */]
    }, {
        path: "**",
        component: __WEBPACK_IMPORTED_MODULE_7__home_page_home_page_component__["a" /* HomePageComponent */]
    },
];


/***/ }),

/***/ "../../../../../src/app/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\n<!--component html goes here -->\n<!--component html goes here -->\n<!--<div id=\"\" class=\"ModalContainer\">\n\t\t\t<div class=\"SignUpModuleContainer\">-->\n\n<div class=\"SignUpModule\">\n    <div class=\"SignUpModule-header\" style=\"direction: rtl;\">\n        <div class=\"SignUpModule-header-title\">\n            حساب جديد\n        </div>\n        <div class=\"SignUpModule-header-close\" (click)=\"closeModal()\">\n        </div>\n    </div>\n    <div class=\"SignUpModule-body\">\n                <label for=\"name\" style=\"color: red\">{{message}}</label>\n\n        <div class=\"SignUpModule-body-inputcontainer\">\n            <label for=\"name\">كلمة السر القديمة</label>\n           \n            <input [(ngModel)]=\"password.oldPassword\" (focus)=\"message='';\" class=\"SignUpModule-body-inputcontainer-text\" type=\"password\" value=\"\" name=\"name\">\n        </div>\n         <div class=\"SignUpModule-body-inputcontainer\">\n            <label for=\"name\">كلمة السر الحديثة</label>\n            <input [(ngModel)]=\"password.newPassword\" (focus)=\"message='';\" class=\"SignUpModule-body-inputcontainer-text\" type=\"password\" value=\"\" name=\"name\">\n        </div>\n        <button (click)=\"editPassword()\" class=\"SignUpModule-body-inputcontainer SignUpModule-body-btn\">\n            تعديل كلمة السر\n        </button>\n    </div>\n</div>\n<!--</div>\n\t\t</div>-->"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_call_api_service__ = __webpack_require__("../../../../../src/app/Services/call-api.service.ts");
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



var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(dialogRef, APIServ) {
        this.dialogRef = dialogRef;
        this.APIServ = APIServ;
        this.message = "";
        this.password = { "oldPassword": "", "newPassword": "" };
    }
    ChangePasswordComponent.prototype.editPassword = function () {
        var _this = this;
        this.APIServ.post("users/change-password", this.password).subscribe(function (data) {
            if (_this.APIServ.getErrorCode() == 0) {
                alert("Success");
                // this.LoginSer.logIn(data);
            }
            else if (_this.APIServ.getErrorCode() == 400) {
                _this.message = "كلمة السر الحالية خاطئة";
            }
        });
    };
    ChangePasswordComponent.prototype.closeModal = function () {
        this.dialogRef.close();
    };
    ChangePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'change-password',
            template: __webpack_require__("../../../../../src/app/change-password/change-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/change-password/change-password.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_0__Services_call_api_service__["a" /* CallApiService */]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/communiction-modal/communiction-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"SignInModule\">\n    <div class=\"SignInModule-header\" style=\"direction: rtl;\">\n        <div class=\"SignInModule-header-title\">\n            معلومات الاتصال\n        </div>\n        <div class=\"SignInModule-header-close\" (click)=\"closeModal()\">\n        </div>\n    </div>\n    <div class=\"SignInModule-body\">\n        <label>  {{data.phone}}:للتواصل مع صاحب الإعلان </label> \n        <br>\n        <label>\n        أو عن طريق زيارة \n        <a (click)=\"goToPage()\" style=\"color: #257310\">صفحته الشخصية</a>\n        </label>\n    </div>\n</div>"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'communiction-modal',
            template: __webpack_require__("../../../../../src/app/communiction-modal/communiction-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/communiction-modal/communiction-modal.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */], Object])
    ], CommunictionModalComponent);
    return CommunictionModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contact-us-modal/contact-us-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\n<!--component html goes here -->\n<!--<div id=\"\" class=\"ModalContainer\">\n\t\t\t<div class=\"SignInModuleContainer\">-->\n<div class=\"SignInModule\">\n    <div class=\"SignInModule-header\" style=\"direction: rtl;\">\n        <div class=\"SignInModule-header-title\">\n            تواصل معنا\n        </div>\n        <div class=\"SignInModule-header-close\" (click)=\"closeModal()\">\n        </div>\n    </div>\n    <div class=\"SignInModule-body\">\n        <label for=\"name\" style=\"color: red\">{{message}}</label>\n        <div class=\"SignInModule-body-inputcontainer\">\n            <label for=\"name\">البريد الإلكتروني</label>\n            <input [(ngModel)]=\"mail.email\" (focus)=\"message='';\" class=\"SignInModule-body-inputcontainer-text\" type=\"email\" value=\"\"\n                name=\"name\">\n        </div>\n        <div class=\"SignInModule-body-inputcontainer\">\n            <label for=\"name\">الموضوع</label>\n            <input [(ngModel)]=\"mail.subject\" (focus)=\"message='';\" class=\"SignInModule-body-inputcontainer-text\" type=\"text\" value=\"\"\n                name=\"name\">\n        </div>\n        <div class=\"SignInModule-body-inputcontainer\">\n            <label for=\"name\">الرسالة</label>\n            <textarea style=\"resize: none;height: 130px;\" [(ngModel)]=\"mail.message\" (focus)=\"message='';\" class=\"SignInModule-body-inputcontainer-text\"\n                value=\"\" name=\"name\"></textarea>\n        </div>\n\n        <div (click)=\"send()\" class=\"SignInModule-body-inputcontainer SignInModule-body-btn\">\n            إرسال\n        </div>\n    </div>\n</div>\n\n<!--</div>\n\t\t</div>-->"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_call_api_service__ = __webpack_require__("../../../../../src/app/Services/call-api.service.ts");
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



var ContactUsModalComponent = /** @class */ (function () {
    function ContactUsModalComponent(APIServ, dialogRef, data) {
        this.APIServ = APIServ;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ContactUsModalComponent.prototype.send = function () {
    };
    ContactUsModalComponent.prototype.closeModal = function () {
        this.dialogRef.close();
    };
    ContactUsModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'contact-us-modal',
            template: __webpack_require__("../../../../../src/app/contact-us-modal/contact-us-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact-us-modal/contact-us-modal.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_call_api_service__["a" /* CallApiService */], __WEBPACK_IMPORTED_MODULE_0__angular_material_dialog__["d" /* MatDialogRef */], Object])
    ], ContactUsModalComponent);
    return ContactUsModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/edit-profile/edit-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\n<!--component html goes here -->\n<!--<div id=\"\" class=\"ModalContainer\">\n\t\t\t<div class=\"SignUpModuleContainer\">-->\n\n<div class=\"SignUpModule\">\n    <div class=\"SignUpModule-header\" style=\"direction: rtl;\">\n        <div class=\"SignUpModule-header-title\">\n            حساب جديد\n        </div>\n        <div class=\"SignUpModule-header-close\" (click)=\"closeModal()\">\n        </div>\n    </div>\n    <div class=\"SignUpModule-body\">\n        \n        <label for=\"name\" style=\"color: red\">{{message}}</label>\n\n        <div class=\"SignUpModule-body-inputcontainer\">\n            <label for=\"name\">الأسم</label>\n            <input [(ngModel)]=\"newUser.firstName\"(focus)=\"message='';\" class=\"SignUpModule-body-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\n        </div>\n        <div class=\"SignUpModule-body-inputcontainer\">\n            <label for=\"name\">الرقم</label>\n            <input [(ngModel)]=\"newUser.phone\"(focus)=\"message='';\" class=\"SignUpModule-body-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\n        </div>\n        <div class=\"SignUpModule-body-inputcontainer\">\n            <label for=\"name\">الايميل</label>\n            <input [(ngModel)]=\"newUser.email\" (focus)=\"message='';\"class=\"SignUpModule-body-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\n        </div>\n        <!--<div class=\"SignUpModule-body-inputcontainer\">\n            <label for=\"name\">كلمة السر</label>\n            <input [(ngModel)]=\"newUser.password\" (focus)=\"message='';\" class=\"SignUpModule-body-inputcontainer-text\" type=\"password\" value=\"\" name=\"name\">\n        </div>-->\n        <button (click)=\"editProfile()\" class=\"SignUpModule-body-inputcontainer SignUpModule-body-btn\">\n            إنشاء الحساب\n        </button>\n    </div>\n    <div class=\"SignUpModule-footer\">\n        تريد تغيير كلمة السر\n        <div class=\"u-textPrimaryColor\" (click)=\"changePassword()\">\n            تغيير كلمة السر .\n        </div>\n    </div>\n\n</div>\n<!--</div>\n\t\t</div>-->"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_call_api_service__ = __webpack_require__("../../../../../src/app/Services/call-api.service.ts");
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
    function EditProfileComponent(route, thisDialog, data, APIServ) {
        this.route = route;
        this.thisDialog = thisDialog;
        this.data = data;
        this.APIServ = APIServ;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.APIServ.get("users/me").subscribe(function (data) {
            _this.newUser = data;
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
        // else if (this.newUser['password'] == "" || this.newUser['password'] == null) {
        //     this.message = "كلمة السر"
        // }
        if (this.message != "") {
            this.message = "الرجاء إدخال حقل " + this.message;
        }
        else {
            this.APIServ.put("/users/" + this.newUser.id, this.newUser).subscribe(function (data) {
                if (_this.APIServ.getErrorCode() == 0) {
                    alert("Success");
                    // this.LoginSer.logIn(data);
                }
                else if (_this.APIServ.getErrorCode() == 422) {
                    _this.message = "هذا البريد الالكتروني مسجل مسبقا";
                    _this.APIServ.setErrorCode(0);
                }
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'edit-profile',
            template: __webpack_require__("../../../../../src/app/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit-profile/edit-profile.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__["d" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__Services_call_api_service__["a" /* CallApiService */]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/error-modal/error-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\n<div class=\"SignInModule\">\n    <div class=\"SignInModule-header\" style=\"direction: rtl;\">\n        <div class=\"SignInModule-header-title\">\n            {{title}}\n        </div>\n        <div class=\"SignInModule-header-close\" (click)=\"closeModal()\">\n        </div>\n    </div>\n    <div class=\"SignInModule-body\">\n        <div class=\"SignInModule-body-inputcontainer\">\n            <label for=\"name\">{{containt}}</label>\n        </div>\n        \n        <div (click)=\"cansel()\" class=\"SignInModule-body-inputcontainer SignInModule-body-btn\">\n            تم\n        </div>\n\n\n    </div>\n</div>"

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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'error-modal',
            template: __webpack_require__("../../../../../src/app/error-modal/error-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/error-modal/error-modal.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_material_dialog__["d" /* MatDialogRef */], Object])
    ], ErrorModalComponent);
    return ErrorModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/forget-password-modal/forget-password-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\n<!--component html goes here -->\n<!--<div id=\"\" class=\"ModalContainer\">\n\t\t\t<div class=\"SignInModuleContainer\">-->\n<div class=\"SignInModule\">\n\t<div class=\"SignInModule-header\" style=\"direction: rtl;\">\n\t\t<div class=\"SignInModule-header-title\">\n\t\t\tنسيت كلمة السر\n\t\t</div>\n\t\t<div class=\"SignInModule-header-close\" (click)=\"closeModal()\">\n\t\t</div>\n\t</div>\n\t<div class=\"SignInModule-body\">\n\t\t\t<label for=\"name\" style=\"color: red\">{{message}}</label>\n\t\t<div class=\"SignInModule-body-inputcontainer\">\n\t\t\t<label for=\"name\">اسم المستخدم</label>\n\t\t\t<input [(ngModel)]=\"user.email\" (focus)=\"message='';\" class=\"SignInModule-body-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\n\t\t</div>\n\t\t<div (click)=\"sendEmail()\" class=\"SignInModule-body-inputcontainer SignInModule-body-btn\">\n\t\t\tإرسال لأغعادة تعيين كلمة السر\n\t\t</div>\n\t</div>\n</div>\n\n<!--</div>\n\t\t</div>-->"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_call_api_service__ = __webpack_require__("../../../../../src/app/Services/call-api.service.ts");
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
    function ForgetPasswordModalComponent(APIServ, dialogRef, data) {
        this.APIServ = APIServ;
        this.dialogRef = dialogRef;
        this.data = data;
        this.user = {};
    }
    ForgetPasswordModalComponent.prototype.closeModal = function () {
        this.dialogRef.close();
    };
    ForgetPasswordModalComponent.prototype.sendEmail = function () {
        var _this = this;
        this.APIServ.post("users/reset", this.user).subscribe(function (data) {
            if (_this.APIServ.getErrorCode() == 0) {
                _this.message = "الرجاء التحقق في البريد الألكتروني الخاص بك";
            }
            else if (_this.APIServ.getErrorCode() == 401) {
                _this.message = "لرجاء التحقق من اسم المستخدم و كلمه المرور";
                _this.APIServ.setErrorCode(0);
            }
        });
    };
    ForgetPasswordModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'forget-password-modal',
            template: __webpack_require__("../../../../../src/app/forget-password-modal/forget-password-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/forget-password-modal/forget-password-modal.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_call_api_service__["a" /* CallApiService */], __WEBPACK_IMPORTED_MODULE_0__angular_material_dialog__["d" /* MatDialogRef */], Object])
    ], ForgetPasswordModalComponent);
    return ForgetPasswordModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/full-screen-modal/full-screen-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"dialog\">\n    <img src=\"{{URL}}\"></div>"

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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'full-screen-modal',
            template: __webpack_require__("../../../../../src/app/full-screen-modal/full-screen-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/full-screen-modal/full-screen-modal.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_material_dialog__["d" /* MatDialogRef */], Object])
    ], FullScreenModalComponent);
    return FullScreenModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\n<div class=\"Header\">\n\t<div class=\"TopMenu\">\n\t\t<div class=\"u-flex u-flexRowReverse u-flexAlignCenter u-flexJustifyStart  u-fill\">\n\t\t\t<i class=\"TopMenu-item TopMenu-item--iconDots\" (click)=\"openMenu()\" *ngIf=\"isLogin\">\n\t\t\t\t\t\t\t<ul class=\"DropMenu DropMenu-Top\">\n\t\t\t\t\t\t\t\t<li class=\"DropMenu-item\">شروط الإستخدام</li>\n\t\t\t\t\t\t\t\t<li class=\"DropMenu-divider\"></li>\n\t\t\t\t\t\t\t\t<li class=\"DropMenu-item\">سياسة الخصوصية</li>\n\t\t\t\t\t\t\t\t<li class=\"DropMenu-divider\"></li>\n\t\t\t\t\t\t\t\t<li class=\"DropMenu-item\" (click)=\"logout()\">تسجيل الخروج</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</i>\n\t\t\t<a (click)=\"hrefAddAdv()\" class=\"TopMenu-item u-customBtn\">\n\t\t\t\t\t\t<img class=\"\" src=\"assets/imgs/w-plus.svg\" alt=\"\">\n\t\t\t\t\t\t<span class=\"u-hideOnMedium u-after10p\" >إضافة إعلان</span>\n\t\t\t\t\t</a>\n\t\t\t<div href=\"#\" class=\"u-after10p\" *ngIf=\"isLogin\">\n\t\t\t\t<figure class=\"Avatar Avatar--lg cursorPointer\">\n\t\t\t\t\t<img src=\"assets/imgs/defult_img.jpg\" alt=\"avatar\" routerLink=\"{{'/myprofile/me'}}\">\n\t\t\t\t</figure>\n\t\t\t</div>\n\t\t\t<i class=\"TopMenu-item TopMenu-item--iconBell\" (click)=\"toggleNot()\" *ngIf=\"isLogin\">\n\t\t\t\t\t\t\t\t<span class=\"Badge Badge--center\"  [attr.data-badge]=\"unreadNotBeh\"></span>\n\t\t\t\t\t\t\t\t<ul class=\"NotificationMenu NotificationMenuTop\"   data-infinite-scroll debounce [infiniteScrollDistance]=\"scrollDistance\" [infiniteScrollUpDistance]=\"scrollUpDistance\"\n [infiniteScrollThrottle]=\"throttle\" [scrollWindow]=\"false\" (scrolled)=\"onScrollDownNoti()\">\n\t\t\t\t\t\t\t\t\t<div *ngFor=\"let oneNot of notificationBeh\">\n\t\t\t\t\t\t\t\t\t\t<!--routerLink=\"{{'/detail/'+oneNot.advertisement.id}}\"-->\n\t\t\t\t\t\t\t\t<li class=\"NotificationMenu-item\" [ngClass]=\"{'isReadNot' : !oneNot.isRead }\"  (click)=\"visitNot(oneNot.isRead,5,oneNot.advertisement.id)\" >\n\t\t\t\t\t\t\t\t\t<div href=\"#\" class=\"u-after10p u-inlineBlock\">\n\t\t\t\t\t\t              <figure class=\"Avatar Avatar--lg\">\n\t\t\t\t\t\t                <img src=\"{{oneNot.advertisement.images[0]}}\" alt=\"avatar\">\n\t\t\t\t\t\t              </figure>\n\t\t\t\t\t\t            </div>\n\t\t\t\t\t\t            <div class=\"u-inlineBlock u-alignTop\">\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\tقام\n\t\t\t\t\t\t\t\t\t\t\t<span> {{oneNot.advertisement.owner.firstName}} </span>\n\t\t\t\t\t\t\t\t\t\t \t بإضافة إعلان جديد\n\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t<span class=\"NotificationMenu-item-date\">{{oneNot.createdAt | date:'yyyy/MM/dd'}}</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"NotificationMenu-divider\"></li>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!--<li class=\"NotificationMenu-divider\"></li>\n\t\t\t\t\t\t\t\t<li class=\"NotificationMenu-item\">\n\t\t\t\t\t\t\t\t\t<div href=\"#\" class=\"u-after10p u-inlineBlock\">\n\t\t\t\t\t\t              <figure class=\"Avatar Avatar--lg\">\n\t\t\t\t\t\t                <img src=\"assets/imgs/avatar.jpg\" alt=\"avatar\">\n\t\t\t\t\t\t              </figure>\n\t\t\t\t\t\t            </div>\n\t\t\t\t\t\t            <div class=\"u-inlineBlock u-alignTop\">\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\tقام\n\t\t\t\t\t\t\t\t\t\t\t<span> أبو عبدو </span>\n\t\t\t\t\t\t\t\t\t\t \t بإضافة إعلان جديد\n\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t<span class=\"NotificationMenu-item-date\">12/12/2018</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"NotificationMenu-divider\"></li>\n\t\t\t\t\t\t\t\t<li class=\"NotificationMenu-item\">\n\t\t\t\t\t\t\t\t\t<div href=\"#\" class=\"u-after10p u-inlineBlock\">\n\t\t\t\t\t\t              <figure class=\"Avatar Avatar--lg\">\n\t\t\t\t\t\t                <img src=\"assets/imgs/avatar.jpg\" alt=\"avatar\">\n\t\t\t\t\t\t              </figure>\n\t\t\t\t\t\t            </div>\n\t\t\t\t\t\t            <div class=\"u-inlineBlock u-alignTop\">\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\tقام\n\t\t\t\t\t\t\t\t\t\t\t<span> أبو عبدو </span>\n\t\t\t\t\t\t\t\t\t\t \t بإضافة إعلان جديد\n\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t<span class=\"NotificationMenu-item-date\">12/12/2018</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>-->\n\t\t\t\t\t\t\t</ul>\n\t\t\t            </i>\n\t\t\t<a class=\"TopMenu-item\" (click)=\"openSignInDialog()\" *ngIf=\"!isLogin\">الدخول</a>\n\t\t\t<a class=\"TopMenu-item\" (click)=\"openSignUpDialog()\" *ngIf=\"!isLogin\">حساب جديد</a>\n\t\t</div>\n\t\t<div class=\"u-flexAlignSelfStart\">\n\t\t\t<img class=\"TopMenu-item TopMenu-item--logo cursorPointer\" routerLink=\"{{''}}\" src=\"assets/imgs/logo.png\" alt=\"\">\n\t\t</div>\n\n\t</div>\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forget_password_modal_forget_password_modal_component__ = __webpack_require__("../../../../../src/app/forget-password-modal/forget-password-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_global_service__ = __webpack_require__("../../../../../src/app/Services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up_modal_sign_up_modal_component__ = __webpack_require__("../../../../../src/app/sign-up-modal/sign-up-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_in_modal_sign_in_modal_component__ = __webpack_require__("../../../../../src/app/sign-in-modal/sign-in-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_login_service__ = __webpack_require__("../../../../../src/app/Services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Services_call_api_service__ = __webpack_require__("../../../../../src/app/Services/call-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    function HeaderComponent(globalServ, dialog, loginSer, APIServ) {
        this.globalServ = globalServ;
        this.dialog = dialog;
        this.loginSer = loginSer;
        this.APIServ = APIServ;
        this.notificationBeh = [];
        this.array = [];
        this.throttle = 100;
        this.scrollDistance = 2;
        this.scrollUpDistance = 2;
        this.isLogin = this.loginSer.isLogin();
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
            query = { "order": "createdAt ASC", "limit": limit, "skip": skip, "include": ["advertisement"] };
            this.APIServ.get("users/" + this.loginSer.getUserId() + "/notifications?filter=" + JSON.stringify(query)).subscribe(function (data) {
                for (var index = 0; index < data.length; index++) {
                    var element = data[index];
                    if (!element.isRead) {
                        _this.globalServ.editUnreadNotBeh(_this.unreadNotBeh + 1);
                    }
                    if (element.advertisement)
                        _this.notificationBeh.push(element);
                }
                _this.globalServ.editNotificationBeh(_this.notificationBeh);
            });
        }
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalServ.castUnreadNotBeh.subscribe(function (unreadNotBeh) { return _this.unreadNotBeh = unreadNotBeh; });
        this.globalServ.castNotificationBeh.subscribe(function (notificationBeh) { return _this.notificationBeh = notificationBeh; });
        this.getNotification();
    };
    HeaderComponent.prototype.visitNot = function (isRead, idNot, idAdd) {
        if (isRead) {
            this.globalServ.goTo2(idAdd);
        }
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
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__forget_password_modal_forget_password_modal_component__["a" /* ForgetPasswordModalComponent */], {
            // width: '35%',
            // width: '50%',
            panelClass: 'communictioDialogStyle',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    HeaderComponent.prototype.logout = function () {
        this.loginSer.logout();
    };
    HeaderComponent.prototype.hrefAddAdv = function () {
        if (this.isLogin) {
            this.globalServ.goTo("addAdvertising");
        }
        else {
            this.openSignInDialog();
        }
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["n" /* Component */])({
            selector: 'header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_5__Services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_6__Services_call_api_service__["a" /* CallApiService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\n\n<div class=\"MainContainer\" data-infinite-scroll debounce [infiniteScrollDistance]=\"scrollDistance\" [infiniteScrollUpDistance]=\"scrollUpDistance\"\n [infiniteScrollThrottle]=\"throttle\" (scrolled)=\"onScrollDown()\">\n\t<div class=\"HeaderBackground\">\n\t\t<header></header>\n\t\t<div class=\"Triangle\">\n\t\t\t<div class=\"Jumbotron\" data-paroller-factor=\"-0.2\">\n\t\t\t\t<div class=\"Jumbotron-title\">هل تبحث عن شيئ معيّن ؟</div>\n\t\t\t\t<div class=\"SearchBar\">\n\t\t\t\t\t<div class=\"SearchBar-box\" (click)=\"getAdvertisemets(2,{'search':search},false,true)\"></div>\n\t\t\t\t\t<select name=\"city\" class=\"SearchBar-location\" [(ngModel)]=\"search.city\">\n\t\t\t\t\t\t<option [ngValue]=\"undefined\" selected>اختر المدينة</option>\n\t\t\t\t\t\t<option *ngFor=\"let city of cities\" value=\"{{city.id}}\" >{{city.name}}</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t<select name=\"category\" class=\"SearchBar-category\" [(ngModel)]=\"search.category\" (change)=\"changeCategory($event.target.value)\">>\n\t\t\t\t\t\t<option [ngValue]=\"undefined\" selected>اختر الفئة</option>\n\t\t\t\t\t\t<option *ngFor=\"let category of categories\" value=\"{{category.id}}\" >{{category.title}}</option> \n\t\t\t\t\t\t</select>\n\t\t\t\t\t<input class=\"SearchBar-input\" (keyup.enter)=\"getAdvertisemets(2,{'search':search},false,true)\" id=\"\" placeholder=\"أنا أبحث عن\" type=\"text\" [(ngModel)]=\"search.title\">\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"Jumbotron-subtitle\">\n\t\t\t\t\t<!--أكثر من\n\t\t\t\t\t<span class=\"u-num\">300</span> إعلان بإنتظارك لتتفقدها-->\n\t\t\t\t\tالكثير من الاعلانات بانتظارك لتفقده\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"Triangle--spacer\"></div>\n\t\t</div>\n\t</div>\n\t<div class=\"Content\">\n\t\t<div class=\"GridContainer\">\n\t\t\t<div class=\"CategoriesContainer\">\n\t\t\t\t<div class=\"CategoryBox\" *ngFor=\"let mainCategory of mainCategories\">\n\t\t\t\t\t<div (click)=\"getAdvertisemets(0,{'categoryID':mainCategory.id})\" class=\"CategoryBox-head cursorPointer\" [ngStyle]=\"{'background-image': 'url(' + mainCategory.image + ')'}\">\n\t\t\t\t\t\t<span class=\"CategoryBox-head-title\">{{mainCategory.title}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"CategoryBox-body\">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li (click)=\"getAdvertisemets(1,{'categoryID':mainCategory.id,'subCategoryID':mainSubCategory.id})\" *ngFor=\"let mainSubCategory of mainCategory.subCategories\">\n\t\t\t\t\t\t\t\t{{mainSubCategory.title}}\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<div id=\"Menu\" class=\"MenuContainer MenuContainer--isFixed\" style=\"display: none\">\n\n\t\t\t\t<div class=\"ContentMenu\">\n\t\t\t\t\t<div class=\"u-flex u-flexRowReverse u-flexWrap u-flexAlignCenter u-fill\">\n\t\t\t\t\t\t<i class=\"ContentMenu-item ContentMenu-item--iconDots\" (click)=\"openMenu()\"  *ngIf=\"isLogin\">\n\t\t\t\t\t\t\t\t<ul class=\"DropMenu DropMenu-Down\">\n\t\t\t\t\t\t\t\t\t<li class=\"DropMenu-item\">شروط الإستخدام</li>\n\t\t\t\t\t\t\t\t\t<li class=\"DropMenu-divider\"></li>\n\t\t\t\t\t\t\t\t\t<li class=\"DropMenu-item\">سياسة الخصوصية</li>\n\t\t\t\t\t\t\t\t\t<li class=\"DropMenu-divider\"></li>\n\t\t\t\t\t\t\t\t\t<li class=\"DropMenu-item\" (click)=\"logout()\">تسجيل الخروج</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t<a (click)=\"hrefAddAdv()\" class=\"ContentMenu-item u-customBtn\">\n\t\t\t\t\t\t\t<!-- <i class=\"ContentMenu-item-iconPlus\"> </i> -->\n\t\t\t\t\t\t\t<img class=\"\" src=\"assets/imgs/w-plus.svg\" alt=\"\">\n\t\t\t\t\t\t\t<span class=\"u-hideOnMedium u-after10p\">إضافة إعلان</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div href=\"#\" class=\"u-after10p\" *ngIf=\"isLogin\">\n\t\t\t\t\t\t\t<figure class=\"Avatar Avatar--lg cursorPointer\">\n\t\t\t\t\t\t\t\t<img src=\"assets/imgs/defult_img.jpg\" alt=\"avatar\">\n\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<i class=\"ContentMenu-item ContentMenu-item--iconBell\" (click)=\"toggleNot()\" *ngIf=\"isLogin\">\n\t\t\t\t\t\t\t\t<span class=\"Badge Badge--center\"  [attr.data-badge]=\"unreadNotBeh\"></span>\n\t\t\t\t\t            <ul class=\"NotificationMenu NotificationMenuDown\" data-infinite-scroll debounce [infiniteScrollDistance]=\"scrollDistance\" [infiniteScrollUpDistance]=\"scrollUpDistance\"[infiniteScrollThrottle]=\"throttle\" [scrollWindow]=\"false\" (scrolled)=\"onScrollUpNoti()\" >\n\t\t\t\t\t\t\t\t<div *ngFor=\"let oneNot of notificationBeh\">\n\t\t\t\t\t\t\t\t\t<li [ngStyle]=\"{'background-color':oneNot.isRead == false ? '#afafaf75' : 'auto' }\" class=\"NotificationMenu-item\">\n\t\t\t\t\t\t\t\t\t\t<div href=\"#\" class=\"u-after10p u-inlineBlock\">\n\t\t\t\t\t\t\t              <figure class=\"Avatar Avatar--lg\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{oneNot.advertisement.images[0]}}\" alt=\"avatar\">\n\t\t\t\t\t\t\t              </figure>\n\t\t\t\t\t\t\t            </div>\n\t\t\t\t\t\t\t            <div class=\"u-inlineBlock u-alignTop\">\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\tقام\n\t\t\t\t\t\t\t\t\t\t\t\t<span> {{oneNot.advertisement.owner.firstName}} </span>\n\t\t\t\t\t\t\t\t\t\t\t \t بإضافة إعلان جديد\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t<span class=\"NotificationMenu-item-date\">{{oneNot.createdAt | date:'yyyy/MM/dd'}}</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"NotificationMenu-divider\"></li>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t            </i>\n\t\t\t\t\t\t<a class=\"ContentMenu-item\" (click)=\"openSignInDialog()\" *ngIf=\"!isLogin\">الدخول</a>\n\t\t\t\t\t\t<a class=\"ContentMenu-item u-before10p\" (click)=\"openSignUpDialog()\" *ngIf=\"!isLogin\">حساب جديد</a>\n\t\t\t\t\t\t<img class=\"ContentMenu-item ContentMenu-item--logo u-hidden u-showOn700\" src=\"assets/imgs/logo.png\" alt=\"\">\n\t\t\t\t\t\t<div class=\"FilterSearchBar\">\n\t\t\t\t\t\t\t<div class=\"FilterSearchBar-box\" (click)=\"getAdvertisemets(2,{'search':search})\"></div>\n\t\t\t\t\t\t\t<select name=\"city\" [(ngModel)]=\"search.city\" class=\"FilterSearchBar-location\">\n\t\t\t\t\t\t\t\t\t <option [ngValue]=\"undefined\" selected>اختر المدينة</option>\n\n\n\t\t\t\t\t\t\t\t \t<option *ngFor=\"let city of cities\" value=\"{{city.id}}\" >{{city.name}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t<select name=\"category\" [(ngModel)]=\"search.category\" (change)=\"changeCategory($event.target.value)\" class=\"FilterSearchBar-category\">\n\t\t\t\t\t\t\t\t\t<option [ngValue]=\"undefined\" selected>اختر الفئة</option>\n\t\t\t\t\t\t\t\t \t<option *ngFor=\"let category of categories\" value=\"{{category.id}}\" >{{category.title}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t<input class=\"FilterSearchBar-input\" (keyup.enter)=\"getAdvertisemets(2,{'search':search})\" [(ngModel)]=\"search.title\" id=\"\" placeholder=\"أنا أبحث عن\" type=\"text\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"u-flexAlignSelfStart u-hideOn700 u-afterAuto\">\n\t\t\t\t\t\t<img class=\"ContentMenu-item ContentMenu-item--logo\" src=\"assets/imgs/logo.png\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--<div class=\"CategoryBar\">\n\t\t\t\t\t<div class=\"CategoryBar-item\" (click)=\"getAdvertisemets(0,{'categoryID':mainCategory.id})\" *ngFor=\"let mainCategory of mainCategories\">\n\t\t\t\t\t\t{{mainCategory.title}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>-->\n\t\t\t</div>\n\t\t\t<div class=\"FullContainer\">\n\t\t\t\t<div class=\"FiltersPanelContianer\" [ngClass]=\"{'hidden':lastType == -1}\">\n\t\t\t\t\t<div class=\"FiltersPanel\">\n\t\t\t\t\t\t<div class=\"FiltersPanel-header\">\n\t\t\t\t\t\t\t<div class=\"FiltersPanel-header-title\">\n\t\t\t\t\t\t\t\tالبحث المتقدم\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"FiltersPanel-header-collapse\">\n\t\t\t\t\t\t\t\t--\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"FiltersPanel-header-close\" (click)=\"reseat()\">\n\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"FiltersPanel-body\">\n\t\t\t\t\t\t\t<div class=\"FiltersPanel-body-inputcontainer\">\n\t\t\t\t\t\t\t\t<label for=\"name\"> </label>\n\t\t\t\t\t\t\t\t<input [(ngModel)]=\"search.title\" (keyup.enter)=\"getAdvertisemets(3,{'search':search})\" class=\"FiltersPanel-body-inputcontainer-text\" placeholder=\"أنا أبحث عن\" type=\"text\" value=\"\"\n\t\t\t\t\t\t\t\t name=\"name\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"FiltersPanel-body-inputcontainer\">\n\t\t\t\t\t\t\t\t<label for=\"name\"> </label>\n\t\t\t\t\t\t\t\t<select class=\"FiltersPanel-body-select FiltersPanel-body-down\" [(ngModel)]=\"search.city\">\n\t\t\t\t\t\t\t\t\t<option [ngValue]=\"undefined\" selected>اختر المدينة</option>\n\t\t\t\t\t\t\t\t \t<option *ngFor=\"let city of cities\" value=\"{{city.id}}\" >{{city.name}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"FiltersPanel-body-inputcontainer\">\n\t\t\t\t\t\t\t\t<label for=\"name\"> </label>\n\t\t\t\t\t\t\t\t<select class=\"FiltersPanel-body-select FiltersPanel-body-down\" [(ngModel)]=\"search.category\" (change)=\"changeCategory($event.target.value)\">>\n\t\t\t\t\t\t\t\t\t<option [ngValue]=\"undefined\" selected>اختر الفئة</option>\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t \t<option *ngFor=\"let category of categories\" value=\"{{category.id}}\" >{{category.title}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"FiltersPanel-body-inputcontainer\">\n\t\t\t\t\t\t\t\t<label for=\"name\"> </label>\n\t\t\t\t\t\t\t\t<select class=\"FiltersPanel-body-select FiltersPanel-body-down\" (change)=\"changeSubCategory($event.target.value)\" [(ngModel)]=\"search.subCategory\">\n\t\t\t\t\t\t\t\t\t<option [ngValue]=\"undefined\" selected> اختر الفئة الفرعية</option>\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t \t<option *ngFor=\"let subCategory of subCategories\" value=\"{{subCategory.id}}\" >{{subCategory.title}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"FiltersPanel-body-inputcontainer\" *ngFor=\"let oneKey of keyFilter\">\n\t\t\t\t\t\t\t\t<label for=\"name\">{{oneKey.key}} </label>\n\t\t\t\t\t\t\t\t<input *ngIf=\"oneKey.type == 'text' \" (keyup.enter)=\"getAdvertisemets(3,{'search':search})\" class=\"FiltersPanel-body-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\n\t\t\t\t\t\t\t\t<input *ngIf=\"oneKey.type == 'number' \" (keyup.enter)=\"getAdvertisemets(3,{'search':search})\" class=\"FiltersPanel-body-inputcontainer-text\" type=\"number\" value=\"\" name=\"name\">\n\t\t\t\t\t\t\t\t<select *ngIf=\"oneKey.type == 'choose' \" class=\"FiltersPanel-body-select FiltersPanel-body-down\">\n\t\t\t\t\t\t\t\t \t<option *ngFor=\"let value of oneKey.values\" value=\"{{value}}\" >{{value}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"FiltersPanel-body-inputcontainer\">\n\t\t\t\t\t\t\t\t<label for=\"name\"> أقل سعر </label>\n\t\t\t\t\t\t\t\t<input class=\"FiltersPanel-body-inputcontainer-text\" (keyup.enter)=\"getAdvertisemets(3,{'search':search})\" [(ngModel)]=\"search.min\" min=\"0\" max=\"10000000000\" type=\"number\" value=\"\"\n\t\t\t\t\t\t\t\t name=\"name\">\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"FiltersPanel-body-inputcontainer\">\n\t\t\t\t\t\t\t\t<label for=\"name\"> أكبر سعر </label>\n\t\t\t\t\t\t\t\t<input class=\"FiltersPanel-body-inputcontainer-text\" (keyup.enter)=\"getAdvertisemets(3,{'search':search})\" [(ngModel)]=\"search.max\" min=\"0\" max=\"10000000000\" type=\"number\" value=\"\"\n\t\t\t\t\t\t\t\t name=\"name\">\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"FiltersPanel-footer\" (click)=\"getAdvertisemets(3,{'search':search})\">\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ItemsContainer\" [ngClass]=\"{'ItemsContainer--filtespanelexpanded':lastType != -1}\">\n\t\t\t\t\t<div class=\"ItemBlock cursorPointer\" *ngFor=\"let advertisemet of advertisemets\" routerLink=\"{{'/detail/'+advertisemet.id}}\">\n\t\t\t\t\t\t<div class=\"ItemSummary\">\n\t\t\t\t\t\t\t<div class=\"ItemSummary-head\">\n\t\t\t\t\t\t\t\t<div class=\"ItemSummary-head-title\">\n\t\t\t\t\t\t\t\t\t{{advertisemet.category.title}}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"ItemSummary-head-date ItemSummary-head-date--text\">\n\t\t\t\t\t\t\t\t\t{{calculateDate(advertisemet.createdAt)}}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"ItemSummary-desc\">\n\t\t\t\t\t\t\t\t{{advertisemet.title}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"ItemSummary-price\">\n\t\t\t\t\t\t\t\t<span class=\"ItemSummary-price-num\">{{advertisemet.price | number}}</span>\n\t\t\t\t\t\t\t\t<span class=\"ItemSummary-price-text\">ل.س</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"ItemSummary-action\">\n\t\t\t\t\t\t\t\t<a routerLink=\"{{'/detail/'+advertisemet.id}}\" class=\"ItemSummary-action-btn\">\n  \t\t\t\t\t\t\t\t\tمشاهدة المزيد\n  \t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"ItemSummary-action-views\">\n\t\t\t\t\t\t\t\t\t<span> {{advertisemet.viewsCount}} </span>\n\t\t\t\t\t\t\t\t\t<div style=\"width:10px;\"></div>\n\t\t\t\t\t\t\t\t\t<img src=\"assets/imgs/eye.svg\" alt=\"\" style=\"height: 24px;\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"ItemBlock-img\" [ngStyle]=\"{'background-image': 'url(' + advertisemet.images[0] + ')'}\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ItemBlock emptyBloack\" *ngIf=\"!cheackOdd(advertisemets.length)\">\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"ItemsContainer-loader\" [ngClass]=\"{'hidden':loader==0}\">\n\t\t\t\t\t\t<img src=\"assets/imgs/spinner.svg\" alt=\"Kiwi standing on oval\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ItemsContainer-loader\" [ngClass]=\"{'hidden':noData==0}\">\n\t\t\t\t\t\t<img src=\"assets/imgs/empty placeholder.png\" alt=\"Kiwi standing on oval\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<div id=\"SignUpModal\" class=\"ModalContainer\">\n\t\t\t<div class=\"SignUpModuleContainer\">\n\t\t\t\t<div class=\"SignUpModule\">\n\t\t\t\t\t<div class=\"SignUpModule-header\">\n\t\t\t\t\t\t<div class=\"SignUpModule-header-title\">\n\t\t\t\t\t\t\tحساب جديد\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"SignUpModule-header-close\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"SignUpModule-body\">\n\t\t\t\t\t\t<div class=\"SignUpModule-body-inputcontainer\">\n\t\t\t\t\t\t\t<label for=\"name\">اسم الحقل</label>\n\t\t\t\t\t\t\t<input class=\"SignUpModule-body-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"SignUpModule-body-inputcontainer\">\n\t\t\t\t\t\t\t<label for=\"name\">اسم الحقل</label>\n\t\t\t\t\t\t\t<input class=\"SignUpModule-body-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"SignUpModule-body-inputcontainer\">\n\t\t\t\t\t\t\t<label for=\"name\">اسم الحقل</label>\n\t\t\t\t\t\t\t<input class=\"SignUpModule-body-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"SignUpModule-body-inputcontainer\">\n\t\t\t\t\t\t\t<label for=\"name\">اسم الحقل</label>\n\t\t\t\t\t\t\t<input class=\"SignUpModule-body-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"SignUpModule-body-inputcontainer SignUpModule-body-inputcontainer-checkboxcontainer\">\n\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"SignUpModule-body-inputcontainer-checkboxlabel\" id=\"checkbox_id\" value=\"value\">\n\t\t\t\t\t\t\t<label for=\"checkbox_id\">\n                  أوافق على\n                  <div class=\"u-textPrimaryColor\">شروط الاستخدام</div>\n  \n                <div class=\"u-textPrimaryColor\">اتفاقية الخصوصية</div>\n                </label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"SignUpModule-body-inputcontainer SignUpModule-body-btn\">\n\t\t\t\t\t\t\tإنشاء الحساب\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"SignUpModule-footer\">\n\t\t\t\t\t\tلديك حساب مسبقاً\n\t\t\t\t\t\t<div class=\"u-textPrimaryColor\">\n\t\t\t\t\t\t\tقم بتسجيل الدخول .\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<br />\n\t\t<br />\n\t\t<br />\n\t\t<div id=\"SignInModal\" class=\"ModalContainer\">\n\t\t\t<div class=\"SignInModuleContainer\">\n\t\t\t\t<div class=\"SignInModule\">\n\t\t\t\t\t<div class=\"SignInModule-header\">\n\t\t\t\t\t\t<div class=\"SignInModule-header-title\">\n\t\t\t\t\t\t\tتسجيل الدخول\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"SignInModule-header-close\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"SignInModule-body\">\n\t\t\t\t\t\t<div class=\"SignInModule-body-inputcontainer\">\n\t\t\t\t\t\t\t<label for=\"name\">اسم المستخدم</label>\n\t\t\t\t\t\t\t<input class=\"SignInModule-body-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"SignInModule-body-inputcontainer\">\n\t\t\t\t\t\t\t<label for=\"name\">كلمة السر</label>\n\t\t\t\t\t\t\t<input class=\"SignInModule-body-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"SignInModule-body-inputcontainer SignInModule-body-inputcontainer-checkboxcontainer\">\n\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"SignInModule-body-inputcontainer-checkboxlabel\" id=\"checkbox_id2\" value=\"value\">\n\t\t\t\t\t\t\t<label for=\"checkbox_id2\">\n              تذكر كلمة المرور\n              </label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"SignInModule-body-inputcontainer SignInModule-body-btn\">\n\t\t\t\t\t\t\tتسجيل الدخول\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"SignInModule-body-inputcontainer u-textCenter\">\n\t\t\t\t\t\t\t<div class=\"u-textPrimaryColor\"> هل نسيت كلمة السر ؟</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div style=\"display:none;text-align: center;\">\n\t<div style=\"font-family: 'OpenSans-Regular' \">\n\t\tOpenSans Regular <br/> اوبن سانس عادي 1234 ل.س\n\t</div><br/><br/>\n\t<div style=\"font-family: 'OpenSans-ExtraBold' \">\n\t\tOpenSans-ExtraBold <br/> اوبن سانس 1234 ل.س\n\t</div><br/><br/>\n\t<div style=\"font-family: 'Swessra-light' \">\n\t\tSwessra-light<br/> سويسرا خفيف 1234 ل.س\n\t</div><br/><br/>\n\t<div style=\"font-family: 'Swessra-medium' \">\n\t\tSwessra-medium<br/> سويسرا وسط 1234 ل.س\n\t</div><br/><br/>\n</div>\n\n<div class=\"CategoriesContainer\">\n\t<div class=\"CategoryBoxSub cursorPointer\" *ngFor=\"let mainCategory of mainCategories\">\n\t\t<div class=\"CategoryBoxSub-head\" [ngStyle]=\"{'background-image': 'url(' + mainCategory.image + ')'}\" (click)=\"getAdvertisemets(0,{'categoryID':mainCategory.id},false,true)\">\n\t\t\t<span class=\"CategoryBoxSub-head-title\">{{mainCategory.title}}</span>\n\t\t</div>\n\t</div>\n\t<!--<div class=\"CategoryBoxSub\">\n\t\t<div class=\"CategoryBoxSub-head\" style=\"background-image: url('assets/imgs/bear.jpg');\">\n\t\t\t<span class=\"CategoryBoxSub-head-title\">مركبات</span>\n\t\t</div>\n\t</div>\n\t<div class=\"CategoryBoxSub\">\n\t\t<div class=\"CategoryBoxSub-head\" style=\"background-image: url('assets/imgs/realS.jpg');\">\n\t\t\t<span class=\"CategoryBoxSub-head-title\">مركبات</span>\n\t\t</div>\n\t</div>\n\t<div class=\"CategoryBoxSub\">\n\t\t<div class=\"CategoryBoxSub-head\" style=\"background-image: url('assets/imgs/watch.jpg');\">\n\t\t\t<span class=\"CategoryBoxSub-head-title\">مركبات</span>\n\t\t</div>\n\t</div>-->\n</div>\n\n\n\n<div style=\"display:none;text-align: center;\">\n\t<div style=\"font-family: 'OpenSans-Regular' \">\n\t\tOpenSans Regular <br/> اوبن سانس عادي 1234 ل.س\n\t</div><br/><br/>\n\t<div style=\"font-family: 'OpenSans-ExtraBold' \">\n\t\tOpenSans-ExtraBold <br/> اوبن سانس 1234 ل.س\n\t</div><br/><br/>\n\t<div style=\"font-family: 'Swessra-light' \">\n\t\tSwessra-light<br/> سويسرا خفيف 1234 ل.س\n\t</div><br/><br/>\n\t<div style=\"font-family: 'Swessra-medium' \">\n\t\tSwessra-medium<br/> سويسرا وسط 1234 ل.س\n\t</div><br/><br/>\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forget_password_modal_forget_password_modal_component__ = __webpack_require__("../../../../../src/app/forget-password-modal/forget-password-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_global_service__ = __webpack_require__("../../../../../src/app/Services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_call_api_service__ = __webpack_require__("../../../../../src/app/Services/call-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_in_modal_sign_in_modal_component__ = __webpack_require__("../../../../../src/app/sign-in-modal/sign-in-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_login_service__ = __webpack_require__("../../../../../src/app/Services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sign_up_modal_sign_up_modal_component__ = __webpack_require__("../../../../../src/app/sign-up-modal/sign-up-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    function HomePageComponent(globalServ, dialog, loginSer, APIServ) {
        this.globalServ = globalServ;
        this.dialog = dialog;
        this.loginSer = loginSer;
        this.APIServ = APIServ;
        this.search = {};
        this.keyFilter = [];
        // forScrool
        this.array = [];
        this.throttle = 100;
        this.scrollDistance = 2;
        this.scrollUpDistance = 2;
        this.direction = '';
        this.loader = false;
        this.notificationBeh = [];
        this.isLogin = this.loginSer.isLogin();
        this.noData = false;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalServ.castUnreadNotBeh.subscribe(function (unreadNotBeh) { return _this.unreadNotBeh = unreadNotBeh; });
        this.globalServ.castNotificationBeh.subscribe(function (notificationBeh) { return _this.notificationBeh = notificationBeh; });
        $("html, body").animate({ scrollTop: 0 }, "slow");
        this.search['max'] = 100000000;
        this.search['min'] = 0;
        this.APIServ.get("cities").subscribe(function (data) {
            _this.cities = data;
        });
        this.APIServ.get("categories").subscribe(function (data) {
            _this.categories = data;
        });
        this.APIServ.get("categories?filter=%7B%22include%22%3A[%22subCategories%22]%7D").subscribe(function (data) {
            _this.mainCategories = data;
        });
        this.getAdvertisemets(-1, {});
        window.addEventListener('scroll', this.scroll, true); //third parameter
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
            query = { "order": "createdAt ASC", "limit": limit, "skip": skip, "include": ["advertisement"] };
            this.APIServ.get("users/" + this.loginSer.getUserId() + "/notifications?filter=" + JSON.stringify(query)).subscribe(function (data) {
                for (var index = 0; index < data.length; index++) {
                    var element = data[index];
                    if (!element.isRead) {
                        _this.globalServ.editUnreadNotBeh(_this.unreadNotBeh + 1);
                    }
                    if (element.advertisement)
                        _this.notificationBeh.push(element);
                }
                _this.globalServ.editNotificationBeh(_this.notificationBeh);
            });
        }
    };
    HomePageComponent.prototype.onScrollUpNoti = function () {
        this.getNotification(true);
    };
    HomePageComponent.prototype.visitNot = function (isRead, id) {
    };
    HomePageComponent.prototype.scroll = function () {
        var topOfOthDiv = $(".CategoriesContainer").offset().top;
        if ($(window).scrollTop() > topOfOthDiv) {
            // this.viewNavBar=true;
            $(".MenuContainer").fadeIn('slow');
            // $("#dvid").show(); //reached the desired point -- show div
        }
        else {
            $(".MenuContainer").fadeOut('slow');
            // this.viewNavBar=false;
        }
        //handle your scroll here
        //notice the 'odd' function assignment to a class field
        //this is used to be able to remove the event listener
    };
    ;
    HomePageComponent.prototype.logout = function () {
        this.loginSer.logout();
    };
    HomePageComponent.prototype.toggleNot = function () {
        $(".NotificationMenuDown").toggleClass('NotificationMenu--isShown');
    };
    HomePageComponent.prototype.calculateDate = function (date) {
        return this.globalServ.calculatDateAdv(date);
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
            query = { "order": "createdAt ASC", "limit": 10, "skip": 0 };
        }
        else if (type == 0) {
            if (!isScrol) {
                $('html, body').animate({
                    scrollTop: $(".ItemsContainer").offset().top - 100
                }, 2000);
            }
            this.search['category'] = data.categoryID;
            this.subCategories = this.mainCategories.find(function (x) { return x.id == data.categoryID; }).subCategories;
            query = { "where": { "categoryId": data.categoryID }, "order": "createdAt ASC", "limit": limit, "skip": skip };
            this.keyFilter = [];
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
            query = { "where": { "categoryId": data.categoryID, "subCategoryId": data.subCategoryID }, "order": "createdAt ASC", "limit": limit, "skip": skip };
            this.keyFilter = this.mainCategories.find(function (x) { return x.id == data.categoryID; }).subCategories.find(function (y) { return y.id == data.subCategoryID; }).fields;
        }
        else if (type == 2) {
            if (isTopSearch && !isScrol) {
                $('html, body').animate({
                    scrollTop: $(".ItemsContainer").offset().top - 100
                }, 2000);
            }
            if (data.search.title != "" && data.search.title != null) {
                var title = "%" + data.search.title + "%";
                query = { "where": { "categoryId": data.search.category, "cityId": data.search.city, "title": { "like": title } }, "order": "createdAt ASC", "limit": limit, "skip": skip };
            }
            else
                query = { "where": { "categoryId": data.search.category, "cityId": data.search.city }, "order": "createdAt ASC", "limit": limit, "skip": skip };
        }
        else if (type == 3) {
            if (data.search.title != "" && data.search.title != null) {
                var title = "%" + data.search.title + "%";
                query = { "where": { "title": { "like": title }, "categoryId": data.search.category, "cityId": data.search.city, "subCategoryId": data.search.subCategory, "price": { "between": [data.search.min, data.search.max] } }, "order": "createdAt ASC", "limit": limit, "skip": skip };
            }
            else
                query = { "where": { "categoryId": data.search.category, "cityId": data.search.city, "subCategoryId": data.search.subCategory, "price": { "between": [data.search.min, data.search.max] } }, "order": "createdAt ASC", "limit": limit, "skip": skip };
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
    HomePageComponent.prototype.getData = function (query, isScrol, limit, type) {
        var _this = this;
        this.APIServ.get("advertisemets/actived?filter=" + JSON.stringify(query)).subscribe(function (data) {
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
            _this.loader = false;
        });
    };
    HomePageComponent.prototype.reseat = function () {
        this.getAdvertisemets(-1, {});
    };
    HomePageComponent.prototype.openMenu = function () {
        $(".DropMenu-Down").toggleClass('DropMenu--isShown');
    };
    HomePageComponent.prototype.changeCategory = function (categortID) {
        this.subCategories = this.mainCategories.find(function (x) { return x.id == categortID; }).subCategories;
        this.keyFilter = [];
    };
    HomePageComponent.prototype.changeSubCategory = function (subCategoryID) {
        var _this = this;
        this.keyFilter = this.mainCategories.find(function (x) { return x.id == _this.search["category"]; }).subCategories.find(function (y) { return y.id == subCategoryID; }).fields;
    };
    HomePageComponent.prototype.openSignUpDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__sign_up_modal_sign_up_modal_component__["a" /* SignUpModalComponent */], {});
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
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__forget_password_modal_forget_password_modal_component__["a" /* ForgetPasswordModalComponent */], {
            // width: '35%',
            // width: '50%',
            panelClass: 'communictioDialogStyle',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    HomePageComponent.prototype.onScrollDown = function (ev) {
        if (this.lastType != -1)
            this.getAdvertisemets(this.lastType, this.lastData, true);
    };
    HomePageComponent.prototype.hrefAddAdv = function () {
        if (this.isLogin) {
            this.globalServ.goTo("addAdvertising");
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
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["n" /* Component */])({
            selector: 'home-page',
            template: __webpack_require__("../../../../../src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home-page/home-page.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_4__Services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_2__Services_call_api_service__["a" /* CallApiService */]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/privacy-policy/privacy-policy.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\n<!--component html goes here -->\n<div class=\"MainContainer\">\n\t<div class=\"HeaderBackground\">\n\t\t<header></header>\n\t\t<div class=\"Triangle\">\n\t\t\t<div class=\"Jumbotron\" data-paroller-factor=\"-0.2\">\n\t\t\t\t<div class=\"Jumbotron-title\">هل تبحث عن شيئ معيّن ؟</div>\n\n\t\t\t\t<div class=\"Jumbotron-subtitle\">\n\t\t\t\t\tالكثير من الاعلانات بانتظارك لتفقده\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"Triangle--spacer\"></div>\n\t\t</div>\n\t</div>\n\t<div class=\"Content\">\n\t\t<div class=\"GridContainer customPage\">\n\t\t\t<h1>سياسة الخصوصية</h1>\n\t\t\t<h3>سياسة الخصوصية</h3>\n\t\t\t<span>تُدرك إدارة موقع دلّال حرصك على المعلومات التي نجمعها عنك واهتمامك حيال كيفية استخدامنا لها، ولكي تكون على بينة وإدراك\n\t\t\t\tكامل، نضع بين يديك سياسة الخصوصية، ونحن بدورنا نقدر ثقتكم بنا والتي تضمن لكم التعامل مع معلوماتكم بعناية وثقة. من خلال\n\t\t\t\tزيارتك لموقع دلّال أنت تقبل الأمور الواردة في هذه البيان.\n\t\t\t</span>\n\t\t\t<h3>ما هي المعلومات التي يتم جمعها من قبل موقع دلّال عنك؟</h3>\n\t\t\t<span>المعلومات التي نجمعها من مستخدمي موقع دلّال تساعدنا على أن نقدم لهم خدمة أفضل مبنية على الطبيعة الشخصية للمستخدم للتحسين\n\t\t\t\tمن طريقة تصفحك كمستخدم لموقع دلّال. التالية هي أنواع المعلومات التي نجمعها: المعلومات التي نجمعها عنك من خلال تسجيلك\n\t\t\t\tفي الموقع وهي (البريد الإلكتروني، الاسم الأول، الاسم الثاني). من خلال تسجيلك ستحصل على حساب أو عضوية في الموقع وهي مكونة\n\t\t\t\tمن اسم مستخدم وكلمة سر تتيح لك استخدام الموقع المعلومات التي تقوم بتقديمها: نقوم بتخزين المعلومات المُدخلة على موقعنا\n\t\t\t\tبأكثر من وسيلة، مثلاً عند تسجيلك في الموقع أو عند إضافتك لمعلومات الإعلانات عند إضافة إعلان، يتم استخدام بريدك الإلكتروني\n\t\t\t\tالذي سجلت فيه كوسيلة ليسهل علينا الردّ على طلباتكم وإعلامكم بكل ما هو جديد في الموقع، وتذكر انه كلما زادت صحة المعلومات\n\t\t\t\tالمقدمة من قبلكم، زادت المزايا المقدمة للمستخدم. المعلومات الآلية: يمكننا الحصول على أنواع معينة من المعلومات الخاصة\n\t\t\t\tبك عند الدخول إلى موقع دلّال، وذلك باستخدام \"الكوكيز\" ليتم تخزين طريقة تصفحك للموقع، وهذه المعلومات تساعدنا بتقديم خدمة\n\t\t\t\tأفضل لك. الاتصالات بالبريد الإلكتروني: نحن نستقبل تأكيداً عن طريق تفعيل روابط التأكيد التي نرسلها لك بالبريد الإلكتروني\n\t\t\t\tفي معظم الإجراءات والاشتراكات التي تقوم بها والتي تتطلب تأكيدك. المعلومات الواردة من مصادر أخرى: يجوز لنا الحصول على\n\t\t\t\tمعلومات عنك من مصادر أخرى وإضافتها إلى معلومات حسابك لدينا، مثلاً كأن تقوم بالتسجيل في موقعنا عن طريق حسابك على الفيسبوك،\n\t\t\t\tبالتالي نستخدم بريدك المستخدم في الفيسبوك كبريد سجلت به لدى موقعنا. المعلومات المطلوبة من قسم خدمات الزبائن: قد تتواصل\n\t\t\t\tمع قسم خدمة الزبائن لطلب أو استفسار أو مشكلة أو اي نوع آخر من الطلبات أو قد يتواصل معك خدمة الزبائن لنفس الأغراض سابقة\n\t\t\t\tالذكر، وقد يترتب على هذا التواصل طلب معلومات معينة منك والتي تساهم في حل مشكلتك أو استفسارك مثال لا الحصر: نوع المتصفح،\n\t\t\t\tرقم هاتفك، مزود الإنترنت لديك وغيرها الكثير. وكل هذه المعلومات تستخدم لمساعدتك على حل المشكلة التي تواجهك.\n\n\t\t\t</span>\n\t\t\t<h3>ماذا عن الكوكيز؟\n\t\t\t</h3>\n\n\t\t\t<span>الكوكيز، والتي هي معروفة بالعالم الرقمي \"ملفات تعريف الارتباط\" لتشغيل القرص الصلب لجهاز الكمبيوتر من خلال متصفح الويب\n\t\t\t\tالخاص بك لتمكين انظمتنا من تخصيص المتصفح الخاص بك وتوفير ميزات مثل، الموقع المفضل، الدولة المفضلة ... وغيرها. عادة ما\n\t\t\t\tتقوم معظم المتصفحات بإخبارك عندما تتلقى كوكيز جديدة وترشدك إلى كيفية تعطيلها، ننصحك بعدم تعطيل الكوكيز الخاصة بموقع موقع\n\t\t\t\tدلّال فهي تساعدك في تحقيق الاستفادة الكاملة من مميزات الموقع لذا ننصح بتركها مفتوحة.\n\t\t\t</span>\n\n\t\t\t<h3>\n\t\t\t\tهل يتقاسم (يشارك) موقع دلّال المعلومات التي يتلقاها؟\n\t\t\t</h3>\n\t\t\t<span>المعلومات عن مستخدمي موقع دلّال هو جزء مهم من عملنا، ولن نسمح ببيع هذه المعلومات للآخرين. ولكن فقط يتم تبادل معلومات مستخدمي\n\t\t\t\tموقع دلّال فقط كما هو موضح أدناه: إضافة إعلان: عند إضافة إعلانك من خلال موقع دلّال فإنه يطلب منك أن تقدم لنا معلومات\n\t\t\t\tالاتصال الخاصة بك، ذلك لتسهيل عملية التواصل بين الطرفين (صاحب الإعلان، والمهتم به). وكلاء: نحن نستخدم شركات أخرى وأفراد\n\t\t\t\tلأداء بعض المهام نيابة عنا. مثل إرسال رسائل ترويجية في البريد الإلكتروني، وتحليل البيانات وتقديم المساعدة في مجال التسويق\n\t\t\t\tوغيرها من الخدمات، سواء في شكل دوري أو حسب ما يقتضي الطلب. عروض ترويجية: أحيانا نقوم بإرسال عروض لمجموعات مختارة من مستخدمي\n\t\t\t\tموقع دلّال حول آخر العروض التي نقدمها على الموقع. يتم نشر بيانات الحساب وغيرها من المعلومات الشخصية حسب شروط الاستخدام\n\t\t\t\tالمتفق عليها. وذلك حماية من أساليب الاحتيال والحد من مخاطر الائتمان. خلاف لما هو مبين أعلاه، سوف تتلقى تحذيرا عند مشاركة\n\t\t\t\tالبيانات مع طرف ثالث. إلغاء اشتراكك في النشرة البريدية: في أي وقت يمكنك الضغط على رابط \"إلغاء الاشتراك\" الموجود في أي\n\t\t\t\tبريد إلكتروني او نشرة بريدية مُرسلة من موقع دلّال.\n\t\t\t</span>\n\t\t\t<h3>\n\t\t\t\tضمان معلوماتك الخاصة\n\t\t\t</h3>\n\t\t\t<span>من المهم بالنسبة لك الحماية ضد الوصول غير المصرح به إلى كلمة السر الخاصة بك وإلى جهاز الكمبيوتر الخاص بك. ويجب أن تكون\n\t\t\t\tعلى يقين من أنك قمت بتسجيل الخروج بعد الانتهاء من استخدام أي جهاز كمبيوتر مشترك.\n\t\t\t</span>\n\t\t\t<h3>\n\t\t\t\tشروط الاستخدام:\n\t\t\t</h3>\n\t\t\t<span>إذا اخترت زيارة موقع دلّال فإن زيارتك وأي خلاف حول الخصوصية يخضع لسياسة الخصوصية ولأحكام وشروط الاستخدام اتفاقية المستخدم.\n\t\t\t\tإذا كان لديك أية مخاوف حول الخصوصية في موقع دلّال يرجى الاتصال بنا وسنحاول حلها. تابعوا موقعنا باستمرار لكل ما هو جديد\n\t\t\t\tحول التغييرات الطارئة على كل من سياسة الخصوصية وأحكام وشروط الاستخدام.\n\t\t\t</span>\n\t\t\t<h3>\n\n\t\t\t\tالتواصل مع الإدارة:\n\t\t\t</h3>\n\t\t\t<span>في أي وقت يمكنك التواصل مع إدارة موقع دلّال على البريد الرسمي للشركة <b>( Info@dlaaal.com ) </b>.\n\t\t\t\t<br>\n\t\t\t\tالاسم التجاري: <b>(شركة موقع دلّال\n\t\t\t\tللإعلانات المبوبة الإلكترونية)</b>.\n\t\t\t\t<br>\n\t\t\t\t يمكننا استقبال مكالمتك حول أي استفسارات من الساعة<b> (10 صباحاً) </b>الى الساعة <b>(7 مساءً)</b>. على\n\t\t\t\tهاتف رقم: <b>00971558112411</b>\n\t\t\t</span>\n\n\t\t</div>\n\n\t</div>\n\n</div>\n<!--Below main container end-->"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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

module.exports = "<div class=\"MainContainer\" data-infinite-scroll debounce [infiniteScrollDistance]=\"scrollDistance\" [infiniteScrollUpDistance]=\"scrollUpDistance\"\n    [infiniteScrollThrottle]=\"throttle\" (scrolled)=\"onScrollDown()\">\n    <div class=\"HeaderBackground\">\n        <header></header>\n        <div class=\"Triangle Triangle--pages\">\n\n            <div class=\"Triangle--spacer\"></div>\n        </div>\n    </div>\n    <div class=\"Content\">\n        <div class=\"GridContainer\">\n            <div class=\"HeaderBoxContianer HeaderBoxContianer--profilepage\">\n                <div class=\"HeaderBox HeaderBox--profilepage-usercontainer\">\n                    <div class=\"HeaderBox HeaderBox--profilepage-usercontainer-avatar\">\n                        <div class=\"myImage\">\n                            <img src=\"{{imageProfile}}\" [ngClass]=\"{'hidden': uploadingImage}\" />\n                            <img id=\"{{'uploadImage'}}\" [ngClass]=\"{'hidden': !uploadingImage}\" />\n                            <img src=\"assets/imgs/infinity_loader_by_volorf.gif\" [ngClass]=\"{'hidden': !uploadingImage}\" style=\"position:  absolute;opacity: 0.5;top: 0px;height: 100%;left:  0px;width: 100%;\"\n                            />\n\n                            <div *ngIf=\"isMyProfile\" _ngcontent-c1=\"\" (click)=\"openSelectImage()\" class=\"hoverDiv cursorPointer\" style=\"\">\n                                <span _ngcontent-c1=\"\" class=\"glyphicon glyphicon-camera\"></span>\n                                <span _ngcontent-c1=\"\">تغيير الصورة</span>\n                                <input type=\"file\" style=\"display:none\" id=\"files\" (change)=\"onChange($event)\" />\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"HeaderBox HeaderBox--profilepage-usercontainer-username\">\n                        {{userData.firstName}}\n                    </div>\n                </div>\n                <div class=\"HeaderBox HeaderBox--profilepage-detailscontainer\">\n                    <div class=\"HeaderBox HeaderBox--profilepage-detailscontainer-column\">\n                        <div class=\"HeaderBox HeaderBox--profilepage-detailscontainer-column-title\">\n                            الإعلانات المضافة\n                        </div>\n                        <div class=\"HeaderBox HeaderBox--profilepage-detailscontainer-column-value\">\n                            {{userData.advertisementCount| number}}\n                        </div>\n                    </div>\n                    <div class=\"HeaderBox HeaderBox--profilepage-detailscontainer-column\">\n                        <div class=\"HeaderBox HeaderBox--profilepage-detailscontainer-column-title\">\n                            المتابعون\n                        </div>\n                        <div class=\"HeaderBox HeaderBox--profilepage-detailscontainer-column-value\">\n                            {{userData.followersCount| number}}\n                        </div>\n\n                    </div>\n\n                </div>\n                <!--[ngClass]=\"{'hidden':isPluse()}\"-->\n                <div class=\"HeaderBox HeaderBox--profilepage-btncontainer\">\n                    <div (click)=\"editProfile()\" *ngIf=\"isMyProfile\" class=\"HeaderBox--profilepage-editbtn\">\n\n                    </div>\n                    <div  *ngIf=\"isPluse()\" (click)=\"follow()\" class=\"HeaderBox--profilepage-editbtn\" [ngStyle]=\"{'background-image': 'url(assets/imgs/plus.svg)'}\">\n\n                    </div>\n                    <div *ngIf=\"isMin()\" (click)=\"unFollow()\" class=\"HeaderBox--profilepage-editbtn\" [ngStyle]=\"{'background-image': 'url(assets/imgs/Minus.svg)'}\">\n\n                    </div>\n                </div>\n\n            </div>\n        </div>\n        <div class=\"UserProfileContainer\">\n            <div class=\"UserProfile\">\n                <div class=\"UserProfile-navtabs\">\n                    <div class=\"UserProfile-navtabs-tab cursorPointer\" (click)=\"setTab(1)\" [ngClass]=\"{'UserProfile-navtabs-tab--active':isSetTab(1),'hidden':!isMyProfile}\">\n                        قائمة التفضيلات\n                    </div>\n                    <div class=\"UserProfile-navtabs-tab cursorPointer\" (click)=\"setTab(2)\" [ngClass]=\"{'UserProfile-navtabs-tab--active':isSetTab(2)}\">\n                        <!--إعلاناتي-->\n                        {{isMyProfile ? \"إعلاناتي\" : \"إعلانات\"}}\n\n                    </div>\n                </div>\n                <div class=\"UserProfile-navcontent\">\n                    <div class=\"ItemsContainer\">\n                        <div class=\"ItemsContainer\" [ngClass]=\"{'hidden':isSetTab(2)}\">\n                            <div *ngFor=\"let oneBookMark of bookmarks\" routerLink=\"{{'/detail/'+oneBookMark.id}}\" class=\"ItemBlock cursorPointer\">\n                                <div class=\"ItemSummary\">\n                                    <div class=\"ItemSummary-head\">\n                                        <div class=\"ItemSummary-head-title\">\n                                            {{oneBookMark.category.title}}\n                                        </div>\n                                        <div class=\"ItemSummary-head-date ItemSummary-head-date--text\">\n                                            {{calculateDate(oneBookMark.createdAt)}}\n                                        </div>\n                                    </div>\n                                    <div class=\"ItemSummary-desc\">\n                                        {{oneBookMark.title}}\n                                    </div>\n                                    <div class=\"ItemSummary-price\">\n                                        <span class=\"ItemSummary-price-num\">{{oneBookMark.price | number}}</span>\n                                        <span class=\"ItemSummary-price-text\">ل.س</span>\n                                    </div>\n                                    <div class=\"ItemSummary-action\">\n                                        <a routerLink=\"{{'/detail/'+oneBookMark.id}}\" class=\"ItemSummary-action-btn\">\n    \t\t\t\t\t\t\t\t\tمشاهدة المزيد\n    \t\t\t\t\t\t\t\t</a>\n                                        <div class=\"ItemSummary-action-views\">\n                                            <span> {{oneBookMark.viewsCount}} </span>\n                                            <div style=\"width:10px;\"></div>\n                                            <img src=\"../imgs/eye.svg\" alt=\"\" style=\"height: 24px;\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"ItemBlock-img\" [ngStyle]=\"{'background-image': 'url(' + oneBookMark.images[0] + ')'}\">\n                                </div>\n                            </div>\n                            <div class=\"ItemBlock emptyBloack\" *ngIf=\"!cheackOdd(bookmarks.length)\">\n\n                            </div>\n                            <div class=\"ItemsContainer-loader\" [ngClass]=\"{'hidden':loaderBook==0}\">\n                                <img src=\"assets/imgs/spinner.svg\" alt=\"Kiwi standing on oval\">\n                            </div>\n                            <div class=\"ItemsContainer-loader\" [ngClass]=\"{'hidden':noBook==0}\">\n                                <img src=\"assets/imgs/empty placeholder.png\" alt=\"Kiwi standing on oval\">\n                            </div>\n\n                        </div>\n                        <div class=\"ItemsContainer\" [ngClass]=\"{'hidden':isSetTab(1)}\">\n                            <div *ngFor=\"let oneAdvertisemet of advertisemets\" routerLink=\"{{'/detail/'+oneAdvertisemet.id}}\" class=\"ItemBlock cursorPointer\">\n                                <div class=\"ItemSummary\">\n                                    <div class=\"ItemSummary-head\">\n                                        <div class=\"ItemSummary-head-title\">\n                                            {{oneAdvertisemet.category.title}}\n                                        </div>\n                                        <div class=\"ItemSummary-head-date ItemSummary-head-date--text\">\n                                            {{calculateDate(oneAdvertisemet.createdAt)}}\n                                        </div>\n                                    </div>\n                                    <div class=\"ItemSummary-desc\">\n                                        {{oneAdvertisemet.title}}\n                                    </div>\n                                    <div class=\"ItemSummary-price\">\n                                        <span class=\"ItemSummary-price-num\">{{oneAdvertisemet.price | number}}</span>\n                                        <span class=\"ItemSummary-price-text\">ل.س</span>\n                                    </div>\n                                    <div class=\"ItemSummary-action\">\n                                        <a routerLink=\"{{'/detail/'+oneAdvertisemet.id}}\" class=\"ItemSummary-action-btn\">\n    \t\t\t\t\t\t\t\t\tمشاهدة المزيد\n    \t\t\t\t\t\t\t\t</a>\n                                        <div class=\"ItemSummary-action-views\">\n                                            <span> {{oneAdvertisemet.viewsCount}} </span>\n                                            <div style=\"width:10px;\"></div>\n                                            <img src=\"../imgs/eye.svg\" alt=\"\" style=\"height: 24px;\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"ItemBlock-img\" [ngStyle]=\"{'background-image': 'url(' + oneAdvertisemet.images[0] + ')'}\">\n                                </div>\n                            </div>\n                            <div class=\"ItemBlock emptyBloack\" *ngIf=\"!cheackOdd(advertisemets.length)\">\n\n                            </div>\n\n                            <div class=\"ItemsContainer-loader\" [ngClass]=\"{'hidden':loaderAdd==0}\">\n                                <img src=\"assets/imgs/spinner.svg\" alt=\"Kiwi standing on oval\">\n                            </div>\n                            <div class=\"ItemsContainer-loader\" [ngClass]=\"{'hidden':noAdd==0}\">\n                                <img src=\"assets/imgs/empty placeholder.png\" alt=\"Kiwi standing on oval\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <!--Below main container end-->\n    </div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hidden {\n  display: none; }\n\n.hoverDiv {\n  display: none;\n  height: 180px;\n  border-radius: 50%;\n  padding-top: 5.7em;\n  padding-bottom: 5.7em;\n  width: 180px;\n  background-color: rgba(128, 128, 128, 0.54902);\n  text-align: center;\n  position: absolute;\n  top: 0px; }\n\n.hoverDiv span {\n    text-align: center; }\n\n.myImage {\n  position: relative; }\n\n.myImage:hover .hoverDiv {\n  display: inline-block; }\n\n.emptyBloack {\n  background-color: #f5f7f8 !important;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border: none; }\n\n@media screen and (max-width: 1250px) {\n  .emptyBloack {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__change_password_change_password_component__ = __webpack_require__("../../../../../src/app/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_profile_edit_profile_component__ = __webpack_require__("../../../../../src/app/edit-profile/edit-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_global_service__ = __webpack_require__("../../../../../src/app/Services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Services_login_service__ = __webpack_require__("../../../../../src/app/Services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Services_call_api_service__ = __webpack_require__("../../../../../src/app/Services/call-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    function ProfileComponent(dialog, APIServe, logInSer, globalServ, route) {
        this.dialog = dialog;
        this.APIServe = APIServe;
        this.logInSer = logInSer;
        this.globalServ = globalServ;
        this.route = route;
        this.imageProfile = "assets/imgs/defult_img.jpg";
        this.uploadingImage = false;
        this.isMyProfile = false;
        this.loaderBook = false;
        this.loaderAdd = false;
        this.noBook = false;
        this.noAdd = false;
        this.bookmarks = [];
        this.advertisemets = [];
        this.throttle = 100;
        this.scrollDistance = 2;
        this.scrollUpDistance = 2;
        var param;
        this.route.params.subscribe(function (data) { return param = data.userID; });
        if (param == "me") {
            this.setTab(1);
            this.isMyProfile = true;
            this.userID = logInSer.getUserId();
        }
        else {
            if (param == logInSer.getUserId()) {
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
        this.APIServe.get("users/" + this.userID + "/followers").subscribe(function (data) {
            _this.follwers = data;
        });
        if (this.isMyProfile)
            this.getData(true);
        if (this.isMyProfile)
            this.APIServe.get("users/me").subscribe(function (data) {
                _this.userData = data;
            });
        else {
            this.APIServe.get("users/" + this.userID).subscribe(function (data) {
                _this.userData = data;
            });
        }
        this.getData(false);
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
        this.APIServe.uploadImage("files/images/upload", event.target.files, 1).subscribe(function (data) {
            _this.uploadingImage = false;
            data.forEach(function (element) {
                _this.imageProfile = element;
            });
        });
    };
    ProfileComponent.prototype.editProfile = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__edit_profile_edit_profile_component__["a" /* EditProfileComponent */], {});
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result) {
                _this.changePassword();
            }
        });
    };
    ProfileComponent.prototype.changePassword = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__change_password_change_password_component__["a" /* ChangePasswordComponent */], {});
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    ProfileComponent.prototype.calculateDate = function (date) {
        return this.globalServ.calculatDateAdv(date);
    };
    ProfileComponent.prototype.setTab = function (tabNum) {
        this.tabNow = tabNum;
    };
    ProfileComponent.prototype.isSetTab = function (tabNum) {
        return this.tabNow == tabNum;
    };
    ProfileComponent.prototype.getData = function (isBookMark, isScrol) {
        var _this = this;
        if (isScrol === void 0) { isScrol = false; }
        var url, query, skip, limit;
        limit = 10;
        if (isScrol == true) {
            if (!isBookMark)
                skip = this.advertisemets.length;
            else
                skip = this.bookmarks.length;
        }
        else {
            skip = 0;
        }
        if (isBookMark) {
            url = "users/" + this.userID + "/bookmarks?filter=";
            query = { "order": "createdAt ASC", "limit": limit, "skip": skip };
            if (this.noBook || this.loaderBook) {
                return;
            }
            this.loaderBook = true;
        }
        else {
            url = "advertisemets/actived?filter=";
            query = { "where": { "ownerId": this.userID }, "order": "createdAt ASC", "limit": limit, "skip": skip };
            if (this.noAdd || this.loaderAdd) {
                return;
            }
            this.loaderAdd = true;
        }
        this.APIServe.get(url + JSON.stringify(query)).subscribe(function (data) {
            if (isBookMark) {
                if (data.length < limit) {
                    _this.noBook = true;
                }
                data.forEach(function (element) {
                    if (element.category)
                        _this.bookmarks.push(element);
                });
                _this.loaderBook = false;
            }
            else {
                if (data.length < limit) {
                    _this.noAdd = true;
                }
                data.forEach(function (element) {
                    if (element.category)
                        _this.advertisemets.push(element);
                });
                _this.loaderAdd = false;
            }
        });
    };
    ProfileComponent.prototype.onScrollDown = function () {
        if (this.tabNow == 1) {
            this.getData(true, true);
        }
        else {
            this.getData(false, true);
        }
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
        this.APIServe.delete("users/" + this.logInSer.getUserId() + "/following/rel/" + this.userID).subscribe(function (data) {
            if (_this.APIServe.getErrorCode() == 0) {
                _this.APIServe.get("users/" + _this.userID).subscribe(function (data) {
                    _this.userData = data;
                });
                _this.globalServ.errorDialog("إلغاء متابعة", "تم إلغاء المتابعة بنجاح");
            }
        });
    };
    ProfileComponent.prototype.follow = function () {
        var _this = this;
        if (this.logInSer.isLogin())
            this.APIServe.put("users/" + this.logInSer.getUserId() + "/following/rel/" + this.userID, { "ownerId": this.userID, "userId": this.logInSer.getUserId() }).subscribe(function (data) {
                if (_this.APIServe.getErrorCode() == 0) {
                    _this.APIServe.get("users/" + _this.userID).subscribe(function (data) {
                        _this.userData = data;
                    });
                    _this.globalServ.errorDialog("القيام بمتابعة", "تمت المتابعة بنجاح");
                }
            });
        else {
            this.headerChild.openSignInDialog();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_0__header_header_component__["a" /* HeaderComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__header_header_component__["a" /* HeaderComponent */])
    ], ProfileComponent.prototype, "headerChild", void 0);
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["n" /* Component */])({
            selector: 'profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_7__Services_call_api_service__["a" /* CallApiService */], __WEBPACK_IMPORTED_MODULE_6__Services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_5__Services_global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/report-modal/report-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\n<!--component html goes here -->\n<!--<div id=\"\" class=\"ModalContainer\">\n\t\t\t<div class=\"SignInModuleContainer\">-->\n<div class=\"SignInModule\">\n    <div class=\"SignInModule-header\" style=\"direction: rtl;\">\n        <div class=\"SignInModule-header-title\">\n            القيام بالتبليغ\n        </div>\n        <div class=\"SignInModule-header-close\" (click)=\"closeModal()\">\n        </div>\n    </div>\n    <div class=\"SignInModule-body\">\n        <div class=\"SignInModule-body-inputcontainer\">\n            <label for=\"name\">هل انت متاكد تريد القيام بتبليغ هذا الإعلان على أنه {{title}}</label>\n        </div>\n        <div (click)=\"ok()\" class=\"SignInModule-body-inputcontainer SignInModule-body-btn\">\n            موافق\n        </div>\n        <div (click)=\"cansel()\" class=\"SignInModule-body-inputcontainer SignInModule-body-btn\">\n            إلغاء\n        </div>\n\n\n    </div>\n</div>\n\n<!--</div>\n\t\t</div>-->"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_call_api_service__ = __webpack_require__("../../../../../src/app/Services/call-api.service.ts");
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
    function ReportModalComponent(APIServ, dialogRef, data) {
        this.APIServ = APIServ;
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
            "reportId": 0,
            "advertisementId": this.addID
        };
        this.APIServ.post("advertisemets/" + this.addID + "/reports", data).subscribe(function (data) {
            _this.dialogRef.close(true);
        });
    };
    ReportModalComponent.prototype.closeModal = function () {
        this.dialogRef.close();
    };
    ReportModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'report-modal',
            template: __webpack_require__("../../../../../src/app/report-modal/report-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/report-modal/report-modal.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__Services_call_api_service__["a" /* CallApiService */], __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */], Object])
    ], ReportModalComponent);
    return ReportModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reset-password/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\n<div class=\"MainContainer\">\n    <div class=\"HeaderBackground\">\n\n        <header></header>\n        <div class=\"Triangle\">\n            <div class=\"Jumbotron\" data-paroller-factor=\"-0.2\">\n                <div class=\"Jumbotron-title\">هل تبحث عن شيئ معيّن ؟</div>\n\n                <div class=\"Jumbotron-subtitle\">\n                    أكثر من\n                    <span class=\"u-num\">300</span> إعلان بإنتظارك لتتفقدها\n                </div>\n            </div>\n            <div class=\"Triangle--spacer\"></div>\n        </div>\n    </div>\n    <div class=\"Content\">\n        <div class=\"GridContainer\"style=\"padding: 5%;\">\n\n            <!--component html goes here -->\n            <!--component html goes here -->\n            <!--<div id=\"\" class=\"ModalContainer\">\n\t\t\t<div class=\"SignInModuleContainer\">-->\n            <div class=\"SignInModule\">\n                <div class=\"SignInModule-body\">\n                    <div class=\"SignInModule-body-inputcontainer\">\n                        <label for=\"name\">كلمة السر الجديدة</label>\n                        <input [(ngModel)]=\"user.newPassword\" class=\"SignInModule-body-inputcontainer-text\" type=\"text\" value=\"\"\n                            name=\"name\">\n                    </div>\n                    <div (click)=\"resetPassword()\" class=\"SignInModule-body-inputcontainer SignInModule-body-btn\">\n                        إرسال لأغعادة تعيين كلمة السر\n                    </div>\n                </div>\n            </div>\n\n            <!--</div>\n\t\t</div>-->\n\n        </div>\n\n\n\n    </div>\n    <!--Below main container end-->\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_global_service__ = __webpack_require__("../../../../../src/app/Services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_call_api_service__ = __webpack_require__("../../../../../src/app/Services/call-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    function ResetPasswordComponent(dialog, globalSer, APIServe, route) {
        var _this = this;
        this.dialog = dialog;
        this.globalSer = globalSer;
        this.APIServe = APIServe;
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
        this.APIServe.resetPassWord("users/reset-password", this.user, this.token).subscribe(function (data) {
            if (_this.APIServe.getErrorCode() == 0) {
                _this.globalSer.goTo('/');
            }
            else if (_this.APIServe.getErrorCode() == 401) {
                _this.message = "لرجاء التحقق من اسم المستخدم و كلمه المرور";
                _this.APIServe.setErrorCode(0);
            }
        });
    };
    ResetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'reset-password',
            template: __webpack_require__("../../../../../src/app/reset-password/reset-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reset-password/reset-password.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_0__Services_global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_2__Services_call_api_service__["a" /* CallApiService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sign-in-modal/sign-in-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\n<!--<div id=\"\" class=\"ModalContainer\">\n\t\t\t<div class=\"SignInModuleContainer\">-->\n<div class=\"SignInModule\" style=\"position: relative;overflow: hidden;\">\n\t<div class=\"SignInModule-header\" style=\"direction: rtl;\">\n\t\t<div class=\"SignInModule-header-title\">\n\t\t\tتسجيل الدخول\n\t\t</div>\n\t\t<div class=\"SignInModule-header-close\" (click)=\"closeModal()\">\n\t\t</div>\n\t</div>\n\t<div class=\"SignInModule-body\">\n\t\t<label for=\"name\" style=\"color: red\">{{message}}</label>\n\t\t<div class=\"SignInModule-body-inputcontainer\">\n\t\t\t<label for=\"name\">اسم المستخدم</label>\n\t\t\t<input [(ngModel)]=\"user.email\" (keyup.enter)=\"login()\" (focus)=\"message='';\" class=\"SignInModule-body-inputcontainer-text\" type=\"text\" value=\"\"\n\t\t\t name=\"name\">\n\t\t</div>\n\t\t<div class=\"SignInModule-body-inputcontainer\">\n\t\t\t<label for=\"name\">كلمة السر</label>\n\t\t\t<input [(ngModel)]=\"user.password\" (keyup.enter)=\"login()\" (focus)=\"message='';\" class=\"SignInModule-body-inputcontainer-text\" type=\"password\" value=\"\"\n\t\t\t name=\"name\">\n\t\t</div>\n\t\t<div class=\"SignInModule-body-inputcontainer SignInModule-body-inputcontainer-checkboxcontainer\">\n\t\t\t<input type=\"checkbox\" style=\"float: right;\" class=\"SignInModule-body-inputcontainer-checkboxlabel\" id=\"checkbox_id2\" value=\"value\">\n\t\t\t<label for=\"checkbox_id2\">\n              تذكر كلمة المرور\n              </label>\n\t\t</div>\n\t\t<div (click)=\"login()\" class=\"SignInModule-body-inputcontainer SignInModule-body-btn\">\n\t\t\tتسجيل الدخول\n\t\t</div>\n\t\t<div class=\"SignInModule-body-inputcontainer u-textCenter\">\n\t\t\t<div class=\"u-textPrimaryColor\" (click)=\"forgetPassword()\"> هل نسيت كلمة السر ؟</div>\n\t\t</div>\n\t\t<div class=\"ItemsContainer-loader\" style=\"width:  100%;position:  absolute;height:  100%;\" [ngClass]=\"{'hidden':loader==0}\">\n\t\t\t<img src=\"assets/imgs/spinner.svg\" alt=\"Kiwi standing on oval\">\n\t\t</div>\n\n\t</div>\n</div>\n\n<!--</div>\n\t\t</div>-->"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_login_service__ = __webpack_require__("../../../../../src/app/Services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_call_api_service__ = __webpack_require__("../../../../../src/app/Services/call-api.service.ts");
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





var SignInModalComponent = /** @class */ (function () {
    function SignInModalComponent(thisDialog, data, LoginSer, APIServ) {
        this.thisDialog = thisDialog;
        this.data = data;
        this.LoginSer = LoginSer;
        this.APIServ = APIServ;
        this.user = {};
        this.loader = false;
    }
    SignInModalComponent.prototype.login = function () {
        var _this = this;
        this.loader = true;
        this.APIServ.post("users/login", this.user).subscribe(function (data) {
            _this.loader = false;
            if (_this.APIServ.getErrorCode() == 0) {
                _this.LoginSer.logIn(data);
            }
            else if (_this.APIServ.getErrorCode() == 401) {
                _this.message = "لرجاء التحقق من اسم المستخدم و كلمه المرور";
                _this.APIServ.setErrorCode(0);
            }
        });
    };
    SignInModalComponent.prototype.forgetPassword = function () {
        this.thisDialog.close(true);
    };
    SignInModalComponent.prototype.closeModal = function () {
        this.thisDialog.close();
    };
    SignInModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'sign-in-modal',
            template: __webpack_require__("../../../../../src/app/sign-in-modal/sign-in-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sign-in-modal/sign-in-modal.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__["d" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_0__Services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_1__Services_call_api_service__["a" /* CallApiService */]])
    ], SignInModalComponent);
    return SignInModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sign-up-modal/sign-up-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\n<!--<div id=\"\" class=\"ModalContainer\">\n\t\t\t<div class=\"SignUpModuleContainer\">-->\n\n<div class=\"SignUpModule\">\n    <div class=\"SignUpModule-header\" style=\"direction: rtl;\">\n        <div class=\"SignUpModule-header-title\">\n            حساب جديد\n        </div>\n        <div class=\"SignUpModule-header-close\" (click)=\"closeModal()\">\n        </div>\n    </div>\n    <div class=\"SignUpModule-body\">\n        <label for=\"name\" style=\"color: red\">{{message}}</label>\n\n        <div class=\"SignUpModule-body-inputcontainer\">\n            <label for=\"name\">الأسم</label>\n            <input [(ngModel)]=\"newUser.firstName\"(focus)=\"message='';\" class=\"SignUpModule-body-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\n        </div>\n        <div class=\"SignUpModule-body-inputcontainer\">\n            <label for=\"name\">الرقم</label>\n            <input [(ngModel)]=\"newUser.phone\"(focus)=\"message='';\" class=\"SignUpModule-body-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\n        </div>\n        <div class=\"SignUpModule-body-inputcontainer\">\n            <label for=\"name\">الايميل</label>\n            <input [(ngModel)]=\"newUser.email\" (focus)=\"message='';\"class=\"SignUpModule-body-inputcontainer-text\" type=\"text\" value=\"\" name=\"name\">\n        </div>\n        <div class=\"SignUpModule-body-inputcontainer\">\n            <label for=\"name\">كلمة السر</label>\n            <input [(ngModel)]=\"newUser.password\" (focus)=\"message='';\" class=\"SignUpModule-body-inputcontainer-text\" type=\"password\" value=\"\" name=\"name\">\n        </div>\n        <div class=\"SignUpModule-body-inputcontainer SignUpModule-body-inputcontainer-checkboxcontainer\">\n            <input type=\"checkbox\" style=\"float: right\" [(ngModel)]=\"isAgree\" class=\"SignUpModule-body-inputcontainer-checkboxlabel\"\n                id=\"checkbox_id\" value=\"value\">\n            <label for=\"checkbox_id\">\n                  أوافق على\n                  <div class=\"u-textPrimaryColor\" routerLink=\"{{'/terms'}}\">شروط الاستخدام</div>\n  \n                <div class=\"u-textPrimaryColor\" routerLink=\"{{'/privacy'}}\">اتفاقية الخصوصية</div>\n                </label>\n        </div>\n        <button [disabled]=\"!isAgree\" (click)=\"signup()\" class=\"SignUpModule-body-inputcontainer SignUpModule-body-btn\">\n            إنشاء الحساب\n        </button>\n    </div>\n    <div class=\"SignUpModule-footer\">\n        لديك حساب مسبقاً\n        <div class=\"u-textPrimaryColor\" (click)=\"login()\">\n            قم بتسجيل الدخول .\n        </div>\n    </div>\n\n</div>\n<!--</div>\n\t\t</div>-->"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_login_service__ = __webpack_require__("../../../../../src/app/Services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_call_api_service__ = __webpack_require__("../../../../../src/app/Services/call-api.service.ts");
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





var SignUpModalComponent = /** @class */ (function () {
    function SignUpModalComponent(thisDialog, data, APIServ, LoginSer) {
        this.thisDialog = thisDialog;
        this.data = data;
        this.APIServ = APIServ;
        this.LoginSer = LoginSer;
        this.newUser = {};
        this.message = "";
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
            this.APIServ.post("users", this.newUser).subscribe(function (data) {
                if (_this.APIServ.getErrorCode() == 0) {
                    // alert("Success")
                    _this.LoginSer.logIn(data);
                }
                else if (_this.APIServ.getErrorCode() == 422) {
                    _this.message = "هذا البريد الالكتروني مسجل مسبقا";
                    _this.APIServ.setErrorCode(0);
                }
            });
        }
    };
    SignUpModalComponent.prototype.login = function () {
        this.thisDialog.close(true);
    };
    SignUpModalComponent.prototype.closeModal = function () {
        this.thisDialog.close();
    };
    SignUpModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'sign-up-modal',
            template: __webpack_require__("../../../../../src/app/sign-up-modal/sign-up-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sign-up-modal/sign-up-modal.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__["d" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__Services_call_api_service__["a" /* CallApiService */], __WEBPACK_IMPORTED_MODULE_0__Services_login_service__["a" /* LoginService */]])
    ], SignUpModalComponent);
    return SignUpModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/terms/terms.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\n<div class=\"MainContainer\">\n\t<div class=\"HeaderBackground\">\n\t\t<header></header>\n\t\t<div class=\"Triangle\">\n\t\t\t<div class=\"Jumbotron\" data-paroller-factor=\"-0.2\">\n\t\t\t\t<div class=\"Jumbotron-title\">هل تبحث عن شيئ معيّن ؟</div>\n\n\t\t\t\t<div class=\"Jumbotron-subtitle\">\n\t\t\t\t\tالكثير من الاعلانات بانتظارك لتفقده\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"Triangle--spacer\"></div>\n\t\t</div>\n\t</div>\n\t<div class=\"Content\">\n\t\t<div class=\"GridContainer customPage\">\n\n\t\t\t<h1>شروط الاستخدام</h1>\n\t\t\t<h3>شروط الاستخدام</h3>\n\t\t\t<span>\nمرحبا بكم في موقع دلّال للإعلانات المبوبة. توضح هذه الصفحة شروط الاستخدام التي يتيح لك موقع دلّال بموجبها الدخول إلى الموقع واستخدامه، سواء بصفة زائر أو مستخدم مسجل. لذلك نرجو قراءة شروط الاستخدام هذه بعناية قبل أن تبدأ باستخدام الموقع.\n\nوبمجرد دخولك إلى الموقع واستخدامك إياه، تكون قد قبلت بشروط الاستخدام هذه ووافقت على الالتزام بها.\n\nوإذا لم توافق على هذه الشروط، فلا يسمح لك باستخدام الموقع.\n\n</span>\n\n\t\t\t<h3>\n\t\t\t\tمحتوى الاعلان\n\n\t\t\t</h3>\n\t\t\t<span>\nالمحتوى الموجود على موقع دلّال نابع من المستخدمين والأعضاء المسجلين في الموقع، وبالتالي لا يتحمل موقع دلّال اي مسؤولية عن المحتوى المُضاف ويتحمل المستخدمين كافة المسؤولية. يقوم موقع دلّال بدور رقابي على الإعلانات والمحتوى المُضاف من قبل المستخدمين بطريقتين، قبل الإضافة (ولا تشمل جميع الإعلانات) حيث ان بعض الإعلانات لا تظهر على الموقع إلا بموافقة إدارة الموقع، والنوع الثاني، بعد الإضافة، حيث تظهر الإعلانات على الموقع ومن ثم يتم مراقبتها وتصحيحيها إن لزم الأمر.\nولذلك، لا يسمح للعضو بنشر إعلانات بمحتوى مُخالف لسياسة المحتوى لشركة دلّال سواء على الموقع الإلكتروني الخاص بالشركة أو على الصفحات الإجتماعية. مع العلم أن مثل هذه الإعلانات سوف يتم حذفها مباشرة من قبل مسؤولي الموقع. وكمثال عليها لا للحصر:\n \n<ul>\n\t<li>\nالإعلانات المكررة، حيث لا يسمح بتكرار الإعلان أكثر من مرة واحدة، بدلاً عن ذلك يمكن إعادة نشرها. والعضويات المكررة حيث لا يجوز أن يمتلك العضو أكثر من عضوية واحدة، وسيتم حذف العضويات الجديدة والابقاء على الأقدم، حيث يتم التأكيد عليها من قبل فريق مراقبة المحتوى ومن ثم تعطيلها.\n\t</li>\n\t<li>\nإعلانات النصب والاحتيال مثل: (إعلانات وهمية للسيارات والهواتف الخلوية والقروض والتي هدفها النصب على مستخدمين الموقع) حيث يتم التأكيد عليها من قبل فريق مراقبة المحتوى ومن ثم تعطيلها.\n\t</li>\n\t<li>\nإعلانات جمع السير الذاتية حيث يتم التأكيد عليها من قبل فريق مراقبة المحتوى ومن ثم تعطيلها.\n\t</li>\n\t<li>\nإعلانات شركات التوظيف والتي تهدف الى جمع السير الذاتية وبيعها، حيث يتم التأكيد عليها من قبل فريق مراقبة المحتوى ومن ثم تعطيلها.\n\t</li>\n\t<li>\nالإعلانات التي ثبت بأن المعلن عنها قام بمخالفة وتم التبليغ عنها من قبل مستخدمين آخرين من الموقع أو ثبت أنها بخصوص إزعاج مستخدمين أخرين. حيث يتم التأكيد عليها من قبل فريق مراقبة المحتوى ومن ثم تعطيلها.\nالإعلانات التي تحتوي على (بيع أو تأجير أو تداول أو الإعلان أو الترويج) للمواد الممنوعة على موقع دلّال مثل: (بيع الأعضاء البشرية، الأسلحة، الآثار، الحشيش والمخدرات وما شابهها، والممنوعات بكافة انواعها، وذلك يحدد حسب قانون الجمهورية العربية السورية) بالإضافة الى الذم والقدح والتشهير والشتائم والكلمات المخلّة للآداب والعرف العام.\n\n\t</li>\n <li>\nإعلانات أعمال التخريب مثل: (الإيذاء والقاتل المأجور والحرق والقتل والاغتصاب والتكسير والضرب وعصابات العنف) وما شابه ذلك.\n </li>\n <li>\nإعلانات السحر والشعوذة (سواء الخدمات أو بيع أشياء ذات علاقة بها مثل: الخواتم والتعويذات).\n </li>\n <li>\nإعلانات العلاج بالقرآن، مثل: (علاج بالرقية الشريعة لعلاج الحسد والسحر والمس).     \n </li>\n <li>\nالإعلانات الترويجية خصوصاً إذا كانت لمواقع أو قنوات تلفزيونية أو دعاية لشركة دون وجود منتج فعلي في الإعلان. وهدفها الترويج لمواقع أو منتديات أو التجارة الإلكترونية، والإعلانات العادية التي تحتوي على روابط خارجية بقصد الترويج.\n </li>\n <li>\nإعلانات التسويق الشبكي كإعلانات الربح عن طريق الإنترنت مثل: (الربح عن طريق الكليك أو النقرات أو تجارة الفوركس)\n </li>\n <li>\nإعلانات الزواج والتعارف أو الخطابة غير مسموح بنشرها، حيث أن هدفها ليس تجاري مطلقاً. \n </li>\n <li>\nإعلانات خدمات شطب السيارات القديمة والغير صالحة او منتهية التسجيل وإعلانات سيارات او دراجات لا توجد لها تسجيل ساري الصلاحية مثل (سيارات غير مرخصة أو درجات غير مرخصة للبيع). وهي غير مسموحة ويعاقب قانون الجمهورية العربية السورية على حيازتها أو الإتجار بها. \n </li>\n <li>\nالإعلانات غير الواضحة وليس لها صلة بالهدف الذي من أجله أنشئ موقع دلّال، وعلى سبيل المثال لا الحصر الإعلانات التالية: (طلب مساعدات مالية، التبليغ عن شخص أو إعلانات التشهير) وهدفها أن تُشهر بالأفراد والشركات.    \n </li>\n <li>\nإعلانات الأجهزة الكهربائية الممنوعة مثل: (أجهزة كشف الذهب، أجهزة التنصت، قلم تصوير، كاميرا صغيرة، صاعق كهربائي، أجهزة فك التشفير، أجهزة كشف الرادار أو اللاسلكي) وما شابه ذلك من الأجهزة، وكذلك إعلانات (الأدوات أو الأدوية الجنسية) وهي غير مسموحة ويعاقب قانون الجمهورية العربية السورية ا على حيازتها أو الإتجار بها.\n </li>\n <li>\nإعلانات بيع العملات الأثرية أو اي نوع من الآثار القديمة حيث يعاقب قانون الجمهورية العربية السورية على حيازتها او التجارة بها.\n </li>\n <li>\nإعلانات مطلوب مساعدة مالية، قروض وغيرها والتي تطلب إرسال مبالغ مالية مسبقاً.\n </li>\n <li>\nإعلانات بيع الحيوانات الخطيرة مثل: (الأفاعي، النمور، الأسود).\n  </li>\n <li>          \nإعلانات بيع الدخان أو التبغ أو السيجارأو الغليون أو الأرجيلة وما شابه ذلك، وأي إعلان يروّج عنها مثل: إعلانات ضمان وبيع وإيجار محلات بيع الدخان والمقاهي. \n </li>\n <li>\nإعلانات تأشيرات للبيع أو للتنازل أو مطلوب مثل؛ (الحصول على فيزا إلى دولة معينة).                   \n </li>\n <li>\nإعلانات بيع ريسيفرات ومحطات مدفوعة وغيرها عبر أقمار أخرى والتي لا يكون المعلن عيها وكيلاً رسمياً للخدمة. \n </li>\n <li>\nإعلانات بيع فيش الألعاب مثل: فيش لعبة 8 pool ball coins, poker للبيع والتي تهدف إلى المقامرة. \n </li>\n <li>\nإعلانات مطلوب سلع او خدمات للشراء مثل: (مطلوب سيارات أو أراضي أو خدمات أو مشاريع أو شركاء لمشاريع) بالإضاقة الى اعلانات مطلوب من غير تفاصيل كاملة حول المطلوب.\n </li>\n <li>\nإعلانات بيع الملابس والفساتين الني لا تحتوي على صور، والتي تحتوي على صور غير لائقة وتخل بالآداب العامة. \n </li>\n <li>\nالإعلانات العادية، ولكن جزء من مواصفات الإعلان موجود على رابط فيسبوك أو رابط خارجي يتم نقل أو تنزيل ثم تحميل جزء مواصفات الإعلان من صفحة الفيسبوك أو الرابط الخارجي إلى داخل الإعلان ويتم حذف الرابط.\n </li>\n <li>\nالإعلانات الدولية عن سلع أو منتجات موجودة خارج البلاد العربية المنتشر بها موقع دلّال، أو نشر إعلانات خارج نطاق الدولة المعلن بها في موقع دلّال. \n \n</li>\n <li>\nأما بالنسبة لاسم المستخدم، احرص على انتقاء اسم ذو معنى، لائق من الناحية الأخلاقية والعرف العام والثقافة العربية، ولا يرتبط بشركة او فئة معينة ولا التشبيه باسم يرتبط ب ”موقع دلّال” أو “Dlaaal\"، مثل: (إدارة موقع دلّال، كونترول موقع دلّال...) ويحبذ استخدام اسمك الشخصي عوضاً عنه وتجنّب استخدام الكلمات المسيئة.\n</li>\n\n</ul> \n</span>\n\n\t\t\t<h3>\n\t\t\t\tنصائح التعامل الآمن\n\t\t\t</h3>\n\t\t\t<span>\nنصائح لتتعرف على الإعلانات المشكوك فيها:\n</span>\n<ul>\n\t\t\t<li><h4>\n\t\t\t\tلا ترسل أي مبالغ مالية\n\t\t\t</h4></li>\n\t\t\t<span>\nعادة ما يطلب المعلنون المشكوك بأمرهم تحويل مبالغ مالية (أو جزء من المبلغ المالي) إلكترونياً او عن طريق مكاتب التحويل.\n</span>\n\t\t\t<li><h4>\n\t\t\t\tصيغة الإعلان ووجود الأخطاء اللغوية والإملائية\n\t\t\t</h4></li>\n\t\t\t<span>\nوذلك بسبب أن المعلنين المشكوك بأمرهم عادة ما يكونون من جنسيات غير عربية، فيلجئون إلى ترجمة الإعلانات إلى العربية. فيبدو الإعلان غريباً. \n</span>\n\t\t\t<li><h4>\n\t\t\t\tصور المنتج\n\t\t\t</h4></li>\n\t\t\t<span>\nعادة ما يستخدم المحتالين صور من الإنترنت، لانه يستسهل الأمر، ولا يوجد لديه منتج فعلي.\n</span>\n\n\t\t\t<li><h4>\n\t\t\t\tإعلان بعرض مغري غير منطقي\n\t\t\t</h4></li>\n\t\t\t<span>\nعادة ما يقوم المعلنون المشكوك بأمرهم انّ يضعوا اعلان مغري يكاد لا يصدق. مثال منتج بحالة رائعة ولدواعى السفر بنصف الثمن، لذا عليك ان تتوخى الحذر عند التعامل مع مثل هؤلاء المعلنين.\n</span>\n\t\t\t<li><h4>\n\t\t\t\tتأكد من سعر المنتج\n\t\t\t</h4></li>\n\t\t\t<span>\nعادة ما يضع المعلنون المشكوك بأمرهم أسعار غير منطقية لجذب المشترين والإحتيال عليهم، تأكد من متوسط سعر المنتج الذي ترغب في شراءه.\n</span>\n\t\t\t<li><h4>\n\t\t\t\tالشروع في إتمام الصفقة:\n\t\t\t</h4></li>\n\t\t\t<span>\nتفحص المُراد شراءه بشكل جيد للتأكد من سلامته، كما ننصحك بالتأكد من الأوراق الثبوتية (في حال تطلب الأمر)\n</span>\n\n</ul>\n\t\t\t<h3>\n\t\t\t\tالخصوصية\n\t\t\t</h3>\n\t\t\t<span>\nيرجى مراجعة سياسة الخصوصية والتي تحكم أيضا زيارتك لموقع دلّال لفهم أكثر لممارساتنا.\n</span>\n\t\t\t<h3>\n\t\t\t\tحقوق الطبع والنشر للمحتوى\n\t\t\t</h3>\n\t\t\t<span>\nجميع المحتويات الواردة في هذا الموقع، مثل النصوص والرسومات والشعارات، والأيقونات، والصور والصوت، والتنزيلات الرقمية، وتجميع البيانات، هو ملك لموقع دلّال وهي مضمونه ومحمية. جميع محتويات هذا الموقع هي ملكية حصرية لموقع دلّال. فلا يحق لك نسخ أو تعديل أي شيء عالموقع من حيث المحتوى. كما لا يحق لك الدخول إلى قاعدة البيانات الخاصة او استخدام اي برمجية تخترق صفحات موقع دلّال.\n</span>\n\t\t\t<h3>\n\t\t\t\tنفي الضمان وعدم تحمل المسؤولية\n\t\t\t</h3>\n\t\t\t<span>\n\t\t\tإنك تقر وتوافق على أن استخدام الموقع الالكتروني والخدمات هو تماماً على مسؤوليتك الخاصة ، وأن الموقع و الخدمة هي مقدمة على\n\t\t\tأساس \"كما هي\" أو \" كما هي متاحة\" دون أي ضمانات من أي نوع. موقع دلّال لا يتحمل أية ضمانات أو إقرارات حول دقة أو اكتمال\n\t\t\tمحتوى الموقع أو محتوى أي مواقع طرف ثالث له علاقة بالموقع و لا تتحمل أية مسؤولية أو مسائلة لأي أخطاء ، أو الإصابة الشخصية\n\t\t\tأو أضرار في الممتلكات من أي نوع، الناتجة عن الوصول إليك واستخدام الموقع و الخدمة، أي دخول غير مصرح إليك أو استخدام خدمتنا\n\t\t\tو / أو أي جميع المعلومات الشخصية و / أو المعلومات المالية المخزنة، الفيروسات، أو ما شابه ذلك والتي قد تكون مرسلة إليك\n\t\t\tأو عبر الموقع الإلكتروني من قبل أي طرف ثالث، و / ​​أو أي أخطاء أو حذف في أي محتوى أو عن أي خسارة أو ضرر من أي نوع يتم\n\t\t\tتكبده كنتيجة لاستعمال أي محتوى تم نشره بالبريد الإلكتروني ، لنقلها أو إتاحتها عبر الموقع الإلكتروني أو الخدمة. موقع دلّال\n\t\t\tلا يتحمل المسؤولية عن أي منتج أو الخدمة المعلن عنها أو التي يقدمها طرف ثالث عن طريق الموقع او اي موقع بارتباط تشعبي أو\n\t\t\tواردة في أي شعار أو دعاية أخرى.\n\t\t\t</span>\n\t\t\t<h3>\n\t\t\t\tاتصل بنا\n\t\t\t</h3>\n\t\t\t<span>\nإن كان لديك أي استفسار حول شروط الإستخدام، الرجاء الاتصال بنا عن طريق البريد الإكتروني: <b>info@dlaaal.com</b>  بعنوان \"شروط الاستخدام\".\n\t</span>\n\n\n\t\t</div>\n\n\n\n\t</div>\n\t<!--Below main container end-->\n</div>"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'terms',
            template: __webpack_require__("../../../../../src/app/terms/terms.component.html"),
            styles: [__webpack_require__("../../../../../src/app/terms/terms.component.scss")]
        })
    ], TermsComponent);
    return TermsComponent;
}());



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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
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