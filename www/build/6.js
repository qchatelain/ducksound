webpackJsonp([6],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = /** @class */ (function () {
    function ProfilePage(app, navCtrl, alertCtrl, authProvider, profileProvider) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
        this.profileProvider = profileProvider;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.profileProvider.getUserProfile().on("value", function (userProfileSnapshot) {
            _this.userProfile = userProfileSnapshot.val();
        });
    };
    ProfilePage.prototype.logOut = function () {
        var _this = this;
        this.authProvider.logoutUser().then(function () {
            _this.app.getRootNav().setRoot("LoginPage");
        });
    };
    ProfilePage.prototype.updateName = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "Votre pseudo",
            inputs: [
                {
                    name: "userName",
                    placeholder: "Votre pseudo",
                    value: this.userProfile.userName
                }
            ],
            buttons: [
                { text: "Annuler" },
                {
                    text: "Enregistrer",
                    handler: function (data) {
                        _this.profileProvider.updateName(data.userName);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.updateEmail = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            inputs: [{ name: 'newEmail', placeholder: 'Votre nouvel email' },
                { name: 'password', placeholder: 'Votre mot de passe', type: 'password' }],
            buttons: [
                { text: 'Annuler' },
                { text: 'Enregistrer',
                    handler: function (data) {
                        _this.profileProvider
                            .updateEmail(data.newEmail, data.password);
                    } }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.updatePassword = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            inputs: [
                { name: 'newPassword', placeholder: 'Votre nouveau mot de passe', type: 'password' },
                { name: 'oldPassword', placeholder: 'Votre ancien mot de passe', type: 'password' }
            ],
            buttons: [
                { text: 'Annuler' },
                { text: 'Enregistrer',
                    handler: function (data) {
                        _this.profileProvider.updatePassword(data.newPassword, data.oldPassword);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.deleteUser = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            inputs: [
                { name: 'password', placeholder: 'Votre mot de passe', type: 'password' }
            ],
            buttons: [
                { text: 'Annuler' },
                { text: 'Supprimer',
                    handler: function (data) {
                        _this.profileProvider.deleteUser(data.password);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-profile",template:/*ion-inline-start:"C:\Users\Quentin\Desktop\LPDEV\Application Mobile\test\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="ducksound">\n    <ion-title>Ducksound</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <h1>Mon profil</h1>\n  <ion-item class="first">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-3><h2>Pseudo :</h2></ion-col>\n        <ion-col col-9 *ngIf="userProfile?.userName">\n          {{userProfile?.userName}}\n        </ion-col>\n        <ion-col col-6 class="placeholder-profile" \n        *ngIf="!userProfile?.userName">\n        </ion-col>\n      </ion-row>\n      <button class="profil" ion-button full round type="button" name="button" (click)="updateName()">MODIFIER</button>\n    </ion-grid>\n  </ion-item>\n  <ion-item class="second">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-5><h2>Adresse mail :</h2></ion-col>\n        <ion-col col-7 *ngIf="userProfile?.email">\n          {{userProfile?.email}}\n        </ion-col>\n        <ion-col col-6 class="placeholder-profile" \n        *ngIf="!userProfile?.email">\n        </ion-col>\n      </ion-row>\n      <button class="profil" ion-button full round type="button" name="button" (click)="updateEmail()">MODIFIER</button>\n    </ion-grid>\n  </ion-item>\n  <ion-item class="second">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12>Mot de passe :</ion-col>\n      </ion-row>\n      <button class="profil" ion-button full round type="button" name="button" (click)="updatePassword()">MODIFIER</button>\n    </ion-grid>\n  </ion-item>\n  <ion-grid> \n    <button class="delete" ion-button full round type="button" name="button" (click)="deleteUser()">SUPPRIMER MON COMPTE</button>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\Quentin\Desktop\LPDEV\Application Mobile\test\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */]) === "function" && _e || Object])
    ], ProfilePage);
    return ProfilePage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=6.js.map