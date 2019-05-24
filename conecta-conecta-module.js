(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conecta-conecta-module"],{

/***/ "./src/app/conecta/conecta.module.ts":
/*!*******************************************!*\
  !*** ./src/app/conecta/conecta.module.ts ***!
  \*******************************************/
/*! exports provided: ConectaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConectaPageModule", function() { return ConectaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _conecta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conecta.page */ "./src/app/conecta/conecta.page.ts");







var routes = [
    {
        path: '',
        component: _conecta_page__WEBPACK_IMPORTED_MODULE_6__["ConectaPage"]
    }
];
var ConectaPageModule = /** @class */ (function () {
    function ConectaPageModule() {
    }
    ConectaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_conecta_page__WEBPACK_IMPORTED_MODULE_6__["ConectaPage"]]
        })
    ], ConectaPageModule);
    return ConectaPageModule;
}());



/***/ }),

/***/ "./src/app/conecta/conecta.page.html":
/*!*******************************************!*\
  !*** ./src/app/conecta/conecta.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Conecta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list inset>\n\n    <ion-item>\n      <ion-label>E-mail</ion-label>\n      <ion-input type=\"email\" value=\"\" placeholder=\"E-mail\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Senha</ion-label>\n      <ion-input type=\"password\" value=\"\" placeholder=\"Senha\"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <ion-button color=\"success\" expand=\"block\" routerLink=\"/info-conecta\">\n      Login\n    </ion-button>\n\n    <ion-button color=\"success\" expand=\"block\" small fill=\"outline\" routerLink=\"#\">\n      Primeiro Acesso\n    </ion-button>\n    \n    <ion-button color=\"success\" expand=\"block\" small fill=\"outline\" routerLink=\"#\">\n      Esqueci a senha\n    </ion-button>\n    \n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/conecta/conecta.page.scss":
/*!*******************************************!*\
  !*** ./src/app/conecta/conecta.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmVjdGEvY29uZWN0YS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/conecta/conecta.page.ts":
/*!*****************************************!*\
  !*** ./src/app/conecta/conecta.page.ts ***!
  \*****************************************/
/*! exports provided: ConectaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConectaPage", function() { return ConectaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConectaPage = /** @class */ (function () {
    function ConectaPage() {
    }
    ConectaPage.prototype.ngOnInit = function () {
    };
    ConectaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-conecta',
            template: __webpack_require__(/*! ./conecta.page.html */ "./src/app/conecta/conecta.page.html"),
            styles: [__webpack_require__(/*! ./conecta.page.scss */ "./src/app/conecta/conecta.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConectaPage);
    return ConectaPage;
}());

/*
https://www.youtube.com/watch?v=4Li_FDCGi7E sideMenu +tabs. watch later
*/ 


/***/ })

}]);
//# sourceMappingURL=conecta-conecta-module.js.map