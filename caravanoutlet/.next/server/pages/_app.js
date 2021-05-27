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

/***/ "./context/theme.js":
/*!**************************!*\
  !*** ./context/theme.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeProvider": function() { return /* binding */ ThemeProvider; },
/* harmony export */   "useThemeState": function() { return /* binding */ useThemeState; },
/* harmony export */   "useThemeDispatch": function() { return /* binding */ useThemeDispatch; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\47457\\Desktop\\Programmering\\Web\\Caravanoutlet\\caravanoutlet\\context\\theme.js";

const ThemeStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext();
const ThemeDispatchContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext();
const initialState = null;
const ThemeProvider = ({
  children
}) => {
  const [theme, setTheme] = react__WEBPACK_IMPORTED_MODULE_1__.useState(initialState);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeDispatchContext.Provider, {
    value: setTheme,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeStateContext.Provider, {
      value: theme,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};
const useThemeState = () => react__WEBPACK_IMPORTED_MODULE_1__.useContext(ThemeStateContext);
const useThemeDispatch = () => react__WEBPACK_IMPORTED_MODULE_1__.useContext(ThemeDispatchContext);

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","context_cart_js-context_modal_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vY29tcG9uZW50cy9MYXlvdXQvQ2FydFN1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC8uL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvLi9jb21wb25lbnRzL0xheW91dC9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC8uL2NvbnRleHQvY2hlY2tvdXQuanMiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC8uL2NvbnRleHQvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC8uL3N0eWxlcy9Gb290ZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwiQGNoZWMvY29tbWVyY2UuanNcIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC9pZ25vcmVkfEM6XFxVc2Vyc1xcNDc0NTdcXERlc2t0b3BcXFByb2dyYW1tZXJpbmdcXFdlYlxcQ2FyYXZhbm91dGxldFxcY2FyYXZhbm91dGxldFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkNhcnRTdW1tYXJ5IiwidG90YWxfdW5pcXVlX2l0ZW1zIiwidXNlQ2FydFN0YXRlIiwib3Blbk1vZGFsIiwidXNlTW9kYWxEaXNwYXRjaCIsIkZvb3RlciIsInN0eWxlcyIsIkxheW91dCIsImNoaWxkcmVuIiwiTmF2YmFyIiwiQ2hlY2tvdXRTdGF0ZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ2hlY2tvdXREaXNwYXRjaENvbnRleHQiLCJTRVRfQ1VSUkVOVF9TVEVQIiwiU0VUX0NIRUNLT1VUIiwiU0VUX0xJVkUiLCJTRVRfUFJPQ0VTU0lORyIsIlNFVF9FUlJPUiIsIlJFU0VUIiwiaW5pdGlhbFN0YXRlIiwiY3VycmVudFN0ZXAiLCJwcm9jZXNzaW5nIiwiZXJyb3IiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImxpdmUiLCJFcnJvciIsIkNoZWNrb3V0UHJvdmlkZXIiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJnZW5lcmF0ZVRva2VuIiwiY2FydElkIiwiY29tbWVyY2UiLCJlcnIiLCJzZXRTaGlwcGluZ01ldGhvZCIsInNoaXBwaW5nX29wdGlvbl9pZCIsImNvdW50cnkiLCJyZWdpb24iLCJpZCIsInNldEN1cnJlbnRTdGVwIiwic3RlcCIsIm5leHRTdGVwRnJvbSIsImNvbGxlY3RzIiwic2hpcHBpbmdfYWRkcmVzcyIsImNhcHR1cmUiLCJ2YWx1ZXMiLCJzZXRQcm9jZXNzaW5nIiwic2V0RXJyb3IiLCJyZXNldCIsInVzZUNoZWNrb3V0U3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlQ2hlY2tvdXREaXNwYXRjaCIsIlRoZW1lU3RhdGVDb250ZXh0IiwiUmVhY3QiLCJUaGVtZURpc3BhdGNoQ29udGV4dCIsIlRoZW1lUHJvdmlkZXIiLCJ0aGVtZSIsInNldFRoZW1lIiwidXNlVGhlbWVTdGF0ZSIsInVzZVRoZW1lRGlzcGF0Y2giLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsR0FBdUI7QUFDckIsUUFBTTtBQUFFQztBQUFGLE1BQXlCQywyREFBWSxFQUEzQztBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFnQkMsZ0VBQWdCLEVBQXRDO0FBRUEsc0JBQ0U7QUFBUSxXQUFPLEVBQUVELFNBQWpCO0FBQUEsK0JBQ2VGLGtCQURmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0FBRUQsK0RBQWVELFdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7O0FBRUEsTUFBTUssTUFBTSxHQUFHLE1BQU07QUFDakIsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLHlFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsQ0FOSDs7QUFRRSwrREFBZUQsTUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWRjtBQUNBOztBQUVBLE1BQU1FLE1BQU0sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUM3QixzQkFDSTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUEsNEJBQ0ksOERBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQUVNQSxRQUZOLGVBR0ksOERBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVFILENBVEQ7O0FBV0EsK0RBQWVELE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7O0FBRUEsTUFBTUUsTUFBTSxHQUFHLE1BQU07QUFDakIsc0JBQ0k7QUFB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Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FydFN0YXRlIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvY2FydFwiO1xyXG5pbXBvcnQgeyB1c2VNb2RhbERpc3BhdGNoIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvbW9kYWxcIjtcclxuXHJcbmZ1bmN0aW9uIENhcnRTdW1tYXJ5KCkge1xyXG4gIGNvbnN0IHsgdG90YWxfdW5pcXVlX2l0ZW1zIH0gPSB1c2VDYXJ0U3RhdGUoKTtcclxuICBjb25zdCB7IG9wZW5Nb2RhbCB9ID0gdXNlTW9kYWxEaXNwYXRjaCgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtvcGVuTW9kYWx9PlxyXG4gICAgICBIYW5kbGVrdXJ2ICh7dG90YWxfdW5pcXVlX2l0ZW1zfSlcclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnRTdW1tYXJ5OyIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0Zvb3Rlci5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgIFV0dmlrbGV0IGF2IFNub3JyZSBTw7h2b2xkIDIwMjFcclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgQ2FydFN1bW1hcnkgZnJvbSBcIi4vQ2FydFN1bW1hcnlcIjtcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPkNhcmF2YW5vdXRsZXQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YT5IamVtPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9rYXRlZ29yaWVyXCI+PGE+UHJvZHVrdGVyPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9vbW9zc1wiPjxhPk9tIG9zczwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDxDYXJ0U3VtbWFyeSAvPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IGNvbW1lcmNlIH0gZnJvbSBcIi4uL2xpYi9jb21tZXJjZVwiO1xyXG5cclxuY29uc3QgQ2hlY2tvdXRTdGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmNvbnN0IENoZWNrb3V0RGlzcGF0Y2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgU0VUX0NVUlJFTlRfU1RFUCA9IFwiU0VUX0NVUlJFTlRfU1RFUFwiO1xyXG5jb25zdCBTRVRfQ0hFQ0tPVVQgPSBcIlNFVF9DSEVDS09VVFwiO1xyXG5jb25zdCBTRVRfTElWRSA9IFwiU0VUX0xJVkVcIjtcclxuY29uc3QgU0VUX1BST0NFU1NJTkcgPSBcIlNFVF9QUk9DRVNTSU5HXCI7XHJcbmNvbnN0IFNFVF9FUlJPUiA9IFwiU0VUX0VSUk9SXCI7XHJcbmNvbnN0IFJFU0VUID0gXCJSRVNFVFwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGN1cnJlbnRTdGVwOiBcImV4dHJhZmllbGRzXCIsXHJcbiAgcHJvY2Vzc2luZzogZmFsc2UsXHJcbiAgZXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFNFVF9DVVJSRU5UX1NURVA6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3VycmVudFN0ZXA6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTRVRfQ0hFQ0tPVVQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNFVF9MSVZFOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbGl2ZTogeyAuLi5zdGF0ZS5saXZlLCAuLi5hY3Rpb24ucGF5bG9hZCB9IH07XHJcbiAgICBjYXNlIFNFVF9QUk9DRVNTSU5HOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvY2Vzc2luZzogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgU0VUX0VSUk9SOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFJFU0VUOlxyXG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGFjdGlvbjogJHthY3Rpb24udHlwZX1gKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ2hlY2tvdXRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgY29uc3QgZ2VuZXJhdGVUb2tlbiA9IGFzeW5jIChjYXJ0SWQpID0+IHtcclxuICAgIGlmICghY2FydElkKSByZXR1cm47XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGNvbW1lcmNlLmNoZWNrb3V0LmdlbmVyYXRlVG9rZW4oY2FydElkLCB7XHJcbiAgICAgICAgdHlwZTogXCJjYXJ0XCIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBTRVRfQ0hFQ0tPVVQsIHBheWxvYWQgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgLy8gbm9vcFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldFNoaXBwaW5nTWV0aG9kID0gYXN5bmMgKHNoaXBwaW5nX29wdGlvbl9pZCwgY291bnRyeSwgcmVnaW9uKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGxpdmUgfSA9IGF3YWl0IGNvbW1lcmNlLmNoZWNrb3V0LmNoZWNrU2hpcHBpbmdPcHRpb24oc3RhdGUuaWQsIHtcclxuICAgICAgICBzaGlwcGluZ19vcHRpb25faWQsXHJcbiAgICAgICAgY291bnRyeSxcclxuICAgICAgICAuLi4ocmVnaW9uICYmIHsgcmVnaW9uIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogU0VUX0xJVkUsIHBheWxvYWQ6IGxpdmUgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgLy8gbm9vcFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldEN1cnJlbnRTdGVwID0gKHN0ZXApID0+XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFNFVF9DVVJSRU5UX1NURVAsIHBheWxvYWQ6IHN0ZXAgfSk7XHJcblxyXG4gIGNvbnN0IG5leHRTdGVwRnJvbSA9IChjdXJyZW50U3RlcCkgPT4ge1xyXG4gICAgc3dpdGNoIChjdXJyZW50U3RlcCkge1xyXG4gICAgICBjYXNlIFwiZXh0cmFmaWVsZHNcIjpcclxuICAgICAgICByZXR1cm4gc3RhdGUuY29sbGVjdHMuc2hpcHBpbmdfYWRkcmVzcyA/IFwic2hpcHBpbmdcIiA6IFwiYmlsbGluZ1wiO1xyXG4gICAgICBjYXNlIFwic2hpcHBpbmdcIjpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gXCJiaWxsaW5nXCI7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FwdHVyZSA9ICh2YWx1ZXMpID0+IGNvbW1lcmNlLmNoZWNrb3V0LmNhcHR1cmUoc3RhdGUuaWQsIHZhbHVlcyk7XHJcblxyXG4gIGNvbnN0IHNldFByb2Nlc3NpbmcgPSAocGF5bG9hZCkgPT5cclxuICAgIGRpc3BhdGNoKHsgdHlwZTogU0VUX1BST0NFU1NJTkcsIHBheWxvYWQgfSk7XHJcblxyXG4gIGNvbnN0IHNldEVycm9yID0gKHBheWxvYWQpID0+IGRpc3BhdGNoKHsgdHlwZTogU0VUX0VSUk9SLCBwYXlsb2FkIH0pO1xyXG5cclxuICBjb25zdCByZXNldCA9ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogUkVTRVQgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2hlY2tvdXREaXNwYXRjaENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBnZW5lcmF0ZVRva2VuLFxyXG4gICAgICAgIHNldFNoaXBwaW5nTWV0aG9kLFxyXG4gICAgICAgIHNldEN1cnJlbnRTdGVwLFxyXG4gICAgICAgIG5leHRTdGVwRnJvbSxcclxuICAgICAgICBjYXB0dXJlLFxyXG4gICAgICAgIHNldFByb2Nlc3NpbmcsXHJcbiAgICAgICAgc2V0RXJyb3IsXHJcbiAgICAgICAgcmVzZXQsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxDaGVja291dFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9DaGVja291dFN0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIDwvQ2hlY2tvdXREaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VDaGVja291dFN0YXRlID0gKCkgPT4gdXNlQ29udGV4dChDaGVja291dFN0YXRlQ29udGV4dCk7XHJcbmV4cG9ydCBjb25zdCB1c2VDaGVja291dERpc3BhdGNoID0gKCkgPT4gdXNlQ29udGV4dChDaGVja291dERpc3BhdGNoQ29udGV4dCk7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVGhlbWVTdGF0ZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcbmNvbnN0IFRoZW1lRGlzcGF0Y2hDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0gbnVsbDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaGVtZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZURpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2V0VGhlbWV9PlxyXG4gICAgICA8VGhlbWVTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RoZW1lfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvVGhlbWVTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICA8L1RoZW1lRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlVGhlbWVTdGF0ZSA9ICgpID0+IFJlYWN0LnVzZUNvbnRleHQoVGhlbWVTdGF0ZUNvbnRleHQpO1xyXG5leHBvcnQgY29uc3QgdXNlVGhlbWVEaXNwYXRjaCA9ICgpID0+IFJlYWN0LnVzZUNvbnRleHQoVGhlbWVEaXNwYXRjaENvbnRleHQpO1xyXG4iLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dCdcblxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5cbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC90aGVtZVwiO1xuaW1wb3J0IHsgTW9kYWxQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L21vZGFsXCI7XG5pbXBvcnQgeyBDYXJ0UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9jYXJ0XCI7XG5pbXBvcnQgeyBDaGVja291dFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvY2hlY2tvdXRcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXI+XG4gICAgPE1vZGFsUHJvdmlkZXI+XG4gICAgICA8Q2FydFByb3ZpZGVyPlxuICAgICAgICA8Q2hlY2tvdXRQcm92aWRlcj5cbiAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2UgaW5pdGlhbD17ZmFsc2V9IGV4aXRCZWZvcmVFbnRlcj5cbiAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgIDwvQ2hlY2tvdXRQcm92aWRlcj5cbiAgICAgIDwvQ2FydFByb3ZpZGVyPlxuICAgIDwvTW9kYWxQcm92aWRlcj5cbiAgPC9UaGVtZVByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJcIjogXCJGb290ZXJfZm9vdGVyX18zMTdpS1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoZWMvY29tbWVyY2UuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9