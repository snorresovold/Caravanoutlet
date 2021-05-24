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
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
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

function IndexPage({
  products,
  categories
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "CaravanOutlet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "md:min-h-screen md:flex md:items-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-10",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "md:max-h-screen md:w-1/2 flex items-end justify-between md:sticky md:top-0",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
            className: "md:py-12 hidden md:block md:sticky md:top-0",
            initial: {
              opacity: 0,
              y: 50
            },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.25
              }
            },
            exit: {
              opacity: 0,
              y: -50
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              className: " text-xl md:text-3xl",
              children: "Butikk:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "pt-3",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Categories_CategoryList__WEBPACK_IMPORTED_MODULE_4__.default, {
                categories: categories
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
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
            lineNumber: 61,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vY29tcG9uZW50cy9DYXRlZ29yaWVzL0NhdGVnb3J5TGlzdC5qcyIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vY29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0LmpzIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvLi9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RHcmlkLmpzIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvLi9saWIvY29tbWVyY2UuanMiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJAY2hlYy9jb21tZXJjZS5qc1wiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJjbGFzc2NhdFwiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCIiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2lnbm9yZWR8QzpcXFVzZXJzXFw0NzQ1N1xcRGVza3RvcFxcUHJvZ3JhbW1lcmluZ1xcV2ViXFxDYXJhdmFub3V0bGV0XFxjYXJhdmFub3V0bGV0XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQ2F0ZWdvcnlMaXN0IiwiY2F0ZWdvcmllcyIsIm1hcCIsIm5hbWUiLCJzbHVnIiwiaW5kZXgiLCJQcm9kdWN0IiwibWVkaWEiLCJwZXJtYWxpbmsiLCJwcmljZSIsImNsYXNzTmFtZSIsImltYWdlQ2xhc3MiLCJjYyIsInNvdXJjZSIsImZvcm1hdHRlZF93aXRoX3N5bWJvbCIsIlByb2R1Y3RHcmlkIiwicHJvZHVjdHMiLCJwcm9wcyIsImxlbmd0aCIsInByb2R1Y3QiLCJpZCIsIlBVQkxJQ19BUElfS0VZIiwiY29tbWVyY2UiLCJDb21tZXJjZVNESyIsImdldFN0YXRpY1Byb3BzIiwiZGF0YSIsImxpbWl0IiwicmV2YWxpZGF0ZSIsIkluZGV4UGFnZSIsIm9wYWNpdHkiLCJ5IiwidHJhbnNpdGlvbiIsImRlbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFlBQVQsQ0FBc0I7QUFBRUM7QUFBRixDQUF0QixFQUFzQztBQUVwQyxTQUFPQSxVQUFVLENBQUNDLEdBQVgsQ0FBZSxDQUFDO0FBQUVDLFFBQUY7QUFBUUM7QUFBUixHQUFELEVBQWlCQyxLQUFqQixrQkFDbEI7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O0FBQUE7QUFBQTtBQUFBLG9CQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUF1QkUsOERBQUMscURBQUQ7QUFDRSxtQkFBUyxFQUFDLGtFQURaO0FBRUUsaUJBQU8sRUFBRTtBQUFFNEIsbUJBQU8sRUFBRSxDQUFYO0FBQWNDLGFBQUMsRUFBRTtBQUFqQixXQUZYO0FBR0UsaUJBQU8sRUFBRTtBQUFFRCxtQkFBTyxFQUFFLENBQVg7QUFBY0MsYUFBQyxFQUFFO0FBQWpCLFdBSFg7QUFJRSxjQUFJLEVBQUU7QUFBRUQsbUJBQU8sRUFBRSxDQUFYO0FBQWNDLGFBQUMsRUFBRSxDQUFDO0FBQWxCLFdBSlI7QUFBQSxpQ0FNRSw4REFBQyxxRUFBRDtBQUNFLG9CQUFRLEVBQUVkLFFBRFo7QUFFRSxxQkFBUyxFQUFDO0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBLGtCQURGO0FBNENEOztBQUVELCtEQUFlWSxTQUFmLEU7Ozs7Ozs7Ozs7O0FDdkVBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmZ1bmN0aW9uIENhdGVnb3J5TGlzdCh7IGNhdGVnb3JpZXMgfSkge1xyXG5cclxuICByZXR1cm4gY2F0ZWdvcmllcy5tYXAoKHsgbmFtZSwgc2x1ZyB9LCBpbmRleCkgPT4gKFxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpIGtleT17c2x1Z30+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2Ava2F0ZWdvcmllci8ke3NsdWd9YH0+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1sZyBtZDp0ZXh0LXhsIGxnOnRleHQtMnhsIGhvdmVyOml0YWxpY1wiPntuYW1lfTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9saT5cclxuICAgICAgPC91bD5cclxuXHJcbiAgKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5TGlzdDtcclxuIiwiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGNjIGZyb20gXCJjbGFzc2NhdFwiO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdCh7IG1lZGlhLCBuYW1lLCBwZXJtYWxpbmssIHByaWNlLCBjbGFzc05hbWUgfSkge1xyXG4gIGNvbnN0IGltYWdlQ2xhc3MgPSBjYyhbXHJcbiAgICBcInJlbGF0aXZlIHJvdW5kZWQtbGcgaG92ZXI6cm91bmRlZC1ub25lIG92ZXJmbG93LWhpZGRlbiB3LWZ1bGwgdHJhbnNpdGlvbi1hbGxcIixcclxuICAgIGNsYXNzTmFtZSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVrdGVyLyR7cGVybWFsaW5rfWB9PlxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZVwiPlxyXG4gICAgICAgIHttZWRpYT8uc291cmNlICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpbWFnZUNsYXNzfT5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXttZWRpYS5zb3VyY2V9XHJcbiAgICAgICAgICAgICAgYWx0PXtQcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgc2l6ZXM9XCI2MTZweCwgKG1pbi13aWR0aDogNzY4cHgpOiAzNTJweCwgKG1pbi13aWR0aDogMTAyNHB4KTogMjMycHgsIChtaW4td2lkdGg6IDEyODBweCk6IDI4OHB4XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXJcIlxyXG4gICAgICAgICAgICAgIHByaW9yaXR5PXt0cnVlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHB5LTIgbWQ6cHktMyBzcGFjZS14LTFcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gbWQ6dGV4dC1iYXNlIGxnOnRleHQtbGdcIj57bmFtZX08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1kOnRleHQtYmFzZSBsZzp0ZXh0LWxnXCI+XHJcbiAgICAgICAgICAgIHtwcmljZS5mb3JtYXR0ZWRfd2l0aF9zeW1ib2x9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0OyIsImltcG9ydCBQcm9kdWN0IGZyb20gXCIuL1Byb2R1Y3RcIjtcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RHcmlkKHsgcHJvZHVjdHMsIC4uLnByb3BzIH0pIHtcclxuICBpZiAoIXByb2R1Y3RzIHx8IHByb2R1Y3RzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGxnOmdyaWQtY29scy0yIGdhcC00IHhsOmdhcC04XCI+XHJcbiAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICA8UHJvZHVjdCBrZXk9e3Byb2R1Y3QuaWR9IHsuLi5wcm9kdWN0fSB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEdyaWQ7XHJcbiIsImltcG9ydCBDb21tZXJjZVNESyBmcm9tIFwiQGNoZWMvY29tbWVyY2UuanNcIlxyXG5cclxudmFyIFBVQkxJQ19BUElfS0VZID0gXCJwa18yNjg1OTdkN2VjMmMyZjlkODBhZTEyODI5ZDUwMjVkMTVlYTY1Yzg3YWQyNjdcIlxyXG5cclxuY29uc3QgY29tbWVyY2UgPSBuZXcgQ29tbWVyY2VTREsoUFVCTElDX0FQSV9LRVkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tbWVyY2U7XHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBjb21tZXJjZSBmcm9tICcuLi9saWIvY29tbWVyY2UnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5cbmltcG9ydCBDYXRlZ29yeUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9DYXRlZ29yaWVzL0NhdGVnb3J5TGlzdCdcbmltcG9ydCBQcm9kdWN0R3JpZCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RHcmlkJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCB7IGRhdGE6IHByb2R1Y3RzIH0gPSBhd2FpdCBjb21tZXJjZS5wcm9kdWN0cy5saXN0KHtcbiAgICBsaW1pdDogMjAwLFxuICB9KTtcbiAgY29uc3QgeyBkYXRhOiBjYXRlZ29yaWVzIH0gPSBhd2FpdCBjb21tZXJjZS5jYXRlZ29yaWVzLmxpc3QoKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0cyxcbiAgICAgIGNhdGVnb3JpZXMsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiA2MCxcbiAgfTsgXG59XG5cbmZ1bmN0aW9uIEluZGV4UGFnZSh7IHByb2R1Y3RzLCBjYXRlZ29yaWVzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DYXJhdmFuT3V0bGV0PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6bWluLWgtc2NyZWVuIG1kOmZsZXggbWQ6aXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBzcGFjZS15LTMgbWQ6c3BhY2UteS0wIG1kOnNwYWNlLXgtMTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOm1heC1oLXNjcmVlbiBtZDp3LTEvMiBmbGV4IGl0ZW1zLWVuZCBqdXN0aWZ5LWJldHdlZW4gbWQ6c3RpY2t5IG1kOnRvcC0wXCI+XG5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kOnB5LTEyIGhpZGRlbiBtZDpibG9jayBtZDpzdGlja3kgbWQ6dG9wLTBcIlxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDUwIH19XG4gICAgICAgICAgICAgIGFuaW1hdGU9e3tcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgZGVsYXk6IDAuMjUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB5OiAtNTAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIiB0ZXh0LXhsIG1kOnRleHQtM3hsXCI+QnV0aWtrOjwvaDE+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zXCI+XG4gICAgICAgICAgICAgICAgPENhdGVnb3J5TGlzdCBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtZDptaW4taC1zY3JlZW4gcHktNiBtZDpweS0xMiBmbGV4IGl0ZW1zLWNlbnRlciBtZDp3LTEvMiBtZDp6LTQwXCJcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogNTAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB5OiAtNTAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UHJvZHVjdEdyaWRcbiAgICAgICAgICAgICAgcHJvZHVjdHM9e3Byb2R1Y3RzfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTExMiBtZDpoLTk2IHhsOmgtMTEyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoZWMvY29tbWVyY2UuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzY2F0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmFtZXItbW90aW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=