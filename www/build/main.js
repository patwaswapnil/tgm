webpackJsonp([0],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categories_categories__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__request_request__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bookmark_bookmark__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = (function () {
    function TabsPage(events) {
        this.events = events;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__categories_categories__["a" /* CategoriesPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__request_request__["a" /* RequestPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_6__bookmark_bookmark__["a" /* BookmarkPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile__["b" /* UserProfilePage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.events.publish('root:created', Date.now());
        this.events.subscribe('app:intro', function (data) {
            _this.appIntroImg = data;
        });
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/tabs/tabs.html"*/'<ion-tabs selectedIndex="2">\n    <ion-tab [root]="tab1Root" tabIcon="list"></ion-tab>\n    <ion-tab [root]="tab2Root" tabIcon="add-circle"></ion-tab>\n    <ion-tab [root]="tab3Root" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab4Root" tabIcon="bookmark"></ion-tab>\n    <ion-tab [root]="tab5Root" tabIcon="person"></ion-tab>\n</ion-tabs> \n<div class="app-intro" *ngIf="appIntroImg" (click)="appIntroImg = false">\n    <img [src]="appIntroImg">\n    <button ion-button color="primary" class="intro-button ">\n        OK, Got it! \n    </button>\n</div> '/*ion-inline-end:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_provider__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_provider__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AuthPage = (function () {
    function AuthPage(_geolocation, platform, oneSignal, globalProvider, api, shared, navCtrl, navParams, googlePlus, fb) {
        var _this = this;
        this._geolocation = _geolocation;
        this.platform = platform;
        this.oneSignal = oneSignal;
        this.globalProvider = globalProvider;
        this.api = api;
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.googlePlus = googlePlus;
        this.fb = fb;
        if (platform.is('cordova')) {
            this.oneSignal.getIds().then(function (ids) {
                if (typeof (ids['userId']) !== 'undefined') {
                    console.log(JSON.stringify(ids['userId']));
                    _this.globalProvider.setPlayerId(ids['userId']);
                }
            });
        }
    }
    AuthPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._geolocation.getCurrentPosition().then(function (resp) {
            _this.api.getGeoAddress(resp.coords).subscribe(function (response) {
                console.log(response.results);
                if (response.results[1]) {
                    for (var i = 0; i < response.results[0].address_components.length; i++) {
                        for (var b = 0; b < response.results[0].address_components[i].types.length; b++) {
                            if (response.results[0].address_components[i].types[b] == "administrative_area_level_2") {
                                console.log(response.results[0].address_components[i]);
                                _this.globalProvider.setLocation(response.results[0].address_components[i].long_name);
                                _this._location = response.results[0].address_components[i].long_name;
                                _this.shared.LS.set('location', _this._location);
                                break;
                            }
                        }
                    }
                }
            }, function (err) {
                console.log(err);
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    AuthPage.prototype.googleLogin = function () {
        var _this = this;
        this.googlePlus.login({})
            .then(function (res) {
            _this.shared.Loader.show(null, false);
            var data = { fname: res.givenName, lname: res.familyName, email: res.email, userId: res.userId, source: 3 };
            _this.api.socialLogin(data).subscribe(function (res) {
                _this.shared.LS.set('user', res);
                _this.shared.LS.set('isMuted', false);
                _this.globalProvider.setAuthData(res);
                _this.googlePlus.logout();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]);
                _this.shared.Loader.closeIfActive();
            }, function (err) {
                _this.shared.Toast.show(err);
                _this.shared.Loader.closeIfActive();
            });
        })
            .catch(function (err) {
            console.error(err);
            _this.shared.Loader.closeIfActive();
        });
    };
    AuthPage.prototype.skip = function () {
        var user = { "ID": "15", "user_login": "theindianhippie", "user_nicename": "5u5hil-2", "user_email": "sushil@infiniteit.biz", "user_url": "", "user_registered": "2017-04-15 08:32:41", "user_activation_key": "", "user_status": "0", "display_name": "Sushil Sudhakaran", "first_name": "Sushil", "last_name": "Sudhakaran", "source": "", "img": "http:\/\/tgm-inf.cruxservers.in\/wp-content\/themes\/tgm\/images\/user.png", "follower_count": 1, "following_count": 2 };
        this.shared.LS.set('user', user);
        this.shared.LS.set('isMuted', false);
        this.globalProvider.setAuthData(user);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]);
    };
    AuthPage.prototype.fbLogin = function () {
        var _this = this;
        this.fb.login(['public_profile', 'email', 'user_location'])
            .then(function (res) {
            _this.shared.Loader.show(null, false);
            _this.api.getFbUserInfo(res.authResponse.accessToken).subscribe(function (response) {
                var data = { fname: response.first_name, lname: response.last_name, email: response.email, userId: res.authResponse.userID, source: 2 };
                _this.api.socialLogin(data).subscribe(function (res) {
                    _this.shared.LS.set('user', res);
                    _this.shared.LS.set('isMuted', false);
                    _this.globalProvider.setAuthData(res);
                    _this.fb.logout();
                    _this.shared.Loader.closeIfActive();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]);
                }, function (err) {
                    _this.shared.Toast.show(err);
                    _this.shared.Loader.closeIfActive();
                });
            });
        }, function (err) {
            _this.shared.Toast.show(err);
        })
            .catch(function (e) {
            console.log('Error logging into Facebook', e);
            _this.shared.Loader.closeIfActive();
        });
    };
    return AuthPage;
}());
AuthPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-auth',template:/*ion-inline-start:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/auth/auth.html"*/'<ion-content class="auth-bg">\n    <div padding class="btn-wrapper">\n        <img src="assets/img/logo.png" alt="" class="logo">\n        <div *ngIf="!platform.is(\'cordova\')">\n            <button ion-button full class="login-btn skip-login" (click)="skip()"> \n        Skip (Developement only);\n      </button>\n      <br><br>\n        </div>\n        <div>\n            <button ion-button full class="login-btn google-login" (click)="googleLogin()"> \n        Login with Google\n      </button>\n        </div>\n        <div>\n            <button ion-button full class="login-btn fb-login mt12" (click)="fbLogin()"> \n        Login with Facebook\n      </button>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/auth/auth.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__providers_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_api_provider__["a" /* MongerApi */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_6__providers_config__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_api_provider__["a" /* MongerApi */], __WEBPACK_IMPORTED_MODULE_4__providers_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */]])
], AuthPage);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GossipsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_provider__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_provider__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GossipsPage = (function () {
    function GossipsPage(viewCtrl, api, navParams, shared) {
        this.viewCtrl = viewCtrl;
        this.api = api;
        this.navParams = navParams;
        this.shared = shared;
        this._isPageLoaded = 0;
        this.category = this.navParams.get('data');
    }
    GossipsPage.prototype.ionViewDidLoad = function () {
        this.getGossips(true);
    };
    GossipsPage.prototype.ionViewDidEnter = function () {
        if (this._isPageLoaded > 0) {
            this.getGossips();
        }
        this._isPageLoaded = this._isPageLoaded + Number(1);
    };
    GossipsPage.prototype.getGossips = function (loader) {
        var _this = this;
        if (loader) {
            this.shared.Loader.show();
        }
        this.api.getMyGossipsByCategory(this.category.term_id).subscribe(function (data) {
            _this.gossips = data;
            if (loader) {
                _this.shared.Loader.hide();
            }
        }, function (err) {
            if (loader) {
                _this.shared.Loader.hide();
            }
            console.error(err);
        });
    };
    GossipsPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    return GossipsPage;
}());
GossipsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-gossips',template:/*ion-inline-start:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/gossips/gossips.html"*/'<ion-header> \n    <ion-toolbar color="primary">\n        <button ion-button icon-only menuToggle="false" left color="white" (click)="dismiss()">\n      <ion-icon name="arrow-back"></ion-icon> \n        </button>\n        <ion-title>\n           Gossips ({{category.name}})\n        </ion-title> \n    </ion-toolbar> \n</ion-header> \n<ion-content>\n    <gossip-card [gossips]="gossips" (dataUpdated)="getGossips()"></gossip-card>\n</ion-content>'/*ion-inline-end:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/gossips/gossips.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_api_provider__["a" /* MongerApi */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_api_provider__["a" /* MongerApi */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_shared_provider__["a" /* SharedProvider */]])
], GossipsPage);

//# sourceMappingURL=gossips.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_entity_profile_entity_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_provider__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_search_search__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_provider__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RequestPage = (function () {
    function RequestPage(actionSheetCtrl, sanitizer, globalProvider, modal, navCtrl, navParams, alertCtrl, api, shared, viewCtrl, _ngZone) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.sanitizer = sanitizer;
        this.globalProvider = globalProvider;
        this.modal = modal;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.shared = shared;
        this.viewCtrl = viewCtrl;
        this._ngZone = _ngZone;
        this.icon = 'assets/img/loved.png';
        this.addGossip = { posted_as: this.globalProvider.userId, image: null };
        this.user = this.globalProvider.user;
        this.segment = 'entity';
        this.selectedEntity = { category: [{ name: null }] };
        this.showNotFound = false;
        this.isCategorySelected = false;
        this.entityDetail = { owner: 'no', image: null };
        this.submitted = false;
        this.isModal = false;
        if (this.navParams.get('type')) {
            this.isModal = true;
        }
    }
    RequestPage.prototype.chooseImage = function (source) {
        var _this = this;
        this.shared.uploadMedia.image(source)
            .then(function (imageData) {
            if (_this.segment == 'gossip') {
                _this.addGossip.image = 'data:image/png;base64,' + imageData;
            }
            else {
                _this.entityDetail.image = 'data:image/png;base64,' + imageData;
            }
        }, function (err) {
        });
    };
    RequestPage.prototype.ionViewDidLoad = function () {
        this.getCategories();
        this.getMyEntity();
    };
    RequestPage.prototype.selectImage = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Capture image with',
            buttons: [
                {
                    text: 'Camera',
                    icon: 'camera',
                    handler: function () {
                        _this.chooseImage(1);
                    }
                },
                {
                    text: 'Gallery',
                    icon: 'images',
                    handler: function () {
                        _this.chooseImage(2);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    RequestPage.prototype.getMyEntity = function () {
        var _this = this;
        this.api.getMyEntity(this.globalProvider.userId, true).subscribe(function (data) {
            _this.myEntities = data;
        }, function (err) {
            console.error(err);
        });
    };
    RequestPage.prototype.searchEntity = function () {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_6__pages_search_search__["a" /* SearchPage */], { source: 'gossip' });
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.id = data.id;
                _this.addGossip.id = data.id;
                _this.selectedEntity = data;
            }
            else {
            }
        });
        modal.present();
    };
    RequestPage.prototype.reset = function () {
        this.isCategorySelected = false;
        this.entityDetail = { owner: 'no', image: null };
    };
    RequestPage.prototype.ionViewDidEnter = function () {
        this.reset();
        this.getMyEntity();
    };
    RequestPage.prototype.entityProfile = function (id, type) {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__pages_entity_profile_entity_profile__["a" /* EntityProfilePage */], { id: id, type: type });
        modal.present();
    };
    RequestPage.prototype.getEntityBackground = function (image) {
        if (!image) {
            return this.sanitizer.bypassSecurityTrustStyle("linear-gradient( rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5))");
        }
        return this.sanitizer.bypassSecurityTrustStyle("linear-gradient( rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(" + image.url + ")");
    };
    RequestPage.prototype.categorySelect = function (data) {
        var _this = this;
        this.isCategorySelected = true;
        this.entityDetail.category = data.term_id;
        this.selectedCat = data.name;
        if (this.navParams.get('name')) {
            this._ngZone.run(function () {
                _this.entityDetail.entity = _this.navParams.get('name');
            });
        }
    };
    RequestPage.prototype.getCategories = function () {
        var _this = this;
        this.api.getCategories().subscribe(function (data) {
            _this.categories = data;
        }, function (err) {
            console.error(err);
        });
    };
    RequestPage.prototype.addEntity = function (form) {
        var _this = this;
        if (form.valid) {
            this.shared.Loader.show('Adding Entity..');
            this.api.addEntity(this.entityDetail).subscribe(function (response) {
                if (response) {
                    _this.shared.Loader.hide();
                    _this.shared.Toast.show('Entity added successfully');
                    _this.entityDetail = { owner: 'no', image: null };
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_entity_profile_entity_profile__["a" /* EntityProfilePage */], { id: response });
                }
            }, function (err) {
                _this.shared.Loader.hide();
                _this.shared.Toast.show('Error: ' + err);
            });
        }
        else {
            this.shared.Toast.show('Please fill all mandatory fields.');
        }
        return false;
    };
    RequestPage.prototype.insertGossip = function (gossip) {
        var _this = this;
        if (gossip.posted_as != 'anonymous') {
            gossip.isAnonymous = 0;
        }
        else {
            gossip.isAnonymous = 1;
            gossip.posted_as = null;
        }
        gossip.image = this.addGossip.image;
        gossip.type = gossip.feedbackType;
        this.shared.Loader.show();
        this.api.insertGossip(gossip).subscribe(function (data) {
            _this.shared.Toast.show('Gossip created successfully');
            _this.addGossip = { posted_as: _this.globalProvider.userId };
            _this.selectedEntity = { category: [{ name: null }] };
            var modal = _this.modal.create(__WEBPACK_IMPORTED_MODULE_4__pages_entity_profile_entity_profile__["a" /* EntityProfilePage */], { id: gossip.id, type: gossip.feedbackType });
            modal.present();
            _this.shared.Loader.hide();
        }, function (err) {
            _this.shared.Loader.hide();
            console.error(err);
        });
    };
    RequestPage.prototype.removeImage = function () {
        this.addGossip.image = '';
        this.entityDetail.image = '';
    };
    RequestPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return RequestPage;
}());
RequestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-request',template:/*ion-inline-start:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/request/request.html"*/'<ion-header>\n    <ion-toolbar color="primary" *ngIf="!isModal">\n        <ion-segment [(ngModel)]="segment" color="whitec" (ionChange)="reset()">\n            <ion-segment-button value="gossip">\n                Add Gossip\n            </ion-segment-button>\n            <ion-segment-button value="entity">\n                Add Entity\n            </ion-segment-button>\n\n        </ion-segment>\n    </ion-toolbar>\n    <ion-toolbar color="primary" *ngIf="isModal">\n        <button ion-button icon-only menuToggle="false" left color="white" (click)="dismiss()">\n      <ion-icon name="arrow-back"></ion-icon> \n        </button>\n        <ion-title>\n            Add Entity\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n\n    <!--<entity-card *ngIf="segment == \'entity\'" (dataUpdated)="getMyEntity()" [entities]="myEntity"></entity-card>-->\n\n    <div *ngIf="segment == \'entity\'" class="entity">\n        <div class="category select-category" *ngIf="!isCategorySelected">\n            <ion-card-header color="primary">\n                Select category of entity (1/2)\n            </ion-card-header>\n            <ion-row>\n                <ion-col col-6 col-md-4 *ngFor="let category of categories">\n                    <ion-card class="m0" (click)="categorySelect(category)">\n                        <div class="category-content" [style.background-image]="getEntityBackground(category.attachment)">\n                            <div class="card-title">{{category.name}}</div>\n                        </div>\n                    </ion-card>\n                </ion-col>\n\n            </ion-row>\n        </div>\n        <div class="" *ngIf="isCategorySelected">\n\n            <div class="entity-fields">\n                <div class="profile-wrapper">\n                    <div class="profile-data">\n                        <h1 color="whitec" ion-text>{{entityDetail.entity || \'Name Here\'}}</h1>\n                        <h4 color="whitec" ion-text class="mt0">{{entityDetail.subtitle || \'Tagline Here\'}} ({{selectedCat}})</h4>\n                    </div>\n                    <img src="{{entityDetail.image || \'assets/img/image.png\'}}" (click)="selectImage()" class="profile-img" alt="">\n                </div>\n            </div>\n            <form #entityDetailForm="ngForm" (ngSubmit)="addEntity(entityDetailForm)" action="#" novalidate>\n                <ion-card class="card-items ion-card-full">\n                    <ion-card-header color="primary">\n                        Information about entity (2/2)\n                    </ion-card-header>\n                    <ion-card-content>\n                        <ion-list>\n                            <ion-item class="pl8">\n                                <ion-label stacked>Name*</ion-label>\n                                <ion-input type="text" [(ngModel)]="entityDetail.entity" name="firstname" #firstName="ngModel" required></ion-input>\n                            </ion-item>\n                            <p [hidden]="firstName.valid || submitted == false" ion-text color="danger" class="validationErr" padding-left>\n                                Name is required\n                            </p>\n                            <ion-item class="pl8">\n                                <ion-label stacked>Tagline*</ion-label>\n                                <ion-input type="text" [(ngModel)]="entityDetail.subtitle" name="lastname" #lastName="ngModel" required></ion-input>\n                            </ion-item>\n                            <p [hidden]="lastName.valid || submitted == false" ion-text color="danger" class="validationErr" padding-left>\n                                Tagline is required\n                            </p>\n                            <!--<div class="pl8">\n                            <ion-label class="color-gray" stacked>Entity Picture*</ion-label>\n                         <input type="file" accept="image/*" (change)="changeListener($event)" name="image" required id="fileInput" class="mt10"> \n                             \n                        </div>-->\n                            <ion-item class="pl8">\n                                <ion-label stacked>Contact Number</ion-label>\n                                <ion-input type="number" [(ngModel)]="entityDetail.contact_number" name="contact" #contact="ngModel"></ion-input>\n                            </ion-item>\n                            <ion-item class="pl8">\n                                <ion-label stacked>Own this entity?</ion-label>\n                                <ion-select class="w40" interface="popover" name="owner" #owner="ngModel" [(ngModel)]="entityDetail.owner">\n                                    <ion-option value="yes">Yes</ion-option>\n                                    <ion-option value="no">No</ion-option>\n                                </ion-select>\n                            </ion-item>\n                            <ion-item class="pl8">\n                                <button class="h35" type="button" (click)="selectImage()" ion-button block outline icon-left>\n  <ion-icon name="attach"></ion-icon>\n {{ entityDetail.image ? \'Change\' : \'Attach\'}}  image\n</button>\n                            </ion-item>\n                        </ion-list>\n                        <div class="submit-btn">\n                            <br>\n                            <button ion-button color="primary" type="submit" block>Submit Request</button>\n                        </div>\n\n                    </ion-card-content>\n                </ion-card>\n\n            </form>\n        </div>\n    </div>\n    <div class="add-gossip" *ngIf="segment == \'gossip\'" class="gossip">\n        <form #gossipForm="ngForm" novalidate>\n            <ion-card class="card-items ion-card-full">\n                <!--<ion-card-header color="primary">\n                    Gossip Information\n                </ion-card-header>-->\n                <ion-card-content>\n                    <ion-list>\n                        <ion-searchbar (click)="searchEntity()" placeholder="Search Entities"></ion-searchbar>\n\n                        <ion-item *ngIf="selectedEntity.id" style="margin-left: -6px">\n                            <ion-avatar item-left>\n                                <img [src]="selectedEntity.img">\n                            </ion-avatar>\n                            <h2>{{selectedEntity.title}}</h2>\n                            <p>{{selectedEntity.category[0].name}}</p>\n                        </ion-item>\n\n                        <ion-item style="margin-left: -17px">\n                            <ion-grid>\n                                <ion-row class="emo-img">\n                                    <ion-col text-center>\n                                        <input type="radio" id="pos" [(ngModel)]="addGossip.feedbackType" name="type" value="0">\n                                        <label for="pos"> <img src="assets/img/loved.png"   alt=""> <div class="type-text">Positive Gossip</div></label>\n                                    </ion-col>\n                                    <ion-col text-center>\n                                        <input type="radio" id="neg" [(ngModel)]="addGossip.feedbackType" name="type" value="1">\n                                        <label for="neg">\n                    <img src="assets/img/hated.png"  alt=""> <div class="type-text">Negative Gossip</div>\n                    </label>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-item>\n\n\n                        <ion-item class="pl8">\n                            <ion-label stacked>Gossip as</ion-label>\n                            <ion-select class="w40" interface="popover" name="poastedAs" #poastedAs="ngModel" [(ngModel)]="addGossip.posted_as">\n                                <ion-option value="anonymous">Anonymous</ion-option>\n                                <ion-option [value]="user.ID">{{user.display_name}}</ion-option>\n                                <ion-option [value]="item.id" *ngFor="let item of myEntities">{{item.title}}</ion-option>\n                            </ion-select>\n                        </ion-item>\n                        <ion-item class="pl8">\n                            <!--<ion-label stacked>Description*</ion-label>-->\n                            <textarea class="text-area" rows="6" placeholder="Gossip Content" cols="" [(ngModel)]="addGossip.gossip" name="gossip" #gossip="ngModel"\n                                required></textarea>\n                            <!--<ion-input type="text" [(ngModel)]="addGossip.gossip" name="gossip" #gossip="ngModel" required></ion-input>-->\n                        </ion-item>\n                        <ion-item class="pl8 img-preview" *ngIf="addGossip.image">\n                            <div>\n                                <img [src]="addGossip.image" alt="attachment">\n                                <button class="action-btn" (click)="removeImage()" ion-button icon-left clear small>\n                                        <ion-icon name="md-close"></ion-icon> \n                                    </button>\n                            </div>\n                        </ion-item>\n                        <ion-item class="pl8">\n                            <button class="h35" (click)="selectImage()" ion-button block outline icon-left>\n  <ion-icon name="attach"></ion-icon>\n {{ addGossip.image ? \'Change\' : \'Attach\'}}  image\n</button>\n                        </ion-item>\n                    </ion-list>\n                    <div class="submit-btn">\n                        <br>\n                        <button [disabled]="!(addGossip.feedbackType && addGossip.gossip && addGossip.id)" ion-button (click)="insertGossip(addGossip)"\n                            color="primary" type="submit" block>Post</button>\n                    </div>\n\n                </ion-card-content>\n            </ion-card>\n\n        </form>\n    </div>\n    <!--<ion-fab bottom right *ngIf="segment == \'entity\'">\n        <button ion-fab color="primary" (click)="addEntity()">\n      <ion-icon name="add"></ion-icon>\n   </button>\n    </ion-fab>-->\n</ion-content>'/*ion-inline-end:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/request/request.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__providers_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_api_provider__["a" /* MongerApi */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_2__providers_config__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__providers_api_provider__["a" /* MongerApi */], __WEBPACK_IMPORTED_MODULE_5__providers_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
], RequestPage);

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 194:
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
webpackEmptyAsyncContext.id = 194;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_photo_viewer__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var SharedProvider = (function () {
    function SharedProvider(platform, _ionicApp, camera, _loadingCtrl, _toastCtrl, _storage, _alert, _socialSharing, _photoViewer, event) {
        var _this = this;
        this.platform = platform;
        this._ionicApp = _ionicApp;
        this.camera = camera;
        this._loadingCtrl = _loadingCtrl;
        this._toastCtrl = _toastCtrl;
        this._storage = _storage;
        this._alert = _alert;
        this._socialSharing = _socialSharing;
        this._photoViewer = _photoViewer;
        this.event = event;
        //Loader Start 
        this.Loader = {
            show: function (template, showBackdrop) {
                _this._loading = _this._loadingCtrl.create({
                    content: template || 'Please wait...',
                    dismissOnPageChange: true,
                    duration: 3500,
                    showBackdrop: showBackdrop || true
                });
                _this._loading.present();
            },
            hide: function () {
                _this._loading.dismiss();
                _this._loading = null;
            },
            prompt: function (template, timer) {
                _this.Loader.show(template);
                setTimeout(function () {
                    _this.Loader.hide();
                }, timer || 3000);
            },
            closeIfActive: function () {
                var activePortal = _this._ionicApp._loadingPortal.getActive();
                if (activePortal) {
                    activePortal.dismiss();
                    _this._loading = null;
                    return;
                }
            }
        };
        this.Toast = {
            show: function (text, duration, position, closeButton, btnText) {
                _this._toastMsg = _this._toastCtrl.create({
                    message: text,
                    duration: duration || closeButton ? null : 3000,
                    position: position || 'top',
                    showCloseButton: closeButton || false,
                    closeButtonText: btnText || 'OK'
                });
                _this._toastMsg.present();
            },
            hide: function () {
                this._toastMsg.dismiss();
            }
        };
        this.LS = {
            get: function (key) {
                return _this._storage.get(key);
            },
            set: function (key, value) {
                return _this._storage.set(key, JSON.stringify(value));
            },
            remove: function (key) {
                return _this._storage.remove(key);
            }
        };
        this.Alert = {
            confirm: function (msg, title) {
                return new Promise(function (resolve, reject) {
                    var alert = _this._alert.create({
                        title: title || 'Confirm',
                        message: msg || 'Do you want continue?',
                        buttons: [
                            {
                                text: 'Cancel',
                                role: 'cancel',
                                handler: function () {
                                    reject(false);
                                }
                            },
                            {
                                text: 'Ok',
                                handler: function () {
                                    resolve(true);
                                }
                            }
                        ]
                    });
                    alert.present();
                });
            },
            alert: function (msg, title) {
                var alert = _this._alert.create({
                    title: title || 'Alert',
                    subTitle: msg,
                    buttons: ['Dismiss']
                });
                alert.present();
            }
        };
        this.SocialSharing = {
            shareVia: function (message, subject, file, url) {
                _this._socialSharing.share(message, subject, file || null, url || null).then(function () {
                    return true;
                }).catch(function () {
                    return false;
                });
            }
        };
        this.imageViewer = {
            show: function (url, title, share) {
                _this._photoViewer.show(url, title, { share: share || true });
            }
        };
        this.uploadMedia = {
            image: function (source) {
                var sourceType;
                if (source == 1) {
                    sourceType = _this.camera.PictureSourceType.CAMERA;
                }
                else {
                    sourceType = _this.camera.PictureSourceType.PHOTOLIBRARY;
                }
                var options = {
                    quality: 20,
                    targetWidth: 600,
                    targetHeight: 600,
                    destinationType: _this.camera.DestinationType.DATA_URL,
                    encodingType: _this.camera.EncodingType.PNG,
                    mediaType: _this.camera.MediaType.PICTURE,
                    sourceType: sourceType,
                    allowEdit: true
                };
                return _this.camera.getPicture(options);
            }
        };
    }
    SharedProvider.prototype.checkIntro = function (component) {
        return __awaiter(this, void 0, void 0, function () {
            var isIntroduced;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.LS.get('intro')];
                    case 1:
                        isIntroduced = _a.sent();
                        isIntroduced = JSON.parse(isIntroduced);
                        if (!isIntroduced[component]) {
                            isIntroduced[component] = true;
                            this.LS.set('intro', isIntroduced);
                            if (component == 'entity') {
                                return [2 /*return*/, true];
                            }
                            if (this.platform.is('ios')) {
                                this.event.publish('app:intro', __WEBPACK_IMPORTED_MODULE_6__config__["b" /* appIntro */].ios[component]);
                            }
                            else {
                                this.event.publish('app:intro', __WEBPACK_IMPORTED_MODULE_6__config__["b" /* appIntro */].android[component]);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return SharedProvider;
}());
SharedProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicApp */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_photo_viewer__["a" /* PhotoViewer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
], SharedProvider);

//# sourceMappingURL=shared.provider.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MongerApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MongerApi = (function () {
    function MongerApi(globalProvider, http) {
        this.globalProvider = globalProvider;
        this.http = http;
    }
    MongerApi.prototype.getCategories = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "getEntityCategories&userId=" + this.globalProvider.userId, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.topHatedGossips = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "topUpvotedNegativeGossips&userId=" + this.globalProvider.userId, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.topLovedGossips = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "topUpvotedPositiveGossips&userId=" + this.globalProvider.userId, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.latestGossips = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "topUpvotedPositiveGossips&userId=" + this.globalProvider.userId, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.trendingEntity = function (pageNo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "topGossipedEntities&userId=" + this.globalProvider.userId, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.followedEntity = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "getMyFollowedEntities&userId=" + this.globalProvider.userId, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.followedGossips = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "getMyFollowedGossips&userId=" + this.globalProvider.userId, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.getMyFollowers = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "getMyFollowers&userId=" + (id || this.globalProvider.userId), { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.getMyFollowees = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "getMyFollowees&userId=" + (id || this.globalProvider.userId), { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.getMyGossips = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "getMyGossips&userId=" + (id || this.globalProvider.userId), { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.getMyGossipsByCategory = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "getGossipsByCategory&userId=" + this.globalProvider.userId + "&id=" + id, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.getGossip = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "getGossip&userId=" + this.globalProvider.userId + "&id=" + id, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.getGossipByEntity = function (id, feedbackType) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "getGossips&feedback_type=" + feedbackType + "&userId=" + this.globalProvider.userId + "&id=" + id, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.getGossipComments = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "getGossipComments&userId=" + this.globalProvider.userId + "&id=" + id, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.insertComments = function (msg, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "insertComment&msg=" + msg + "&userId=" + this.globalProvider.userId + "&id=" + id, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.updateProfile = function (fname, lname, mobile) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "insertComment&fname=" + fname + "&userId=" + this.globalProvider.userId + "&lname=" + lname + "&mobileNo=" + mobile, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.insertGossip = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "enctype": "multipart/form-data" });
        data.userId = this.globalProvider.userId;
        var form_data = new FormData();
        for (var key in data) {
            form_data.append(key, data[key]);
        }
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "insertGossip", form_data, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.getUserDetail = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "getUserDetails&id=" + id + "&userId=" + this.globalProvider.userId, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.getEntityDetail = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "getEntity&userId=" + this.globalProvider.userId + "&id=" + id, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.getLatestGossips = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "latestGossips&userId=" + this.globalProvider.userId, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.vote = function (type, gossipId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "vote&id=" + gossipId + "&type=" + type + "&userId=" + this.globalProvider.userId, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.followGossip = function (gossipId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "followGossip&userId=" + this.globalProvider.userId + "&id=" + gossipId, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.unFollowGossip = function (gossipId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "unfollowGossip&userId=" + this.globalProvider.userId + "&id=" + gossipId, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.deleteGossip = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "deletePost&userId=" + this.globalProvider.userId + "&postId=" + id, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.getEntityNews = function (entityId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "getEntityNews&userId=" + this.globalProvider.userId + "&id=" + entityId, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.followUser = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "followUnfollow&userId=" + this.globalProvider.userId + "&id=" + id, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.getMyEntity = function (id, owned) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "getMyEntities&userId=" + id + "&owner=" + (owned ? 'yes' : ''), { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.searchEntity = function (title, type) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "searchApi&title=" + title + "&type=" + type, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.searchEntityAvailability = function (title) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "exactMatchTitleEntities&title=" + title, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.followEntity = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "entityFollow&userId=" + this.globalProvider.userId + "&id=" + id, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.addEntity = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "enctype": "multipart/form-data" });
        data.userId = this.globalProvider.userId;
        var form_data = new FormData();
        for (var key in data) {
            form_data.append(key, data[key]);
        }
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "insertEntity", form_data, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.getFbUserInfo = function (access_token) {
        return this.http.get("https://graph.facebook.com/v2.2/me", {
            params: {
                access_token: access_token,
                fields: "name,first_name,last_name,location,picture,email",
                format: "json"
            }
        })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.socialLogin = function (data) {
        data.player_id = this.globalProvider.playerId;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "socialRegistration&fname=" + data.fname + "&lname=" + data.lname + "&email=" + data.email + "&userId=" + data.userId + "&source=" + data.source + "&player_id=" + data.player_id + "&playerId=" + data.player_id, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.logout = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__providers_config__["c" /* baseURL */] + "appLogout&userId=" + this.globalProvider.userId, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    // searchNews(title): Observable<any> {
    //   let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    //   return this.http.get(`${baseURL}getEntitySearchNews&title=${title}`, { headers: headers })
    //     .map((response: Response) => {
    //       return response.json();
    //     })
    //     .catch(this.handleError);
    // }
    MongerApi.prototype.getGeoAddress = function (coords) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get("http://maps.googleapis.com/maps/api/geocode/json?latlng=" + coords.latitude + "," + coords.longitude + "&sensor=true", { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.getNews = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.google.com%2Fnews%2Fsection%3Fgeo%3D" + (this.globalProvider.location || 'mumbai') + "%26output%3Drss%26num%3D40&api_key=o8aomlxn5spw5klgsqjgdlasz9kekalrp2hgptsb", { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.searchNews = function (query) {
        if (query) {
            console.log(query);
            query = query.replace(/ /g, "-");
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.google.com%2Fnews%3Fq%3D" + query + "%26output%3Drss%26num%3D20&api_key=o8aomlxn5spw5klgsqjgdlasz9kekalrp2hgptsb", { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    MongerApi.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error || 'Server error');
    };
    return MongerApi;
}());
MongerApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_config__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], MongerApi);

//# sourceMappingURL=api.provider.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_gossip_add_gossip__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_provider__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_provider__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(platform, navCtrl, api, ngZone, modal, shared, actionSheetCtrl, alertCtrl) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.api = api;
        this.ngZone = ngZone;
        this.modal = modal;
        this.shared = shared;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.segment = 'trending';
        this._preScrollArea = 0;
        this.showSearch = true;
        this.category = 'allCategories';
        this._isPageLoaded = 0;
        this._firstLoad = true;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.trendingEntity();
        this.getNews();
    };
    HomePage.prototype.ionViewDidEnter = function () {
        if (this._isPageLoaded > 0) {
            this.tabChange(this.segment, true);
        }
        else {
            this._isPageLoaded = this._isPageLoaded + Number(1);
            this.shared.checkIntro('home');
        }
    };
    HomePage.prototype.getNews = function () {
        var _this = this;
        this.api.getNews().subscribe(function (data) {
            _this.geoNews = data.items;
        }, function (err) {
            console.error(err);
        });
    };
    HomePage.prototype.topHatedGossips = function () {
        var _this = this;
        if (this._firstLoad && !this.hatedGossips) {
            this.shared.Loader.show();
        }
        this.api.topHatedGossips().subscribe(function (data) {
            _this.hatedGossips = data;
            _this.shared.Loader.closeIfActive();
        }, function (err) {
            console.error(err);
            _this.shared.Loader.closeIfActive();
        });
    };
    HomePage.prototype.topLovedGossips = function () {
        var _this = this;
        if (this._firstLoad && !this.lovedGossips) {
            this.shared.Loader.show();
        }
        this.api.topLovedGossips().subscribe(function (data) {
            _this.lovedGossips = data;
            _this.shared.Loader.closeIfActive();
        }, function (err) {
            console.error(err);
            _this.shared.Loader.closeIfActive();
        });
    };
    HomePage.prototype.trendingEntity = function () {
        var _this = this;
        if (this._firstLoad && !this.trendingEntities) {
            this.shared.Loader.show();
        }
        this.api.trendingEntity().subscribe(function (data) {
            _this.trendingEntities = data;
            _this.shared.Loader.closeIfActive();
        }, function (err) {
            console.error(err);
            _this.shared.Loader.closeIfActive();
        });
    };
    HomePage.prototype.update = function () {
        var _this = this;
        if (!(this.platform.is('ios'))) {
            this.ngZone.run(function () {
                if (_this._preScrollArea > _this.content.scrollTop) {
                    _this.showSearch = true;
                }
                else {
                    _this.showSearch = false;
                }
            });
            this._preScrollArea = this.content.scrollTop;
        }
    };
    HomePage.prototype.search = function () {
        var modal;
        if (this.segment == 'news') {
            modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */], { news: 'news' });
        }
        else {
            modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
        }
        modal.present();
    };
    HomePage.prototype.tabChange = function (segment, loader) {
        if (loader) {
            this._firstLoad = false;
        }
        else {
            this._firstLoad = true;
        }
        if (segment == 'topHated') {
            this.topHatedGossips();
        }
        else if (segment == 'topRated') {
            this.topLovedGossips();
        }
        else if (segment == 'news') {
            this.shared.checkIntro('news');
        }
        else if (segment == 'trending') {
            this.trendingEntity();
        }
    };
    HomePage.prototype.addGossips = function (news) {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__add_gossip_add_gossip__["a" /* AddGossipPage */], { type: null, id: 460, data: news });
        modal.onDidDismiss(function (type) {
        });
        modal.present();
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Content */])
], HomePage.prototype, "content", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/home/home.html"*/'<ion-header>\n    <ion-toolbar color="primary">\n        <ion-segment [(ngModel)]="segment" color="whitec" (ionChange)="tabChange(segment, false)">\n            <ion-segment-button value="trending">\n                Trending\n            </ion-segment-button>\n            <ion-segment-button value="topHated">\n                Hated\n            </ion-segment-button>\n            <ion-segment-button value="topRated">\n                Rated\n            </ion-segment-button>\n            <ion-segment-button value="news">\n                News\n            </ion-segment-button>\n        </ion-segment>\n    </ion-toolbar>\n</ion-header>\n<ion-content (ionScroll)="update()"> \n    <gossip-card *ngIf="segment == \'topHated\'" (dataUpdated)="tabChange(segment, true)" [gossips]="hatedGossips"></gossip-card>\n    <gossip-card *ngIf="segment == \'topRated\'" (dataUpdated)="tabChange(segment, true)" [gossips]="lovedGossips"></gossip-card>\n    <entity-card *ngIf="segment == \'trending\'" (dataUpdated)="tabChange(segment, true)" [showBookmark]="false" [entities]="trendingEntities"></entity-card>\n    <news [newsList]="geoNews" *ngIf="segment == \'news\'"></news>\n    <ion-fab bottom right *ngIf="showSearch" [@myAnimation]>\n        <button ion-fab color="primary" (click)="search()">\n      <ion-icon name="search"></ion-icon>\n   </button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/home/home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__providers_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_api_provider__["a" /* MongerApi */]],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* trigger */])('myAnimation', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* transition */])('in => void', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* style */])({ height: '*' }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* style */])({ height: 250 }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* transition */])('* => void', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* style */])({ height: '*' }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])(250, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* style */])({ height: 0 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_api_provider__["a" /* MongerApi */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__providers_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_provider__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_provider__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_gossip_add_gossip__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReviewPage = (function () {
    function ReviewPage(api, shared, navCtrl, navParams, viewCtrl, modal) {
        this.api = api;
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modal = modal;
        this.type = 1;
        this.bgImage = 'assets/img/positive.jpg';
        this.type = navParams.get('type');
        if (this.type == 1) {
            this.bgImage = 'assets/img/negative.jpg';
        }
        // this._id = 31; //hard coded
        this._id = this.navParams.get('id');
    }
    ReviewPage.prototype.ionViewDidLoad = function () {
        this.getGossips();
    };
    ReviewPage.prototype.addGossips = function () {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__add_gossip_add_gossip__["a" /* AddGossipPage */], { type: this.type, id: this._id });
        modal.onDidDismiss(function (type) {
            _this.getGossips();
        });
        modal.present();
    };
    ReviewPage.prototype.getGossips = function () {
        var _this = this;
        this.shared.Loader.show();
        this.api.getGossipByEntity(this._id, this.type).subscribe(function (data) {
            _this.entityGossips = data;
            _this.shared.Loader.hide();
        }, function (err) {
            console.log(err);
            _this.shared.Loader.hide();
        });
    };
    ReviewPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return ReviewPage;
}());
ReviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-review',template:/*ion-inline-start:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/review/review.html"*/'<ion-header>\n\n    <ion-toolbar color="primary">\n        <button ion-button icon-only menuToggle="false" left color="white" (click)="dismiss()">\n      <ion-icon name="arrow-back"></ion-icon> \n        </button>\n        <ion-title>\n            Gossips \n        </ion-title>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n    <ion-list class="comments bg-gossip"  [style.backgroundImage]="\'url(\' + bgImage + \')\'">  \n <gossip-card [gossips]="entityGossips"></gossip-card>\n    </ion-list>\n    <ion-fab bottom right>\n        <button ion-fab color="primary" (click)="addGossips()">\n      <ion-icon name="add"></ion-icon>\n   </button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/review/review.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_api_provider__["a" /* MongerApi */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_api_provider__["a" /* MongerApi */], __WEBPACK_IMPORTED_MODULE_2__providers_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], ReviewPage);

//# sourceMappingURL=review.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartAudio; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SmartAudio = (function () {
    function SmartAudio(nativeAudio, platform) {
        this.nativeAudio = nativeAudio;
        this.audioType = 'html5';
        this.sounds = [];
        if (platform.is('cordova')) {
            this.audioType = 'native';
        }
    }
    SmartAudio.prototype.preload = function (key, asset) {
        if (this.audioType === 'html5') {
            var audio = {
                key: key,
                asset: asset,
                type: 'html5'
            };
            this.sounds.push(audio);
        }
        else {
            this.nativeAudio.preloadSimple(key, asset);
            var audio = {
                key: key,
                asset: key,
                type: 'native'
            };
            this.sounds.push(audio);
        }
    };
    SmartAudio.prototype.play = function (key) {
        var audio = this.sounds.find(function (sound) {
            return sound.key === key;
        });
        if (audio.type === 'html5') {
            var audioAsset = new Audio(audio.asset);
            audioAsset.play();
        }
        else {
            this.nativeAudio.play(audio.asset).then(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
        }
    };
    return SmartAudio;
}());
SmartAudio = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
], SmartAudio);

//# sourceMappingURL=smart-audio.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    AboutPage.prototype.ionViewDidLoad = function () { };
    AboutPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(false);
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/about/about.html"*/'<ion-header>\n    <ion-toolbar color="primary">\n        <button ion-button icon-only menuToggle="false" color="white" (click)="dismiss()">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n        <ion-title>\n            About Gossip Monger\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-list>\n      \n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsPage = (function () {
    function TermsPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    TermsPage.prototype.ionViewDidLoad = function () { };
    TermsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(false);
    };
    return TermsPage;
}());
TermsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-terms',template:/*ion-inline-start:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/terms/terms.html"*/'<ion-header>\n    <ion-toolbar color="primary">\n        <button ion-button icon-only menuToggle="false" color="white" (click)="dismiss()">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n        <ion-title>\n            Terms & Condition\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-list>\n      \n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/terms/terms.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
], TermsPage);

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_provider__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_provider__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gossips_gossips__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoriesPage = (function () {
    function CategoriesPage(sanitizer, navCtrl, shared, api) {
        this.sanitizer = sanitizer;
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.api = api;
    }
    CategoriesPage.prototype.ionViewDidLoad = function () {
        this.getCategories();
    };
    CategoriesPage.prototype.getCategories = function () {
        var _this = this;
        this.shared.Loader.show();
        this.api.getCategories().subscribe(function (data) {
            _this.categories = data;
            console.log(data);
            _this.shared.Loader.hide();
        }, function (err) {
            _this.shared.Loader.hide();
            console.log(err);
        });
    };
    CategoriesPage.prototype.gossips = function (gossip) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__gossips_gossips__["a" /* GossipsPage */], { data: gossip });
    };
    CategoriesPage.prototype.getBackground = function (image) {
        if (!image) {
            return this.sanitizer.bypassSecurityTrustStyle("linear-gradient( rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5))");
        }
        return this.sanitizer.bypassSecurityTrustStyle("linear-gradient( rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(" + image.url + ")");
    };
    return CategoriesPage;
}());
CategoriesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-categories',template:/*ion-inline-start:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/categories/categories.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>Categories</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <div class="category">\n        <ion-row>\n            <ion-col col-6 col-md-4 *ngFor="let category of categories">\n                <ion-card class="m0" (click)="gossips(category)">\n                    <div class="category-content" [style.background-image]="getBackground(category.attachment)">\n                        <div class="card-title">{{category.name}}</div>\n                    </div>\n                    <div class="entity-count border-right">\n                        {{category.count}} {{category.count > 1 ? \'Gossips\' : \'Gossip\'}}\n                    </div>\n\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/categories/categories.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_api_provider__["a" /* MongerApi */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_api_provider__["a" /* MongerApi */]])
], CategoriesPage);

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookmarkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_provider__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_provider__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_entity_profile_entity_profile__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookmarkPage = (function () {
    function BookmarkPage(modal, api, shared) {
        this.modal = modal;
        this.api = api;
        this.shared = shared;
        this.segment = 'gossips';
        this.showNotFound = false;
        this.showNotFound1 = false;
        this._isPageLoaded = 0;
    }
    BookmarkPage.prototype.ionViewDidLoad = function () {
        this.getFollowedEntities(true);
        this.getFollowedGossips();
    };
    BookmarkPage.prototype.ionViewDidEnter = function () {
        if (this._isPageLoaded > 0) {
            this.getFollowedEntities();
            this.getFollowedGossips();
        }
        else {
            this._isPageLoaded = this._isPageLoaded + Number(1);
        }
    };
    BookmarkPage.prototype.getFollowedEntities = function (loader) {
        var _this = this;
        if (loader) {
            this.shared.Loader.show();
        }
        this.api.followedEntity().subscribe(function (data) {
            _this.followedEntities = data;
            if (!_this.followedEntities.length) {
                _this.showNotFound = true;
            }
            if (loader) {
                _this.shared.Loader.hide();
            }
        }, function (err) {
            if (loader) {
                _this.shared.Loader.hide();
            }
            console.error(err);
        });
    };
    BookmarkPage.prototype.entityProfile = function (id, type) {
        console.log('EntityProfile');
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__pages_entity_profile_entity_profile__["a" /* EntityProfilePage */], { id: id, type: type });
        modal.present();
    };
    BookmarkPage.prototype.getFollowedGossips = function () {
        var _this = this;
        this.api.followedGossips().subscribe(function (data) {
            _this.followedGossips = data;
            if (!_this.followedGossips.length) {
                _this.showNotFound1 = true;
            }
        }, function (err) {
            console.error(err);
        });
    };
    return BookmarkPage;
}());
BookmarkPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bookmark',template:/*ion-inline-start:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/bookmark/bookmark.html"*/'<ion-header>\n    <ion-toolbar color="primary">\n        <ion-segment [(ngModel)]="segment" color="whitec">\n            <ion-segment-button value="gossips">\n                Gossips\n            </ion-segment-button>\n            <ion-segment-button value="entity">\n                Entities\n            </ion-segment-button>\n        </ion-segment>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <gossip-card *ngIf="segment == \'gossips\'" (dataUpdated)="getFollowedGossips()"  (unFollowEvent)="getFollowedGossips()" [gossips]="followedGossips"></gossip-card> \n    <entity-card *ngIf="segment == \'entity\'" (dataUpdated)="getFollowedEntities()" (unFollowEvent)="getFollowedEntities()" [entities]="followedEntities"></entity-card>\n</ion-content>'/*ion-inline-end:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/bookmark/bookmark.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_api_provider__["a" /* MongerApi */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_api_provider__["a" /* MongerApi */], __WEBPACK_IMPORTED_MODULE_2__providers_shared_provider__["a" /* SharedProvider */]])
], BookmarkPage);

//# sourceMappingURL=bookmark.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(286);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_deeplinks__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_auth_auth__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_search_search__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_categories_categories__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_request_request__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_about_about__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_terms_terms__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_user_profile_user_profile__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_entity_profile_entity_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_add_gossip_add_gossip__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_bookmark_bookmark__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_comments_comments__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_review_review__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_gossips_gossips__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_onesignal__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_geolocation__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_api_provider__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_network__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_keyboard__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_vibration__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_smart_audio_smart_audio__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_native_audio__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_status_bar__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_splash_screen__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_social_sharing__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_photo_viewer__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_gossip_card_gossip_card__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_entity_card_entity_card__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_news_news__ = __webpack_require__(600);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_auth_auth__["a" /* AuthPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_categories_categories__["a" /* CategoriesPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_request_request__["a" /* RequestPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_user_profile_user_profile__["b" /* UserProfilePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_bookmark_bookmark__["a" /* BookmarkPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_entity_profile_entity_profile__["a" /* EntityProfilePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_comments_comments__["a" /* CommentsPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_review_review__["a" /* ReviewPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_add_gossip_add_gossip__["a" /* AddGossipPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_gossips_gossips__["a" /* GossipsPage */],
            __WEBPACK_IMPORTED_MODULE_39__components_gossip_card_gossip_card__["a" /* GossipCardComponent */],
            __WEBPACK_IMPORTED_MODULE_40__components_entity_card_entity_card__["a" /* EntityCardComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pages_user_profile_user_profile__["a" /* MoreOptionProfile */],
            __WEBPACK_IMPORTED_MODULE_17__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_terms_terms__["a" /* TermsPage */],
            __WEBPACK_IMPORTED_MODULE_41__components_news_news__["a" /* NewsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_13__pages_auth_auth__["a" /* AuthPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_request_request__["a" /* RequestPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_categories_categories__["a" /* CategoriesPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_user_profile_user_profile__["b" /* UserProfilePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_bookmark_bookmark__["a" /* BookmarkPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_entity_profile_entity_profile__["a" /* EntityProfilePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_comments_comments__["a" /* CommentsPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_review_review__["a" /* ReviewPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_add_gossip_add_gossip__["a" /* AddGossipPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_gossips_gossips__["a" /* GossipsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_user_profile_user_profile__["a" /* MoreOptionProfile */],
            __WEBPACK_IMPORTED_MODULE_17__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_terms_terms__["a" /* TermsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_35__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_36__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_30__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_31__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_37__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_34__ionic_native_native_audio__["a" /* NativeAudio */],
            __WEBPACK_IMPORTED_MODULE_33__providers_smart_audio_smart_audio__["a" /* SmartAudio */],
            __WEBPACK_IMPORTED_MODULE_32__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_38__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_28__providers_api_provider__["a" /* MongerApi */],
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_29__providers_config__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_deeplinks__["a" /* Deeplinks */],
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_geolocation__["a" /* Geolocation */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return baseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return statusBarColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appIntro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var baseURL = 'http://thegossipmonger.com/api/?method=';

var statusBarColor = '#ac61cd';
var appIntro = { ios: { home: 'http://thegossipmonger.com/app_intro/ios/home.jpg', entity: 'http://thegossipmonger.com/app_intro/ios/entity.jpg', news: 'http://thegossipmonger.com/app_intro/ios/news.jpg' }, android: { home: 'http://thegossipmonger.com/app_intro/android/home.jpg', entity: 'http://thegossipmonger.com/app_intro/android/entity.jpg', news: 'http://thegossipmonger.com/app_intro/android/news.jpg' } };
var GlobalProvider = (function () {
    function GlobalProvider() {
        this.playerId = null;
        this.user = {};
        this.location = 'Mumbai';
    }
    GlobalProvider.prototype.setAuthData = function (data) {
        try {
            this.user = JSON.parse(data);
        }
        catch (e) {
            this.user = data;
        }
        this.userId = this.user.ID;
    };
    GlobalProvider.prototype.setPlayerId = function (id) {
        this.playerId = id;
    };
    GlobalProvider.prototype.toggleMute = function (value) {
        this.isMuted = value;
    };
    GlobalProvider.prototype.dropAuthData = function () {
        this.userId = null;
        this.user = null;
    };
    GlobalProvider.prototype.setLocation = function (location) {
        if (location) {
            location = location.replace(' ', '-');
        }
        this.location = location;
    };
    return GlobalProvider;
}());
GlobalProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], GlobalProvider);

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_provider__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_deeplinks__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_auth_auth__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_comments_comments__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_user_profile_user_profile__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = (function () {
    function MyApp(events, deeplinks, globalProvider, oneSignal, platform, statusBar, splashScreen, keyboard, shared) {
        var _this = this;
        this.events = events;
        this.deeplinks = deeplinks;
        this.globalProvider = globalProvider;
        this.oneSignal = oneSignal;
        this.shared = shared;
        this._isColdStart = true;
        shared.LS.get('user').then(function (data) {
            if (!data) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_auth_auth__["a" /* AuthPage */];
            }
            else {
                _this.globalProvider.setAuthData(data);
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */];
                _this._isColdStart = false;
            }
        });
        shared.LS.get('isMuted').then(function (data) {
            _this.globalProvider.toggleMute(data);
        });
        shared.LS.get('location').then(function (data) {
            _this.globalProvider.setLocation(data);
        });
        shared.LS.get('intro').then(function (data) {
            if (!data) {
                shared.LS.set('intro', { home: false, news: false, entity: false });
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            keyboard.disableScroll(true);
            keyboard.hideKeyboardAccessoryBar(false);
            statusBar.styleDefault();
            statusBar.backgroundColorByHexString(__WEBPACK_IMPORTED_MODULE_6__providers_config__["d" /* statusBarColor */]);
            splashScreen.hide();
            if (platform.is('cordova')) {
                _this.oneSignal.startInit('4cf261ef-295d-4258-b259-788d122d8e0b', 'Y2MwMTZjZmEtMThlZS00NmE5LWIyMGEtODUyYzVhY2QyMjc3');
                _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.Notification);
                _this.oneSignal.handleNotificationReceived().subscribe(function (data) {
                });
                _this.oneSignal.handleNotificationOpened().subscribe(function (data) {
                    var payload = data;
                    if (_this._isColdStart) {
                        events.subscribe('root:created', function (data) {
                            _this.redirectToPage(payload);
                            events.unsubscribe('root:created');
                        });
                    }
                    else {
                        _this.redirectToPage(data);
                    }
                });
                _this.oneSignal.endInit();
            }
            _this.deeplinks.routeWithNavController(_this.navController, {
                '/gossip/:id': __WEBPACK_IMPORTED_MODULE_11__pages_comments_comments__["a" /* CommentsPage */]
            }).subscribe(function (match) {
                console.info('Successfully matched route', match);
            }, function (nomatch) {
                console.error('Got a deeplink that didn\'t match', nomatch);
            });
        });
    }
    MyApp.prototype.redirectToPage = function (data) {
        var type;
        try {
            type = data.notification.payload.additionalData.type;
        }
        catch (e) {
            console.warn(e);
        }
        switch (type) {
            case 'Followers': {
                this.navController.push(__WEBPACK_IMPORTED_MODULE_12__pages_user_profile_user_profile__["b" /* UserProfilePage */], { userId: data.notification.payload.additionalData.uid });
                break;
            }
            case 'comment': {
                this.navController.push(__WEBPACK_IMPORTED_MODULE_11__pages_comments_comments__["a" /* CommentsPage */], { id: data.notification.payload.additionalData.pid });
                break;
            }
        }
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
], MyApp.prototype, "navController", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/app/app.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__providers_shared_provider__["a" /* SharedProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_deeplinks__["a" /* Deeplinks */], __WEBPACK_IMPORTED_MODULE_6__providers_config__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */],
        __WEBPACK_IMPORTED_MODULE_5__providers_shared_provider__["a" /* SharedProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_provider__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_provider__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__review_review__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_smart_audio_smart_audio__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_vibration__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_gossip_add_gossip__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_config__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var EntityProfilePage = (function () {
    function EntityProfilePage(api, shared, navCtrl, navParams, modal, viewCtrl, smartAudio, vibration, globalProvider, ngZone, platform) {
        this.api = api;
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.viewCtrl = viewCtrl;
        this.smartAudio = smartAudio;
        this.vibration = vibration;
        this.globalProvider = globalProvider;
        this.ngZone = ngZone;
        this.platform = platform;
        this.segment = 'news';
        this.opacity = 0;
        this.headerBackground = "rgba(192, 108, 228, " + this.opacity + ")";
        this._preScrollArea = 0;
        this.entityDetail = { category: [{}] };
        if (!globalProvider.isMuted) {
            try {
                smartAudio.preload('negative', 'assets/sounds/Negative.mp3');
                smartAudio.preload('positive', 'assets/sounds/Positive.mp3');
            }
            catch (exception) {
                console.warn(exception);
            }
        }
        this._id = this.navParams.get('id');
        this._type = this.navParams.get('type');
    }
    EntityProfilePage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._type == 1) {
                            this.tapEvent(2);
                        }
                        else if (this._type == 2) {
                            this.tapEvent(1);
                        }
                        this.getEntityDetail();
                        this.getGossips(true);
                        this.getEntityNews();
                        return [4 /*yield*/, this.shared.checkIntro('entity')];
                    case 1:
                        if (_a.sent()) {
                            if (this.platform.is('ios')) {
                                this.showIntro = __WEBPACK_IMPORTED_MODULE_8__providers_config__["b" /* appIntro */].ios.entity;
                            }
                            else {
                                this.showIntro = __WEBPACK_IMPORTED_MODULE_8__providers_config__["b" /* appIntro */].android.entity;
                            }
                        }
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    EntityProfilePage.prototype.update = function () {
        var _this = this;
        if (!(this.platform.is('ios'))) {
            this.ngZone.run(function () {
                if (_this._preScrollArea > _this.content.scrollTop) {
                    if (_this.opacity > 0 && _this.content.scrollTop < 500)
                        _this.opacity = _this.opacity - 0.9;
                    _this.headerBackground = "rgba(192, 108, 228, " + _this.opacity + ")";
                }
                else if (_this._preScrollArea < _this.content.scrollTop) {
                    if (_this.opacity < 1 && _this.content.scrollTop < 500)
                        _this.opacity = _this.opacity + 0.9;
                    _this.headerBackground = "rgba(192, 108, 228, " + _this.opacity + ")";
                }
            });
            this._preScrollArea = this.content.scrollTop;
        }
    };
    EntityProfilePage.prototype.boomarkEntity = function (id) {
        var _this = this;
        this.entityDetail.entityFollow = !this.entityDetail.entityFollow;
        this.api.followEntity(id).subscribe(function (data) {
            if (_this.entityDetail.entityFollow) {
                _this.shared.Toast.show('Started following ' + _this.entityDetail.title, null, 'bottom');
            }
            else {
                _this.shared.Toast.show('Unfollowed ' + _this.entityDetail.title, null, 'bottom');
            }
        }, function (err) {
            console.error(err);
        });
    };
    EntityProfilePage.prototype.getGossips = function (showLoader) {
        var _this = this;
        if (showLoader) {
            this.shared.Loader.show();
        }
        var feedbackType = 0;
        if (this.segment == 'hated') {
            feedbackType = 1;
        }
        this.api.getGossipByEntity(this._id, feedbackType).subscribe(function (data) {
            _this.entityGossips = data;
            _this.shared.Loader.closeIfActive();
        }, function (err) {
            _this.shared.Loader.closeIfActive();
            console.error(err);
        });
    };
    EntityProfilePage.prototype.getEntityNews = function () {
        var _this = this;
        this.api.getEntityNews(this._id).subscribe(function (data) {
            _this.entityNews = data;
        }, function (err) {
            console.error(err);
        });
    };
    EntityProfilePage.prototype.updateSegment = function (segment) {
        if (segment != 'news') {
            this.getGossips(true);
        }
    };
    EntityProfilePage.prototype.getEntityDetail = function () {
        var _this = this;
        this.api.getEntityDetail(this._id).subscribe(function (data) {
            _this.entityDetail = data;
        }, function (err) {
            console.error(err);
        });
    };
    EntityProfilePage.prototype.tapEvent = function (ev) {
        var _this = this;
        var modal;
        if (ev.direction == 2 || ev == 2) {
            modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__review_review__["a" /* ReviewPage */], { type: 0, id: this._id });
            if (!this.globalProvider.isMuted) {
                this.smartAudio.play('positive');
            }
        }
        else {
            modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__review_review__["a" /* ReviewPage */], { type: 1, id: this._id });
            if (!this.globalProvider.isMuted) {
                this.smartAudio.play('negative');
            }
        }
        this.vibration.vibrate(75);
        modal.onDidDismiss(function (type) {
            _this.getGossips();
            _this.getEntityDetail();
        });
        modal.present();
    };
    EntityProfilePage.prototype.jubToSegment = function (param) {
        this.segment = param;
        this.scroll();
    };
    EntityProfilePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EntityProfilePage.prototype.scroll = function () {
        this.content.scrollTo(0, this.content.contentHeight, 300);
    };
    EntityProfilePage.prototype.addGossips = function (news) {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_7__add_gossip_add_gossip__["a" /* AddGossipPage */], { type: null, id: this._id, data: news });
        modal.onDidDismiss(function (type) {
            _this.getGossips();
            _this.getEntityDetail();
        });
        modal.present();
    };
    return EntityProfilePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
], EntityProfilePage.prototype, "content", void 0);
EntityProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-entity-profile',template:/*ion-inline-start:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/entity-profile/entity-profile.html"*/'<ion-content (ionScroll)="update()">\n    <div class="subject-bg ">\n        <ion-toolbar color="primary" class="trasparent-header" [style.background]="headerBackground">\n            <button ion-button icon-left color="white" (click)="dismiss()">\n      <ion-icon name="arrow-back"></ion-icon>\n    <ion-title>{{entityDetail.category[0].name}}</ion-title>\n    </button>\n            <button ion-button icon-only color="whitec" (click)="boomarkEntity(entityDetail.id)" item-right [class]="entityDetail.entityFollow ? \'bookmark-btn1 liked\' : \'bookmark-btn1\'">\n      <ion-icon name="bookmark"></ion-icon>\n    </button>\n\n        </ion-toolbar>\n\n        <div class="profile-wrapper">\n            <div class="profile-data">\n                <h1 color="whitec" ion-text>{{entityDetail.title}}</h1>\n                <h4 color="whitec" ion-text class="mt0">{{ entityDetail.subtitle || entityDetail.category[0].name}}</h4>\n            </div>\n            <img [src]="entityDetail.img || \'assets/img/image.png\'" (click)="shared.imageViewer.show(entityDetail.img || \'assets/img/image.png\', entityDetail.title)"\n                class="profile-img" alt="">\n            <div>\n                        <ion-row class="custom-row">\n                            <ion-col class="pt0">\n                                <button ion-button text-right outline color="whitec" (click)="jubToSegment(\'rated\')" class="add-btn"> Top Rated </button>\n                            </ion-col>\n                            <ion-col  class="pt0">\n                                <button ion-button text-right outline color="whitec" (click)="jubToSegment(\'hated\')" class="add-btn">   Top Hated </button>\n                            </ion-col>\n                        </ion-row>  \n\n                <button ion-button text-right outline color="whitec"  (click)="jubToSegment(\'news\')" class="add-btn"> Word out there! </button>\n                <br>\n                <button ion-button text-right outline color="whitec" (click)="addGossips()" class="add-btn mt10"> Add Gossip </button>\n            </div>\n            <div class="drag-section-wrap" padding-left padding-right>\n                <div class="drag-section">\n                    <div class="slider-wrap" (swipe)="tapEvent($event)">\n                        <ion-row>\n\n                            <ion-col text-center (click)="tapEvent(2)">\n                                <h5 class="mt0 mb0 white">\n                                    {{entityDetail.total_positive_gossips}}\n                                </h5>\n                                <img src="assets/img/loved.png" alt="">\n                            </ion-col>\n                            <ion-col text-center class="slide-img-wrap">\n                                <button ion-button icon-only class="down-btn mt10" (click)="scroll()">\n  <ion-icon name="ios-arrow-down-outline"></ion-icon>\n</button>\n                            </ion-col>\n                            <ion-col (click)="tapEvent(1)" text-center>\n                                <h5 class="mt0 mb0 white">\n                                    {{entityDetail.total_negative_gossips}}\n                                </h5>\n                                <img src="assets/img/hated.png" alt="">\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <ion-segment [(ngModel)]="segment" color="whitec" (ionChange)="updateSegment(segment)">\n        <ion-segment-button value="news">\n            News\n        </ion-segment-button>\n        <ion-segment-button value="rated">\n            Top Rated\n        </ion-segment-button>\n        <ion-segment-button value="hated">\n            Top Hated\n        </ion-segment-button>\n    </ion-segment>\n    <ion-list class="comments">\n        <gossip-card [gossips]="entityGossips" *ngIf="segment == \'hated\' || segment == \'rated\'"></gossip-card>\n        <news *ngIf="segment == \'news\'" [entityId]="entityDetail.id" [newsList]="entityNews"></news>\n    </ion-list>\n</ion-content>\n<div class="app-intro" *ngIf="showIntro" (click)="showIntro = false"> \n    <img src="http://tgm-inf.cruxservers.in/app_intro/android/entity.jpg">\n    <button ion-button color="primary" class="intro-button">\n        OK, Got it! \n    </button>\n</div> '/*ion-inline-end:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/entity-profile/entity-profile.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_api_provider__["a" /* MongerApi */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_api_provider__["a" /* MongerApi */],
        __WEBPACK_IMPORTED_MODULE_2__providers_shared_provider__["a" /* SharedProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_smart_audio_smart_audio__["a" /* SmartAudio */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_vibration__["a" /* Vibration */],
        __WEBPACK_IMPORTED_MODULE_8__providers_config__["a" /* GlobalProvider */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
], EntityProfilePage);

//# sourceMappingURL=entity-profile.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGossipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_provider__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_provider__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_search_search__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddGossipPage = (function () {
    function AddGossipPage(actionSheetCtrl, globalProvider, modal, navCtrl, navParams, viewCtrl, api, shared) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.globalProvider = globalProvider;
        this.modal = modal;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.api = api;
        this.shared = shared;
        this.addGossip = { posted_as: this.globalProvider.userId, newsId: null };
        this.user = this.globalProvider.user;
        this.selectedEntity = { category: [{ name: null }] };
        this.type = this.navParams.get('type');
        this.addGossip.feedbackType = this.navParams.get('type');
        this.id = this.navParams.get('id');
        this.addGossip.id = this.navParams.get('id');
        if (this.navParams.get('data')) {
            this.news = this.navParams.get('data');
            this.addGossip.newsId = this.navParams.get('data').id;
            this.addGossip.newsTitle = this.navParams.get('data').title;
            this.addGossip.newsUrl = this.navParams.get('data').url;
        }
        if (this.navParams.get('news')) {
            this.news = this.navParams.get('news');
            this.addGossip.newsTitle = this.navParams.get('news').title;
            this.addGossip.newsUrl = this.navParams.get('news').link;
        }
    }
    AddGossipPage.prototype.getMyEntity = function () {
        var _this = this;
        this.shared.Loader.show();
        this.api.getMyEntity(this.globalProvider.userId).subscribe(function (data) {
            _this.myEntity = data;
            _this.shared.Loader.hide();
        }, function (err) {
            _this.shared.Loader.hide();
            console.error(err);
        });
    };
    AddGossipPage.prototype.searchEntity = function () {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_5__pages_search_search__["a" /* SearchPage */], { source: 'gossip' });
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.id = data.id;
                _this.addGossip.id = data.id;
                _this.selectedEntity = data;
            }
            else {
            }
        });
        modal.present();
    };
    AddGossipPage.prototype.insertGossip = function (gossip) {
        var _this = this;
        if (gossip.posted_as != 'anonymous') {
            gossip.isAnonymous = 0;
        }
        else {
            gossip.isAnonymous = 1;
            gossip.posted_as = null;
        }
        gossip.type = gossip.feedbackType;
        gossip.image = this.addGossip.image;
        this.shared.Loader.show();
        this.api.insertGossip(gossip).subscribe(function (data) {
            _this.shared.Toast.show('Gossip created successfully');
            _this.viewCtrl.dismiss();
            _this.shared.Loader.hide();
        }, function (err) {
            _this.shared.Loader.hide();
            console.error(err);
        });
    };
    AddGossipPage.prototype.chooseImage = function (source) {
        var _this = this;
        this.shared.uploadMedia.image(source)
            .then(function (imageData) {
            _this.addGossip.image = 'data:image/png;base64,' + imageData;
        }, function (err) {
        });
    };
    AddGossipPage.prototype.selectImage = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Capture image with',
            buttons: [
                {
                    text: 'Camera',
                    icon: 'camera',
                    handler: function () {
                        _this.chooseImage(1);
                    }
                },
                {
                    text: 'Gallery',
                    icon: 'images',
                    handler: function () {
                        _this.chooseImage(2);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    AddGossipPage.prototype.ionViewDidLoad = function () {
        this.getMyEntity();
    };
    AddGossipPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AddGossipPage.prototype.removeImage = function () {
        this.addGossip.image = '';
    };
    return AddGossipPage;
}());
AddGossipPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-gossip',template:/*ion-inline-start:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/add-gossip/add-gossip.html"*/'<ion-header>\n    <ion-toolbar color="primary">\n        <button ion-button icon-only menuToggle="false" left color="whitec" (click)="dismiss()">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n        <ion-title>\n            Add Gossip\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class="add-gossip">\n        <form #gossipForm="ngForm" novalidate>\n            <ion-card class="card-items ion-card-full">\n                <ion-card-content>\n                    <ion-list>\n                        <ion-searchbar *ngIf="!addGossip.id" (click)="searchEntity()" placeholder="Search Entities"></ion-searchbar>\n                        <ion-item *ngIf="selectedEntity.id">\n                            <ion-avatar item-left>\n                                <img [src]="selectedEntity.img">\n                            </ion-avatar>\n                            <h2>{{selectedEntity.title}}</h2>\n                            <p>{{selectedEntity.category[0].name}}</p>\n                        </ion-item>\n                        <ion-item class="pl8 news-wrap" *ngIf="news">\n                            <div class="news-display">\n                                <span class="bold">Source - </span> {{news.title}}\n                            </div>\n                        </ion-item>\n                        <ion-item style="margin-left: -17px">\n                            <ion-grid>\n                                <ion-row class="emo-img">\n                                    <ion-col text-center>\n                                        <input type="radio" id="pos" [(ngModel)]="addGossip.feedbackType" name="type" [value]="0">\n                                        <label for="pos"> <img src="assets/img/loved.png"   alt=""> <div class="type-text">Positive Gossip</div></label>\n                                    </ion-col>\n                                    <ion-col text-center>\n                                        <input type="radio" id="neg" [(ngModel)]="addGossip.feedbackType" name="type" [value]="1">\n                                        <label for="neg">\n                    <img src="assets/img/hated.png"  alt=""> <div class="type-text">Negative Gossip</div>\n                    </label>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-item>\n                        <ion-item class="pl8">\n                            <ion-label stacked>Gossip as</ion-label>\n                            <ion-select interface="popover" name="poastedAs" class="w40" #poastedAs="ngModel" [(ngModel)]="addGossip.posted_as">\n                                <ion-option value="anonymous">Anonymous</ion-option>\n                                <ion-option [value]="user.ID">{{user.display_name}}</ion-option>\n                                <ion-option [value]="item.id" *ngFor="let item of myEntity">{{item.title}}</ion-option>\n                            </ion-select>\n                        </ion-item>\n                        <ion-item class="pl8">\n                            <!--<ion-label stacked>Description*</ion-label>-->\n                            <textarea class="text-area" rows="6" placeholder="Gossip Content" cols="" [(ngModel)]="addGossip.gossip" name="gossip" #gossip="ngModel"\n                                required></textarea>\n                            <!--<ion-input type="text" [(ngModel)]="addGossip.gossip" name="gossip" #gossip="ngModel" required></ion-input>-->\n                        </ion-item>\n                        <ion-item class="pl8 img-preview" *ngIf="addGossip.image">\n                            <div>\n                                <img [src]="addGossip.image" alt="attachment">\n                                <button class="action-btn" (click)="removeImage()" ion-button icon-left clear small>\n                                        <ion-icon name="md-close"></ion-icon> \n                                    </button>\n                            </div>\n                        </ion-item>\n\n                        <ion-item class="pl8">\n                            <button class="h35" (click)="selectImage()" ion-button block outline icon-left>\n  <ion-icon name="attach"></ion-icon>\n {{ addGossip.image ? \'Change\' : \'Attach\'}}  image\n</button>\n                        </ion-item>\n                    </ion-list>\n                    <div class="submit-btn">\n                        <br>\n                        <button [disabled]="!((addGossip.feedbackType == 0 || addGossip.feedbackType == 1) && addGossip.gossip && addGossip.id)"\n                            ion-button (click)="insertGossip(addGossip)" color="primary" type="submit" block>Post</button>\n                    </div>\n\n                </ion-card-content>\n            </ion-card>\n\n        </form>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/add-gossip/add-gossip.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__providers_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_api_provider__["a" /* MongerApi */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__providers_config__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_api_provider__["a" /* MongerApi */], __WEBPACK_IMPORTED_MODULE_4__providers_shared_provider__["a" /* SharedProvider */]])
], AddGossipPage);

//# sourceMappingURL=add-gossip.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GossipCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_entity_profile_entity_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_provider__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_provider__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_comments_comments__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GossipCardComponent = (function () {
    function GossipCardComponent(globalProvider, api, modal, shared) {
        this.globalProvider = globalProvider;
        this.api = api;
        this.modal = modal;
        this.shared = shared;
        this.gossips = [{}];
        this.unFollowEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.dataUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.userId = globalProvider.userId;
    }
    GossipCardComponent.prototype.ionViewDidLoad = function () { };
    GossipCardComponent.prototype.entityProfile = function (id) {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_2__pages_entity_profile_entity_profile__["a" /* EntityProfilePage */], { id: id });
        modal.onDidDismiss(function (data) {
            _this.dataUpdated.next();
        });
        modal.present();
    };
    GossipCardComponent.prototype.displayImage = function (url, title) {
        this.shared.imageViewer.show(url, title);
    };
    GossipCardComponent.prototype.vote = function (gossip, type, index) {
        console.log(index);
        if (type == 'positive') {
            if (this.gossips[index].action.up != null) {
                this.gossips[index].total_upvotes = Number(this.gossips[index].total_upvotes) - 1;
                this.gossips[index].action.up = null;
            }
            else {
                this.gossips[index].total_upvotes = Number(this.gossips[index].total_upvotes) + 1;
                this.gossips[index].action.up = { voter: this.globalProvider.userId };
            }
        }
        else if (type == 'negative') {
            if (this.gossips[index].action.down != null) {
                this.gossips[index].total_downvotes = Number(this.gossips[index].total_downvotes) - 1;
                this.gossips[index].action.down = null;
            }
            else {
                this.gossips[index].total_downvotes = Number(this.gossips[index].total_downvotes) + 1;
                this.gossips[index].action.down = { voter: this.globalProvider.userId };
            }
        }
        this.api.vote(type == 'positive' ? 0 : 1, gossip.id).subscribe(function (data) {
        }, function (err) {
            console.error(err);
        });
    };
    GossipCardComponent.prototype.shareVia = function (gossip) {
        try {
            this.shared.SocialSharing.shareVia("Hey, I found an interesting Gossip on this Crazy app 'The Gossip Monger'; an app where you can Gossip about anyone and everyone.\n\nGossip on: " + gossip.gossip_about.entity + ": " + gossip.content + "\n\nDownload now and start Gossiping :)", 'The Gossip Monger', gossip.img, gossip.google_short_url);
        }
        catch (e) {
            this.shared.Toast.show('Oops! something went wrong while sharing.');
            console.error(e);
        }
    };
    GossipCardComponent.prototype.openComments = function (id) {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_6__pages_comments_comments__["a" /* CommentsPage */], { id: id });
        modal.onDidDismiss(function (data) {
            _this.dataUpdated.next();
        });
        modal.present();
    };
    GossipCardComponent.prototype.deleteGossip = function (gossip, index) {
        var _this = this;
        this.shared.Alert.confirm().then(function (res) {
            _this.shared.Loader.show();
            _this.api.deleteGossip(gossip.id).subscribe(function (data) {
                _this.shared.Loader.hide();
                if (data.errorType == 'success') {
                    _this.shared.Toast.show('Gossip deleted successfully.');
                    _this.gossips.splice(index, 1);
                }
            }, function (err) {
                _this.shared.Loader.hide();
                _this.shared.Loader.show('Oops! something went wrong.');
            });
        }, function (err) {
            console.log('user cancelled');
        });
    };
    GossipCardComponent.prototype.followGossip = function (gossip, index) {
        var _this = this;
        var action = 'follow';
        if (this.gossips[index].action.follow != null) {
            this.gossips[index].action.follow = null;
            action = 'unfollow';
        }
        else {
            this.gossips[index].action.follow = { voter: this.globalProvider.userId };
        }
        if (action == 'follow') {
            this.api.followGossip(gossip.id).subscribe(function (data) {
            }, function (err) {
            });
        }
        else {
            this.api.unFollowGossip(gossip.id).subscribe(function (data) {
                _this.unFollowEvent.next();
            }, function (err) {
            });
        }
    };
    return GossipCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], GossipCardComponent.prototype, "gossips", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], GossipCardComponent.prototype, "unFollowEvent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], GossipCardComponent.prototype, "dataUpdated", void 0);
GossipCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'gossip-card',template:/*ion-inline-start:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/components/gossip-card/gossip-card.html"*/' <ion-list class="mt10">\n   <span *ngFor="let gossip of gossips; let index = index"> \n      <ion-card class="home-listing">\n            <ion-item class="border-top transparent">\n                <ion-avatar item-left (click)="entityProfile(gossip.gossip_about.ID)">\n                    <img [src]="gossip.gossip_about.img">\n                </ion-avatar>\n                <h2 (click)="entityProfile(gossip.gossip_about.ID)">{{gossip.gossip_about.entity}}</h2>\n                <p (click)="entityProfile(gossip.gossip_about.ID)">{{gossip.category[0].name}}</p>\n                <div class="category-icon">\n                    <img src="assets/img/hated.png" alt="neg" *ngIf="gossip.feedback_type == 1" class="bookmark-btn">\n                    <img src="assets/img/loved.png" alt="pos" *ngIf="gossip.feedback_type == 0" class="bookmark-btn">\n                </div>\n            </ion-item>\n            <ion-card-content>\n                <p>\n                    {{gossip.content}}\n                </p>\n                <img *ngIf="gossip.img"  [src]="gossip.img" (click)="displayImage(gossip.img,gossip.title)">\n                 <div class="news-display" *ngIf="gossip.news_title">\n                       <span class="bold" style="margin-left: 0px">Source - </span> {{gossip.news_title}}\n                 </div>\n                <p text-right class="gossip-id">Gossip #{{gossip.id}}</p>\n            </ion-card-content>\n            <ion-grid class="post">\n                <ion-row>\n                    <ion-col class="p0">\n                        <button color="dark"  [class]="gossip.action.up != null ? \'up-voted\' : \'\' "  ion-button clear small (click)="vote(gossip, \'positive\', index)"> \n                      <ion-icon ios="ios-thumbs-up" md="md-thumbs-up"></ion-icon>\n                      <span>{{gossip.total_upvotes}}</span> \n                  </button>\n                    </ion-col>\n                    <ion-col class="p0">\n                        <button color="dark"  [class]="gossip.action.down != null ? \'down-voted\' : \'\' " ion-button clear small (click)="vote(gossip, \'negative\', index)"> \n                      <ion-icon ios="ios-thumbs-down" md="md-thumbs-down"></ion-icon>\n                       <span>{{gossip.total_downvotes}} </span>\n                  </button>\n                    </ion-col>\n                    <ion-col class="p0">\n                        <button color="dark" ion-button icon-left clear small (click)="openComments(gossip.id)">\n                     <ion-icon name="text"></ion-icon>\n                     <div>{{gossip.total_comments}}</div>\n                  </button>\n                    </ion-col>\n                    <ion-col class="p0" text-center center>\n                        \n                        <button *ngIf="userId != gossip.author.ID" [color]="gossip.action.follow != null ? \'primary\' : \'dark\'" class="action-btn" (click)="followGossip(gossip, index)" ion-button icon-left clear small>\n                     <ion-icon name="md-bookmark"></ion-icon> \n                  </button>\n                    <button *ngIf="userId == gossip.author.ID" color="danger" class="action-btn" (click)="deleteGossip(gossip, index)" ion-button icon-left clear small>\n                     <ion-icon name="md-trash"></ion-icon> \n                  </button>\n                    </ion-col>\n                    <ion-col class="p0" center text-center>\n                        <button color="dark" class="action-btn" (click)="shareVia(gossip)" ion-button icon-left clear small>\n                     <ion-icon name="share"></ion-icon> \n                  </button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-card> \n        </span>\n        <div  center text-center class="no-data" *ngIf="!gossips?.length">No gossip found.</div>\n    </ion-list>'/*ion-inline-end:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/components/gossip-card/gossip-card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_config__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_api_provider__["a" /* MongerApi */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_shared_provider__["a" /* SharedProvider */]])
], GossipCardComponent);

//# sourceMappingURL=gossip-card.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_entity_profile_entity_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_provider__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_provider__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EntityCardComponent = (function () {
    function EntityCardComponent(sanitizer, api, modal, shared) {
        this.sanitizer = sanitizer;
        this.api = api;
        this.modal = modal;
        this.shared = shared;
        this.entities = [{}];
        this.showBookmark = true;
        this.unFollowEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.dataUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    EntityCardComponent.prototype.getBackground = function (image) {
        return this.sanitizer.bypassSecurityTrustStyle("linear-gradient( rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(" + image + ")");
    };
    EntityCardComponent.prototype.entityProfile = function (id, type) {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_3__pages_entity_profile_entity_profile__["a" /* EntityProfilePage */], { id: id, type: type });
        modal.onDidDismiss(function (data) {
            _this.dataUpdated.next();
        });
        modal.present();
    };
    EntityCardComponent.prototype.bookmarkEntity = function (id, index) {
        var _this = this;
        this.entities[index].entityFollow = !this.entities[index].entityFollow;
        this.api.followEntity(id).subscribe(function (data) {
            _this.unFollowEvent.next();
        }, function (err) {
            console.error(err);
        });
    };
    return EntityCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], EntityCardComponent.prototype, "entities", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], EntityCardComponent.prototype, "showBookmark", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], EntityCardComponent.prototype, "unFollowEvent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], EntityCardComponent.prototype, "dataUpdated", void 0);
EntityCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'entity-card',template:/*ion-inline-start:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/components/entity-card/entity-card.html"*/'<ion-list class="trending-card">\n    <ion-row>\n        <ion-col col-6 col-md-4 *ngFor="let entity of entities; let index = index">\n            <ion-card>\n                <div>\n                    <div class="tending-content" (click)="entityProfile(entity.id)" [style.background-image]="getBackground(entity.img)">\n                        <div class="card-title oneLiner">{{entity.title}}</div>\n                        <div class="card-subtitle">{{entity.category[0].name}}</div>\n                    </div>\n\n                </div>\n                <ion-row>\n                    <ion-col class="entity-icon border-right">\n                        <button color="dark" ion-button clear small (click)="entityProfile(entity.id, 1)"> \n                            <img src="assets/img/loved.png" alt=""> \n                            <span class="gossip-count">\n                                {{entity.total_positive_gossips}}\n                            </span>\n                             </button>\n                    </ion-col>\n                    <ion-col [class]="showBookmark ? \'entity-icon border-right col\' : \'entity-icon col\'">\n                        <button color="dark" ion-button clear small (click)="entityProfile(entity.id, 2)">  \n                            <img src="assets/img/hated.png" alt="">\n                                <span class="gossip-count">\n                                 {{entity.total_negative_gossips}}\n                                </span>\n                             </button>\n                    </ion-col>\n                    <ion-col class="entity-icon" *ngIf="showBookmark">\n                        <button ion-button icon-only small color="whitec" (click)="bookmarkEntity(entity.id, index)" item-right [class]="entity.entityFollow ? \'bookmark-btn1 liked\' : \'bookmark-btn1\'">\n                                <ion-icon name="bookmark"></ion-icon>\n                        </button>\n                    </ion-col>\n                </ion-row>\n            </ion-card>\n        </ion-col>\n    </ion-row>\n    <div center text-center class="no-data" *ngIf="!entities?.length">No entity found.</div>\n</ion-list>'/*ion-inline-end:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/components/entity-card/entity-card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_5__providers_api_provider__["a" /* MongerApi */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_shared_provider__["a" /* SharedProvider */]])
], EntityCardComponent);

//# sourceMappingURL=entity-card.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_provider__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_profile_user_profile__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_provider__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entity_profile_entity_profile__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommentsPage = (function () {
    function CommentsPage(modal, navCtrl, navParams, viewCtrl, shared, api) {
        this.modal = modal;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.shared = shared;
        this.api = api;
        this.gossip = { gossip_about: {}, author: {}, category: [{}] };
        this._id = this.navParams.get('id');
    }
    CommentsPage.prototype.ionViewDidLoad = function () {
        this.getGossip();
        this.getGossipComment(true);
    };
    CommentsPage.prototype.getGossip = function () {
        var _this = this;
        this.api.getGossip(this._id).subscribe(function (data) {
            _this.gossip = data;
        }, function (err) {
            console.error(err);
        });
    };
    CommentsPage.prototype.entityProfile = function (id) {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_5__entity_profile_entity_profile__["a" /* EntityProfilePage */], { id: id });
        modal.present();
    };
    CommentsPage.prototype.insertComment = function (msg) {
        var _this = this;
        if (!msg) {
            return false;
        }
        this.shared.Loader.show();
        this.api.insertComments(msg, this._id).subscribe(function (data) {
            _this.getGossipComment();
            _this.commentContent = '';
            _this.shared.Loader.hide();
        }, function (err) {
            _this.shared.Loader.hide();
            console.error(err);
        });
    };
    CommentsPage.prototype.userProfile = function (id) {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_3__user_profile_user_profile__["b" /* UserProfilePage */], { userId: id, });
        modal.present();
    };
    CommentsPage.prototype.getGossipComment = function (loader) {
        var _this = this;
        if (loader) {
            this.shared.Loader.show();
        }
        this.api.getGossipComments(this._id).subscribe(function (data) {
            _this.comments = data;
            if (loader) {
                _this.shared.Loader.hide();
            }
        }, function (err) {
            console.error(err);
            if (loader) {
                _this.shared.Loader.hide();
            }
        });
    };
    CommentsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(false);
    };
    return CommentsPage;
}());
CommentsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-comments',template:/*ion-inline-start:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/comments/comments.html"*/'<ion-header>\n    <ion-toolbar color="primary">\n        <button ion-button icon-only menuToggle="false" color="white" (click)="dismiss()">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n        <ion-title>\n            Comments\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-list>\n        <ion-card class="home-listing"> \n              <ion-item class="user-block" *ngIf="gossip.is_anonymous != \'1\'">\n                <ion-avatar item-left  (click)="userProfile(gossip.author.ID)">\n                    <img [src]="gossip.author.img">\n                </ion-avatar>\n                <h2  (click)="userProfile(gossip.author.ID)">{{gossip.author.display_name}}</h2>\n                <p> {{gossip.comment_date}} </p> \n            </ion-item> \n              <ion-item class="user-block" *ngIf="gossip.is_anonymous == \'1\'">\n                <ion-avatar item-left>\n                    <img src="assets/img/anonymous.jpg">\n                </ion-avatar>\n                <h2>Anonymous</h2>\n                <p> {{gossip.created_at}} </p> \n            </ion-item> \n           <ion-item class="border-top">\n                <ion-avatar item-left (click)="entityProfile(gossip.gossip_about.ID)">\n                    <img [src]="gossip.gossip_about.img">\n                </ion-avatar>\n                <h2>{{gossip.gossip_about.entity}}</h2>\n                <p>{{gossip.category[0].name}}</p>\n                <div class="category-icon">\n                    <img src="assets/img/hated.png" *ngIf="gossip.feedback_type == 1" alt="" class="bookmark-btn">\n                    <img src="assets/img/loved.png" *ngIf="gossip.feedback_type == 0" alt="" class="bookmark-btn">\n                </div>\n            </ion-item>\n            <ion-card-content>\n                <p>\n                    {{gossip.content}}\n                </p>\n                <img *ngIf="gossip.img" [src]="gossip.img" (click)="displayImage(gossip.img,gossip.title)">\n                <div class="news-display" *ngIf="gossip.news_title">\n                       <span class="bold" style="margin-left: 0px">Source - </span> {{gossip.news_title}}\n                </div>\n                <p text-right class="gossip-id">Gossip #{{gossip.id}}</p>\n            </ion-card-content> \n            <ion-list class="comments">\n                <ion-item class="border-top">\n                    <ion-row>\n                        <ion-col col-10 class="p0">\n                            <textarea rows="2" class="w100 textarea" [(ngModel)]="commentContent" placeholder="Write comment"></textarea>\n                        </ion-col>\n                        <ion-col col-2 class="send-btn-wrap">\n                            <div> \n                                <button style="background-color: #ae00ff !important;" class="send-btn" [disabled]="!commentContent" (click)="insertComment(commentContent)" ion-button icon-only color="primary">\n                             <ion-icon name="send"></ion-icon>\n                         </button>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-item>\n                <ion-list-header class="mb0 pl8">\n                    Recent Comments\n                </ion-list-header>\n                <ion-item *ngFor="let comment of comments">\n                    <ion-avatar item-left (click)="userProfile(comment.author.ID)">\n                        <img [src]="comment.author.img" class="user-radius">\n                    </ion-avatar>\n                    <h2 (click)="userProfile(comment.author.ID)">{{comment.author.display_name}}</h2>\n                    <h4 class="comment-date">{{comment.comment_date | date:\'medium\'}}</h4> \n                    <p class="comment"> \n                        {{comment.comment_content}}\n                    </p> \n                </ion-item>\n                <div  center text-center class="no-data" *ngIf="!comments?.length">No comments found.</div>\n\n            </ion-list>\n        </ion-card>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/comments/comments.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_api_provider__["a" /* MongerApi */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_api_provider__["a" /* MongerApi */]])
], CommentsPage);

//# sourceMappingURL=comments.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_shared_provider__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_provider__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_comments_comments__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_add_gossip_add_gossip__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NewsComponent = (function () {
    function NewsComponent(shared, api, modal) {
        this.shared = shared;
        this.api = api;
        this.modal = modal;
    }
    NewsComponent.prototype.addGossips = function (news) {
        var _this = this;
        this.shared.Loader.show();
        this.api.searchEntity(news.title, 'news').subscribe(function (response) {
            _this.shared.Loader.hide();
            try {
                if (response.length) {
                    _this.shared.Toast.show('Gossip about this news already exist, Please add comment to this gossip', null, 'top', true);
                    _this.openGossip(response[0].id);
                }
                else {
                    if (!_this.entityId) {
                        _this.checkForAvailability(news);
                    }
                    else {
                        _this.createGossip(news);
                    }
                }
            }
            catch (exception) {
                if (!_this.entityId) {
                    _this.checkForAvailability(news);
                }
                else {
                    _this.createGossip(news);
                }
            }
        }, function (err) {
            _this.shared.Loader.hide();
            if (!_this.entityId) {
                _this.checkForAvailability(news);
            }
            else {
                _this.createGossip(news);
            }
        });
    };
    NewsComponent.prototype.openGossip = function (gossipId) {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__pages_comments_comments__["a" /* CommentsPage */], { id: gossipId });
        modal.present();
    };
    NewsComponent.prototype.checkForAvailability = function (news) {
        var _this = this;
        this.shared.Loader.show();
        this.api.searchEntityAvailability(this.newsText).subscribe(function (response) {
            _this.shared.Loader.hide();
            try {
                if (response.length) {
                    _this.entityId = response[0].id;
                }
            }
            catch (exception) {
                console.warn(exception);
            }
            _this.createGossip(news);
        }, function (err) {
            _this.shared.Loader.hide();
            _this.createGossip(news);
        });
    };
    NewsComponent.prototype.createGossip = function (news) {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_5__pages_add_gossip_add_gossip__["a" /* AddGossipPage */], { type: null, id: this.entityId ? this.entityId : 460, news: news });
        modal.present();
    };
    return NewsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_rxjs__["Observable"])
], NewsComponent.prototype, "newsList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], NewsComponent.prototype, "entityId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], NewsComponent.prototype, "newsText", void 0);
NewsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'news',template:/*ion-inline-start:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/components/news/news.html"*/'<div class="mt10">\n  <ion-card *ngFor="let news of newsList" class="news-card">\n    <ion-card-content class="news-content">\n      {{news?.title}}\n    </ion-card-content>\n    <ion-col class="p0">\n      <button color="dark" class="add-gossip" ion-button icon-left clear small (click)="addGossips(news)"> \n                      <ion-icon ios="ios-add" md="md-add" class="bold"></ion-icon>\n                      <span class="mt2">Gossip about this!</span>\n                      <ion-icon name="arrow-round-forward" class="ml8 news-arrow"></ion-icon>\n    </button>\n    </ion-col>\n  </ion-card>\n</div>'/*ion-inline-end:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/components/news/news.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_1__providers_shared_provider__["a" /* SharedProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_api_provider__["a" /* MongerApi */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ModalController */]])
], NewsComponent);

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_provider__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_provider__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_entity_profile_entity_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_comments_comments__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_gossips_gossips__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__request_request__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SearchPage = (function () {
    function SearchPage(sanitizer, modal, viewCtrl, shared, statusBar, navParams, api, navCtrl) {
        this.sanitizer = sanitizer;
        this.modal = modal;
        this.viewCtrl = viewCtrl;
        this.shared = shared;
        this.statusBar = statusBar;
        this.navParams = navParams;
        this.api = api;
        this.navCtrl = navCtrl;
        this.users = [];
        this.results = [];
        this.geoNews = [];
        this.loadingData = false;
        this.showNotFound = false;
        this.type = 'entity';
        this.param = 'entity';
        this.news = false;
        this._isEdding = false;
        this.queryText = '';
        this.param = this.navParams.get('source');
        if (this.navParams.get('source')) {
            this._isEdding = true;
        }
        if (this.navParams.get('news')) {
            this.news = true;
            this.type = 'news';
            this.param = 'news';
        }
    }
    SearchPage.prototype.ionViewDidEnter = function () {
        var elem = document.querySelector('page-search input');
        if (elem) {
            elem.focus();
        }
        this.statusBar.backgroundColorByHexString('#e0e0e0');
    };
    SearchPage.prototype.ionViewWillLeave = function () {
        this.statusBar.backgroundColorByHexString(__WEBPACK_IMPORTED_MODULE_8__providers_config__["d" /* statusBarColor */]);
    };
    SearchPage.prototype.clearUsers = function () {
        this.users = [];
    };
    SearchPage.prototype.searchNews = function (test) {
        var _this = this;
        this.loadingData = true;
        this.api.searchNews(test).subscribe(function (data) {
            try {
                if (!data.items.length) {
                    _this.showNotFound = true;
                }
            }
            catch (exception) {
                console.error(exception);
            }
            _this.geoNews = data.items;
            _this.loadingData = false;
        }, function (err) {
            _this.loadingData = false;
        });
    };
    SearchPage.prototype.searchEntity = function () {
        var _this = this;
        this.showNotFound = false;
        if (!this.queryText) {
            return false;
        }
        this.loadingData = true;
        this.api.searchEntity(this.queryText, this.type).subscribe(function (data) {
            _this.results = data;
            try {
                if (!_this.results.length) {
                    _this.showNotFound = true;
                }
            }
            catch (exception) {
                console.error(exception);
            }
            _this.loadingData = false;
        }, function (err) {
            console.error(err);
            _this.loadingData = false;
        });
    };
    SearchPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    SearchPage.prototype.entitySelected = function (data) {
        if (this._isEdding) {
            this.dismiss(data);
        }
        else {
            var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_5__pages_entity_profile_entity_profile__["a" /* EntityProfilePage */], { id: data.id });
            modal.present();
        }
    };
    SearchPage.prototype.gossipSelected = function (id) {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_6__pages_comments_comments__["a" /* CommentsPage */], { id: id });
        modal.present();
    };
    SearchPage.prototype.categorySelected = function (gossip) {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_7__pages_gossips_gossips__["a" /* GossipsPage */], { data: gossip });
        modal.present();
    };
    SearchPage.prototype.selectChange = function () {
        this.results = [];
        this.queryText = '';
    };
    SearchPage.prototype.createNewEntity = function (entityText) {
        var _this = this;
        this.shared.Loader.show();
        this.api.searchEntityAvailability(entityText).subscribe(function (response) {
            _this.shared.Loader.hide();
            try {
                if (response.length) {
                    _this.shared.Toast.show("Entity with this name already exists, Please add gossip to this entity", null, 'top', true);
                    _this.openEntity(response[0].id);
                }
                else {
                    _this.createEntity(entityText);
                }
            }
            catch (exception) {
                _this.createEntity(entityText);
            }
        }, function (err) {
            _this.shared.Loader.hide();
            _this.createEntity(entityText);
        });
    };
    SearchPage.prototype.openEntity = function (entityId) {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_5__pages_entity_profile_entity_profile__["a" /* EntityProfilePage */], { id: entityId });
        modal.present();
    };
    SearchPage.prototype.createEntity = function (entityName) {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_10__request_request__["a" /* RequestPage */], { type: 'modal', name: entityName });
        modal.present();
    };
    SearchPage.prototype.getBackground = function (image) {
        if (!image) {
            return this.sanitizer.bypassSecurityTrustStyle("linear-gradient( rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5))");
        }
        return this.sanitizer.bypassSecurityTrustStyle("linear-gradient( rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(" + image + ")");
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_api_provider__["a" /* MongerApi */]],template:/*ion-inline-start:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/search/search.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-searchbar color="primary" *ngIf="param != \'news\'" [(ngModel)]="queryText" [debounce]="250" (ionInput)="searchEntity()"\n            placeholder="Search.." showCancelButton="true" (ionCancel)="dismiss()" autocomplete="off" autocorrect="off" animated="true">\n        </ion-searchbar>\n        <form #form="ngForm" (ngSubmit)="searchNews(newsText)">\n            <ion-row class="p0 m0" *ngIf="param == \'news\'">\n                <ion-col class="p0 m0" col-10>\n                    <ion-searchbar color="primary" [(ngModel)]="newsText" name="newsText" placeholder="Search the web.." showCancelButton="true"\n                        (ionCancel)="dismiss()" autocomplete="off" autocorrect="off" animated="true">\n                    </ion-searchbar>\n                </ion-col>\n                <ion-col class="p0 m0" col-2>\n                    <button type="submit" [disabled]="!newsText" ion-button icon-only class="w100 h100 p0 m0">\n                <ion-icon name="search" *ngIf="!loadingData"></ion-icon>\n                <ion-spinner class="newsLoader" *ngIf="loadingData"  color="whitec" icon="android"></ion-spinner>            \n            </button>\n                </ion-col>\n            </ion-row>\n        </form>\n        <ion-spinner class="filterSpinner" *ngIf="loadingData && param != \'news\'" color="primary" icon="android"></ion-spinner>\n    </ion-toolbar>\n</ion-header>\n<ion-content class="outer-content">\n    <div class="" *ngIf="param != \'gossip\' && param != \'news\'">\n        <ion-select interface="popover" name="param" (ionChange)="selectChange()" class="full-width-select" [(ngModel)]="type">\n            <ion-option value="gossip">Gossip</ion-option>\n            <ion-option value="entity">Entity</ion-option>\n            <ion-option value="categories">Category</ion-option>\n        </ion-select>\n    </div>\n    <ion-list *ngIf="type == \'entity\'">\n        <ion-item (click)="entitySelected(result)" *ngFor="let result of results">\n            <ion-avatar item-left>\n                <img [src]="result.img">\n            </ion-avatar>\n            <h2>{{result.title}}</h2>\n            <p>{{result.category[0].name}}</p>\n        </ion-item>\n    </ion-list>\n    <ion-list *ngIf="type == \'gossip\'">\n        <ion-card class="home-listing" (click)="gossipSelected(gossip.id)" *ngFor="let gossip of results">\n            <ion-item class="border-top">\n                <ion-avatar item-left>\n                    <img [src]="gossip.gossip_about.img">\n                </ion-avatar>\n                <h2>{{gossip.gossip_about.entity}}</h2>\n                <p>{{gossip.category[0].name}}</p>\n                <div class="category-icon">\n                    <img src="assets/img/hated.png" alt="neg" *ngIf="gossip.feedback_type == 1" class="bookmark-btn">\n                    <img src="assets/img/loved.png" alt="pos" *ngIf="gossip.feedback_type == 0" class="bookmark-btn">\n                </div>\n            </ion-item>\n            <ion-card-content>\n                <p class="oneLiner">\n                    {{gossip.content}}\n                </p>\n                <p text-right class="gossip-id">Gossip #{{gossip.id}}</p>\n            </ion-card-content>\n        </ion-card>\n\n    </ion-list>\n    <ion-list *ngIf="type == \'categories\'">\n        <div class="category">\n            <ion-row>\n                <ion-col col-6 col-md-4 *ngFor="let category of results">\n                    <ion-card class="m0" (click)="categorySelected(category)">\n                        <div class="category-content" [style.background-image]="getBackground(category.attachment)">\n                            <div class="card-title">{{category.name}}</div>\n                        </div>\n                        <div class="entity-count border-right">\n                            {{category.count}} {{category.count > 1 ? \'Entities\' : \'Entity\'}}\n                        </div>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n        </div>\n    </ion-list>\n    <div *ngIf="type == \'news\'" text-center>\n        <news [newsList]="geoNews" [newsText]="newsText"></news>\n        <button ion-button icon-left outline (click)="createNewEntity(newsText)" *ngIf="!geoNews?.length && newsText" color="primary" class="mt20 add-button ">\n            <ion-icon name="add"></ion-icon>\n            Create entity for &nbsp; <span class="bold capitalize italic">{{newsText}} </span> \n        </button>\n    </div>\n    <div *ngIf="showNotFound" class="listing-done" text-center padding>No result found.</div>\n</ion-content>'/*ion-inline-end:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/search/search.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_api_provider__["a" /* MongerApi */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserProfilePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreOptionProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terms_terms__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_provider__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_provider__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_config__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserProfilePage = UserProfilePage_1 = (function () {
    function UserProfilePage(popoverCtrl, globalProvider, navCtrl, navParams, app, viewCtrl, modal, api, shared) {
        this.popoverCtrl = popoverCtrl;
        this.globalProvider = globalProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.viewCtrl = viewCtrl;
        this.modal = modal;
        this.api = api;
        this.shared = shared;
        this.userDetail = {};
        this.showBack = false;
        this.segment = 'myGossips';
        this._checkCached = false;
        this._anyAction = false;
        this.submitted = false;
        if (this.navParams.get('userId') != this.globalProvider.userId) {
            this.id = this.navParams.get('userId');
        }
        if (this.navParams.get('userId')) {
            this.showBack = true;
        }
    }
    UserProfilePage.prototype.ionViewDidEnter = function () {
        if (this._checkCached) {
            this.ionViewDidLoad();
        }
        else {
            this._checkCached = true;
        }
    };
    UserProfilePage.prototype.updateUser = function (form) {
        // console.log(form.valid());
        // if (form.valid()) {
        //   this.api.updateProfile(form.first_name, form.last_name, form.mobile).subscribe(data => {
        //     console.log(data);
        //   }, err => {
        //     console.log(err);
        //   })
        // }
    };
    UserProfilePage.prototype.ionViewDidLoad = function () {
        this.getMyGossips(true);
        this.getMyFollowers();
        this.getMyFollowees();
        if (this.id) {
            this.getUserDetail();
        }
        else {
            this.userDetail = this.globalProvider.user;
            this.getMyEntity();
        }
    };
    UserProfilePage.prototype.displayImage = function (url, title) {
        this.shared.imageViewer.show(url, title);
    };
    UserProfilePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this._anyAction);
    };
    UserProfilePage.prototype.getMyEntity = function (loader) {
        var _this = this;
        this.api.getMyEntity(this.globalProvider.userId).subscribe(function (data) {
            _this.myEntity = data;
        }, function (err) {
            console.error(err);
        });
    };
    UserProfilePage.prototype.userProfile = function (id) {
        var _this = this;
        var modal = this.modal.create(UserProfilePage_1, { userId: id, });
        modal.onDidDismiss(function (data) {
            console.log(data);
            if (data) {
                _this.ionViewDidLoad();
            }
        });
        modal.present();
    };
    UserProfilePage.prototype.getMyGossips = function (loader) {
        var _this = this;
        if (loader && !this.myGossips) {
            this.shared.Loader.show();
        }
        this.api.getMyGossips(this.id).subscribe(function (data) {
            _this.myGossips = data;
            if (loader) {
                _this.shared.Loader.closeIfActive();
            }
        }, function (err) {
            if (loader) {
                _this.shared.Loader.closeIfActive();
            }
            console.error(err);
        });
    };
    UserProfilePage.prototype.getMyFollowers = function () {
        var _this = this;
        this.api.getMyFollowers(this.id).subscribe(function (data) {
            _this.myFollowers = data;
        }, function (err) {
            console.error(err);
        });
    };
    UserProfilePage.prototype.getUserDetail = function () {
        var _this = this;
        this.api.getUserDetail(this.id).subscribe(function (data) {
            _this.userDetail = data;
        }, function (err) {
            console.error(err);
        });
    };
    UserProfilePage.prototype.getMyFollowees = function () {
        var _this = this;
        this.api.getMyFollowees(this.id).subscribe(function (data) {
            _this.myFollowees = data;
        }, function (err) {
            console.error(err);
        });
    };
    UserProfilePage.prototype.follow = function (id, type) {
        var _this = this;
        this._anyAction = true;
        if (type == 'userDetail' && id) {
            this.userDetail.isFollowing = !this.userDetail.isFollowing;
        }
        this.api.followUser(id).subscribe(function (data) {
            if (_this.segment == 'following') {
                _this.getMyFollowees();
            }
            else if (_this.segment == 'followers') {
                _this.getMyFollowers();
            }
        }, function (err) {
            console.log(err);
        });
    };
    UserProfilePage.prototype.presentPopover = function (ev) {
        var popover = this.popoverCtrl.create(MoreOptionProfile);
        popover.present({
            ev: ev
        });
    };
    return UserProfilePage;
}());
UserProfilePage = UserProfilePage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-profile',template:/*ion-inline-start:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/user-profile/user-profile.html"*/'<ion-header>\n    <ion-toolbar no-border-bottom color="primary">\n        <button ion-button icon-only *ngIf="showBack" menuToggle="false" color="white" (click)="dismiss()">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n        <!--<ion-buttons end *ngIf="!id">\n            <button ion-button item-right outline small class="mark-complete logout-btn" (click)="logOut()"> \n        <span ion-text  class="clear-selection" >Logout</span> \n            </button>\n        </ion-buttons>-->\n         <ion-buttons end *ngIf="!id">\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-toolbar no-border-top color="primary">\n        <div width-profile center text-center class="user-block" color="primary">\n            <img [src]="userDetail.img || \'assets/img/user.png\'" (click)="displayImage(userDetail.img || \'assets/img/user.png\', userDetail.display_name)"\n                class="profile-pic" item-left />\n        </div>\n        <div no-border center text-center class="pl0 no-border-custom" color="primary">\n            <h2 class="user-name capitalize">{{userDetail.display_name}}</h2>\n        </div>\n        <div no-border center text-center class="pl0 mb8" color="primary">\n            <button ion-button outline small (click)="follow(userDetail.ID, \'userDetail\')" *ngIf="id" color="whitec">{{userDetail.isFollowing ? \'Unfollow\' : \'Follow\'}}</button>\n        </div>\n\n    </ion-toolbar>\n    <ion-scroll scrollX="true" style="height: 42px">\n\n        <ion-segment [(ngModel)]="segment" color="whitec">\n            <ion-segment-button value="myGossips">\n                Gossips ({{myGossips?.length}})\n            </ion-segment-button>\n            <ion-segment-button value="myEntity" *ngIf="!id">\n                Entities ({{myEntity?.length}})\n            </ion-segment-button>\n            <ion-segment-button value="followers">\n                Followers ({{myFollowers?.length}})\n            </ion-segment-button>\n            <ion-segment-button value="following">\n                Following ({{myFollowees?.length}})\n            </ion-segment-button>\n        </ion-segment>\n    </ion-scroll>\n    <gossip-card *ngIf="segment == \'myGossips\'" (dataUpdated)="getMyGossips()" [gossips]="myGossips"></gossip-card>\n    <entity-card *ngIf="segment == \'myEntity\' && !id" (dataUpdated)="getMyEntity()" [entities]="myEntity"></entity-card>\n\n    <ion-list class="users-wrapper mt10" *ngIf="segment == \'following\'">\n        <ion-card *ngFor="let myFollowee of myFollowees">\n            <ion-card-content class="p0">\n                <ion-row>\n                    <ion-col class="p0 sq-col" col-4 (click)="userProfile(myFollowee.ID)"> <img [src]="myFollowee.img" alt="" class="profile-pic"> </ion-col>\n                    <ion-col col-8 padding-left class="pl5">\n                        <div class="entity-title" (click)="userProfile(myFollowee.ID)">{{myFollowee.display_name}}</div>\n                        <div class="entity-status" *ngIf="myFollowee.ID != globalProvider.userId">\n                            <button ion-button small outline (click)="follow(myFollowee.ID)">{{myFollowee.isFollowing ? \'Unfollow\' : \'Follow\'}}</button> \n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-card-content>\n        </ion-card>\n        <div center text-center class="no-data" *ngIf="!myFollowees?.length">No data found.</div>\n    </ion-list>\n    <ion-list class="users-wrapper mt10" *ngIf="segment == \'followers\'">\n        <ion-card *ngFor="let myFollower of myFollowers">\n            <ion-card-content class="p0">\n                <ion-row>\n                    <ion-col class="p0 sq-col" col-4 (click)="userProfile(myFollower.ID)"> <img [src]="myFollower.img" alt="profile" class="profile-pic"> </ion-col>\n                    <ion-col col-8 padding-left class="pl5">\n                        <div class="entity-title" (click)="userProfile(myFollower.ID)">{{myFollower.display_name}}</div>\n                        <div class="entity-status" *ngIf="myFollower.ID != globalProvider.userId">\n                            <button ion-button small outline (click)="follow(myFollower.ID)">{{myFollower.isFollowing ? \'Unfollow\' : \'Follow\'}}</button>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-card-content>\n        </ion-card>\n        <div center text-center class="no-data" *ngIf="!myFollowers?.length">No data found.</div>\n\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/swapnilpatwa/Documents/ionic2/tgm/src/pages/user-profile/user-profile.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__providers_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_api_provider__["a" /* MongerApi */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_7__providers_config__["a" /* GlobalProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_api_provider__["a" /* MongerApi */],
        __WEBPACK_IMPORTED_MODULE_5__providers_shared_provider__["a" /* SharedProvider */]])
], UserProfilePage);

// popoverMoreoption
var MoreOptionProfile = (function () {
    function MoreOptionProfile(globalProvider, api, shared, app, modal, viewCtrl) {
        this.globalProvider = globalProvider;
        this.api = api;
        this.shared = shared;
        this.app = app;
        this.modal = modal;
        this.viewCtrl = viewCtrl;
        this.isMuted = globalProvider.isMuted;
    }
    MoreOptionProfile.prototype.toggleMute = function () {
        this.shared.LS.set('isMuted', !this.isMuted);
        this.globalProvider.toggleMute(!this.isMuted);
        this.isMuted = !this.isMuted;
        return true;
    };
    MoreOptionProfile.prototype.logOut = function () {
        var _this = this;
        this.viewCtrl.dismiss();
        this.shared.Alert.confirm('Do you want to log out?').then(function (res) {
            _this.api.logout().subscribe(function (response) {
                _this.shared.LS.remove('user');
                _this.globalProvider.dropAuthData();
                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__auth_auth__["a" /* AuthPage */]);
            }, function (err) {
                _this.shared.Toast.show('Oops! something went wrong. Please try again');
            });
        }, function (err) {
            console.log('user cancelled');
        });
    };
    MoreOptionProfile.prototype.about = function () {
        this.viewCtrl.dismiss();
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */]);
        modal.present();
    };
    MoreOptionProfile.prototype.terms = function () {
        this.viewCtrl.dismiss();
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__terms_terms__["a" /* TermsPage */]);
        modal.present();
    };
    return MoreOptionProfile;
}());
MoreOptionProfile = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n  <ion-list no-border>\n    <ion-list-header>\n      Action\n    </ion-list-header> \n    <ion-item (click)=\"toggleMute()\"> \n      <ion-label>\n         {{isMuted ? 'Unmute' : 'Mute'}} Sound\n      </ion-label>\n      <ion-icon [name]='isMuted ? \"md-notifications-off\" : \"md-notifications\"' item-start></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"about()\">\n      <ion-icon name='md-information-circle' item-start></ion-icon>\n      About Gossip Monger \n    </ion-item>\n    <ion-item (click)=\"terms()\">\n      <ion-icon name='md-paper' item-start></ion-icon>\n        Terms & Conditions  \n    </ion-item> \n    <ion-item (click)=\"logOut()\">\n      <ion-icon name='log-out' item-start></ion-icon>\n        Logout \n    </ion-item>\n  </ion-list>\n",
        providers: [__WEBPACK_IMPORTED_MODULE_5__providers_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_api_provider__["a" /* MongerApi */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_config__["a" /* GlobalProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_api_provider__["a" /* MongerApi */],
        __WEBPACK_IMPORTED_MODULE_5__providers_shared_provider__["a" /* SharedProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
], MoreOptionProfile);

var UserProfilePage_1;
//# sourceMappingURL=user-profile.js.map

/***/ })

},[281]);
//# sourceMappingURL=main.js.map