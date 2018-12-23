webpackJsonp([3],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishListPageModule", function() { return WishListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wish_list__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WishListPageModule = /** @class */ (function () {
    function WishListPageModule() {
    }
    WishListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wish_list__["a" /* WishListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wish_list__["a" /* WishListPage */]),
            ],
        })
    ], WishListPageModule);
    return WishListPageModule;
}());

//# sourceMappingURL=wish-list.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sound_sound__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_wish_wish__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_media__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WishListPage = /** @class */ (function () {
    function WishListPage(platform, media, navCtrl, soundProvider, wishProvider) {
        this.platform = platform;
        this.media = media;
        this.navCtrl = navCtrl;
        this.soundProvider = soundProvider;
        this.wishProvider = wishProvider;
    }
    WishListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.wishProvider.getWishList().orderByChild('name').on("value", function (wishListSnapshot) {
            _this.wishList = [];
            wishListSnapshot.forEach(function (snap) {
                _this.wishList.push({
                    id: snap.key,
                    name: snap.val().name,
                    img: snap.val().img,
                    sound: snap.val().sound,
                });
                return false;
            });
        });
    };
    WishListPage.prototype.listenSound = function (soundSound) {
        var _this = this;
        this.platform.ready().then(function () {
            var file = _this.media.create('../../assets/sounds/' + soundSound);
            file.play();
            console.log(file);
        });
    };
    WishListPage.prototype.deleteWish = function (wishId) {
        this.wishProvider
            .deleteWish(wishId);
    };
    WishListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wish-list',template:/*ion-inline-start:"C:\Users\Quentin\Desktop\LPDEV\Application Mobile\test\src\pages\wish-list\wish-list.html"*/'<!--\n  Generated template for the SoundListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="ducksound">\n    <ion-title>DuckSound</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  \n  <h1>Mes favoris</h1>\n\n  <ion-list>\n    <ion-item *ngFor="let wish of wishList">\n      <img class="start" src="../../assets/imgs/sounds/{{wish?.img}}" alt="logo">\n      {{wish?.name}}\n      <ion-icon name="play" color="ducksound" (click)="listenSound(wish?.sound)" item-end></ion-icon>\n      <ion-icon name="trash" (click)="deleteWish(wish?.id)" item-end></ion-icon>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Quentin\Desktop\LPDEV\Application Mobile\test\src\pages\wish-list\wish-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_media__["a" /* Media */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_sound_sound__["a" /* SoundProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_wish_wish__["a" /* WishProvider */]])
    ], WishListPage);
    return WishListPage;
}());

//# sourceMappingURL=wish-list.js.map

/***/ })

});
//# sourceMappingURL=3.js.map