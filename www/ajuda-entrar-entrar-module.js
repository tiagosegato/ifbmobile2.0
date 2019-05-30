(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajuda-entrar-entrar-module"],{

/***/ "./src/app/ajuda/entrar/entrar.module.ts":
/*!***********************************************!*\
  !*** ./src/app/ajuda/entrar/entrar.module.ts ***!
  \***********************************************/
/*! exports provided: EntrarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrarPageModule", function() { return EntrarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _entrar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entrar.page */ "./src/app/ajuda/entrar/entrar.page.ts");







var routes = [
    {
        path: '',
        component: _entrar_page__WEBPACK_IMPORTED_MODULE_6__["EntrarPage"]
    }
];
var EntrarPageModule = /** @class */ (function () {
    function EntrarPageModule() {
    }
    EntrarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_entrar_page__WEBPACK_IMPORTED_MODULE_6__["EntrarPage"]]
        })
    ], EntrarPageModule);
    return EntrarPageModule;
}());



/***/ }),

/***/ "./src/app/ajuda/entrar/entrar.page.html":
/*!***********************************************!*\
  !*** ./src/app/ajuda/entrar/entrar.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\" routerLink=\"/tabs/ajuda\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n    <ion-title>Como entrar no IFB</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  Todos os cursos de Formação Inicial e Continuada (FIC), Técnicos e Superiores de Graduação do IFB são gratuitos. Nenhuma taxa ou mensalidade são cobradas. Confira abaixo as formas de ingresso em cada modalidade de curso: \n \n  <p>Formação Inicial e Continuada (FIC)</p>\n     \n    Cada curso FIC tem seu próprio sistema de seleção, de acordo com os critérios estabelecidos pelo campus ofertante no edital de seleção. Por exemplo: o ingresso pode ser feito por sorteio ou matrículas por ordem de chegada ou mesmo por preenchimento de formulários on-line. \n    Atenção! Isso é definido no edital de seleção de cada curso. \n     \n  <p>Cursos Técnicos</p>\n     \n    Para os cursos técnicos, o Processo Seletivo acontece por sorteio de vagas, seguindo as etapas abaixo: \n     \n      <p>• o candidato se cadastra no sistema (processoseletivo.ifb.edu.br);</p>\n      <p>• se quiser concorrer por Reserva de Vagas - Pessoa com Deficiência (PD), oriundo de Escola Pública (EP), Autodeclarado Preto, Pardo ou Índio (PPI), Baixa Renda (até 1,5 salário mínimo por pessoa da família) -, deve preparar a lista de documentos que comprovem os requisitos e levar no campus do curso escolhido no período de inscrições;</p>\n      <p>• após se inscrever e entregar a documentação exigida no edital de seleção, é necessário acompanhar as listas de sorteados (ampla concorrência e reserva de vagas) que são divulgadas no site do IFB;</p>\n      <p>• se for sorteado, será convocado para matricular-se no campus do curso escolhido no período determinado no edital de seleção;</p>\n      <p>• se não for sorteado na primeira chamada, deve continuar acompanhando o processo seletivo pois, se ainda houver vaga remanescente, o interessado acompanha os demais editais para manifestação presencial de interesse pela vaga.</p>\n     \n  Cursos Superiores\n    Nos Cursos Superiores do IFB* o ingresso ocorre por meio do SiSU (Sistema de Seleção Unificada) e/ou pela nota do ENEM (Exame Nacional do Ensino Médio). A partir do segundo período, também é possível ingressar nos Cursos Superiores de Graduação por meio da transferência externa ou como portador de diploma.\n    *O curso de Licenciatura em Dança do IFB tem um sistema de ingresso diferenciado dos demais. Possui um edital próprio que consiste na análise das notas do ENEM e em um Teste de Habilidades Específicas (THE), que é de caráter eliminatório.\n     \n  <p>Pós-Graduação</p>\n    Especializações - Inscrições on-line, seleção por sorteio eletrônico e análise de currículo\n    Mestrado - Inscrição on-line com seleção por provas objetivas e discursivas em exame nacional coordenada pelo Instituto Federal do Espírito Santo.\n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/ajuda/entrar/entrar.page.scss":
/*!***********************************************!*\
  !*** ./src/app/ajuda/entrar/entrar.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FqdWRhL2VudHJhci9lbnRyYXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ajuda/entrar/entrar.page.ts":
/*!*********************************************!*\
  !*** ./src/app/ajuda/entrar/entrar.page.ts ***!
  \*********************************************/
/*! exports provided: EntrarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrarPage", function() { return EntrarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EntrarPage = /** @class */ (function () {
    function EntrarPage() {
    }
    EntrarPage.prototype.ngOnInit = function () {
    };
    EntrarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entrar',
            template: __webpack_require__(/*! ./entrar.page.html */ "./src/app/ajuda/entrar/entrar.page.html"),
            styles: [__webpack_require__(/*! ./entrar.page.scss */ "./src/app/ajuda/entrar/entrar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EntrarPage);
    return EntrarPage;
}());



/***/ })

}]);
//# sourceMappingURL=ajuda-entrar-entrar-module.js.map