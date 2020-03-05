module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Author.js":
/*!******************************!*\
  !*** ./components/Author.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/divider */ "antd/lib/divider");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/avatar */ "antd/lib/avatar");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_style_components_Author_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/style/components/Author.css */ "./public/style/components/Author.css");
/* harmony import */ var _public_style_components_Author_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_style_components_Author_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "D:\\Web\\ReactProjects\\react_blog\\blog\\components\\Author.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


function Author() {
  return __jsx("div", {
    className: "author-div comm-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, " ", __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    size: 100,
    src: "https://s2.ax1x.com/2020/03/02/3WpgKS.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), " "), __jsx("div", {
    className: "author-introduction",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "fmt.Println(\"Hello\u3001Happy World\uFF01\")", __jsx(antd_lib_divider__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "\u793E\u4EA4\u5E10\u53F7"), __jsx("a", {
    href: "https://weibo.com/zachxia",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    size: 28,
    icon: "weibo",
    className: "account",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), __jsx("a", {
    href: "https://space.bilibili.com/7188253",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    size: 28,
    icon: "play-circle",
    className: "account",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Author);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_style_components_Footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/style/components/Footer.css */ "./public/style/components/Footer.css");
/* harmony import */ var _public_style_components_Footer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_style_components_Footer_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Web\\ReactProjects\\react_blog\\blog\\components\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Footer() {
  return __jsx("div", {
    className: "footer-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "\u7CFB\u7EDF\u7531React+Node+Ant Design\u9A71\u52A8"));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_affix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/affix */ "antd/lib/affix");
/* harmony import */ var antd_lib_affix__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_affix__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_style_components_header_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/style/components/header.css */ "./public/style/components/header.css");
/* harmony import */ var _public_style_components_header_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_style_components_header_css__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "D:\\Web\\ReactProjects\\react_blog\\blog\\components\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



function Header() {
  return __jsx(antd_lib_affix__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "flex",
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xs: 24,
    sm: 24,
    md: 10,
    lg: 15,
    xl: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("span", {
    className: "header-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "ZachXia"))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xs: 0,
    sm: 0,
    md: 14,
    lg: 8,
    xl: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/tocify.tsx":
/*!*******************************!*\
  !*** ./components/tocify.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tocify; });
/* harmony import */ var antd_lib_anchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/anchor */ "antd/lib/anchor");
/* harmony import */ var antd_lib_anchor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_anchor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Web\\ReactProjects\\react_blog\\blog\\components\\tocify.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const {
  Link
} = antd_lib_anchor__WEBPACK_IMPORTED_MODULE_0___default.a;
// TOC目录树结构
class Tocify {
  constructor() {
    _defineProperty(this, "tocItems", []);

    _defineProperty(this, "index", 0);

    _defineProperty(this, "reset", () => {
      this.tocItems = [];
      this.index = 0;
    });

    this.tocItems = [];
    this.index = 0;
  }

  add(text, level) {
    const anchor = `toc${level}${++this.index}`;
    const item = {
      anchor,
      level,
      text
    };
    const items = this.tocItems;

    if (items.length === 0) {
      // 第一个 item 直接 push
      items.push(item);
    } else {
      let lastItem = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["last"])(items); // 最后一个 item

      if (item.level > lastItem.level) {
        // item 是 lastItem 的 children
        for (let i = lastItem.level + 1; i <= 2; i++) {
          const {
            children
          } = lastItem;

          if (!children) {
            // 如果 children 不存在
            lastItem.children = [item];
            break;
          }

          lastItem = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["last"])(children); // 重置 lastItem 为 children 的最后一个 item

          if (item.level <= lastItem.level) {
            // item level 小于或等于 lastItem level 都视为与 children 同级
            children.push(item);
            break;
          }
        }
      } else {
        // 置于最顶级
        items.push(item);
      }
    }

    return anchor;
  }

  renderToc(items) {
    // 递归 render
    return items.map(item => __jsx(Link, {
      key: item.anchor,
      href: `#${item.anchor}`,
      title: item.text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, item.children && this.renderToc(item.children)));
  }

  render() {
    return __jsx(antd_lib_anchor__WEBPACK_IMPORTED_MODULE_0___default.a, {
      affix: true,
      showInkInFixed: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, this.renderToc(this.tocItems));
  }

}

/***/ }),

/***/ "./config/apiUrl.js":
/*!**************************!*\
  !*** ./config/apiUrl.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let ipUrl = 'http://127.0.0.1:7001/default/';
let servicePath = {
  getArticleList: ipUrl + 'getArticleList',
  getArticleById: ipUrl + 'getArticleById/',
  getTypeInfo: ipUrl + 'getTypeInfo',
  getListById: ipUrl + 'getListById/'
};
/* harmony default export */ __webpack_exports__["default"] = (servicePath);

/***/ }),

/***/ "./node_modules/highlight.js/styles/monokai-sublime.css":
/*!**************************************************************!*\
  !*** ./node_modules/highlight.js/styles/monokai-sublime.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/markdown-navbar/dist/navbar.css":
/*!******************************************************!*\
  !*** ./node_modules/markdown-navbar/dist/navbar.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/detailed.js":
/*!***************************!*\
  !*** ./pages/detailed.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/breadcrumb */ "antd/lib/breadcrumb");
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_affix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/affix */ "antd/lib/affix");
/* harmony import */ var antd_lib_affix__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_affix__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Author__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Author */ "./components/Author.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_tocify_tsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/tocify.tsx */ "./components/tocify.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_style_pages_detailed_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/style/pages/detailed.css */ "./public/style/pages/detailed.css");
/* harmony import */ var _public_style_pages_detailed_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_style_pages_detailed_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var markdown_navbar_dist_navbar_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! markdown-navbar/dist/navbar.css */ "./node_modules/markdown-navbar/dist/navbar.css");
/* harmony import */ var markdown_navbar_dist_navbar_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(markdown_navbar_dist_navbar_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! marked */ "marked");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! highlight.js */ "highlight.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var highlight_js_styles_monokai_sublime_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! highlight.js/styles/monokai-sublime.css */ "./node_modules/highlight.js/styles/monokai-sublime.css");
/* harmony import */ var highlight_js_styles_monokai_sublime_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_monokai_sublime_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _config_apiUrl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../config/apiUrl */ "./config/apiUrl.js");





var _jsxFileName = "D:\\Web\\ReactProjects\\react_blog\\blog\\pages\\detailed.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;














function Detailed(props) {
  const mermaid = __webpack_require__(/*! mermaid */ "mermaid");

  const renderer = new marked__WEBPACK_IMPORTED_MODULE_14___default.a.Renderer();
  const tocify = new _components_tocify_tsx__WEBPACK_IMPORTED_MODULE_9__["default"]();

  renderer.heading = (text, level, raw) => {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };

  renderer.code = function (code, language) {
    if (code.match(/^sequenceDiagram/) || code.match(/^graph/)) {
      return '<div class="mermaid">' + code + '</div>';
    } else {
      return '<pre><code>' + highlight_js__WEBPACK_IMPORTED_MODULE_15___default.a.highlightAuto(code).value + '</code></pre>';
    }
  };

  marked__WEBPACK_IMPORTED_MODULE_14___default.a.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: code => highlight_js__WEBPACK_IMPORTED_MODULE_15___default.a.highlightAuto(code).value
  });
  let html = marked__WEBPACK_IMPORTED_MODULE_14___default()(props.article_content);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Detailed")), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: "comm-main",
    type: "flex",
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "comm-left",
    xs: 0,
    sm: 0,
    md: 7,
    lg: 5,
    xl: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_components_Author__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx(antd_lib_affix__WEBPACK_IMPORTED_MODULE_4___default.a, {
    offsetTop: 55,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("div", {
    className: "detailed-nav comm-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("div", {
    className: "nav-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "\u6587\u7AE0\u76EE\u5F55"), __jsx("div", {
    className: "toc-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, tocify && tocify.render())))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "comm-right",
    xs: 24,
    sm: 24,
    md: 16,
    lg: 18,
    xl: 14,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("div", {
    className: "bread-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "\u9996\u9875")), __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, props.typeName), __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("div", {
    className: "detailed-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, props.title), __jsx("div", {
    className: "list-icon center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "calendar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), " ", props.addTime, " "), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "folder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), " ", props.typeName, " ")), __jsx("div", {
    className: "detailed-content",
    dangerouslySetInnerHTML: {
      __html: html
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }))))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }));
}

Detailed.getInitialProps = async context => {
  let id = context.query.id;
  const promise = new Promise(resolve => {
    axios__WEBPACK_IMPORTED_MODULE_13___default()(_config_apiUrl__WEBPACK_IMPORTED_MODULE_17__["default"].getArticleById + id).then(res => {
      resolve(res.data.data[0]);
    });
  });
  return await promise;
};

/* harmony default export */ __webpack_exports__["default"] = (Detailed);

/***/ }),

/***/ "./public/style/components/Author.css":
/*!********************************************!*\
  !*** ./public/style/components/Author.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/style/components/Footer.css":
/*!********************************************!*\
  !*** ./public/style/components/Footer.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/style/components/header.css":
/*!********************************************!*\
  !*** ./public/style/components/header.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/style/pages/detailed.css":
/*!*****************************************!*\
  !*** ./public/style/pages/detailed.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/detailed.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Web\ReactProjects\react_blog\blog\pages\detailed.js */"./pages/detailed.js");


/***/ }),

/***/ "antd/lib/affix":
/*!*********************************!*\
  !*** external "antd/lib/affix" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/affix");

/***/ }),

/***/ "antd/lib/anchor":
/*!**********************************!*\
  !*** external "antd/lib/anchor" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/anchor");

/***/ }),

/***/ "antd/lib/avatar":
/*!**********************************!*\
  !*** external "antd/lib/avatar" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "antd/lib/breadcrumb":
/*!**************************************!*\
  !*** external "antd/lib/breadcrumb" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/breadcrumb");

/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/divider":
/*!***********************************!*\
  !*** external "antd/lib/divider" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "highlight.js":
/*!*******************************!*\
  !*** external "highlight.js" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("highlight.js");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),

/***/ "mermaid":
/*!**************************!*\
  !*** external "mermaid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mermaid");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=detailed.js.map