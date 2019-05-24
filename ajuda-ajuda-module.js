(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajuda-ajuda-module"],{

/***/ "./src/app/ajuda/ajuda.module.ts":
/*!***************************************!*\
  !*** ./src/app/ajuda/ajuda.module.ts ***!
  \***************************************/
/*! exports provided: AjudaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjudaPageModule", function() { return AjudaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ajuda_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ajuda.page */ "./src/app/ajuda/ajuda.page.ts");







var routes = [
    {
        path: '',
        component: _ajuda_page__WEBPACK_IMPORTED_MODULE_6__["AjudaPage"]
    }
];
var AjudaPageModule = /** @class */ (function () {
    function AjudaPageModule() {
    }
    AjudaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ajuda_page__WEBPACK_IMPORTED_MODULE_6__["AjudaPage"]]
        })
    ], AjudaPageModule);
    return AjudaPageModule;
}());



/***/ }),

/***/ "./src/app/ajuda/ajuda.page.html":
/*!***************************************!*\
  !*** ./src/app/ajuda/ajuda.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Ajuda</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item routerLink=\"/entrar\">\n    Como estudar no IFB?\n  </ion-item>\n\n  <ion-item routerLink=\"/publico\">\n    O IFB é público?\n  </ion-item>\n\n  <ion-item routerLink=\"/tabs/tab2\">\n    Quais os cursos?\n  </ion-item>\n\n  <ion-item routerLink=\"/mapa\">\n    Onde fica o IFB?\n  </ion-item>\n\n</ion-content>\n\n\n\n\n<ion-footer>\n  <ion-button color=\"primary\" small (click)=\"presentAlert()\"> \n    Desenvolvedores\n  </ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/ajuda/ajuda.page.scss":
/*!***************************************!*\
  !*** ./src/app/ajuda/ajuda.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-footer ion-button {\n  position: absolute;\n  right: 50px;\n  bottom: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aWFnb3NlZ2F0by9pb25pYy9pZmJtb2JpbGUyLjAvc3JjL2FwcC9hanVkYS9hanVkYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FqdWRhL2FqdWRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mb290ZXJ7XG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogNTBweDtcbiAgICAgICAgYm90dG9tOiAxcHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/ajuda/ajuda.page.ts":
/*!*************************************!*\
  !*** ./src/app/ajuda/ajuda.page.ts ***!
  \*************************************/
/*! exports provided: AjudaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjudaPage", function() { return AjudaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var AjudaPage = /** @class */ (function () {
    function AjudaPage(alertController) {
        this.alertController = alertController;
    }
    AjudaPage.prototype.ngOnInit = function () {
    };
    AjudaPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Desenvolvedores: ',
                            message: '<p><strong>André Luiz </strong></p> <p><strong> Douglas Shibata </strong></p> <p><strong> Luiz Henrique </strong></p> <p><strong> Marcos Allysson </strong></p> <p><strong> Tiago Faccio </strong></p> <p><strong> Wendel Feliciano </strong></p>',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AjudaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ajuda',
            template: __webpack_require__(/*! ./ajuda.page.html */ "./src/app/ajuda/ajuda.page.html"),
            styles: [__webpack_require__(/*! ./ajuda.page.scss */ "./src/app/ajuda/ajuda.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], AjudaPage);
    return AjudaPage;
}());



/***/ })

}]);
//# sourceMappingURL=ajuda-ajuda-module.js.map