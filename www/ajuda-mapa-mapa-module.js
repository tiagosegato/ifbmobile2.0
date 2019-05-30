(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajuda-mapa-mapa-module"],{

/***/ "./src/app/ajuda/mapa/mapa.module.ts":
/*!*******************************************!*\
  !*** ./src/app/ajuda/mapa/mapa.module.ts ***!
  \*******************************************/
/*! exports provided: MapaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaPageModule", function() { return MapaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mapa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapa.page */ "./src/app/ajuda/mapa/mapa.page.ts");







var routes = [
    {
        path: '',
        component: _mapa_page__WEBPACK_IMPORTED_MODULE_6__["MapaPage"]
    }
];
var MapaPageModule = /** @class */ (function () {
    function MapaPageModule() {
    }
    MapaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mapa_page__WEBPACK_IMPORTED_MODULE_6__["MapaPage"]]
        })
    ], MapaPageModule);
    return MapaPageModule;
}());



/***/ }),

/***/ "./src/app/ajuda/mapa/mapa.page.html":
/*!*******************************************!*\
  !*** ./src/app/ajuda/mapa/mapa.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\" routerLink=\"/tabs/ajuda\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>Mapa</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <iframe width=\"100%\" height=\"50%\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"https://www.openstreetmap.org/export/embed.html?bbox=-47.88265585899353%2C-15.75520812640459%2C-47.8766691684723%2C-15.752311730160349&amp;layer=mapnik&amp;marker=-15.753759933445528%2C-47.87966251373291\"></iframe><br/><small><a href=\"https://www.openstreetmap.org/?mlat=-15.75376&amp;mlon=-47.87966#map=18/-15.75376/-47.87966\">Ver Mapa Ampliado</a></small>\n    <p><b>Endereço:</b></p>\n    <p>\n      Via L2 Norte, SGAN 610 (610 Norte), Módulo D, E, F e G.<br/>\n        CEP: 70830-450<br/>\n        Brasília/DF.\n      </p>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/ajuda/mapa/mapa.page.scss":
/*!*******************************************!*\
  !*** ./src/app/ajuda/mapa/mapa.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FqdWRhL21hcGEvbWFwYS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ajuda/mapa/mapa.page.ts":
/*!*****************************************!*\
  !*** ./src/app/ajuda/mapa/mapa.page.ts ***!
  \*****************************************/
/*! exports provided: MapaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaPage", function() { return MapaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MapaPage = /** @class */ (function () {
    function MapaPage() {
    }
    MapaPage.prototype.ngOnInit = function () {
    };
    MapaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mapa',
            template: __webpack_require__(/*! ./mapa.page.html */ "./src/app/ajuda/mapa/mapa.page.html"),
            styles: [__webpack_require__(/*! ./mapa.page.scss */ "./src/app/ajuda/mapa/mapa.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapaPage);
    return MapaPage;
}());



/***/ })

}]);
//# sourceMappingURL=ajuda-mapa-mapa-module.js.map