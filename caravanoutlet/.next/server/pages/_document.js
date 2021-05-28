(function() {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./lib/gtag.js":
/*!*********************!*\
  !*** ./lib/gtag.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GA_TRACKING_ID": function() { return /* binding */ GA_TRACKING_ID; },
/* harmony export */   "pageview": function() { return /* binding */ pageview; },
/* harmony export */   "event": function() { return /* binding */ event; }
/* harmony export */ });
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
const pageview = url => {
  if (!GA_TRACKING_ID) return;
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url
  });
};
const event = ({
  action,
  category,
  label,
  value
}) => {
  if (!GA_TRACKING_ID) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value
  });
};

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/gtag */ "./lib/gtag.js");


var _jsxFileName = "C:\\Users\\47457\\Desktop\\Programmering\\Web\\Caravanoutlet\\caravanoutlet\\pages\\_document.js";



class MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
        children: _lib_gtag__WEBPACK_IMPORTED_MODULE_2__.GA_TRACKING_ID && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
            async: true,
            src: `https://www.googletagmanager.com/gtag/js?id=${_lib_gtag__WEBPACK_IMPORTED_MODULE_2__.GA_TRACKING_ID}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
            dangerouslySetInnerHTML: {
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${_lib_gtag__WEBPACK_IMPORTED_MODULE_2__.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 15
          }, this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("body", {
        className: "antialiased",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/constants.js");;

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/document-context.js");;

/***/ }),

/***/ "../next-server/lib/head-manager-context":
/*!********************************************************************!*\
  !*** external "next/dist/next-server/lib/head-manager-context.js" ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head-manager-context.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/get-page-files.js");;

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/utils.js");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/server");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_document_js"], function() { return __webpack_exec__("./pages/_document.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vbGliL2d0YWcuanMiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC8uL3BhZ2VzL19kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2dldC1wYWdlLWZpbGVzLmpzXCIiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwic3R5bGVkLWpzeC9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJHQV9UUkFDS0lOR19JRCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HQV9UUkFDS0lOR19JRCIsInBhZ2V2aWV3IiwidXJsIiwid2luZG93IiwiZ3RhZyIsInBhZ2VfcGF0aCIsImV2ZW50IiwiYWN0aW9uIiwiY2F0ZWdvcnkiLCJsYWJlbCIsInZhbHVlIiwiZXZlbnRfY2F0ZWdvcnkiLCJldmVudF9sYWJlbCIsIk15RG9jdW1lbnQiLCJEb2N1bWVudCIsInJlbmRlciIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLGNBQWMsR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLDBCQUFuQztBQUVBLE1BQU1DLFFBQVEsR0FBSUMsR0FBRCxJQUFTO0FBQy9CLE1BQUksQ0FBQ0wsY0FBTCxFQUFxQjtBQUVyQk0sUUFBTSxDQUFDQyxJQUFQLENBQVksUUFBWixFQUFzQlAsY0FBdEIsRUFBc0M7QUFDcENRLGFBQVMsRUFBRUg7QUFEeUIsR0FBdEM7QUFHRCxDQU5NO0FBUUEsTUFBTUksS0FBSyxHQUFHLENBQUM7QUFBRUMsUUFBRjtBQUFVQyxVQUFWO0FBQW9CQyxPQUFwQjtBQUEyQkM7QUFBM0IsQ0FBRCxLQUF3QztBQUMzRCxNQUFJLENBQUNiLGNBQUwsRUFBcUI7QUFFckJNLFFBQU0sQ0FBQ0MsSUFBUCxDQUFZLE9BQVosRUFBcUJHLE1BQXJCLEVBQTZCO0FBQzNCSSxrQkFBYyxFQUFFSCxRQURXO0FBRTNCSSxlQUFXLEVBQUVILEtBRmM7QUFHM0JDLFNBQUssRUFBRUE7QUFIb0IsR0FBN0I7QUFLRCxDQVJNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVlA7QUFFQTs7QUFFQSxNQUFNRyxVQUFOLFNBQXlCQyxzREFBekIsQ0FBa0M7QUFDaENDLFFBQU0sR0FBRztBQUNQLHdCQUNFLDhEQUFDLCtDQUFEO0FBQUEsOEJBQ0UsOERBQUMsK0NBQUQ7QUFBQSxrQkFDR2xCLHFEQUFjLGlCQUNiO0FBQUEsa0NBQ0U7QUFDRSxpQkFBSyxNQURQO0FBRUUsZUFBRyxFQUFHLCtDQUE4Q0EscURBQWU7QUFGckU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUtFO0FBQ0UsbUNBQXVCLEVBQUU7QUFDdkJtQixvQkFBTSxFQUFHO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qm5CLHFEQUFlO0FBQzdDO0FBQ0E7QUFDQTtBQVJ5QztBQUQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUF1QkU7QUFBTSxpQkFBUyxFQUFDLGFBQWhCO0FBQUEsZ0NBQ0UsOERBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLDhEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBOEJEOztBQWhDK0I7O0FBbUNsQywrREFBZWdCLFVBQWYsRTs7Ozs7Ozs7Ozs7QUN2Q0Esb0U7Ozs7Ozs7Ozs7O0FDQUEsMkU7Ozs7Ozs7Ozs7O0FDQUEsK0U7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsNEU7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2RvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEdBX1RSQUNLSU5HX0lEID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR0FfVFJBQ0tJTkdfSUQ7XHJcblxyXG5leHBvcnQgY29uc3QgcGFnZXZpZXcgPSAodXJsKSA9PiB7XHJcbiAgaWYgKCFHQV9UUkFDS0lOR19JRCkgcmV0dXJuO1xyXG5cclxuICB3aW5kb3cuZ3RhZyhcImNvbmZpZ1wiLCBHQV9UUkFDS0lOR19JRCwge1xyXG4gICAgcGFnZV9wYXRoOiB1cmwsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnQgPSAoeyBhY3Rpb24sIGNhdGVnb3J5LCBsYWJlbCwgdmFsdWUgfSkgPT4ge1xyXG4gIGlmICghR0FfVFJBQ0tJTkdfSUQpIHJldHVybjtcclxuXHJcbiAgd2luZG93Lmd0YWcoXCJldmVudFwiLCBhY3Rpb24sIHtcclxuICAgIGV2ZW50X2NhdGVnb3J5OiBjYXRlZ29yeSxcclxuICAgIGV2ZW50X2xhYmVsOiBsYWJlbCxcclxuICAgIHZhbHVlOiB2YWx1ZSxcclxuICB9KTtcclxufTtcclxuIiwiaW1wb3J0IERvY3VtZW50LCB7IEh0bWwsIEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tIFwibmV4dC9kb2N1bWVudFwiO1xyXG5cclxuaW1wb3J0IHsgR0FfVFJBQ0tJTkdfSUQgfSBmcm9tIFwiLi4vbGliL2d0YWdcIjtcclxuXHJcbmNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEh0bWw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICB7R0FfVFJBQ0tJTkdfSUQgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgICAgICAgIGFzeW5jXHJcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPSR7R0FfVFJBQ0tJTkdfSUR9YH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogYFxyXG4gICAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxyXG4gICAgICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICBndGFnKCdjb25maWcnLCAnJHtHQV9UUkFDS0lOR19JRH0nLCB7XHJcbiAgICAgICAgICAgICAgcGFnZV9wYXRoOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8Ym9keSBjbGFzc05hbWU9XCJhbnRpYWxpYXNlZFwiPlxyXG4gICAgICAgICAgPE1haW4gLz5cclxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XHJcbiAgICAgICAgPC9ib2R5PlxyXG4gICAgICA8L0h0bWw+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlEb2N1bWVudDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50cy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2dldC1wYWdlLWZpbGVzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3NlcnZlclwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==