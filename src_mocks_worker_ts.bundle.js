"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksample_app"] = self["webpackChunksample_app"] || []).push([["src_mocks_worker_ts"],{

/***/ "./src/mocks/handlers.ts":
/*!*******************************!*\
  !*** ./src/mocks/handlers.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handlers: () => (/* binding */ handlers)\n/* harmony export */ });\n/* harmony import */ var msw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! msw */ \"./node_modules/msw/lib/core/http.mjs\");\n/* harmony import */ var msw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! msw */ \"./node_modules/msw/lib/core/HttpResponse.mjs\");\n\nconst handlers = [msw__WEBPACK_IMPORTED_MODULE_0__.http.get(\"https://numbersapi.p.rapidapi.com/:number/trivia\", ({\n  params\n}) => {\n  const {\n    number\n  } = params;\n  return msw__WEBPACK_IMPORTED_MODULE_1__.HttpResponse.text(\"Mocked response: \" + number);\n})];\n\n//# sourceURL=webpack://sample-app/./src/mocks/handlers.ts?");

/***/ }),

/***/ "./src/mocks/worker.ts":
/*!*****************************!*\
  !*** ./src/mocks/worker.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   worker: () => (/* binding */ worker)\n/* harmony export */ });\n/* harmony import */ var msw_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! msw/browser */ \"./node_modules/msw/lib/browser/index.mjs\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers */ \"./src/mocks/handlers.ts\");\n\n\nconst worker = (0,msw_browser__WEBPACK_IMPORTED_MODULE_1__.setupWorker)(..._handlers__WEBPACK_IMPORTED_MODULE_0__.handlers);\n\n//# sourceURL=webpack://sample-app/./src/mocks/worker.ts?");

/***/ })

}]);