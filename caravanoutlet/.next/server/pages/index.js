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
/* harmony import */ var _styles_Categories_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Categories.module.css */ "./styles/Categories.module.css");
/* harmony import */ var _styles_Categories_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Categories_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\47457\\Desktop\\Programmering\\Web\\Caravanoutlet\\caravanoutlet\\components\\Categories\\CategoryList.js";



function CategoryList({
  categories
}) {
  return categories.map(({
    name,
    slug
  }, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
    className: (_styles_Categories_module_css__WEBPACK_IMPORTED_MODULE_2___default().list),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `/kategorier/${slug}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: (_styles_Categories_module_css__WEBPACK_IMPORTED_MODULE_2___default().CategoryList),
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }, this)
    }, slug, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }, this));
}

/* harmony default export */ __webpack_exports__["default"] = (CategoryList);

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
/* harmony import */ var _Product_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product/Product */ "./components/Products/Product/Product.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/Products/styles.js");

var _jsxFileName = "C:\\Users\\47457\\Desktop\\Programmering\\Web\\Caravanoutlet\\caravanoutlet\\components\\Products\\ProductGrid.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function ProductGrid(_ref) {
  let {
    products
  } = _ref,
      props = _objectWithoutProperties(_ref, ["products"]);

  if (!products || products.length === 0) return null;
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_4__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
      container: true,
      justify: "center",
      spacing: 4,
      children: products.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `/produkter/${product.permalink}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
          className: classes.cursor,
          item: true,
          xs: 12,
          sm: 6,
          md: 4,
          lg: 3,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product_Product__WEBPACK_IMPORTED_MODULE_1__.default, {
            product: product
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, this)
        }, product.id, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 19
      }, this))
    }, void 0, false, {
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

/* harmony default export */ __webpack_exports__["default"] = (ProductGrid);

/***/ }),

/***/ "./components/Products/Product/Product.js":
/*!************************************************!*\
  !*** ./components/Products/Product/Product.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/Products/Product/styles.js");
/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/commerce */ "./lib/commerce.js");

var _jsxFileName = "C:\\Users\\47457\\Desktop\\Programmering\\Web\\Caravanoutlet\\caravanoutlet\\components\\Products\\Product\\Product.js";





const Product = ({
  product
}) => {
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_3__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Card, {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.CardMedia, {
      component: "image",
      className: classes.media,
      image: product.media.source,
      title: product.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.CardContent, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
        gutterBottom: true,
        variant: "h5",
        component: "h2",
        children: product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
        gutterBottom: true,
        variant: "h5",
        component: "h2",
        children: [product.price.formatted, " kr"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./components/Products/Product/styles.js":
/*!***********************************************!*\
  !*** ./components/Products/Product/styles.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9

  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})));

/***/ }),

/***/ "./components/Products/styles.js":
/*!***************************************!*\
  !*** ./components/Products/styles.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  },
  root: {
    flexGrow: 1
  },
  cursor: {
    cursor: 'pointer'
  }
})));

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
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);
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
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().categories),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Kategorier"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Categories_CategoryList__WEBPACK_IMPORTED_MODULE_4__.default, {
          categories: categories
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
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

/***/ "./styles/Categories.module.css":
/*!**************************************!*\
  !*** ./styles/Categories.module.css ***!
  \**************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"list": "Categories_list__g142n"
};


/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"categories": "Home_categories__1AURx",
	"listitem": "Home_listitem__33rZh"
};


/***/ }),

/***/ "@chec/commerce.js":
/*!************************************!*\
  !*** external "@chec/commerce.js" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chec/commerce.js");;

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ "@material-ui/system":
/*!**************************************!*\
  !*** external "@material-ui/system" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/system");;

/***/ }),

/***/ "@material-ui/utils":
/*!*************************************!*\
  !*** external "@material-ui/utils" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/utils");;

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("framer-motion");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","vendors-node_modules_material-ui_core_esm_styles_index_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vY29tcG9uZW50cy9DYXRlZ29yaWVzL0NhdGVnb3J5TGlzdC5qcyIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vY29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0R3JpZC5qcyIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vY29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0L1Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC8uL2NvbXBvbmVudHMvUHJvZHVjdHMvUHJvZHVjdC9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC8uL2NvbXBvbmVudHMvUHJvZHVjdHMvc3R5bGVzLmpzIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvLi9saWIvY29tbWVyY2UuanMiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvLi9zdHlsZXMvQ2F0ZWdvcmllcy5tb2R1bGUuY3NzIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJAY2hlYy9jb21tZXJjZS5qc1wiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9zeXN0ZW1cIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCIiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2lnbm9yZWR8QzpcXFVzZXJzXFw0NzQ1N1xcRGVza3RvcFxcUHJvZ3JhbW1lcmluZ1xcV2ViXFxDYXJhdmFub3V0bGV0XFxjYXJhdmFub3V0bGV0XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQ2F0ZWdvcnlMaXN0IiwiY2F0ZWdvcmllcyIsIm1hcCIsIm5hbWUiLCJzbHVnIiwiaW5kZXgiLCJzdHlsZXMiLCJQcm9kdWN0R3JpZCIsInByb2R1Y3RzIiwicHJvcHMiLCJsZW5ndGgiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwicHJvZHVjdCIsInBlcm1hbGluayIsImN1cnNvciIsImlkIiwiUHJvZHVjdCIsInJvb3QiLCJtZWRpYSIsInNvdXJjZSIsInByaWNlIiwiZm9ybWF0dGVkIiwibWFrZVN0eWxlcyIsIm1heFdpZHRoIiwiaGVpZ2h0IiwicGFkZGluZ1RvcCIsImNhcmRBY3Rpb25zIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiY2FyZENvbnRlbnQiLCJ0aGVtZSIsInRvb2xiYXIiLCJtaXhpbnMiLCJjb250ZW50IiwiZmxleEdyb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJwYWRkaW5nIiwic3BhY2luZyIsIlBVQkxJQ19BUElfS0VZIiwiY29tbWVyY2UiLCJDb21tZXJjZVNESyIsImdldFN0YXRpY1Byb3BzIiwiZGF0YSIsImxpbWl0IiwicmV2YWxpZGF0ZSIsIkluZGV4UGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsU0FBU0EsWUFBVCxDQUFzQjtBQUFFQztBQUFGLENBQXRCLEVBQXNDO0FBRXBDLFNBQU9BLFVBQVUsQ0FBQ0MsR0FBWCxDQUFlLENBQUM7QUFBRUMsUUFBRjtBQUFRQztBQUFSLEdBQUQsRUFBaUJDLEtBQWpCLGtCQUNsQjtBQUFJLGFBQVMsRUFBRUMsMkVBQWY7QUFBQSwyQkFDRTtBQUFBLDZCQUNGLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFHLGVBQWNGLElBQUssRUFBaEM7QUFBQSwrQkFDRTtBQUFHLG1CQUFTLEVBQUVFLG1GQUFkO0FBQUEsb0JBQW9DSDtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURFLE9BQVNDLElBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERyxDQUFQO0FBU0Q7O0FBRUQsK0RBQWVKLFlBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNPLFdBQVQsT0FBNkM7QUFBQSxNQUF4QjtBQUFFQztBQUFGLEdBQXdCO0FBQUEsTUFBVEMsS0FBUzs7QUFDM0MsTUFBSSxDQUFDRCxRQUFELElBQWFBLFFBQVEsQ0FBQ0UsTUFBVCxLQUFvQixDQUFyQyxFQUF3QyxPQUFPLElBQVA7QUFDeEMsUUFBTUMsT0FBTyxHQUFHQyxnREFBUyxFQUF6QjtBQUVBLHNCQUNF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LDhEQUFDLHdFQUFEO0FBQWMsb0JBQVUsRUFBRUw7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQSxrQkFERjtBQWFEOztBQUVELCtEQUFlZ0QsU0FBZixFOzs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBLCtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9DYXRlZ29yaWVzLm1vZHVsZS5jc3NcIlxyXG5cclxuZnVuY3Rpb24gQ2F0ZWdvcnlMaXN0KHsgY2F0ZWdvcmllcyB9KSB7XHJcblxyXG4gIHJldHVybiBjYXRlZ29yaWVzLm1hcCgoeyBuYW1lLCBzbHVnIH0sIGluZGV4KSA9PiAoXHJcbiAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT5cclxuICAgICAgICA8bGkga2V5PXtzbHVnfT5cclxuICAgICAgPExpbmsgaHJlZj17YC9rYXRlZ29yaWVyLyR7c2x1Z31gfT5cclxuICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5DYXRlZ29yeUxpc3R9PntuYW1lfTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICApKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlMaXN0O1xyXG4iLCJpbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi9Qcm9kdWN0L1Byb2R1Y3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RHcmlkKHsgcHJvZHVjdHMsIC4uLnByb3BzIH0pIHtcclxuICBpZiAoIXByb2R1Y3RzIHx8IHByb2R1Y3RzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiIHNwYWNpbmc9ezR9PlxyXG4gICAgICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVrdGVyLyR7cHJvZHVjdC5wZXJtYWxpbmt9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXtjbGFzc2VzLmN1cnNvcn0gaXRlbSBrZXk9e3Byb2R1Y3QuaWR9IHhzPXsxMn0gc209ezZ9IG1kPXs0fSBsZz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0IHByb2R1Y3Q9e3Byb2R1Y3R9ICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgPC9HcmlkPlxyXG48L21haW4+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEdyaWQ7XHJcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgR3JpZCwgQ2FyZCwgQ2FyZE1lZGlhLCBDYXJkQ29udGVudCwgQ2FyZEFjdGlvbnMsIFR5cG9ncmFwaHksIEljb25CdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5pbXBvcnQgY29tbWVyY2UgZnJvbSBcIi4uLy4uLy4uL2xpYi9jb21tZXJjZVwiO1xyXG5cclxuY29uc3QgUHJvZHVjdCA9ICh7cHJvZHVjdH0pID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgPENhcmRNZWRpYSBjb21wb25lbnQ9XCJpbWFnZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX0gaW1hZ2U9e3Byb2R1Y3QubWVkaWEuc291cmNlfSB0aXRsZT17cHJvZHVjdC5uYW1lfSAvPlxyXG4gICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3QubmFtZX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgICB7cHJvZHVjdC5wcmljZS5mb3JtYXR0ZWR9IGtyXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIClcclxuICB9O1xyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0OyIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICAvLyBtYXhXaWR0aDogMzQ1LCBvcmlnaW5hbCB3aWR0aCBzdHlsZVxyXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIG1lZGlhOiB7XHJcbiAgICBoZWlnaHQ6IDAsXHJcbiAgICBwYWRkaW5nVG9wOiAnNTYuMjUlJywgLy8gMTY6OVxyXG4gIH0sXHJcbiAgY2FyZEFjdGlvbnM6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gIH0sXHJcbiAgY2FyZENvbnRlbnQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgfSxcclxufSkpOyIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgdG9vbGJhcjogdGhlbWUubWl4aW5zLnRvb2xiYXIsXHJcbiAgY29udGVudDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0LFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzKSxcclxuICB9LFxyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbiAgY3Vyc29yOiB7XHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gIH1cclxufSkpOyIsImltcG9ydCBDb21tZXJjZVNESyBmcm9tIFwiQGNoZWMvY29tbWVyY2UuanNcIlxyXG5cclxudmFyIFBVQkxJQ19BUElfS0VZID0gXCJwa18yNjg1OTdkN2VjMmMyZjlkODBhZTEyODI5ZDUwMjVkMTVlYTY1Yzg3YWQyNjdcIlxyXG5cclxuY29uc3QgY29tbWVyY2UgPSBuZXcgQ29tbWVyY2VTREsoUFVCTElDX0FQSV9LRVkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tbWVyY2U7XHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBjb21tZXJjZSBmcm9tICcuLi9saWIvY29tbWVyY2UnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5cbmltcG9ydCBDYXRlZ29yeUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9DYXRlZ29yaWVzL0NhdGVnb3J5TGlzdCdcbmltcG9ydCBQcm9kdWN0R3JpZCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RHcmlkJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCB7IGRhdGE6IHByb2R1Y3RzIH0gPSBhd2FpdCBjb21tZXJjZS5wcm9kdWN0cy5saXN0KHtcbiAgICBsaW1pdDogMjAwLFxuICB9KTtcbiAgY29uc3QgeyBkYXRhOiBjYXRlZ29yaWVzIH0gPSBhd2FpdCBjb21tZXJjZS5jYXRlZ29yaWVzLmxpc3QoKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0cyxcbiAgICAgIGNhdGVnb3JpZXMsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiA2MCxcbiAgfTsgXG59XG5cbmZ1bmN0aW9uIEluZGV4UGFnZSh7IHByb2R1Y3RzLCBjYXRlZ29yaWVzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DYXJhdmFuT3V0bGV0PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc30+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPkthdGVnb3JpZXI8L2gxPlxuICAgICAgICAgIDxDYXRlZ29yeUxpc3QgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxpc3RcIjogXCJDYXRlZ29yaWVzX2xpc3RfX2cxNDJuXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXRlZ29yaWVzXCI6IFwiSG9tZV9jYXRlZ29yaWVzX18xQVVSeFwiLFxuXHRcImxpc3RpdGVtXCI6IFwiSG9tZV9saXN0aXRlbV9fMzNyWmhcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGVjL2NvbW1lcmNlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3N5c3RlbVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3V0aWxzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmFtZXItbW90aW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9