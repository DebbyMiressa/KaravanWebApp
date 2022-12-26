"use strict";
(self["webpackChunkkaravan_web_app"] = self["webpackChunkkaravan_web_app"] || []).push([["main"],{

/***/ "./modules/HomePage.js":
/*!*****************************!*\
  !*** ./modules/HomePage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
class Home {
    constructor() {
        
    }

    welcomeSection = async () => {
      const dynamicSection = document.createElement('section');
      dynamicSection.id = 'WelcomeSection';
      dynamicSection.className = 'WelcomeSection d-flex';

      dynamicSection.innerHTML += `
       <div class="left-image col-3"></div>
       <div class="col-md-6 col-sm-12">
        <div>
          <h1>Welcome to Karavan!</h1>
          <p>Karavan Coffee makes its best effort to create a unique place where customers can socialize with each other in a comfortable and relaxing environment while enjoying hot and cold drinks as well as uniquely prepared pastry and food choices.</p>
          <div align='center'>
            <button>Learn more about us!</button>
          </div>
        </div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100 mx-auto" src="0bcf35f8299d1ee450d1.PNG" alt="First slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 mx-auto" src="0bcf35f8299d1ee450d1.PNG" alt="Second slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 mx-auto" src="0bcf35f8299d1ee450d1.PNG" alt="Third slide">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        </div>
        <div class="right-image col-3"></div>
      `;
      
      const emptySection = document.getElementById('dynamic-page');
      emptySection.appendChild(dynamicSection);
    }

    whyKaravanSection = async () => {
        const dynamicSection = document.createElement('section');
        dynamicSection.id = 'WhyKaravanSection';
        dynamicSection.className = 'WhyKaravanSection';
  
        dynamicSection.innerHTML += `
          <h1>Why Karavan?</h1>
          <div class="WhyKaravanMain">
          <div class="keypoint-img">
            <img id="keypoint-img" src='' alt=''>
          </div>
          <div class="statistics container">
            <div class="row">
              <div class="stat col-sm">
                <i class="fa fa-calendar fa-2x"></i>
                <p class="fs-2"><span id='0101'>1987</span></p>
                <p>Establishment Date</p>
              </div>
              <div class="stat col-sm">
                <i class="fa fa-coffee fa-2x"></i>
                <p class="fs-2"><span id='0102'>2</span>M+</p>
                <p>Macchiato sold at our flagship branch since opening</p>
              </div>
              <div class="stat col-sm">
                <i class="fa fa-building-o fa-2x"></i>
                <p class="fs-2"><span id='0103'>5</span></p>
                <p>Branches and 2 coming soon</p>
              </div>
            </div>
            <div class="row">
              <div class="stat col-sm">
                <i class="fa fa-users fa-2x"></i>
                <p class="fs-2"><span id='0104'>320</span>+</p>
                <p>Employees</p>
              </div>
              <div class="stat col-sm">
                <i class="fa fa-cutlery fa-2x"></i>
                <p class="fs-2"><span id='0105'>200</span>+</p>
                <p class="align-content-center">Food & Beverage Variety</p>
              </div>
              <div class="stat col-sm">
                <i><img src="6beeaf692a6a15848cee.png" height="42px" widht="50px"></i>
                <p class="fs-2"><span id='0106'>100</span></p>
                <p class="align-content-center">Pastry & Food Cheifs</p>
              </div>
            </div>
          </div>
          </div>
        `;
      const emptySection = document.getElementById('dynamic-page');
      emptySection.appendChild(dynamicSection);
    }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/normalize.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/normalize.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type=\"button\"],\n  [type=\"reset\"],\n  [type=\"submit\"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type=\"button\"]:-moz-focusring,\n  [type=\"reset\"]:-moz-focusring,\n  [type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type=\"checkbox\"],\n  [type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type=\"number\"]::-webkit-inner-spin-button,\n  [type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n    display: none;\n  }", "",{"version":3,"sources":["webpack://./src/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;CAED;IACG,iBAAiB,EAAE,MAAM;IACzB,8BAA8B,EAAE,MAAM;EACxC;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,SAAS;EACX;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;IACE,cAAc;IACd,gBAAgB;EAClB;;EAEA;iFAC+E;;EAE/E;;;IAGE;;EAEF;IACE,uBAAuB,EAAE,MAAM;IAC/B,SAAS,EAAE,MAAM;IACjB,iBAAiB,EAAE,MAAM;EAC3B;;EAEA;;;IAGE;;EAEF;IACE,iCAAiC,EAAE,MAAM;IACzC,cAAc,EAAE,MAAM;EACxB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,6BAA6B;EAC/B;;EAEA;;;IAGE;;EAEF;IACE,mBAAmB,EAAE,MAAM;IAC3B,0BAA0B,EAAE,MAAM;IAClC,iCAAiC,EAAE,MAAM;EAC3C;;EAEA;;IAEE;;EAEF;;IAEE,mBAAmB;EACrB;;EAEA;;;IAGE;;EAEF;;;IAGE,iCAAiC,EAAE,MAAM;IACzC,cAAc,EAAE,MAAM;EACxB;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;;IAEE,cAAc;IACd,cAAc;IACd,kBAAkB;IAClB,wBAAwB;EAC1B;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,WAAW;EACb;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,kBAAkB;EACpB;;EAEA;iFAC+E;;EAE/E;;;IAGE;;EAEF;;;;;IAKE,oBAAoB,EAAE,MAAM;IAC5B,eAAe,EAAE,MAAM;IACvB,iBAAiB,EAAE,MAAM;IACzB,SAAS,EAAE,MAAM;EACnB;;EAEA;;;IAGE;;EAEF;UACQ,MAAM;IACZ,iBAAiB;EACnB;;EAEA;;;IAGE;;EAEF;WACS,MAAM;IACb,oBAAoB;EACtB;;EAEA;;IAEE;;EAEF;;;;IAIE,0BAA0B;EAC5B;;EAEA;;IAEE;;EAEF;;;;IAIE,kBAAkB;IAClB,UAAU;EACZ;;EAEA;;IAEE;;EAEF;;;;IAIE,8BAA8B;EAChC;;EAEA;;IAEE;;EAEF;IACE,8BAA8B;EAChC;;EAEA;;;;;IAKE;;EAEF;IACE,sBAAsB,EAAE,MAAM;IAC9B,cAAc,EAAE,MAAM;IACtB,cAAc,EAAE,MAAM;IACtB,eAAe,EAAE,MAAM;IACvB,UAAU,EAAE,MAAM;IAClB,mBAAmB,EAAE,MAAM;EAC7B;;EAEA;;IAEE;;EAEF;IACE,wBAAwB;EAC1B;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;;IAEE,sBAAsB,EAAE,MAAM;IAC9B,UAAU,EAAE,MAAM;EACpB;;EAEA;;IAEE;;EAEF;;IAEE,YAAY;EACd;;EAEA;;;IAGE;;EAEF;IACE,6BAA6B,EAAE,MAAM;IACrC,oBAAoB,EAAE,MAAM;EAC9B;;EAEA;;IAEE;;EAEF;IACE,wBAAwB;EAC1B;;EAEA;;;IAGE;;EAEF;IACE,0BAA0B,EAAE,MAAM;IAClC,aAAa,EAAE,MAAM;EACvB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;IAEE;;EAEF;IACE,kBAAkB;EACpB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,aAAa;EACf;;EAEA;;IAEE;;EAEF;IACE,aAAa;EACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type=\"button\"],\n  [type=\"reset\"],\n  [type=\"submit\"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type=\"button\"]:-moz-focusring,\n  [type=\"reset\"]:-moz-focusring,\n  [type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type=\"checkbox\"],\n  [type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type=\"number\"]::-webkit-inner-spin-button,\n  [type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n    display: none;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/karavan-camel-green-long.png */ "./img/karavan-camel-green-long.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/left.png */ "./img/left.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/right.png */ "./img/right.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  border: 0;\r\n  overflow-x: hidden;\r\n  z-index: -3;\r\n  position: relative;\r\n}\r\n\r\nheader {\r\n  background-image: linear-gradient(#10665eff,#10665e88, #10665e00);\r\n  width: 100vw;\r\n  height: 80px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  position: fixed;\r\n  z-index: 10;\r\n}\r\n\r\n#hero-section {\r\n  min-width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#hero-section::after {\r\n  width: 100%;\r\n  height: 54.5vw;\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  z-index: 3;\r\n}\r\n\r\n#hero-section video {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  z-index: 2;\r\n}\r\n\r\n#hero-overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 5;  \r\n  height: 56.25vw;\r\n  width: 100%;\r\n  padding: 0 10vw;\r\n  object-fit: cover;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #fff;\r\n  text-align: center;\r\n}\r\n\r\n#hero-overlay h5, #hero-overlay p {\r\n  display: none;\r\n}\r\n\r\n#hero-overlay h1 {\r\n  color: #eee26f;\r\n}\r\n\r\n#hero-overlay button {\r\n  background-color: #dbb94600;\r\n  border-color: #fff;\r\n  color: #ffffff;\r\n  width: 120px;\r\n  height: 40px;\r\n}\r\n\r\n#hero-overlay button:hover {\r\n  background-color: #fff;\r\n  border-color: #fff;\r\n  color: #000;\r\n}\r\n\r\n.logo-account {\r\n  width: 100vw;\r\n  height: 80px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 20px;\r\n}\r\n\r\n.menu-bar {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  width: 100vw;\r\n  height: auto;\r\n  padding: 10px;\r\n  align-items: center;\r\n}\r\n\r\n.logo-account a {\r\n  text-decoration: none;\r\n  color: #eee26f;\r\n  font-size: 13px;\r\n  padding: 12px;\r\n}\r\n\r\n.logo-account a:hover {\r\n  color: white;\r\n}\r\n\r\n.fa-bars {\r\n  font-size:24px;\r\n  color: #eee26f;\r\n}\r\n\r\n.account span {\r\n  color: #eee26f;\r\n}\r\n\r\n#myLinks {\r\n  display: none;\r\n  width: auto;\r\n  padding-top: 0;\r\n}\r\n\r\n#myLinks a {\r\n  color: #eee26f;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 14px;\r\n  display: block;\r\n}\r\n\r\n#myLinks a:hover {\r\n  color: white;\r\n}\r\n\r\n#ribbon {\r\n  position: absolute;\r\n  top: 47vw;\r\n  left: 0;\r\n  height: 11.25vw;\r\n  z-index: 9;\r\n  object-position: cover;\r\n  overflow-x: hidden;\r\n}\r\n\r\n#ribbon img {\r\n  width: 100vw;\r\n}\r\n\r\n.item {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.footer-img {\r\n  width: 100vw;\r\n}\r\n\r\nfooter {\r\n  padding: 0;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: auto 100%;\r\n  color:#eee26f;\r\n}\r\n\r\nfooter h3 {\r\n  margin-top:0;\r\n  margin-bottom:12px;\r\n  font-weight:bold;\r\n  font-size:18px;\r\n}\r\n\r\nfooter ul {\r\n  padding:0;\r\n  list-style:none;\r\n  line-height:1.6;\r\n  font-size:16px;\r\n  margin-bottom:0;\r\n}\r\n\r\nfooter ul a {\r\n  color:inherit;\r\n  text-decoration:none;\r\n  opacity:0.8;\r\n}\r\n\r\n.address {\r\n  opacity: 0.8;\r\n}\r\n\r\nfooter ul a:hover {\r\n  color: #fff;\r\n}\r\n\r\nfooter ul a:hover {\r\n  opacity:1;\r\n}\r\n\r\nfooter .social {\r\n  text-align:center;\r\n  margin-top: 40px;\r\n}\r\n\r\n\r\nfooter .social > a {\r\n  margin-left:18px;\r\n  margin-top:22px;\r\n  color:inherit;\r\n  opacity:1;\r\n}\r\n\r\n.icon {\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\nfooter .social > a:hover {\r\n  opacity:0.65;\r\n}\r\n\r\n.happiness {\r\n  margin-top: 50px;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  color: #a4332b;\r\n}\r\n\r\nfooter .copyright {\r\n  margin-top:14px;\r\n  margin-bottom:0;\r\n  font-size:13px;\r\n  opacity:0.7;\r\n  text-align: center;\r\n}\r\n\r\n.account {\r\n  display: none;\r\n}\r\n\r\n.dynamic-page {\r\n  position: relative;\r\n  display: block;\r\n  z-index: -2;\r\n}\r\n\r\n.fab-container {\r\n\r\n  position:fixed;\r\n  \r\n  bottom:25px;\r\n  \r\n  right:25px;\r\n  \r\n  cursor:pointer;\r\n  \r\n  z-index: -1;\r\n}\r\n\r\n.iconbutton {\r\n\r\n  width:50px;\r\n  \r\n  height:50px;\r\n  \r\n  border-radius: 100%;\r\n  \r\n  background: #0a3d38;\r\n  \r\n  box-shadow: 5px 7px 5px #aaaaaa;\r\n  \r\n  }\r\n\r\n  .iconbutton i {\r\n\r\n    display:flex;\r\n    \r\n    align-items:center;\r\n    \r\n    justify-content:center;\r\n    \r\n    height: 100%;\r\n    \r\n    color:#eee26f;\r\n\r\n    font-size: 26px;\r\n    \r\n  }\r\n\r\n  .fab-container {\r\n    display:flex;\r\n\r\n    justify-content:flex-end;\r\n\r\n    padding:5px;\r\n  }\r\n\r\n  .btn-label {\r\n    display: none;\r\n  }\r\n\r\n  .fab-container:hover > .btn-label {\r\n\r\n    display: inline;\r\n\r\n    padding: 2px 5px;\r\n    \r\n    margin-right: 10px;\r\n    \r\n    align-self: center;\r\n    \r\n    background-color: #0a3d38;\r\n    \r\n    color:#eee26f;\r\n    \r\n    border-radius: 3px;\r\n    \r\n    box-shadow: 5px 7px 5px #aaaaaa;\r\n    \r\n  }\r\n\r\n  #WelcomeSection h1 {\r\n    text-align: center;\r\n    margin-top: 0;\r\n  }\r\n\r\n  #WelcomeSection p {\r\n    width: 80vw;\r\n    text-align: center;\r\n    margin: auto;\r\n  }\r\n\r\n  #WelcomeSection button {\r\n    background-color: #10665e;\r\n    border-color: #10665e;\r\n    color: #eee26f;\r\n    margin-top: 30px;\r\n    padding: 10px;\r\n  }\r\n\r\n  #WelcomeSection button:hover {\r\n    background-color: #0a3d38;\r\n    border-color: #0a3d38;\r\n  }\r\n\r\n  #carouselExampleIndicators {\r\n    margin: 50px auto 80px;\r\n  }\r\n\r\n  .left-image {\r\n   display: none;\r\n  }\r\n\r\n  .right-image {\r\n    display: none;\r\n  }\r\n\r\n  .WhyKaravanMain {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-items: center;\r\n    text-align: center;\r\n    gap: 20px;\r\n    margin: 30px 0;\r\n  }\r\n\r\n  #WhyKaravanSection {\r\n    text-align: center;\r\n  }\r\n\r\n  .keypoint-img {\r\n    display: none;\r\n  }\r\n\r\n  .statistics {\r\n    background-color: #10665e;\r\n    color: #eee26f;\r\n  }\r\n\r\n  .stat {\r\n    padding: 20px 0 0;\r\n  }\r\n\r\n  .stat:hover {\r\n    background-color: #00000066;\r\n  }\r\n\r\n@media (min-width: 768px) {\r\n\r\n  .logo {\r\n    order: 1;\r\n  }\r\n\r\n  .logo img {\r\n    width: 125px;\r\n  }\r\n\r\n  #myLinks {\r\n    display: flex;\r\n    order: 4;\r\n  }\r\n\r\n  #myLinks a {\r\n    display: inline;\r\n  }\r\n\r\n  .menu-bar {\r\n    display: none;\r\n  }\r\n\r\n  .account {\r\n    display: flex;\r\n  }\r\n\r\n  #WelcomeSection p {\r\n    width: 50vw;\r\n  }\r\n\r\n  #carouselExampleIndicators {\r\n    width: 50vw;\r\n  }\r\n\r\n  .left-image {\r\n    display: block;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-size: cover;\r\n    background-position: right;\r\n    background-repeat: no-repeat;\r\n   }\r\n \r\n  .right-image {\r\n    display: block;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n  }\r\n\r\n  .item {\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  #hero-overlay h5, p {\r\n    display: block;\r\n  }  \r\n  footer .social {\r\n    margin-top: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n\r\n  .logo-account a {\r\n    font-size: 18px;\r\n  }\r\n\r\n  #myLinks a {\r\n    font-size: 18px;\r\n  }\r\n\r\n  .logo img {\r\n    width: 160px;\r\n  }\r\n\r\n  #hero-overlay p {\r\n    display: block;\r\n  }\r\n\r\n  .keypoint-img {\r\n    display: block;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  border: 0;\r\n  overflow-x: hidden;\r\n  z-index: -3;\r\n  position: relative;\r\n}\r\n\r\nheader {\r\n  background-image: linear-gradient(#10665eff,#10665e88, #10665e00);\r\n  width: 100vw;\r\n  height: 80px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  position: fixed;\r\n  z-index: 10;\r\n}\r\n\r\n#hero-section {\r\n  min-width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#hero-section::after {\r\n  width: 100%;\r\n  height: 54.5vw;\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  z-index: 3;\r\n}\r\n\r\n#hero-section video {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  z-index: 2;\r\n}\r\n\r\n#hero-overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 5;  \r\n  height: 56.25vw;\r\n  width: 100%;\r\n  padding: 0 10vw;\r\n  object-fit: cover;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #fff;\r\n  text-align: center;\r\n}\r\n\r\n#hero-overlay h5, #hero-overlay p {\r\n  display: none;\r\n}\r\n\r\n#hero-overlay h1 {\r\n  color: #eee26f;\r\n}\r\n\r\n#hero-overlay button {\r\n  background-color: #dbb94600;\r\n  border-color: #fff;\r\n  color: #ffffff;\r\n  width: 120px;\r\n  height: 40px;\r\n}\r\n\r\n#hero-overlay button:hover {\r\n  background-color: #fff;\r\n  border-color: #fff;\r\n  color: #000;\r\n}\r\n\r\n.logo-account {\r\n  width: 100vw;\r\n  height: 80px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 20px;\r\n}\r\n\r\n.menu-bar {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  width: 100vw;\r\n  height: auto;\r\n  padding: 10px;\r\n  align-items: center;\r\n}\r\n\r\n.logo-account a {\r\n  text-decoration: none;\r\n  color: #eee26f;\r\n  font-size: 13px;\r\n  padding: 12px;\r\n}\r\n\r\n.logo-account a:hover {\r\n  color: white;\r\n}\r\n\r\n.fa-bars {\r\n  font-size:24px;\r\n  color: #eee26f;\r\n}\r\n\r\n.account span {\r\n  color: #eee26f;\r\n}\r\n\r\n#myLinks {\r\n  display: none;\r\n  width: auto;\r\n  padding-top: 0;\r\n}\r\n\r\n#myLinks a {\r\n  color: #eee26f;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 14px;\r\n  display: block;\r\n}\r\n\r\n#myLinks a:hover {\r\n  color: white;\r\n}\r\n\r\n#ribbon {\r\n  position: absolute;\r\n  top: 47vw;\r\n  left: 0;\r\n  height: 11.25vw;\r\n  z-index: 9;\r\n  object-position: cover;\r\n  overflow-x: hidden;\r\n}\r\n\r\n#ribbon img {\r\n  width: 100vw;\r\n}\r\n\r\n.item {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.footer-img {\r\n  width: 100vw;\r\n}\r\n\r\nfooter {\r\n  padding: 0;\r\n  background-image: url(\"../img/karavan-camel-green-long.png\");\r\n  background-size: auto 100%;\r\n  color:#eee26f;\r\n}\r\n\r\nfooter h3 {\r\n  margin-top:0;\r\n  margin-bottom:12px;\r\n  font-weight:bold;\r\n  font-size:18px;\r\n}\r\n\r\nfooter ul {\r\n  padding:0;\r\n  list-style:none;\r\n  line-height:1.6;\r\n  font-size:16px;\r\n  margin-bottom:0;\r\n}\r\n\r\nfooter ul a {\r\n  color:inherit;\r\n  text-decoration:none;\r\n  opacity:0.8;\r\n}\r\n\r\n.address {\r\n  opacity: 0.8;\r\n}\r\n\r\nfooter ul a:hover {\r\n  color: #fff;\r\n}\r\n\r\nfooter ul a:hover {\r\n  opacity:1;\r\n}\r\n\r\nfooter .social {\r\n  text-align:center;\r\n  margin-top: 40px;\r\n}\r\n\r\n\r\nfooter .social > a {\r\n  margin-left:18px;\r\n  margin-top:22px;\r\n  color:inherit;\r\n  opacity:1;\r\n}\r\n\r\n.icon {\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\nfooter .social > a:hover {\r\n  opacity:0.65;\r\n}\r\n\r\n.happiness {\r\n  margin-top: 50px;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  color: #a4332b;\r\n}\r\n\r\nfooter .copyright {\r\n  margin-top:14px;\r\n  margin-bottom:0;\r\n  font-size:13px;\r\n  opacity:0.7;\r\n  text-align: center;\r\n}\r\n\r\n.account {\r\n  display: none;\r\n}\r\n\r\n.dynamic-page {\r\n  position: relative;\r\n  display: block;\r\n  z-index: -2;\r\n}\r\n\r\n.fab-container {\r\n\r\n  position:fixed;\r\n  \r\n  bottom:25px;\r\n  \r\n  right:25px;\r\n  \r\n  cursor:pointer;\r\n  \r\n  z-index: -1;\r\n}\r\n\r\n.iconbutton {\r\n\r\n  width:50px;\r\n  \r\n  height:50px;\r\n  \r\n  border-radius: 100%;\r\n  \r\n  background: #0a3d38;\r\n  \r\n  box-shadow: 5px 7px 5px #aaaaaa;\r\n  \r\n  }\r\n\r\n  .iconbutton i {\r\n\r\n    display:flex;\r\n    \r\n    align-items:center;\r\n    \r\n    justify-content:center;\r\n    \r\n    height: 100%;\r\n    \r\n    color:#eee26f;\r\n\r\n    font-size: 26px;\r\n    \r\n  }\r\n\r\n  .fab-container {\r\n    display:flex;\r\n\r\n    justify-content:flex-end;\r\n\r\n    padding:5px;\r\n  }\r\n\r\n  .btn-label {\r\n    display: none;\r\n  }\r\n\r\n  .fab-container:hover > .btn-label {\r\n\r\n    display: inline;\r\n\r\n    padding: 2px 5px;\r\n    \r\n    margin-right: 10px;\r\n    \r\n    align-self: center;\r\n    \r\n    background-color: #0a3d38;\r\n    \r\n    color:#eee26f;\r\n    \r\n    border-radius: 3px;\r\n    \r\n    box-shadow: 5px 7px 5px #aaaaaa;\r\n    \r\n  }\r\n\r\n  #WelcomeSection h1 {\r\n    text-align: center;\r\n    margin-top: 0;\r\n  }\r\n\r\n  #WelcomeSection p {\r\n    width: 80vw;\r\n    text-align: center;\r\n    margin: auto;\r\n  }\r\n\r\n  #WelcomeSection button {\r\n    background-color: #10665e;\r\n    border-color: #10665e;\r\n    color: #eee26f;\r\n    margin-top: 30px;\r\n    padding: 10px;\r\n  }\r\n\r\n  #WelcomeSection button:hover {\r\n    background-color: #0a3d38;\r\n    border-color: #0a3d38;\r\n  }\r\n\r\n  #carouselExampleIndicators {\r\n    margin: 50px auto 80px;\r\n  }\r\n\r\n  .left-image {\r\n   display: none;\r\n  }\r\n\r\n  .right-image {\r\n    display: none;\r\n  }\r\n\r\n  .WhyKaravanMain {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-items: center;\r\n    text-align: center;\r\n    gap: 20px;\r\n    margin: 30px 0;\r\n  }\r\n\r\n  #WhyKaravanSection {\r\n    text-align: center;\r\n  }\r\n\r\n  .keypoint-img {\r\n    display: none;\r\n  }\r\n\r\n  .statistics {\r\n    background-color: #10665e;\r\n    color: #eee26f;\r\n  }\r\n\r\n  .stat {\r\n    padding: 20px 0 0;\r\n  }\r\n\r\n  .stat:hover {\r\n    background-color: #00000066;\r\n  }\r\n\r\n@media (min-width: 768px) {\r\n\r\n  .logo {\r\n    order: 1;\r\n  }\r\n\r\n  .logo img {\r\n    width: 125px;\r\n  }\r\n\r\n  #myLinks {\r\n    display: flex;\r\n    order: 4;\r\n  }\r\n\r\n  #myLinks a {\r\n    display: inline;\r\n  }\r\n\r\n  .menu-bar {\r\n    display: none;\r\n  }\r\n\r\n  .account {\r\n    display: flex;\r\n  }\r\n\r\n  #WelcomeSection p {\r\n    width: 50vw;\r\n  }\r\n\r\n  #carouselExampleIndicators {\r\n    width: 50vw;\r\n  }\r\n\r\n  .left-image {\r\n    display: block;\r\n    background-image: url('../img/left.png');\r\n    background-size: cover;\r\n    background-position: right;\r\n    background-repeat: no-repeat;\r\n   }\r\n \r\n  .right-image {\r\n    display: block;\r\n    background-image: url('../img/right.png');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n  }\r\n\r\n  .item {\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  #hero-overlay h5, p {\r\n    display: block;\r\n  }  \r\n  footer .social {\r\n    margin-top: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n\r\n  .logo-account a {\r\n    font-size: 18px;\r\n  }\r\n\r\n  #myLinks a {\r\n    font-size: 18px;\r\n  }\r\n\r\n  .logo img {\r\n    width: 160px;\r\n  }\r\n\r\n  #hero-overlay p {\r\n    display: block;\r\n  }\r\n\r\n  .keypoint-img {\r\n    display: block;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./KaravanCoffeeCakeFood.mp4":
/*!***********************************!*\
  !*** ./KaravanCoffeeCakeFood.mp4 ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "video/KaravanCoffeeCakeFood.mp4");

/***/ }),

/***/ "./hearts.mp4":
/*!********************!*\
  !*** ./hearts.mp4 ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "video/hearts.mp4");

/***/ }),

/***/ "./src/normalize.css":
/*!***************************!*\
  !*** ./src/normalize.css ***!
  \***************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalize.css */ "./src/normalize.css");
/* harmony import */ var _img_KaravanNewLogo_PNG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/KaravanNewLogo.PNG */ "./img/KaravanNewLogo.PNG");
/* harmony import */ var _img_karavan_golden_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/karavan-golden-logo.png */ "./img/karavan-golden-logo.png");
/* harmony import */ var _img_karavan_golden_logo_only_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/karavan-golden-logo-only.png */ "./img/karavan-golden-logo-only.png");
/* harmony import */ var _img_karavan_golden_moto_only_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/karavan-golden-moto-only.png */ "./img/karavan-golden-moto-only.png");
/* harmony import */ var _img_karavan_golden_together_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/karavan-golden-together.png */ "./img/karavan-golden-together.png");
/* harmony import */ var _img_karavan_camel_brown_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/karavan-camel-brown.png */ "./img/karavan-camel-brown.png");
/* harmony import */ var _img_karavan_camel_brown_custom_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/karavan-camel-brown-custom.png */ "./img/karavan-camel-brown-custom.png");
/* harmony import */ var _img_karavan_camel_green_long_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/karavan-camel-green-long.png */ "./img/karavan-camel-green-long.png");
/* harmony import */ var _hearts_mp4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hearts.mp4 */ "./hearts.mp4");
/* harmony import */ var _img_ribbon_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/ribbon.png */ "./img/ribbon.png");
/* harmony import */ var _img_ribbon_long_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/ribbon-long.png */ "./img/ribbon-long.png");
/* harmony import */ var _img_karavan_ribbon_long_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/karavan-ribbon-long.jpg */ "./img/karavan-ribbon-long.jpg");
/* harmony import */ var _KaravanCoffeeCakeFood_mp4__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../KaravanCoffeeCakeFood.mp4 */ "./KaravanCoffeeCakeFood.mp4");
/* harmony import */ var _img_facebook_golden_transparent_logo_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/facebook-golden-transparent-logo.png */ "./img/facebook-golden-transparent-logo.png");
/* harmony import */ var _img_twitter_golden_transparent_logo_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../img/twitter-golden-transparent-logo.png */ "./img/twitter-golden-transparent-logo.png");
/* harmony import */ var _img_instagram_golden_logo_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../img/instagram-golden-logo.png */ "./img/instagram-golden-logo.png");
/* harmony import */ var _img_karavan_camel_green_custom_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../img/karavan-camel-green-custom.png */ "./img/karavan-camel-green-custom.png");
/* harmony import */ var _img_chef_hat_icon_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../img/chef-hat-icon.png */ "./img/chef-hat-icon.png");
/* harmony import */ var _modules_HomePage_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../modules/HomePage.js */ "./modules/HomePage.js");






















const tab = '';

window.addEventListener('DOMContentLoaded', () => {
  
    document.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
        document.getElementById('header').style.backgroundColor = "#105149";
    } else {
        document.getElementById('header').style.backgroundColor = "#00000000";
        document.getElementById('header').style.backgroundImage = 'linear-gradient(to bottom, #10665eff,#10665e88, #10665e00)';
    }
    //console.log(window.scrollY);
  });

  if (tab == '' || tab == 'Home') {
    document.getElementById('Home').style.color = '#fff';
    const HomePage = new _modules_HomePage_js__WEBPACK_IMPORTED_MODULE_20__["default"]();
    HomePage.welcomeSection();
    HomePage.whyKaravanSection();
  }
  
});

/***/ }),

/***/ "./img/KaravanNewLogo.PNG":
/*!********************************!*\
  !*** ./img/KaravanNewLogo.PNG ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0bcf35f8299d1ee450d1.PNG";

/***/ }),

/***/ "./img/chef-hat-icon.png":
/*!*******************************!*\
  !*** ./img/chef-hat-icon.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6beeaf692a6a15848cee.png";

/***/ }),

/***/ "./img/facebook-golden-transparent-logo.png":
/*!**************************************************!*\
  !*** ./img/facebook-golden-transparent-logo.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4b61e217cb91ea36598e.png";

/***/ }),

/***/ "./img/instagram-golden-logo.png":
/*!***************************************!*\
  !*** ./img/instagram-golden-logo.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a6f3f82284fa196fc2af.png";

/***/ }),

/***/ "./img/karavan-camel-brown-custom.png":
/*!********************************************!*\
  !*** ./img/karavan-camel-brown-custom.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76c7170cd592f47492d5.png";

/***/ }),

/***/ "./img/karavan-camel-brown.png":
/*!*************************************!*\
  !*** ./img/karavan-camel-brown.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60e22577c172dc7e700e.png";

/***/ }),

/***/ "./img/karavan-camel-green-custom.png":
/*!********************************************!*\
  !*** ./img/karavan-camel-green-custom.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3534d840a69009921b40.png";

/***/ }),

/***/ "./img/karavan-camel-green-long.png":
/*!******************************************!*\
  !*** ./img/karavan-camel-green-long.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1a2184b20f1c56c90012.png";

/***/ }),

/***/ "./img/karavan-golden-logo-only.png":
/*!******************************************!*\
  !*** ./img/karavan-golden-logo-only.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18a638ade9cb12de2784.png";

/***/ }),

/***/ "./img/karavan-golden-logo.png":
/*!*************************************!*\
  !*** ./img/karavan-golden-logo.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "682c3fea46c7c5bc1454.png";

/***/ }),

/***/ "./img/karavan-golden-moto-only.png":
/*!******************************************!*\
  !*** ./img/karavan-golden-moto-only.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "73402d4a3ca4f53baae5.png";

/***/ }),

/***/ "./img/karavan-golden-together.png":
/*!*****************************************!*\
  !*** ./img/karavan-golden-together.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c8b9e478cf35b1fbe82.png";

/***/ }),

/***/ "./img/karavan-ribbon-long.jpg":
/*!*************************************!*\
  !*** ./img/karavan-ribbon-long.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5c9db1f62d9e439f797.jpg";

/***/ }),

/***/ "./img/left.png":
/*!**********************!*\
  !*** ./img/left.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2bc683deafa7d3223958.png";

/***/ }),

/***/ "./img/ribbon-long.png":
/*!*****************************!*\
  !*** ./img/ribbon-long.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db080042899ec070e7bb.png";

/***/ }),

/***/ "./img/ribbon.png":
/*!************************!*\
  !*** ./img/ribbon.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "01f44aa68b3a8ef83e7f.png";

/***/ }),

/***/ "./img/right.png":
/*!***********************!*\
  !*** ./img/right.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0f44106f40cd8d2628dd.png";

/***/ }),

/***/ "./img/twitter-golden-transparent-logo.png":
/*!*************************************************!*\
  !*** ./img/twitter-golden-transparent-logo.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "12a2c22ab4b4817f5344.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsYUFBYSxjQUFjLGNBQWMsT0FBTyxNQUFNLFdBQVcsYUFBYSxjQUFjLFlBQVksV0FBVyxXQUFXLE9BQU8s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a2FyYXZhbi13ZWItYXBwLy4vbW9kdWxlcy9Ib21lUGFnZS5qcyIsIndlYnBhY2s6Ly9rYXJhdmFuLXdlYi1hcHAvLi9zcmMvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly9rYXJhdmFuLXdlYi1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2thcmF2YW4td2ViLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va2FyYXZhbi13ZWItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9rYXJhdmFuLXdlYi1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9rYXJhdmFuLXdlYi1hcHAvLi9LYXJhdmFuQ29mZmVlQ2FrZUZvb2QubXA0Iiwid2VicGFjazovL2thcmF2YW4td2ViLWFwcC8uL2hlYXJ0cy5tcDQiLCJ3ZWJwYWNrOi8va2FyYXZhbi13ZWItYXBwLy4vc3JjL25vcm1hbGl6ZS5jc3M/Njg1NiIsIndlYnBhY2s6Ly9rYXJhdmFuLXdlYi1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8va2FyYXZhbi13ZWItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2thcmF2YW4td2ViLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8va2FyYXZhbi13ZWItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2thcmF2YW4td2ViLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rYXJhdmFuLXdlYi1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9rYXJhdmFuLXdlYi1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9rYXJhdmFuLXdlYi1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHdlbGNvbWVTZWN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZHluYW1pY1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICBkeW5hbWljU2VjdGlvbi5pZCA9ICdXZWxjb21lU2VjdGlvbic7XG4gICAgICBkeW5hbWljU2VjdGlvbi5jbGFzc05hbWUgPSAnV2VsY29tZVNlY3Rpb24gZC1mbGV4JztcblxuICAgICAgZHluYW1pY1NlY3Rpb24uaW5uZXJIVE1MICs9IGBcbiAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1pbWFnZSBjb2wtM1wiPjwvZGl2PlxuICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBjb2wtc20tMTJcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+V2VsY29tZSB0byBLYXJhdmFuITwvaDE+XG4gICAgICAgICAgPHA+S2FyYXZhbiBDb2ZmZWUgbWFrZXMgaXRzIGJlc3QgZWZmb3J0IHRvIGNyZWF0ZSBhIHVuaXF1ZSBwbGFjZSB3aGVyZSBjdXN0b21lcnMgY2FuIHNvY2lhbGl6ZSB3aXRoIGVhY2ggb3RoZXIgaW4gYSBjb21mb3J0YWJsZSBhbmQgcmVsYXhpbmcgZW52aXJvbm1lbnQgd2hpbGUgZW5qb3lpbmcgaG90IGFuZCBjb2xkIGRyaW5rcyBhcyB3ZWxsIGFzIHVuaXF1ZWx5IHByZXBhcmVkIHBhc3RyeSBhbmQgZm9vZCBjaG9pY2VzLjwvcD5cbiAgICAgICAgICA8ZGl2IGFsaWduPSdjZW50ZXInPlxuICAgICAgICAgICAgPGJ1dHRvbj5MZWFybiBtb3JlIGFib3V0IHVzITwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cImNhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiBjbGFzcz1cImNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIj5cbiAgICAgICAgICA8b2wgY2xhc3M9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+XG4gICAgICAgICAgICA8bGkgZGF0YS10YXJnZXQ9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3M9XCJhY3RpdmVcIj48L2xpPlxuICAgICAgICAgICAgPGxpIGRhdGEtdGFyZ2V0PVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiBkYXRhLXNsaWRlLXRvPVwiMVwiPjwvbGk+XG4gICAgICAgICAgICA8bGkgZGF0YS10YXJnZXQ9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIGRhdGEtc2xpZGUtdG89XCIyXCI+PC9saT5cbiAgICAgICAgICA8L29sPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pbm5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW0gYWN0aXZlXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJkLWJsb2NrIHctMTAwIG14LWF1dG9cIiBzcmM9XCIwYmNmMzVmODI5OWQxZWU0NTBkMS5wbmdcIiBhbHQ9XCJGaXJzdCBzbGlkZVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiZC1ibG9jayB3LTEwMCBteC1hdXRvXCIgc3JjPVwiMGJjZjM1ZjgyOTlkMWVlNDUwZDEucG5nXCIgYWx0PVwiU2Vjb25kIHNsaWRlXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJkLWJsb2NrIHctMTAwIG14LWF1dG9cIiBzcmM9XCIwYmNmMzVmODI5OWQxZWU0NTBkMS5wbmdcIiBhbHQ9XCJUaGlyZCBzbGlkZVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXZcIiBocmVmPVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHRcIiBocmVmPVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtaW1hZ2UgY29sLTNcIj48L2Rpdj5cbiAgICAgIGA7XG4gICAgICBcbiAgICAgIGNvbnN0IGVtcHR5U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkeW5hbWljLXBhZ2UnKTtcbiAgICAgIGVtcHR5U2VjdGlvbi5hcHBlbmRDaGlsZChkeW5hbWljU2VjdGlvbik7XG4gICAgfVxuXG4gICAgd2h5S2FyYXZhblNlY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGR5bmFtaWNTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICBkeW5hbWljU2VjdGlvbi5pZCA9ICdXaHlLYXJhdmFuU2VjdGlvbic7XG4gICAgICAgIGR5bmFtaWNTZWN0aW9uLmNsYXNzTmFtZSA9ICdXaHlLYXJhdmFuU2VjdGlvbic7XG4gIFxuICAgICAgICBkeW5hbWljU2VjdGlvbi5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgIDxoMT5XaHkgS2FyYXZhbj88L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJXaHlLYXJhdmFuTWFpblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlwb2ludC1pbWdcIj5cbiAgICAgICAgICAgIDxpbWcgaWQ9XCJrZXlwb2ludC1pbWdcIiBzcmM9JycgYWx0PScnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0aXN0aWNzIGNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBjb2wtc21cIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNhbGVuZGFyIGZhLTJ4XCI+PC9pPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZnMtMlwiPjxzcGFuIGlkPScwMTAxJz4xOTg3PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8cD5Fc3RhYmxpc2htZW50IERhdGU8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBjb2wtc21cIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNvZmZlZSBmYS0yeFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZzLTJcIj48c3BhbiBpZD0nMDEwMic+Mjwvc3Bhbj5NKzwvcD5cbiAgICAgICAgICAgICAgICA8cD5NYWNjaGlhdG8gc29sZCBhdCBvdXIgZmxhZ3NoaXAgYnJhbmNoIHNpbmNlIG9wZW5pbmc8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBjb2wtc21cIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWJ1aWxkaW5nLW8gZmEtMnhcIj48L2k+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmcy0yXCI+PHNwYW4gaWQ9JzAxMDMnPjU8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgIDxwPkJyYW5jaGVzIGFuZCAyIGNvbWluZyBzb29uPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBjb2wtc21cIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXVzZXJzIGZhLTJ4XCI+PC9pPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZnMtMlwiPjxzcGFuIGlkPScwMTA0Jz4zMjA8L3NwYW4+KzwvcD5cbiAgICAgICAgICAgICAgICA8cD5FbXBsb3llZXM8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBjb2wtc21cIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWN1dGxlcnkgZmEtMnhcIj48L2k+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmcy0yXCI+PHNwYW4gaWQ9JzAxMDUnPjIwMDwvc3Bhbj4rPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYWxpZ24tY29udGVudC1jZW50ZXJcIj5Gb29kICYgQmV2ZXJhZ2UgVmFyaWV0eTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IGNvbC1zbVwiPlxuICAgICAgICAgICAgICAgIDxpPjxpbWcgc3JjPVwiNmJlZWFmNjkyYTZhMTU4NDhjZWUucG5nXCIgaGVpZ2h0PVwiNDJweFwiIHdpZGh0PVwiNTBweFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZzLTJcIj48c3BhbiBpZD0nMDEwNic+MTAwPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImFsaWduLWNvbnRlbnQtY2VudGVyXCI+UGFzdHJ5ICYgRm9vZCBDaGVpZnM8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICBjb25zdCBlbXB0eVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHluYW1pYy1wYWdlJyk7XG4gICAgICBlbXB0eVNlY3Rpb24uYXBwZW5kQ2hpbGQoZHluYW1pY1NlY3Rpb24pO1xuICAgIH1cbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbiBodG1sIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qIFNlY3Rpb25zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAgICovXFxuICBcXG4gIG1haW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICAgKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxuICB9XFxuICBcXG4gIC8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gICAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAgICovXFxuICBcXG4gIGhyIHtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gICAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBwcmUge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAgICovXFxuICBcXG4gIGEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAgICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICBhYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICBiLFxcbiAgc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIGNvZGUsXFxuICBrYmQsXFxuICBzYW1wIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgc21hbGwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gICAqIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBzdWIsXFxuICBzdXAge1xcbiAgICBmb250LXNpemU6IDc1JTtcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgfVxcbiAgXFxuICBzdWIge1xcbiAgICBib3R0b206IC0wLjI1ZW07XFxuICB9XFxuICBcXG4gIHN1cCB7XFxuICAgIHRvcDogLTAuNWVtO1xcbiAgfVxcbiAgXFxuICAvKiBFbWJlZGRlZCBjb250ZW50XFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG4gIFxcbiAgaW1nIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgfVxcbiAgXFxuICAvKiBGb3Jtc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICBidXR0b24sXFxuICBpbnB1dCxcXG4gIG9wdGdyb3VwLFxcbiAgc2VsZWN0LFxcbiAgdGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICAgKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbixcXG4gIGlucHV0IHsgLyogMSAqL1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gICAqL1xcbiAgXFxuICBidXR0b24sXFxuICBzZWxlY3QgeyAvKiAxICovXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgYnV0dG9uLFxcbiAgW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcbiAgW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuICBbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG4gIFt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG4gIFt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcbiAgW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gICAqL1xcbiAgXFxuICBidXR0b246LW1vei1mb2N1c3JpbmcsXFxuICBbdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuICBbdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG4gIFt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG4gIFxcbiAgZmllbGRzZXQge1xcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gICAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gICAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIGxlZ2VuZCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gICAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gICAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICAgKi9cXG4gIFxcbiAgcHJvZ3Jlc3Mge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICAgKi9cXG4gIFxcbiAgdGV4dGFyZWEge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gICAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gICAqL1xcbiAgXFxuICBbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG4gIFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAgICovXFxuICBcXG4gIFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG4gIFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAgICovXFxuICBcXG4gIFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIDo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgICBmb250OiBpbmhlcml0OyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qIEludGVyYWN0aXZlXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gICAqL1xcbiAgXFxuICBkZXRhaWxzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICBcXG4gIC8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgc3VtbWFyeSB7XFxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG4gIH1cXG4gIFxcbiAgLyogTWlzY1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICAgKi9cXG4gIFxcbiAgdGVtcGxhdGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAgICovXFxuICBcXG4gIFtoaWRkZW5dIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztDQUVEO0lBQ0csaUJBQWlCLEVBQUUsTUFBTTtJQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0VBQ3hDOztFQUVBO2lGQUMrRTs7RUFFL0U7O0lBRUU7O0VBRUY7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7O0lBRUU7O0VBRUY7SUFDRSxjQUFjO0VBQ2hCOztFQUVBOzs7SUFHRTs7RUFFRjtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7O0VBRUE7aUZBQytFOztFQUUvRTs7O0lBR0U7O0VBRUY7SUFDRSx1QkFBdUIsRUFBRSxNQUFNO0lBQy9CLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLGlCQUFpQixFQUFFLE1BQU07RUFDM0I7O0VBRUE7OztJQUdFOztFQUVGO0lBQ0UsaUNBQWlDLEVBQUUsTUFBTTtJQUN6QyxjQUFjLEVBQUUsTUFBTTtFQUN4Qjs7RUFFQTtpRkFDK0U7O0VBRS9FOztJQUVFOztFQUVGO0lBQ0UsNkJBQTZCO0VBQy9COztFQUVBOzs7SUFHRTs7RUFFRjtJQUNFLG1CQUFtQixFQUFFLE1BQU07SUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtJQUNsQyxpQ0FBaUMsRUFBRSxNQUFNO0VBQzNDOztFQUVBOztJQUVFOztFQUVGOztJQUVFLG1CQUFtQjtFQUNyQjs7RUFFQTs7O0lBR0U7O0VBRUY7OztJQUdFLGlDQUFpQyxFQUFFLE1BQU07SUFDekMsY0FBYyxFQUFFLE1BQU07RUFDeEI7O0VBRUE7O0lBRUU7O0VBRUY7SUFDRSxjQUFjO0VBQ2hCOztFQUVBOzs7SUFHRTs7RUFFRjs7SUFFRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO2lGQUMrRTs7RUFFL0U7O0lBRUU7O0VBRUY7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7aUZBQytFOztFQUUvRTs7O0lBR0U7O0VBRUY7Ozs7O0lBS0Usb0JBQW9CLEVBQUUsTUFBTTtJQUM1QixlQUFlLEVBQUUsTUFBTTtJQUN2QixpQkFBaUIsRUFBRSxNQUFNO0lBQ3pCLFNBQVMsRUFBRSxNQUFNO0VBQ25COztFQUVBOzs7SUFHRTs7RUFFRjtVQUNRLE1BQU07SUFDWixpQkFBaUI7RUFDbkI7O0VBRUE7OztJQUdFOztFQUVGO1dBQ1MsTUFBTTtJQUNiLG9CQUFvQjtFQUN0Qjs7RUFFQTs7SUFFRTs7RUFFRjs7OztJQUlFLDBCQUEwQjtFQUM1Qjs7RUFFQTs7SUFFRTs7RUFFRjs7OztJQUlFLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7O0VBRUE7O0lBRUU7O0VBRUY7Ozs7SUFJRSw4QkFBOEI7RUFDaEM7O0VBRUE7O0lBRUU7O0VBRUY7SUFDRSw4QkFBOEI7RUFDaEM7O0VBRUE7Ozs7O0lBS0U7O0VBRUY7SUFDRSxzQkFBc0IsRUFBRSxNQUFNO0lBQzlCLGNBQWMsRUFBRSxNQUFNO0lBQ3RCLGNBQWMsRUFBRSxNQUFNO0lBQ3RCLGVBQWUsRUFBRSxNQUFNO0lBQ3ZCLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLG1CQUFtQixFQUFFLE1BQU07RUFDN0I7O0VBRUE7O0lBRUU7O0VBRUY7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7O0lBRUU7O0VBRUY7SUFDRSxjQUFjO0VBQ2hCOztFQUVBOzs7SUFHRTs7RUFFRjs7SUFFRSxzQkFBc0IsRUFBRSxNQUFNO0lBQzlCLFVBQVUsRUFBRSxNQUFNO0VBQ3BCOztFQUVBOztJQUVFOztFQUVGOztJQUVFLFlBQVk7RUFDZDs7RUFFQTs7O0lBR0U7O0VBRUY7SUFDRSw2QkFBNkIsRUFBRSxNQUFNO0lBQ3JDLG9CQUFvQixFQUFFLE1BQU07RUFDOUI7O0VBRUE7O0lBRUU7O0VBRUY7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7OztJQUdFOztFQUVGO0lBQ0UsMEJBQTBCLEVBQUUsTUFBTTtJQUNsQyxhQUFhLEVBQUUsTUFBTTtFQUN2Qjs7RUFFQTtpRkFDK0U7O0VBRS9FOztJQUVFOztFQUVGO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTs7SUFFRTs7RUFFRjtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtpRkFDK0U7O0VBRS9FOztJQUVFOztFQUVGO0lBQ0UsYUFBYTtFQUNmOztFQUVBOztJQUVFOztFQUVGO0lBQ0UsYUFBYTtFQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbiBodG1sIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qIFNlY3Rpb25zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAgICovXFxuICBcXG4gIG1haW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICAgKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxuICB9XFxuICBcXG4gIC8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gICAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAgICovXFxuICBcXG4gIGhyIHtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gICAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBwcmUge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAgICovXFxuICBcXG4gIGEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAgICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICBhYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICBiLFxcbiAgc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIGNvZGUsXFxuICBrYmQsXFxuICBzYW1wIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgc21hbGwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gICAqIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBzdWIsXFxuICBzdXAge1xcbiAgICBmb250LXNpemU6IDc1JTtcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgfVxcbiAgXFxuICBzdWIge1xcbiAgICBib3R0b206IC0wLjI1ZW07XFxuICB9XFxuICBcXG4gIHN1cCB7XFxuICAgIHRvcDogLTAuNWVtO1xcbiAgfVxcbiAgXFxuICAvKiBFbWJlZGRlZCBjb250ZW50XFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG4gIFxcbiAgaW1nIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgfVxcbiAgXFxuICAvKiBGb3Jtc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICBidXR0b24sXFxuICBpbnB1dCxcXG4gIG9wdGdyb3VwLFxcbiAgc2VsZWN0LFxcbiAgdGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICAgKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbixcXG4gIGlucHV0IHsgLyogMSAqL1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gICAqL1xcbiAgXFxuICBidXR0b24sXFxuICBzZWxlY3QgeyAvKiAxICovXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgYnV0dG9uLFxcbiAgW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcbiAgW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuICBbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG4gIFt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG4gIFt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcbiAgW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gICAqL1xcbiAgXFxuICBidXR0b246LW1vei1mb2N1c3JpbmcsXFxuICBbdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuICBbdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG4gIFt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG4gIFxcbiAgZmllbGRzZXQge1xcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gICAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gICAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIGxlZ2VuZCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gICAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gICAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICAgKi9cXG4gIFxcbiAgcHJvZ3Jlc3Mge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICAgKi9cXG4gIFxcbiAgdGV4dGFyZWEge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gICAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gICAqL1xcbiAgXFxuICBbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG4gIFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAgICovXFxuICBcXG4gIFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG4gIFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAgICovXFxuICBcXG4gIFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIDo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgICBmb250OiBpbmhlcml0OyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qIEludGVyYWN0aXZlXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gICAqL1xcbiAgXFxuICBkZXRhaWxzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICBcXG4gIC8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgc3VtbWFyeSB7XFxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG4gIH1cXG4gIFxcbiAgLyogTWlzY1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICAgKi9cXG4gIFxcbiAgdGVtcGxhdGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAgICovXFxuICBcXG4gIFtoaWRkZW5dIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZy9rYXJhdmFuLWNhbWVsLWdyZWVuLWxvbmcucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2xlZnQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1nL3JpZ2h0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIHotaW5kZXg6IC0zO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMxMDY2NWVmZiwjMTA2NjVlODgsICMxMDY2NWUwMCk7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxufVxcclxcblxcclxcbiNoZXJvLXNlY3Rpb24ge1xcclxcbiAgbWluLXdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVyby1zZWN0aW9uOjphZnRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTQuNXZ3O1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgei1pbmRleDogMztcXHJcXG59XFxyXFxuXFxyXFxuI2hlcm8tc2VjdGlvbiB2aWRlbyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuI2hlcm8tb3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgei1pbmRleDogNTsgIFxcclxcbiAgaGVpZ2h0OiA1Ni4yNXZ3O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwIDEwdnc7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNoZXJvLW92ZXJsYXkgaDUsICNoZXJvLW92ZXJsYXkgcCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVyby1vdmVybGF5IGgxIHtcXHJcXG4gIGNvbG9yOiAjZWVlMjZmO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVyby1vdmVybGF5IGJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJiOTQ2MDA7XFxyXFxuICBib3JkZXItY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlcm8tb3ZlcmxheSBidXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1hY2NvdW50IHtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1iYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tYWNjb3VudCBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZWVlMjZmO1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tYWNjb3VudCBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWJhcnMge1xcclxcbiAgZm9udC1zaXplOjI0cHg7XFxyXFxuICBjb2xvcjogI2VlZTI2ZjtcXHJcXG59XFxyXFxuXFxyXFxuLmFjY291bnQgc3BhbiB7XFxyXFxuICBjb2xvcjogI2VlZTI2ZjtcXHJcXG59XFxyXFxuXFxyXFxuI215TGlua3Mge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgcGFkZGluZy10b3A6IDA7XFxyXFxufVxcclxcblxcclxcbiNteUxpbmtzIGEge1xcclxcbiAgY29sb3I6ICNlZWUyNmY7XFxyXFxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI215TGlua3MgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiNyaWJib24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA0N3Z3O1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGhlaWdodDogMTEuMjV2dztcXHJcXG4gIHotaW5kZXg6IDk7XFxyXFxuICBvYmplY3QtcG9zaXRpb246IGNvdmVyO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4jcmliYm9uIGltZyB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbi5pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1pbWcge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcXHJcXG4gIGNvbG9yOiNlZWUyNmY7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBoMyB7XFxyXFxuICBtYXJnaW4tdG9wOjA7XFxyXFxuICBtYXJnaW4tYm90dG9tOjEycHg7XFxyXFxuICBmb250LXdlaWdodDpib2xkO1xcclxcbiAgZm9udC1zaXplOjE4cHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB1bCB7XFxyXFxuICBwYWRkaW5nOjA7XFxyXFxuICBsaXN0LXN0eWxlOm5vbmU7XFxyXFxuICBsaW5lLWhlaWdodDoxLjY7XFxyXFxuICBmb250LXNpemU6MTZweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206MDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHVsIGEge1xcclxcbiAgY29sb3I6aW5oZXJpdDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xcclxcbiAgb3BhY2l0eTowLjg7XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNzIHtcXHJcXG4gIG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHVsIGE6aG92ZXIge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB1bCBhOmhvdmVyIHtcXHJcXG4gIG9wYWNpdHk6MTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5zb2NpYWwge1xcclxcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5mb290ZXIgLnNvY2lhbCA+IGEge1xcclxcbiAgbWFyZ2luLWxlZnQ6MThweDtcXHJcXG4gIG1hcmdpbi10b3A6MjJweDtcXHJcXG4gIGNvbG9yOmluaGVyaXQ7XFxyXFxuICBvcGFjaXR5OjE7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLnNvY2lhbCA+IGE6aG92ZXIge1xcclxcbiAgb3BhY2l0eTowLjY1O1xcclxcbn1cXHJcXG5cXHJcXG4uaGFwcGluZXNzIHtcXHJcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAjYTQzMzJiO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmNvcHlyaWdodCB7XFxyXFxuICBtYXJnaW4tdG9wOjE0cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOjA7XFxyXFxuICBmb250LXNpemU6MTNweDtcXHJcXG4gIG9wYWNpdHk6MC43O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWNjb3VudCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZHluYW1pYy1wYWdlIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgei1pbmRleDogLTI7XFxyXFxufVxcclxcblxcclxcbi5mYWItY29udGFpbmVyIHtcXHJcXG5cXHJcXG4gIHBvc2l0aW9uOmZpeGVkO1xcclxcbiAgXFxyXFxuICBib3R0b206MjVweDtcXHJcXG4gIFxcclxcbiAgcmlnaHQ6MjVweDtcXHJcXG4gIFxcclxcbiAgY3Vyc29yOnBvaW50ZXI7XFxyXFxuICBcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbmJ1dHRvbiB7XFxyXFxuXFxyXFxuICB3aWR0aDo1MHB4O1xcclxcbiAgXFxyXFxuICBoZWlnaHQ6NTBweDtcXHJcXG4gIFxcclxcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gIFxcclxcbiAgYmFja2dyb3VuZDogIzBhM2QzODtcXHJcXG4gIFxcclxcbiAgYm94LXNoYWRvdzogNXB4IDdweCA1cHggI2FhYWFhYTtcXHJcXG4gIFxcclxcbiAgfVxcclxcblxcclxcbiAgLmljb25idXR0b24gaSB7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgXFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAgXFxyXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxyXFxuICAgIFxcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIFxcclxcbiAgICBjb2xvcjojZWVlMjZmO1xcclxcblxcclxcbiAgICBmb250LXNpemU6IDI2cHg7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcblxcclxcbiAgLmZhYi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuXFxyXFxuICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzo1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYnRuLWxhYmVsIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mYWItY29udGFpbmVyOmhvdmVyID4gLmJ0bi1sYWJlbCB7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMnB4IDVweDtcXHJcXG4gICAgXFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gICAgXFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTNkMzg7XFxyXFxuICAgIFxcclxcbiAgICBjb2xvcjojZWVlMjZmO1xcclxcbiAgICBcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDdweCA1cHggI2FhYWFhYTtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuXFxyXFxuICAjV2VsY29tZVNlY3Rpb24gaDEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjV2VsY29tZVNlY3Rpb24gcCB7XFxyXFxuICAgIHdpZHRoOiA4MHZ3O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNXZWxjb21lU2VjdGlvbiBidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA2NjVlO1xcclxcbiAgICBib3JkZXItY29sb3I6ICMxMDY2NWU7XFxyXFxuICAgIGNvbG9yOiAjZWVlMjZmO1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI1dlbGNvbWVTZWN0aW9uIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTNkMzg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzBhM2QzODtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzIHtcXHJcXG4gICAgbWFyZ2luOiA1MHB4IGF1dG8gODBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sZWZ0LWltYWdlIHtcXHJcXG4gICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJpZ2h0LWltYWdlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5XaHlLYXJhdmFuTWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIG1hcmdpbjogMzBweCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgI1doeUthcmF2YW5TZWN0aW9uIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmtleXBvaW50LWltZyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc3RhdGlzdGljcyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDY2NWU7XFxyXFxuICAgIGNvbG9yOiAjZWVlMjZmO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnN0YXQge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDAgMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zdGF0OmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDY2O1xcclxcbiAgfVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcblxcclxcbiAgLmxvZ28ge1xcclxcbiAgICBvcmRlcjogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sb2dvIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxMjVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNteUxpbmtzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgb3JkZXI6IDQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbXlMaW5rcyBhIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUtYmFyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hY2NvdW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNXZWxjb21lU2VjdGlvbiBwIHtcXHJcXG4gICAgd2lkdGg6IDUwdnc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9ycyB7XFxyXFxuICAgIHdpZHRoOiA1MHZ3O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxlZnQtaW1hZ2Uge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgfVxcclxcbiBcXHJcXG4gIC5yaWdodC1pbWFnZSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLml0ZW0ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2hlcm8tb3ZlcmxheSBoNSwgcCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfSAgXFxyXFxuICBmb290ZXIgLnNvY2lhbCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcclxcblxcclxcbiAgLmxvZ28tYWNjb3VudCBhIHtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI215TGlua3MgYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sb2dvIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxNjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNoZXJvLW92ZXJsYXkgcCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmtleXBvaW50LWltZyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUVBQWlFO0VBQ2pFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1Asb0NBQW9DO0VBQ3BDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFVBQVU7RUFDVixlQUFlO0VBQ2YsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNs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aW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIHotaW5kZXg6IC0zO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMxMDY2NWVmZiwjMTA2NjVlODgsICMxMDY2NWUwMCk7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxufVxcclxcblxcclxcbiNoZXJvLXNlY3Rpb24ge1xcclxcbiAgbWluLXdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVyby1zZWN0aW9uOjphZnRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTQuNXZ3O1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgei1pbmRleDogMztcXHJcXG59XFxyXFxuXFxyXFxuI2hlcm8tc2VjdGlvbiB2aWRlbyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuI2hlcm8tb3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgei1pbmRleDogNTsgIFxcclxcbiAgaGVpZ2h0OiA1Ni4yNXZ3O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwIDEwdnc7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNoZXJvLW92ZXJsYXkgaDUsICNoZXJvLW92ZXJsYXkgcCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVyby1vdmVybGF5IGgxIHtcXHJcXG4gIGNvbG9yOiAjZWVlMjZmO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVyby1vdmVybGF5IGJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJiOTQ2MDA7XFxyXFxuICBib3JkZXItY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlcm8tb3ZlcmxheSBidXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1hY2NvdW50IHtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1iYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tYWNjb3VudCBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZWVlMjZmO1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tYWNjb3VudCBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWJhcnMge1xcclxcbiAgZm9udC1zaXplOjI0cHg7XFxyXFxuICBjb2xvcjogI2VlZTI2ZjtcXHJcXG59XFxyXFxuXFxyXFxuLmFjY291bnQgc3BhbiB7XFxyXFxuICBjb2xvcjogI2VlZTI2ZjtcXHJcXG59XFxyXFxuXFxyXFxuI215TGlua3Mge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgcGFkZGluZy10b3A6IDA7XFxyXFxufVxcclxcblxcclxcbiNteUxpbmtzIGEge1xcclxcbiAgY29sb3I6ICNlZWUyNmY7XFxyXFxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI215TGlua3MgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiNyaWJib24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA0N3Z3O1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGhlaWdodDogMTEuMjV2dztcXHJcXG4gIHotaW5kZXg6IDk7XFxyXFxuICBvYmplY3QtcG9zaXRpb246IGNvdmVyO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4jcmliYm9uIGltZyB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbi5pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1pbWcge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1nL2thcmF2YW4tY2FtZWwtZ3JlZW4tbG9uZy5wbmdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xcclxcbiAgY29sb3I6I2VlZTI2ZjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGgzIHtcXHJcXG4gIG1hcmdpbi10b3A6MDtcXHJcXG4gIG1hcmdpbi1ib3R0b206MTJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XFxyXFxuICBmb250LXNpemU6MThweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHVsIHtcXHJcXG4gIHBhZGRpbmc6MDtcXHJcXG4gIGxpc3Qtc3R5bGU6bm9uZTtcXHJcXG4gIGxpbmUtaGVpZ2h0OjEuNjtcXHJcXG4gIGZvbnQtc2l6ZToxNnB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTowO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgdWwgYSB7XFxyXFxuICBjb2xvcjppbmhlcml0O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XFxyXFxuICBvcGFjaXR5OjAuODtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHJlc3Mge1xcclxcbiAgb3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgdWwgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHVsIGE6aG92ZXIge1xcclxcbiAgb3BhY2l0eToxO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLnNvY2lhbCB7XFxyXFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbmZvb3RlciAuc29jaWFsID4gYSB7XFxyXFxuICBtYXJnaW4tbGVmdDoxOHB4O1xcclxcbiAgbWFyZ2luLXRvcDoyMnB4O1xcclxcbiAgY29sb3I6aW5oZXJpdDtcXHJcXG4gIG9wYWNpdHk6MTtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuc29jaWFsID4gYTpob3ZlciB7XFxyXFxuICBvcGFjaXR5OjAuNjU7XFxyXFxufVxcclxcblxcclxcbi5oYXBwaW5lc3Mge1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6ICNhNDMzMmI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuY29weXJpZ2h0IHtcXHJcXG4gIG1hcmdpbi10b3A6MTRweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206MDtcXHJcXG4gIGZvbnQtc2l6ZToxM3B4O1xcclxcbiAgb3BhY2l0eTowLjc7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hY2NvdW50IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5keW5hbWljLXBhZ2Uge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB6LWluZGV4OiAtMjtcXHJcXG59XFxyXFxuXFxyXFxuLmZhYi1jb250YWluZXIge1xcclxcblxcclxcbiAgcG9zaXRpb246Zml4ZWQ7XFxyXFxuICBcXHJcXG4gIGJvdHRvbToyNXB4O1xcclxcbiAgXFxyXFxuICByaWdodDoyNXB4O1xcclxcbiAgXFxyXFxuICBjdXJzb3I6cG9pbnRlcjtcXHJcXG4gIFxcclxcbiAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi5pY29uYnV0dG9uIHtcXHJcXG5cXHJcXG4gIHdpZHRoOjUwcHg7XFxyXFxuICBcXHJcXG4gIGhlaWdodDo1MHB4O1xcclxcbiAgXFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgXFxyXFxuICBiYWNrZ3JvdW5kOiAjMGEzZDM4O1xcclxcbiAgXFxyXFxuICBib3gtc2hhZG93OiA1cHggN3B4IDVweCAjYWFhYWFhO1xcclxcbiAgXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaWNvbmJ1dHRvbiBpIHtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBcXHJcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbiAgICBcXHJcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXHJcXG4gICAgXFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgXFxyXFxuICAgIGNvbG9yOiNlZWUyNmY7XFxyXFxuXFxyXFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmFiLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG5cXHJcXG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xcclxcblxcclxcbiAgICBwYWRkaW5nOjVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5idG4tbGFiZWwge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZhYi1jb250YWluZXI6aG92ZXIgPiAuYnRuLWxhYmVsIHtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAycHggNXB4O1xcclxcbiAgICBcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICBcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhM2QzODtcXHJcXG4gICAgXFxyXFxuICAgIGNvbG9yOiNlZWUyNmY7XFxyXFxuICAgIFxcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIFxcclxcbiAgICBib3gtc2hhZG93OiA1cHggN3B4IDVweCAjYWFhYWFhO1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNXZWxjb21lU2VjdGlvbiBoMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNXZWxjb21lU2VjdGlvbiBwIHtcXHJcXG4gICAgd2lkdGg6IDgwdnc7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgI1dlbGNvbWVTZWN0aW9uIGJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDY2NWU7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzEwNjY1ZTtcXHJcXG4gICAgY29sb3I6ICNlZWUyNmY7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjV2VsY29tZVNlY3Rpb24gYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhM2QzODtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjMGEzZDM4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnMge1xcclxcbiAgICBtYXJnaW46IDUwcHggYXV0byA4MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxlZnQtaW1hZ2Uge1xcclxcbiAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmlnaHQtaW1hZ2Uge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLldoeUthcmF2YW5NYWluIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgbWFyZ2luOiAzMHB4IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjV2h5S2FyYXZhblNlY3Rpb24ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAua2V5cG9pbnQtaW1nIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zdGF0aXN0aWNzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwNjY1ZTtcXHJcXG4gICAgY29sb3I6ICNlZWUyNmY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc3RhdCB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnN0YXQ6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNjY7XFxyXFxuICB9XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuXFxyXFxuICAubG9nbyB7XFxyXFxuICAgIG9yZGVyOiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxvZ28gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEyNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI215TGlua3Mge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBvcmRlcjogNDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNteUxpbmtzIGEge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudS1iYXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFjY291bnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI1dlbGNvbWVTZWN0aW9uIHAge1xcclxcbiAgICB3aWR0aDogNTB2dztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzIHtcXHJcXG4gICAgd2lkdGg6IDUwdnc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGVmdC1pbWFnZSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltZy9sZWZ0LnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICB9XFxyXFxuIFxcclxcbiAgLnJpZ2h0LWltYWdlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1nL3JpZ2h0LnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLml0ZW0ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2hlcm8tb3ZlcmxheSBoNSwgcCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfSAgXFxyXFxuICBmb290ZXIgLnNvY2lhbCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcclxcblxcclxcbiAgLmxvZ28tYWNjb3VudCBhIHtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI215TGlua3MgYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sb2dvIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxNjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNoZXJvLW92ZXJsYXkgcCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmtleXBvaW50LWltZyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwidmlkZW8vS2FyYXZhbkNvZmZlZUNha2VGb29kLm1wNFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ2aWRlby9oZWFydHMubXA0XCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi9ub3JtYWxpemUuY3NzJztcclxuaW1wb3J0IEthcmF2YW5Mb2dvIGZyb20gJy4uL2ltZy9LYXJhdmFuTmV3TG9nby5QTkcnO1xyXG5pbXBvcnQgS2FyYXZhbkdvbGRlbkxvZ28gZnJvbSAnLi4vaW1nL2thcmF2YW4tZ29sZGVuLWxvZ28ucG5nJztcclxuaW1wb3J0IEthcmF2YW5Hb2xkZW5Mb2dvT25seSBmcm9tICcuLi9pbWcva2FyYXZhbi1nb2xkZW4tbG9nby1vbmx5LnBuZyc7XHJcbmltcG9ydCBLYXJhdmFuR29sZGVuTW90b09ubHkgZnJvbSAnLi4vaW1nL2thcmF2YW4tZ29sZGVuLW1vdG8tb25seS5wbmcnO1xyXG5pbXBvcnQgS2FyYXZhbkdvbGRlblRvZ2V0aGVyIGZyb20gJy4uL2ltZy9rYXJhdmFuLWdvbGRlbi10b2dldGhlci5wbmcnO1xyXG5pbXBvcnQgS2FyYXZhbkNhbWVsQnJvd24gZnJvbSAnLi4vaW1nL2thcmF2YW4tY2FtZWwtYnJvd24ucG5nJztcclxuaW1wb3J0IEthcmF2YW5DYW1lbEJyb3duQ3VzdG9tIGZyb20gJy4uL2ltZy9rYXJhdmFuLWNhbWVsLWJyb3duLWN1c3RvbS5wbmcnO1xyXG5pbXBvcnQgS2FyYXZhbkNhbWVsR3JlZW5Mb25nIGZyb20gJy4uL2ltZy9rYXJhdmFuLWNhbWVsLWdyZWVuLWxvbmcucG5nJztcclxuaW1wb3J0IEhlcm9Ib21lIGZyb20gJy4uL2hlYXJ0cy5tcDQnO1xyXG5pbXBvcnQgUmliYm9uIGZyb20gJy4uL2ltZy9yaWJib24ucG5nJztcclxuaW1wb3J0IFJpYmJvbkxvbmcgZnJvbSAnLi4vaW1nL3JpYmJvbi1sb25nLnBuZyc7XHJcbmltcG9ydCBLYXJhdmFuUmliYm9uTG9uZyBmcm9tICcuLi9pbWcva2FyYXZhbi1yaWJib24tbG9uZy5qcGcnO1xyXG5pbXBvcnQgT3JpZ2luYWxWaWRlbyBmcm9tICcuLi9LYXJhdmFuQ29mZmVlQ2FrZUZvb2QubXA0JztcclxuaW1wb3J0IEZhY2Vib29rTG9nbyBmcm9tICcuLi9pbWcvZmFjZWJvb2stZ29sZGVuLXRyYW5zcGFyZW50LWxvZ28ucG5nJztcclxuaW1wb3J0IFR3aXR0ZXJMb2dvIGZyb20gJy4uL2ltZy90d2l0dGVyLWdvbGRlbi10cmFuc3BhcmVudC1sb2dvLnBuZyc7XHJcbmltcG9ydCBJbnN0YWdyYW1Mb2dvIGZyb20gJy4uL2ltZy9pbnN0YWdyYW0tZ29sZGVuLWxvZ28ucG5nJztcclxuaW1wb3J0IEthcmF2YW5DYW1lbEdyZWVuQ3VzdG9tIGZyb20gJy4uL2ltZy9rYXJhdmFuLWNhbWVsLWdyZWVuLWN1c3RvbS5wbmcnO1xyXG5pbXBvcnQgQ2hlZkhhdEljb24gZnJvbSAnLi4vaW1nL2NoZWYtaGF0LWljb24ucG5nJztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi4vbW9kdWxlcy9Ib21lUGFnZS5qcyc7XHJcblxyXG5jb25zdCB0YWIgPSAnJztcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgaWYod2luZG93LnNjcm9sbFkgPiAxMDApIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMTA1MTQ5XCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMwMDAwMDAwMFwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzEwNjY1ZWZmLCMxMDY2NWU4OCwgIzEwNjY1ZTAwKSc7XHJcbiAgICB9XHJcbiAgICAvL2NvbnNvbGUubG9nKHdpbmRvdy5zY3JvbGxZKTtcclxuICB9KTtcclxuXHJcbiAgaWYgKHRhYiA9PSAnJyB8fCB0YWIgPT0gJ0hvbWUnKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSG9tZScpLnN0eWxlLmNvbG9yID0gJyNmZmYnO1xyXG4gICAgY29uc3QgSG9tZVBhZ2UgPSBuZXcgSG9tZSgpO1xyXG4gICAgSG9tZVBhZ2Uud2VsY29tZVNlY3Rpb24oKTtcclxuICAgIEhvbWVQYWdlLndoeUthcmF2YW5TZWN0aW9uKCk7XHJcbiAgfVxyXG4gIFxyXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
