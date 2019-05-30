(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-logado-perfil-logado-module"],{

/***/ "./src/app/perfil-logado/perfil-logado.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/perfil-logado/perfil-logado.module.ts ***!
  \*******************************************************/
/*! exports provided: PerfilLogadoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilLogadoPageModule", function() { return PerfilLogadoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _perfil_logado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil-logado.page */ "./src/app/perfil-logado/perfil-logado.page.ts");







var routes = [
    {
        path: '',
        component: _perfil_logado_page__WEBPACK_IMPORTED_MODULE_6__["PerfilLogadoPage"]
    }
];
var PerfilLogadoPageModule = /** @class */ (function () {
    function PerfilLogadoPageModule() {
    }
    PerfilLogadoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_perfil_logado_page__WEBPACK_IMPORTED_MODULE_6__["PerfilLogadoPage"]]
        })
    ], PerfilLogadoPageModule);
    return PerfilLogadoPageModule;
}());



/***/ }),

/***/ "./src/app/perfil-logado/perfil-logado.page.html":
/*!*******************************************************!*\
  !*** ./src/app/perfil-logado/perfil-logado.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\" (click)=\"sair()\"> \n      <ion-icon name=\"log-out\"></ion-icon>\n    </ion-buttons>\n    <ion-title> Olá! </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <p> \"Login\" efetuado com sucesso. </p>\n  <p> Aprimorar... </p>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/perfil-logado/perfil-logado.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/perfil-logado/perfil-logado.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcmZpbC1sb2dhZG8vcGVyZmlsLWxvZ2Fkby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/perfil-logado/perfil-logado.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/perfil-logado/perfil-logado.page.ts ***!
  \*****************************************************/
/*! exports provided: PerfilLogadoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilLogadoPage", function() { return PerfilLogadoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var PerfilLogadoPage = /** @class */ (function () {
    function PerfilLogadoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PerfilLogadoPage.prototype.ngOnInit = function () {
    };
    PerfilLogadoPage.prototype.sair = function () {
        this.navCtrl.navigateForward("");
    };
    PerfilLogadoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-perfil-logado',
            template: __webpack_require__(/*! ./perfil-logado.page.html */ "./src/app/perfil-logado/perfil-logado.page.html"),
            styles: [__webpack_require__(/*! ./perfil-logado.page.scss */ "./src/app/perfil-logado/perfil-logado.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], PerfilLogadoPage);
    return PerfilLogadoPage;
}());



/***/ })

}]);
//# sourceMappingURL=perfil-logado-perfil-logado-module.js.map