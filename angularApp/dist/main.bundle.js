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

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var browse_component_1 = __webpack_require__("../../../../../src/app/browse/browse.component.ts");
var listings_component_1 = __webpack_require__("../../../../../src/app/listings/listings.component.ts");
var routes = [
    { path: '', pathMatch: 'full', component: login_component_1.LoginComponent },
    { path: 'browse', component: browse_component_1.BrowseComponent },
    { path: 'listings', component: listings_component_1.ListingsComponent },
    { path: '**', redirectTo: '' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


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

module.exports = "<div class=\"container\">\n  <h1>Bicycle Marketplace</h1>\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var listing_service_1 = __webpack_require__("../../../../../src/app/services/listing.service.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var header_component_1 = __webpack_require__("../../../../../src/app/header/header.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var browse_component_1 = __webpack_require__("../../../../../src/app/browse/browse.component.ts");
var listings_component_1 = __webpack_require__("../../../../../src/app/listings/listings.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                login_component_1.LoginComponent,
                browse_component_1.BrowseComponent,
                listings_component_1.ListingsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpClientModule, app_routing_module_1.AppRoutingModule
            ],
            providers: [user_service_1.UserService, listing_service_1.ListingService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/browse/browse.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n\twidth: 200px;\n\tpadding: 10px;\n}\n\n.bike {\n\twidth: 220px;\n\tpadding: 10px;\n\tmargin: 20px;\n\tborder: 2px solid black;\n\tborder-radius: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/browse/browse.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<app-header></app-header>\n\tHi {{user.first_name}}!\n\t<br>\n\t<br>\n\t<div *ngIf=\"listings != []\">\n\t\t<h3>All Listings: </h3>\n\t\t<br>\n\t\t<form (submit)=\"onSubmitSearch()\">\n\t\t\t<!-- <p>Search: <input type=\"text\" name=\"search\" [(ngModel)]=\"search\"></p> -->\n\t\t\t<div class=\"input-group col-md-8\">\n\t\t\t      <input class=\"form-control rounded-0 py-2\" type=\"search\" name=\"search\" placeholder=\"Search all listings\" id=\"search\" [(ngModel)]=\"search\">\n\t\t\t      <span class=\"input-group-btn\">\n\t\t\t        <button class=\"btn btn-outline-secondary\" type=\"submit\">\n\t\t\t            <i class=\"fa fa-search\">Search</i>\n\t\t\t        </button>\n\t\t\t      </span>\n\t\t\t</div>\n\t\t\t<!-- <input type=\"submit\" value=\"Search\"> -->\n\t\t<br>\t\n\t\t</form>\n\t\t<div *ngFor=\"let listing of listings\" class=\"bike\">\n\t\t\t<img src=\"{{listing.imgUrl}}\" alt=\"listing image\">\n\t\t\t<h5>{{listing.title}}</h5>\n\t\t\t<p>{{listing.text}}</p>\n\t\t\t<h3>${{listing.price}}</h3>\n\t\t\t<p>{{listing.location}}</p>\n\t\t\t<div *ngIf=\"listing._user == user._id; else contactForm\">\n\t\t\t\t<form (submit)=\"onSubmitDelete(listing._id)\">\n\t\t\t\t\t<input style=\"color: red\" type=\"submit\" value=\"DELETE\">\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<ng-template #contactForm>\n\t\t\t    <form (submit)=\"onSubmitContact(listing._user, listing._id)\">\n\t\t\t    \t<input type=\"submit\" value=\"CONTACT\">\n\t\t\t    </form>\n\t\t\t    <br>\n\t\t\t    <div *ngIf=\"userContact != null && userContact.listing == listing._id\" style=\"font-size: 12px; color: red\">\n\t\t\t    \t<p>Name: {{userContact.first_name}}</p>\n\t\t\t    \t<p>Email: {{userContact.email}}</p>\n\t\t\t    </div>\n<!-- \t\t\t\t<script>\n\t\t\t\t    angular.module(\"browse\", []).controller('MyController', ['$scope',function($scope) {\n\t\t\t\t\t   \t\t$scope.clicked = function(){\n\t\t\t\t\t        \talert(\"Clicked\");\n\t\t\t\t\t    \t}\n\t\t\t\t</script> -->\n\t\t\t</ng-template>\n\t\t</div>\n\t</div>\t\t\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/browse/browse.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var listing_service_1 = __webpack_require__("../../../../../src/app/services/listing.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var BrowseComponent = /** @class */ (function () {
    function BrowseComponent(_listingService, _userService, _router) {
        this._listingService = _listingService;
        this._userService = _userService;
        this._router = _router;
    }
    BrowseComponent.prototype.ngOnInit = function () {
        this.listings = [];
        this.userContact = null;
        this.user = { first_name: "", last_name: "", email: "", password: "" };
        this.search = "";
        this.getUserFromService();
    };
    BrowseComponent.prototype.getUserFromService = function () {
        var _this = this;
        this._userService.getSession().subscribe(function (session) {
            if (session == null) {
                _this._router.navigate(['/']);
            }
            else {
                _this._userService.getUser(session).subscribe(function (data) {
                    console.log("Got user:", data);
                    _this.user = data[0];
                    _this.getAllListingsFromService();
                });
            }
        });
    };
    BrowseComponent.prototype.onSubmitContact = function (user, listing) {
        var _this = this;
        this._userService.getUser(user).subscribe(function (data) {
            console.log("Got user's contact info:", data);
            _this.userContact = data[0];
            _this.userContact.listing = listing;
        });
    };
    BrowseComponent.prototype.getAllListingsFromService = function () {
        var _this = this;
        this._listingService.getAllListings().subscribe(function (listings) {
            console.log("Got listings: ", listings);
            _this.listings = listings;
            _this.allListings = listings;
        });
    };
    BrowseComponent.prototype.onSubmitDelete = function (id) {
        var _this = this;
        this._listingService.removeListing(id).subscribe(function (data) {
            console.log("Deleted:", data);
            _this.getAllListingsFromService();
        });
    };
    BrowseComponent.prototype.onSubmitSearch = function () {
        if (this.search == "") {
            this.listings = this.allListings;
        }
        else {
            this.listings = [];
            for (var _i = 0, _a = this.allListings; _i < _a.length; _i++) {
                var listing = _a[_i];
                if (this.search == listing.title) {
                    console.log(this.search, listing.title);
                    this.listings.push(listing);
                }
            }
        }
    };
    BrowseComponent = __decorate([
        core_1.Component({
            selector: 'app-browse',
            template: __webpack_require__("../../../../../src/app/browse/browse.component.html"),
            styles: [__webpack_require__("../../../../../src/app/browse/browse.component.css")]
        }),
        __metadata("design:paramtypes", [listing_service_1.ListingService, user_service_1.UserService, router_1.Router])
    ], BrowseComponent);
    return BrowseComponent;
}());
exports.BrowseComponent = BrowseComponent;


/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n\twidth: 50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <img src=\"http://static1.squarespace.com/static/55085720e4b0813599644fae/5768549715d5db9b150af935/59669aa08419c2f5f147edd4/1499896693943/coding_dojo_logo_black.png?format=1000w\" alt=\"dojo logo\">\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/browse']\">Browse</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/listings']\">My Listings</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['']\">Log Off</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "../../../../../src/app/listings/listings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n\twidth: 200px;\n\tpadding: 10px;\n}\n\n.bike {\n\tpadding: 10px;\n\tmargin: 20px;\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listings/listings.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<app-header></app-header>\n\tHi {{user.first_name}}!\n\t<div>\n\t\t<form (submit)=\"onSubmit()\">\n\t\t\t<h3>Create Listing</h3>\n\t\t\t<div class=\"form-group row\">\n\t\t\t  <label for=\"example-text-input\" class=\"col-2 col-form-label\">Title:</label>\n\t\t\t  <div class=\"col-10\">\n\t\t\t    <input \n\t\t\t\t\ttype=\"text\" \n\t\t\t\t\tname=\"title\"\n\t\t\t\t\trequired \n\t\t\t\t\t[(ngModel)]=\"listing.title\"\n\t\t\t\t\t#title=\"ngModel\"\n\t\t\t\t>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group row\">\n\t\t\t  <label for=\"example-text-input\" class=\"col-2 col-form-label\">Text:</label>\n\t\t\t  <div class=\"col-10\">\n\t\t\t    <input \n\t\t\t\t\ttype=\"text\" \n\t\t\t\t\tname=\"text\"\n\t\t\t\t\trequired \n\t\t\t\t\t[(ngModel)]=\"listing.text\"\n\t\t\t\t\t#text=\"ngModel\"\n\t\t\t\t>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group row\">\n\t\t\t  <label for=\"example-text-input\" class=\"col-2 col-form-label\">Price:</label>\n\t\t\t  <div class=\"col-10\">\n\t\t\t    <input \n\t\t\t\t\ttype=\"text\" \n\t\t\t\t\tname=\"price\"\n\t\t\t\t\trequired \n\t\t\t\t\t[(ngModel)]=\"listing.price\"\n\t\t\t\t\t#price=\"ngModel\"\n\t\t\t\t>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group row\">\n\t\t\t  <label for=\"example-text-input\" class=\"col-2 col-form-label\">Location:</label>\n\t\t\t  <div class=\"col-10\">\n\t\t\t    <input \n\t\t\t\t\ttype=\"text\" \n\t\t\t\t\tname=\"location\"\n\t\t\t\t\trequired \n\t\t\t\t\t[(ngModel)]=\"listing.location\"\n\t\t\t\t\t#location=\"ngModel\"\n\t\t\t\t>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group row\">\n\t\t\t  <label for=\"example-text-input\" class=\"col-2 col-form-label\">Img Url:</label>\n\t\t\t  <div class=\"col-10\">\n\t\t\t    <input \n\t\t\t\t\ttype=\"text\" \n\t\t\t\t\tname=\"imgUrl\"\n\t\t\t\t\trequired \n\t\t\t\t\t[(ngModel)]=\"listing.imgUrl\"\n\t\t\t\t\t#imgUrl=\"ngModel\"\n\t\t\t\t>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Create</button>\n\n\t\t</form>\n\t</div>\n\t<br>\n\t<br>\n\t<div *ngIf=\"listings != []\">\n\t\t<h3>Edit/Delete Listings: </h3>\n\t\t<div *ngFor=\"let listing of listings\" class=\"bike\">\n\t\t\t<form (submit)=\"onSubmitEdit(listing)\">\n\t\t\t<p><strong>Edit Listing</strong></p>\n\t\t\t<div class=\"form-group row\">\n\t\t\t  <label for=\"example-text-input\" class=\"col-2 col-form-label\">Title:</label>\n\t\t\t  <div class=\"col-10\">\n\t\t\t    <input \n\t\t\t\t\ttype=\"text\" \n\t\t\t\t\tname=\"title\"\n\t\t\t\t\trequired \n\t\t\t\t\t[(ngModel)]=\"listing.title\"\n\t\t\t\t\t#title=\"ngModel\"\n\t\t\t\t>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group row\">\n\t\t\t  <label for=\"example-text-input\" class=\"col-2 col-form-label\">Text:</label>\n\t\t\t  <div class=\"col-10\">\n\t\t\t    <input \n\t\t\t\t\ttype=\"text\" \n\t\t\t\t\tname=\"text\"\n\t\t\t\t\trequired \n\t\t\t\t\t[(ngModel)]=\"listing.text\"\n\t\t\t\t\t#text=\"ngModel\"\n\t\t\t\t>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group row\">\n\t\t\t  <label for=\"example-text-input\" class=\"col-2 col-form-label\">Price:</label>\n\t\t\t  <div class=\"col-10\">\n\t\t\t    <input \n\t\t\t\t\ttype=\"text\" \n\t\t\t\t\tname=\"price\"\n\t\t\t\t\trequired \n\t\t\t\t\t[(ngModel)]=\"listing.price\"\n\t\t\t\t\t#price=\"ngModel\"\n\t\t\t\t>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group row\">\n\t\t\t  <label for=\"example-text-input\" class=\"col-2 col-form-label\">Location:</label>\n\t\t\t  <div class=\"col-10\">\n\t\t\t    <input \n\t\t\t\t\ttype=\"text\" \n\t\t\t\t\tname=\"location\"\n\t\t\t\t\trequired \n\t\t\t\t\t[(ngModel)]=\"listing.location\"\n\t\t\t\t\t#location=\"ngModel\"\n\t\t\t\t>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group row\">\n\t\t\t  <label for=\"example-text-input\" class=\"col-2 col-form-label\">Img Url:</label>\n\t\t\t  <div class=\"col-10\">\n\t\t\t    <input \n\t\t\t\t\ttype=\"text\" \n\t\t\t\t\tname=\"imgUrl\"\n\t\t\t\t\trequired \n\t\t\t\t\t[(ngModel)]=\"listing.imgUrl\"\n\t\t\t\t\t#imgUrl=\"ngModel\"\n\t\t\t\t>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<img src=\"{{listing.imgUrl}}\" alt=\"listing_image\"><br>\n\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Edit</button>\n\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/listings/listings.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var listing_service_1 = __webpack_require__("../../../../../src/app/services/listing.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var ListingsComponent = /** @class */ (function () {
    function ListingsComponent(_listingService, _userService, _router) {
        this._listingService = _listingService;
        this._userService = _userService;
        this._router = _router;
    }
    ListingsComponent.prototype.ngOnInit = function () {
        this.user = { first_name: "", last_name: "", email: "", password: "" };
        this.listing = { title: "", text: "", price: "", location: "", imgUrl: "" };
        this.listings = [];
        this.getUserFromService();
        // localStorage.setItem(key, val);
    };
    ListingsComponent.prototype.getUserFromService = function () {
        var _this = this;
        this._userService.getSession().subscribe(function (session) {
            if (session == null) {
                _this._router.navigate(['/']);
            }
            else {
                _this._userService.getUser(session).subscribe(function (data) {
                    console.log("Got user: ", data);
                    _this.user = data[0];
                    _this.getListingsForUser(_this.user._id);
                });
            }
        });
    };
    ListingsComponent.prototype.getListingsForUser = function (user) {
        var _this = this;
        this._listingService.getListingsForUser(user).subscribe(function (data) {
            console.log("Got listings for user: ", data);
            _this.listings = data;
        });
    };
    ListingsComponent.prototype.onSubmit = function () {
        var _this = this;
        this._listingService.createListing(this.listing).subscribe(function (data) {
            console.log("Listing recieved: ", data);
            _this.listing = { title: "", text: "", price: "", location: "", imgUrl: "" };
            _this.getListingsForUser(_this.user._id);
        });
    };
    ListingsComponent.prototype.onSubmitEdit = function (listing) {
        var _this = this;
        console.log("You are editing:", listing);
        this._listingService.editListing(listing).subscribe(function (data) {
            console.log("Listing recieved: ", data);
            _this.listing = { title: "", text: "", price: "", location: "", imgUrl: "" };
            _this.getListingsForUser(_this.user._id);
        });
    };
    ListingsComponent = __decorate([
        core_1.Component({
            selector: 'app-listings',
            template: __webpack_require__("../../../../../src/app/listings/listings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/listings/listings.component.css")]
        }),
        __metadata("design:paramtypes", [listing_service_1.ListingService, user_service_1.UserService, router_1.Router])
    ], ListingsComponent);
    return ListingsComponent;
}());
exports.ListingsComponent = ListingsComponent;


/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n\tpadding: 10px;\n}\n\nimg {\n\twidth: 200px;\n\tpadding: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<!-- BOTD -->\n\t<div>\n\t\t<h3>Bike of the Day!</h3>\n\t\t<img src=\"{{listing.imgUrl}}\" alt=\"listing image\">\n\t\t<h5>{{listing.title}}</h5>\n\t\t<p>{{listing.text}}</p>\n\t\t<h3>${{listing.price}}</h3>\n\t\t<p>{{listing.location}}</p>\n\t</div>\n\t<!-- LOGIN -->\n\t<h1>Login:</h1>\n<!-- \t{{logUser | json}} -->\n\n\t<div>\n\t\t<form id=\"login\" (submit)=\"onSubmitLogin()\">\n\t\t\t<div class=\"form-group row\">\n\t\t\t  <label for=\"example-text-input\" class=\"col-2 col-form-label\">Email:</label>\n\t\t\t  <div class=\"col-10\">\n\t\t\t    <input \n\t\t\t\t\ttype=\"text\" \n\t\t\t\t\tname=\"email\"\n\t\t\t\t\trequired \n\t\t\t\t\tminlength=\"2\" \n\t\t\t\t\tmaxlength=\"24\"\n\t\t\t\t\t[(ngModel)]=\"logUser.email\"\n\t\t\t\t\t#logEmail=\"ngModel\"\n\t\t\t\t>\n\t\t\t\t<div *ngIf=\"logEmail.errors\">\n\t\t\t\t\t<p *ngIf=\"logEmail.errors.required\" style=\"font-size:12px; color: red\">Please enter an email</p>\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group row\">\n\t\t\t  <label for=\"example-text-input\" class=\"col-2 col-form-label\">Password:</label>\n\t\t\t  <div class=\"col-10\">\n\t\t\t    <input \n\t\t\t\t\ttype=\"password\" \n\t\t\t\t\tname=\"password\"\n\t\t\t\t\trequired \n\t\t\t\t\tminlength=\"2\" \n\t\t\t\t\tmaxlength=\"24\"\n\t\t\t\t\t[(ngModel)]=\"logUser.password\"\n\t\t\t\t\t#logPassword=\"ngModel\"\n\t\t\t\t>\n\t\t\t\t<div *ngIf=\"logPassword.errors\">\n\t\t\t\t\t<p *ngIf=\"logPassword.errors.required\" style=\"font-size:12px; color: red\">Please enter a password</p>\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Login</button>\n\t\t</form>\n\t</div>\n\t<!-- REGISTRATION -->\n\t<h1>Register:</h1>\n\t<div>\n\n<!-- \t\t{{regUser | json}} -->\n\n\t\t<form id=\"registration\" (submit)=\"onSubmitRegistration()\">\n\t\t\t<div class=\"form-group row\">\n\t\t\t  <label for=\"example-text-input\" class=\"col-2 col-form-label\">First Name:</label>\n\t\t\t  <div class=\"col-10\">\n\t\t\t    <input \n\t\t\t\t\ttype=\"text\" \n\t\t\t\t\tname=\"first_name\"\n\t\t\t\t\trequired \n\t\t\t\t\tminlength=\"2\" \n\t\t\t\t\tmaxlength=\"24\"\n\t\t\t\t\t[(ngModel)]=\"regUser.first_name\"\n\t\t\t\t\t#first_name=\"ngModel\"\n\t\t\t\t>\n\t\t\t\t<div *ngIf=\"first_name.errors\">\n\t\t\t\t\t<p *ngIf=\"first_name.errors.required\" style=\"font-size:12px; color: red\">Please enter a first name</p>\n\t\t\t\t\t<p *ngIf=\"first_name.errors.minlength\" style=\"font-size:12px; color: red\">First name must be at least 2 characters long</p>\n\t\t\t\t</div>\n\t\t\t\t<p *ngIf=\"!first_name.errors\" style=\"font-size:12px; color: blue\">Good first name</p>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group row\">\n\t\t\t  <label for=\"example-text-input\" class=\"col-2 col-form-label\">Last Name:</label>\n\t\t\t  <div class=\"col-10\">\n\t\t\t    <input \n\t\t\t\t\ttype=\"text\" \n\t\t\t\t\tname=\"last_name\"\n\t\t\t\t\trequired \n\t\t\t\t\tminlength=\"2\" \n\t\t\t\t\tmaxlength=\"24\"\n\t\t\t\t\t[(ngModel)]=\"regUser.last_name\"\n\t\t\t\t\t#last_name=\"ngModel\"\n\t\t\t\t>\n\t\t\t\t<div *ngIf=\"last_name.errors\">\n\t\t\t\t\t<p *ngIf=\"last_name.errors.required\" style=\"font-size:12px; color: red\">Please enter a last name</p>\n\t\t\t\t\t<p *ngIf=\"last_name.errors.minlength\" style=\"font-size:12px; color: red\">Last name must be at least 2 characters long</p>\n\t\t\t\t</div>\n\t\t\t\t<p *ngIf=\"!last_name.errors\" style=\"font-size:12px; color: blue\">Good last name</p>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group row\">\n\t\t\t  <label for=\"example-text-input\" class=\"col-2 col-form-label\">Email: </label>\n\t\t\t  <div class=\"col-10\">\n\t\t\t    <input \n\t\t\t\t\ttype=\"text\" \n\t\t\t\t\tname=\"email\"\n\t\t\t\t\trequired \n\t\t\t\t\tminlength=\"2\" \n\t\t\t\t\tmaxlength=\"24\"\n\t\t\t\t\t[(ngModel)]=\"regUser.email\"\n\t\t\t\t\t#email=\"ngModel\"\n\t\t\t\t>\n\t\t\t\t<div *ngIf=\"email.errors\">\n\t\t\t\t\t<p *ngIf=\"email.errors.required\" style=\"font-size:12px; color: red\">Please enter an email</p>\n\t\t\t\t\t<p *ngIf=\"email.errors.minlength\" style=\"font-size:12px; color: red\">Email must be at least 2 characters long</p>\n\t\t\t\t</div>\n\t\t\t\t<p *ngIf=\"!email.errors\" style=\"font-size:12px; color: blue\">Good email</p>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group row\">\n\t\t\t  <label for=\"example-text-input\" class=\"col-2 col-form-label\">Password:</label>\n\t\t\t  <div class=\"col-10\">\n\t\t\t    <input \n\t\t\t\t\ttype=\"password\" \n\t\t\t\t\tname=\"password\"\n\t\t\t\t\trequired \n\t\t\t\t\tminlength=\"2\" \n\t\t\t\t\tmaxlength=\"24\"\n\t\t\t\t\t[(ngModel)]=\"regUser.password\"\n\t\t\t\t\t#password=\"ngModel\"\n\t\t\t\t>\n\t\t\t\t<div *ngIf=\"password.errors\">\n\t\t\t\t\t<p *ngIf=\"password.errors.required\" style=\"font-size:12px; color: red\">Please enter a password</p>\n\t\t\t\t\t<p *ngIf=\"password.errors.minlength\" style=\"font-size:12px; color: red\">Password must be at least 2 characters long</p>\n\t\t\t\t</div>\n\t\t\t\t<p *ngIf=\"!password.errors\" style=\"font-size:12px; color: blue\">Good password</p>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group row\">\n\t\t\t  <label for=\"example-text-input\" class=\"col-2 col-form-label\">Confirm password:</label>\n\t\t\t  <div class=\"col-10\">\n\t\t\t    <input \n\t\t\t\t\ttype=\"password\" \n\t\t\t\t\tname=\"confirm_pasword\"\n\t\t\t\t\trequired \n\t\t\t\t\tminlength=\"2\" \n\t\t\t\t\tmaxlength=\"24\"\n\t\t\t\t\t[(ngModel)]=\"regUser.confirm_pasword\"\n\t\t\t\t\t#confirm_pasword=\"ngModel\"\n\t\t\t\t>\n\t\t\t\t<div *ngIf=\"confirm_pasword.errors; else confirm\">\n\t\t\t\t\t<p *ngIf=\"confirm_pasword.errors.required\" style=\"font-size:12px; color: red\">Please confirm pasword</p>\n\t\t\t\t\t<p *ngIf=\"confirm_pasword.errors.minlength\" style=\"font-size:12px; color: red\">Confirmed pasword must be at least 2 characters long</p>\n\t\t\t\t</div>\n\n\t\t\t\t<ng-template #confirm>\n\t\t\t\t    <p *ngIf=\"regUser.confirm_pasword !== regUser.password\" style=\"font-size:12px; color: red\">Passwords must match</p>\n\t\t\t\t</ng-template>\n\t\t\t\t\n\t\t\t\t<p *ngIf=\"regUser.confirm_pasword === regUser.password\" style=\"font-size:12px; color: blue\">Passwords match</p>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Register</button>\n\t\t</form>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var listing_service_1 = __webpack_require__("../../../../../src/app/services/listing.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_listingService, _userService, _router) {
        this._listingService = _listingService;
        this._userService = _userService;
        this._router = _router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this._userService.logoutUser().subscribe(function (data) {
            console.log(data);
            if (data == null) {
                console.log("User logged out");
            }
        });
        this.getBikeOfTheDay();
        this.listing = {};
        this.logUser = { email: "", password: "" };
        this.regUser = { first_name: "", last_name: "", email: "", password: "" };
    };
    LoginComponent.prototype.getBikeOfTheDay = function () {
        var _this = this;
        this._listingService.getAllListings().subscribe(function (listings) {
            console.log("Got listings: ", listings);
            var random = Math.floor(Math.random() * listings.length);
            _this.listing = listings[random];
            console.log(_this.listing);
        });
    };
    LoginComponent.prototype.onSubmitRegistration = function () {
        var _this = this;
        this._userService.createUser(this.regUser).subscribe(function (data) {
            console.log("Got data back:", data);
            // this.user = {first_name: "", last_name: "", email: "", password: ""};
            _this._router.navigate(['/browse']);
        });
    };
    LoginComponent.prototype.onSubmitLogin = function () {
        var _this = this;
        this._userService.loginUser(this.logUser).subscribe(function (data) {
            console.log("Got data back:", data);
            _this.logUser = { email: "", password: "" };
            _this._router.navigate(['/browse']);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [listing_service_1.ListingService, user_service_1.UserService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/services/listing.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var ListingService = /** @class */ (function () {
    function ListingService(_http) {
        this._http = _http;
    }
    ListingService.prototype.createListing = function (listing) {
        return this._http.post("listing/create", listing);
    };
    ListingService.prototype.getListingsForUser = function (user) {
        return this._http.get("listing/" + user);
    };
    ListingService.prototype.getAllListings = function () {
        return this._http.get("listing");
    };
    ListingService.prototype.editListing = function (listing) {
        return this._http.put("listing/edit", listing);
    };
    ListingService.prototype.removeListing = function (id) {
        return this._http.delete("listing/remove/" + id);
    };
    ListingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ListingService);
    return ListingService;
}());
exports.ListingService = ListingService;


/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.createUser = function (user) {
        return this._http.post("/user/create", user);
    };
    UserService.prototype.loginUser = function (user) {
        return this._http.post("/user/login", user);
    };
    UserService.prototype.getSession = function () {
        return this._http.get("user/session");
    };
    UserService.prototype.getUser = function (user) {
        return this._http.get("user/" + user);
    };
    UserService.prototype.logoutUser = function () {
        return this._http.get("user/logout");
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map