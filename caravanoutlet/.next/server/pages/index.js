(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Categories/CategoryList.js":
/*!***********************************************!*\
  !*** ./components/Categories/CategoryList.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\47457\\Desktop\\Programmering\\Web\\Caravanoutlet\\caravanoutlet\\components\\Categories\\CategoryList.js";


function CategoryList({
  categories
}) {
  return categories.map(({
    name,
    slug
  }, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `/kategorier/${slug}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "text-lg md:text-xl lg:text-2xl hover:italic",
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }, this)
    }, slug, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }, this));
}

/* harmony default export */ __webpack_exports__["default"] = (CategoryList);

/***/ }),

/***/ "./components/Products/Product.js":
/*!****************************************!*\
  !*** ./components/Products/Product.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classcat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classcat */ "classcat");
/* harmony import */ var classcat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classcat__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\47457\\Desktop\\Programmering\\Web\\Caravanoutlet\\caravanoutlet\\components\\Products\\Product.js";




function Product({
  media,
  name,
  permalink,
  price,
  className
}) {
  const imageClass = classcat__WEBPACK_IMPORTED_MODULE_3___default()(["relative rounded-lg hover:rounded-none overflow-hidden w-full transition-all", className]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: `/produkter/${permalink}`,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      className: "group relative",
      children: [(media === null || media === void 0 ? void 0 : media.source) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: imageClass,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          src: media.source,
          alt: Product.name,
          layout: "fill",
          sizes: "616px, (min-width: 768px): 352px, (min-width: 1024px): 232px, (min-width: 1280px): 288px",
          className: "object-cover",
          priority: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex justify-between py-2 md:py-3 space-x-1",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "text-sm md:text-base lg:text-lg",
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "text-sm md:text-base lg:text-lg",
          children: price.formatted_with_symbol
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./components/Products/ProductGrid.js":
/*!********************************************!*\
  !*** ./components/Products/ProductGrid.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product */ "./components/Products/Product.js");

var _jsxFileName = "C:\\Users\\47457\\Desktop\\Programmering\\Web\\Caravanoutlet\\caravanoutlet\\components\\Products\\ProductGrid.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function ProductGrid(_ref) {
  let {
    products
  } = _ref,
      props = _objectWithoutProperties(_ref, ["products"]);

  if (!products || products.length === 0) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w-full grid lg:grid-cols-2 gap-4 xl:gap-8",
    children: products.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_1__.default, _objectSpread(_objectSpread({}, product), props), product.id, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ProductGrid);

/***/ }),

/***/ "./lib/commerce.js":
/*!*************************!*\
  !*** ./lib/commerce.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chec/commerce.js */ "@chec/commerce.js");
/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__);

var PUBLIC_API_KEY = "pk_268597d7ec2c2f9d80ae12829d5025d15ea65c87ad267";
const commerce = new (_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default())(PUBLIC_API_KEY);
/* harmony default export */ __webpack_exports__["default"] = (commerce);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/commerce */ "./lib/commerce.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Categories_CategoryList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Categories/CategoryList */ "./components/Categories/CategoryList.js");
/* harmony import */ var _components_Products_ProductGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Products/ProductGrid */ "./components/Products/ProductGrid.js");

var _jsxFileName = "C:\\Users\\47457\\Desktop\\Programmering\\Web\\Caravanoutlet\\caravanoutlet\\pages\\index.js";






async function getStaticProps() {
  const {
    data: products
  } = await _lib_commerce__WEBPACK_IMPORTED_MODULE_2__.default.products.list({
    limit: 200
  });
  const {
    data: categories
  } = await _lib_commerce__WEBPACK_IMPORTED_MODULE_2__.default.categories.list();
  return {
    props: {
      products,
      categories
    },
    revalidate: 60
  };
}
function Home({
  products,
  categories
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Caravanoutlet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Caravanoutlet"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Caravanoutlet intro side type ting etc."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "V\xE5re kategorier"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Categories_CategoryList__WEBPACK_IMPORTED_MODULE_4__.default, {
        categories: categories
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-10",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Promoterte produkter"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
        className: "md:min-h-screen py-6 md:py-12 flex items-center md:w-1/2 md:z-40",
        initial: {
          opacity: 0,
          y: 50
        },
        animate: {
          opacity: 1,
          y: 0
        },
        exit: {
          opacity: 0,
          y: -50
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Products_ProductGrid__WEBPACK_IMPORTED_MODULE_5__.default, {
          products: products,
          className: "h-112 md:h-96 xl:h-112"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "@chec/commerce.js":
/*!************************************!*\
  !*** external "@chec/commerce.js" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chec/commerce.js");;

/***/ }),

/***/ "classcat":
/*!***************************!*\
  !*** external "classcat" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("classcat");;

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("framer-motion");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","vendors-node_modules_next_image_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vY29tcG9uZW50cy9DYXRlZ29yaWVzL0NhdGVnb3J5TGlzdC5qcyIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vY29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0LmpzIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvLi9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RHcmlkLmpzIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvLi9saWIvY29tbWVyY2UuanMiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJAY2hlYy9jb21tZXJjZS5qc1wiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJjbGFzc2NhdFwiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCIiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2lnbm9yZWR8QzpcXFVzZXJzXFw0NzQ1N1xcRGVza3RvcFxcUHJvZ3JhbW1lcmluZ1xcV2ViXFxDYXJhdmFub3V0bGV0XFxjYXJhdmFub3V0bGV0XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQ2F0ZWdvcnlMaXN0IiwiY2F0ZWdvcmllcyIsIm1hcCIsIm5hbWUiLCJzbHVnIiwiaW5kZXgiLCJQcm9kdWN0IiwibWVkaWEiLCJwZXJtYWxpbmsiLCJwcmljZSIsImNsYXNzTmFtZSIsImltYWdlQ2xhc3MiLCJjYyIsInNvdXJjZSIsImZvcm1hdHRlZF93aXRoX3N5bWJvbCIsIlByb2R1Y3RHcmlkIiwicHJvZHVjdHMiLCJwcm9wcyIsImxlbmd0aCIsInByb2R1Y3QiLCJpZCIsIlBVQkxJQ19BUElfS0VZIiwiY29tbWVyY2UiLCJDb21tZXJjZVNESyIsImdldFN0YXRpY1Byb3BzIiwiZGF0YSIsImxpbWl0IiwicmV2YWxpZGF0ZSIsIkhvbWUiLCJvcGFjaXR5IiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxZQUFULENBQXNCO0FBQUVDO0FBQUYsQ0FBdEIsRUFBc0M7QUFFcEMsU0FBT0EsVUFBVSxDQUFDQyxHQUFYLENBQWUsQ0FBQztBQUFFQyxRQUFGO0FBQVFDO0FBQVIsR0FBRCxFQUFpQkMsS0FBakIsa0JBQ2xCO0FBQUEsMkJBQ0U7QUFBQSw2QkFDRiw4REFB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QUVFLG1CQUFTLEVBQUM7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMkJELEM7Ozs7Ozs7Ozs7O0FDcERELCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmZ1bmN0aW9uIENhdGVnb3J5TGlzdCh7IGNhdGVnb3JpZXMgfSkge1xyXG5cclxuICByZXR1cm4gY2F0ZWdvcmllcy5tYXAoKHsgbmFtZSwgc2x1ZyB9LCBpbmRleCkgPT4gKFxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpIGtleT17c2x1Z30+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2Ava2F0ZWdvcmllci8ke3NsdWd9YH0+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1sZyBtZDp0ZXh0LXhsIGxnOnRleHQtMnhsIGhvdmVyOml0YWxpY1wiPntuYW1lfTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9saT5cclxuICAgICAgPC91bD5cclxuXHJcbiAgKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5TGlzdDtcclxuIiwiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGNjIGZyb20gXCJjbGFzc2NhdFwiO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdCh7IG1lZGlhLCBuYW1lLCBwZXJtYWxpbmssIHByaWNlLCBjbGFzc05hbWUgfSkge1xyXG4gIGNvbnN0IGltYWdlQ2xhc3MgPSBjYyhbXHJcbiAgICBcInJlbGF0aXZlIHJvdW5kZWQtbGcgaG92ZXI6cm91bmRlZC1ub25lIG92ZXJmbG93LWhpZGRlbiB3LWZ1bGwgdHJhbnNpdGlvbi1hbGxcIixcclxuICAgIGNsYXNzTmFtZSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVrdGVyLyR7cGVybWFsaW5rfWB9PlxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZVwiPlxyXG4gICAgICAgIHttZWRpYT8uc291cmNlICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpbWFnZUNsYXNzfT5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXttZWRpYS5zb3VyY2V9XHJcbiAgICAgICAgICAgICAgYWx0PXtQcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgc2l6ZXM9XCI2MTZweCwgKG1pbi13aWR0aDogNzY4cHgpOiAzNTJweCwgKG1pbi13aWR0aDogMTAyNHB4KTogMjMycHgsIChtaW4td2lkdGg6IDEyODBweCk6IDI4OHB4XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXJcIlxyXG4gICAgICAgICAgICAgIHByaW9yaXR5PXt0cnVlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHB5LTIgbWQ6cHktMyBzcGFjZS14LTFcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gbWQ6dGV4dC1iYXNlIGxnOnRleHQtbGdcIj57bmFtZX08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1kOnRleHQtYmFzZSBsZzp0ZXh0LWxnXCI+XHJcbiAgICAgICAgICAgIHtwcmljZS5mb3JtYXR0ZWRfd2l0aF9zeW1ib2x9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0OyIsImltcG9ydCBQcm9kdWN0IGZyb20gXCIuL1Byb2R1Y3RcIjtcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RHcmlkKHsgcHJvZHVjdHMsIC4uLnByb3BzIH0pIHtcclxuICBpZiAoIXByb2R1Y3RzIHx8IHByb2R1Y3RzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGxnOmdyaWQtY29scy0yIGdhcC00IHhsOmdhcC04XCI+XHJcbiAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICA8UHJvZHVjdCBrZXk9e3Byb2R1Y3QuaWR9IHsuLi5wcm9kdWN0fSB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEdyaWQ7XHJcbiIsImltcG9ydCBDb21tZXJjZVNESyBmcm9tIFwiQGNoZWMvY29tbWVyY2UuanNcIlxyXG5cclxudmFyIFBVQkxJQ19BUElfS0VZID0gXCJwa18yNjg1OTdkN2VjMmMyZjlkODBhZTEyODI5ZDUwMjVkMTVlYTY1Yzg3YWQyNjdcIlxyXG5cclxuY29uc3QgY29tbWVyY2UgPSBuZXcgQ29tbWVyY2VTREsoUFVCTElDX0FQSV9LRVkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tbWVyY2U7XHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBjb21tZXJjZSBmcm9tICcuLi9saWIvY29tbWVyY2UnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5cbmltcG9ydCBDYXRlZ29yeUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9DYXRlZ29yaWVzL0NhdGVnb3J5TGlzdCdcbmltcG9ydCBQcm9kdWN0R3JpZCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RHcmlkJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCB7IGRhdGE6IHByb2R1Y3RzIH0gPSBhd2FpdCBjb21tZXJjZS5wcm9kdWN0cy5saXN0KHtcbiAgICBsaW1pdDogMjAwLFxuICB9KTtcbiAgY29uc3QgeyBkYXRhOiBjYXRlZ29yaWVzIH0gPSBhd2FpdCBjb21tZXJjZS5jYXRlZ29yaWVzLmxpc3QoKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0cyxcbiAgICAgIGNhdGVnb3JpZXMsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiA2MCxcbiAgfTsgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwcm9kdWN0cywgY2F0ZWdvcmllcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q2FyYXZhbm91dGxldDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aDE+Q2FyYXZhbm91dGxldDwvaDE+XG4gICAgICA8cD5DYXJhdmFub3V0bGV0IGludHJvIHNpZGUgdHlwZSB0aW5nIGV0Yy48L3A+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+VsOlcmUga2F0ZWdvcmllcjwvaDE+XG4gICAgICAgIDxDYXRlZ29yeUxpc3QgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgc3BhY2UteS0zIG1kOnNwYWNlLXktMCBtZDpzcGFjZS14LTEwXCI+XG4gICAgICAgIDxoMT5Qcm9tb3RlcnRlIHByb2R1a3RlcjwvaDE+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtZDptaW4taC1zY3JlZW4gcHktNiBtZDpweS0xMiBmbGV4IGl0ZW1zLWNlbnRlciBtZDp3LTEvMiBtZDp6LTQwXCJcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogNTAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB5OiAtNTAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UHJvZHVjdEdyaWRcbiAgICAgICAgICAgICAgcHJvZHVjdHM9e3Byb2R1Y3RzfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTExMiBtZDpoLTk2IHhsOmgtMTEyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGVjL2NvbW1lcmNlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc2NhdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9