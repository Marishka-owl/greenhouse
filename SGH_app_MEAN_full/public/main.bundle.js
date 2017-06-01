webpackJsonp([1,4],{

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getData = function (device_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log("device=" + device_id);
        return this.http.get('http://localhost:3000/device_data/' + device_id, { headers: headers }) //search: params
            .map(function (res) { return res.json(); });
    };
    DataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], DataService);
    return DataService;
    var _a;
}());
//# sourceMappingURL=/home/marina/web/SGH_app_MEAN/angular-src/src/data.service.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigService = (function () {
    function ConfigService(http) {
        this.http = http;
    }
    ConfigService.prototype.getProjects = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log("user_id=" + user._id);
        return this.http.get('http://localhost:3000/projects/' + user._id, { headers: headers }) //search: params
            .map(function (res) { return res.json(); });
    };
    ConfigService.prototype.addProject = function (project) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/projects', project, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ConfigService.prototype.addDevice = function (device) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/devices', device, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ConfigService.prototype.addSensor = function (sensor) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/devices/sensors', sensor, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ConfigService.prototype.addActuator = function (actuator) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/devices/actuators', actuator, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ConfigService.prototype.devicesList = function (project_id) {
        console.log("project_id=" + project_id);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/devices/' + project_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ConfigService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], ConfigService);
    return ConfigService;
    var _a;
}());
//# sourceMappingURL=/home/marina/web/SGH_app_MEAN/angular-src/src/config.service.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/home/marina/web/SGH_app_MEAN/angular-src/src/validate.service.js.map

/***/ }),

/***/ 391:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 391;


/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(510);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/marina/web/SGH_app_MEAN/angular-src/src/main.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(691),
            styles: [__webpack_require__(681)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/marina/web/SGH_app_MEAN/angular-src/src/app.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_config_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_data_service__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_line_chart_line_chart_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_data_table_data_table_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_collapsed_nav_collapsed_nav_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_google_chart_google_chart_component__ = __webpack_require__(514);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_line_chart_line_chart_component__["a" /* LineChartComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_data_table_data_table_component__["a" /* DataTableComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_collapsed_nav_collapsed_nav_component__["a" /* CollapsedNavComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_google_chart_google_chart_component__["a" /* GoogleChartComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_16__services_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_17__services_data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/marina/web/SGH_app_MEAN/angular-src/src/app.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapsedNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CollapsedNavComponent = (function () {
    function CollapsedNavComponent() {
    }
    CollapsedNavComponent.prototype.ngOnInit = function () {
    };
    CollapsedNavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-collapsed-nav',
            template: __webpack_require__(692),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [])
    ], CollapsedNavComponent);
    return CollapsedNavComponent;
}());
//# sourceMappingURL=/home/marina/web/SGH_app_MEAN/angular-src/src/collapsed-nav.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
        this.selected = 0;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    ;
    DashboardComponent.prototype.onClickSelect = function (param) {
        this.selected = param;
        return false;
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(693),
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=/home/marina/web/SGH_app_MEAN/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(222);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableComponent = (function () {
    function DataTableComponent(dataService) {
        this.dataService = dataService;
        this.device_id = "592ce06a49091926c34bfd74";
    }
    DataTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getData(this.device_id).subscribe(function (data) {
            _this.rows = data.data;
            console.log(_this.rows);
        });
        /*this.device = {
            name: "dev1",
            data: [
                {name: "sens1", value: "1"},
                {name: "sens2", value: "2"},
                {name: "sens3", value: "3"},
                {name: "sens4", value: "4"},
                {name: "sens5", value: "5"},
                {name: "sens6", value: "6"}
            ],
            date: "2013-03-30 22:00:00"
        };*/
        //this.rows = [0,1,2,3,4,5,6,7,8,9,10];
        //console.log(this.device.data);
    };
    DataTableComponent.prototype.onClickButton = function () {
        /*this.device.date = "2013-04-01 22:00:00";
        for(let i=0; i<6; i++)
          this.device.data[i].value = i+2;*/
        //console.log(this.chartData2);
        this.loadData();
    };
    DataTableComponent.prototype.loadData = function () {
        var _this = this;
        this.dataService.getData(this.device_id).subscribe(function (data) {
            _this.rows = data.data;
            console.log(_this.rows);
        });
    };
    DataTableComponent.prototype.formatDate = function (mongodb_date) {
        var d = new Date(mongodb_date);
        var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" +
            d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
        return datestring;
        //return new Date(mongodb_date);
    };
    DataTableComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-data-table',
            template: __webpack_require__(694),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === 'function' && _a) || Object])
    ], DataTableComponent);
    return DataTableComponent;
    var _a;
}());
//# sourceMappingURL=/home/marina/web/SGH_app_MEAN/angular-src/src/data-table.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoogleChartComponent = (function () {
    function GoogleChartComponent(element) {
        this.element = element;
        this._element = this.element.nativeElement;
    }
    GoogleChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            google.charts.load('current', { 'packages': ['corechart'] });
            setTimeout(function () {
                _this.drawGraph(_this.chartOptions, _this.chartType, _this.chartData, _this._element);
            }, 1000);
        }, 1000);
    };
    GoogleChartComponent.prototype.drawGraph = function (chartOptions, chartType, chartData, ele) {
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var chart = new google.visualization.ChartWrapper({
                chartType: chartType,
                dataTable: chartData,
                options: chartOptions || {},
                containerId: ele.id
            });
            chart.draw();
            var options = {
                width: 400,
                height: 240,
                vAxis: { minValue: 0, maxValue: 100 },
                animation: {
                    duration: 1000,
                    easing: 'in'
                }
            };
        }
        /*var chart = new google.visualization.LineChart(document.getElementById('visualization'));
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'y');
        data.addRow(['100', 123]);
        data.addRow(['700', 17]);
        var button = document.getElementById('b1');
        function drawChart() {
          // Disabling the button while the chart is drawing.
          //button.disabled = true;
          google.visualization.events.addListener(chart, 'ready',
              function() {
                //button.disabled = false;
              });
          chart.draw(data, options);
        }
    
        button.onclick = function() {
          if (data.getNumberOfRows() > 5) {
            data.removeRow(Math.floor(Math.random() * data.getNumberOfRows()));
          }
          // Generating a random x, y pair and inserting it so rows are sorted.
          var x = Math.floor(Math.random() * 1000);
          var y = Math.floor(Math.random() * 100);
          var where = 0;
          while (where < data.getNumberOfRows() && parseInt(data.getValue(where, 0)) < x) {
            where++;
          }
          data.insertRows(where, [[x.toString(), y]]);
          drawChart();
        }
        drawChart();*/
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartType'), 
        __metadata('design:type', String)
    ], GoogleChartComponent.prototype, "chartType", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartOptions'), 
        __metadata('design:type', Object)
    ], GoogleChartComponent.prototype, "chartOptions", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartData'), 
        __metadata('design:type', Object)
    ], GoogleChartComponent.prototype, "chartData", void 0);
    GoogleChartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[GoogleChart]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object])
    ], GoogleChartComponent);
    return GoogleChartComponent;
    var _a;
}());
//# sourceMappingURL=/home/marina/web/SGH_app_MEAN/angular-src/src/google-chart.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(695),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/marina/web/SGH_app_MEAN/angular-src/src/home.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(222);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LineChartComponent = (function () {
    function LineChartComponent(dataService) {
        this.dataService = dataService;
        this.device_id = "592ce06a49091926c34bfd74";
        this.showGraph = false;
        this.chart = [];
        this.chartData2 = [
            { x: '2013-03-30 22:00:00', y: 3, z: 3 },
            { x: '2013-03-31 00:00:00', y: 2, z: 0 },
            { x: '2013-03-31 02:00:00', y: 0, z: 2 },
            { x: '2013-03-31 04:00:00', y: 4, z: 4 }
        ];
        this.chartElement = ['myfirstchart1', 'myfirstchart2', 'myfirstchart3', 'myfirstchart4'];
        this.labels = ['t', 's', 'h', 'l'];
        this.stiker_label = [
            { name: "Temperature", label: 't' },
            { name: "Soil Humidity", label: 's' },
            { name: "LED Status", label: 'led' },
            { name: "Water", label: 'water' }];
        this.stikers = [];
        this.chartData = [];
    }
    LineChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getData(this.device_id).subscribe(function (data) {
            _this.rows = data.data;
            _this.getData1();
            //console.log(this.rows);
            for (var i = 0; i < 4; i++) {
                _this.chart[i] = new Morris.Line({
                    // ID of the element in which to draw the chart.
                    element: _this.chartElement[i],
                    // Chart data records -- each entry in this array corresponds to a point on
                    // the chart.
                    data: _this.getData(),
                    xkey: 'd',
                    ykeys: _this.labels[i],
                    labels: ['Date', 'Value']
                });
                if (_this.chartData != [])
                    _this.showGraph = true;
            }
            _this.stikers[0] = { name: _this.stiker_label[0].name,
                value: _this.chartData[_this.chartData.length - 1].t };
            _this.stikers[1] = { name: _this.stiker_label[1].name,
                value: _this.chartData[_this.chartData.length - 1].s };
            _this.stikers[2] = { name: _this.stiker_label[2].name,
                value: _this.chartData[_this.chartData.length - 1].led };
            _this.stikers[3] = { name: _this.stiker_label[3].name,
                value: _this.chartData[_this.chartData.length - 1].water };
            console.log(_this.stikers);
        });
    };
    LineChartComponent.prototype.onClickButton = function () {
        //let array = this.getData();
        /*var str = this.chartData[0];
        console.log(this.chartData[0]);
        this.chartData2.push({x: str.date.toString(), y: Number(str.temp), z: 4}); //x: str.date, y: str.temp, z: str.hum
        for(let i=0; i<4; i++)
          this.chart[i].setData(this.chartData2);
        console.log(this.chartData2);*/
        this.loadData();
    };
    LineChartComponent.prototype.getData = function () {
        for (var _i = 0, _a = this.rows; _i < _a.length; _i++) {
            var row = _a[_i];
            var date = this.formatDate(row.date).toString();
            var data = row.data;
            var temp = Number(data[0].value);
            var hum = Number(data[1].value);
            var soil = Number(data[2].value);
            var light = Number(data[3].value);
            var led = data[4].value.toString();
            var water = data[5].value.toString();
            this.chartData.push({
                d: date.toString(),
                t: Number(temp),
                h: Number(hum),
                s: Number(soil),
                l: Number(light),
                led: led.toString(),
                water: water.toString()
            });
        }
        console.log(this.chartData);
        return this.chartData;
        //console.log(this.chartData);
        //return this.chartData2;
    };
    LineChartComponent.prototype.getData1 = function () {
        console.log(this.chartData2);
        return this.chartData2;
    };
    LineChartComponent.prototype.loadData = function () {
        var _this = this;
        this.dataService.getData(this.device_id).subscribe(function (data) {
            _this.rows = data.data;
            _this.getData();
            for (var i = 0; i < 4; i++)
                _this.chart[i].setData(_this.chartData);
            console.log(_this.chartData);
        });
    };
    LineChartComponent.prototype.formatDate = function (mongodb_date) {
        var d = new Date(mongodb_date);
        var date = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-"
            + ("0" + d.getDate()).slice(-2) + " " + ("0" + d.getHours()).slice(-2)
            + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);
        /*var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
        d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);*/
        return date;
        //return new Date(mongodb_date);
    };
    LineChartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-line-chart',
            template: __webpack_require__(696),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === 'function' && _a) || Object])
    ], LineChartComponent);
    return LineChartComponent;
    var _a;
}());
//# sourceMappingURL=/home/marina/web/SGH_app_MEAN/angular-src/src/line-chart.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(697),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/marina/web/SGH_app_MEAN/angular-src/src/login.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.isIn = false; // store state
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.toggleState = function () {
        var bool = this.isIn;
        this.isIn = bool === false ? true : false;
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(698),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/marina/web/SGH_app_MEAN/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_config_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(authService, configService, flashMessage, router) {
        this.authService = authService;
        this.configService = configService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.currentProject_selection = 0;
        this.currentDevice_selection = 0;
        this.newProject = false;
        this.newDevice = false;
        this.newSensor = false;
        this.newActuator = false;
        this.collapsed = [false, false, false];
        this.collapsed2 = [false, false, false];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.configService.getProjects(_this.user).subscribe(function (data) {
                _this.projects = data.projects;
                _this.collapsed[0] = false;
                console.log(_this.projects);
                _this.findAllDevices();
            });
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.onClickToggled = function (param) {
        var bool = this.collapsed[param];
        if (this.currentProject_selection != 0)
            this.collapsed[this.currentProject_selection - 1] = false;
        if (!bool) {
            this.showDevices(param);
            this.currentProject_selection = param + 1;
        }
        else {
            this.currentProject_selection = 0;
        }
        this.collapsed[param] = bool === false ? true : false;
        return false;
    };
    ProfileComponent.prototype.onClickToggled2 = function (param) {
        var bool = this.collapsed2[param];
        if (this.currentDevice_selection != 0)
            this.collapsed2[this.currentDevice_selection - 1] = false;
        if (!bool) {
            this.showSensors(param, this.currentProject_selection - 1);
            this.currentDevice_selection = param + 1;
        }
        else {
            this.currentDevice_selection = 0;
        }
        this.collapsed2[param] = bool === false ? true : false;
        return false;
    };
    ProfileComponent.prototype.onClickAddProject = function () {
        this.newProject = !this.newProject;
        return false;
    };
    ;
    ProfileComponent.prototype.onClickAddDevice = function () {
        this.newDevice = !this.newDevice;
        return false;
    };
    ;
    ProfileComponent.prototype.onClickAddSensor = function () {
        this.newSensor = !this.newSensor;
        return false;
    };
    ;
    ProfileComponent.prototype.onClickAddActuator = function () {
        this.newActuator = !this.newActuator;
        return false;
    };
    ;
    ProfileComponent.prototype.onClickCreateProject = function () {
        var _this = this;
        var user = this.user;
        var project = {
            title: this.new_title,
            owner: user._id
        };
        this.configService.addProject(project).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.newProject = !_this.newProject;
                _this.configService.getProjects(_this.user).subscribe(function (data) {
                    _this.projects = data.projects;
                    console.log(_this.projects);
                });
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            }
        });
        return false;
    };
    ;
    ProfileComponent.prototype.onClickCreateDevice = function (project_num) {
        var _this = this;
        var project_id = this.projects[project_num]._id;
        var device = {
            name: this.new_name,
            project: project_id
        };
        this.configService.addDevice(device).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.newDevice = !_this.newDevice;
                _this.findDevicesByProjectId(project_id, project_num);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            }
        });
        return false;
    };
    ;
    ProfileComponent.prototype.onClickCreateSensor = function (device_num) {
        var _this = this;
        var device_id = this.projects[this.currentProject_selection - 1].devices[device_num]._id;
        var sensor = {
            device_id: device_id,
            name: this.new_sens,
            value: this.sens_value,
            prefix: this.sens_prefix
        };
        this.configService.addSensor(sensor).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.newSensor = !_this.newSensor;
                _this.findDevicesByProjectId(_this.projects[_this.currentProject_selection - 1]._id, _this.currentProject_selection - 1);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            }
        });
        return false;
    };
    ;
    ProfileComponent.prototype.onClickCreateActuator = function (device_num) {
        var _this = this;
        var device_id = this.projects[this.currentProject_selection - 1].devices[device_num]._id;
        var actuator = {
            device_id: device_id,
            name: this.new_actu,
            states: this.actu_states
        };
        this.configService.addActuator(actuator).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.newActuator = !_this.newActuator;
                _this.findDevicesByProjectId(_this.projects[_this.currentProject_selection - 1]._id, _this.currentProject_selection - 1);
                _this.showSensors(device_num, _this.currentProject_selection - 1);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            }
        });
        return false;
    };
    ;
    ProfileComponent.prototype.findDevicesByProjectId = function (project_id, project_num) {
        var _this = this;
        this.configService.devicesList(project_id).subscribe(function (data) {
            //console.log("dev"+data.devices);
            _this.projects[project_num].devices = data.devices;
            _this.devices = _this.projects[project_num].devices;
            console.log(_this.devices);
            _this.showSensors(_this.currentDevice_selection - 1, _this.currentProject_selection - 1);
        });
        return false;
    };
    ;
    ProfileComponent.prototype.findAllDevices = function () {
        var _this = this;
        /*let project = this.projects[0];
        this.configService.devicesList(project._id).subscribe(data=>{
          this.devices = data.devices;
          this.collapsed[0] = false;
          console.log(this.devices);
        });*/
        var i = 0;
        for (var _i = 0, _a = this.projects; _i < _a.length; _i++) {
            var project = _a[_i];
            var project_id = project._id;
            this.configService.devicesList(project_id).subscribe(function (data) {
                _this.projects[i].devices = data.devices;
                _this.devices = _this.projects[i].devices;
                console.log(_this.devices);
                i++;
            });
        }
        return false;
    };
    ;
    ProfileComponent.prototype.showDevices = function (project_num) {
        this.devices = this.projects[project_num].devices;
        //console.log(this.devices[0]);
    };
    ProfileComponent.prototype.showSensors = function (device_num, project_num) {
        this.sensors = this.projects[project_num].devices[device_num].sensors;
        this.actus = this.projects[project_num].devices[device_num].actuators;
        //console.log(this.devices[0]);
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(699),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_config_service__["a" /* ConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_config_service__["a" /* ConfigService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/marina/web/SGH_app_MEAN/angular-src/src/profile.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        //console.log(this.name);
        var user = {
            name: this.name,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(700),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/marina/web/SGH_app_MEAN/angular-src/src/register.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/home/marina/web/SGH_app_MEAN/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/marina/web/SGH_app_MEAN/angular-src/src/environment.js.map

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "#central-body{\n\tborder-radius: 5px;\n\tbackground-color: white;\n\topacity: 0.95;\n\tpadding: 0 20px 20px 20px;\n\tmargin: 0 20px 0 20px;\n}\n@media (min-width: 768px) {\n  #central-body {\n    padding-right: 40px;\n    padding-left: 40px;\n  }\n}\n.tabs{\n\tpadding: 0 20px 20px 20px;\n}\nli{\n\tfont-size: 20px;\n}"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "tr, th{\n\ttext-align: center;\n}"

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "h1{\n\tfont-family: 'Lobster', cursive;\n\tcolor: white;\n\tfont-size: 125px;\n\ttext-shadow: black 0 0 10px;\n\ttext-align: center;\n}\n.description{\n\tfont-family: 'Tenor+Sans', sans-serif;\n\tcolor: white;\n\ttext-align: center;\n\tmargin-bottom: 100px;\n}\n.description > .lead{\n\tfont-size: 40px;\n\ttext-shadow: black 0 0 8px;\n\tpadding-bottom: 0;\n\tmargin-bottom: 15px;\n}\n.description > .edit{\n\tfont-size: 30px;\n\ttext-shadow: black 0 0 2px;\n\tpadding-top: 0;\n\tmargin-top: 0;\n}"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = " #myfirstchart1{\n\theight: 200px;\n\t/* width: 500px; */\n} \n#myfirstchart2{\n\theight: 200px;\n\t/* width: 500px; */\n} \n#myfirstchart3{\n\theight: 200px;\n\t/* width: 500px; */\n} \n#myfirstchart4{\n\theight: 200px;\n\t/* width: 500px; */\n}\n\n/* @media screen and (max-width: 576px) {\n\t#myfirstchart1{\n\t\theight: 200px;\n\t\twidth: 300px;\n\t}\n} \n */\n.main{\n\tpadding: 0;\n\tmargin: 0;\n}\n\n.placeholders {\n  margin-bottom: 15px;\n  margin-top: 15px;\n  padding-left: 30px;\n  text-align: center;\n}\n.placeholder {\n  margin-bottom: 20px;\n  margin-top: 20px;\n\theight: 250px;\n\tmargin: 20px auto 0 auto;\n\tposition: relative;\n}\n\n.device-header{\n\tcolor: white;\n}\n\n.sticker{\n\tmax-width: 200px;\n\tpadding: 20px;\n\tmargin: 0 20px 0 20px;\n\tbackground-color: #2196f3;\n\tcolor: white;\n\tborder-radius:6px; \n\t-webkit-border-radius:6px; \n\t-moz-border-radius:5px; \n\t-khtml-border-radius:10px;\n}"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "#form-sign {\n  max-width: 330px;\n  padding: 0 20px 20px 20px;\n  margin: 0 auto;\n  background-color: white;\n  opacity: 0.95;\n  border-radius:6px; \n\t-webkit-border-radius:6px; \n\t-moz-border-radius:5px; \n\t-khtml-border-radius:10px;\n}\n#hd{\n\ttext-align: center;\n\tmargin-bottom: 15px;\n  margin-top: 1px;\n}"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "#navi{\n}"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "#central-body{\n\tborder-radius: 5px;\n\tbackground-color: white;\n\topacity: 0.95;\n\tpadding: 0 20px 20px 20px;\n\tmargin: 0 20px 0 20px;\n}\n.list-group-item{\n\tbackground-color: white;\n\topacity: 1 !important;\n}\n#headingOne{\n\tbackground-color: green;\n}"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "#form-signin {\n  max-width: 330px;\n  padding: 1px 20px 20px 20px;\n  margin: 0 auto;\n  background-color: white;\n  opacity: 0.95;\n  border-radius:6px; \n\t-webkit-border-radius:6px; \n\t-moz-border-radius:5px; \n\t-khtml-border-radius:10px;\n}\n#hd{\n\ttext-align: center;\n\tmargin-bottom: 15px;\n}"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div id=\"central-body\">\n\t<!-- <app-line-chart></app-line-chart> -->\n\t<flash-messages></flash-messages>\n\t<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "<p>\n\tCollapsedNav works!\n</p>\n"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "<div id=\"central-body\">\n\t<!-- <h2 class=\"page-header\">Dashboard</h2> -->\n\t<div class=\"tabs\">\n\t\t<ul class=\"nav nav-tabs\">\n\t\t\t<li role=\"presentation\" [ngClass]=\"{ 'active': selected==0 }\" ><a (click) = \"onClickSelect(0)\" href=\"#\">Panel</a></li>\n\t\t  \t<li role=\"presentation\" [ngClass]=\"{ 'active': selected==1 }\" ><a (click) = \"onClickSelect(1)\" href=\"#\">Table</a></li>\n\t\t  \t<!-- <li role=\"presentation\" [ngClass]=\"{ 'active': selected==2 }\" ><a (click) = \"onClickSelect(2)\" href=\"#\">Soil Humidity</a></li> -->\n\t\t</ul>\n\t\t<div class=\"tab-content\">\n\t\t    <div [ngClass]=\"{ 'active': selected==0 }\" role=\"tabpanel\" class=\"tab-pane\" id=\"temp\">\n\t\t    \t<app-line-chart></app-line-chart>\n\t\t    </div>\n\t\t    <div [ngClass]=\"{ 'active': selected==1 }\" role=\"tabpanel\" class=\"tab-pane\" id=\"all data\">\n\t\t    \t<app-data-table></app-data-table>\n\t\t    </div>\n\t\t    <!-- <div [ngClass]=\"{ 'active': selected==2 }\" role=\"tabpanel\" class=\"tab-pane\" id=\"soil\">\n\t\t    \t3\n\t\t    </div> -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"opport\">\n\t<h3 class=\"sub-header\">All Devices</h3>\n\t<a (click) = \"onClickButton()\" class=\"btn btn-success\" role=\"button\">Upload</a>\n\t<div class=\"table-responsive\">\n\t    <table class=\"table table-striped\">\n\t      <thead>\n\t        <tr>\n\t          <th>#</th>\n\t          <th>Temp (°C)</th>\n\t          <th>Hum (%)</th>\n\t          <th>Soil (%)</th>\n\t          <th>Light (lum)</th>\n\t          <th>LedOn(on/off)</th>\n\t          <th>WaterOk (ok/no)</th>\n\t          <th>Date</th>\n\t        </tr>\n\t      </thead>\n\t      <tbody id=\"container1\">\n\t      \t<tr *ngFor=\"let row of rows; let i = index \">\n\t      \t\t<td>{{i}}</td>\n\t      \t\t<td *ngFor=\"let data of row.data\">{{data.value}}</td>\n\t      \t\t<td>{{formatDate(row.date)}}</td>\n\t      \t\t<!-- <td>{{i}}</td>\n\t      \t\t<td *ngFor=\"let data of device.data\">{{data.value}}</td>\n\t      \t\t<td>{{device.date}}</td> -->\n\t      \t</tr>\n\t      </tbody>\n\t    </table>\n\t</div>\n</div>"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"central_body\">\n\t<div>\n\t\t<div class=\"page-header\">\n\t\t\t<h1>Smart Greenhouse</h1>\n\t\t</div>\n\t\t<div class=\"description\">\n\t\t\t\t<p class=\"lead\">Умная теплица на базе Arduino</p>\n\t\t\t\t<p class=\"edit\">с оповещениями через Telegram messanger</p>\n\t\t\t\t<a class=\"btn btn-primary\" role=\"button\" href=\"/login\">HOW IT WORKS &raquo;</a>\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"central-body\">\n\t<h3 class=\"sub-header\">Devices panel</h3>\n\t<a (click) = \"onClickButton()\" class=\"btn btn-success\" role=\"button\">Upload</a>\n\t<div *ngIf=\"showGraph\" class=\"container-fluid\" id=\"yel\">\n\t\t<div class=\"row\" id=\"opport\">\n\t\t    <div class=\"col-sm-9 col-sm-offset-2 col-md-10 col-md-offset-1 main\">\n\t          <div class=\"row placeholders\" id=\"stickers\">\n\t            <div *ngFor=\"let stiker of stikers; let i = index \" class=\"col-sml-6 col-sm-6 col-md-3 col-lg-3 sticker conteiner-fluid\">\n\t            \t\n\t          \t\t\t\t\t<h4 class=\"device-header\">{{stiker.name}}</h4>\n\t          \t\t\t\t\t<h5>{{stiker.value}}</h5>\n\t            </div>\n\t          </div>\n\t          <div class=\"row placeholders\" id=\"charts\">\n\t            <div class=\"col-md-6 col-sml-12 placeholder\">\n\t            \t\n\t\t\t\t\t<h4>dev1</h4>\n\t\t\t\t\t<div class=\"container-fluid\" id=\"myfirstchart1\"></div>\n\t            </div>\n\t            <div class=\"col-md-6 col-sml-12 placeholder\">\n\t            \t\n\t\t\t\t\t<h4>dev2</h4>\n\t\t\t\t\t<div class=\"container-fluid\" id=\"myfirstchart2\"></div>\n\t            </div>\n\t            <div class=\"col-md-6 col-sml-12 placeholder\">\n\t            \t\n\t\t\t\t\t<h4>dev3</h4>\n\t\t\t\t\t<div class=\"container-fluid\" id=\"myfirstchart3\"></div>\n\t            </div>\n\t            <div class=\"col-md-6 col-sml-12 placeholder\">\n\t            \t\n\t\t\t\t\t<h4>dev4</h4>\n\t\t\t\t\t<div class=\"container-fluid\" id=\"myfirstchart4\"></div>\n\t            </div>\n\t          </div>\n\t   \t\t</div>\n\t\t</div>\n\t</div>\t\n\t<!-- <div id=\"chart\" [chartData]=\"chartData\" [chartOptions] = \"chartOptions\" [chartType]=\"chartType\" GoogleChart></div> -->\n\t<!-- PieChart -->\n</div>\n\n\n\n"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<div id=\"form-sign\">\n<h2 class=\"page-header\" id=\"hd\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n</div>"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<nav id=\"navi\" class=\"navbar navbar-inverse navbar-default\">\n\t<div class=\"container\">\n        <div class=\"navbar-header\">\n        \t<button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"toggleState()\">\n\t            <span class=\"sr-only\">Toggle navigation</span>\n\t            <span class=\"icon-bar\"></span>\n\t            <span class=\"icon-bar\"></span>\n\t            <span class=\"icon-bar\"></span>\n          \t</button>\n          \t<a class=\"navbar-brand\" [routerLink]=\"['/']\">Smart Greenhouse</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\" [ngClass]=\"{ 'in': isIn }\">\n          \t<ul class=\"nav navbar-nav navbar-left\">\n\t            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/']\">HOME</a></li>\n          \t</ul>\n          \t<ul class=\"nav navbar-nav navbar-right\">\n              <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/dashboard']\">DASHBOARD</a></li>\n              <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/profile']\">PROFILE</a></li>\n\n\t            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\">LOGIN</a></li>\n\t            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/register']\">REGISTER</a></li>\n              <li *ngIf=\"authService.loggedIn()\"><a (click) = \"onLogoutClick()\" href=\"#\" >LOGOUT</a></li>\n          \t</ul>\n        </div><!--/.nav-collapse -->\n    </div>\n</nav>"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\" id=\"central-body\">\n\t<h2 class=\"page-header\">User {{user.name}}</h2>\n\t<ul class=\"list-group\">\n\t\t<li class=\"list-group-item\">Username: {{user.username}}</li>\n\t\t<li class=\"list-group-item\">Chart_id: {{user.chart_id}}</li>\n\t</ul>\n\t<div>\n\t\t<h2 class=\"page-header\">Projects</h2>\n\t\t<a (click) = \"onClickAddProject()\" href=\"#\" class=\"btn btn-primary\" role=\"button\">Add Project</a>\n\t\t<form (submit)=\"onClickCreateProject()\" *ngIf=\"newProject\">\n\t\t  <div class=\"form-group\">\n\t\t    <label>Title</label>\n\t\t    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"new_title\" name=\"new_title\">\n\t\t  </div>\n\t\t  <input type=\"submit\" class=\"btn btn-primary\" value=\"Create Project\">\n\t\t</form>\n\t\t<div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"false\">\n\t\t  <div *ngFor=\"let project of projects; let i = index\" class=\"panel panel-default\">\n\t\t    <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n\t\t      <h4 class=\"panel-title\">\n\t\t        <a (click) = \"onClickToggled(i)\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\">\n\t\t          {{project.title}}\n\t\t        </a>\n\t\t      </h4>\n\t\t    </div>\n\t\t    <div id=\"collapseOne\" class=\"panel-collapse collapse\" [ngClass]=\"{ 'in': collapsed[i]}\" role=\"tabpanel\">\n\t\t      <a (click) = \"onClickAddDevice()\" href=\"#\" class=\"btn btn-primary\" role=\"button\">Add Device</a>\n\t\t      <form (submit)=\"onClickCreateDevice(i)\" *ngIf=\"newDevice\">\n\t\t\t    <div class=\"form-group\">\n\t\t\t      <label>Name</label>\n\t\t\t      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"new_name\" name=\"new_name\">\n\t\t\t    </div>\n\t\t\t    <input type=\"submit\" class=\"btn btn-primary\" value=\"Create Device\">\n\t\t\t  </form>\n\t\t\t  <div class=\"panel-group\" id=\"accordion2\" role=\"tablist\" aria-multiselectable=\"false\">\n\t\t\t\t  <div *ngFor=\"let device of devices; let i = index\" class=\"panel panel-default\">\n\t\t\t\t    <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n\t\t\t\t      <h4 class=\"panel-title\">\n\t\t\t\t        <a (click) = \"onClickToggled2(i)\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\">\n\t\t\t\t          {{device.name}} (DeviceId = {{device._id}})\n\t\t\t\t        </a>\n\t\t\t\t      </h4>\n\t\t\t\t    </div>\n\t\t\t\t    <div id=\"collapseOne\" class=\"panel-collapse collapse\" [ngClass]=\"{ 'in': collapsed2[i]}\" role=\"tabpanel\">\n\t\t\t\t      <a (click) = \"onClickAddSensor()\" href=\"#\" class=\"btn btn-primary\" role=\"button\">Add Sensor</a> <!-- <a (click) = \"onClickAddActuator()\" href=\"#\" class=\"btn btn-primary\" role=\"button\">Add Actuator</a> -->\n\t\t\t\t      <form (submit)=\"onClickCreateSensor(i)\" *ngIf=\"newSensor\">\n\t\t\t\t\t    <div class=\"form-group\">\n\t\t\t\t\t      <label>Name</label>\n\t\t\t\t\t      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"new_sens\" name=\"new_sens\">\n\t\t\t\t\t    </div>\n\t\t\t\t\t    <div class=\"form-group\">\n\t\t\t\t\t      <label>Value</label>\n\t\t\t\t\t      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"sens_value\" name=\"sens_value\">\n\t\t\t\t\t    </div>\n\t\t\t\t\t    <div class=\"form-group\">\n\t\t\t\t\t      <label>Prefix</label>\n\t\t\t\t\t      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"sens_prefix\" name=\"sens_prefix\">\n\t\t\t\t\t    </div>\n\t\t\t\t\t    <input type=\"submit\" class=\"btn btn-primary\" value=\"Create Sensor\">\n\t\t\t\t\t  </form>\n\t\t\t\t\t  <!-- <form (submit)=\"onClickCreateActuator(i)\" *ngIf=\"newActuator\">\n\t\t\t\t\t    <div class=\"form-group\">\n\t\t\t\t\t      <label>Name</label>\n\t\t\t\t\t      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"new_actu\" name=\"new_actus\">\n\t\t\t\t\t    </div>\n\t\t\t\t\t    <div class=\"form-group\">\n\t\t\t\t\t      <label>States</label>\n\t\t\t\t\t      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"actu_states\" name=\"actu_states\">\n\t\t\t\t\t    </div>\n\t\t\t\t\t    <input type=\"submit\" class=\"btn btn-primary\" value=\"Create Actuator\">\n\t\t\t\t\t  </form> -->\n\t\t\t\t\t  <table class=\"table table-striped\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t  <th>#</th>\n\t\t\t\t\t\t  <th>Name</th>\n\t\t\t\t\t\t  <th>Value type</th>\n\t\t\t\t\t\t  <th>Prefix</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody id=\"container1\">\n\t\t\t\t\t\t\t<tr *ngFor=\"let sensor of sensors; let i = index \">\n\t\t\t\t\t\t\t\t<td>{{i}}</td>\n\t\t\t\t\t\t\t\t<td>{{sensor.name}}</td>\n\t\t\t\t\t\t\t\t<td>{{sensor.value}}</td>\n\t\t\t\t\t\t\t\t<td>{{sensor.prefix}}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t  </table>\n\t\t\t\t\t  <!-- <p *ngFor=\"let sensor of sensors; let i = index \" >{{i}}.{{sensor.name}}.{{sensor.value}}.{{sensor.prefix}}</p>\n\t\t\t\t\t  <p *ngFor=\"let actu of actus; let i = index \" >{{i}}.{{actu.name}}.{{actu.states}}</p> -->\n\t\t\t\t    </div>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t    </div>\n\t\t  </div>\n\t\t</div>\n\n\t\t<!-- <p *ngFor=\"let project of projects\">{{project.title}}</p> -->\n\t</div>\n</div>"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "<div id=\"form-signin\">\n\t<h2 class=\"page-header\" id=\"hd\">Register</h2>\n\t<form (submit)=\"onRegisterSubmit()\" >\n\t\t<div class=\"form-group\">\n\t\t\t<label>Name</label>\n\t\t\t<input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label>Username</label>\n\t\t\t<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label>Password</label>\n\t\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n\t\t</div>\n\t\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n\t</form>\n</div>"

/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(392);


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/home/marina/web/SGH_app_MEAN/angular-src/src/auth.service.js.map

/***/ })

},[724]);
//# sourceMappingURL=main.bundle.map