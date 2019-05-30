(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conecta-info-conecta-info-conecta-module"],{

/***/ "./src/app/conecta/info-conecta/info-conecta.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/conecta/info-conecta/info-conecta.module.ts ***!
  \*************************************************************/
/*! exports provided: InfoConectaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoConectaPageModule", function() { return InfoConectaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _info_conecta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info-conecta.page */ "./src/app/conecta/info-conecta/info-conecta.page.ts");







var routes = [
    {
        path: '',
        component: _info_conecta_page__WEBPACK_IMPORTED_MODULE_6__["InfoConectaPage"],
        children: [
            {
                path: '',
                loadChildren: '',
            }
        ]
    }
];
var InfoConectaPageModule = /** @class */ (function () {
    function InfoConectaPageModule() {
    }
    InfoConectaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_info_conecta_page__WEBPACK_IMPORTED_MODULE_6__["InfoConectaPage"]]
        })
    ], InfoConectaPageModule);
    return InfoConectaPageModule;
}());



/***/ }),

/***/ "./src/app/conecta/info-conecta/info-conecta.page.html":
/*!*************************************************************!*\
  !*** ./src/app/conecta/info-conecta/info-conecta.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"end\" (click)=\"sair()\">\n          <ion-icon name=\"log-out\" >  </ion-icon>\n      </ion-buttons>\n    <ion-title>Conecta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h2>CONECTA IF</h2>\n  <ion-button color=\"primary\" size=\"large\"><ion-icon name=\"calendar\"></ion-icon>EVENTOS</ion-button>\n  <ion-button color=\"primary\" size=\"large\"><ion-icon name=\"list-box\"></ion-icon>MINHAS INSCRIÇÕES</ion-button>\n  <ion-button color=\"primary\" size=\"large\"><ion-icon name=\"map\"></ion-icon>MAPA</ion-button>\n  <ion-button color=\"primary\" size=\"large\"><ion-icon name=\"paper\"></ion-icon>PROGRAMAÇÃO</ion-button>\n  <ion-button color=\"primary\" size=\"large\"><ion-icon name=\"help-circle\"></ion-icon>SAIBA MAIS</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/conecta/info-conecta/info-conecta.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/conecta/info-conecta/info-conecta.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center; }\n\nion-button {\n  margin: 2px;\n  padding: 2px;\n  width: 100%;\n  height: 10%;\n  float: left;\n  position: relative; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmNvcy9Eb2N1bWVudHMvUHJvamVjdHMvaWZibW9iaWxlMi4wL3NyYy9hcHAvY29uZWN0YS9pbmZvLWNvbmVjdGEvaW5mby1jb25lY3RhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb25lY3RhL2luZm8tY29uZWN0YS9pbmZvLWNvbmVjdGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWJ1dHRvbntcbiAgICBtYXJnaW46IDJweDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/conecta/info-conecta/info-conecta.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/conecta/info-conecta/info-conecta.page.ts ***!
  \***********************************************************/
/*! exports provided: InfoConectaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoConectaPage", function() { return InfoConectaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var InfoConectaPage = /** @class */ (function () {
    function InfoConectaPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    InfoConectaPage.prototype.ngOnInit = function () {
    };
    InfoConectaPage.prototype.sair = function () {
        this.navCtrl.navigateForward("");
    };
    InfoConectaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info-conecta',
            template: __webpack_require__(/*! ./info-conecta.page.html */ "./src/app/conecta/info-conecta/info-conecta.page.html"),
            styles: [__webpack_require__(/*! ./info-conecta.page.scss */ "./src/app/conecta/info-conecta/info-conecta.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], InfoConectaPage);
    return InfoConectaPage;
}());



/***/ })

}]);
//# sourceMappingURL=conecta-info-conecta-info-conecta-module.js.map