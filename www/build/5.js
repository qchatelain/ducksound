webpackJsonp([5],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundListPageModule", function() { return SoundListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sound_list__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SoundListPageModule = /** @class */ (function () {
    function SoundListPageModule() {
    }
    SoundListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sound_list__["a" /* SoundListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sound_list__["a" /* SoundListPage */]),
            ],
        })
    ], SoundListPageModule);
    return SoundListPageModule;
}());

//# sourceMappingURL=sound-list.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoundListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_media__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sound_sound__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_wish_wish__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_smart_audio_smart_audio__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SoundListPage = /** @class */ (function () {
    function SoundListPage(media, platform, navCtrl, alertCtrl, soundProvider, wishProvider, smartAudio) {
        this.media = media;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.soundProvider = soundProvider;
        this.wishProvider = wishProvider;
        this.smartAudio = smartAudio;
    }
    SoundListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.soundProvider.getSoundList().orderByChild('name').on("value", function (soundListSnapshot) {
            _this.soundList = [];
            soundListSnapshot.forEach(function (snap) {
                _this.soundList.push({
                    id: snap.key,
                    name: snap.val().name,
                    img: snap.val().img,
                    sound: snap.val().sound,
                });
                return false;
            });
        });
    };
    SoundListPage.prototype.createWish = function (wishName, wishImg, wishSound) {
        var alert = this.alertCtrl.create({
            message: "Son ajouté",
            buttons: [
                { text: "Ok" }
            ]
        });
        this.wishProvider
            .createWish(wishName, wishImg, wishSound)
            .then(function (newWish) {
            alert.present();
        });
    };
    SoundListPage.prototype.listenSound = function (soundSound) {
        var _this = this;
        this.platform.ready().then(function () {
            var file = _this.media.create('../../assets/sounds/' + soundSound);
            file.play();
            console.log(file);
        });
    };
    SoundListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sound-list',template:/*ion-inline-start:"C:\Users\Quentin\Desktop\LPDEV\Application Mobile\test\src\pages\sound-list\sound-list.html"*/'<!--\n  Generated template for the SoundListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="ducksound">\n		<ion-title>DuckSound</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  \n  <h1>Nos sons</h1>\n\n  <ion-list>\n    <ion-item *ngFor="let sound of soundList">\n      <img class="start" src="../../assets/imgs/sounds/{{sound?.img}}" alt="{{sound?.name}}">\n      {{sound?.name}}\n      <ion-icon name="play" color="ducksound" (click)="listenSound(sound?.sound)" item-end></ion-icon>\n      <ion-icon name="heart-outline" color="danger" (click)="createWish(sound?.name, sound?.img, sound?.sound)" item-end></ion-icon>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Quentin\Desktop\LPDEV\Application Mobile\test\src\pages\sound-list\sound-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sound_sound__["a" /* SoundProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_wish_wish__["a" /* WishProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_smart_audio_smart_audio__["a" /* SmartAudio */]])
    ], SoundListPage);
    return SoundListPage;
}());

//# sourceMappingURL=sound-list.js.map

/***/ })

});
//# sourceMappingURL=5.js.map