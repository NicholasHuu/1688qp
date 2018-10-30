webpackJsonp([25],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmininfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__banklist_banklist__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__zijingpwd_zijingpwd__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__changeloginpwd_changeloginpwd__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AdmininfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdmininfoPage = /** @class */ (function () {
    function AdmininfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AdmininfoPage.prototype.banklistbtn = function (items) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__banklist_banklist__["a" /* BanklistPage */]);
    };
    AdmininfoPage.prototype.zijingpwdbtn = function (items) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__zijingpwd_zijingpwd__["a" /* ZijingpwdPage */]);
    };
    AdmininfoPage.prototype.changeloginpwdbtn = function (items) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__changeloginpwd_changeloginpwd__["a" /* ChangeloginpwdPage */]);
    };
    AdmininfoPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad AdmininfoPage");
    };
    AdmininfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-admininfo",template:/*ion-inline-start:"C:\Users\Administrator\Desktop\program\qp\src\pages\admininfo\admininfo.html"*/'<!--\n\n  Generated template for the AdmininfoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="navbar">\n\n        <ion-title>账号管理</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="admininfoAllCont mainContent">\n\n    <div class="admininfoAllContWrap">\n\n        <div class="admininfoTop">\n\n            <div class="adnimiAvatar">\n\n                <span>头像</span>\n\n                <span class="adnimiAvatarImg">                    \n\n                        <img src="../../assets/imgs/center/touxiang.png" alt="">                    \n\n                 </span>\n\n            </div>\n\n            <div><span>昵称</span><span>昵称有七个字</span></div>\n\n            <div><span>ID</span><span>1234567889</span></div>\n\n            <div (tap)=\'changeloginpwdbtn()\'><span>修改登录密码</span><span>></span></div>\n\n        </div>\n\n        <div class="admininfoBottom">\n\n            <div><span>我的手机</span><span>11223344556</span></div>\n\n            <div (tap)=\'banklistbtn()\'><span>银行卡管理</span><span>></span></div>\n\n            <div (tap)=\'zijingpwdbtn()\'><span>修改资金密码</span><span>></span></div>\n\n        </div>\n\n        <div class="stationLetter"><span>站内信</span></div>\n\n    </div>\n\n    <footer>\n\n        <div class="foorTabs">\n\n            <div><img style="width: 40%;margin-top: 14%;" src="../../assets/imgs/home/homeCam.png" /></div>\n\n            <div><img style="width: 68%;margin-top: 20%;" src="../../assets/imgs/home/shareCam.png" /></div>\n\n            <div><img style="width: 130%;margin-top: -20%;" src="../../assets/imgs/home/mainBtn.png" /></div>\n\n            <div><img style="width: 36%;margin-top: 20%;" src="../../assets/imgs/home/chongzhiCam.png" /></div>\n\n            <div><img style="width: 70%;margin-top: 14%;" src="../../assets/imgs/home/admiCli.png" /></div>\n\n        </div>\n\n    </footer>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\program\qp\src\pages\admininfo\admininfo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AdmininfoPage);
    return AdmininfoPage;
}());

//# sourceMappingURL=admininfo.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BanklistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bankbind_bankbind__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the BanklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BanklistPage = /** @class */ (function () {
    function BanklistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BanklistPage.prototype.bankbindbtn = function (items) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bankbind_bankbind__["a" /* BankbindPage */]);
    };
    BanklistPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad BanklistPage");
    };
    BanklistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-banklist",template:/*ion-inline-start:"C:\Users\Administrator\Desktop\program\qp\src\pages\banklist\banklist.html"*/'<!--\n\n  Generated template for the BanklistPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="navbar">\n\n        <ion-title>银行卡列表</ion-title>\n\n        <span class="addSpan" (tap)="bankbindbtn()">\n\n          <ion-icon name="ios-add" class="addBtn"></ion-icon>\n\n        </span>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bankListAllcont">\n\n    <div class="bankListContWrap">\n\n        <ion-list>\n\n            <ion-item class="bankBindBtn" (tap)="bankbindbtn()">\n\n                <div><img src="../../assets/imgs/cardBind.png" alt=""></div>\n\n            </ion-item>\n\n            <ion-item class="bankBindBtn">\n\n                <div><img src="../../assets/imgs/cardBind.png" alt=""></div>\n\n            </ion-item>\n\n            <ion-item class="bankBindBtn">\n\n                <div><img src="../../assets/imgs/cardBind.png" alt=""></div>\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\program\qp\src\pages\banklist\banklist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], BanklistPage);
    return BanklistPage;
}());

//# sourceMappingURL=banklist.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankbindPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BankbindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BankbindPage = /** @class */ (function () {
    function BankbindPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BankbindPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BankbindPage');
    };
    BankbindPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bankbind',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\program\qp\src\pages\bankbind\bankbind.html"*/'<!--\n\n  Generated template for the BankbindPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="navbar">\n\n        <ion-title>绑定银行卡</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="mainContent">\n\n    <div class="bankBindWrap">\n\n        <p class="bindSelf">请绑定持卡人本人的银行卡</p>\n\n        <div class="spanInp"><span>持卡人</span><input type="text"></div>\n\n        <p class="bindCardInfo">请填写银行卡信息</p>\n\n        <div class="spanInp"><span>开户行</span><input type="text"></div>\n\n        <div class="spanInp"><span>卡号</span><input type="text" placeholder="12345678985624"></div>\n\n        <div class="submitBtn"><img src="../../assets/imgs/tijiaoqingjiu.png" alt=""></div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\program\qp\src\pages\bankbind\bankbind.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], BankbindPage);
    return BankbindPage;
}());

//# sourceMappingURL=bankbind.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZijingpwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ZijingpwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ZijingpwdPage = /** @class */ (function () {
    function ZijingpwdPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ZijingpwdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ZijingpwdPage');
    };
    ZijingpwdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-zijingpwd',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\program\qp\src\pages\zijingpwd\zijingpwd.html"*/'<!--\n\n  Generated template for the ZijingpwdPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="navbar">\n\n        <ion-title>资金密码</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="mainContent">\n\n    <div class="zijinWrap">\n\n        <div class="spanInp"><span>旧密码</span><input type="text" placeholder="请输入旧密码"></div>\n\n        <div class="spanInp"><span>新密码</span><input type="text" placeholder="请输入新密码"></div>\n\n        <div class="spanInp"><span>确认密码</span><input type="text" placeholder="请确认新密码"></div>\n\n    </div>\n\n    <div class="submitBtn"><img src="../../assets/imgs/tijiaoqingjiu.png" alt=""></div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\program\qp\src\pages\zijingpwd\zijingpwd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ZijingpwdPage);
    return ZijingpwdPage;
}());

//# sourceMappingURL=zijingpwd.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeloginpwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChangeloginpwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangeloginpwdPage = /** @class */ (function () {
    function ChangeloginpwdPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChangeloginpwdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangeloginpwdPage');
    };
    ChangeloginpwdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changeloginpwd',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\program\qp\src\pages\changeloginpwd\changeloginpwd.html"*/'<!--\n  Generated template for the ChangeloginpwdPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="navbar">\n        <ion-title>登录密码</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="mainContent">\n    <div class="changeLoginpwdWrap">\n        <div class="spanInp"><span>旧密码</span><input type="password" placeholder="请输入旧密码"></div>\n        <div class="spanInp"><span>新密码</span><input type="password" placeholder="请输入新密码"></div>\n        <div class="spanInp"><span>确认密码</span><input type="password" placeholder="请确认新密码"></div>\n    </div>\n    <div class="submitBtn"><img src="../../assets/imgs/tijiaoqingjiu.png" alt=""></div>\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\program\qp\src\pages\changeloginpwd\changeloginpwd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ChangeloginpwdPage);
    return ChangeloginpwdPage;
}());

//# sourceMappingURL=changeloginpwd.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subordinatemanagement_subordinatemanagement__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__performanceinquiry_performanceinquiry__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agentmanagement_agentmanagement__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AgentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgentPage = /** @class */ (function () {
    function AgentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AgentPage.prototype.subordinatemanagementbtn = function (items) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__subordinatemanagement_subordinatemanagement__["a" /* SubordinatemanagementPage */]);
    };
    AgentPage.prototype.performanceinquirybtn = function (items) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__performanceinquiry_performanceinquiry__["a" /* PerformanceinquiryPage */]);
    };
    AgentPage.prototype.agentmanagement = function (items) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__agentmanagement_agentmanagement__["a" /* AgentmanagementPage */]);
    };
    AgentPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad AgentPage");
    };
    AgentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-agent",template:/*ion-inline-start:"C:\Users\Administrator\Desktop\program\qp\src\pages\agent\agent.html"*/'<!--\n\n  Generated template for the AgentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="navbar">\n\n        <ion-title>代理中心</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="agentAllCont mainContent">\n\n\n\n    <div class="agentrOuter">\n\n        <div (tap)=\'performanceinquirybtn()\'>\n\n            <div class="agentInner1"><img src="../../assets/imgs/agent/Performance inquiry.png" alt=""></div>\n\n            <div class="agentInner2">业绩查询</div>\n\n            <div class="agentInner3">\n\n\n\n            </div>\n\n        </div>\n\n        <div (tap)=\'agentmanagement()\'>\n\n            <div class="agentInner1"><img src="../../assets/imgs/agent/manage.png" alt=""></div>\n\n            <div class="agentInner2">代理管理</div>\n\n            <div class="agentInner3">\n\n\n\n            </div>\n\n        </div>\n\n        <div (tap)=\'subordinatemanagementbtn()\'>\n\n            <div class="agentInner1"><img src="../../assets/imgs/agent/nextLevel.png" alt=""></div>\n\n            <div class="agentInner2">下级管理</div>\n\n            <div class="agentInner3">\n\n\n\n            </div>\n\n        </div>\n\n        <div>\n\n            <div class="agentInner1"><img src="../../assets/imgs/agent/develop.png" alt=""></div>\n\n            <div class="agentInner2">发展下级</div>\n\n            <div class="agentInner3">\n\n\n\n            </div>\n\n        </div>\n\n    </div>\n\n    <footer>\n\n        <div class="foorTabs">\n\n            <div><img style="width: 40%;margin-top: 14%;" src="../../assets/imgs/home/homeCam.png" /></div>\n\n            <div><img style="width: 68%;margin-top: 20%;" src="../../assets/imgs/home/shareCam.png" /></div>\n\n            <div><img style="width: 130%;margin-top: -20%;" src="../../assets/imgs/home/mainBtn.png" /></div>\n\n            <div><img style="width: 36%;margin-top: 20%;" src="../../assets/imgs/home/chongzhiCam.png" /></div>\n\n            <div><img style="width: 70%;margin-top: 14%;" src="../../assets/imgs/home/admiCli.png" /></div>\n\n        </div>\n\n    </footer>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\program\qp\src\pages\agent\agent.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AgentPage);
    return AgentPage;
}());

//# sourceMappingURL=agent.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubordinatemanagementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SubordinatemanagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubordinatemanagementPage = /** @class */ (function () {
    function SubordinatemanagementPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SubordinatemanagementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubordinatemanagementPage');
    };
    SubordinatemanagementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-subordinatemanagement',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\program\qp\src\pages\subordinatemanagement\subordinatemanagement.html"*/'<!--\n  Generated template for the SubordinatemanagementPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="navbar">\n        <ion-title>下级查询</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="subordinatemanagement mainContent">\n    <div class="subordinatemanagementSearch">\n        <div class="spanInp"><span>下级查询</span><input type="text" placeholder="请输入玩家ID"></div>\n    </div>\n    <div class="submitBtn"><img src="../../assets/imgs/tijiaoqingjiu.png" alt=""></div>\n    <div class="subordinatemanagementResult">\n        <li>暂无查询结果</li>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\program\qp\src\pages\subordinatemanagement\subordinatemanagement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SubordinatemanagementPage);
    return SubordinatemanagementPage;
}());

//# sourceMappingURL=subordinatemanagement.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformanceinquiryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PerformanceinquiryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerformanceinquiryPage = /** @class */ (function () {
    function PerformanceinquiryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PerformanceinquiryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerformanceinquiryPage');
    };
    PerformanceinquiryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-performanceinquiry',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\program\qp\src\pages\performanceinquiry\performanceinquiry.html"*/'<!--\n  Generated template for the PerformanceinquiryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="navbar">\n        <ion-title>业绩查询</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="mainContent">\n    <div class="Performanceinquiry">\n        <ion-segment [(ngModel)]="pet">\n            <ion-segment-button value="today">\n                今日\n            </ion-segment-button>\n            <ion-segment-button value="yesterday">\n                昨日\n            </ion-segment-button>\n            <ion-segment-button value="thisWeed">\n                本周\n            </ion-segment-button>\n            <ion-segment-button value="thisMonth">\n                本月\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\program\qp\src\pages\performanceinquiry\performanceinquiry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PerformanceinquiryPage);
    return PerformanceinquiryPage;
}());

//# sourceMappingURL=performanceinquiry.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentmanagementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AgentmanagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgentmanagementPage = /** @class */ (function () {
    function AgentmanagementPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AgentmanagementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgentmanagementPage');
    };
    AgentmanagementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agentmanagement',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\program\qp\src\pages\agentmanagement\agentmanagement.html"*/'<!--\n  Generated template for the AgentmanagementPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="navbar">\n        <ion-title>代理管理</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="mainContent">\n    <div class="searchCont">\n        <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n        <div class="searchResult">\n            <ion-list>\n                <div class="searchTitle">\n                    <span>排名</span>\n                    <span>昵称</span>\n                    <span>ID</span>\n                    <span>本周业绩</span>\n                    <span>团队人数</span>\n                </div>\n                <!-- <ion-item *ngFor="let item of items">\n                    <span>{{ item }}</span>\n                    <span>{{ item }}</span>\n                    <span>{{ item }}</span>\n                    <span>{{ item }}</span>\n                    <span>{{ item }}</span>\n                </ion-item> -->\n            </ion-list>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\program\qp\src\pages\agentmanagement\agentmanagement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AgentmanagementPage);
    return AgentmanagementPage;
}());

//# sourceMappingURL=agentmanagement.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlipayscanerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AlipayscanerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlipayscanerPage = /** @class */ (function () {
    function AlipayscanerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AlipayscanerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlipayscanerPage');
    };
    AlipayscanerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alipayscaner',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\program\qp\src\pages\alipayscaner\alipayscaner.html"*/'<!--\n  Generated template for the AlipayscanerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="navbar">\n        <ion-title>支付宝扫码</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="alipayScanerAllCont mainContent">\n    <div class="alipayScanerCont">\n        <div><img src="../../assets/imgs/depositTypes/zhifubao-logo.png" alt=""></div>\n        <div><span>充值金额</span><input type="text" name="" id="" placeholder="请输入充值金额"></div>\n        <div class="submitBtn"><img src="../../assets/imgs/tijiaoqingjiu.png" alt=""></div>\n        <div class="smalltishi">\n            <li>温馨提示:</li>\n            <li>1.请填写金额点击提交按钮,系统会自动生成带小数金额。</li>\n            <li>2.请用微信/支付宝/美团截图扫描生成的二维码。</li>\n            <li>3.财务人员会为您尽快入账，如有问题请联系客服</li>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\program\qp\src\pages\alipayscaner\alipayscaner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AlipayscanerPage);
    return AlipayscanerPage;
}());

//# sourceMappingURL=alipayscaner.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlipayzhuanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AlipayzhuanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlipayzhuanPage = /** @class */ (function () {
    function AlipayzhuanPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AlipayzhuanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlipayzhuanPage');
    };
    AlipayzhuanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alipayzhuan',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\program\qp\src\pages\alipayzhuan\alipayzhuan.html"*/'<!--\n  Generated template for the AlipayzhuanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="navbar">\n        <ion-title>支付宝充值</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="alipayzhuanAllCont mainContent">\n    <p>您目前选择的是支付宝转账银行卡充值服务</p>\n    <div class="alizhuanWrap">\n        <div><span>充值金额</span><input type="text" name="" id="" placeholder="165979415"></div>\n        <div><span>收款银行</span><input type="text" name="" id="" placeholder="1235452"></div>\n        <div><span>收款账户名</span><input type="text" name="" id="" placeholder="10000000"></div>\n        <div><span>收款账号</span><input type="text" name="" id="" placeholder="62284855555555555"></div>\n    </div>\n    <div class="submitBtn"><img src="../../assets/imgs/tijiaoqingjiu.png" alt=""></div>\n    <div class="smalltishi">\n        <li>温馨提示:</li>\n        <li>1.请点击复制收款账户按钮复制账户。</li>\n        <li>2.打开支付宝——转账——转到银行卡——填写收款信息。</li>\n        <li>3.财务人员会为您尽快入账，如有问题请联系客服</li>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\program\qp\src\pages\alipayzhuan\alipayzhuan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AlipayzhuanPage);
    return AlipayzhuanPage;
}());

//# sourceMappingURL=alipayzhuan.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CenterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__withdraw_withdraw__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__deposit_deposit__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admininfo_admininfo__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agent_agent__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__game_game__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__share_share__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__changeheader_changeheader__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**GamePage
 * Generated class for the CenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CenterPage = /** @class */ (function () {
    function CenterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CenterPage.prototype.withdrawbtn = function (items) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__withdraw_withdraw__["a" /* WithdrawPage */]);
        console.log("okoko");
    };
    CenterPage.prototype.depositbtn = function (items) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__deposit_deposit__["a" /* DepositPage */]);
    };
    CenterPage.prototype.admininfobtn = function (items) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__admininfo_admininfo__["a" /* AdmininfoPage */]);
    };
    CenterPage.prototype.agentPagebtn = function (items) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__agent_agent__["a" /* AgentPage */]);
    };
    CenterPage.prototype.gamePagebtn = function (items) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__game_game__["a" /* GamePage */]);
    };
    CenterPage.prototype.sharePagebtn = function (items) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__share_share__["a" /* SharePage */]);
    };
    CenterPage.prototype.changeheaderbtn = function (items) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__changeheader_changeheader__["a" /* ChangeheaderPage */]);
    };
    CenterPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad CenterPage");
    };
    CenterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-center",template:/*ion-inline-start:"C:\Users\Administrator\Desktop\program\qp\src\pages\center\center.html"*/'<!--\n\n  Generated template for the CenterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <div class="headerTop">\n\n        <div class="gamename">\n\n            <div class="heraerPhoto"><img (tap)=\'changeheaderbtn()\' src="../../assets/imgs/center/touxiang.png" alt=""></div>\n\n            <div class="colorWhite fontSize8">昵称有七个字</div>\n\n            <div class="colorPurple fontSize8">1000000元</div>\n\n        </div>\n\n    </div>\n\n    <div class="headerBottom">\n\n        <div (tap)=\'withdrawbtn()\'><span><img src="../../assets/imgs/center/tixian.png" alt=""></span><span>提现</span></div>\n\n        <div (tap)=\'depositbtn()\'><span><img src="../../assets/imgs/center/chongzhi.png" alt=""></span><span>充值</span></div>\n\n    </div>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="centerAllCont mainContent">\n\n    <div class="centerOuter">\n\n        <div (tap)=\'admininfobtn()\'>\n\n            <div class="centerInner1"><img src="../../assets/imgs/center/zhanghaoguanli.png" alt=""></div>\n\n            <div class="centerInner2">账号管理</div>\n\n            <div class="centerInner3">\n\n\n\n            </div>\n\n        </div>\n\n        <div (tap)=\'agentPagebtn()\'>\n\n            <div class="centerInner1"><img src="../../assets/imgs/center/dailizhongxin.png" alt=""></div>\n\n            <div class="centerInner2">代理中心</div>\n\n            <div class="centerInner3">\n\n\n\n            </div>\n\n        </div>\n\n        <div (tap)=\'gamePagebtn()\'>\n\n            <div class="centerInner1"><img src="../../assets/imgs/center/youxijilu.png" alt=""></div>\n\n            <div class="centerInner2">游戏记录</div>\n\n            <div class="centerInner3">\n\n\n\n            </div>\n\n        </div>\n\n        <!-- <div class="shareApp" (tap)=\'sharePagebtn()\'> -->\n\n        <div class="shareApp" (tap)=\'sharePagebtn()\'>\n\n            <div class="centerInner1"><img src="../../assets/imgs/center/fenxiang.png" alt=""></div>\n\n            <div class="centerInner2">分享APP</div>\n\n            <div class="centerInner3">\n\n\n\n            </div>\n\n        </div>\n\n    </div>\n\n    <footer>\n\n        <div class="foorTabs">\n\n            <div><img style="width: 40%;margin-top: 14%;" src="../../assets/imgs/home/homeCam.png" /></div>\n\n            <div><img style="width: 68%;margin-top: 20%;" src="../../assets/imgs/home/shareCam.png" /></div>\n\n            <div><img style="width: 130%;margin-top: -20%;" src="../../assets/imgs/home/mainBtn.png" /></div>\n\n            <div><img style="width: 36%;margin-top: 20%;" src="../../assets/imgs/home/chongzhiCam.png" /></div>\n\n            <div><img style="width: 70%;margin-top: 14%;" src="../../assets/imgs/home/admiCli.png" /></div>\n\n        </div>\n\n    </footer>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\program\qp\src\pages\center\center.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CenterPage);
    return CenterPage;
}());

//# sourceMappingURL=center.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithdrawPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the WithdrawPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WithdrawPage = /** @class */ (function () {
    function WithdrawPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WithdrawPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WithdrawPage');
    };
    WithdrawPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-withdraw',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\program\qp\src\pages\withdraw\withdraw.html"*/'<!--\n\n  Generated template for the WithdrawPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color=\'navbar\'>\n\n        <ion-title>提现</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="mainContent withdrawConten">\n\n    <div class="withdrawContenOuter">\n\n        <div class="withdrawtop">\n\n            <div>可取金额</div>\n\n            <div><span>222222222222</span><span style="color:#DDD;">&#8194;元</span> </div>\n\n        </div>\n\n        <div class="withdrawbottom">\n\n            <div>\n\n                <span>取款至</span>\n\n                <span class="choiceCard">\n\n                    \n\n                </span>\n\n            </div>\n\n            <div><span>金额</span><input type="text" name="" id="" placeholder="请输入取款金额"></div>\n\n        </div>\n\n        <div class="tijao"><img src="../../assets/imgs/tijiaoqingjiu.png" alt=""></div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\program\qp\src\pages\withdraw\withdraw.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], WithdrawPage);
    return WithdrawPage;
}());

//# sourceMappingURL=withdraw.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WechatdepositPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the WechatdepositPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WechatdepositPage = /** @class */ (function () {
    function WechatdepositPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WechatdepositPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WechatdepositPage');
    };
    WechatdepositPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wechatdeposit',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\program\qp\src\pages\wechatdeposit\wechatdeposit.html"*/'<!--\n  Generated template for the WechatdepositPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="navbar">\n        <ion-title>微信扫码</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="wechatdepositAllCont mainContent">\n    <div class="wechatdepositCont">\n        <div><img src="../../assets/imgs/depositTypes/weixin-logo.png" alt=""></div>\n        <div><span>充值金额</span><input type="text" name="" id="" placeholder="请输入充值金额"></div>\n        <div class="submitBtn"><img src="../../assets/imgs/tijiaoqingjiu.png" alt=""></div>\n        <div class="smalltishi">\n            <li>温馨提示:</li>\n            <li>1.请填写金额点击提交按钮,系统会自动生成带小数金额。</li>\n            <li>2.请用微信/支付宝/美团截图扫描生成的二维码。</li>\n            <li>3.财务人员会为您尽快入账，如有问题请联系客服</li>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\program\qp\src\pages\wechatdeposit\wechatdeposit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], WechatdepositPage);
    return WechatdepositPage;
}());

//# sourceMappingURL=wechatdeposit.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeituanscanerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MeituanscanerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MeituanscanerPage = /** @class */ (function () {
    function MeituanscanerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MeituanscanerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MeituanscanerPage');
    };
    MeituanscanerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-meituanscaner',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\program\qp\src\pages\meituanscaner\meituanscaner.html"*/'<!--\n  Generated template for the AlipayscanerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="navbar">\n        <ion-title>美团扫码</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="meituanScanerAllCont mainContent">\n    <div class="meituanScanerCont">\n        <div><img src="../../assets/imgs/depositTypes/meituan-logo.png" alt=""></div>\n        <div><span>充值金额</span><input type="text" name="" id="" placeholder="请输入充值金额"></div>\n        <div class="submitBtn"><img src="../../assets/imgs/tijiaoqingjiu.png" alt=""></div>\n        <div class="smalltishi">\n            <li>温馨提示:</li>\n            <li>1.请填写金额点击提交按钮,系统会自动生成带小数金额。</li>\n            <li>2.请用微信/支付宝/美团截图扫描生成的二维码。</li>\n            <li>3.财务人员会为您尽快入账，如有问题请联系客服</li>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\program\qp\src\pages\meituanscaner\meituanscaner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MeituanscanerPage);
    return MeituanscanerPage;
}());

//# sourceMappingURL=meituanscaner.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WangyinzhuanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the WangyinzhuanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WangyinzhuanPage = /** @class */ (function () {
    function WangyinzhuanPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WangyinzhuanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WangyinzhuanPage');
    };
    WangyinzhuanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wangyinzhuan',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\program\qp\src\pages\wangyinzhuan\wangyinzhuan.html"*/'<!--\n  Generated template for the WangyinzhuanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="navbar">\n        <ion-title>网银充值</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="wangyinAllCont mainContent">\n    <p>该支付方式免费赠送1%的优惠，祝您游戏愉快</p>\n    <div class="wangyinWrap">\n        <div><span>选择银行</span><input type="text" name="" id="" placeholder="1235452"></div>\n        <div><span>充值金额</span><input type="text" name="" id="" placeholder="165979415"></div>\n    </div>\n    <p class="pOrange">单次最低充值200元，最高50000元</p>\n    <div class="moneyChoice">\n        <span>200元</span>\n        <span>500元</span>\n        <span>1000元</span>\n        <span>2000元</span>\n    </div>\n    <div class="submitBtn"><img src="../../assets/imgs/tijiaoqingjiu.png" alt=""></div>\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\program\qp\src\pages\wangyinzhuan\wangyinzhuan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], WangyinzhuanPage);
    return WangyinzhuanPage;
}());

//# sourceMappingURL=wangyinzhuan.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeheaderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChangeheaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangeheaderPage = /** @class */ (function () {
    function ChangeheaderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChangeheaderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangeheaderPage');
    };
    ChangeheaderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changeheader',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\program\qp\src\pages\changeheader\changeheader.html"*/'<!--\n\n  Generated template for the ChangeheaderPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="navbar">\n\n        <ion-title>更换头像</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="changeHeader mainContent">\n\n    <div class="herderChoice">\n\n        <div>\n\n            <span><img src="../../assets/imgs/changeheader/1.png" alt=""></span>\n\n            <span><img src="../../assets/imgs/changeheader/2.png" alt=""></span>\n\n            <span><img src="../../assets/imgs/changeheader/3.png" alt=""></span>\n\n            <span><img src="../../assets/imgs/changeheader/4.png" alt=""></span>\n\n            <span><img src="../../assets/imgs/changeheader/5.png" alt=""></span>\n\n            <span><img src="../../assets/imgs/changeheader/6.png" alt=""></span>\n\n            <span><img src="../../assets/imgs/changeheader/7.png" alt=""></span>\n\n            <span><img src="../../assets/imgs/changeheader/8.png" alt=""></span>\n\n        </div>\n\n    </div>\n\n    <div class="submitBtn"><img src="../../assets/imgs/tijiaoqingjiu.png" alt=""></div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\program\qp\src\pages\changeheader\changeheader.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ChangeheaderPage);
    return ChangeheaderPage;
}());

//# sourceMappingURL=changeheader.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_util__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, util, config, httpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.util = util;
        this.config = config;
        this.httpService = httpService;
        this.reg = { loginType: 'BROWSER', password: '', username: '' };
    }
    RegisterPage.prototype.returnLoginbtn = function () {
        // let name = items.pagename?items.pagename:'详情页';
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        // this.rootPage = TabsPage;
        console.log("222");
    };
    RegisterPage.prototype.registerbtn = function () {
        if (this.checkCreate()) {
            this.httpService.requestPostData('/login', this.reg, function (res) {
                console.log(res);
            });
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
            // this.rootPage = TabsPage;
        }
    };
    RegisterPage.prototype.checkCreate = function () {
        if (this.reg.username == '' || this.reg.password == '') {
            console.log(this.reg.username.length, this.reg.password.length);
            this.util.showAlert('请填写正确填写信息！', '温馨提示');
            return false;
        }
        return true;
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-register",template:/*ion-inline-start:"C:\Users\Administrator\Desktop\program\qp\src\pages\register\register.html"*/'<ion-header>\n\n    <ion-navbar color="navbar">\n\n        <ion-title>免费注册</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="regisWrap mainContent">\n\n    <div class="reisInfo">\n\n        <div class="reisInfo1">\n\n            <div class="reisInfo2"><img src="../../assets/imgs/register/Cellphone icon.png" alt=""></div>\n\n            <div class="reisInfo3">\n\n                <input type="text" name="" id="">\n\n            </div>\n\n            <div class="reisInfo4 colorOrange">获取验证码</div>\n\n        </div>\n\n        <div class="reisInfo1">\n\n            <div class="reisInfo2"><img src="../../assets/imgs/register/Password icon.png" alt=""></div>\n\n            <div class="reisInfo3">\n\n                <input type="text" name="" id="">\n\n            </div>\n\n            <div class="reisInfo4"><img src="../../assets/imgs/register/eyesCam.png" alt=""></div>\n\n        </div>\n\n        <div class="reisInfo1">\n\n            <div class="reisInfo2"><img src="../../assets/imgs/register/Password icon.png" alt=""></div>\n\n            <div class="reisInfo3">\n\n                <input type="text" name="" id="">\n\n            </div>\n\n            <div class="reisInfo4"><img src="../../assets/imgs/register/eyesCli.png" alt=""></div>\n\n        </div>\n\n        <div class="reisInfo1">\n\n            <div class="reisInfo2"><img src="../../assets/imgs/register/yanzhengma.png" alt=""></div>\n\n            <div class="reisInfo3">\n\n                <input type="text" name="" id="" placeholder="请输入验证码">\n\n            </div>\n\n        </div>\n\n        <div class="reisInfo1">\n\n            <div class="reisInfo2"><img src="../../assets/imgs/register/tuiguang.png" alt=""></div>\n\n            <div class="reisInfo3">\n\n                <input type="text" name="" id="" placeholder="请输入推广ID">\n\n            </div>\n\n        </div>\n\n    </div>\n\n    <div class="btnwrap">\n\n        <div class="subbtn">\n\n            <button ion-button color="orange" round full (tap)="registerbtn()">立即注册</button>\n\n        </div>\n\n        <div class="dushLine">\n\n            <span class="spanline"></span>\n\n            <span>已有账号?</span>\n\n            <span class="spanline"></span>\n\n        </div>\n\n        <div class="login">\n\n            <button ion-button color="secondary" round full (tap)="returnLoginbtn()">登录</button>\n\n        </div>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\program\qp\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_util_util__["a" /* UtilProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 136:
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
webpackEmptyAsyncContext.id = 136;

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admininfo/admininfo.module": [
		298,
		24
	],
	"../pages/agent/agent.module": [
		299,
		23
	],
	"../pages/agentmanagement/agentmanagement.module": [
		300,
		22
	],
	"../pages/alipayscaner/alipayscaner.module": [
		301,
		21
	],
	"../pages/alipayzhuan/alipayzhuan.module": [
		302,
		20
	],
	"../pages/bankbind/bankbind.module": [
		303,
		19
	],
	"../pages/bankinfo/bankinfo.module": [
		304,
		2
	],
	"../pages/banklist/banklist.module": [
		305,
		18
	],
	"../pages/center/center.module": [
		306,
		17
	],
	"../pages/changeheader/changeheader.module": [
		307,
		16
	],
	"../pages/changeloginpwd/changeloginpwd.module": [
		308,
		15
	],
	"../pages/deposit/deposit.module": [
		309,
		14
	],
	"../pages/developmentsubordinate/developmentsubordinate.module": [
		310,
		1
	],
	"../pages/game/game.module": [
		311,
		13
	],
	"../pages/meituanscaner/meituanscaner.module": [
		312,
		12
	],
	"../pages/message/message.module": [
		313,
		0
	],
	"../pages/news/news.module": [
		314,
		11
	],
	"../pages/performanceinquiry/performanceinquiry.module": [
		315,
		10
	],
	"../pages/register/register.module": [
		316,
		9
	],
	"../pages/share/share.module": [
		317,
		8
	],
	"../pages/subordinatemanagement/subordinatemanagement.module": [
		318,
		7
	],
	"../pages/wangyinzhuan/wangyinzhuan.module": [
		319,
		6
	],
	"../pages/wechatdeposit/wechatdeposit.module": [
		320,
		5
	],
	"../pages/withdraw/withdraw.module": [
		321,
		4
	],
	"../pages/zijingpwd/zijingpwd.module": [
		322,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 178;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_game__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__center_center__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_share__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__deposit_deposit__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__share_share__["a" /* SharePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__game_game__["a" /* GamePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__deposit_deposit__["a" /* DepositPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_2__center_center__["a" /* CenterPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Administrator\Desktop\program\qp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n    <ion-tab [root]="tab1Root" tabTitle="" tabIcon=""></ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle="" tabIcon=""></ion-tab>\n\n    <ion-tab [root]="tab3Root" tabTitle="" tabIcon=""></ion-tab>\n\n    <ion-tab [root]="tab4Root" tabTitle="" tabIcon=""></ion-tab>\n\n    <ion-tab [root]="tab5Root" tabTitle="" tabIcon=""></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\Administrator\Desktop\program\qp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsPage');
    };
    NewsPage.prototype.loginbtn = function (items) {
        // console.log(items)
        // let name = items.pagename?items.pagename:'详情页';
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\program\qp\src\pages\news\news.html"*/'<ion-header style="background: #f8f8f8;">\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>首页</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class=""> \n\n\n\n</ion-content> \n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\program\qp\src\pages\news\news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(248);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_news_news__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_share_share__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_withdraw_withdraw__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_center_center__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_deposit_deposit__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_wechatdeposit_wechatdeposit__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_alipayscaner_alipayscaner__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_meituanscaner_meituanscaner__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_alipayzhuan_alipayzhuan__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_wangyinzhuan_wangyinzhuan__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_admininfo_admininfo__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_zijingpwd_zijingpwd__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_changeloginpwd_changeloginpwd__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_banklist_banklist__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_agentmanagement_agentmanagement__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_bankbind_bankbind__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_agent_agent__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_changeheader_changeheader__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_game_game__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_subordinatemanagement_subordinatemanagement__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_register_register__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_performanceinquiry_performanceinquiry__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_login_login__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_http_services_http_services__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_config_config__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_util_util__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_http__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_tabs_tabs__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_storage_storage__ = __webpack_require__(86);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_share_share__["a" /* SharePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_withdraw_withdraw__["a" /* WithdrawPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_admininfo_admininfo__["a" /* AdmininfoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_zijingpwd_zijingpwd__["a" /* ZijingpwdPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_changeloginpwd_changeloginpwd__["a" /* ChangeloginpwdPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_changeheader_changeheader__["a" /* ChangeheaderPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_subordinatemanagement_subordinatemanagement__["a" /* SubordinatemanagementPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_banklist_banklist__["a" /* BanklistPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_bankbind_bankbind__["a" /* BankbindPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_agent_agent__["a" /* AgentPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_deposit_deposit__["a" /* DepositPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_wechatdeposit_wechatdeposit__["a" /* WechatdepositPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_alipayscaner_alipayscaner__["a" /* AlipayscanerPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_meituanscaner_meituanscaner__["a" /* MeituanscanerPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_alipayzhuan_alipayzhuan__["a" /* AlipayzhuanPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_wangyinzhuan_wangyinzhuan__["a" /* WangyinzhuanPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_agentmanagement_agentmanagement__["a" /* AgentmanagementPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_performanceinquiry_performanceinquiry__["a" /* PerformanceinquiryPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_center_center__["a" /* CenterPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_33__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_33__angular_http__["e" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: "true",
                    iconMode: "ios",
                    mode: "ios",
                    modalEnter: "modal-slide-in",
                    modalLeave: "modal-slide-out",
                    backButtonText: "" //设置返回按钮的文本
                }, {
                    links: [
                        { loadChildren: '../pages/admininfo/admininfo.module#AdmininfoPageModule', name: 'AdmininfoPage', segment: 'admininfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agent/agent.module#AgentPageModule', name: 'AgentPage', segment: 'agent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agentmanagement/agentmanagement.module#AgentmanagementPageModule', name: 'AgentmanagementPage', segment: 'agentmanagement', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alipayscaner/alipayscaner.module#AlipayscanerPageModule', name: 'AlipayscanerPage', segment: 'alipayscaner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alipayzhuan/alipayzhuan.module#AlipayzhuanPageModule', name: 'AlipayzhuanPage', segment: 'alipayzhuan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bankbind/bankbind.module#BankbindPageModule', name: 'BankbindPage', segment: 'bankbind', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bankinfo/bankinfo.module#BankinfoPageModule', name: 'BankinfoPage', segment: 'bankinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/banklist/banklist.module#BanklistPageModule', name: 'BanklistPage', segment: 'banklist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/center/center.module#CenterPageModule', name: 'CenterPage', segment: 'center', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/changeheader/changeheader.module#ChangeheaderPageModule', name: 'ChangeheaderPage', segment: 'changeheader', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/changeloginpwd/changeloginpwd.module#ChangeloginpwdPageModule', name: 'ChangeloginpwdPage', segment: 'changeloginpwd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/deposit/deposit.module#DepositPageModule', name: 'DepositPage', segment: 'deposit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/developmentsubordinate/developmentsubordinate.module#DevelopmentsubordinatePageModule', name: 'DevelopmentsubordinatePage', segment: 'developmentsubordinate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/game/game.module#GamePageModule', name: 'GamePage', segment: 'game', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/meituanscaner/meituanscaner.module#MeituanscanerPageModule', name: 'MeituanscanerPage', segment: 'meituanscaner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/message.module#MessagePageModule', name: 'MessagePage', segment: 'message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/performanceinquiry/performanceinquiry.module#PerformanceinquiryPageModule', name: 'PerformanceinquiryPage', segment: 'performanceinquiry', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/share/share.module#SharePageModule', name: 'SharePage', segment: 'share', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subordinatemanagement/subordinatemanagement.module#SubordinatemanagementPageModule', name: 'SubordinatemanagementPage', segment: 'subordinatemanagement', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wangyinzhuan/wangyinzhuan.module#WangyinzhuanPageModule', name: 'WangyinzhuanPage', segment: 'wangyinzhuan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wechatdeposit/wechatdeposit.module#WechatdepositPageModule', name: 'WechatdepositPage', segment: 'wechatdeposit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/withdraw/withdraw.module#WithdrawPageModule', name: 'WithdrawPage', segment: 'withdraw', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/zijingpwd/zijingpwd.module#ZijingpwdPageModule', name: 'ZijingpwdPage', segment: 'zijingpwd', priority: 'low', defaultHistory: [] }
                    ]
                })
                // IonicModule.forRoot(MyApp)
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_share_share__["a" /* SharePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_withdraw_withdraw__["a" /* WithdrawPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_admininfo_admininfo__["a" /* AdmininfoPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_changeheader_changeheader__["a" /* ChangeheaderPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_zijingpwd_zijingpwd__["a" /* ZijingpwdPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_changeloginpwd_changeloginpwd__["a" /* ChangeloginpwdPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_banklist_banklist__["a" /* BanklistPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_bankbind_bankbind__["a" /* BankbindPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_agent_agent__["a" /* AgentPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_agentmanagement_agentmanagement__["a" /* AgentmanagementPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_subordinatemanagement_subordinatemanagement__["a" /* SubordinatemanagementPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_performanceinquiry_performanceinquiry__["a" /* PerformanceinquiryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_deposit_deposit__["a" /* DepositPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_wechatdeposit_wechatdeposit__["a" /* WechatdepositPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_alipayscaner_alipayscaner__["a" /* AlipayscanerPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_meituanscaner_meituanscaner__["a" /* MeituanscanerPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_alipayzhuan_alipayzhuan__["a" /* AlipayzhuanPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_wangyinzhuan_wangyinzhuan__["a" /* WangyinzhuanPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_center_center__["a" /* CenterPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_30__providers_http_services_http_services__["a" /* HttpServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_config_config__["a" /* ConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_util_util__["a" /* UtilProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_storage_storage__["a" /* StorageProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { HomePage } from '../pages/home/home';

var MyApp = /** @class */ (function () {
    // rootPage:any = TabsPage;
    function MyApp(platform, statusBar, splashScreen, storage) {
        this.storage = storage;
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
        // 默认打开首页
        // this.rootPage = TabsPage;
        // 判断是否登录
        if (this.storage.get('firstIn')) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        }
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Administrator\Desktop\program\qp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\program\qp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { LoginPage } from '../login/login';
// import{ AdmininfoPage } from "../admininfo/admininfo"
// import { NewsPage } from '../news/news';
// import { TabsPage } from '../tabs/tabs';
var HomePage = /** @class */ (function () {
    // rootPage:any;
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.registerbtn = function (items) {
        // this.rootPage = TabsPage;
        // console.log(items)
        // let name = items.pagename?items.pagename:'详情页';
        // this.navCtrl.push(TabsPage)
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"C:\Users\Administrator\Desktop\program\qp\src\pages\home\home.html"*/'<ion-header no-padding>\n\n    <div class="headerWrap">\n\n        <div class="face"><img src="../../assets/imgs/changeheader/1.png" alt=""></div>\n\n        <div class="gamename">\n\n            <div>\n\n                <div class="colorWhite fontSize8">昵称有七个字</div>\n\n                <div class="colorWhite fontSize8">ID:6666666</div>\n\n            </div>\n\n            <div class="colorWhite fontSize8 money">1000000</div>\n\n        </div>\n\n        <div class="info standSize"><img src="../../assets/imgs/home/message.png" alt=""></div>\n\n        <div class="active standSize"><img src="../../assets/imgs/home/activeIcon.png" alt=""></div>\n\n        <div class="serve standSize"><img src="../../assets/imgs/home/serverIcon.png" alt=""></div>\n\n        <div class="setting standSize"><img src="../../assets/imgs/home/setIcon.png" alt=""></div>\n\n    </div>\n\n</ion-header>\n\n\n\n<ion-content id="allCont">\n\n    <div class="broadcast">\n\n        <div>\n\n            <div class="broleft"><img src="../../assets/imgs/home/labaicon.png" alt=""></div>\n\n            <div class="broright">\n\n                <div>财源滚滚恭喜 <span>XXX</span> 获得百万大奖</div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n\n\n    <!-- <button ion-button color="orange" round (tap)="registerbtn()"></button> -->\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-6>\n\n                <div><img src="../../assets/imgs/home/zhajinhua.png" alt="">\n\n                </div>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <ion-row>\n\n                    <div>\n\n                        <img src="../../assets/imgs/home/baijiale.png" alt=""></div>\n\n                </ion-row>\n\n                <ion-row>\n\n                    <div><img src="../../assets/imgs/home/bairenniuniu.png" alt=""></div>\n\n                </ion-row>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-6>\n\n                <ion-row>\n\n                    <div>\n\n                        <img src="../../assets/imgs/home/baijiale.png" alt=""></div>\n\n                </ion-row>\n\n                <ion-row>\n\n                    <div><img src="../../assets/imgs/home/bairenniuniu.png" alt=""></div>\n\n                </ion-row>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <div><img src="../../assets/imgs/home/zhajinhua.png" alt="">\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-6>\n\n                <div><img src="../../assets/imgs/home/laohuji.png" alt=""></div>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <div><img src="../../assets/imgs/home/doudizhu.png" alt=""></div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    <footer>\n\n        <div class="foorTabs">\n\n            <div><img style="width: 40%;margin-top: 14%;" src="../../assets/imgs/home/homeCam.png" /></div>\n\n            <div><img style="width: 68%;margin-top: 20%;" src="../../assets/imgs/home/shareCam.png" /></div>\n\n            <div><img style="width: 130%;margin-top: -20%;" src="../../assets/imgs/home/mainBtn.png" /></div>\n\n            <div><img style="width: 36%;margin-top: 20%;" src="../../assets/imgs/home/chongzhiCam.png" /></div>\n\n            <div><img style="width: 70%;margin-top: 14%;" src="../../assets/imgs/home/admiCli.png" /></div>\n\n        </div>\n\n    </footer>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\program\qp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Http } from '@angular/http';


/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ConfigProvider = /** @class */ (function () {
    // public current_domain = 'https://cdn.wxii5.cn'
    function ConfigProvider(platform) {
        // 接口请求地址
        this.apiUrl = "https://cdn.wxii5.cn";
    }
    ConfigProvider.prototype.getQueryString = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
        var context = "";
        if (r != null)
            context = r[2];
        reg = null;
        r = null;
        return context == null || context == "" || context == "undefined" ? "" : context;
    };
    ConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */]])
    ], ConfigProvider);
    return ConfigProvider;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepositPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wechatdeposit_wechatdeposit__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alipayscaner_alipayscaner__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__meituanscaner_meituanscaner__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alipayzhuan_alipayzhuan__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wangyinzhuan_wangyinzhuan__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the DepositPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DepositPage = /** @class */ (function () {
    function DepositPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DepositPage.prototype.wechatdepositbtn = function (items) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__wechatdeposit_wechatdeposit__["a" /* WechatdepositPage */]);
    };
    DepositPage.prototype.alipayscanerbtn = function (items) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__alipayscaner_alipayscaner__["a" /* AlipayscanerPage */]);
    };
    DepositPage.prototype.meituanscaner = function (items) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__meituanscaner_meituanscaner__["a" /* MeituanscanerPage */]);
    };
    DepositPage.prototype.alipayzhuanbtn = function (items) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__alipayzhuan_alipayzhuan__["a" /* AlipayzhuanPage */]);
    };
    DepositPage.prototype.wangyinzhuanbtn = function (items) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__wangyinzhuan_wangyinzhuan__["a" /* WangyinzhuanPage */]);
    };
    DepositPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad DepositPage");
    };
    DepositPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-deposit",template:/*ion-inline-start:"C:\Users\Administrator\Desktop\program\qp\src\pages\deposit\deposit.html"*/'<ion-header>\n\n    <ion-navbar color="navbar">\n\n        <ion-title>充值方式</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="mainContent">\n\n    <div class="depositTypes">\n\n        <div (tap)=\'wechatdepositbtn()\'>\n\n            <div><img src="../../assets/imgs/充值方式/weixin-logo.png" alt=""></div>\n\n            <div>\n\n                <h2>微信扫码充值</h2>\n\n                <h3>使用微信扫收款二维码充值</h3>\n\n            </div>\n\n            <div></div>\n\n        </div>\n\n        <div (tap)=\'alipayscanerbtn()\'>\n\n            <div><img src="../../assets/imgs/充值方式/zhifubao-logo.png" alt=""></div>\n\n            <div>\n\n                <h2>支付宝扫码充值</h2>\n\n                <h3>使用支付宝扫收款二维码充值</h3>\n\n            </div>\n\n            <div></div>\n\n        </div>\n\n        <div (tap)=\'meituanscaner()\'>\n\n            <div><img src="../../assets/imgs/充值方式/meituan-logo.png" alt=""></div>\n\n            <div>\n\n                <h2>美团扫码充值</h2>\n\n                <h3>使用美团扫收款二维码充值</h3>\n\n            </div>\n\n            <div></div>\n\n        </div>\n\n        <div (tap)=\'alipayzhuanbtn()\'>\n\n            <div><img src="../../assets/imgs/充值方式/zhifubao-logo.png" alt=""></div>\n\n            <div>\n\n                <h2>支付宝转账充值</h2>\n\n                <h3>使用支付宝转账充值，秒到账</h3>\n\n            </div>\n\n            <div></div>\n\n        </div>\n\n        <div (tap)=\'wangyinzhuanbtn()\'>\n\n            <div><img src="../../assets/imgs/充值方式/wangyin-logo.png" alt=""></div>\n\n            <div>\n\n                <h2>网银充值</h2>\n\n                <h3>跳转网页登录网银转账，秒到账</h3>\n\n            </div>\n\n            <div></div>\n\n        </div>\n\n    </div>\n\n    <footer>\n\n        <div class="foorTabs">\n\n            <div><img style="width: 40%;margin-top: 14%;" src="../../assets/imgs/home/homeCam.png" /></div>\n\n            <div><img style="width: 68%;margin-top: 20%;" src="../../assets/imgs/home/shareCam.png" /></div>\n\n            <div><img style="width: 130%;margin-top: -20%;" src="../../assets/imgs/home/mainBtn.png" /></div>\n\n            <div><img style="width: 36%;margin-top: 20%;" src="../../assets/imgs/home/chongzhiCam.png" /></div>\n\n            <div><img style="width: 70%;margin-top: 14%;" src="../../assets/imgs/home/admiCli.png" /></div>\n\n        </div>\n\n    </footer>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\program\qp\src\pages\deposit\deposit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DepositPage);
    return DepositPage;
}());

//# sourceMappingURL=deposit.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GamePage = /** @class */ (function () {
    function GamePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.searchQuery = "";
        this.initializeItems();
    }
    GamePage.prototype.initializeItems = function () {
        this.items = ["百家乐", "斗地主", "炸金花", "斗牛"];
    };
    GamePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != "") {
            this.items = this.items.filter(function (item) {
                return item.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
        }
    };
    GamePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad GamePage");
    };
    GamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-game",template:/*ion-inline-start:"C:\Users\Administrator\Desktop\program\qp\src\pages\game\game.html"*/'<ion-header>\n\n\n\n    <ion-navbar color="navbar">\n\n        <ion-title>游戏记录</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="gameAllCont mainContent">\n\n    <div class="searchCont">\n\n        <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n        <div class="searchResult">\n\n            <ion-list>\n\n                <div class="searchTitle">\n\n                    <span>游戏</span>\n\n                    <span>时间</span>\n\n                    <span>投注</span>\n\n                    <span>结算</span>\n\n                    <span>赛果</span>\n\n                </div>\n\n                <ion-item *ngFor="let item of items">\n\n                    <span>{{ item }}</span>\n\n                    <span>{{ item }}</span>\n\n                    <span>{{ item }}</span>\n\n                    <span>{{ item }}</span>\n\n                    <span>{{ item }}</span>\n\n                </ion-item>\n\n            </ion-list>\n\n        </div>\n\n    </div>\n\n    <footer>\n\n        <div class="foorTabs">\n\n            <div><img style="width: 40%;margin-top: 14%;" src="../../assets/imgs/home/homeCam.png" /></div>\n\n            <div><img style="width: 68%;margin-top: 20%;" src="../../assets/imgs/home/shareCam.png" /></div>\n\n            <div><img style="width: 130%;margin-top: -20%;" src="../../assets/imgs/home/mainBtn.png" /></div>\n\n            <div><img style="width: 36%;margin-top: 20%;" src="../../assets/imgs/home/chongzhiCam.png" /></div>\n\n            <div><img style="width: 70%;margin-top: 14%;" src="../../assets/imgs/home/admiCli.png" /></div>\n\n        </div>\n\n    </footer>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\program\qp\src\pages\game\game.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], GamePage);
    return GamePage;
}());

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SharePage = /** @class */ (function () {
    function SharePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SharePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SharePage');
    };
    SharePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-share',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\program\qp\src\pages\share\share.html"*/'<!--\n\n  Generated template for the SharePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n\n\n    <ion-navbar color="navbar">\n\n        <ion-title>分享赚钱</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header> -->\n\n\n\n\n\n<ion-content class="shareWrap">\n\n    <div class="lottery">\n\n        <div class="lotteryCircle">\n\n            <div><img src="../../assets/imgs/share/zhuanpan.png" alt=""></div>\n\n        </div>\n\n        <div><span>0</span>&#8194;次抽奖机会</div>\n\n        <div>每日首次分享可获得一次抽奖机会</div>\n\n    </div>\n\n    <div class="shareTypes">\n\n        <div><img src="../../assets/imgs/share/erweima.png" alt=""></div>\n\n        <div><img src="../../assets/imgs/share/friends.png" alt=""></div>\n\n        <div><img src="../../assets/imgs/share/weChat.png" alt=""></div>\n\n    </div>\n\n    <div class="shareLink">\n\n        <input type="text" value="" />\n\n        <button ion-button small color="shareLink">分享链接</button>\n\n    </div>\n\n    <footer>\n\n        <div class="foorTabs">\n\n            <div><img style="width: 40%;margin-top: 14%;" src="../../assets/imgs/home/homeCam.png" /></div>\n\n            <div><img style="width: 68%;margin-top: 20%;" src="../../assets/imgs/home/shareCam.png" /></div>\n\n            <div><img style="width: 130%;margin-top: -20%;" src="../../assets/imgs/home/mainBtn.png" /></div>\n\n            <div><img style="width: 36%;margin-top: 20%;" src="../../assets/imgs/home/chongzhiCam.png" /></div>\n\n            <div><img style="width: 70%;margin-top: 14%;" src="../../assets/imgs/home/admiCli.png" /></div>\n\n        </div>\n\n    </footer>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\program\qp\src\pages\share\share.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SharePage);
    return SharePage;
}());

//# sourceMappingURL=share.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_register__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_config__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_util__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_storage_storage__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, util, config, httpService, navParams, storage) {
        this.navCtrl = navCtrl;
        this.util = util;
        this.config = config;
        this.httpService = httpService;
        this.navParams = navParams;
        this.storage = storage;
        this.create = { loginType: 'BROWSER', password: '', username: '' };
    }
    LoginPage.prototype.registerbtn = function (items) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.loginbtn = function () {
        var _this = this;
        // this.rootPage = TabsPage;
        if (this.checkCreate()) {
            this.util.showLoading('loading...');
            this.httpService.requestPostData('/login', this.create, function (res) {
                var data = JSON.parse(res._body);
                if (data.code == '200') {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    // this.rootPage = TabsPage;
                    _this.storage.set('firstIn', true);
                }
                else {
                    console.log(data);
                    _this.util.showAlert(data.message, '温馨提示');
                }
                _this.util.dismiss(100);
            });
        }
    };
    LoginPage.prototype.checkCreate = function () {
        if (this.create.username == '' || this.create.password == '') {
            this.util.showAlert('请填写正确填写信息！', '温馨提示');
            return false;
        }
        return true;
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\program\qp\src\pages\login\login.html"*/'<ion-content class="logincontent">\n\n    <div id="wrap">\n\n        <div class="wrap">\n\n            <div class="loginPhoto">\n\n                <div class="login_photo">\n\n                    <img src="../../assets/imgs/login/icon1.png" alt="">\n\n                </div>\n\n                <div class="login_text">\n\n                    <div><img src="../../assets/imgs/login/hailechess.png" alt=""></div>\n\n                </div>\n\n            </div>\n\n            <div class="loginUsernameWrap">\n\n                <div>\n\n                    <img src="../../assets/imgs/login/namePassword.png" alt="">\n\n                    <div class="username"><input class="inpStyle" type="text" [(ngModel)]="create.username" placeholder="请输入账号"></div>\n\n                    <div class="password"><input class="inpStyle" type="password" [(ngModel)]="create.password" placeholder="请输入号码"></div>\n\n                    <!-- 1,loginBtn div 元素是透明的隐藏在图片登录那个位置\n\n                    2,用来出发登录事件 -->\n\n                    <div class="loginBtn" (tap)="loginbtn()">\n\n                        <img src="../../assets/imgs/login/login.png" alt="">\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div class="autoLogin">\n\n                <div>\n\n                    <div>\n\n                        <span>\n\n                            <img src="../../assets/imgs/login/checkbox.png" alt="">\n\n                            <img src="../../assets/imgs/login/choice.png" alt="">\n\n                        </span>\n\n                        <span class="colorWhite">记住密码</span>\n\n                    </div>\n\n                    <div>\n\n                        <span>\n\n                            <img src="../../assets/imgs/login/checkbox.png" alt="">\n\n                            <img src="../../assets/imgs/login/choice.png" alt="">\n\n                        </span>\n\n                        <span class="colorWhite">自动登录</span>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div class="registered">\n\n                <div>\n\n                    <a class="colorWhite" (tap)="registerbtn()">没有账号立即注册</a>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\program\qp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_util_util__["a" /* UtilProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__providers_storage_storage__["a" /* StorageProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//配置文件

var HttpServicesProvider = /** @class */ (function () {
    function HttpServicesProvider(http, jsonp, config) {
        this.http = http;
        this.jsonp = jsonp;
        this.config = config;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.times = 0;
        // console.log('Hello HttpServicesProvider Provider');
    }
    //请求数据
    // apiUrl :   api/focus
    // apiUrl :   api/plist?page=1
    HttpServicesProvider.prototype.requestJsonpData = function (apiUrl, callback) {
        // let params = new URLSearchParams();    
        // params.set("callback", "__ng_jsonp__.__"+ this.times +".finished"); 
        if (apiUrl.indexOf('?') == -1) {
            this.api = this.config.apiUrl + apiUrl + '?callback=__ng_jsonp__.__req' + this.times + '.finished';
        }
        else {
            this.api = this.config.apiUrl + apiUrl + '&callback=__ng_jsonp__.__req' + this.times + '.finished';
        }
        this.times++;
        this.jsonp.get(this.api).subscribe(function (data) {
            // console.log(data);
            callback && callback(data); /*回调函数*/
        }, function (err) {
            // console.log(err);
            callback(err);
        });
    };
    HttpServicesProvider.prototype.requestGetData = function (apiUrl, callback) {
        this.api = this.config.apiUrl + apiUrl;
        this.http.get(this.api).subscribe(function (data) {
            // console.log(data);
            callback && callback(data); /*回调函数*/
        }, function (err) {
            console.log(err);
            callback(err);
        });
    };
    HttpServicesProvider.prototype.requestPostData = function (apiUrl, info, callback) {
        this.api = this.config.apiUrl;
        this.http.post(this.api + apiUrl, 
        // JSON.stringify({"username":'zhangsan',"age":'20'}),
        info, { headers: this.headers }).subscribe(function (data) {
            // console.log(data);
            callback && callback(data); /*回调函数*/
        }, function (err) {
            // console.log(err);
            callback(err);
        });
    };
    HttpServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */], __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* ConfigProvider */]])
    ], HttpServicesProvider);
    return HttpServicesProvider;
}());

//# sourceMappingURL=http-services.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient } from '@angular/common/http';


var UtilProvider = /** @class */ (function () {
    function UtilProvider(alertCtrl, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    // 确认提示弹窗
    UtilProvider.prototype.showConfirm = function (ctx, callback) {
        var confirm = this.alertCtrl.create({
            title: '温馨提示',
            message: ctx,
            buttons: [
                {
                    text: '取消',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: '退出',
                    handler: function () {
                        callback && callback();
                    }
                }
            ]
        });
        confirm.present();
    };
    // 信息弹窗
    UtilProvider.prototype.showAlert = function (ctx, title) {
        var alert = this.alertCtrl.create({
            title: title ? title : '温馨提示',
            subTitle: ctx ? ctx : '获取信息失败，请重新获取',
            buttons: ['知道了']
        });
        alert.present();
    };
    // 显示loading
    UtilProvider.prototype.showLoading = function (txt) {
        this.loader = this.loadingCtrl.create({
            content: txt,
            duration: 5000
        });
        this.loader.present();
    };
    //关闭loading
    UtilProvider.prototype.dismiss = function (time) {
        var _this = this;
        setTimeout(function () {
            _this.loader.dismiss();
        }, time);
    };
    UtilProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], UtilProvider);
    return UtilProvider;
}());

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorageProvider = /** @class */ (function () {
    function StorageProvider() {
        // console.log('Hello StorageProvider Provider');
    }
    //localStorage
    StorageProvider.prototype.set = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value)); /*对象转换成字符串*/
    };
    StorageProvider.prototype.get = function (key) {
        return JSON.parse(localStorage.getItem(key)); /*字符串转换成对象*/
    };
    StorageProvider.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ })

},[225]);
//# sourceMappingURL=main.js.map