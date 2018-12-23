webpackJsonp([7],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySoundPageModule", function() { return MySoundPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_sound__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MySoundPageModule = /** @class */ (function () {
    function MySoundPageModule() {
    }
    MySoundPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_sound__["a" /* MySoundPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_sound__["a" /* MySoundPage */]),
            ],
        })
    ], MySoundPageModule);
    return MySoundPageModule;
}());

//# sourceMappingURL=my-sound.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MySoundPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_my_my__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_media__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_modal__ = __webpack_require__(208);
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
 * Generated class for the MySoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MySoundPage = /** @class */ (function () {
    function MySoundPage(platform, media, myProvider, navCtrl, navParams, modalCtrl) {
        this.platform = platform;
        this.media = media;
        this.myProvider = myProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    MySoundPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.myProvider.getSoundList().orderByChild('name').on("value", function (soundListSnapshot) {
            _this.soundList = [];
            soundListSnapshot.forEach(function (snap) {
                _this.soundList.push({
                    id: snap.key,
                    name: snap.val().name,
                    sound: snap.val().sound,
                });
                return false;
            });
        });
    };
    MySoundPage.prototype.listenSound = function (soundSound) {
        var _this = this;
        this.platform.ready().then(function () {
            var file = _this.media.create('../../assets/my-sounds/' + soundSound);
            file.play();
            console.log(file);
        });
    };
    MySoundPage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modal_modal__["a" /* MaPageModal */]);
        modal.present();
    };
    MySoundPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-sound',template:/*ion-inline-start:"C:\Users\Quentin\Desktop\LPDEV\Application Mobile\test\src\pages\my-sound\my-sound.html"*/'<!--\n  Generated template for the MySoundPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="ducksound">\n		<ion-title>DuckSound</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <h1 text-center>Mes sons</h1>\n\n  <ion-fab edge>\n    <button color="ducksound" ion-fab mini (click)="presentModal()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n\n  <ion-list>\n    <ion-item *ngFor="let sound of soundList">\n      {{sound?.name}}\n      <ion-icon name="play" color="ducksound" (click)="listenSound(sound?.sound)" item-end></ion-icon>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Quentin\Desktop\LPDEV\Application Mobile\test\src\pages\my-sound\my-sound.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_media__["a" /* Media */], __WEBPACK_IMPORTED_MODULE_2__providers_my_my__["a" /* MyProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], MySoundPage);
    return MySoundPage;
}());

//# sourceMappingURL=my-sound.js.map

/***/ })

});
//# sourceMappingURL=7.js.map