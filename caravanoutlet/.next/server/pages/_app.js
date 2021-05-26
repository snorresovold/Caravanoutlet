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

/***/ "./context/cart.js":
/*!*************************!*\
  !*** ./context/cart.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartProvider": function() { return /* binding */ CartProvider; },
/* harmony export */   "useCartState": function() { return /* binding */ useCartState; },
/* harmony export */   "useCartDispatch": function() { return /* binding */ useCartDispatch; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/commerce */ "./lib/commerce.js");

var _jsxFileName = "C:\\Users\\47457\\Desktop\\Programmering\\Web\\Caravanoutlet\\caravanoutlet\\context\\cart.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const CartStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const CartDispatchContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const SET_CART = "SET_CART";
const RESET = "RESET";
const initialState = {
  total_items: 0,
  total_unique_items: 0,
  line_items: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CART:
      return _objectSpread(_objectSpread({}, state), action.payload);

    case RESET:
      return initialState;

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const CartProvider = ({
  children
}) => {
  const [open, toggle] = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useCycle)(false, true);
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getCart();
  }, []);

  const getCart = async () => {
    try {
      const cart = await _lib_commerce__WEBPACK_IMPORTED_MODULE_3__.commerce.cart.retrieve();
      dispatch({
        type: SET_CART,
        payload: cart
      });
    } catch (err) {// noop
    }
  };

  const setCart = async payload => dispatch({
    type: SET_CART,
    payload
  });

  const showCart = () => {
    toggle();
    document.body.classList.add("overflow-hidden");
  };

  const closeCart = () => {
    toggle();
    document.body.classList.remove("overflow-hidden");
  };

  const reset = async () => dispatch({
    type: RESET
  });

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartDispatchContext.Provider, {
    value: {
      setCart,
      showCart,
      closeCart,
      reset
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartStateContext.Provider, {
      value: _objectSpread({
        open
      }, state),
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }, undefined);
};
const useCartState = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartStateContext);
const useCartDispatch = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartDispatchContext);

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

/***/ "./context/modal.js":
/*!**************************!*\
  !*** ./context/modal.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalProvider": function() { return /* binding */ ModalProvider; },
/* harmony export */   "useModalState": function() { return /* binding */ useModalState; },
/* harmony export */   "useModalDispatch": function() { return /* binding */ useModalDispatch; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\47457\\Desktop\\Programmering\\Web\\Caravanoutlet\\caravanoutlet\\context\\modal.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const ModalStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const ModalDispatchContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const SHOW_CART = "SHOW_CART";
const SHOW_CHECKOUT = "SHOW_CHECKOUT";
const initialState = {
  step: "cart"
};

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_CART:
      return _objectSpread(_objectSpread({}, state), {}, {
        step: "cart"
      });

    case SHOW_CHECKOUT:
      return _objectSpread(_objectSpread({}, state), {}, {
        step: "checkout"
      });

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const ModalProvider = ({
  children
}) => {
  const [open, toggle] = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useCycle)(false, true);
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);

  const openModal = () => {
    toggle();
    document.body.classList.add("overflow-hidden");
  };

  const closeModal = () => {
    toggle(0);
    document.body.classList.remove("overflow-hidden");
    dispatch({
      type: "SHOW_CART"
    });
  };

  const showCart = () => dispatch({
    type: "SHOW_CART"
  });

  const showCheckout = () => dispatch({
    type: "SHOW_CHECKOUT"
  });

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModalDispatchContext.Provider, {
    value: {
      openModal,
      closeModal,
      showCart,
      showCheckout
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModalStateContext.Provider, {
      value: _objectSpread({
        open
      }, state),
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, undefined);
};
const useModalState = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ModalStateContext);
const useModalDispatch = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ModalDispatchContext);

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vY29tcG9uZW50cy9MYXlvdXQvQ2FydFN1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC8uL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvLi9jb21wb25lbnRzL0xheW91dC9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC8uL2NvbnRleHQvY2FydC5qcyIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vY29udGV4dC9jaGVja291dC5qcyIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vY29udGV4dC9tb2RhbC5qcyIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vY29udGV4dC90aGVtZS5qcyIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vbGliL2NvbW1lcmNlLmpzIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvLi9zdHlsZXMvRm9vdGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC9leHRlcm5hbCBcIkBjaGVjL2NvbW1lcmNlLmpzXCIiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvaWdub3JlZHxDOlxcVXNlcnNcXDQ3NDU3XFxEZXNrdG9wXFxQcm9ncmFtbWVyaW5nXFxXZWJcXENhcmF2YW5vdXRsZXRcXGNhcmF2YW5vdXRsZXRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJDYXJ0U3VtbWFyeSIsInRvdGFsX3VuaXF1ZV9pdGVtcyIsInVzZUNhcnRTdGF0ZSIsIm9wZW5Nb2RhbCIsInVzZU1vZGFsRGlzcGF0Y2giLCJGb290ZXIiLCJzdHlsZXMiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIk5hdmJhciIsIkNhcnRTdGF0ZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ2FydERpc3BhdGNoQ29udGV4dCIsIlNFVF9DQVJUIiwiUkVTRVQiLCJpbml0aWFsU3RhdGUiLCJ0b3RhbF9pdGVtcyIsImxpbmVfaXRlbXMiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsIkVycm9yIiwiQ2FydFByb3ZpZGVyIiwib3BlbiIsInRvZ2dsZSIsInVzZUN5Y2xlIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwidXNlRWZmZWN0IiwiZ2V0Q2FydCIsImNhcnQiLCJjb21tZXJjZSIsImVyciIsInNldENhcnQiLCJzaG93Q2FydCIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsImNsb3NlQ2FydCIsInJlbW92ZSIsInJlc2V0IiwidXNlQ29udGV4dCIsInVzZUNhcnREaXNwYXRjaCIsIkNoZWNrb3V0U3RhdGVDb250ZXh0IiwiQ2hlY2tvdXREaXNwYXRjaENvbnRleHQiLCJTRVRfQ1VSUkVOVF9TVEVQIiwiU0VUX0NIRUNLT1VUIiwiU0VUX0xJVkUiLCJTRVRfUFJPQ0VTU0lORyIsIlNFVF9FUlJPUiIsImN1cnJlbnRTdGVwIiwicHJvY2Vzc2luZyIsImVycm9yIiwibGl2ZSIsIkNoZWNrb3V0UHJvdmlkZXIiLCJnZW5lcmF0ZVRva2VuIiwiY2FydElkIiwic2V0U2hpcHBpbmdNZXRob2QiLCJzaGlwcGluZ19vcHRpb25faWQiLCJjb3VudHJ5IiwicmVnaW9uIiwiaWQiLCJzZXRDdXJyZW50U3RlcCIsInN0ZXAiLCJuZXh0U3RlcEZyb20iLCJjb2xsZWN0cyIsInNoaXBwaW5nX2FkZHJlc3MiLCJjYXB0dXJlIiwidmFsdWVzIiwic2V0UHJvY2Vzc2luZyIsInNldEVycm9yIiwidXNlQ2hlY2tvdXRTdGF0ZSIsInVzZUNoZWNrb3V0RGlzcGF0Y2giLCJNb2RhbFN0YXRlQ29udGV4dCIsIk1vZGFsRGlzcGF0Y2hDb250ZXh0IiwiU0hPV19DQVJUIiwiU0hPV19DSEVDS09VVCIsIk1vZGFsUHJvdmlkZXIiLCJjbG9zZU1vZGFsIiwic2hvd0NoZWNrb3V0IiwidXNlTW9kYWxTdGF0ZSIsIlRoZW1lU3RhdGVDb250ZXh0IiwiUmVhY3QiLCJUaGVtZURpc3BhdGNoQ29udGV4dCIsIlRoZW1lUHJvdmlkZXIiLCJ0aGVtZSIsInNldFRoZW1lIiwidXNlVGhlbWVTdGF0ZSIsInVzZVRoZW1lRGlzcGF0Y2giLCJQVUJMSUNfQVBJX0tFWSIsIkNvbW1lcmNlU0RLIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxXQUFULEdBQXVCO0FBQ3JCLFFBQU07QUFBRUM7QUFBRixNQUF5QkMsMkRBQVksRUFBM0M7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBZ0JDLGdFQUFnQixFQUF0QztBQUVBLHNCQUNFO0FBQVEsV0FBTyxFQUFFRCxTQUFqQjtBQUFBLCtCQUNlRixrQkFEZjtBQUFB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QUFBQSxtQ0FDRSw4REFBQyw4REFBRDtBQUFBLHFDQUNFLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0FBRUQsK0RBQWVGLEtBQWYsRTs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLCtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FydFN0YXRlIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvY2FydFwiO1xyXG5pbXBvcnQgeyB1c2VNb2RhbERpc3BhdGNoIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvbW9kYWxcIjtcclxuXHJcbmZ1bmN0aW9uIENhcnRTdW1tYXJ5KCkge1xyXG4gIGNvbnN0IHsgdG90YWxfdW5pcXVlX2l0ZW1zIH0gPSB1c2VDYXJ0U3RhdGUoKTtcclxuICBjb25zdCB7IG9wZW5Nb2RhbCB9ID0gdXNlTW9kYWxEaXNwYXRjaCgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtvcGVuTW9kYWx9PlxyXG4gICAgICBIYW5kbGVrdXJ2ICh7dG90YWxfdW5pcXVlX2l0ZW1zfSlcclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnRTdW1tYXJ5OyIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0Zvb3Rlci5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgIFV0dmlrbGV0IGF2IFNub3JyZSBTw7h2b2xkIDIwMjFcclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgQ2FydFN1bW1hcnkgZnJvbSBcIi4vQ2FydFN1bW1hcnlcIjtcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPkNhcmF2YW5vdXRsZXQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YT5IamVtPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9rYXRlZ29yaWVyXCI+PGE+UHJvZHVrdGVyPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9vbW9zc1wiPjxhPk9tIG9zczwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDxDYXJ0U3VtbWFyeSAvPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VDeWNsZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5pbXBvcnQgeyBjb21tZXJjZSB9IGZyb20gXCIuLi9saWIvY29tbWVyY2VcIjtcclxuXHJcbmNvbnN0IENhcnRTdGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmNvbnN0IENhcnREaXNwYXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBTRVRfQ0FSVCA9IFwiU0VUX0NBUlRcIjtcclxuY29uc3QgUkVTRVQgPSBcIlJFU0VUXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdG90YWxfaXRlbXM6IDAsXHJcbiAgdG90YWxfdW5pcXVlX2l0ZW1zOiAwLFxyXG4gIGxpbmVfaXRlbXM6IFtdLFxyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBTRVRfQ0FSVDpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFJFU0VUOlxyXG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGFjdGlvbjogJHthY3Rpb24udHlwZX1gKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ2FydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtvcGVuLCB0b2dnbGVdID0gdXNlQ3ljbGUoZmFsc2UsIHRydWUpO1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0Q2FydCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0Q2FydCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGNhcnQgPSBhd2FpdCBjb21tZXJjZS5jYXJ0LnJldHJpZXZlKCk7XHJcblxyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFNFVF9DQVJULCBwYXlsb2FkOiBjYXJ0IH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIC8vIG5vb3BcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzZXRDYXJ0ID0gYXN5bmMgKHBheWxvYWQpID0+IGRpc3BhdGNoKHsgdHlwZTogU0VUX0NBUlQsIHBheWxvYWQgfSk7XHJcblxyXG4gIGNvbnN0IHNob3dDYXJ0ID0gKCkgPT4ge1xyXG4gICAgdG9nZ2xlKCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJvdmVyZmxvdy1oaWRkZW5cIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xvc2VDYXJ0ID0gKCkgPT4ge1xyXG4gICAgdG9nZ2xlKCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJvdmVyZmxvdy1oaWRkZW5cIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzZXQgPSBhc3luYyAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFJFU0VUIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcnREaXNwYXRjaENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3sgc2V0Q2FydCwgc2hvd0NhcnQsIGNsb3NlQ2FydCwgcmVzZXQgfX1cclxuICAgID5cclxuICAgICAgPENhcnRTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgb3BlbiwgLi4uc3RhdGUgfX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L0NhcnRTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICA8L0NhcnREaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VDYXJ0U3RhdGUgPSAoKSA9PiB1c2VDb250ZXh0KENhcnRTdGF0ZUNvbnRleHQpO1xyXG5leHBvcnQgY29uc3QgdXNlQ2FydERpc3BhdGNoID0gKCkgPT4gdXNlQ29udGV4dChDYXJ0RGlzcGF0Y2hDb250ZXh0KTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgY29tbWVyY2UgfSBmcm9tIFwiLi4vbGliL2NvbW1lcmNlXCI7XHJcblxyXG5jb25zdCBDaGVja291dFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuY29uc3QgQ2hlY2tvdXREaXNwYXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBTRVRfQ1VSUkVOVF9TVEVQID0gXCJTRVRfQ1VSUkVOVF9TVEVQXCI7XHJcbmNvbnN0IFNFVF9DSEVDS09VVCA9IFwiU0VUX0NIRUNLT1VUXCI7XHJcbmNvbnN0IFNFVF9MSVZFID0gXCJTRVRfTElWRVwiO1xyXG5jb25zdCBTRVRfUFJPQ0VTU0lORyA9IFwiU0VUX1BST0NFU1NJTkdcIjtcclxuY29uc3QgU0VUX0VSUk9SID0gXCJTRVRfRVJST1JcIjtcclxuY29uc3QgUkVTRVQgPSBcIlJFU0VUXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgY3VycmVudFN0ZXA6IFwiZXh0cmFmaWVsZHNcIixcclxuICBwcm9jZXNzaW5nOiBmYWxzZSxcclxuICBlcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgU0VUX0NVUlJFTlRfU1RFUDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjdXJyZW50U3RlcDogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNFVF9DSEVDS09VVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0VUX0xJVkU6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsaXZlOiB7IC4uLnN0YXRlLmxpdmUsIC4uLmFjdGlvbi5wYXlsb2FkIH0gfTtcclxuICAgIGNhc2UgU0VUX1BST0NFU1NJTkc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9jZXNzaW5nOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBTRVRfRVJST1I6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvcjogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgUkVTRVQ6XHJcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gYWN0aW9uOiAke2FjdGlvbi50eXBlfWApO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGVja291dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG5cclxuICBjb25zdCBnZW5lcmF0ZVRva2VuID0gYXN5bmMgKGNhcnRJZCkgPT4ge1xyXG4gICAgaWYgKCFjYXJ0SWQpIHJldHVybjtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgY29tbWVyY2UuY2hlY2tvdXQuZ2VuZXJhdGVUb2tlbihjYXJ0SWQsIHtcclxuICAgICAgICB0eXBlOiBcImNhcnRcIixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFNFVF9DSEVDS09VVCwgcGF5bG9hZCB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAvLyBub29wXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0U2hpcHBpbmdNZXRob2QgPSBhc3luYyAoc2hpcHBpbmdfb3B0aW9uX2lkLCBjb3VudHJ5LCByZWdpb24pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgbGl2ZSB9ID0gYXdhaXQgY29tbWVyY2UuY2hlY2tvdXQuY2hlY2tTaGlwcGluZ09wdGlvbihzdGF0ZS5pZCwge1xyXG4gICAgICAgIHNoaXBwaW5nX29wdGlvbl9pZCxcclxuICAgICAgICBjb3VudHJ5LFxyXG4gICAgICAgIC4uLihyZWdpb24gJiYgeyByZWdpb24gfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBTRVRfTElWRSwgcGF5bG9hZDogbGl2ZSB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAvLyBub29wXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0Q3VycmVudFN0ZXAgPSAoc3RlcCkgPT5cclxuICAgIGRpc3BhdGNoKHsgdHlwZTogU0VUX0NVUlJFTlRfU1RFUCwgcGF5bG9hZDogc3RlcCB9KTtcclxuXHJcbiAgY29uc3QgbmV4dFN0ZXBGcm9tID0gKGN1cnJlbnRTdGVwKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGN1cnJlbnRTdGVwKSB7XHJcbiAgICAgIGNhc2UgXCJleHRyYWZpZWxkc1wiOlxyXG4gICAgICAgIHJldHVybiBzdGF0ZS5jb2xsZWN0cy5zaGlwcGluZ19hZGRyZXNzID8gXCJzaGlwcGluZ1wiIDogXCJiaWxsaW5nXCI7XHJcbiAgICAgIGNhc2UgXCJzaGlwcGluZ1wiOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBcImJpbGxpbmdcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjYXB0dXJlID0gKHZhbHVlcykgPT4gY29tbWVyY2UuY2hlY2tvdXQuY2FwdHVyZShzdGF0ZS5pZCwgdmFsdWVzKTtcclxuXHJcbiAgY29uc3Qgc2V0UHJvY2Vzc2luZyA9IChwYXlsb2FkKSA9PlxyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBTRVRfUFJPQ0VTU0lORywgcGF5bG9hZCB9KTtcclxuXHJcbiAgY29uc3Qgc2V0RXJyb3IgPSAocGF5bG9hZCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBTRVRfRVJST1IsIHBheWxvYWQgfSk7XHJcblxyXG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBSRVNFVCB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDaGVja291dERpc3BhdGNoQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIGdlbmVyYXRlVG9rZW4sXHJcbiAgICAgICAgc2V0U2hpcHBpbmdNZXRob2QsXHJcbiAgICAgICAgc2V0Q3VycmVudFN0ZXAsXHJcbiAgICAgICAgbmV4dFN0ZXBGcm9tLFxyXG4gICAgICAgIGNhcHR1cmUsXHJcbiAgICAgICAgc2V0UHJvY2Vzc2luZyxcclxuICAgICAgICBzZXRFcnJvcixcclxuICAgICAgICByZXNldCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPENoZWNrb3V0U3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L0NoZWNrb3V0U3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgPC9DaGVja291dERpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUNoZWNrb3V0U3RhdGUgPSAoKSA9PiB1c2VDb250ZXh0KENoZWNrb3V0U3RhdGVDb250ZXh0KTtcclxuZXhwb3J0IGNvbnN0IHVzZUNoZWNrb3V0RGlzcGF0Y2ggPSAoKSA9PiB1c2VDb250ZXh0KENoZWNrb3V0RGlzcGF0Y2hDb250ZXh0KTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VDeWNsZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5jb25zdCBNb2RhbFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuY29uc3QgTW9kYWxEaXNwYXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBTSE9XX0NBUlQgPSBcIlNIT1dfQ0FSVFwiO1xyXG5jb25zdCBTSE9XX0NIRUNLT1VUID0gXCJTSE9XX0NIRUNLT1VUXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgc3RlcDogXCJjYXJ0XCIsXHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFNIT1dfQ0FSVDpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHN0ZXA6IFwiY2FydFwiIH07XHJcbiAgICBjYXNlIFNIT1dfQ0hFQ0tPVVQ6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzdGVwOiBcImNoZWNrb3V0XCIgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBhY3Rpb246ICR7YWN0aW9uLnR5cGV9YCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vZGFsUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHRvZ2dsZV0gPSB1c2VDeWNsZShmYWxzZSwgdHJ1ZSk7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gIGNvbnN0IG9wZW5Nb2RhbCA9ICgpID0+IHtcclxuICAgIHRvZ2dsZSgpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwib3ZlcmZsb3ctaGlkZGVuXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICB0b2dnbGUoMCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJvdmVyZmxvdy1oaWRkZW5cIik7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0hPV19DQVJUXCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd0NhcnQgPSAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFwiU0hPV19DQVJUXCIgfSk7XHJcblxyXG4gIGNvbnN0IHNob3dDaGVja291dCA9ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogXCJTSE9XX0NIRUNLT1VUXCIgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxEaXNwYXRjaENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3sgb3Blbk1vZGFsLCBjbG9zZU1vZGFsLCBzaG93Q2FydCwgc2hvd0NoZWNrb3V0IH19XHJcbiAgICA+XHJcbiAgICAgIDxNb2RhbFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBvcGVuLCAuLi5zdGF0ZSB9fT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvTW9kYWxTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICA8L01vZGFsRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlTW9kYWxTdGF0ZSA9ICgpID0+IHVzZUNvbnRleHQoTW9kYWxTdGF0ZUNvbnRleHQpO1xyXG5leHBvcnQgY29uc3QgdXNlTW9kYWxEaXNwYXRjaCA9ICgpID0+IHVzZUNvbnRleHQoTW9kYWxEaXNwYXRjaENvbnRleHQpO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFRoZW1lU3RhdGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5jb25zdCBUaGVtZURpc3BhdGNoQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IG51bGw7XHJcblxyXG5leHBvcnQgY29uc3QgVGhlbWVQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IFJlYWN0LnVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVEaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3NldFRoZW1lfT5cclxuICAgICAgPFRoZW1lU3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0aGVtZX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L1RoZW1lU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgPC9UaGVtZURpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVRoZW1lU3RhdGUgPSAoKSA9PiBSZWFjdC51c2VDb250ZXh0KFRoZW1lU3RhdGVDb250ZXh0KTtcclxuZXhwb3J0IGNvbnN0IHVzZVRoZW1lRGlzcGF0Y2ggPSAoKSA9PiBSZWFjdC51c2VDb250ZXh0KFRoZW1lRGlzcGF0Y2hDb250ZXh0KTtcclxuIiwiaW1wb3J0IENvbW1lcmNlU0RLIGZyb20gXCJAY2hlYy9jb21tZXJjZS5qc1wiXHJcblxyXG52YXIgUFVCTElDX0FQSV9LRVkgPSBcInBrXzI2ODU5N2Q3ZWMyYzJmOWQ4MGFlMTI4MjlkNTAyNWQxNWVhNjVjODdhZDI2N1wiXHJcblxyXG5jb25zdCBjb21tZXJjZSA9IG5ldyBDb21tZXJjZVNESyhQVUJMSUNfQVBJX0tFWSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21tZXJjZTtcclxuIiwiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQnXG5cbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvdGhlbWVcIjtcbmltcG9ydCB7IE1vZGFsUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9tb2RhbFwiO1xuaW1wb3J0IHsgQ2FydFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvY2FydFwiO1xuaW1wb3J0IHsgQ2hlY2tvdXRQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L2NoZWNrb3V0XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyPlxuICAgIDxNb2RhbFByb3ZpZGVyPlxuICAgICAgPENhcnRQcm92aWRlcj5cbiAgICAgICAgPENoZWNrb3V0UHJvdmlkZXI+XG4gICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGluaXRpYWw9e2ZhbHNlfSBleGl0QmVmb3JlRW50ZXI+XG4gICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICA8L0NoZWNrb3V0UHJvdmlkZXI+XG4gICAgICA8L0NhcnRQcm92aWRlcj5cbiAgICA8L01vZGFsUHJvdmlkZXI+XG4gIDwvVGhlbWVQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyXCI6IFwiRm9vdGVyX2Zvb3Rlcl9fMzE3aUtcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGVjL2NvbW1lcmNlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmFtZXItbW90aW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==