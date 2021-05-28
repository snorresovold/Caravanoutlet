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
      children: line_items.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CartItem__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread({}, item), item.id, false, {
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
        children: "Handlekurven din er tom"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["Totalpris: ", subtotal === null || subtotal === void 0 ? void 0 : subtotal.formatted_with_symbol, ", ", total_unique_items, " ", total_unique_items === 1 ? "item" : "items"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: showCheckout,
            children: "Betal"
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/commerce */ "./lib/commerce.js");
/* harmony import */ var _context_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/cart */ "./context/cart.js");

var _jsxFileName = "C:\\Users\\47457\\Desktop\\Programmering\\Web\\Caravanoutlet\\caravanoutlet\\components\\payment\\CartItem.js";






function CartItem({
  id,
  media,
  name,
  quantity,
  line_total,
  selected_options
}) {
  const {
    setCart
  } = (0,_context_cart__WEBPACK_IMPORTED_MODULE_5__.useCartDispatch)();
  const hasVariants = selected_options.length >= 1;

  const handleUpdateCart = ({
    cart
  }) => {
    setCart(cart);
    return cart;
  };

  const handleRemoveItem = () => _lib_commerce__WEBPACK_IMPORTED_MODULE_4__.default.cart.remove(id).then(handleUpdateCart).then(({
    subtotal
  }) => (0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)(`${name} har blit fjernet fra handlekurven din. Totalprisen din er nå: ${subtotal.formatted_with_symbol}`));

  const decrementQuantity = () => {
    quantity > 1 ? _lib_commerce__WEBPACK_IMPORTED_MODULE_4__.default.cart.update(id, {
      quantity: quantity - 1
    }).then(handleUpdateCart).then(({
      subtotal
    }) => (0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)(`1 "${name}" har blit fjernet fra handlekurven din. Totalprisen din er nå: ${subtotal.formatted_with_symbol}`)) : handleRemoveItem();
  };

  const incrementQuantity = () => _lib_commerce__WEBPACK_IMPORTED_MODULE_4__.default.cart.update(id, {
    quantity: quantity + 1
  }).then(handleUpdateCart).then(({
    subtotal
  }) => (0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)(`Enda en "${name}" har blitt lagt i handlekurven din, Totalprisen din er nå: ${subtotal.formatted_with_symbol}`));

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: media.source,
        alt: name,
        layout: "fill",
        loading: "eager",
        priority: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this), hasVariants && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: selected_options.map(({
            option_name
          }, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
            children: index ? `, ${option_name}` : option_name
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 17
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: line_total.formatted_with_symbol
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "Quantity:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: decrementQuantity,
              children: "-"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: quantity
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: incrementQuantity,
              children: "+"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: handleRemoveItem,
              children: "Remove"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (CartItem);

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

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","vendors-node_modules_next_image_js","context_cart_js-context_modal_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vY29tcG9uZW50cy9MYXlvdXQvQ2FydFN1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC8uL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvLi9jb21wb25lbnRzL0xheW91dC9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC8uL2NvbXBvbmVudHMvcGF5bWVudC9CcmVhZGNydW1icy5qcyIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vY29tcG9uZW50cy9wYXltZW50L0NhcnQuanMiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC8uL2NvbXBvbmVudHMvcGF5bWVudC9DYXJ0SXRlbS5qcyIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0Ly4vY29tcG9uZW50cy9wYXltZW50L01vZGFsLmpzIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvLi9jb250ZXh0L2NoZWNrb3V0LmpzIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvLi9jb250ZXh0L3RoZW1lLmpzIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvLi9zdHlsZXMvRm9vdGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC9leHRlcm5hbCBcIkBjaGVjL2NvbW1lcmNlLmpzXCIiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2NhcmF2YW5vdXRsZXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly9jYXJhdmFub3V0bGV0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vY2FyYXZhbm91dGxldC9pZ25vcmVkfEM6XFxVc2Vyc1xcNDc0NTdcXERlc2t0b3BcXFByb2dyYW1tZXJpbmdcXFdlYlxcQ2FyYXZhbm91dGxldFxcY2FyYXZhbm91dGxldFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkNhcnRTdW1tYXJ5IiwidG90YWxfdW5pcXVlX2l0ZW1zIiwidXNlQ2FydFN0YXRlIiwib3Blbk1vZGFsIiwidXNlTW9kYWxEaXNwYXRjaCIsIkZvb3RlciIsInN0eWxlcyIsIkxheW91dCIsImNoaWxkcmVuIiwiTmF2YmFyIiwiQnJlYWRjcnVtYnMiLCJpbkNhcnQiLCJjdXJyZW50U3RlcCIsImV4dHJhZmllbGRzIiwidXNlQ2hlY2tvdXRTdGF0ZSIsImxlbmd0aCIsIkNhcnQiLCJsaW5lX2l0ZW1zIiwic3VidG90YWwiLCJzaG93Q2hlY2tvdXQiLCJpc0VtcHR5IiwibWFwIiwiaXRlbSIsImlkIiwiZm9ybWF0dGVkX3dpdGhfc3ltYm9sIiwiQ2FydEl0ZW0iLCJtZWRpYSIsIm5hbWUiLCJxdWFudGl0eSIsImxpbmVfdG90YWwiLCJzZWxlY3RlZF9vcHRpb25zIiwic2V0Q2FydCIsInVzZUNhcnREaXNwYXRjaCIsImhhc1ZhcmlhbnRzIiwiaGFuZGxlVXBkYXRlQ2FydCIsImNhcnQiLCJoYW5kbGVSZW1vdmVJdGVtIiwiY29tbWVyY2UiLCJ0aGVuIiwidG9hc3QiLCJkZWNyZW1lbnRRdWFudGl0eSIsImluY3JlbWVudFF1YW50aXR5Iiwic291cmNlIiwib3B0aW9uX25hbWUiLCJpbmRleCIsIkN1cnJlbnRTdGVwIiwic3RlcCIsIk1vZGFsIiwib3BlbiIsInVzZU1vZGFsU3RhdGUiLCJjbG9zZU1vZGFsIiwicmVzZXQiLCJyZXNldENoZWNrb3V0IiwidXNlQ2hlY2tvdXREaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImV2ZW50cyIsIm9uIiwib2ZmIiwiY2xvc2VBbmRSZXNldE1vZGFsIiwiQ2hlY2tvdXRTdGF0ZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ2hlY2tvdXREaXNwYXRjaENvbnRleHQiLCJTRVRfQ1VSUkVOVF9TVEVQIiwiU0VUX0NIRUNLT1VUIiwiU0VUX0xJVkUiLCJTRVRfUFJPQ0VTU0lORyIsIlNFVF9FUlJPUiIsIlJFU0VUIiwiaW5pdGlhbFN0YXRlIiwicHJvY2Vzc2luZyIsImVycm9yIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJsaXZlIiwiRXJyb3IiLCJDaGVja291dFByb3ZpZGVyIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwiZ2VuZXJhdGVUb2tlbiIsImNhcnRJZCIsImVyciIsInNldFNoaXBwaW5nTWV0aG9kIiwic2hpcHBpbmdfb3B0aW9uX2lkIiwiY291bnRyeSIsInJlZ2lvbiIsInNldEN1cnJlbnRTdGVwIiwibmV4dFN0ZXBGcm9tIiwiY29sbGVjdHMiLCJzaGlwcGluZ19hZGRyZXNzIiwiY2FwdHVyZSIsInZhbHVlcyIsInNldFByb2Nlc3NpbmciLCJzZXRFcnJvciIsInVzZUNvbnRleHQiLCJUaGVtZVN0YXRlQ29udGV4dCIsIlJlYWN0IiwiVGhlbWVEaXNwYXRjaENvbnRleHQiLCJUaGVtZVByb3ZpZGVyIiwidGhlbWUiLCJzZXRUaGVtZSIsInVzZVRoZW1lU3RhdGUiLCJ1c2VUaGVtZURpc3BhdGNoIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxXQUFULEdBQXVCO0FBQ3JCLFFBQU07QUFBRUM7QUFBRixNQUF5QkMsMkRBQVksRUFBM0M7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBZ0JDLGdFQUFnQixFQUF0QztBQUVBLHNCQUNFO0FBQVEsV0FBTyxFQUFFRCxTQUFqQjtBQUFBLCtCQUNlRixrQkFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUVELCtEQUFlRCxXQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBOztBQUVBLE1BQU1LLE1BQU0sR0FBRyxNQUFNO0FBQ2pCLHNCQUNFO0FBQUssYUFBUyxFQUFFQyx5RUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBTkg7O0FBUUUsK0RBQWVELE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkY7QUFDQTs7QUFFQSxNQUFNRSxNQUFNLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDN0Isc0JBQ0k7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBLDRCQUNJLDhEQUFDLDRDQUFEO0FBQUE7QUFB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OERBQUMseURBQUQ7QUFBQSw2QkFDRSw4REFBQyx1REFBRDtBQUFBLCtCQUNFLDhEQUFDLCtEQUFEO0FBQUEsaUNBQ0ksOERBQUMsMERBQUQ7QUFBaUIsbUJBQU8sRUFBRSxLQUExQjtBQUFpQywyQkFBZSxNQUFoRDtBQUFBLG9DQUNFLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRSw4REFBQyw4REFBRDtBQUFBLHFDQUNFLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0JEOztBQUVELCtEQUFlRixLQUFmLEU7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQSwrQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhcnRTdGF0ZSB9IGZyb20gXCIuLi8uLi9jb250ZXh0L2NhcnRcIjtcclxuaW1wb3J0IHsgdXNlTW9kYWxEaXNwYXRjaCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L21vZGFsXCI7XHJcblxyXG5mdW5jdGlvbiBDYXJ0U3VtbWFyeSgpIHtcclxuICBjb25zdCB7IHRvdGFsX3VuaXF1ZV9pdGVtcyB9ID0gdXNlQ2FydFN0YXRlKCk7XHJcbiAgY29uc3QgeyBvcGVuTW9kYWwgfSA9IHVzZU1vZGFsRGlzcGF0Y2goKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gb25DbGljaz17b3Blbk1vZGFsfT5cclxuICAgICAgSGFuZGxla3VydiAoe3RvdGFsX3VuaXF1ZV9pdGVtc30pXHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0U3VtbWFyeTsiLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Gb290ZXIubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICBVdHZpa2xldCBhdiBTbm9ycmUgU8O4dm9sZCAyMDIxXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJpbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IENhcnRTdW1tYXJ5IGZyb20gXCIuL0NhcnRTdW1tYXJ5XCI7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YT5DYXJhdmFub3V0bGV0PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+SGplbTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIva2F0ZWdvcmllclwiPjxhPlByb2R1a3RlcjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvb21vc3NcIj48YT5PbSBvc3M8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8Q2FydFN1bW1hcnkgLz5cclxuICAgICAgICA8L25hdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiLCJpbXBvcnQgeyB1c2VDaGVja291dFN0YXRlIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvY2hlY2tvdXRcIjtcclxuXHJcbi8vIFRPRE86IEJ1aWxkIGFycmF5IG9mIGNydW1icyBkeW5hbWljYWxseSBmcm9tIGF2YWlsYWJsZSBzdGVwc1xyXG5cclxuZnVuY3Rpb24gQnJlYWRjcnVtYnMoeyBpbkNhcnQgfSkge1xyXG4gIGNvbnN0IHsgY3VycmVudFN0ZXAsIGV4dHJhZmllbGRzIH0gPSB1c2VDaGVja291dFN0YXRlKCk7XHJcblxyXG4gIGlmIChpbkNhcnQpIHtcclxuICAgIHJldHVybiA8c3Bhbj5IYW5kbGVrdXJ2PC9zcGFuPjtcclxuICB9XHJcblxyXG4gIGlmIChjdXJyZW50U3RlcCA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgIHJldHVybiA8c3Bhbj5Gw6VyZXNww7hyc2VsIG1vdGF0dDwvc3Bhbj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2N1cnJlbnRTdGVwID09PSBcImV4dHJhZmllbGRzXCIgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8c3Bhbj5IYW5kbGVrdXJ2PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+JnJhcnI7PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+Qm9va2luZzwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPiZyYXJyOzwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPkZyYWt0PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+JnJhcnI7PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+QmV0YWxpbmc8L3NwYW4+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtjdXJyZW50U3RlcCA9PT0gXCJzaGlwcGluZ1wiICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPHNwYW4+SGFuZGxla3Vydjwvc3Bhbj5cclxuXHJcbiAgICAgICAgICB7ZXh0cmFmaWVsZHMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPHNwYW4+JnJhcnI7PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkJvb2tpbmc8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxzcGFuPiZyYXJyOzwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPkZyYWt0PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+JnJhcnI7PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+QmV0YWxpbmc8L3NwYW4+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtjdXJyZW50U3RlcCA9PT0gXCJiaWxsaW5nXCIgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8c3Bhbj5IYW5kbGVrdXJ2PC9zcGFuPlxyXG4gICAgICAgICAge2V4dHJhZmllbGRzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxzcGFuPiZyYXJyOzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5Cb29raW5nPC9zcGFuPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8c3Bhbj4mcmFycjs8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj5GcmFrdDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPiZyYXJyOzwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPkJldGFsaW5nPC9zcGFuPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnJlYWRjcnVtYnM7XHJcbiIsImltcG9ydCB7IHVzZUNhcnRTdGF0ZSB9IGZyb20gXCIuLi8uLi9jb250ZXh0L2NhcnRcIjtcclxuaW1wb3J0IHsgdXNlTW9kYWxEaXNwYXRjaCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L21vZGFsXCI7XHJcblxyXG5pbXBvcnQgQ2FydEl0ZW0gZnJvbSBcIi4vQ2FydEl0ZW1cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnQoKSB7XHJcbiAgY29uc3QgeyBsaW5lX2l0ZW1zLCBzdWJ0b3RhbCwgdG90YWxfdW5pcXVlX2l0ZW1zIH0gPSB1c2VDYXJ0U3RhdGUoKTtcclxuICBjb25zdCB7IHNob3dDaGVja291dCB9ID0gdXNlTW9kYWxEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBpc0VtcHR5ID0gbGluZV9pdGVtcy5sZW5ndGggPT09IDA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtsaW5lX2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPENhcnRJdGVtIGtleT17aXRlbS5pZH0gey4uLml0ZW19IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7aXNFbXB0eSA/IChcclxuICAgICAgICAgIDxwPkhhbmRsZWt1cnZlbiBkaW4gZXIgdG9tPC9wPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIFRvdGFscHJpczoge3N1YnRvdGFsPy5mb3JtYXR0ZWRfd2l0aF9zeW1ib2x9LCB7dG90YWxfdW5pcXVlX2l0ZW1zfXtcIiBcIn1cclxuICAgICAgICAgICAgICB7dG90YWxfdW5pcXVlX2l0ZW1zID09PSAxID8gXCJpdGVtXCIgOiBcIml0ZW1zXCJ9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dDaGVja291dH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBCZXRhbFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5cclxuaW1wb3J0IGNvbW1lcmNlIGZyb20gXCIuLi8uLi9saWIvY29tbWVyY2VcIjtcclxuaW1wb3J0IHsgdXNlQ2FydERpc3BhdGNoIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvY2FydFwiO1xyXG5cclxuZnVuY3Rpb24gQ2FydEl0ZW0oeyBpZCwgbWVkaWEsIG5hbWUsIHF1YW50aXR5LCBsaW5lX3RvdGFsLCBzZWxlY3RlZF9vcHRpb25zIH0pIHtcclxuICBjb25zdCB7IHNldENhcnQgfSA9IHVzZUNhcnREaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGhhc1ZhcmlhbnRzID0gc2VsZWN0ZWRfb3B0aW9ucy5sZW5ndGggPj0gMTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVXBkYXRlQ2FydCA9ICh7IGNhcnQgfSkgPT4ge1xyXG4gICAgc2V0Q2FydChjYXJ0KTtcclxuXHJcbiAgICByZXR1cm4gY2FydDtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZW1vdmVJdGVtID0gKCkgPT5cclxuICAgIGNvbW1lcmNlLmNhcnRcclxuICAgICAgLnJlbW92ZShpZClcclxuICAgICAgLnRoZW4oaGFuZGxlVXBkYXRlQ2FydClcclxuICAgICAgLnRoZW4oKHsgc3VidG90YWwgfSkgPT5cclxuICAgICAgICB0b2FzdChcclxuICAgICAgICAgIGAke25hbWV9IGhhciBibGl0IGZqZXJuZXQgZnJhIGhhbmRsZWt1cnZlbiBkaW4uIFRvdGFscHJpc2VuIGRpbiBlciBuw6U6ICR7c3VidG90YWwuZm9ybWF0dGVkX3dpdGhfc3ltYm9sfWBcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcblxyXG4gIGNvbnN0IGRlY3JlbWVudFF1YW50aXR5ID0gKCkgPT4ge1xyXG4gICAgcXVhbnRpdHkgPiAxXHJcbiAgICAgID8gY29tbWVyY2UuY2FydFxyXG4gICAgICAgICAgLnVwZGF0ZShpZCwgeyBxdWFudGl0eTogcXVhbnRpdHkgLSAxIH0pXHJcbiAgICAgICAgICAudGhlbihoYW5kbGVVcGRhdGVDYXJ0KVxyXG4gICAgICAgICAgLnRoZW4oKHsgc3VidG90YWwgfSkgPT5cclxuICAgICAgICAgICAgdG9hc3QoXHJcbiAgICAgICAgICAgICAgYDEgXCIke25hbWV9XCIgaGFyIGJsaXQgZmplcm5ldCBmcmEgaGFuZGxla3VydmVuIGRpbi4gVG90YWxwcmlzZW4gZGluIGVyIG7DpTogJHtzdWJ0b3RhbC5mb3JtYXR0ZWRfd2l0aF9zeW1ib2x9YFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApXHJcbiAgICAgIDogaGFuZGxlUmVtb3ZlSXRlbSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluY3JlbWVudFF1YW50aXR5ID0gKCkgPT5cclxuICAgIGNvbW1lcmNlLmNhcnRcclxuICAgICAgLnVwZGF0ZShpZCwgeyBxdWFudGl0eTogcXVhbnRpdHkgKyAxIH0pXHJcbiAgICAgIC50aGVuKGhhbmRsZVVwZGF0ZUNhcnQpXHJcbiAgICAgIC50aGVuKCh7IHN1YnRvdGFsIH0pID0+XHJcbiAgICAgICAgdG9hc3QoXHJcbiAgICAgICAgICBgRW5kYSBlbiBcIiR7bmFtZX1cIiBoYXIgYmxpdHQgbGFndCBpIGhhbmRsZWt1cnZlbiBkaW4sIFRvdGFscHJpc2VuIGRpbiBlciBuw6U6ICR7c3VidG90YWwuZm9ybWF0dGVkX3dpdGhfc3ltYm9sfWBcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPXttZWRpYS5zb3VyY2V9XHJcbiAgICAgICAgICBhbHQ9e25hbWV9XHJcbiAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgIGxvYWRpbmc9XCJlYWdlclwiXHJcbiAgICAgICAgICBwcmlvcml0eT17dHJ1ZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAge2hhc1ZhcmlhbnRzICYmIChcclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAge3NlbGVjdGVkX29wdGlvbnMubWFwKCh7IG9wdGlvbl9uYW1lIH0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgIHtpbmRleCA/IGAsICR7b3B0aW9uX25hbWV9YCA6IG9wdGlvbl9uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2xpbmVfdG90YWwuZm9ybWF0dGVkX3dpdGhfc3ltYm9sfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuPlF1YW50aXR5Ojwvc3Bhbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtkZWNyZW1lbnRRdWFudGl0eX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAtXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e3F1YW50aXR5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtpbmNyZW1lbnRRdWFudGl0eX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICArXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlbW92ZUl0ZW19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydEl0ZW07XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgdXNlTW9kYWxTdGF0ZSwgdXNlTW9kYWxEaXNwYXRjaCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L21vZGFsXCI7XHJcbmltcG9ydCB7IHVzZUNoZWNrb3V0RGlzcGF0Y2ggfSBmcm9tIFwiLi4vLi4vY29udGV4dC9jaGVja291dFwiO1xyXG5pbXBvcnQgeyB1c2VDYXJ0U3RhdGUgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9jYXJ0XCI7XHJcblxyXG5pbXBvcnQgQnJlYWRjcnVtYnMgZnJvbSBcIi4vQnJlYWRjcnVtYnNcIjtcclxuaW1wb3J0IENhcnQgZnJvbSBcIi4vQ2FydFwiO1xyXG5pbXBvcnQgQ2hlY2tvdXQgZnJvbSBcIi4vY2hlY2tvdXQvaW5kZXguanNcIjtcclxuXHJcbmZ1bmN0aW9uIEN1cnJlbnRTdGVwKHsgc3RlcCB9KSB7XHJcbiAgY29uc3QgeyBpZCB9ID0gdXNlQ2FydFN0YXRlKCk7XHJcblxyXG4gIHN3aXRjaCAoc3RlcCkge1xyXG4gICAgY2FzZSBcImNhcnRcIjpcclxuICAgICAgcmV0dXJuIDxDYXJ0IC8+O1xyXG4gICAgY2FzZSBcImNoZWNrb3V0XCI6XHJcbiAgICAgIHJldHVybiA8Q2hlY2tvdXQgY2FydElkPXtpZH0gLz47XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1vZGFsKCkge1xyXG4gIGNvbnN0IHsgb3Blbiwgc3RlcCB9ID0gdXNlTW9kYWxTdGF0ZSgpO1xyXG4gIGNvbnN0IHsgY2xvc2VNb2RhbCB9ID0gdXNlTW9kYWxEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgcmVzZXQ6IHJlc2V0Q2hlY2tvdXQgfSA9IHVzZUNoZWNrb3V0RGlzcGF0Y2goKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIGNsb3NlTW9kYWwpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VTdGFydFwiLCBjbG9zZU1vZGFsKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBjbG9zZUFuZFJlc2V0TW9kYWwgPSAoKSA9PiB7XHJcbiAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICByZXNldENoZWNrb3V0KCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtvcGVuICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxCcmVhZGNydW1icyBpbkNhcnQ9e3N0ZXAgPT09IFwiY2FydFwifSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VBbmRSZXNldE1vZGFsfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Q3VycmVudFN0ZXAgc3RlcD17c3RlcH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IGNvbW1lcmNlIH0gZnJvbSBcIi4uL2xpYi9jb21tZXJjZVwiO1xyXG5cclxuY29uc3QgQ2hlY2tvdXRTdGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmNvbnN0IENoZWNrb3V0RGlzcGF0Y2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgU0VUX0NVUlJFTlRfU1RFUCA9IFwiU0VUX0NVUlJFTlRfU1RFUFwiO1xyXG5jb25zdCBTRVRfQ0hFQ0tPVVQgPSBcIlNFVF9DSEVDS09VVFwiO1xyXG5jb25zdCBTRVRfTElWRSA9IFwiU0VUX0xJVkVcIjtcclxuY29uc3QgU0VUX1BST0NFU1NJTkcgPSBcIlNFVF9QUk9DRVNTSU5HXCI7XHJcbmNvbnN0IFNFVF9FUlJPUiA9IFwiU0VUX0VSUk9SXCI7XHJcbmNvbnN0IFJFU0VUID0gXCJSRVNFVFwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGN1cnJlbnRTdGVwOiBcImV4dHJhZmllbGRzXCIsXHJcbiAgcHJvY2Vzc2luZzogZmFsc2UsXHJcbiAgZXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFNFVF9DVVJSRU5UX1NURVA6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3VycmVudFN0ZXA6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTRVRfQ0hFQ0tPVVQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNFVF9MSVZFOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbGl2ZTogeyAuLi5zdGF0ZS5saXZlLCAuLi5hY3Rpb24ucGF5bG9hZCB9IH07XHJcbiAgICBjYXNlIFNFVF9QUk9DRVNTSU5HOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvY2Vzc2luZzogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgU0VUX0VSUk9SOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFJFU0VUOlxyXG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGFjdGlvbjogJHthY3Rpb24udHlwZX1gKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ2hlY2tvdXRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgY29uc3QgZ2VuZXJhdGVUb2tlbiA9IGFzeW5jIChjYXJ0SWQpID0+IHtcclxuICAgIGlmICghY2FydElkKSByZXR1cm47XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGNvbW1lcmNlLmNoZWNrb3V0LmdlbmVyYXRlVG9rZW4oY2FydElkLCB7XHJcbiAgICAgICAgdHlwZTogXCJjYXJ0XCIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBTRVRfQ0hFQ0tPVVQsIHBheWxvYWQgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgLy8gbm9vcFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldFNoaXBwaW5nTWV0aG9kID0gYXN5bmMgKHNoaXBwaW5nX29wdGlvbl9pZCwgY291bnRyeSwgcmVnaW9uKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGxpdmUgfSA9IGF3YWl0IGNvbW1lcmNlLmNoZWNrb3V0LmNoZWNrU2hpcHBpbmdPcHRpb24oc3RhdGUuaWQsIHtcclxuICAgICAgICBzaGlwcGluZ19vcHRpb25faWQsXHJcbiAgICAgICAgY291bnRyeSxcclxuICAgICAgICAuLi4ocmVnaW9uICYmIHsgcmVnaW9uIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogU0VUX0xJVkUsIHBheWxvYWQ6IGxpdmUgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgLy8gbm9vcFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldEN1cnJlbnRTdGVwID0gKHN0ZXApID0+XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFNFVF9DVVJSRU5UX1NURVAsIHBheWxvYWQ6IHN0ZXAgfSk7XHJcblxyXG4gIGNvbnN0IG5leHRTdGVwRnJvbSA9IChjdXJyZW50U3RlcCkgPT4ge1xyXG4gICAgc3dpdGNoIChjdXJyZW50U3RlcCkge1xyXG4gICAgICBjYXNlIFwiZXh0cmFmaWVsZHNcIjpcclxuICAgICAgICByZXR1cm4gc3RhdGUuY29sbGVjdHMuc2hpcHBpbmdfYWRkcmVzcyA/IFwic2hpcHBpbmdcIiA6IFwiYmlsbGluZ1wiO1xyXG4gICAgICBjYXNlIFwic2hpcHBpbmdcIjpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gXCJiaWxsaW5nXCI7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FwdHVyZSA9ICh2YWx1ZXMpID0+IGNvbW1lcmNlLmNoZWNrb3V0LmNhcHR1cmUoc3RhdGUuaWQsIHZhbHVlcyk7XHJcblxyXG4gIGNvbnN0IHNldFByb2Nlc3NpbmcgPSAocGF5bG9hZCkgPT5cclxuICAgIGRpc3BhdGNoKHsgdHlwZTogU0VUX1BST0NFU1NJTkcsIHBheWxvYWQgfSk7XHJcblxyXG4gIGNvbnN0IHNldEVycm9yID0gKHBheWxvYWQpID0+IGRpc3BhdGNoKHsgdHlwZTogU0VUX0VSUk9SLCBwYXlsb2FkIH0pO1xyXG5cclxuICBjb25zdCByZXNldCA9ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogUkVTRVQgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2hlY2tvdXREaXNwYXRjaENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBnZW5lcmF0ZVRva2VuLFxyXG4gICAgICAgIHNldFNoaXBwaW5nTWV0aG9kLFxyXG4gICAgICAgIHNldEN1cnJlbnRTdGVwLFxyXG4gICAgICAgIG5leHRTdGVwRnJvbSxcclxuICAgICAgICBjYXB0dXJlLFxyXG4gICAgICAgIHNldFByb2Nlc3NpbmcsXHJcbiAgICAgICAgc2V0RXJyb3IsXHJcbiAgICAgICAgcmVzZXQsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxDaGVja291dFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9DaGVja291dFN0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIDwvQ2hlY2tvdXREaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VDaGVja291dFN0YXRlID0gKCkgPT4gdXNlQ29udGV4dChDaGVja291dFN0YXRlQ29udGV4dCk7XHJcbmV4cG9ydCBjb25zdCB1c2VDaGVja291dERpc3BhdGNoID0gKCkgPT4gdXNlQ29udGV4dChDaGVja291dERpc3BhdGNoQ29udGV4dCk7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVGhlbWVTdGF0ZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcbmNvbnN0IFRoZW1lRGlzcGF0Y2hDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0gbnVsbDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaGVtZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZURpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2V0VGhlbWV9PlxyXG4gICAgICA8VGhlbWVTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RoZW1lfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvVGhlbWVTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICA8L1RoZW1lRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlVGhlbWVTdGF0ZSA9ICgpID0+IFJlYWN0LnVzZUNvbnRleHQoVGhlbWVTdGF0ZUNvbnRleHQpO1xyXG5leHBvcnQgY29uc3QgdXNlVGhlbWVEaXNwYXRjaCA9ICgpID0+IFJlYWN0LnVzZUNvbnRleHQoVGhlbWVEaXNwYXRjaENvbnRleHQpO1xyXG4iLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dCdcblxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5cbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC90aGVtZVwiO1xuaW1wb3J0IHsgTW9kYWxQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L21vZGFsXCI7XG5pbXBvcnQgeyBDYXJ0UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9jYXJ0XCI7XG5pbXBvcnQgeyBDaGVja291dFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvY2hlY2tvdXRcIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9wYXltZW50L01vZGFsXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyPlxuICAgIDxNb2RhbFByb3ZpZGVyPlxuICAgICAgPENhcnRQcm92aWRlcj5cbiAgICAgICAgPENoZWNrb3V0UHJvdmlkZXI+XG4gICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGluaXRpYWw9e2ZhbHNlfSBleGl0QmVmb3JlRW50ZXI+XG4gICAgICAgICAgICAgIDxNb2RhbCAvPlxuICAgICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgPC9DaGVja291dFByb3ZpZGVyPlxuICAgICAgPC9DYXJ0UHJvdmlkZXI+XG4gICAgPC9Nb2RhbFByb3ZpZGVyPlxuICA8L1RoZW1lUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlclwiOiBcIkZvb3Rlcl9mb290ZXJfXzMxN2lLXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hlYy9jb21tZXJjZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9