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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./EraserRegular.ttf */ "./src/EraserRegular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./hero-img.jpg */ "./src/hero-img.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  scroll-behavior: smooth;\n}\n\nbody,\nhtml {\n  font-family: \"Roboto Slab\", serif;\n  height: 100%;\n  margin: 0px;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0px;\n}\n\n@font-face {\n  font-family: \"Eraser\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"ttf\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n}\n\n.line-break-small {\n  width: 10%;\n}\n\n.line-break-medium {\n  width: 30%;\n}\n\n.line-break-large {\n  width: 70%;\n}\n\n.nav {\n  position: sticky;\n  top: 0;\n  background-color: rgba(255, 255, 255, 0.9);\n  z-index: 40;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n  padding: 24px;\n}\n\n.nav > * {\n  z-index: 40;\n}\n\n.nav > .nav-links {\n  display: inline;\n  float: right;\n  text-decoration: none;\n  font-size: 2rem;\n  font-weight: 300;\n  color: black;\n}\n\n.nav > .nav-links > a {\n  display: inline-block;\n  padding: 13px 10px 13px 10px;\n  text-decoration: none;\n  color: black;\n}\n\n.nav > #nav-check {\n  display: none;\n}\n\n.logo {\n  height: auto;\n}\n\n.hero-content {\n  height: 75vh;\n}\n\n/* The hero image */\n.hero-image {\n  /* Use \"linear-gradient\" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n\n  /* Set a specific height */\n  height: 100%;\n\n  /* Position and center the image to scale nicely on all screens */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n\n/* Place text in the middle of the image */\n.hero-text {\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n}\n\n.about-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  padding: 128px 24px;\n}\n\n.about-title {\n  font-size: 3rem;\n}\n\n.about-info-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 48px;\n  gap: 96px;\n}\n\n.about-img {\n  width: 300px;\n  height: auto;\n  border-radius: 5% 70% 20%;\n}\n\n.about-text {\n  font-size: 1.5rem;\n  line-height: 1.5;\n  display: flex;\n  text-align: center;\n  flex-direction: column;\n  align-items: center;\n  gap: 96px;\n}\n\n.about-card {\n  font-family: \"Fasthand\", cursive;\n  display: flex;\n  align-items: center;\n  border: 12px solid #966f33;\n  background-color: #333333;\n  color: #e0e0e0;\n  padding: 24px;\n  width: 75%;\n  height: 500px;\n}\n\n.menu-container {\n  background-color: #333333;\n  color: #ffffff;\n  text-align: center;\n  padding: 48px;\n}\n\n.menu-title {\n  font-size: 3rem;\n}\n\n.menu-category-title {\n  font-size: 2rem;\n}\n\n.menu-title,\n.menu-category-title {\n  margin: 24px 0px;\n}\n\n.menu-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n  margin: 24px 0px;\n}\n\n.menu-item-name {\n  font-weight: 700;\n}\n\n.review-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 48px;\n  padding: 112px 48px;\n  height: 50vh;\n}\n\n.review-title {\n  font-size: 2rem;\n  margin: 0px;\n}\n\n.review-wrapper-wrapper {\n  display: flex;\n  gap: 96px;\n  margin: 48px 0px;\n}\n\n.review-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n}\n\n.review-rating {\n  font-size: 2rem;\n}\n\n.footer-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n  padding: 24px;\n  background-color: #e0e0e0;\n}\n\n.contact-content {\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  justify-content: center;\n  gap: 48px;\n  padding: 48px;\n  margin: 96px 0px;\n\n  border-radius: 12px;\n  background-color: #333333;\n  color: #ffffff;\n  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\n}\n\n.contact-title {\n  font-size: 2.5rem;\n}\n\n.contact-information,\n.address-information,\n.footer-links {\n  display: flex;\n  gap: 8px;\n}\n\n.contact-information,\n.address-information {\n  font-size: 1.5rem;\n}\n\n.address-information {\n  flex-direction: column;\n}\n\n.contact-information {\n  gap: 48px;\n}\n\n.contact-wrapper {\n  display: flex;\n}\n\n.tel,\n.email,\n.address-information {\n  font-weight: 700;\n}\n\n/* Desktop */\n@media only screen and (min-width: 1142px) {\n  .nav {\n    align-items: baseline;\n  }\n\n  .logo {\n    width: 300px;\n  }\n\n  /* .about-content {\n    height: 100vh;\n  } */\n\n  .contact-content {\n    align-items: center;\n    height: 50vh;\n    width: 50%;\n  }\n\n  .contact-title {\n    align-self: center;\n  }\n}\n\n/* Mobile */\n@media (max-width: 1142px) {\n  .nav > .nav-btn {\n    right: 0px;\n    top: 0px;\n  }\n  .nav > .nav-btn > label {\n    width: 50px;\n    height: 50px;\n    padding: 13px;\n  }\n\n  .nav > .nav-btn > label > span {\n    display: block;\n    width: 25px;\n    height: 10px;\n    border-top: 2px solid black;\n  }\n  .nav > .nav-links {\n    position: absolute;\n    display: block;\n    width: 100%;\n    background-color: rgba(255, 255, 255, 0.9);\n    height: 0px;\n    transition: all 0.3s ease-in;\n    overflow-y: hidden;\n    top: 126px;\n    left: 0px;\n  }\n  .nav > .nav-links > a {\n    width: 100%;\n  }\n\n  .nav-links {\n    height: 0px;\n  }\n\n  .toggle-height {\n    height: calc(100vh - 50px) !important;\n    overflow-y: auto !important;\n  }\n\n  .review-content {\n    height: 100vh;\n  }\n\n  .review-wrapper-wrapper {\n    flex-direction: column;\n  }\n\n  .contact-content {\n    width: 75%;\n  }\n\n  .contact-title,\n  .contact-information,\n  .address-information {\n    flex: 1;\n  }\n\n  .contact-information {\n    display: flex;\n    flex-direction: column;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;AACzB;;AAEA;;EAEE,iCAAiC;EACjC,YAAY;EACZ,WAAW;AACb;;AAEA;;;;;;EAME,WAAW;AACb;;AAEA;EACE,qBAAqB;EACrB,0DAA6C;EAC7C,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,MAAM;EACN,0CAA0C;EAC1C,WAAW;;EAEX,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,qBAAqB;EACrB,eAAe;EACf,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,4BAA4B;EAC5B,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA,mBAAmB;AACnB;EACE,oIAAoI;EACpI;2CACuB;;EAEvB,0BAA0B;EAC1B,YAAY;;EAEZ,iEAAiE;EACjE,2BAA2B;EAC3B,4BAA4B;EAC5B,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA,0CAA0C;AAC1C;EACE,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;;EAEvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,kBAAkB;EAClB,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,gCAAgC;EAChC,aAAa;EACb,mBAAmB;EACnB,0BAA0B;EAC1B,yBAAyB;EACzB,cAAc;EACd,aAAa;EACb,UAAU;EACV,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,aAAa;EACb,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,SAAS;EACT,aAAa;EACb,gBAAgB;;EAEhB,mBAAmB;EACnB,yBAAyB;EACzB,cAAc;EACd,iDAAiD;AACnD;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;;EAGE,aAAa;EACb,QAAQ;AACV;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;AACf;;AAEA;;;EAGE,gBAAgB;AAClB;;AAEA,YAAY;AACZ;EACE;IACE,qBAAqB;EACvB;;EAEA;IACE,YAAY;EACd;;EAEA;;KAEG;;EAEH;IACE,mBAAmB;IACnB,YAAY;IACZ,UAAU;EACZ;;EAEA;IACE,kBAAkB;EACpB;AACF;;AAEA,WAAW;AACX;EACE;IACE,UAAU;IACV,QAAQ;EACV;EACA;IACE,WAAW;IACX,YAAY;IACZ,aAAa;EACf;;EAEA;IACE,cAAc;IACd,WAAW;IACX,YAAY;IACZ,2BAA2B;EAC7B;EACA;IACE,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,0CAA0C;IAC1C,WAAW;IACX,4BAA4B;IAC5B,kBAAkB;IAClB,UAAU;IACV,SAAS;EACX;EACA;IACE,WAAW;EACb;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,qCAAqC;IACrC,2BAA2B;EAC7B;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,UAAU;EACZ;;EAEA;;;IAGE,OAAO;EACT;;EAEA;IACE,aAAa;IACb,sBAAsB;EACxB;AACF","sourcesContent":["html {\n  scroll-behavior: smooth;\n}\n\nbody,\nhtml {\n  font-family: \"Roboto Slab\", serif;\n  height: 100%;\n  margin: 0px;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0px;\n}\n\n@font-face {\n  font-family: \"Eraser\";\n  src: url(\"./EraserRegular.ttf\") format(\"ttf\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n}\n\n.line-break-small {\n  width: 10%;\n}\n\n.line-break-medium {\n  width: 30%;\n}\n\n.line-break-large {\n  width: 70%;\n}\n\n.nav {\n  position: sticky;\n  top: 0;\n  background-color: rgba(255, 255, 255, 0.9);\n  z-index: 40;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n  padding: 24px;\n}\n\n.nav > * {\n  z-index: 40;\n}\n\n.nav > .nav-links {\n  display: inline;\n  float: right;\n  text-decoration: none;\n  font-size: 2rem;\n  font-weight: 300;\n  color: black;\n}\n\n.nav > .nav-links > a {\n  display: inline-block;\n  padding: 13px 10px 13px 10px;\n  text-decoration: none;\n  color: black;\n}\n\n.nav > #nav-check {\n  display: none;\n}\n\n.logo {\n  height: auto;\n}\n\n.hero-content {\n  height: 75vh;\n}\n\n/* The hero image */\n.hero-image {\n  /* Use \"linear-gradient\" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\n    url(\"./hero-img.jpg\");\n\n  /* Set a specific height */\n  height: 100%;\n\n  /* Position and center the image to scale nicely on all screens */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n\n/* Place text in the middle of the image */\n.hero-text {\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n}\n\n.about-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  padding: 128px 24px;\n}\n\n.about-title {\n  font-size: 3rem;\n}\n\n.about-info-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 48px;\n  gap: 96px;\n}\n\n.about-img {\n  width: 300px;\n  height: auto;\n  border-radius: 5% 70% 20%;\n}\n\n.about-text {\n  font-size: 1.5rem;\n  line-height: 1.5;\n  display: flex;\n  text-align: center;\n  flex-direction: column;\n  align-items: center;\n  gap: 96px;\n}\n\n.about-card {\n  font-family: \"Fasthand\", cursive;\n  display: flex;\n  align-items: center;\n  border: 12px solid #966f33;\n  background-color: #333333;\n  color: #e0e0e0;\n  padding: 24px;\n  width: 75%;\n  height: 500px;\n}\n\n.menu-container {\n  background-color: #333333;\n  color: #ffffff;\n  text-align: center;\n  padding: 48px;\n}\n\n.menu-title {\n  font-size: 3rem;\n}\n\n.menu-category-title {\n  font-size: 2rem;\n}\n\n.menu-title,\n.menu-category-title {\n  margin: 24px 0px;\n}\n\n.menu-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n  margin: 24px 0px;\n}\n\n.menu-item-name {\n  font-weight: 700;\n}\n\n.review-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 48px;\n  padding: 112px 48px;\n  height: 50vh;\n}\n\n.review-title {\n  font-size: 2rem;\n  margin: 0px;\n}\n\n.review-wrapper-wrapper {\n  display: flex;\n  gap: 96px;\n  margin: 48px 0px;\n}\n\n.review-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n}\n\n.review-rating {\n  font-size: 2rem;\n}\n\n.footer-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n  padding: 24px;\n  background-color: #e0e0e0;\n}\n\n.contact-content {\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  justify-content: center;\n  gap: 48px;\n  padding: 48px;\n  margin: 96px 0px;\n\n  border-radius: 12px;\n  background-color: #333333;\n  color: #ffffff;\n  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\n}\n\n.contact-title {\n  font-size: 2.5rem;\n}\n\n.contact-information,\n.address-information,\n.footer-links {\n  display: flex;\n  gap: 8px;\n}\n\n.contact-information,\n.address-information {\n  font-size: 1.5rem;\n}\n\n.address-information {\n  flex-direction: column;\n}\n\n.contact-information {\n  gap: 48px;\n}\n\n.contact-wrapper {\n  display: flex;\n}\n\n.tel,\n.email,\n.address-information {\n  font-weight: 700;\n}\n\n/* Desktop */\n@media only screen and (min-width: 1142px) {\n  .nav {\n    align-items: baseline;\n  }\n\n  .logo {\n    width: 300px;\n  }\n\n  /* .about-content {\n    height: 100vh;\n  } */\n\n  .contact-content {\n    align-items: center;\n    height: 50vh;\n    width: 50%;\n  }\n\n  .contact-title {\n    align-self: center;\n  }\n}\n\n/* Mobile */\n@media (max-width: 1142px) {\n  .nav > .nav-btn {\n    right: 0px;\n    top: 0px;\n  }\n  .nav > .nav-btn > label {\n    width: 50px;\n    height: 50px;\n    padding: 13px;\n  }\n\n  .nav > .nav-btn > label > span {\n    display: block;\n    width: 25px;\n    height: 10px;\n    border-top: 2px solid black;\n  }\n  .nav > .nav-links {\n    position: absolute;\n    display: block;\n    width: 100%;\n    background-color: rgba(255, 255, 255, 0.9);\n    height: 0px;\n    transition: all 0.3s ease-in;\n    overflow-y: hidden;\n    top: 126px;\n    left: 0px;\n  }\n  .nav > .nav-links > a {\n    width: 100%;\n  }\n\n  .nav-links {\n    height: 0px;\n  }\n\n  .toggle-height {\n    height: calc(100vh - 50px) !important;\n    overflow-y: auto !important;\n  }\n\n  .review-content {\n    height: 100vh;\n  }\n\n  .review-wrapper-wrapper {\n    flex-direction: column;\n  }\n\n  .contact-content {\n    width: 75%;\n  }\n\n  .contact-title,\n  .contact-information,\n  .address-information {\n    flex: 1;\n  }\n\n  .contact-information {\n    display: flex;\n    flex-direction: column;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/EraserRegular.ttf":
/*!*******************************!*\
  !*** ./src/EraserRegular.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "EraserRegular.ttf";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLFlBQVksT0FBTyxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxPQUFPLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLCtCQUErQiw0QkFBNEIsR0FBRyxpQkFBaUIsd0NBQXdDLGlCQUFpQixnQkFBZ0IsR0FBRyxpQ0FBaUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLDRCQUE0QixzREFBc0QscUJBQXFCLHVCQUF1QixHQUFHLGNBQWMsa0JBQWtCLDJCQUEyQixHQUFHLHVCQUF1QixlQUFlLEdBQUcsd0JBQXdCLGVBQWUsR0FBRyx1QkFBdUIsZUFBZSxHQUFHLFVBQVUscUJBQXFCLFdBQVcsK0NBQStDLGdCQUFnQixvQkFBb0IsbUNBQW1DLHdCQUF3QixjQUFjLGtCQUFrQixHQUFHLGNBQWMsZ0JBQWdCLEdBQUcsdUJBQXVCLG9CQUFvQixpQkFBaUIsMEJBQTBCLG9CQUFvQixxQkFBcUIsaUJBQWlCLEdBQUcsMkJBQTJCLDBCQUEwQixpQ0FBaUMsMEJBQTBCLGlCQUFpQixHQUFHLHVCQUF1QixrQkFBa0IsR0FBRyxXQUFXLGlCQUFpQixHQUFHLG1CQUFtQixpQkFBaUIsR0FBRyx1Q0FBdUMsdVBBQXVQLGtEQUFrRCx3R0FBd0csaUNBQWlDLDJCQUEyQix1QkFBdUIsR0FBRyw2REFBNkQsdUJBQXVCLHVCQUF1QixhQUFhLGNBQWMscUNBQXFDLGlCQUFpQixHQUFHLG9CQUFvQixrQkFBa0IsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsMEJBQTBCLEdBQUcsa0JBQWtCLG9CQUFvQixHQUFHLHlCQUF5QixrQkFBa0IsMkJBQTJCLHdCQUF3QixrQkFBa0IsY0FBYyxHQUFHLGdCQUFnQixpQkFBaUIsaUJBQWlCLDhCQUE4QixHQUFHLGlCQUFpQixzQkFBc0IscUJBQXFCLGtCQUFrQix1QkFBdUIsMkJBQTJCLHdCQUF3QixjQUFjLEdBQUcsaUJBQWlCLHVDQUF1QyxrQkFBa0Isd0JBQXdCLCtCQUErQiw4QkFBOEIsbUJBQW1CLGtCQUFrQixlQUFlLGtCQUFrQixHQUFHLHFCQUFxQiw4QkFBOEIsbUJBQW1CLHVCQUF1QixrQkFBa0IsR0FBRyxpQkFBaUIsb0JBQW9CLEdBQUcsMEJBQTBCLG9CQUFvQixHQUFHLHdDQUF3QyxxQkFBcUIsR0FBRyxnQkFBZ0Isa0JBQWtCLDJCQUEyQix3QkFBd0IsY0FBYyxxQkFBcUIsR0FBRyxxQkFBcUIscUJBQXFCLEdBQUcscUJBQXFCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QixjQUFjLHdCQUF3QixpQkFBaUIsR0FBRyxtQkFBbUIsb0JBQW9CLGdCQUFnQixHQUFHLDZCQUE2QixrQkFBa0IsY0FBYyxxQkFBcUIsR0FBRyxxQkFBcUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsY0FBYyxHQUFHLG9CQUFvQixvQkFBb0IsR0FBRyxxQkFBcUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsY0FBYyxrQkFBa0IsOEJBQThCLEdBQUcsc0JBQXNCLGtCQUFrQiwyQkFBMkIsdUJBQXVCLDRCQUE0QixjQUFjLGtCQUFrQixxQkFBcUIsMEJBQTBCLDhCQUE4QixtQkFBbUIsc0RBQXNELEdBQUcsb0JBQW9CLHNCQUFzQixHQUFHLGlFQUFpRSxrQkFBa0IsYUFBYSxHQUFHLGlEQUFpRCxzQkFBc0IsR0FBRywwQkFBMEIsMkJBQTJCLEdBQUcsMEJBQTBCLGNBQWMsR0FBRyxzQkFBc0Isa0JBQWtCLEdBQUcsMENBQTBDLHFCQUFxQixHQUFHLCtEQUErRCxVQUFVLDRCQUE0QixLQUFLLGFBQWEsbUJBQW1CLEtBQUsseUJBQXlCLG9CQUFvQixNQUFNLDBCQUEwQiwwQkFBMEIsbUJBQW1CLGlCQUFpQixLQUFLLHNCQUFzQix5QkFBeUIsS0FBSyxHQUFHLDhDQUE4QyxxQkFBcUIsaUJBQWlCLGVBQWUsS0FBSyw2QkFBNkIsa0JBQWtCLG1CQUFtQixvQkFBb0IsS0FBSyxzQ0FBc0MscUJBQXFCLGtCQUFrQixtQkFBbUIsa0NBQWtDLEtBQUssdUJBQXVCLHlCQUF5QixxQkFBcUIsa0JBQWtCLGlEQUFpRCxrQkFBa0IsbUNBQW1DLHlCQUF5QixpQkFBaUIsZ0JBQWdCLEtBQUssMkJBQTJCLGtCQUFrQixLQUFLLGtCQUFrQixrQkFBa0IsS0FBSyxzQkFBc0IsNENBQTRDLGtDQUFrQyxLQUFLLHVCQUF1QixvQkFBb0IsS0FBSywrQkFBK0IsNkJBQTZCLEtBQUssd0JBQXdCLGlCQUFpQixLQUFLLHdFQUF3RSxjQUFjLEtBQUssNEJBQTRCLG9CQUFvQiw2QkFBNkIsS0FBSyxHQUFHLHFCQUFxQjtBQUMvNWM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNaMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDRDtBQUNJO0FBQ0o7QUFDSTtBQUNHOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixxQkFBcUI7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9FcmFzZXJSZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaGVyby1pbWcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90byBTbGFiXFxcIiwgc2VyaWY7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJFcmFzZXJcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHRmXFxcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmxpbmUtYnJlYWstc21hbGwge1xcbiAgd2lkdGg6IDEwJTtcXG59XFxuXFxuLmxpbmUtYnJlYWstbWVkaXVtIHtcXG4gIHdpZHRoOiAzMCU7XFxufVxcblxcbi5saW5lLWJyZWFrLWxhcmdlIHtcXG4gIHdpZHRoOiA3MCU7XFxufVxcblxcbi5uYXYge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcXG4gIHotaW5kZXg6IDQwO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDI0cHg7XFxuICBwYWRkaW5nOiAyNHB4O1xcbn1cXG5cXG4ubmF2ID4gKiB7XFxuICB6LWluZGV4OiA0MDtcXG59XFxuXFxuLm5hdiA+IC5uYXYtbGlua3Mge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLm5hdiA+IC5uYXYtbGlua3MgPiBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDEzcHggMTBweCAxM3B4IDEwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5uYXYgPiAjbmF2LWNoZWNrIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5sb2dvIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmhlcm8tY29udGVudCB7XFxuICBoZWlnaHQ6IDc1dmg7XFxufVxcblxcbi8qIFRoZSBoZXJvIGltYWdlICovXFxuLmhlcm8taW1hZ2Uge1xcbiAgLyogVXNlIFxcXCJsaW5lYXItZ3JhZGllbnRcXFwiIHRvIGFkZCBhIGRhcmtlbiBiYWNrZ3JvdW5kIGVmZmVjdCB0byB0aGUgaW1hZ2UgKHBob3RvZ3JhcGhlci5qcGcpLiBUaGlzIHdpbGwgbWFrZSB0aGUgdGV4dCBlYXNpZXIgdG8gcmVhZCAqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG5cXG4gIC8qIFNldCBhIHNwZWNpZmljIGhlaWdodCAqL1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgLyogUG9zaXRpb24gYW5kIGNlbnRlciB0aGUgaW1hZ2UgdG8gc2NhbGUgbmljZWx5IG9uIGFsbCBzY3JlZW5zICovXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogUGxhY2UgdGV4dCBpbiB0aGUgbWlkZGxlIG9mIHRoZSBpbWFnZSAqL1xcbi5oZXJvLXRleHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFib3V0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBwYWRkaW5nOiAxMjhweCAyNHB4O1xcbn1cXG5cXG4uYWJvdXQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uYWJvdXQtaW5mby13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDQ4cHg7XFxuICBnYXA6IDk2cHg7XFxufVxcblxcbi5hYm91dC1pbWcge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNSUgNzAlIDIwJTtcXG59XFxuXFxuLmFib3V0LXRleHQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA5NnB4O1xcbn1cXG5cXG4uYWJvdXQtY2FyZCB7XFxuICBmb250LWZhbWlseTogXFxcIkZhc3RoYW5kXFxcIiwgY3Vyc2l2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAxMnB4IHNvbGlkICM5NjZmMzM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgY29sb3I6ICNlMGUwZTA7XFxuICBwYWRkaW5nOiAyNHB4O1xcbiAgd2lkdGg6IDc1JTtcXG4gIGhlaWdodDogNTAwcHg7XFxufVxcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA0OHB4O1xcbn1cXG5cXG4ubWVudS10aXRsZSB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5tZW51LWNhdGVnb3J5LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm1lbnUtdGl0bGUsXFxuLm1lbnUtY2F0ZWdvcnktdGl0bGUge1xcbiAgbWFyZ2luOiAyNHB4IDBweDtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDI0cHg7XFxuICBtYXJnaW46IDI0cHggMHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnJldmlldy1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA0OHB4O1xcbiAgcGFkZGluZzogMTEycHggNDhweDtcXG4gIGhlaWdodDogNTB2aDtcXG59XFxuXFxuLnJldmlldy10aXRsZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLnJldmlldy13cmFwcGVyLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOTZweDtcXG4gIG1hcmdpbjogNDhweCAwcHg7XFxufVxcblxcbi5yZXZpZXctd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDI0cHg7XFxufVxcblxcbi5yZXZpZXctcmF0aW5nIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmZvb3Rlci1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjRweDtcXG4gIHBhZGRpbmc6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG5cXG4uY29udGFjdC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDQ4cHg7XFxuICBwYWRkaW5nOiA0OHB4O1xcbiAgbWFyZ2luOiA5NnB4IDBweDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDIuNHB4IDIuNHB4IDMuMnB4O1xcbn1cXG5cXG4uY29udGFjdC10aXRsZSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLmNvbnRhY3QtaW5mb3JtYXRpb24sXFxuLmFkZHJlc3MtaW5mb3JtYXRpb24sXFxuLmZvb3Rlci1saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5jb250YWN0LWluZm9ybWF0aW9uLFxcbi5hZGRyZXNzLWluZm9ybWF0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uYWRkcmVzcy1pbmZvcm1hdGlvbiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvcm1hdGlvbiB7XFxuICBnYXA6IDQ4cHg7XFxufVxcblxcbi5jb250YWN0LXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRlbCxcXG4uZW1haWwsXFxuLmFkZHJlc3MtaW5mb3JtYXRpb24ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLyogRGVza3RvcCAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTE0MnB4KSB7XFxuICAubmF2IHtcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgfVxcblxcbiAgLmxvZ28ge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICB9XFxuXFxuICAvKiAuYWJvdXQtY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICB9ICovXFxuXFxuICAuY29udGFjdC1jb250ZW50IHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA1MHZoO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtdGl0bGUge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB9XFxufVxcblxcbi8qIE1vYmlsZSAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTQycHgpIHtcXG4gIC5uYXYgPiAubmF2LWJ0biB7XFxuICAgIHJpZ2h0OiAwcHg7XFxuICAgIHRvcDogMHB4O1xcbiAgfVxcbiAgLm5hdiA+IC5uYXYtYnRuID4gbGFiZWwge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBwYWRkaW5nOiAxM3B4O1xcbiAgfVxcblxcbiAgLm5hdiA+IC5uYXYtYnRuID4gbGFiZWwgPiBzcGFuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcXG4gIH1cXG4gIC5uYXYgPiAubmF2LWxpbmtzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcXG4gICAgaGVpZ2h0OiAwcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgdG9wOiAxMjZweDtcXG4gICAgbGVmdDogMHB4O1xcbiAgfVxcbiAgLm5hdiA+IC5uYXYtbGlua3MgPiBhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAubmF2LWxpbmtzIHtcXG4gICAgaGVpZ2h0OiAwcHg7XFxuICB9XFxuXFxuICAudG9nZ2xlLWhlaWdodCB7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpICFpbXBvcnRhbnQ7XFxuICAgIG92ZXJmbG93LXk6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5yZXZpZXctY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICB9XFxuXFxuICAucmV2aWV3LXdyYXBwZXItd3JhcHBlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuY29udGFjdC1jb250ZW50IHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gIH1cXG5cXG4gIC5jb250YWN0LXRpdGxlLFxcbiAgLmNvbnRhY3QtaW5mb3JtYXRpb24sXFxuICAuYWRkcmVzcy1pbmZvcm1hdGlvbiB7XFxuICAgIGZsZXg6IDE7XFxuICB9XFxuXFxuICAuY29udGFjdC1pbmZvcm1hdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7Ozs7OztFQU1FLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwwREFBNkM7RUFDN0MsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLDBDQUEwQztFQUMxQyxXQUFXOztFQUVYLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFx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LFFBQVE7RUFDVjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYLDBDQUEwQztJQUMxQyxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztFQUNYO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxxQ0FBcUM7SUFDckMsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBOzs7SUFHRSxPQUFPO0VBQ1Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYm9keSxcXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIFNsYWJcXFwiLCBzZXJpZjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkVyYXNlclxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9FcmFzZXJSZWd1bGFyLnR0ZlxcXCIpIGZvcm1hdChcXFwidHRmXFxcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmxpbmUtYnJlYWstc21hbGwge1xcbiAgd2lkdGg6IDEwJTtcXG59XFxuXFxuLmxpbmUtYnJlYWstbWVkaXVtIHtcXG4gIHdpZHRoOiAzMCU7XFxufVxcblxcbi5saW5lLWJyZWFrLWxhcmdlIHtcXG4gIHdpZHRoOiA3MCU7XFxufVxcblxcbi5uYXYge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcXG4gIHotaW5kZXg6IDQwO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDI0cHg7XFxuICBwYWRkaW5nOiAyNHB4O1xcbn1cXG5cXG4ubmF2ID4gKiB7XFxuICB6LWluZGV4OiA0MDtcXG59XFxuXFxuLm5hdiA+IC5uYXYtbGlua3Mge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLm5hdiA+IC5uYXYtbGlua3MgPiBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDEzcHggMTBweCAxM3B4IDEwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5uYXYgPiAjbmF2LWNoZWNrIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5sb2dvIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmhlcm8tY29udGVudCB7XFxuICBoZWlnaHQ6IDc1dmg7XFxufVxcblxcbi8qIFRoZSBoZXJvIGltYWdlICovXFxuLmhlcm8taW1hZ2Uge1xcbiAgLyogVXNlIFxcXCJsaW5lYXItZ3JhZGllbnRcXFwiIHRvIGFkZCBhIGRhcmtlbiBiYWNrZ3JvdW5kIGVmZmVjdCB0byB0aGUgaW1hZ2UgKHBob3RvZ3JhcGhlci5qcGcpLiBUaGlzIHdpbGwgbWFrZSB0aGUgdGV4dCBlYXNpZXIgdG8gcmVhZCAqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpKSxcXG4gICAgdXJsKFxcXCIuL2hlcm8taW1nLmpwZ1xcXCIpO1xcblxcbiAgLyogU2V0IGEgc3BlY2lmaWMgaGVpZ2h0ICovXFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAvKiBQb3NpdGlvbiBhbmQgY2VudGVyIHRoZSBpbWFnZSB0byBzY2FsZSBuaWNlbHkgb24gYWxsIHNjcmVlbnMgKi9cXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKiBQbGFjZSB0ZXh0IGluIHRoZSBtaWRkbGUgb2YgdGhlIGltYWdlICovXFxuLmhlcm8tdGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYWJvdXQtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIHBhZGRpbmc6IDEyOHB4IDI0cHg7XFxufVxcblxcbi5hYm91dC10aXRsZSB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5hYm91dC1pbmZvLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNDhweDtcXG4gIGdhcDogOTZweDtcXG59XFxuXFxuLmFib3V0LWltZyB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA1JSA3MCUgMjAlO1xcbn1cXG5cXG4uYWJvdXQtdGV4dCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDk2cHg7XFxufVxcblxcbi5hYm91dC1jYXJkIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRmFzdGhhbmRcXFwiLCBjdXJzaXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDEycHggc29saWQgIzk2NmYzMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxuICBjb2xvcjogI2UwZTBlMDtcXG4gIHBhZGRpbmc6IDI0cHg7XFxuICB3aWR0aDogNzUlO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG59XFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDQ4cHg7XFxufVxcblxcbi5tZW51LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLm1lbnUtY2F0ZWdvcnktdGl0bGUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubWVudS10aXRsZSxcXG4ubWVudS1jYXRlZ29yeS10aXRsZSB7XFxuICBtYXJnaW46IDI0cHggMHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjRweDtcXG4gIG1hcmdpbjogMjRweCAwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0tbmFtZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ucmV2aWV3LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDQ4cHg7XFxuICBwYWRkaW5nOiAxMTJweCA0OHB4O1xcbiAgaGVpZ2h0OiA1MHZoO1xcbn1cXG5cXG4ucmV2aWV3LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4ucmV2aWV3LXdyYXBwZXItd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA5NnB4O1xcbiAgbWFyZ2luOiA0OHB4IDBweDtcXG59XFxuXFxuLnJldmlldy13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjRweDtcXG59XFxuXFxuLnJldmlldy1yYXRpbmcge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uZm9vdGVyLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyNHB4O1xcbiAgcGFkZGluZzogMjRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcblxcbi5jb250YWN0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNDhweDtcXG4gIHBhZGRpbmc6IDQ4cHg7XFxuICBtYXJnaW46IDk2cHggMHB4O1xcblxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMi40cHggMi40cHggMy4ycHg7XFxufVxcblxcbi5jb250YWN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvcm1hdGlvbixcXG4uYWRkcmVzcy1pbmZvcm1hdGlvbixcXG4uZm9vdGVyLWxpbmtzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLmNvbnRhY3QtaW5mb3JtYXRpb24sXFxuLmFkZHJlc3MtaW5mb3JtYXRpb24ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5hZGRyZXNzLWluZm9ybWF0aW9uIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb250YWN0LWluZm9ybWF0aW9uIHtcXG4gIGdhcDogNDhweDtcXG59XFxuXFxuLmNvbnRhY3Qtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGVsLFxcbi5lbWFpbCxcXG4uYWRkcmVzcy1pbmZvcm1hdGlvbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4vKiBEZXNrdG9wICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTQycHgpIHtcXG4gIC5uYXYge1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICB9XFxuXFxuICAubG9nbyB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gIH1cXG5cXG4gIC8qIC5hYm91dC1jb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gIH0gKi9cXG5cXG4gIC5jb250YWN0LWNvbnRlbnQge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxuXFxuICAuY29udGFjdC10aXRsZSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuLyogTW9iaWxlICovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDExNDJweCkge1xcbiAgLm5hdiA+IC5uYXYtYnRuIHtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgdG9wOiAwcHg7XFxuICB9XFxuICAubmF2ID4gLm5hdi1idG4gPiBsYWJlbCB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHBhZGRpbmc6IDEzcHg7XFxuICB9XFxuXFxuICAubmF2ID4gLm5hdi1idG4gPiBsYWJlbCA+IHNwYW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgfVxcbiAgLm5hdiA+IC5uYXYtbGlua3Mge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xcbiAgICBoZWlnaHQ6IDBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICB0b3A6IDEyNnB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICB9XFxuICAubmF2ID4gLm5hdi1saW5rcyA+IGEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5uYXYtbGlua3Mge1xcbiAgICBoZWlnaHQ6IDBweDtcXG4gIH1cXG5cXG4gIC50b2dnbGUtaGVpZ2h0IHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCkgIWltcG9ydGFudDtcXG4gICAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLnJldmlldy1jb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gIH1cXG5cXG4gIC5yZXZpZXctd3JhcHBlci13cmFwcGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5jb250YWN0LWNvbnRlbnQge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtdGl0bGUsXFxuICAuY29udGFjdC1pbmZvcm1hdGlvbixcXG4gIC5hZGRyZXNzLWluZm9ybWF0aW9uIHtcXG4gICAgZmxleDogMTtcXG4gIH1cXG5cXG4gIC5jb250YWN0LWluZm9ybWF0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vbG9nby5wbmdcIjtcbmltcG9ydCBcIi4vaGVyby1pbWcuanBnXCI7XG5pbXBvcnQgXCIuL2NoZWYuanBnXCI7XG5pbXBvcnQgXCIuL2NvY2t0YWlsLmpwZ1wiO1xuaW1wb3J0IFwiLi9sb2dvLW1vYmlsZS5wbmdcIjtcblxuY29uc3QgYURhdGUgPSBuZXcgRGF0ZSgpO1xuY29uc3QgY29weVllYXIgPSBhRGF0ZS5nZXRGdWxsWWVhcigpO1xuY29uc3QgY29weVllYXJTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3B5LXllYXJcIik7XG5jb3B5WWVhclNwYW4udGV4dENvbnRlbnQgPSBjb3B5WWVhcjtcblxuY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9nb1wiKTtcblxuY29uc3QgbWVkaWFRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTE0MnB4KVwiKTtcblxuZnVuY3Rpb24gaGFuZGxlVGFibGV0Q2hhbmdlKGUpIHtcbiAgaWYgKGUubWF0Y2hlcykge1xuICAgIGxvZ29JbWcuc3JjID0gXCIuL2xvZ28tbW9iaWxlLnBuZ1wiO1xuICB9IGVsc2Uge1xuICAgIGxvZ29JbWcuc3JjID0gXCIuL2xvZ28ucG5nXCI7XG4gIH1cbn1cblxubWVkaWFRdWVyeS5hZGRMaXN0ZW5lcihoYW5kbGVUYWJsZXRDaGFuZ2UpO1xuXG5oYW5kbGVUYWJsZXRDaGFuZ2UobWVkaWFRdWVyeSk7XG5cbmNvbnN0IGhhbWJ1cmdlckNoZWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtY2hlY2tcIik7XG5jb25zdCBuYXZEcmF3ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1saW5rc1wiKTtcbmNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtbGlua1wiKTtcbmNvbnN0IGxvZ29MaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvLWxpbmtcIik7XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgbmF2TGlua3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgbmF2TGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZU5hdkRyYXdlcik7XG59XG5cbmhhbWJ1cmdlckNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVOYXZEcmF3ZXIpO1xubG9nb0xpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbmF2RHJhd2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJ0b2dnbGUtaGVpZ2h0XCIpO1xufSk7XG5cbmZ1bmN0aW9uIHRvZ2dsZU5hdkRyYXdlcigpIHtcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDExNDIpIHtcbiAgICBuYXZEcmF3ZXIuY2xhc3NMaXN0LnRvZ2dsZShcInRvZ2dsZS1oZWlnaHRcIik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==