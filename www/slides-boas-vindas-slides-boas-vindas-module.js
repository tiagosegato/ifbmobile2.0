(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["slides-boas-vindas-slides-boas-vindas-module"],{

/***/ "./src/app/slides-boas-vindas/slides-boas-vindas.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/slides-boas-vindas/slides-boas-vindas.module.ts ***!
  \*****************************************************************/
/*! exports provided: SlidesBoasVindasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesBoasVindasPageModule", function() { return SlidesBoasVindasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _slides_boas_vindas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slides-boas-vindas.page */ "./src/app/slides-boas-vindas/slides-boas-vindas.page.ts");







var routes = [
    {
        path: '',
        component: _slides_boas_vindas_page__WEBPACK_IMPORTED_MODULE_6__["SlidesBoasVindasPage"]
    }
];
var SlidesBoasVindasPageModule = /** @class */ (function () {
    function SlidesBoasVindasPageModule() {
    }
    SlidesBoasVindasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_slides_boas_vindas_page__WEBPACK_IMPORTED_MODULE_6__["SlidesBoasVindasPage"]]
        })
    ], SlidesBoasVindasPageModule);
    return SlidesBoasVindasPageModule;
}());



/***/ }),

/***/ "./src/app/slides-boas-vindas/slides-boas-vindas.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/slides-boas-vindas/slides-boas-vindas.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  <ion-slides pager=\"true\">\n\n    <ion-slide>\n      <ion-img src=\"./assets/imgs/logo.png\"></ion-img>\n<!--       <ion-img src=\"https://www.infoenem.com.br/wp-content/uploads/2015/05/ifb.jpg\"></ion-img>\n -->    </ion-slide>\n\n    <ion-slide>\n      <h1 text-align=\"center\"> Bem-Vindo ao IFB Brasília! </h1> \n      <ion-button expand=\"block\" fill=\"outline\" routerLink=\"/tabs/tab1\"> App (ツ) </ion-button>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/slides-boas-vindas/slides-boas-vindas.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/slides-boas-vindas/slides-boas-vindas.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin-top: 150px;\n  color: #298b39; }\n\nion-button {\n  position: fixed;\n  margin-top: 200px;\n  margin-right: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmNvcy9Eb2N1bWVudHMvUHJvamVjdHMvaWZibW9iaWxlMi4wL3NyYy9hcHAvc2xpZGVzLWJvYXMtdmluZGFzL3NsaWRlcy1ib2FzLXZpbmRhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zbGlkZXMtYm9hcy12aW5kYXMvc2xpZGVzLWJvYXMtdmluZGFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xuICAgIGNvbG9yOiAjMjk4YjM5O1xufVxuXG5pb24tYnV0dG9ue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/slides-boas-vindas/slides-boas-vindas.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/slides-boas-vindas/slides-boas-vindas.page.ts ***!
  \***************************************************************/
/*! exports provided: SlidesBoasVindasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesBoasVindasPage", function() { return SlidesBoasVindasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SlidesBoasVindasPage = /** @class */ (function () {
    function SlidesBoasVindasPage() {
    }
    SlidesBoasVindasPage.prototype.ngOnInit = function () {
    };
    SlidesBoasVindasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slides-boas-vindas',
            template: __webpack_require__(/*! ./slides-boas-vindas.page.html */ "./src/app/slides-boas-vindas/slides-boas-vindas.page.html"),
            styles: [__webpack_require__(/*! ./slides-boas-vindas.page.scss */ "./src/app/slides-boas-vindas/slides-boas-vindas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SlidesBoasVindasPage);
    return SlidesBoasVindasPage;
}());



/***/ })

}]);
//# sourceMappingURL=slides-boas-vindas-slides-boas-vindas-module.js.map