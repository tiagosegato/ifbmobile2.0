(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajuda-publico-publico-module"],{

/***/ "./src/app/ajuda/publico/publico.module.ts":
/*!*************************************************!*\
  !*** ./src/app/ajuda/publico/publico.module.ts ***!
  \*************************************************/
/*! exports provided: PublicoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicoPageModule", function() { return PublicoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _publico_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./publico.page */ "./src/app/ajuda/publico/publico.page.ts");







var routes = [
    {
        path: '',
        component: _publico_page__WEBPACK_IMPORTED_MODULE_6__["PublicoPage"]
    }
];
var PublicoPageModule = /** @class */ (function () {
    function PublicoPageModule() {
    }
    PublicoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_publico_page__WEBPACK_IMPORTED_MODULE_6__["PublicoPage"]]
        })
    ], PublicoPageModule);
    return PublicoPageModule;
}());



/***/ }),

/***/ "./src/app/ajuda/publico/publico.page.html":
/*!*************************************************!*\
  !*** ./src/app/ajuda/publico/publico.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\" routerLink=\"/tabs/ajuda\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n    <ion-title>O IFB é publico?</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  \n  O Instituto Federal de Brasília (IFB) foi criado em dezembro \n    de 2008, por meio da lei nº 11.892, passando a compor a Rede\n     Federal de Educação Profissional, Científica e Tecnológica, \n     existente em todo o Brasil.\n  <p>O Instituto Federal de Brasília é uma instituição pública \n    que oferece Educação Profissional gratuita, na forma de  \n    cursos e programas de formação inicial e continuada de trabalhadores\n     (FIC), educação profissional técnica de nível médio e educação\n      profissional tecnológica de graduação e de pós-graduação, \n      articulados a projetos de pesquisa e extensão.  A estrutura \n      multicampi do IFB faculta à instituição fixar-se em vários \n      eixos tecnológicos, diversificando seu atendimento, de \n      conformidade com a vocação econômica das regiões administrativas\n       do Distrito Federal.</p>\n  <p>O IFB é composto por uma Reitoria e 10 campi distribuídos pelo \n    Distrito Federal: Brasília, Ceilândia, Estrutural, Gama, \n    Planaltina, Recanto das Emas, Riacho Fundo, Samambaia, \n    São Sebastião e Taguatinga.</p>\n  <p>O IFB conta com cinco Pró-Reitorias: de Administração (PRAD), \n    de Ensino (PREN), de Extensão e Cultura (PREX), Gestão de \n    Pessoas (PRGP) e de Pesquisa e Inovação (PRPI).</p>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/ajuda/publico/publico.page.scss":
/*!*************************************************!*\
  !*** ./src/app/ajuda/publico/publico.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FqdWRhL3B1YmxpY28vcHVibGljby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ajuda/publico/publico.page.ts":
/*!***********************************************!*\
  !*** ./src/app/ajuda/publico/publico.page.ts ***!
  \***********************************************/
/*! exports provided: PublicoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicoPage", function() { return PublicoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PublicoPage = /** @class */ (function () {
    function PublicoPage() {
    }
    PublicoPage.prototype.ngOnInit = function () {
    };
    PublicoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-publico',
            template: __webpack_require__(/*! ./publico.page.html */ "./src/app/ajuda/publico/publico.page.html"),
            styles: [__webpack_require__(/*! ./publico.page.scss */ "./src/app/ajuda/publico/publico.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PublicoPage);
    return PublicoPage;
}());



/***/ })

}]);
//# sourceMappingURL=ajuda-publico-publico-module.js.map