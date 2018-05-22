webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_transaction_component__ = __webpack_require__("./src/app/transaction/transaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transaction_info_transaction_info_component__ = __webpack_require__("./src/app/transaction-info/transaction-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transaction_form_transaction_form_component__ = __webpack_require__("./src/app/transaction-form/transaction-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: 'transaction', component: __WEBPACK_IMPORTED_MODULE_2__transaction_transaction_component__["a" /* TransactionComponent */] },
    { path: 'transaction-info', component: __WEBPACK_IMPORTED_MODULE_4__transaction_info_transaction_info_component__["a" /* TransactionInfoComponent */] },
    { path: 'transaction-form', component: __WEBPACK_IMPORTED_MODULE_5__transaction_form_transaction_form_component__["a" /* TransactionFormComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".align-center{\n    text-align: center;\n    margin-top: 60px;\n}\n\n.logout{\n    text-align: center;\n    margin-top: 10px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <div class=\"row\">\n    <div class=\"col-sm-2\">\n    </div>\n    <div class=\"col-sm-8\">\n      <h1>\n        <span *ngIf=\"isUserAuthenticated()\">\n            {{ title }}\n        </span>\n        <span *ngIf=\"!isUserAuthenticated()\">\n            Welcome to {{ title }}!\n        </span>        \n      </h1>\n    </div>\n    <div class=\"col-sm-2\">\n      <div *ngIf=\"isUserAuthenticated()\" class=\"logout\">\n          <button class=\"btn btn-success\" (click)=\"logout()\">Logout</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_logout_service__ = __webpack_require__("./src/app/service/logout.service.ts");
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





var AppComponent = (function () {
    function AppComponent(router, userService, logoutService, document) {
        this.router = router;
        this.userService = userService;
        this.logoutService = logoutService;
        this.document = document;
        this.githubLogoutUrl = "https://github.com/logout";
        this.title = 'Transaction View';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser().subscribe(function (response) {
            // for each subscription
            _this.user = response;
        }, function () {
            // error
        }, function () {
            // complete
            if (_this.isUserAuthenticated()) {
                _this.gotoTransactionView();
                console.log("user: " + JSON.stringify(_this.user));
            }
        });
    };
    AppComponent.prototype.isUserAuthenticated = function () {
        return (this.user && this.user.authenticated == "true");
    };
    AppComponent.prototype.gotoTransactionView = function () {
        this.router.navigate(['transaction']);
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.logoutService.logout().subscribe(function () { }, function () {
            _this.gotoGitHubLogoutWebsite();
        }, function () {
            _this.gotoGitHubLogoutWebsite();
        });
    };
    AppComponent.prototype.gotoGitHubLogoutWebsite = function () {
        this.document.location.href = this.githubLogoutUrl;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__service_logout_service__["a" /* LogoutService */], Object])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_service_module__ = __webpack_require__("./src/app/service/service.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transaction_transaction_component__ = __webpack_require__("./src/app/transaction/transaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__transaction_info_transaction_info_component__ = __webpack_require__("./src/app/transaction-info/transaction-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__transaction_form_transaction_form_component__ = __webpack_require__("./src/app/transaction-form/transaction-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_date_value_accessor__ = __webpack_require__("./src/app/shared/date-value-accessor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_validation_control_messages_component__ = __webpack_require__("./src/app/shared/validation/control-messages.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__transaction_transaction_component__["a" /* TransactionComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__transaction_info_transaction_info_component__["a" /* TransactionInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_9__transaction_form_transaction_form_component__["a" /* TransactionFormComponent */],
                __WEBPACK_IMPORTED_MODULE_10__shared_date_value_accessor__["a" /* DateValueAccessor */],
                __WEBPACK_IMPORTED_MODULE_11__shared_validation_control_messages_component__["a" /* ControlMessagesComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__service_service_module__["a" /* AppServiceModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".align-center{\n    text-align: center;\n    margin-top: 60px;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"align-center container\">\n  <h4>Please login with <a href=\"/login/github\">GitHub</a> to view the transactions</h4>\n  <h4>OR</h4>\n  <h4>Sign Up GitHub <a href=\"https://github.com/join\">Here</a></h4>\n  <img src=\"/assets/images/GitHub.jpg\">\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/model/transaction.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TransactionItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionDetail; });
var TransactionItem = (function () {
    function TransactionItem(id, transactionDate, requestor, location, status) {
        this.id = id;
        this.transactionDate = transactionDate;
        this.requestor = requestor;
        this.location = location;
        this.status = status;
    }
    return TransactionItem;
}());

var TransactionDetail = (function () {
    function TransactionDetail(id, transactionDate, requestor, location, status, transactionCode, description) {
        this.id = id;
        this.transactionDate = transactionDate;
        this.requestor = requestor;
        this.location = location;
        this.status = status;
        this.transactionCode = transactionCode;
        this.description = description;
    }
    return TransactionDetail;
}());



/***/ }),

/***/ "./src/app/service/logout.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutService = (function () {
    function LogoutService(http) {
        this.http = http;
        this.userUrl = '/logout';
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
        };
    }
    LogoutService.prototype.logout = function () {
        var url = this.userUrl;
        return this.http.post(url, this.httpOptions);
    };
    LogoutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LogoutService);
    return LogoutService;
}());



/***/ }),

/***/ "./src/app/service/service.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppServiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transaction_service__ = __webpack_require__("./src/app/service/transaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logout_service__ = __webpack_require__("./src/app/service/logout.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppServiceModule = (function () {
    function AppServiceModule() {
    }
    AppServiceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientXsrfModule */].withOptions({
                    cookieName: 'XSRF-TOKEN',
                    headerName: 'X-XSRF-TOKEN',
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__transaction_service__["a" /* TransactionService */], __WEBPACK_IMPORTED_MODULE_5__logout_service__["a" /* LogoutService */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ]
        })
    ], AppServiceModule);
    return AppServiceModule;
}());



/***/ }),

/***/ "./src/app/service/transaction.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
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



var TransactionService = (function () {
    function TransactionService(document, http) {
        this.document = document;
        this.http = http;
        this.transactionUrl = 'http://localhost:8000/api/transaction/';
        this.logoMap = new Map();
        this.imgPath = "/assets/images/";
        // for better design, it can be loaded from service or properties file.
        this.logoMap.set('Organization One', 'girl_1.ico');
        this.logoMap.set('Organization Two', 'girl_2.ico');
        this.logoMap.set('Organization Three', 'girl_3.ico');
        this.logoMap.set('Organization Four', 'girl_4.ico');
        this.logoMap.set('Organization Five', 'girl_5.ico');
        this.logoMap.set('Organization Six', 'girl_6.ico');
        this.logoMap.set('Organization Seven', 'girl_7.ico');
        this.logoMap.set('Organization Eight', 'girl_8.ico');
        this.logoMap.set('Organization Nine', 'girl_9.ico');
        this.logoMap.set('Organization Ten', 'girl_10.ico');
    }
    TransactionService.prototype.getHttpOptions = function () {
        var httpOptions = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json',
                'X-XSRF-TOKEN': this.getCookie('XSRF-TOKEN') })
        };
        return httpOptions;
    };
    TransactionService.prototype.getCookie = function (name) {
        var ca = document.cookie.split(';');
        var caLen = ca.length;
        var cookieName = name + "=";
        var c;
        for (var i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    };
    TransactionService.prototype.getRequestorLogo = function (requestor) {
        var logoImg = this.logoMap.get(requestor);
        if (logoImg) {
            logoImg = this.imgPath + logoImg;
        }
        else {
            logoImg = "";
        }
        return logoImg;
    };
    TransactionService.prototype.getTransactions = function () {
        var url = this.transactionUrl + 'list';
        return this.http.get(url);
    };
    TransactionService.prototype.getTransactionDetail = function (id) {
        var url = this.transactionUrl + 'get/' + id;
        return this.http.get(url);
    };
    TransactionService.prototype.deleteTransactionDetail = function (id) {
        var url = this.transactionUrl + 'remove/' + id;
        return this.http.delete(url, this.getHttpOptions());
    };
    TransactionService.prototype.addTransactionDetail = function (transactionDetail) {
        var url = this.transactionUrl + 'save';
        return this.http.post(url, transactionDetail, this.getHttpOptions());
    };
    TransactionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TransactionService);
    return TransactionService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.userUrl = 'http://localhost:8000/api/user/';
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
        };
    }
    UserService.prototype.getUser = function () {
        var url = this.userUrl;
        return this.http.get(url);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/date-value-accessor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DATE_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateValueAccessor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// date-value-accessor.ts


var DATE_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return DateValueAccessor; }),
    multi: true
};
/**
 * The accessor for writing a value and listening to changes on a date input element
 *
 *  ### Example
 *  `<input type="date" name="myBirthday" ngModel useValueAsDate>`
 */
var DateValueAccessor = (function () {
    function DateValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    DateValueAccessor.prototype.writeValue = function (value) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'valueAsDate', value);
    };
    DateValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DateValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    DateValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('input', ['$event.target.valueAsDate']),
        __metadata("design:type", Object)
    ], DateValueAccessor.prototype, "onChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('blur', []),
        __metadata("design:type", Object)
    ], DateValueAccessor.prototype, "onTouched", void 0);
    DateValueAccessor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[useValueAsDate]',
            providers: [DATE_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], DateValueAccessor);
    return DateValueAccessor;
}());



/***/ }),

/***/ "./src/app/shared/validation/control-messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlMessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validation_service__ = __webpack_require__("./src/app/shared/validation/validation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ControlMessagesComponent = (function () {
    function ControlMessagesComponent() {
    }
    Object.defineProperty(ControlMessagesComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return __WEBPACK_IMPORTED_MODULE_2__validation_service__["a" /* ValidationService */].getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */])
    ], ControlMessagesComponent.prototype, "control", void 0);
    ControlMessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'control-messages',
            template: "<div class=\"alert alert-danger\" *ngIf=\"errorMessage !== null\">{{errorMessage}}</div>"
        }),
        __metadata("design:paramtypes", [])
    ], ControlMessagesComponent);
    return ControlMessagesComponent;
}());



/***/ }),

/***/ "./src/app/shared/validation/validation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'Required',
            'invalidBirthdate': 'Please select birthdate',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': "Minimum length " + validatorValue.requiredLength
        };
        return config[validatorName];
    };
    ValidationService.birthdateValidator = function (control) {
        // birthdate cannot be 1990-01-01
        var initDate = new Date("1990-01-01");
        if (initDate !== control.value) {
            return null;
        }
        else {
            return { 'invalidBirthdate': true };
        }
    };
    ValidationService.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    return ValidationService;
}());



/***/ }),

/***/ "./src/app/transaction-form/transaction-form.component.css":
/***/ (function(module, exports) {

module.exports = ".cursor-pointer{\n    cursor: pointer;\n    text-decoration: none;\n}\n.center {\n    display: block;\n    margin: 0 auto;\n}\na:hover { text-decoration: none; margin:-5px 0 0 0; }\n.right{\n    float: right;\n}\n@media (min-width: 768px) { .container { max-width: 750px; } }\n.align-left{\n    text-align: left;\n}\n.align-right{\n    text-align: right;\n}\n.align-center{\n    text-align: center;\n}\n.margin-top-20{\n    margin-top:20px\n}\n.margin-bottom-20{\n    margin-bottom:20px\n}\n/* resize images */\n.small_img {\n    width: 30px;\n    height: auto;\n}\n.show_window{\n    width: 700px;\n    padding: 2px;\n    display: table;\n    border-top: 2px solid lightgrey;\n    border-bottom: 2px solid lightgrey;\n    margin-top:20px;\n    margin-bottom: 20px;\n}\n.button_ctl {\n    width: 100px;\n    border: 2px solid red;\n    padding: 2px;\n    border-radius: 25px;\n}\n.align_bottom{\n    padding: 10px\n}"

/***/ }),

/***/ "./src/app/transaction-form/transaction-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div align=\"center\">\n    <p>\n      Transaction Detail (Add)\n    </p>\n  </div>\n  \n  <div *ngIf=\"transactionForm\" align=\"center\">\n    <form [formGroup]=\"transactionForm\" novalidate>\n        <div class=\"show_window\">\n          <div class=\"row margin-top-20\">\n            <div class=\"col-sm-3 align-left\">\n                <label for=\"transactionDate\">Transaction Date:</label>              \n            </div>\n            <div class=\"col-sm-9 align-left\">\n                <input type=\"date\" class=\"form-control\" id=\"transactionDate\" \n                name=\"transactionDate\" formControlName=\"transactionDate\" useValueAsDate>\n                <control-messages [control]=\"transactionForm.controls.transactionDate\"></control-messages>\n            </div>\n          </div>\n          <div class=\"row margin-top-20\">\n            <div class=\"col-sm-3 align-left\">\n                <label for=\"requestor\">Requestor:</label>\n            </div>\n            <div class=\"col-sm-9 align-left\">\n              <select class=\"form-control\" id=\"requestor\" name=\"requestor\" formControlName=\"requestor\">\n                  <option value=\"Organization One\">Organization One</option>\n                  <option value=\"Organization Two\">Organization Two</option>\n                  <option value=\"Organization Three\">Organization Three</option>\n                  <option value=\"Organization Four\">Organization Four</option>\n                  <option value=\"Organization Five\">Organization Five</option>\n                  <option value=\"Organization Six\">Organization Six</option>\n                  <option value=\"Organization Seven\">Organization Seven</option>\n                  <option value=\"Organization Eight\">Organization Eight</option>\n                  <option value=\"Organization Nine\">Organization Nine</option>\n                  <option value=\"Organization Ten\">Organization Ten</option>\n                </select>\n                <control-messages [control]=\"transactionForm.controls.requestor\"></control-messages>\n            </div>\n          </div>\n          <div *ngIf=\"getRequestorLogo()\" class=\"row margin-top-20\">\n            <div class=\"col-sm-3 align-left\">\n              <label>Requestor Logo:</label>\n            </div>\n            <div class=\"col-sm-9 align-left\">\n              <img [src]=\"getRequestorLogo()\">\n            </div>\n          </div>    \n          <div class=\"row margin-top-20\">\n            <div class=\"col-sm-3 align-left\">\n                <label for=\"location\">Location:</label>\n            </div>\n            <div class=\"col-sm-9 align-left\">\n              <input type=\"text\" class=\"form-control\" id=\"location\" placeholder=\"Location\" name=\"location\" formControlName=\"location\" >\n              <control-messages [control]=\"transactionForm.controls.location\"></control-messages>\n            </div>\n          </div>\n          <div class=\"row margin-top-20\">\n            <div class=\"col-sm-3 align-left\">\n                <label for=\"status\">Status:</label>\n            </div>\n            <div class=\"col-sm-9 align-left\">\n              <select class=\"form-control\" id=\"status\" name=\"status\" formControlName=\"status\">\n                  <option value=\"Open\">Open</option>\n                  <option value=\"Completed\">Completed</option>\n                  <option value=\"Rejected\">Rejected</option>\n                  <option value=\"Pending\">Pendiing</option>\n              </select>\n              <control-messages [control]=\"transactionForm.controls.status\"></control-messages>\n            </div>\n          </div>\n          <div class=\"row margin-top-20\">\n            <div class=\"col-sm-3 align-left\">\n                <label for=\"transactionCode\">TransactionCode:</label>\n            </div>\n            <div class=\"col-sm-9 align-left\">\n              <input type=\"text\" class=\"form-control\" id=\"transactionCode\" placeholder=\"Transaction Code\" name=\"transactionCode\" formControlName=\"transactionCode\" >\n              <control-messages [control]=\"transactionForm.controls.transactionCode\"></control-messages>\n            </div>\n          </div>\n          <div class=\"row margin-top-20 margin-bottom-20\">\n            <div class=\"col-sm-3 align-left\">\n                <label for=\"description\">Description:</label>\n            </div>\n            <div class=\"col-sm-9 align-left\">\n              <input type=\"text\" class=\"form-control\" id=\"description\" placeholder=\"description\" name=\"Description\" formControlName=\"description\" >\n              <control-messages [control]=\"transactionForm.controls.description\"></control-messages>\n            </div>\n          </div>\n        </div>  \n        <div class=\"align_bottom\">\n          <button [disabled]=\"transactionForm.pristine || transactionForm.invalid || submitted\" class=\"button_ctl\" (click)=\"onSubmit()\">Submit</button>\n          <button class=\"button_ctl\" (click)=\"onCancel()\">Cancel</button>\n        </div>\n    </form>\n  </div>\n"

/***/ }),

/***/ "./src/app/transaction-form/transaction-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_transaction_service__ = __webpack_require__("./src/app/service/transaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_transaction__ = __webpack_require__("./src/app/model/transaction.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TransactionFormComponent = (function () {
    function TransactionFormComponent(route, transactionService, fb, router) {
        this.route = route;
        this.transactionService = transactionService;
        this.fb = fb;
        this.router = router;
        this.submitted = false;
    }
    TransactionFormComponent.prototype.ngOnInit = function () {
        this.initObject();
    };
    TransactionFormComponent.prototype.initObject = function () {
        this.transactionDetail = new __WEBPACK_IMPORTED_MODULE_5__model_transaction__["a" /* TransactionDetail */](null, new Date(), '', '', '', '', '');
        this.createForm();
    };
    TransactionFormComponent.prototype.createForm = function () {
        this.transactionForm = this.fb.group({
            transactionDate: [this.transactionDetail.transactionDate, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]],
            requestor: [this.transactionDetail.requestor, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]],
            location: [this.transactionDetail.location, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]],
            status: [this.transactionDetail.status, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]],
            transactionCode: [this.transactionDetail.transactionCode, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]],
            description: [this.transactionDetail.description, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]]
        });
    };
    TransactionFormComponent.prototype.prepareSaveTransaction = function () {
        var formModel = this.transactionForm.value;
        // return new transactionDetail object containing a 
        // deep copy of changed form model values
        var saveTransaction = new __WEBPACK_IMPORTED_MODULE_5__model_transaction__["a" /* TransactionDetail */](null, formModel.transactionDate, formModel.requestor, formModel.location, formModel.status, formModel.transactionCode, formModel.description);
        return saveTransaction;
    };
    TransactionFormComponent.prototype.getRequestorLogo = function () {
        var requestor = this.transactionForm.value.requestor;
        var imgSrc = null;
        if (requestor) {
            imgSrc = this.transactionService.getRequestorLogo(requestor);
        }
        return imgSrc;
    };
    TransactionFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        var transactionDetail = this.prepareSaveTransaction();
        this.transactionService.addTransactionDetail(transactionDetail).subscribe(function (res) {
            _this.gotoTransactionListPage('updated');
        });
    };
    TransactionFormComponent.prototype.onCancel = function () {
        this.gotoTransactionListPage('none');
    };
    TransactionFormComponent.prototype.gotoTransactionListPage = function (action) {
        this.router.navigate(['transaction', { actionDone: action }]);
    };
    TransactionFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-transaction-form',
            template: __webpack_require__("./src/app/transaction-form/transaction-form.component.html"),
            styles: [__webpack_require__("./src/app/transaction-form/transaction-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__service_transaction_service__["a" /* TransactionService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], TransactionFormComponent);
    return TransactionFormComponent;
}());



/***/ }),

/***/ "./src/app/transaction-info/transaction-info.component.css":
/***/ (function(module, exports) {

module.exports = ".align-left{\n    text-align: left;\n}\n.align-right{\n    text-align: right;\n}\n.align-center{\n    text-align: center;\n}\n.margin-top-20{\n    margin-top:20px\n}\n.margin-bottom-20{\n    margin-bottom:20px\n}\n/* resize images */\n.small_img {\n    width: 30px;\n    height: auto;\n}\n.show_window{\n    width: 700px;\n    padding: 2px;\n    display: table;\n    border-top: 2px solid lightgrey;\n    border-bottom: 2px solid lightgrey;\n    margin-top:20px;\n    margin-bottom: 20px;\n}\n.button_ctl {\n    width: 100px;\n    border: 2px solid red;\n    padding: 2px;\n    border-radius: 25px;\n}\n.align_bottom{\n    padding: 10px\n}"

/***/ }),

/***/ "./src/app/transaction-info/transaction-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div align=\"center\">\n  <p>\n    Transaction Detail (View)\n  </p>\n</div>\n\n<div *ngIf=\"transactionDetail\" align=\"center\">\n  <div class=\"show_window\">\n    <div class=\"row margin-top-20\">\n      <div class=\"col-sm-3 align-left\">\n        ID:\n      </div>\n      <div class=\"col-sm-9 align-left\">\n        {{transactionDetail.id}}\n      </div>\n    </div>\n    <div class=\"row margin-top-20\">\n      <div class=\"col-sm-3 align-left\">\n        Transaction Date:\n      </div>\n      <div class=\"col-sm-9 align-left\">\n        {{transactionDetail.transactionDate}}\n      </div>\n    </div>\n    <div class=\"row margin-top-20\">\n      <div class=\"col-sm-3 align-left\">\n        Requestor:\n      </div>\n      <div class=\"col-sm-9 align-left\">\n        {{transactionDetail.requestor}}\n      </div>\n    </div>\n    <div class=\"row margin-top-20\">\n      <div class=\"col-sm-3 align-left\">\n        Requestor Logo:\n      </div>\n      <div class=\"col-sm-9 align-left\">\n        <img [src]=\"getRequestorLogo(transactionDetail.requestor)\">\n      </div>\n    </div>    \n    <div class=\"row margin-top-20\">\n      <div class=\"col-sm-3 align-left\">\n        Location:\n      </div>\n      <div class=\"col-sm-9 align-left\">\n        {{transactionDetail.location}}\n      </div>\n    </div>\n    <div class=\"row margin-top-20\">\n      <div class=\"col-sm-3 align-left\">\n        Status:\n      </div>\n      <div class=\"col-sm-9 align-left\">\n        {{transactionDetail.status}}\n      </div>\n    </div>\n    <div class=\"row margin-top-20\">\n      <div class=\"col-sm-3 align-left\">\n        TransactionCode:\n      </div>\n      <div class=\"col-sm-9 align-left\">\n        {{transactionDetail.transactionCode}}\n      </div>\n    </div>\n    <div class=\"row margin-top-20 margin-bottom-20\">\n      <div class=\"col-sm-3 align-left\">\n        Description:\n      </div>\n      <div class=\"col-sm-9 align-left\">\n        {{transactionDetail.description}}\n      </div>\n    </div>\n  </div>  \n  <div class=\"align_bottom\">\n    <button class=\"button_ctl\" (click)=\"onDelete()\">Delete</button>\n    <button class=\"button_ctl\" (click)=\"onCancel()\">Cancel</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/transaction-info/transaction-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_transaction_service__ = __webpack_require__("./src/app/service/transaction.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransactionInfoComponent = (function () {
    function TransactionInfoComponent(transactionService, route, router) {
        this.transactionService = transactionService;
        this.route = route;
        this.router = router;
        this.isDeleted = false;
    }
    TransactionInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var transactionId = params.get('transactionId');
            console.log("paramMap this.transactionId: " + transactionId);
            _this.transactionService.getTransactionDetail(transactionId).subscribe(function (resp) {
                _this.transactionDetail = resp;
                console.log("paramMap transactionDetail:" + JSON.stringify(_this.transactionDetail));
            });
        });
    };
    TransactionInfoComponent.prototype.getRequestorLogo = function (requestor) {
        return this.transactionService.getRequestorLogo(requestor);
    };
    TransactionInfoComponent.prototype.onCancel = function () {
        this.router.navigate(['transaction', { actionDone: "none" }]);
    };
    TransactionInfoComponent.prototype.onDelete = function () {
        var _this = this;
        if (this.transactionDetail && this.transactionDetail.id) {
            var transactionId = String(this.transactionDetail.id);
            this.transactionService.deleteTransactionDetail(transactionId).subscribe(function (resp) {
                _this.transactionDetail = resp;
                _this.isDeleted = true;
                _this.router.navigate(['transaction', { actionDone: "deleted" }]);
            });
        }
    };
    TransactionInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-transaction-info',
            template: __webpack_require__("./src/app/transaction-info/transaction-info.component.html"),
            styles: [__webpack_require__("./src/app/transaction-info/transaction-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_transaction_service__["a" /* TransactionService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], TransactionInfoComponent);
    return TransactionInfoComponent;
}());



/***/ }),

/***/ "./src/app/transaction/transaction.component.css":
/***/ (function(module, exports) {

module.exports = ".w-auto {\n    width: auto;\n}\n.table-fixed {\n    table-layout: fixed;\n    overflow: hidden;\n    margin-left:auto; \n    margin-right:auto;\n    text-align: center;\n    width:700px;\n}\n.align-left{\n    text-align: left;\n}\n.align-center{\n    text-align: center;\n}\n/* resize images */\n.small_img {\n    width: 30px;\n    height: auto;\n}"

/***/ }),

/***/ "./src/app/transaction/transaction.component.html":
/***/ (function(module, exports) {

module.exports = "<div align=\"center\">\n  <p>\n    List of Transactions\n  </p>\n</div>\n<!--Table-->\n<div align=\"center\" >\n  <table class=\"table table-striped table-responsive table-fixed table-hover\">\n      <thead>\n          <tr>\n              <th>View Detail</th>\n              <th>#Id</th>\n              <th>Transaction Date</th>\n              <th>Requestor</th>\n              <th>Location</th>\n              <th>Status</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr *ngFor=\"let transactionItem of (transactionItem$ | async)\">\n              <td scope=\"row\"><input type=\"radio\" name=\"radiogroup\" (click)=\"viewDetail(transactionItem)\"></td>\n              <td>{{transactionItem.id}}</td>\n              <td>{{transactionItem.transactionDate}}</td>\n              <td>{{transactionItem.requestor}}</td>\n              <td>{{transactionItem.location}}</td>\n              <td>{{transactionItem.status}}</td>\n          </tr>\n          <tr>\n            <td colspan=\"1\" style=\"text-align:center;\"><img (click)=\"addDetail()\" class=\"small_img\" src=\"/assets/images/add.ico\"></td>\n            <td colspan=\"5\">Please click + to add more</td>\n          </tr>\n      </tbody>\n  </table>\n</div>  \n"

/***/ }),

/***/ "./src/app/transaction/transaction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_transaction_service__ = __webpack_require__("./src/app/service/transaction.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransactionComponent = (function () {
    function TransactionComponent(transactionService, router) {
        this.transactionService = transactionService;
        this.router = router;
    }
    TransactionComponent.prototype.ngOnInit = function () {
        this.transactionItem$ = this.transactionService.getTransactions();
    };
    TransactionComponent.prototype.viewDetail = function (transactionItem) {
        if (transactionItem && transactionItem.id) {
            this.router.navigate(['transaction-info', { transactionId: transactionItem.id }]);
        }
    };
    TransactionComponent.prototype.addDetail = function () {
        this.router.navigate(['transaction-form', {}]);
    };
    TransactionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-transaction',
            template: __webpack_require__("./src/app/transaction/transaction.component.html"),
            styles: [__webpack_require__("./src/app/transaction/transaction.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_transaction_service__["a" /* TransactionService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], TransactionComponent);
    return TransactionComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map