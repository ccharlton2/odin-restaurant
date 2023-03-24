/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./hero-img.jpg */ "./src/hero-img.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  scroll-behavior: smooth;\n}\n\nbody,\nhtml {\n  font-family: \"Roboto Slab\", serif;\n  height: 100%;\n  margin: 0px;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0px;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n}\n\n.line-break-small {\n  width: 10%;\n}\n\n.line-break-medium {\n  width: 30%;\n}\n\n.line-break-large {\n  width: 70%;\n}\n\n.nav {\n  position: sticky;\n  top: 0;\n  background-color: rgba(255, 255, 255, 0.9);\n  z-index: 40;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n  padding: 24px;\n}\n\n.nav > * {\n  z-index: 40;\n}\n\n.nav > .nav-links {\n  display: inline;\n  float: right;\n  text-decoration: none;\n  font-size: 2rem;\n  font-weight: 300;\n  color: black;\n}\n\n.nav > .nav-links > a {\n  display: inline-block;\n  padding: 13px 10px 13px 10px;\n  text-decoration: none;\n  color: black;\n}\n\n.nav > #nav-check {\n  display: none;\n}\n\n.logo {\n  height: auto;\n}\n\n.hero-content {\n  height: 75vh;\n}\n\n/* The hero image */\n.hero-image {\n  /* Use \"linear-gradient\" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n\n  /* Set a specific height */\n  height: 100%;\n\n  /* Position and center the image to scale nicely on all screens */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n\n/* Place text in the middle of the image */\n.hero-text {\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n}\n\n.about-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  padding: 128px 24px;\n}\n\n.about-title {\n  font-size: 3rem;\n}\n\n.about-info-wrapper {\n  display: flex;\n  align-items: center;\n  padding: 48px;\n  gap: 48px;\n}\n\n.about-img {\n  width: 300px;\n  height: auto;\n  border-radius: 5% 70% 20%;\n}\n\n.about-text {\n  font-size: 1.5rem;\n  line-height: 1.5;\n}\n\n.menu-container {\n  background-color: #333333;\n  color: #ffffff;\n  text-align: center;\n  padding: 48px;\n}\n\n.menu-title {\n  font-size: 3rem;\n}\n\n.menu-category-title {\n  font-size: 2rem;\n}\n\n.menu-title,\n.menu-category-title {\n  margin: 24px 0px;\n}\n\n.menu-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n  margin: 24px 0px;\n}\n\n.menu-item-name {\n  font-weight: 700;\n}\n\n.review-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 48px;\n  padding: 112px 48px;\n  height: 50vh;\n}\n\n.review-title {\n  font-size: 2rem;\n  margin: 0px;\n}\n\n.review-wrapper-wrapper {\n  display: flex;\n  gap: 96px;\n  margin: 48px 0px;\n}\n\n.review-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n}\n\n.review-rating {\n  font-size: 2rem;\n}\n\n.footer-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n  padding: 24px;\n  background-color: #e0e0e0;\n}\n\n.contact-content {\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  justify-content: center;\n  gap: 48px;\n  padding: 48px;\n  margin: 96px 0px;\n\n  border-radius: 12px;\n  background-color: #333333;\n  color: #ffffff;\n  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\n}\n\n.contact-title {\n  font-size: 2.5rem;\n}\n\n.contact-information,\n.address-information,\n.footer-links {\n  display: flex;\n  gap: 8px;\n}\n\n.contact-information,\n.address-information {\n  font-size: 1.5rem;\n}\n\n.address-information {\n  flex-direction: column;\n}\n\n.contact-information {\n  gap: 48px;\n}\n\n.contact-wrapper {\n  display: flex;\n}\n\n.tel,\n.email,\n.address-information {\n  font-weight: 700;\n}\n\n@media only screen and (min-width: 1142px) {\n  .nav {\n    align-items: baseline;\n  }\n\n  .logo {\n    width: 300px;\n  }\n\n  .about-content {\n    height: 100vh;\n  }\n\n  .contact-content {\n    align-items: center;\n    height: 50vh;\n    width: 50%;\n  }\n\n  .contact-title {\n    align-self: center;\n  }\n}\n\n@media (max-width: 1142px) {\n  .nav > .nav-btn {\n    right: 0px;\n    top: 0px;\n  }\n  .nav > .nav-btn > label {\n    width: 50px;\n    height: 50px;\n    padding: 13px;\n  }\n\n  .nav > .nav-btn > label > span {\n    display: block;\n    width: 25px;\n    height: 10px;\n    border-top: 2px solid black;\n  }\n  .nav > .nav-links {\n    position: absolute;\n    display: block;\n    width: 100%;\n    background-color: rgba(255, 255, 255, 0.9);\n    height: 0px;\n    transition: all 0.3s ease-in;\n    overflow-y: hidden;\n    top: 126px;\n    left: 0px;\n  }\n  .nav > .nav-links > a {\n    width: 100%;\n  }\n\n  .nav-links {\n    height: 0px;\n  }\n\n  .toggle-height {\n    height: calc(100vh - 50px) !important;\n    overflow-y: auto !important;\n  }\n\n  .about-info-wrapper {\n    flex-direction: column;\n  }\n\n  .review-content {\n    height: 100vh;\n  }\n\n  .review-wrapper-wrapper {\n    flex-direction: column;\n  }\n\n  .contact-content {\n    width: 75%;\n  }\n\n  .contact-title,\n  .contact-information,\n  .address-information {\n    flex: 1;\n  }\n\n  .contact-information {\n    display: flex;\n    flex-direction: column;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html {\n  scroll-behavior: smooth;\n}\n\nbody,\nhtml {\n  font-family: \"Roboto Slab\", serif;\n  height: 100%;\n  margin: 0px;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0px;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n}\n\n.line-break-small {\n  width: 10%;\n}\n\n.line-break-medium {\n  width: 30%;\n}\n\n.line-break-large {\n  width: 70%;\n}\n\n.nav {\n  position: sticky;\n  top: 0;\n  background-color: rgba(255, 255, 255, 0.9);\n  z-index: 40;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n  padding: 24px;\n}\n\n.nav > * {\n  z-index: 40;\n}\n\n.nav > .nav-links {\n  display: inline;\n  float: right;\n  text-decoration: none;\n  font-size: 2rem;\n  font-weight: 300;\n  color: black;\n}\n\n.nav > .nav-links > a {\n  display: inline-block;\n  padding: 13px 10px 13px 10px;\n  text-decoration: none;\n  color: black;\n}\n\n.nav > #nav-check {\n  display: none;\n}\n\n.logo {\n  height: auto;\n}\n\n.hero-content {\n  height: 75vh;\n}\n\n/* The hero image */\n.hero-image {\n  /* Use \"linear-gradient\" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\n    url(\"./hero-img.jpg\");\n\n  /* Set a specific height */\n  height: 100%;\n\n  /* Position and center the image to scale nicely on all screens */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n\n/* Place text in the middle of the image */\n.hero-text {\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n}\n\n.about-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  padding: 128px 24px;\n}\n\n.about-title {\n  font-size: 3rem;\n}\n\n.about-info-wrapper {\n  display: flex;\n  align-items: center;\n  padding: 48px;\n  gap: 48px;\n}\n\n.about-img {\n  width: 300px;\n  height: auto;\n  border-radius: 5% 70% 20%;\n}\n\n.about-text {\n  font-size: 1.5rem;\n  line-height: 1.5;\n}\n\n.menu-container {\n  background-color: #333333;\n  color: #ffffff;\n  text-align: center;\n  padding: 48px;\n}\n\n.menu-title {\n  font-size: 3rem;\n}\n\n.menu-category-title {\n  font-size: 2rem;\n}\n\n.menu-title,\n.menu-category-title {\n  margin: 24px 0px;\n}\n\n.menu-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n  margin: 24px 0px;\n}\n\n.menu-item-name {\n  font-weight: 700;\n}\n\n.review-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 48px;\n  padding: 112px 48px;\n  height: 50vh;\n}\n\n.review-title {\n  font-size: 2rem;\n  margin: 0px;\n}\n\n.review-wrapper-wrapper {\n  display: flex;\n  gap: 96px;\n  margin: 48px 0px;\n}\n\n.review-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n}\n\n.review-rating {\n  font-size: 2rem;\n}\n\n.footer-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n  padding: 24px;\n  background-color: #e0e0e0;\n}\n\n.contact-content {\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  justify-content: center;\n  gap: 48px;\n  padding: 48px;\n  margin: 96px 0px;\n\n  border-radius: 12px;\n  background-color: #333333;\n  color: #ffffff;\n  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\n}\n\n.contact-title {\n  font-size: 2.5rem;\n}\n\n.contact-information,\n.address-information,\n.footer-links {\n  display: flex;\n  gap: 8px;\n}\n\n.contact-information,\n.address-information {\n  font-size: 1.5rem;\n}\n\n.address-information {\n  flex-direction: column;\n}\n\n.contact-information {\n  gap: 48px;\n}\n\n.contact-wrapper {\n  display: flex;\n}\n\n.tel,\n.email,\n.address-information {\n  font-weight: 700;\n}\n\n@media only screen and (min-width: 1142px) {\n  .nav {\n    align-items: baseline;\n  }\n\n  .logo {\n    width: 300px;\n  }\n\n  .about-content {\n    height: 100vh;\n  }\n\n  .contact-content {\n    align-items: center;\n    height: 50vh;\n    width: 50%;\n  }\n\n  .contact-title {\n    align-self: center;\n  }\n}\n\n@media (max-width: 1142px) {\n  .nav > .nav-btn {\n    right: 0px;\n    top: 0px;\n  }\n  .nav > .nav-btn > label {\n    width: 50px;\n    height: 50px;\n    padding: 13px;\n  }\n\n  .nav > .nav-btn > label > span {\n    display: block;\n    width: 25px;\n    height: 10px;\n    border-top: 2px solid black;\n  }\n  .nav > .nav-links {\n    position: absolute;\n    display: block;\n    width: 100%;\n    background-color: rgba(255, 255, 255, 0.9);\n    height: 0px;\n    transition: all 0.3s ease-in;\n    overflow-y: hidden;\n    top: 126px;\n    left: 0px;\n  }\n  .nav > .nav-links > a {\n    width: 100%;\n  }\n\n  .nav-links {\n    height: 0px;\n  }\n\n  .toggle-height {\n    height: calc(100vh - 50px) !important;\n    overflow-y: auto !important;\n  }\n\n  .about-info-wrapper {\n    flex-direction: column;\n  }\n\n  .review-content {\n    height: 100vh;\n  }\n\n  .review-wrapper-wrapper {\n    flex-direction: column;\n  }\n\n  .contact-content {\n    width: 75%;\n  }\n\n  .contact-title,\n  .contact-information,\n  .address-information {\n    flex: 1;\n  }\n\n  .contact-information {\n    display: flex;\n    flex-direction: column;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/chef.jpg":
/*!**********************!*\
  !*** ./src/chef.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "chef.jpg";

/***/ }),

/***/ "./src/cocktail.jpg":
/*!**************************!*\
  !*** ./src/cocktail.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cocktail.jpg";

/***/ }),

/***/ "./src/hero-img.jpg":
/*!**************************!*\
  !*** ./src/hero-img.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hero-img.jpg";

/***/ }),

/***/ "./src/logo-mobile.png":
/*!*****************************!*\
  !*** ./src/logo-mobile.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo-mobile.png";

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.png */ "./src/logo.png");
/* harmony import */ var _hero_img_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero-img.jpg */ "./src/hero-img.jpg");
/* harmony import */ var _chef_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chef.jpg */ "./src/chef.jpg");
/* harmony import */ var _cocktail_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cocktail.jpg */ "./src/cocktail.jpg");
/* harmony import */ var _logo_mobile_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logo-mobile.png */ "./src/logo-mobile.png");







const aDate = new Date();
const copyYear = aDate.getFullYear();
const copyYearSpan = document.getElementById("copy-year");
copyYearSpan.textContent = copyYear;

const logoImg = document.querySelector(".logo");

const mediaQuery = window.matchMedia("(max-width: 1142px)");

console.log(window.innerWidth);

function handleTabletChange(e) {
  if (e.matches) {
    logoImg.src = "./logo-mobile.png";
  } else {
    logoImg.src = "./logo.png";
  }
}

mediaQuery.addListener(handleTabletChange);

handleTabletChange(mediaQuery);

const hamburgerCheck = document.getElementById("nav-check");
const navDrawer = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-link");
const logoLink = document.getElementById("logo-link");

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener("click", toggleNavDrawer);
}

hamburgerCheck.addEventListener("click", toggleNavDrawer);
logoLink.addEventListener("click", () => {
  navDrawer.classList.remove("toggle-height");
});

function toggleNavDrawer() {
  if (window.innerWidth <= 1142) {
    navDrawer.classList.toggle("toggle-height");
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUdBQWlDO0FBQzdFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLGdEQUFnRCw0QkFBNEIsR0FBRyxpQkFBaUIsd0NBQXdDLGlCQUFpQixnQkFBZ0IsR0FBRyxpQ0FBaUMsZ0JBQWdCLEdBQUcsY0FBYyxrQkFBa0IsMkJBQTJCLEdBQUcsdUJBQXVCLGVBQWUsR0FBRyx3QkFBd0IsZUFBZSxHQUFHLHVCQUF1QixlQUFlLEdBQUcsVUFBVSxxQkFBcUIsV0FBVywrQ0FBK0MsZ0JBQWdCLG9CQUFvQixtQ0FBbUMsd0JBQXdCLGNBQWMsa0JBQWtCLEdBQUcsY0FBYyxnQkFBZ0IsR0FBRyx1QkFBdUIsb0JBQW9CLGlCQUFpQiwwQkFBMEIsb0JBQW9CLHFCQUFxQixpQkFBaUIsR0FBRywyQkFBMkIsMEJBQTBCLGlDQUFpQywwQkFBMEIsaUJBQWlCLEdBQUcsdUJBQXVCLGtCQUFrQixHQUFHLFdBQVcsaUJBQWlCLEdBQUcsbUJBQW1CLGlCQUFpQixHQUFHLHVDQUF1QywrUUFBK1Esa0RBQWtELHdHQUF3RyxpQ0FBaUMsMkJBQTJCLHVCQUF1QixHQUFHLDZEQUE2RCx1QkFBdUIsdUJBQXVCLGFBQWEsY0FBYyxxQ0FBcUMsaUJBQWlCLEdBQUcsb0JBQW9CLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QiwwQkFBMEIsR0FBRyxrQkFBa0Isb0JBQW9CLEdBQUcseUJBQXlCLGtCQUFrQix3QkFBd0Isa0JBQWtCLGNBQWMsR0FBRyxnQkFBZ0IsaUJBQWlCLGlCQUFpQiw4QkFBOEIsR0FBRyxpQkFBaUIsc0JBQXNCLHFCQUFxQixHQUFHLHFCQUFxQiw4QkFBOEIsbUJBQW1CLHVCQUF1QixrQkFBa0IsR0FBRyxpQkFBaUIsb0JBQW9CLEdBQUcsMEJBQTBCLG9CQUFvQixHQUFHLHdDQUF3QyxxQkFBcUIsR0FBRyxnQkFBZ0Isa0JBQWtCLDJCQUEyQix3QkFBd0IsY0FBYyxxQkFBcUIsR0FBRyxxQkFBcUIscUJBQXFCLEdBQUcscUJBQXFCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QixjQUFjLHdCQUF3QixpQkFBaUIsR0FBRyxtQkFBbUIsb0JBQW9CLGdCQUFnQixHQUFHLDZCQUE2QixrQkFBa0IsY0FBYyxxQkFBcUIsR0FBRyxxQkFBcUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsY0FBYyxHQUFHLG9CQUFvQixvQkFBb0IsR0FBRyxxQkFBcUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsY0FBYyxrQkFBa0IsOEJBQThCLEdBQUcsc0JBQXNCLGtCQUFrQiwyQkFBMkIsdUJBQXVCLDRCQUE0QixjQUFjLGtCQUFrQixxQkFBcUIsMEJBQTBCLDhCQUE4QixtQkFBbUIsc0RBQXNELEdBQUcsb0JBQW9CLHNCQUFzQixHQUFHLGlFQUFpRSxrQkFBa0IsYUFBYSxHQUFHLGlEQUFpRCxzQkFBc0IsR0FBRywwQkFBMEIsMkJBQTJCLEdBQUcsMEJBQTBCLGNBQWMsR0FBRyxzQkFBc0Isa0JBQWtCLEdBQUcsMENBQTBDLHFCQUFxQixHQUFHLGdEQUFnRCxVQUFVLDRCQUE0QixLQUFLLGFBQWEsbUJBQW1CLEtBQUssc0JBQXNCLG9CQUFvQixLQUFLLHdCQUF3QiwwQkFBMEIsbUJBQW1CLGlCQUFpQixLQUFLLHNCQUFzQix5QkFBeUIsS0FBSyxHQUFHLGdDQUFnQyxxQkFBcUIsaUJBQWlCLGVBQWUsS0FBSyw2QkFBNkIsa0JBQWtCLG1CQUFtQixvQkFBb0IsS0FBSyxzQ0FBc0MscUJBQXFCLGtCQUFrQixtQkFBbUIsa0NBQWtDLEtBQUssdUJBQXVCLHlCQUF5QixxQkFBcUIsa0JBQWtCLGlEQUFpRCxrQkFBa0IsbUNBQW1DLHlCQUF5QixpQkFBaUIsZ0JBQWdCLEtBQUssMkJBQTJCLGtCQUFrQixLQUFLLGtCQUFrQixrQkFBa0IsS0FBSyxzQkFBc0IsNENBQTRDLGtDQUFrQyxLQUFLLDJCQUEyQiw2QkFBNkIsS0FBSyx1QkFBdUIsb0JBQW9CLEtBQUssK0JBQStCLDZCQUE2QixLQUFLLHdCQUF3QixpQkFBaUIsS0FBSyx3RUFBd0UsY0FBYyxLQUFLLDRCQUE0QixvQkFBb0IsNkJBQTZCLEtBQUssR0FBRyxTQUFTLGdGQUFnRixZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxZQUFZLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxNQUFNLFFBQVEsYUFBYSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxPQUFPLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLCtCQUErQiw0QkFBNEIsR0FBRyxpQkFBaUIsd0NBQXdDLGlCQUFpQixnQkFBZ0IsR0FBRyxpQ0FBaUMsZ0JBQWdCLEdBQUcsY0FBYyxrQkFBa0IsMkJBQTJCLEdBQUcsdUJBQXVCLGVBQWUsR0FBRyx3QkFBd0IsZUFBZSxHQUFHLHVCQUF1QixlQUFlLEdBQUcsVUFBVSxxQkFBcUIsV0FBVywrQ0FBK0MsZ0JBQWdCLG9CQUFvQixtQ0FBbUMsd0JBQXdCLGNBQWMsa0JBQWtCLEdBQUcsY0FBYyxnQkFBZ0IsR0FBRyx1QkFBdUIsb0JBQW9CLGlCQUFpQiwwQkFBMEIsb0JBQW9CLHFCQUFxQixpQkFBaUIsR0FBRywyQkFBMkIsMEJBQTBCLGlDQUFpQywwQkFBMEIsaUJBQWlCLEdBQUcsdUJBQXVCLGtCQUFrQixHQUFHLFdBQVcsaUJBQWlCLEdBQUcsbUJBQW1CLGlCQUFpQixHQUFHLHVDQUF1Qyx1UEFBdVAsa0RBQWtELHdHQUF3RyxpQ0FBaUMsMkJBQTJCLHVCQUF1QixHQUFHLDZEQUE2RCx1QkFBdUIsdUJBQXVCLGFBQWEsY0FBYyxxQ0FBcUMsaUJBQWlCLEdBQUcsb0JBQW9CLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QiwwQkFBMEIsR0FBRyxrQkFBa0Isb0JBQW9CLEdBQUcseUJBQXlCLGtCQUFrQix3QkFBd0Isa0JBQWtCLGNBQWMsR0FBRyxnQkFBZ0IsaUJBQWlCLGlCQUFpQiw4QkFBOEIsR0FBRyxpQkFBaUIsc0JBQXNCLHFCQUFxQixHQUFHLHFCQUFxQiw4QkFBOEIsbUJBQW1CLHVCQUF1QixrQkFBa0IsR0FBRyxpQkFBaUIsb0JBQW9CLEdBQUcsMEJBQTBCLG9CQUFvQixHQUFHLHdDQUF3QyxxQkFBcUIsR0FBRyxnQkFBZ0Isa0JBQWtCLDJCQUEyQix3QkFBd0IsY0FBYyxxQkFBcUIsR0FBRyxxQkFBcUIscUJBQXFCLEdBQUcscUJBQXFCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QixjQUFjLHdCQUF3QixpQkFBaUIsR0FBRyxtQkFBbUIsb0JBQW9CLGdCQUFnQixHQUFHLDZCQUE2QixrQkFBa0IsY0FBYyxxQkFBcUIsR0FBRyxxQkFBcUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsY0FBYyxHQUFHLG9CQUFvQixvQkFBb0IsR0FBRyxxQkFBcUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsY0FBYyxrQkFBa0IsOEJBQThCLEdBQUcsc0JBQXNCLGtCQUFrQiwyQkFBMkIsdUJBQXVCLDRCQUE0QixjQUFjLGtCQUFrQixxQkFBcUIsMEJBQTBCLDhCQUE4QixtQkFBbUIsc0RBQXNELEdBQUcsb0JBQW9CLHNCQUFzQixHQUFHLGlFQUFpRSxrQkFBa0IsYUFBYSxHQUFHLGlEQUFpRCxzQkFBc0IsR0FBRywwQkFBMEIsMkJBQTJCLEdBQUcsMEJBQTBCLGNBQWMsR0FBRyxzQkFBc0Isa0JBQWtCLEdBQUcsMENBQTBDLHFCQUFxQixHQUFHLGdEQUFnRCxVQUFVLDRCQUE0QixLQUFLLGFBQWEsbUJBQW1CLEtBQUssc0JBQXNCLG9CQUFvQixLQUFLLHdCQUF3QiwwQkFBMEIsbUJBQW1CLGlCQUFpQixLQUFLLHNCQUFzQix5QkFBeUIsS0FBSyxHQUFHLGdDQUFnQyxxQkFBcUIsaUJBQWlCLGVBQWUsS0FBSyw2QkFBNkIsa0JBQWtCLG1CQUFtQixvQkFBb0IsS0FBSyxzQ0FBc0MscUJBQXFCLGtCQUFrQixtQkFBbUIsa0NBQWtDLEtBQUssdUJBQXVCLHlCQUF5QixxQkFBcUIsa0JBQWtCLGlEQUFpRCxrQkFBa0IsbUNBQW1DLHlCQUF5QixpQkFBaUIsZ0JBQWdCLEtBQUssMkJBQTJCLGtCQUFrQixLQUFLLGtCQUFrQixrQkFBa0IsS0FBSyxzQkFBc0IsNENBQTRDLGtDQUFrQyxLQUFLLDJCQUEyQiw2QkFBNkIsS0FBSyx1QkFBdUIsb0JBQW9CLEtBQUssK0JBQStCLDZCQUE2QixLQUFLLHdCQUF3QixpQkFBaUIsS0FBSyx3RUFBd0UsY0FBYyxLQUFLLDRCQUE0QixvQkFBb0IsNkJBQTZCLEtBQUssR0FBRyxxQkFBcUI7QUFDenRhO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDVjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDRDtBQUNJO0FBQ0o7QUFDSTtBQUNHOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixxQkFBcUI7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9oZXJvLWltZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gU2xhYlxcXCIsIHNlcmlmO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmxpbmUtYnJlYWstc21hbGwge1xcbiAgd2lkdGg6IDEwJTtcXG59XFxuXFxuLmxpbmUtYnJlYWstbWVkaXVtIHtcXG4gIHdpZHRoOiAzMCU7XFxufVxcblxcbi5saW5lLWJyZWFrLWxhcmdlIHtcXG4gIHdpZHRoOiA3MCU7XFxufVxcblxcbi5uYXYge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcXG4gIHotaW5kZXg6IDQwO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDI0cHg7XFxuICBwYWRkaW5nOiAyNHB4O1xcbn1cXG5cXG4ubmF2ID4gKiB7XFxuICB6LWluZGV4OiA0MDtcXG59XFxuXFxuLm5hdiA+IC5uYXYtbGlua3Mge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLm5hdiA+IC5uYXYtbGlua3MgPiBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDEzcHggMTBweCAxM3B4IDEwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5uYXYgPiAjbmF2LWNoZWNrIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5sb2dvIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmhlcm8tY29udGVudCB7XFxuICBoZWlnaHQ6IDc1dmg7XFxufVxcblxcbi8qIFRoZSBoZXJvIGltYWdlICovXFxuLmhlcm8taW1hZ2Uge1xcbiAgLyogVXNlIFxcXCJsaW5lYXItZ3JhZGllbnRcXFwiIHRvIGFkZCBhIGRhcmtlbiBiYWNrZ3JvdW5kIGVmZmVjdCB0byB0aGUgaW1hZ2UgKHBob3RvZ3JhcGhlci5qcGcpLiBUaGlzIHdpbGwgbWFrZSB0aGUgdGV4dCBlYXNpZXIgdG8gcmVhZCAqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG5cXG4gIC8qIFNldCBhIHNwZWNpZmljIGhlaWdodCAqL1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgLyogUG9zaXRpb24gYW5kIGNlbnRlciB0aGUgaW1hZ2UgdG8gc2NhbGUgbmljZWx5IG9uIGFsbCBzY3JlZW5zICovXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogUGxhY2UgdGV4dCBpbiB0aGUgbWlkZGxlIG9mIHRoZSBpbWFnZSAqL1xcbi5oZXJvLXRleHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFib3V0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBwYWRkaW5nOiAxMjhweCAyNHB4O1xcbn1cXG5cXG4uYWJvdXQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uYWJvdXQtaW5mby13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNDhweDtcXG4gIGdhcDogNDhweDtcXG59XFxuXFxuLmFib3V0LWltZyB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA1JSA3MCUgMjAlO1xcbn1cXG5cXG4uYWJvdXQtdGV4dCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA0OHB4O1xcbn1cXG5cXG4ubWVudS10aXRsZSB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5tZW51LWNhdGVnb3J5LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm1lbnUtdGl0bGUsXFxuLm1lbnUtY2F0ZWdvcnktdGl0bGUge1xcbiAgbWFyZ2luOiAyNHB4IDBweDtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDI0cHg7XFxuICBtYXJnaW46IDI0cHggMHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnJldmlldy1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA0OHB4O1xcbiAgcGFkZGluZzogMTEycHggNDhweDtcXG4gIGhlaWdodDogNTB2aDtcXG59XFxuXFxuLnJldmlldy10aXRsZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLnJldmlldy13cmFwcGVyLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOTZweDtcXG4gIG1hcmdpbjogNDhweCAwcHg7XFxufVxcblxcbi5yZXZpZXctd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDI0cHg7XFxufVxcblxcbi5yZXZpZXctcmF0aW5nIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmZvb3Rlci1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjRweDtcXG4gIHBhZGRpbmc6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG5cXG4uY29udGFjdC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDQ4cHg7XFxuICBwYWRkaW5nOiA0OHB4O1xcbiAgbWFyZ2luOiA5NnB4IDBweDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDIuNHB4IDIuNHB4IDMuMnB4O1xcbn1cXG5cXG4uY29udGFjdC10aXRsZSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLmNvbnRhY3QtaW5mb3JtYXRpb24sXFxuLmFkZHJlc3MtaW5mb3JtYXRpb24sXFxuLmZvb3Rlci1saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5jb250YWN0LWluZm9ybWF0aW9uLFxcbi5hZGRyZXNzLWluZm9ybWF0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uYWRkcmVzcy1pbmZvcm1hdGlvbiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvcm1hdGlvbiB7XFxuICBnYXA6IDQ4cHg7XFxufVxcblxcbi5jb250YWN0LXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRlbCxcXG4uZW1haWwsXFxuLmFkZHJlc3MtaW5mb3JtYXRpb24ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTQycHgpIHtcXG4gIC5uYXYge1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICB9XFxuXFxuICAubG9nbyB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gIH1cXG5cXG4gIC5hYm91dC1jb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gIH1cXG5cXG4gIC5jb250YWN0LWNvbnRlbnQge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxuXFxuICAuY29udGFjdC10aXRsZSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDExNDJweCkge1xcbiAgLm5hdiA+IC5uYXYtYnRuIHtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgdG9wOiAwcHg7XFxuICB9XFxuICAubmF2ID4gLm5hdi1idG4gPiBsYWJlbCB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHBhZGRpbmc6IDEzcHg7XFxuICB9XFxuXFxuICAubmF2ID4gLm5hdi1idG4gPiBsYWJlbCA+IHNwYW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgfVxcbiAgLm5hdiA+IC5uYXYtbGlua3Mge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xcbiAgICBoZWlnaHQ6IDBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICB0b3A6IDEyNnB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICB9XFxuICAubmF2ID4gLm5hdi1saW5rcyA+IGEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5uYXYtbGlua3Mge1xcbiAgICBoZWlnaHQ6IDBweDtcXG4gIH1cXG5cXG4gIC50b2dnbGUtaGVpZ2h0IHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCkgIWltcG9ydGFudDtcXG4gICAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmFib3V0LWluZm8td3JhcHBlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAucmV2aWV3LWNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgfVxcblxcbiAgLnJldmlldy13cmFwcGVyLXdyYXBwZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtY29udGVudCB7XFxuICAgIHdpZHRoOiA3NSU7XFxuICB9XFxuXFxuICAuY29udGFjdC10aXRsZSxcXG4gIC5jb250YWN0LWluZm9ybWF0aW9uLFxcbiAgLmFkZHJlc3MtaW5mb3JtYXRpb24ge1xcbiAgICBmbGV4OiAxO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtaW5mb3JtYXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBOzs7Ozs7RUFNRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTiwwQ0FBMEM7RUFDMUMsV0FBVzs7RUFFWCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0Usb0lBQW9JO0VBQ3BJOzJDQUN1Qjs7RUFFdkIsMEJBQTBCO0VBQzFCLFlBQVk7O0VBRVosaUVBQWlFO0VBQ2pFLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQSwwQ0FBMEM7QUFDMUM7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VB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XFxuXFxuYm9keSxcXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIFNsYWJcXFwiLCBzZXJpZjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5saW5lLWJyZWFrLXNtYWxsIHtcXG4gIHdpZHRoOiAxMCU7XFxufVxcblxcbi5saW5lLWJyZWFrLW1lZGl1bSB7XFxuICB3aWR0aDogMzAlO1xcbn1cXG5cXG4ubGluZS1icmVhay1sYXJnZSB7XFxuICB3aWR0aDogNzAlO1xcbn1cXG5cXG4ubmF2IHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxuICB6LWluZGV4OiA0MDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyNHB4O1xcbiAgcGFkZGluZzogMjRweDtcXG59XFxuXFxuLm5hdiA+ICoge1xcbiAgei1pbmRleDogNDA7XFxufVxcblxcbi5uYXYgPiAubmF2LWxpbmtzIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5uYXYgPiAubmF2LWxpbmtzID4gYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAxM3B4IDEwcHggMTNweCAxMHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ubmF2ID4gI25hdi1jaGVjayB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5oZXJvLWNvbnRlbnQge1xcbiAgaGVpZ2h0OiA3NXZoO1xcbn1cXG5cXG4vKiBUaGUgaGVybyBpbWFnZSAqL1xcbi5oZXJvLWltYWdlIHtcXG4gIC8qIFVzZSBcXFwibGluZWFyLWdyYWRpZW50XFxcIiB0byBhZGQgYSBkYXJrZW4gYmFja2dyb3VuZCBlZmZlY3QgdG8gdGhlIGltYWdlIChwaG90b2dyYXBoZXIuanBnKS4gVGhpcyB3aWxsIG1ha2UgdGhlIHRleHQgZWFzaWVyIHRvIHJlYWQgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSksXFxuICAgIHVybChcXFwiLi9oZXJvLWltZy5qcGdcXFwiKTtcXG5cXG4gIC8qIFNldCBhIHNwZWNpZmljIGhlaWdodCAqL1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgLyogUG9zaXRpb24gYW5kIGNlbnRlciB0aGUgaW1hZ2UgdG8gc2NhbGUgbmljZWx5IG9uIGFsbCBzY3JlZW5zICovXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogUGxhY2UgdGV4dCBpbiB0aGUgbWlkZGxlIG9mIHRoZSBpbWFnZSAqL1xcbi5oZXJvLXRleHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFib3V0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBwYWRkaW5nOiAxMjhweCAyNHB4O1xcbn1cXG5cXG4uYWJvdXQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uYWJvdXQtaW5mby13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNDhweDtcXG4gIGdhcDogNDhweDtcXG59XFxuXFxuLmFib3V0LWltZyB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA1JSA3MCUgMjAlO1xcbn1cXG5cXG4uYWJvdXQtdGV4dCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA0OHB4O1xcbn1cXG5cXG4ubWVudS10aXRsZSB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5tZW51LWNhdGVnb3J5LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm1lbnUtdGl0bGUsXFxuLm1lbnUtY2F0ZWdvcnktdGl0bGUge1xcbiAgbWFyZ2luOiAyNHB4IDBweDtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDI0cHg7XFxuICBtYXJnaW46IDI0cHggMHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnJldmlldy1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA0OHB4O1xcbiAgcGFkZGluZzogMTEycHggNDhweDtcXG4gIGhlaWdodDogNTB2aDtcXG59XFxuXFxuLnJldmlldy10aXRsZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLnJldmlldy13cmFwcGVyLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOTZweDtcXG4gIG1hcmdpbjogNDhweCAwcHg7XFxufVxcblxcbi5yZXZpZXctd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDI0cHg7XFxufVxcblxcbi5yZXZpZXctcmF0aW5nIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmZvb3Rlci1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjRweDtcXG4gIHBhZGRpbmc6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG5cXG4uY29udGFjdC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDQ4cHg7XFxuICBwYWRkaW5nOiA0OHB4O1xcbiAgbWFyZ2luOiA5NnB4IDBweDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDIuNHB4IDIuNHB4IDMuMnB4O1xcbn1cXG5cXG4uY29udGFjdC10aXRsZSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLmNvbnRhY3QtaW5mb3JtYXRpb24sXFxuLmFkZHJlc3MtaW5mb3JtYXRpb24sXFxuLmZvb3Rlci1saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5jb250YWN0LWluZm9ybWF0aW9uLFxcbi5hZGRyZXNzLWluZm9ybWF0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uYWRkcmVzcy1pbmZvcm1hdGlvbiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvcm1hdGlvbiB7XFxuICBnYXA6IDQ4cHg7XFxufVxcblxcbi5jb250YWN0LXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRlbCxcXG4uZW1haWwsXFxuLmFkZHJlc3MtaW5mb3JtYXRpb24ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTQycHgpIHtcXG4gIC5uYXYge1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICB9XFxuXFxuICAubG9nbyB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gIH1cXG5cXG4gIC5hYm91dC1jb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gIH1cXG5cXG4gIC5jb250YWN0LWNvbnRlbnQge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxuXFxuICAuY29udGFjdC10aXRsZSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDExNDJweCkge1xcbiAgLm5hdiA+IC5uYXYtYnRuIHtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgdG9wOiAwcHg7XFxuICB9XFxuICAubmF2ID4gLm5hdi1idG4gPiBsYWJlbCB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHBhZGRpbmc6IDEzcHg7XFxuICB9XFxuXFxuICAubmF2ID4gLm5hdi1idG4gPiBsYWJlbCA+IHNwYW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgfVxcbiAgLm5hdiA+IC5uYXYtbGlua3Mge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xcbiAgICBoZWlnaHQ6IDBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICB0b3A6IDEyNnB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICB9XFxuICAubmF2ID4gLm5hdi1saW5rcyA+IGEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5uYXYtbGlua3Mge1xcbiAgICBoZWlnaHQ6IDBweDtcXG4gIH1cXG5cXG4gIC50b2dnbGUtaGVpZ2h0IHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCkgIWltcG9ydGFudDtcXG4gICAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmFib3V0LWluZm8td3JhcHBlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAucmV2aWV3LWNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgfVxcblxcbiAgLnJldmlldy13cmFwcGVyLXdyYXBwZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtY29udGVudCB7XFxuICAgIHdpZHRoOiA3NSU7XFxuICB9XFxuXFxuICAuY29udGFjdC10aXRsZSxcXG4gIC5jb250YWN0LWluZm9ybWF0aW9uLFxcbiAgLmFkZHJlc3MtaW5mb3JtYXRpb24ge1xcbiAgICBmbGV4OiAxO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtaW5mb3JtYXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi9sb2dvLnBuZ1wiO1xuaW1wb3J0IFwiLi9oZXJvLWltZy5qcGdcIjtcbmltcG9ydCBcIi4vY2hlZi5qcGdcIjtcbmltcG9ydCBcIi4vY29ja3RhaWwuanBnXCI7XG5pbXBvcnQgXCIuL2xvZ28tbW9iaWxlLnBuZ1wiO1xuXG5jb25zdCBhRGF0ZSA9IG5ldyBEYXRlKCk7XG5jb25zdCBjb3B5WWVhciA9IGFEYXRlLmdldEZ1bGxZZWFyKCk7XG5jb25zdCBjb3B5WWVhclNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvcHkteWVhclwiKTtcbmNvcHlZZWFyU3Bhbi50ZXh0Q29udGVudCA9IGNvcHlZZWFyO1xuXG5jb25zdCBsb2dvSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dvXCIpO1xuXG5jb25zdCBtZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMTQycHgpXCIpO1xuXG5jb25zb2xlLmxvZyh3aW5kb3cuaW5uZXJXaWR0aCk7XG5cbmZ1bmN0aW9uIGhhbmRsZVRhYmxldENoYW5nZShlKSB7XG4gIGlmIChlLm1hdGNoZXMpIHtcbiAgICBsb2dvSW1nLnNyYyA9IFwiLi9sb2dvLW1vYmlsZS5wbmdcIjtcbiAgfSBlbHNlIHtcbiAgICBsb2dvSW1nLnNyYyA9IFwiLi9sb2dvLnBuZ1wiO1xuICB9XG59XG5cbm1lZGlhUXVlcnkuYWRkTGlzdGVuZXIoaGFuZGxlVGFibGV0Q2hhbmdlKTtcblxuaGFuZGxlVGFibGV0Q2hhbmdlKG1lZGlhUXVlcnkpO1xuXG5jb25zdCBoYW1idXJnZXJDaGVjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LWNoZWNrXCIpO1xuY29uc3QgbmF2RHJhd2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtbGlua3NcIik7XG5jb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWxpbmtcIik7XG5jb25zdCBsb2dvTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nby1saW5rXCIpO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IG5hdkxpbmtzLmxlbmd0aDsgaSArPSAxKSB7XG4gIG5hdkxpbmtzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVOYXZEcmF3ZXIpO1xufVxuXG5oYW1idXJnZXJDaGVjay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlTmF2RHJhd2VyKTtcbmxvZ29MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG5hdkRyYXdlci5jbGFzc0xpc3QucmVtb3ZlKFwidG9nZ2xlLWhlaWdodFwiKTtcbn0pO1xuXG5mdW5jdGlvbiB0b2dnbGVOYXZEcmF3ZXIoKSB7XG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMTQyKSB7XG4gICAgbmF2RHJhd2VyLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2dnbGUtaGVpZ2h0XCIpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=