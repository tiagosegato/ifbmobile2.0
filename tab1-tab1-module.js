(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n\n      <ion-buttons slot=\"start\"> <!-- Botão do menu -->\n          <ion-button (click)=\"toggleMenu()\">\n            <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n\n      <!-- <ion-button ion-button icon-only menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </ion-button> -->\n            <ion-icon slot=\"end\" routerLink=\"/tabs/perfil\" name=\"ios-contact\"></ion-icon>\n    <ion-title>\n      IFB Mobile 2.0\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <h1 text-align=\"center\"> <b> IFB- Campus Brasília </b></h1>\n\n  <ion-card>\n    <a href=\"http://www.ifb.edu.br/brasilia/20295-curso-de-sistemas-para-internet-recebe-nota-maxima-no-inep\" target=\"_blank\">\n      <ion-img src=\"/assets/imgs/inep.JPG\"></ion-img>\n    </a>\n    <ion-card-header>\n      <ion-card-subtitle> Criada: Segunda, 01 de Abril de 2019, 17h09 </ion-card-subtitle>\n      <ion-card-title>\n         Curso de Sistemas para Internet recebe nota máxima no INEP\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n        <p>O Curso Superior de Tecnologia em Sistemas para Internet\n            ofertado pelo Campus Brasília do Instituto Federal de Brasília \n            recebeu a nota máxima (5)...</p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n      <a href=\"http://www.ifb.edu.br/brasilia/20295-curso-de-sistemas-para-internet-recebe-nota-maxima-no-inep\" target=\"_blank\">\n        <ion-img src=\"/assets/imgs/importante.png\"></ion-img>\n      </a>\n      <ion-card-header>\n        <ion-card-subtitle> Criada: Segunda, 01 de Abril de 2019, 17h09 </ion-card-subtitle>\n        <ion-card-title>\n           Curso de Sistemas para Internet recebe nota máxima no INEP\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n          <p>O Curso Superior de Tecnologia em Sistemas para Internet\n              ofertado pelo Campus Brasília do Instituto Federal de Brasília \n              recebeu a nota máxima (5)...</p>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <a href=\"http://www.ifb.edu.br/brasilia/20295-curso-de-sistemas-para-internet-recebe-nota-maxima-no-inep\" target=\"_blank\">\n          <ion-img src=\"/assets/imgs/importante.png\"></ion-img>\n        </a>\n        <ion-card-header>\n          <ion-card-subtitle> Criada: Segunda, 01 de Abril de 2019, 17h09 </ion-card-subtitle>\n          <ion-card-title>\n             Curso de Sistemas para Internet recebe nota máxima no INEP\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            <p>O Curso Superior de Tecnologia em Sistemas para Internet\n                ofertado pelo Campus Brasília do Instituto Federal de Brasília \n                recebeu a nota máxima (5)...</p>\n        </ion-card-content>\n      </ion-card>\n      \n</ion-content>"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\nion-icon {\n  font-size: 30px; }\n\nh1 {\n  color: #298b39; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aWFnb3NlZ2F0by9pb25pYy9pZmJtb2JpbGUyLjAvc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7IFxufVxuXG5oMSB7XG4gIGNvbG9yOiAjMjk4YjM5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var Tab1Page = /** @class */ (function () {
    function Tab1Page(menuCtrl, navCtrl) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
    }
    Tab1Page.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map