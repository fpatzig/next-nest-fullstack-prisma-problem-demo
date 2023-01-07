"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/email":
/*!********************************************!*\
  !*** external "next-auth/providers/email" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/email");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/email */ \"next-auth/providers/email\");\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_email__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// import prisma from '../../../../server/lib/prisma'\nconst authHandler = (req, res)=>next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authHandler);\nconst options = {\n    providers: [\n        next_auth_providers_email__WEBPACK_IMPORTED_MODULE_2___default()({\n            server: {\n                host: process.env.SMTP_HOST,\n                port: Number(process.env.SMTP_PORT),\n                auth: {\n                    user: process.env.SMTP_USER,\n                    pass: process.env.SMTP_PASSWORD\n                }\n            },\n            from: process.env.SMTP_FROM\n        })\n    ],\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__.PrismaAdapter)(prisma),\n    secret: process.env.SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDaUM7QUFDd0I7QUFDSjtBQUVyRCxxREFBcUQ7QUFFckQsTUFBTUcsY0FBOEIsQ0FBQ0MsS0FBS0MsTUFBUUwsZ0RBQVFBLENBQUNJLEtBQUtDLEtBQUtDO0FBQ3JFLGlFQUFlSCxXQUFXQSxFQUFDO0FBRTNCLE1BQU1HLFVBQVU7SUFDZEMsV0FBVztRQUNUTCxnRUFBYUEsQ0FBQztZQUNaTSxRQUFRO2dCQUNOQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFNBQVM7Z0JBQzNCQyxNQUFNQyxPQUFPSixRQUFRQyxHQUFHLENBQUNJLFNBQVM7Z0JBQ2xDQyxNQUFNO29CQUNKQyxNQUFNUCxRQUFRQyxHQUFHLENBQUNPLFNBQVM7b0JBQzNCQyxNQUFNVCxRQUFRQyxHQUFHLENBQUNTLGFBQWE7Z0JBQ2pDO1lBQ0Y7WUFDQUMsTUFBTVgsUUFBUUMsR0FBRyxDQUFDVyxTQUFTO1FBQzdCO0tBQ0Q7SUFDREMsU0FBU3RCLHdFQUFhQSxDQUFDdUI7SUFDdkJDLFFBQVFmLFFBQVFDLEdBQUcsQ0FBQ2UsTUFBTTtBQUM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/MmU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpSGFuZGxlciB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gJ0BuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXInXG5pbXBvcnQgRW1haWxQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2VtYWlsJ1xuXG4vLyBpbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uLy4uLy4uL3NlcnZlci9saWIvcHJpc21hJ1xuXG5jb25zdCBhdXRoSGFuZGxlcjogTmV4dEFwaUhhbmRsZXIgPSAocmVxLCByZXMpID0+IE5leHRBdXRoKHJlcSwgcmVzLCBvcHRpb25zKTtcbmV4cG9ydCBkZWZhdWx0IGF1dGhIYW5kbGVyO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBFbWFpbFByb3ZpZGVyKHtcbiAgICAgIHNlcnZlcjoge1xuICAgICAgICBob3N0OiBwcm9jZXNzLmVudi5TTVRQX0hPU1QsXG4gICAgICAgIHBvcnQ6IE51bWJlcihwcm9jZXNzLmVudi5TTVRQX1BPUlQpLFxuICAgICAgICBhdXRoOiB7XG4gICAgICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuU01UUF9VU0VSLFxuICAgICAgICAgIHBhc3M6IHByb2Nlc3MuZW52LlNNVFBfUEFTU1dPUkQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuU01UUF9GUk9NLFxuICAgIH0pLFxuICBdLFxuICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKHByaXNtYSksXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuU0VDUkVULFxufTsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJQcmlzbWFBZGFwdGVyIiwiRW1haWxQcm92aWRlciIsImF1dGhIYW5kbGVyIiwicmVxIiwicmVzIiwib3B0aW9ucyIsInByb3ZpZGVycyIsInNlcnZlciIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiU01UUF9IT1NUIiwicG9ydCIsIk51bWJlciIsIlNNVFBfUE9SVCIsImF1dGgiLCJ1c2VyIiwiU01UUF9VU0VSIiwicGFzcyIsIlNNVFBfUEFTU1dPUkQiLCJmcm9tIiwiU01UUF9GUk9NIiwiYWRhcHRlciIsInByaXNtYSIsInNlY3JldCIsIlNFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();