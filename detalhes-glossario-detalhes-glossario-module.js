(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detalhes-glossario-detalhes-glossario-module"],{

/***/ "./src/app/detalhes-glossario/detalhes-glossario.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/detalhes-glossario/detalhes-glossario.module.ts ***!
  \*****************************************************************/
/*! exports provided: DetalhesGlossarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhesGlossarioPageModule", function() { return DetalhesGlossarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detalhes_glossario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalhes-glossario.page */ "./src/app/detalhes-glossario/detalhes-glossario.page.ts");







var routes = [
    { path: '', component: _detalhes_glossario_page__WEBPACK_IMPORTED_MODULE_6__["DetalhesGlossarioPage"] }
];
var DetalhesGlossarioPageModule = /** @class */ (function () {
    function DetalhesGlossarioPageModule() {
    }
    DetalhesGlossarioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_detalhes_glossario_page__WEBPACK_IMPORTED_MODULE_6__["DetalhesGlossarioPage"]]
        })
    ], DetalhesGlossarioPageModule);
    return DetalhesGlossarioPageModule;
}());



/***/ }),

/***/ "./src/app/detalhes-glossario/detalhes-glossario.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/detalhes-glossario/detalhes-glossario.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title> Detalhes Glossário </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding> \n  <ion-list>\n    <p><ion-label> Sigla: {{glossario.sigla}} </ion-label></p>    \n    <p><ion-label> Nome: {{glossario.nome}} </ion-label></p>    \n    <!-- <p><ion-label> Telefone: {{glossario.telefone}} </ion-label></p>\n    <p><ion-label> Sala: {{glossario.sala}} </ion-label></p>\n    <p><ion-label> Bloco: {{glossario.bloco}} </ion-label></p>\n    <p><ion-label> Responsável: {{glossario.responsavel}} </ion-label></p>\n    <p><ion-label> Horário: {{glossario.horario}} </ion-label></p>\n    <p><ion-label> Email: {{glossario.email}} </ion-label></p> -->\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/detalhes-glossario/detalhes-glossario.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/detalhes-glossario/detalhes-glossario.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFsaGVzLWdsb3NzYXJpby9kZXRhbGhlcy1nbG9zc2FyaW8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/detalhes-glossario/detalhes-glossario.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/detalhes-glossario/detalhes-glossario.page.ts ***!
  \***************************************************************/
/*! exports provided: DetalhesGlossarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhesGlossarioPage", function() { return DetalhesGlossarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_glossario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/glossario.service */ "./src/app/services/glossario.service.ts");




var DetalhesGlossarioPage = /** @class */ (function () {
    function DetalhesGlossarioPage(activeRoute, glossarioService) {
        this.activeRoute = activeRoute;
        this.glossarioService = glossarioService;
        this.glossario = {};
        this.glossarioId = null;
        this.glossarioId = this.activeRoute.snapshot.params['id'];
        if (this.glossarioId)
            this.loadGlossario();
    }
    DetalhesGlossarioPage.prototype.loadGlossario = function () {
        var _this = this;
        this.glossarioSubscription = this.glossarioService.getGlossario(this.glossarioId).subscribe(function (data) {
            _this.glossario = data;
        });
    };
    DetalhesGlossarioPage.prototype.ngOnDestroy = function () { if (this.glossarioSubscription)
        this.glossarioSubscription.unsubscribe(); };
    DetalhesGlossarioPage.prototype.ngOnInit = function () { };
    DetalhesGlossarioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalhes-glossario',
            template: __webpack_require__(/*! ./detalhes-glossario.page.html */ "./src/app/detalhes-glossario/detalhes-glossario.page.html"),
            styles: [__webpack_require__(/*! ./detalhes-glossario.page.scss */ "./src/app/detalhes-glossario/detalhes-glossario.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_glossario_service__WEBPACK_IMPORTED_MODULE_3__["GlossarioService"]])
    ], DetalhesGlossarioPage);
    return DetalhesGlossarioPage;
}());



/***/ })

}]);
//# sourceMappingURL=detalhes-glossario-detalhes-glossario-module.js.map