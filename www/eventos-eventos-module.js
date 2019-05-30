(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["eventos-eventos-module"],{

/***/ "./src/app/eventos/eventos.module.ts":
/*!*******************************************!*\
  !*** ./src/app/eventos/eventos.module.ts ***!
  \*******************************************/
/*! exports provided: EventosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosPageModule", function() { return EventosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _eventos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventos.page */ "./src/app/eventos/eventos.page.ts");







var routes = [
    {
        path: '',
        component: _eventos_page__WEBPACK_IMPORTED_MODULE_6__["EventosPage"]
    }
];
var EventosPageModule = /** @class */ (function () {
    function EventosPageModule() {
    }
    EventosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_eventos_page__WEBPACK_IMPORTED_MODULE_6__["EventosPage"]]
        })
    ], EventosPageModule);
    return EventosPageModule;
}());



/***/ }),

/***/ "./src/app/eventos/eventos.page.html":
/*!*******************************************!*\
  !*** ./src/app/eventos/eventos.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title> Eventos </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-img src=\"/assets/imgs/conecta_chamada.png\"></ion-img>\n    <ion-card-header>\n    <ion-card-subtitle>Eventos 2019</ion-card-subtitle>\n    <ion-card-title>ConectaIF - 2019</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laboriosam reiciendis provident ex perferendis molestiae fuga optio iste! Odio possimus voluptas non natus perspiciatis beatae hic numquam repellat. Laborum, nesciunt.\n  </ion-card-content>\n  <ion-button color=\"primary\" fill=\"clear\" routerLink=\"/conecta\">Ver mais</ion-button>\n  <ion-button color=\"primary\" fill=\"clear\"routerLink=\"/conecta\">Inscreva-se</ion-button>\n</ion-card>\n\n<ion-card>\n    <img src=\"/assets/imgs/importante.png\">\n    <ion-card-header>\n      <ion-card-subtitle>Eventos 2019</ion-card-subtitle>\n      <ion-card-title> 2019</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laboriosam reiciendis provident ex perferendis molestiae fuga optio iste! Odio possimus voluptas non natus perspiciatis beatae hic numquam repellat. Laborum, nesciunt.\n    </ion-card-content>\n    <ion-button color=\"primary\" fill=\"clear\">Ver mais</ion-button>\n    <ion-button color=\"primary\" fill=\"clear\">Inscreva-se</ion-button>\n  </ion-card>\n  \n  <ion-card>\n      <img src=\"/assets/imgs/importante.png\">\n      <ion-card-header>\n        <ion-card-subtitle>Eventos 2019</ion-card-subtitle>\n        <ion-card-title> 2019</ion-card-title>\n      </ion-card-header>\n    \n      <ion-card-content>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laboriosam reiciendis provident ex perferendis molestiae fuga optio iste! Odio possimus voluptas non natus perspiciatis beatae hic numquam repellat. Laborum, nesciunt.\n      </ion-card-content>\n      <ion-button color=\"primary\" fill=\"clear\">Ver mais</ion-button>\n      <ion-button color=\"primary\" fill=\"clear\">Inscreva-se</ion-button>\n    </ion-card>\n\n    <ion-card>\n        <img src=\"/assets/imgs/importante.png\">\n        <ion-card-header>\n          <ion-card-subtitle>Eventos 2019</ion-card-subtitle>\n          <ion-card-title> 2019</ion-card-title>\n        </ion-card-header>\n      \n        <ion-card-content>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laboriosam reiciendis provident ex perferendis molestiae fuga optio iste! Odio possimus voluptas non natus perspiciatis beatae hic numquam repellat. Laborum, nesciunt.\n        </ion-card-content>\n        <ion-button color=\"primary\" fill=\"clear\">Ver mais</ion-button>\n        <ion-button color=\"primary\" fill=\"clear\">Inscreva-se</ion-button>\n      </ion-card>\n      </ion-content>\n      "

/***/ }),

/***/ "./src/app/eventos/eventos.page.scss":
/*!*******************************************!*\
  !*** ./src/app/eventos/eventos.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50b3MvZXZlbnRvcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/eventos/eventos.page.ts":
/*!*****************************************!*\
  !*** ./src/app/eventos/eventos.page.ts ***!
  \*****************************************/
/*! exports provided: EventosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosPage", function() { return EventosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var EventosPage = /** @class */ (function () {
    function EventosPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EventosPage.prototype.ngOnInit = function () {
    };
    EventosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-eventos',
            template: __webpack_require__(/*! ./eventos.page.html */ "./src/app/eventos/eventos.page.html"),
            styles: [__webpack_require__(/*! ./eventos.page.scss */ "./src/app/eventos/eventos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], EventosPage);
    return EventosPage;
}());



/***/ })

}]);
//# sourceMappingURL=eventos-eventos-module.js.map