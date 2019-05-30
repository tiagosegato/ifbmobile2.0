(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detalhes-detalhes-module"],{

/***/ "./src/app/detalhes/detalhes.module.ts":
/*!*********************************************!*\
  !*** ./src/app/detalhes/detalhes.module.ts ***!
  \*********************************************/
/*! exports provided: DetalhesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhesPageModule", function() { return DetalhesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detalhes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalhes.page */ "./src/app/detalhes/detalhes.page.ts");







var routes = [
    { path: '', component: _detalhes_page__WEBPACK_IMPORTED_MODULE_6__["DetalhesPage"] }
];
var DetalhesPageModule = /** @class */ (function () {
    function DetalhesPageModule() {
    }
    DetalhesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_detalhes_page__WEBPACK_IMPORTED_MODULE_6__["DetalhesPage"]]
        })
    ], DetalhesPageModule);
    return DetalhesPageModule;
}());



/***/ }),

/***/ "./src/app/detalhes/detalhes.page.html":
/*!*********************************************!*\
  !*** ./src/app/detalhes/detalhes.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title> Detalhes </ion-title>\n  </ion-toolbar>\n</ion-header> \n\n<ion-content padding> \n  <ion-list>\n    <p><ion-label> Nome: {{curso.nome}} </ion-label></p>    \n    <p><ion-label> Modalidade: {{curso.modalidade}} </ion-label></p>\n    <p><ion-label> Tipo: {{curso.tipo}} </ion-label></p>\n    <p><ion-label> Descrição: {{curso.descricao}} </ion-label></p>\n    <p><ion-label> Carga Horária: {{curso.cargaHoraria}} </ion-label></p>\n    <p><ion-label> Turno: {{curso.turno}} </ion-label></p>\n    <p><ion-label> Duração: {{curso.duracao}} </ion-label></p>\n    <p><ion-label> Vagas: {{curso.vagas}} </ion-label></p>\n    <p><ion-label> Coordenador: {{curso.coordenador}} </ion-label></p>\n    <p><ion-label> Email: {{curso.email}} </ion-label></p>\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/detalhes/detalhes.page.scss":
/*!*********************************************!*\
  !*** ./src/app/detalhes/detalhes.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFsaGVzL2RldGFsaGVzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/detalhes/detalhes.page.ts":
/*!*******************************************!*\
  !*** ./src/app/detalhes/detalhes.page.ts ***!
  \*******************************************/
/*! exports provided: DetalhesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhesPage", function() { return DetalhesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_curso_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/curso.service */ "./src/app/services/curso.service.ts");




var DetalhesPage = /** @class */ (function () {
    function DetalhesPage(activeRoute, cursoService) {
        this.activeRoute = activeRoute;
        this.cursoService = cursoService;
        this.curso = {};
        this.cursoId = null;
        this.cursoId = this.activeRoute.snapshot.params['id'];
        if (this.cursoId)
            this.loadCurso();
    }
    DetalhesPage.prototype.loadCurso = function () {
        var _this = this;
        this.cursoSubscription = this.cursoService.getCurso(this.cursoId).subscribe(function (data) {
            _this.curso = data;
        });
    };
    DetalhesPage.prototype.ngOnDestroy = function () { if (this.cursoSubscription)
        this.cursoSubscription.unsubscribe(); };
    DetalhesPage.prototype.ngOnInit = function () { };
    DetalhesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalhes',
            template: __webpack_require__(/*! ./detalhes.page.html */ "./src/app/detalhes/detalhes.page.html"),
            styles: [__webpack_require__(/*! ./detalhes.page.scss */ "./src/app/detalhes/detalhes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_curso_service__WEBPACK_IMPORTED_MODULE_3__["CursoService"]])
    ], DetalhesPage);
    return DetalhesPage;
}());



/***/ })

}]);
//# sourceMappingURL=detalhes-detalhes-module.js.map