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

/***/ "./components/payment/Breadcrumbs.js":
/*!*******************************************!*\
  !*** ./components/payment/Breadcrumbs.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_checkout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/checkout */ "./context/checkout.js");


var _jsxFileName = "C:\\Users\\47457\\Desktop\\Programmering\\Web\\Caravanoutlet\\caravanoutlet\\components\\payment\\Breadcrumbs.js";
 // TODO: Build array of crumbs dynamically from available steps

function Breadcrumbs({
  inCart
}) {
  const {
    currentStep,
    extrafields
  } = (0,_context_checkout__WEBPACK_IMPORTED_MODULE_1__.useCheckoutState)();

  if (inCart) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "Handlekurv"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 12
    }, this);
  }

  if (currentStep === "success") {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "F\xE5resp\xF8rsel motatt"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [currentStep === "extrafields" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Handlekurv"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\u2192"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Booking"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\u2192"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Frakt"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\u2192"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Betaling"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, this)]
    }, void 0, true), currentStep === "shipping" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Handlekurv"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, this), extrafields.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "\u2192"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Booking"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 15
        }, this)]
      }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\u2192"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Frakt"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\u2192"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Betaling"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }, this)]
    }, void 0, true), currentStep === "billing" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Handlekurv"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }, this), extrafields.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "\u2192"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Booking"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 15
        }, this)]
      }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\u2192"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Frakt"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\u2192"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Betaling"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, this)]
    }, void 0, true)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Breadcrumbs);

/***/ }),

/***/ "./components/payment/Cart.js":
/*!************************************!*\
  !*** ./components/payment/Cart.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Cart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/cart */ "./context/cart.js");
/* harmony import */ var _context_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/modal */ "./context/modal.js");
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CartItem */ "./components/payment/CartItem.js");
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CartItem__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\47457\\Desktop\\Programmering\\Web\\Caravanoutlet\\caravanoutlet\\components\\payment\\Cart.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function Cart() {
  const {
    line_items,
    subtotal,
    total_unique_items
  } = (0,_context_cart__WEBPACK_IMPORTED_MODULE_1__.useCartState)();
  const {
    showCheckout
  } = (0,_context_modal__WEBPACK_IMPORTED_MODULE_2__.useModalDispatch)();
  const isEmpty = line_items.length === 0;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: line_items.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_CartItem__WEBPACK_IMPORTED_MODULE_3___default()), _objectSpread({}, item), item.id, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: isEmpty ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Your cart is empty."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["Total: ", subtotal === null || subtotal === void 0 ? void 0 : subtotal.formatted_with_symbol, ", ", total_unique_items, " ", total_unique_items === 1 ? "item" : "items"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: showCheckout,
            children: "Check Out"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/payment/CartItem.js":
/*!****************************************!*\
  !*** ./components/payment/CartItem.js ***!
  \****************************************/
/***/ (function() {



/***/ }),

/***/ "./components/payment/Modal.js":
/*!*************************************!*\
  !*** ./components/payment/Modal.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/modal */ "./context/modal.js");
/* harmony import */ var _context_checkout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/checkout */ "./context/checkout.js");
/* harmony import */ var _context_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/cart */ "./context/cart.js");
/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Breadcrumbs */ "./components/payment/Breadcrumbs.js");
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Cart */ "./components/payment/Cart.js");
/* harmony import */ var _checkout_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkout/index.js */ "./components/payment/checkout/index.js");
/* harmony import */ var _checkout_index_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_checkout_index_js__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\47457\\Desktop\\Programmering\\Web\\Caravanoutlet\\caravanoutlet\\components\\payment\\Modal.js";










function CurrentStep({
  step
}) {
  const {
    id
  } = (0,_context_cart__WEBPACK_IMPORTED_MODULE_6__.useCartState)();

  switch (step) {
    case "cart":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cart__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 14
      }, this);

    case "checkout":
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_checkout_index_js__WEBPACK_IMPORTED_MODULE_9___default()), {
        cartId: id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 14
      }, this);

    default:
      return null;
  }
}

function Modal() {
  const {
    open,
    step
  } = (0,_context_modal__WEBPACK_IMPORTED_MODULE_4__.useModalState)();
  const {
    closeModal
  } = (0,_context_modal__WEBPACK_IMPORTED_MODULE_4__.useModalDispatch)();
  const {
    reset: resetCheckout
  } = (0,_context_checkout__WEBPACK_IMPORTED_MODULE_5__.useCheckoutDispatch)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    router.events.on("routeChangeStart", closeModal);
    return () => {
      router.events.off("routeChangeStart", closeModal);
    };
  }, []);

  const closeAndResetModal = () => {
    closeModal();
    resetCheckout();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: open && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Breadcrumbs__WEBPACK_IMPORTED_MODULE_7__.default, {
            inCart: step === "cart"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: closeAndResetModal,
            children: "Close"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CurrentStep, {
        step: step
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./components/payment/checkout/index.js":
/*!**********************************************!*\
  !*** ./components/payment/checkout/index.js ***!
  \**********************************************/
/***/ (function() {



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
/* harmony import */ var _components_payment_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/payment/Modal */ "./components/payment/Modal.js");

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
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_payment_Modal__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vY29tcG9uZW50cy9MYXlvdXQvQ2FydFN1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC8uL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvLi9jb21wb25lbnRzL0xheW91dC9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC8uL2NvbXBvbmVudHMvcGF5bWVudC9CcmVhZGNydW1icy5qcyIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vY29tcG9uZW50cy9wYXltZW50L0NhcnQuanMiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC8uL2NvbXBvbmVudHMvcGF5bWVudC9Nb2RhbC5qcyIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vY29udGV4dC9jaGVja291dC5qcyIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vY29udGV4dC90aGVtZS5qcyIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vc3R5bGVzL0Zvb3Rlci5tb2R1bGUuY3NzIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJAY2hlYy9jb21tZXJjZS5qc1wiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCIiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2lnbm9yZWR8QzpcXFVzZXJzXFw0NzQ1N1xcRGVza3RvcFxcUHJvZ3JhbW1lcmluZ1xcV2ViXFxDYXJhdmFub3V0bGV0XFxjYXJhdmFub3V0bGV0XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQ2FydFN1bW1hcnkiLCJ0b3RhbF91bmlxdWVfaXRlbXMiLCJ1c2VDYXJ0U3RhdGUiLCJvcGVuTW9kYWwiLCJ1c2VNb2RhbERpc3BhdGNoIiwiRm9vdGVyIiwic3R5bGVzIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJOYXZiYXIiLCJCcmVhZGNydW1icyIsImluQ2FydCIsImN1cnJlbnRTdGVwIiwiZXh0cmFmaWVsZHMiLCJ1c2VDaGVja291dFN0YXRlIiwibGVuZ3RoIiwiQ2FydCIsImxpbmVfaXRlbXMiLCJzdWJ0b3RhbCIsInNob3dDaGVja291dCIsImlzRW1wdHkiLCJtYXAiLCJpdGVtIiwiaWQiLCJmb3JtYXR0ZWRfd2l0aF9zeW1ib2wiLCJDdXJyZW50U3RlcCIsInN0ZXAiLCJNb2RhbCIsIm9wZW4iLCJ1c2VNb2RhbFN0YXRlIiwiY2xvc2VNb2RhbCIsInJlc2V0IiwicmVzZXRDaGVja291dCIsInVzZUNoZWNrb3V0RGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJldmVudHMiLCJvbiIsIm9mZiIsImNsb3NlQW5kUmVzZXRNb2RhbCIsIkNoZWNrb3V0U3RhdGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoZWNrb3V0RGlzcGF0Y2hDb250ZXh0IiwiU0VUX0NVUlJFTlRfU1RFUCIsIlNFVF9DSEVDS09VVCIsIlNFVF9MSVZFIiwiU0VUX1BST0NFU1NJTkciLCJTRVRfRVJST1IiLCJSRVNFVCIsImluaXRpYWxTdGF0ZSIsInByb2Nlc3NpbmciLCJlcnJvciIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwibGl2ZSIsIkVycm9yIiwiQ2hlY2tvdXRQcm92aWRlciIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsImdlbmVyYXRlVG9rZW4iLCJjYXJ0SWQiLCJjb21tZXJjZSIsImVyciIsInNldFNoaXBwaW5nTWV0aG9kIiwic2hpcHBpbmdfb3B0aW9uX2lkIiwiY291bnRyeSIsInJlZ2lvbiIsInNldEN1cnJlbnRTdGVwIiwibmV4dFN0ZXBGcm9tIiwiY29sbGVjdHMiLCJzaGlwcGluZ19hZGRyZXNzIiwiY2FwdHVyZSIsInZhbHVlcyIsInNldFByb2Nlc3NpbmciLCJzZXRFcnJvciIsInVzZUNvbnRleHQiLCJUaGVtZVN0YXRlQ29udGV4dCIsIlJlYWN0IiwiVGhlbWVEaXNwYXRjaENvbnRleHQiLCJUaGVtZVByb3ZpZGVyIiwidGhlbWUiLCJzZXRUaGVtZSIsInVzZVRoZW1lU3RhdGUiLCJ1c2VUaGVtZURpc3BhdGNoIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxXQUFULEdBQXVCO0FBQ3JCLFFBQU07QUFBRUM7QUFBRixNQUF5QkMsMkRBQVksRUFBM0M7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBZ0JDLGdFQUFnQixFQUF0QztBQUVBLHNCQUNFO0FBQVEsV0FBTyxFQUFFRCxTQUFqQjtBQUFBLCtCQUNlRixrQkFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtE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QUQ7QUFBQSxpQ0FDSSw4REFBQywwREFBRDtBQUFpQixtQkFBTyxFQUFFLEtBQTFCO0FBQWlDLDJCQUFlLE1BQWhEO0FBQUEsb0NBQ0UsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFLDhEQUFDLDhEQUFEO0FBQUEscUNBQ0UsOERBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7O0FBRUQsK0RBQWVGLEtBQWYsRTs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLCtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FydFN0YXRlIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvY2FydFwiO1xyXG5pbXBvcnQgeyB1c2VNb2RhbERpc3BhdGNoIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvbW9kYWxcIjtcclxuXHJcbmZ1bmN0aW9uIENhcnRTdW1tYXJ5KCkge1xyXG4gIGNvbnN0IHsgdG90YWxfdW5pcXVlX2l0ZW1zIH0gPSB1c2VDYXJ0U3RhdGUoKTtcclxuICBjb25zdCB7IG9wZW5Nb2RhbCB9ID0gdXNlTW9kYWxEaXNwYXRjaCgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtvcGVuTW9kYWx9PlxyXG4gICAgICBIYW5kbGVrdXJ2ICh7dG90YWxfdW5pcXVlX2l0ZW1zfSlcclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnRTdW1tYXJ5OyIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0Zvb3Rlci5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgIFV0dmlrbGV0IGF2IFNub3JyZSBTw7h2b2xkIDIwMjFcclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgQ2FydFN1bW1hcnkgZnJvbSBcIi4vQ2FydFN1bW1hcnlcIjtcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPkNhcmF2YW5vdXRsZXQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YT5IamVtPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9rYXRlZ29yaWVyXCI+PGE+UHJvZHVrdGVyPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9vbW9zc1wiPjxhPk9tIG9zczwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDxDYXJ0U3VtbWFyeSAvPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyIsImltcG9ydCB7IHVzZUNoZWNrb3V0U3RhdGUgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9jaGVja291dFwiO1xyXG5cclxuLy8gVE9ETzogQnVpbGQgYXJyYXkgb2YgY3J1bWJzIGR5bmFtaWNhbGx5IGZyb20gYXZhaWxhYmxlIHN0ZXBzXHJcblxyXG5mdW5jdGlvbiBCcmVhZGNydW1icyh7IGluQ2FydCB9KSB7XHJcbiAgY29uc3QgeyBjdXJyZW50U3RlcCwgZXh0cmFmaWVsZHMgfSA9IHVzZUNoZWNrb3V0U3RhdGUoKTtcclxuXHJcbiAgaWYgKGluQ2FydCkge1xyXG4gICAgcmV0dXJuIDxzcGFuPkhhbmRsZWt1cnY8L3NwYW4+O1xyXG4gIH1cclxuXHJcbiAgaWYgKGN1cnJlbnRTdGVwID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgcmV0dXJuIDxzcGFuPkbDpXJlc3DDuHJzZWwgbW90YXR0PC9zcGFuPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7Y3VycmVudFN0ZXAgPT09IFwiZXh0cmFmaWVsZHNcIiAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxzcGFuPkhhbmRsZWt1cnY8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj4mcmFycjs8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj5Cb29raW5nPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+JnJhcnI7PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+RnJha3Q8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj4mcmFycjs8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj5CZXRhbGluZzwvc3Bhbj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgICAge2N1cnJlbnRTdGVwID09PSBcInNoaXBwaW5nXCIgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8c3Bhbj5IYW5kbGVrdXJ2PC9zcGFuPlxyXG5cclxuICAgICAgICAgIHtleHRyYWZpZWxkcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8c3Bhbj4mcmFycjs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+Qm9va2luZzwvc3Bhbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPHNwYW4+JnJhcnI7PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+RnJha3Q8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj4mcmFycjs8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj5CZXRhbGluZzwvc3Bhbj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgICAge2N1cnJlbnRTdGVwID09PSBcImJpbGxpbmdcIiAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxzcGFuPkhhbmRsZWt1cnY8L3NwYW4+XHJcbiAgICAgICAgICB7ZXh0cmFmaWVsZHMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPHNwYW4+JnJhcnI7PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkJvb2tpbmc8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxzcGFuPiZyYXJyOzwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPkZyYWt0PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+JnJhcnI7PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+QmV0YWxpbmc8L3NwYW4+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCcmVhZGNydW1icztcclxuIiwiaW1wb3J0IHsgdXNlQ2FydFN0YXRlIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvY2FydFwiO1xyXG5pbXBvcnQgeyB1c2VNb2RhbERpc3BhdGNoIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvbW9kYWxcIjtcclxuXHJcbmltcG9ydCBDYXJ0SXRlbSBmcm9tIFwiLi9DYXJ0SXRlbVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydCgpIHtcclxuICBjb25zdCB7IGxpbmVfaXRlbXMsIHN1YnRvdGFsLCB0b3RhbF91bmlxdWVfaXRlbXMgfSA9IHVzZUNhcnRTdGF0ZSgpO1xyXG4gIGNvbnN0IHsgc2hvd0NoZWNrb3V0IH0gPSB1c2VNb2RhbERpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IGlzRW1wdHkgPSBsaW5lX2l0ZW1zLmxlbmd0aCA9PT0gMDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2xpbmVfaXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICA8Q2FydEl0ZW0ga2V5PXtpdGVtLmlkfSB7Li4uaXRlbX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtpc0VtcHR5ID8gKFxyXG4gICAgICAgICAgPHA+WW91ciBjYXJ0IGlzIGVtcHR5LjwvcD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICBUb3RhbDoge3N1YnRvdGFsPy5mb3JtYXR0ZWRfd2l0aF9zeW1ib2x9LCB7dG90YWxfdW5pcXVlX2l0ZW1zfXtcIiBcIn1cclxuICAgICAgICAgICAgICB7dG90YWxfdW5pcXVlX2l0ZW1zID09PSAxID8gXCJpdGVtXCIgOiBcIml0ZW1zXCJ9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dDaGVja291dH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDaGVjayBPdXRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VNb2RhbFN0YXRlLCB1c2VNb2RhbERpc3BhdGNoIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvbW9kYWxcIjtcclxuaW1wb3J0IHsgdXNlQ2hlY2tvdXREaXNwYXRjaCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L2NoZWNrb3V0XCI7XHJcbmltcG9ydCB7IHVzZUNhcnRTdGF0ZSB9IGZyb20gXCIuLi8uLi9jb250ZXh0L2NhcnRcIjtcclxuXHJcbmltcG9ydCBCcmVhZGNydW1icyBmcm9tIFwiLi9CcmVhZGNydW1ic1wiO1xyXG5pbXBvcnQgQ2FydCBmcm9tIFwiLi9DYXJ0XCI7XHJcbmltcG9ydCBDaGVja291dCBmcm9tIFwiLi9jaGVja291dC9pbmRleC5qc1wiO1xyXG5cclxuZnVuY3Rpb24gQ3VycmVudFN0ZXAoeyBzdGVwIH0pIHtcclxuICBjb25zdCB7IGlkIH0gPSB1c2VDYXJ0U3RhdGUoKTtcclxuXHJcbiAgc3dpdGNoIChzdGVwKSB7XHJcbiAgICBjYXNlIFwiY2FydFwiOlxyXG4gICAgICByZXR1cm4gPENhcnQgLz47XHJcbiAgICBjYXNlIFwiY2hlY2tvdXRcIjpcclxuICAgICAgcmV0dXJuIDxDaGVja291dCBjYXJ0SWQ9e2lkfSAvPjtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gTW9kYWwoKSB7XHJcbiAgY29uc3QgeyBvcGVuLCBzdGVwIH0gPSB1c2VNb2RhbFN0YXRlKCk7XHJcbiAgY29uc3QgeyBjbG9zZU1vZGFsIH0gPSB1c2VNb2RhbERpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyByZXNldDogcmVzZXRDaGVja291dCB9ID0gdXNlQ2hlY2tvdXREaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgY2xvc2VNb2RhbCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIGNsb3NlTW9kYWwpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGNsb3NlQW5kUmVzZXRNb2RhbCA9ICgpID0+IHtcclxuICAgIGNsb3NlTW9kYWwoKTtcclxuICAgIHJlc2V0Q2hlY2tvdXQoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge29wZW4gJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJyZWFkY3J1bWJzIGluQ2FydD17c3RlcCA9PT0gXCJjYXJ0XCJ9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZUFuZFJlc2V0TW9kYWx9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxDdXJyZW50U3RlcCBzdGVwPXtzdGVwfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgY29tbWVyY2UgfSBmcm9tIFwiLi4vbGliL2NvbW1lcmNlXCI7XHJcblxyXG5jb25zdCBDaGVja291dFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuY29uc3QgQ2hlY2tvdXREaXNwYXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBTRVRfQ1VSUkVOVF9TVEVQID0gXCJTRVRfQ1VSUkVOVF9TVEVQXCI7XHJcbmNvbnN0IFNFVF9DSEVDS09VVCA9IFwiU0VUX0NIRUNLT1VUXCI7XHJcbmNvbnN0IFNFVF9MSVZFID0gXCJTRVRfTElWRVwiO1xyXG5jb25zdCBTRVRfUFJPQ0VTU0lORyA9IFwiU0VUX1BST0NFU1NJTkdcIjtcclxuY29uc3QgU0VUX0VSUk9SID0gXCJTRVRfRVJST1JcIjtcclxuY29uc3QgUkVTRVQgPSBcIlJFU0VUXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgY3VycmVudFN0ZXA6IFwiZXh0cmFmaWVsZHNcIixcclxuICBwcm9jZXNzaW5nOiBmYWxzZSxcclxuICBlcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgU0VUX0NVUlJFTlRfU1RFUDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjdXJyZW50U3RlcDogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNFVF9DSEVDS09VVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0VUX0xJVkU6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsaXZlOiB7IC4uLnN0YXRlLmxpdmUsIC4uLmFjdGlvbi5wYXlsb2FkIH0gfTtcclxuICAgIGNhc2UgU0VUX1BST0NFU1NJTkc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9jZXNzaW5nOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBTRVRfRVJST1I6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvcjogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgUkVTRVQ6XHJcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gYWN0aW9uOiAke2FjdGlvbi50eXBlfWApO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGVja291dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG5cclxuICBjb25zdCBnZW5lcmF0ZVRva2VuID0gYXN5bmMgKGNhcnRJZCkgPT4ge1xyXG4gICAgaWYgKCFjYXJ0SWQpIHJldHVybjtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgY29tbWVyY2UuY2hlY2tvdXQuZ2VuZXJhdGVUb2tlbihjYXJ0SWQsIHtcclxuICAgICAgICB0eXBlOiBcImNhcnRcIixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFNFVF9DSEVDS09VVCwgcGF5bG9hZCB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAvLyBub29wXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0U2hpcHBpbmdNZXRob2QgPSBhc3luYyAoc2hpcHBpbmdfb3B0aW9uX2lkLCBjb3VudHJ5LCByZWdpb24pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgbGl2ZSB9ID0gYXdhaXQgY29tbWVyY2UuY2hlY2tvdXQuY2hlY2tTaGlwcGluZ09wdGlvbihzdGF0ZS5pZCwge1xyXG4gICAgICAgIHNoaXBwaW5nX29wdGlvbl9pZCxcclxuICAgICAgICBjb3VudHJ5LFxyXG4gICAgICAgIC4uLihyZWdpb24gJiYgeyByZWdpb24gfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBTRVRfTElWRSwgcGF5bG9hZDogbGl2ZSB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAvLyBub29wXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0Q3VycmVudFN0ZXAgPSAoc3RlcCkgPT5cclxuICAgIGRpc3BhdGNoKHsgdHlwZTogU0VUX0NVUlJFTlRfU1RFUCwgcGF5bG9hZDogc3RlcCB9KTtcclxuXHJcbiAgY29uc3QgbmV4dFN0ZXBGcm9tID0gKGN1cnJlbnRTdGVwKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGN1cnJlbnRTdGVwKSB7XHJcbiAgICAgIGNhc2UgXCJleHRyYWZpZWxkc1wiOlxyXG4gICAgICAgIHJldHVybiBzdGF0ZS5jb2xsZWN0cy5zaGlwcGluZ19hZGRyZXNzID8gXCJzaGlwcGluZ1wiIDogXCJiaWxsaW5nXCI7XHJcbiAgICAgIGNhc2UgXCJzaGlwcGluZ1wiOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBcImJpbGxpbmdcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjYXB0dXJlID0gKHZhbHVlcykgPT4gY29tbWVyY2UuY2hlY2tvdXQuY2FwdHVyZShzdGF0ZS5pZCwgdmFsdWVzKTtcclxuXHJcbiAgY29uc3Qgc2V0UHJvY2Vzc2luZyA9IChwYXlsb2FkKSA9PlxyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBTRVRfUFJPQ0VTU0lORywgcGF5bG9hZCB9KTtcclxuXHJcbiAgY29uc3Qgc2V0RXJyb3IgPSAocGF5bG9hZCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBTRVRfRVJST1IsIHBheWxvYWQgfSk7XHJcblxyXG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBSRVNFVCB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDaGVja291dERpc3BhdGNoQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIGdlbmVyYXRlVG9rZW4sXHJcbiAgICAgICAgc2V0U2hpcHBpbmdNZXRob2QsXHJcbiAgICAgICAgc2V0Q3VycmVudFN0ZXAsXHJcbiAgICAgICAgbmV4dFN0ZXBGcm9tLFxyXG4gICAgICAgIGNhcHR1cmUsXHJcbiAgICAgICAgc2V0UHJvY2Vzc2luZyxcclxuICAgICAgICBzZXRFcnJvcixcclxuICAgICAgICByZXNldCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPENoZWNrb3V0U3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L0NoZWNrb3V0U3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgPC9DaGVja291dERpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUNoZWNrb3V0U3RhdGUgPSAoKSA9PiB1c2VDb250ZXh0KENoZWNrb3V0U3RhdGVDb250ZXh0KTtcclxuZXhwb3J0IGNvbnN0IHVzZUNoZWNrb3V0RGlzcGF0Y2ggPSAoKSA9PiB1c2VDb250ZXh0KENoZWNrb3V0RGlzcGF0Y2hDb250ZXh0KTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBUaGVtZVN0YXRlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuY29uc3QgVGhlbWVEaXNwYXRjaENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSBudWxsO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRoZW1lUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzZXRUaGVtZX0+XHJcbiAgICAgIDxUaGVtZVN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dGhlbWV9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9UaGVtZVN0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIDwvVGhlbWVEaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VUaGVtZVN0YXRlID0gKCkgPT4gUmVhY3QudXNlQ29udGV4dChUaGVtZVN0YXRlQ29udGV4dCk7XHJcbmV4cG9ydCBjb25zdCB1c2VUaGVtZURpc3BhdGNoID0gKCkgPT4gUmVhY3QudXNlQ29udGV4dChUaGVtZURpc3BhdGNoQ29udGV4dCk7XHJcbiIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0J1xuXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcblxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L3RoZW1lXCI7XG5pbXBvcnQgeyBNb2RhbFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvbW9kYWxcIjtcbmltcG9ydCB7IENhcnRQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L2NhcnRcIjtcbmltcG9ydCB7IENoZWNrb3V0UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9jaGVja291dFwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL3BheW1lbnQvTW9kYWxcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXI+XG4gICAgPE1vZGFsUHJvdmlkZXI+XG4gICAgICA8Q2FydFByb3ZpZGVyPlxuICAgICAgICA8Q2hlY2tvdXRQcm92aWRlcj5cbiAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2UgaW5pdGlhbD17ZmFsc2V9IGV4aXRCZWZvcmVFbnRlcj5cbiAgICAgICAgICAgICAgPE1vZGFsIC8+XG4gICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICA8L0NoZWNrb3V0UHJvdmlkZXI+XG4gICAgICA8L0NhcnRQcm92aWRlcj5cbiAgICA8L01vZGFsUHJvdmlkZXI+XG4gIDwvVGhlbWVQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyXCI6IFwiRm9vdGVyX2Zvb3Rlcl9fMzE3aUtcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGVjL2NvbW1lcmNlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmFtZXItbW90aW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=