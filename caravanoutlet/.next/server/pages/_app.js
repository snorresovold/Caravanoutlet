(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout/CartSummary.js":
/*!******************************************!*\
  !*** ./components/Layout/CartSummary.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/cart */ "./context/cart.js");
/* harmony import */ var _context_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/modal */ "./context/modal.js");

var _jsxFileName = "C:\\Users\\47457\\Desktop\\Programmering\\Web\\Caravanoutlet\\caravanoutlet\\components\\Layout\\CartSummary.js";



function CartSummary() {
  const {
    total_unique_items
  } = (0,_context_cart__WEBPACK_IMPORTED_MODULE_1__.useCartState)();
  const {
    openModal
  } = (0,_context_modal__WEBPACK_IMPORTED_MODULE_2__.useModalDispatch)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    onClick: openModal,
    children: ["Handlekurv (", total_unique_items, ")"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (CartSummary);

/***/ }),

/***/ "./components/Layout/Footer.js":
/*!*************************************!*\
  !*** ./components/Layout/Footer.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Footer.module.css */ "./styles/Footer.module.css");
/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\47457\\Desktop\\Programmering\\Web\\Caravanoutlet\\caravanoutlet\\components\\Layout\\Footer.js";


const Footer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default().footer),
    children: "Utviklet av Snorre S\xF8vold 2021"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layout/Layout.js":
/*!*************************************!*\
  !*** ./components/Layout/Layout.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./components/Layout/Navbar.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Layout/Footer.js");

var _jsxFileName = "C:\\Users\\47457\\Desktop\\Programmering\\Web\\Caravanoutlet\\caravanoutlet\\components\\Layout\\Layout.js";



const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "content",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Layout/Navbar.js":
/*!*************************************!*\
  !*** ./components/Layout/Navbar.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CartSummary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CartSummary */ "./components/Layout/CartSummary.js");

var _jsxFileName = "C:\\Users\\47457\\Desktop\\Programmering\\Web\\Caravanoutlet\\caravanoutlet\\components\\Layout\\Navbar.js";



const Navbar = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "logo",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "Caravanoutlet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 32
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: "Hjem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 28
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/kategorier",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: "Produkter"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 38
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/omoss",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: "Om oss"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 33
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CartSummary__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./context/checkout.js":
/*!*****************************!*\
  !*** ./context/checkout.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutProvider": function() { return /* binding */ CheckoutProvider; },
/* harmony export */   "useCheckoutState": function() { return /* binding */ useCheckoutState; },
/* harmony export */   "useCheckoutDispatch": function() { return /* binding */ useCheckoutDispatch; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/commerce */ "./lib/commerce.js");

var _jsxFileName = "C:\\Users\\47457\\Desktop\\Programmering\\Web\\Caravanoutlet\\caravanoutlet\\context\\checkout.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const CheckoutStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const CheckoutDispatchContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const SET_CURRENT_STEP = "SET_CURRENT_STEP";
const SET_CHECKOUT = "SET_CHECKOUT";
const SET_LIVE = "SET_LIVE";
const SET_PROCESSING = "SET_PROCESSING";
const SET_ERROR = "SET_ERROR";
const RESET = "RESET";
const initialState = {
  currentStep: "extrafields",
  processing: false,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_STEP:
      return _objectSpread(_objectSpread({}, state), {}, {
        currentStep: action.payload
      });

    case SET_CHECKOUT:
      return _objectSpread(_objectSpread({}, state), action.payload);

    case SET_LIVE:
      return _objectSpread(_objectSpread({}, state), {}, {
        live: _objectSpread(_objectSpread({}, state.live), action.payload)
      });

    case SET_PROCESSING:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: action.payload
      });

    case SET_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.payload
      });

    case RESET:
      return initialState;

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const CheckoutProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);

  const generateToken = async cartId => {
    if (!cartId) return;

    try {
      const payload = await _lib_commerce__WEBPACK_IMPORTED_MODULE_2__.commerce.checkout.generateToken(cartId, {
        type: "cart"
      });
      dispatch({
        type: SET_CHECKOUT,
        payload
      });
    } catch (err) {// noop
    }
  };

  const setShippingMethod = async (shipping_option_id, country, region) => {
    try {
      const {
        live
      } = await _lib_commerce__WEBPACK_IMPORTED_MODULE_2__.commerce.checkout.checkShippingOption(state.id, _objectSpread({
        shipping_option_id,
        country
      }, region && {
        region
      }));
      dispatch({
        type: SET_LIVE,
        payload: live
      });
    } catch (err) {// noop
    }
  };

  const setCurrentStep = step => dispatch({
    type: SET_CURRENT_STEP,
    payload: step
  });

  const nextStepFrom = currentStep => {
    switch (currentStep) {
      case "extrafields":
        return state.collects.shipping_address ? "shipping" : "billing";

      case "shipping":
      default:
        return "billing";
    }
  };

  const capture = values => _lib_commerce__WEBPACK_IMPORTED_MODULE_2__.commerce.checkout.capture(state.id, values);

  const setProcessing = payload => dispatch({
    type: SET_PROCESSING,
    payload
  });

  const setError = payload => dispatch({
    type: SET_ERROR,
    payload
  });

  const reset = () => dispatch({
    type: RESET
  });

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CheckoutDispatchContext.Provider, {
    value: {
      generateToken,
      setShippingMethod,
      setCurrentStep,
      nextStepFrom,
      capture,
      setProcessing,
      setError,
      reset
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CheckoutStateContext.Provider, {
      value: state,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 5
  }, undefined);
};
const useCheckoutState = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CheckoutStateContext);
const useCheckoutDispatch = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CheckoutDispatchContext);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/theme */ "./context/theme.js");
/* harmony import */ var _context_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/modal */ "./context/modal.js");
/* harmony import */ var _context_cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/cart */ "./context/cart.js");
/* harmony import */ var _context_checkout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/checkout */ "./context/checkout.js");

var _jsxFileName = "C:\\Users\\47457\\Desktop\\Programmering\\Web\\Caravanoutlet\\caravanoutlet\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_theme__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_modal__WEBPACK_IMPORTED_MODULE_6__.ModalProvider, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_cart__WEBPACK_IMPORTED_MODULE_7__.CartProvider, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_checkout__WEBPACK_IMPORTED_MODULE_8__.CheckoutProvider, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
            initial: false,
            exitBeforeEnter: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/Footer.module.css":
/*!**********************************!*\
  !*** ./styles/Footer.module.css ***!
  \**********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"footer": "Footer_footer__317iK"
};


/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "@chec/commerce.js":
/*!************************************!*\
  !*** external "@chec/commerce.js" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chec/commerce.js");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","context_cart_js-context_modal_js-context_theme_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vY29tcG9uZW50cy9MYXlvdXQvQ2FydFN1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC8uL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvLi9jb21wb25lbnRzL0xheW91dC9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC8uL2NvbnRleHQvY2hlY2tvdXQuanMiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC8uL3N0eWxlcy9Gb290ZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwiQGNoZWMvY29tbWVyY2UuanNcIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC9pZ25vcmVkfEM6XFxVc2Vyc1xcNDc0NTdcXERlc2t0b3BcXFByb2dyYW1tZXJpbmdcXFdlYlxcQ2FyYXZhbm91dGxldFxcY2FyYXZhbm91dGxldFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkNhcnRTdW1tYXJ5IiwidG90YWxfdW5pcXVlX2l0ZW1zIiwidXNlQ2FydFN0YXRlIiwib3Blbk1vZGFsIiwidXNlTW9kYWxEaXNwYXRjaCIsIkZvb3RlciIsInN0eWxlcyIsIkxheW91dCIsImNoaWxkcmVuIiwiTmF2YmFyIiwiQ2hlY2tvdXRTdGF0ZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ2hlY2tvdXREaXNwYXRjaENvbnRleHQiLCJTRVRfQ1VSUkVOVF9TVEVQIiwiU0VUX0NIRUNLT1VUIiwiU0VUX0xJVkUiLCJTRVRfUFJPQ0VTU0lORyIsIlNFVF9FUlJPUiIsIlJFU0VUIiwiaW5pdGlhbFN0YXRlIiwiY3VycmVudFN0ZXAiLCJwcm9jZXNzaW5nIiwiZXJyb3IiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImxpdmUiLCJFcnJvciIsIkNoZWNrb3V0UHJvdmlkZXIiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJnZW5lcmF0ZVRva2VuIiwiY2FydElkIiwiY29tbWVyY2UiLCJlcnIiLCJzZXRTaGlwcGluZ01ldGhvZCIsInNoaXBwaW5nX29wdGlvbl9pZCIsImNvdW50cnkiLCJyZWdpb24iLCJpZCIsInNldEN1cnJlbnRTdGVwIiwic3RlcCIsIm5leHRTdGVwRnJvbSIsImNvbGxlY3RzIiwic2hpcHBpbmdfYWRkcmVzcyIsImNhcHR1cmUiLCJ2YWx1ZXMiLCJzZXRQcm9jZXNzaW5nIiwic2V0RXJyb3IiLCJyZXNldCIsInVzZUNoZWNrb3V0U3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlQ2hlY2tvdXREaXNwYXRjaCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdz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QUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0FBRUQsK0RBQWVGLEtBQWYsRTs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLCtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FydFN0YXRlIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvY2FydFwiO1xyXG5pbXBvcnQgeyB1c2VNb2RhbERpc3BhdGNoIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvbW9kYWxcIjtcclxuXHJcbmZ1bmN0aW9uIENhcnRTdW1tYXJ5KCkge1xyXG4gIGNvbnN0IHsgdG90YWxfdW5pcXVlX2l0ZW1zIH0gPSB1c2VDYXJ0U3RhdGUoKTtcclxuICBjb25zdCB7IG9wZW5Nb2RhbCB9ID0gdXNlTW9kYWxEaXNwYXRjaCgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtvcGVuTW9kYWx9PlxyXG4gICAgICBIYW5kbGVrdXJ2ICh7dG90YWxfdW5pcXVlX2l0ZW1zfSlcclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnRTdW1tYXJ5OyIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0Zvb3Rlci5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgIFV0dmlrbGV0IGF2IFNub3JyZSBTw7h2b2xkIDIwMjFcclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgQ2FydFN1bW1hcnkgZnJvbSBcIi4vQ2FydFN1bW1hcnlcIjtcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPkNhcmF2YW5vdXRsZXQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YT5IamVtPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9rYXRlZ29yaWVyXCI+PGE+UHJvZHVrdGVyPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9vbW9zc1wiPjxhPk9tIG9zczwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDxDYXJ0U3VtbWFyeSAvPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IGNvbW1lcmNlIH0gZnJvbSBcIi4uL2xpYi9jb21tZXJjZVwiO1xyXG5cclxuY29uc3QgQ2hlY2tvdXRTdGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmNvbnN0IENoZWNrb3V0RGlzcGF0Y2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgU0VUX0NVUlJFTlRfU1RFUCA9IFwiU0VUX0NVUlJFTlRfU1RFUFwiO1xyXG5jb25zdCBTRVRfQ0hFQ0tPVVQgPSBcIlNFVF9DSEVDS09VVFwiO1xyXG5jb25zdCBTRVRfTElWRSA9IFwiU0VUX0xJVkVcIjtcclxuY29uc3QgU0VUX1BST0NFU1NJTkcgPSBcIlNFVF9QUk9DRVNTSU5HXCI7XHJcbmNvbnN0IFNFVF9FUlJPUiA9IFwiU0VUX0VSUk9SXCI7XHJcbmNvbnN0IFJFU0VUID0gXCJSRVNFVFwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGN1cnJlbnRTdGVwOiBcImV4dHJhZmllbGRzXCIsXHJcbiAgcHJvY2Vzc2luZzogZmFsc2UsXHJcbiAgZXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFNFVF9DVVJSRU5UX1NURVA6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3VycmVudFN0ZXA6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTRVRfQ0hFQ0tPVVQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNFVF9MSVZFOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbGl2ZTogeyAuLi5zdGF0ZS5saXZlLCAuLi5hY3Rpb24ucGF5bG9hZCB9IH07XHJcbiAgICBjYXNlIFNFVF9QUk9DRVNTSU5HOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvY2Vzc2luZzogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgU0VUX0VSUk9SOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFJFU0VUOlxyXG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGFjdGlvbjogJHthY3Rpb24udHlwZX1gKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ2hlY2tvdXRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgY29uc3QgZ2VuZXJhdGVUb2tlbiA9IGFzeW5jIChjYXJ0SWQpID0+IHtcclxuICAgIGlmICghY2FydElkKSByZXR1cm47XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGNvbW1lcmNlLmNoZWNrb3V0LmdlbmVyYXRlVG9rZW4oY2FydElkLCB7XHJcbiAgICAgICAgdHlwZTogXCJjYXJ0XCIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBTRVRfQ0hFQ0tPVVQsIHBheWxvYWQgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgLy8gbm9vcFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldFNoaXBwaW5nTWV0aG9kID0gYXN5bmMgKHNoaXBwaW5nX29wdGlvbl9pZCwgY291bnRyeSwgcmVnaW9uKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGxpdmUgfSA9IGF3YWl0IGNvbW1lcmNlLmNoZWNrb3V0LmNoZWNrU2hpcHBpbmdPcHRpb24oc3RhdGUuaWQsIHtcclxuICAgICAgICBzaGlwcGluZ19vcHRpb25faWQsXHJcbiAgICAgICAgY291bnRyeSxcclxuICAgICAgICAuLi4ocmVnaW9uICYmIHsgcmVnaW9uIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogU0VUX0xJVkUsIHBheWxvYWQ6IGxpdmUgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgLy8gbm9vcFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldEN1cnJlbnRTdGVwID0gKHN0ZXApID0+XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFNFVF9DVVJSRU5UX1NURVAsIHBheWxvYWQ6IHN0ZXAgfSk7XHJcblxyXG4gIGNvbnN0IG5leHRTdGVwRnJvbSA9IChjdXJyZW50U3RlcCkgPT4ge1xyXG4gICAgc3dpdGNoIChjdXJyZW50U3RlcCkge1xyXG4gICAgICBjYXNlIFwiZXh0cmFmaWVsZHNcIjpcclxuICAgICAgICByZXR1cm4gc3RhdGUuY29sbGVjdHMuc2hpcHBpbmdfYWRkcmVzcyA/IFwic2hpcHBpbmdcIiA6IFwiYmlsbGluZ1wiO1xyXG4gICAgICBjYXNlIFwic2hpcHBpbmdcIjpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gXCJiaWxsaW5nXCI7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FwdHVyZSA9ICh2YWx1ZXMpID0+IGNvbW1lcmNlLmNoZWNrb3V0LmNhcHR1cmUoc3RhdGUuaWQsIHZhbHVlcyk7XHJcblxyXG4gIGNvbnN0IHNldFByb2Nlc3NpbmcgPSAocGF5bG9hZCkgPT5cclxuICAgIGRpc3BhdGNoKHsgdHlwZTogU0VUX1BST0NFU1NJTkcsIHBheWxvYWQgfSk7XHJcblxyXG4gIGNvbnN0IHNldEVycm9yID0gKHBheWxvYWQpID0+IGRpc3BhdGNoKHsgdHlwZTogU0VUX0VSUk9SLCBwYXlsb2FkIH0pO1xyXG5cclxuICBjb25zdCByZXNldCA9ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogUkVTRVQgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2hlY2tvdXREaXNwYXRjaENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBnZW5lcmF0ZVRva2VuLFxyXG4gICAgICAgIHNldFNoaXBwaW5nTWV0aG9kLFxyXG4gICAgICAgIHNldEN1cnJlbnRTdGVwLFxyXG4gICAgICAgIG5leHRTdGVwRnJvbSxcclxuICAgICAgICBjYXB0dXJlLFxyXG4gICAgICAgIHNldFByb2Nlc3NpbmcsXHJcbiAgICAgICAgc2V0RXJyb3IsXHJcbiAgICAgICAgcmVzZXQsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxDaGVja291dFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9DaGVja291dFN0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIDwvQ2hlY2tvdXREaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VDaGVja291dFN0YXRlID0gKCkgPT4gdXNlQ29udGV4dChDaGVja291dFN0YXRlQ29udGV4dCk7XHJcbmV4cG9ydCBjb25zdCB1c2VDaGVja291dERpc3BhdGNoID0gKCkgPT4gdXNlQ29udGV4dChDaGVja291dERpc3BhdGNoQ29udGV4dCk7XHJcbiIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0J1xuXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcblxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L3RoZW1lXCI7XG5pbXBvcnQgeyBNb2RhbFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvbW9kYWxcIjtcbmltcG9ydCB7IENhcnRQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L2NhcnRcIjtcbmltcG9ydCB7IENoZWNrb3V0UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9jaGVja291dFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlcj5cbiAgICA8TW9kYWxQcm92aWRlcj5cbiAgICAgIDxDYXJ0UHJvdmlkZXI+XG4gICAgICAgIDxDaGVja291dFByb3ZpZGVyPlxuICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBpbml0aWFsPXtmYWxzZX0gZXhpdEJlZm9yZUVudGVyPlxuICAgICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgPC9DaGVja291dFByb3ZpZGVyPlxuICAgICAgPC9DYXJ0UHJvdmlkZXI+XG4gICAgPC9Nb2RhbFByb3ZpZGVyPlxuICA8L1RoZW1lUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlclwiOiBcIkZvb3Rlcl9mb290ZXJfXzMxN2lLXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hlYy9jb21tZXJjZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=