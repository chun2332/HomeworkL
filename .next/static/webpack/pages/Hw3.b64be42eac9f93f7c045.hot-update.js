"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Hw3",{

/***/ "./components/hw3/styles/style.ts":
/*!****************************************!*\
  !*** ./components/hw3/styles/style.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Body\": function() { return /* binding */ Body; },\n/* harmony export */   \"Table\": function() { return /* binding */ Table; }\n/* harmony export */ });\n/* harmony import */ var _Users_xiaozhujun_GithubProjects_Homework_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _templateObject, _templateObject2;\n\n\nvar Body = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject || (_templateObject = (0,_Users_xiaozhujun_GithubProjects_Homework_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n    @media (max-width: 900px) {\\n        overflow-x: scroll;\\n        overflow-y: visible;\\n        padding: 0;\\n    } \\n\"])));\nvar Table = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.table(_templateObject2 || (_templateObject2 = (0,_Users_xiaozhujun_GithubProjects_Homework_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n    border-collapse: collapse;  \\n    border-spacing: 0;\\n    border: 1px #eeecec solid;\\n    /* width: 100%; */\\n\\n    .carousel-btn {\\n        display: none;\\n    }\\n\\n    th, td {\\n        width: 12.5%;\\n        text-align: center;\\n        height: 50px;\\n        outline: 1px #dad8d8 solid;\\n        -ms-flex-wrap: nowrap;\\n        flex-wrap: nowrap;\\n        }\\n    th {\\n        color: #3d3b3b;\\n        padding: 0.8rem 0.5rem;\\n        background-color: #eeecec;\\n        }\\n    td {\\n        padding: 0;\\n        cursor: pointer;\\n\\n        &:hover{\\n            border: 3px solid #fe8400;\\n            background-color: #fff9e3;\\n        }\\n        \\n    }\\n\\n    /* \\u4F4E\\u50F9\\u6708\\u66C6 */\\n    .low-price-container {\\n        width: 100%;\\n        text-align: center;\\n    }\\n    .low-price {\\n        font-size: 1rem;\\n        text-align: right;\\n        background-color: #eeecec;\\n        color: #008cff;\\n        border-bottom: 2px solid white;\\n        &:hover{\\n            border: 1px solid white;\\n        }\\n    }\\n    .row1 > th {\\n        background-color: #eaedf2;\\n    }\\n    .Lowprice {\\n        width: 100%;\\n    }\\n   \\n    /* \\u56DE\\u7A0B & \\u53BB\\u7A0B */\\n    .ticket-type {\\n        display: -webkit-box;\\n        display: -ms-flexbox;\\n        display: flex;\\n        -webkit-box-orient: vertical;\\n        -webkit-box-direction: normal;\\n        -ms-flex-direction: column;\\n        flex-direction: column;\\n    }\\n    .ticket-back {\\n        display: -webkit-box;\\n        display: -ms-flexbox;\\n        display: flex;\\n        -webkit-box-orient: horizontal;\\n        -webkit-box-direction: normal;\\n        -ms-flex-direction: rows;\\n        flex-direction: rows;\\n        -webkit-box-pack: end;\\n        -ms-flex-pack: end;\\n        justify-content: end;\\n    }\\n    .ticket-coming {\\n        display: -webkit-box;\\n        display: -ms-flexbox;\\n        display: flex;\\n        -webkit-box-orient: horizontal;\\n        -webkit-box-direction: normal;\\n        -ms-flex-direction: rows;\\n        flex-direction: rows;\\n        -webkit-box-pack: start;\\n        -ms-flex-pack: start;\\n        justify-content: start;\\n    }\\n   \\n\\n    /* \\u6587\\u5B57\\u7070\\u8272 */\\n    .text-gray {\\n        font-weight: 900;\\n        color: #666;\\n    }\\n\\n    /* 2018 */\\n    .year {\\n        margin-top: 10px;\\n        margin-left: 20px;\\n        color: #24a07c;\\n    }\\n    .remove-padding {\\n       padding: 0 0.5rem;\\n    }\\n    .fix-padding {\\n        padding: 0.3rem 0.5rem;\\n    }\\n    .year-container {\\n        display: -webkit-box;\\n        display: -ms-flexbox;\\n        display: flex;\\n        -webkit-box-orient: vertical;\\n        -webkit-box-direction: normal;\\n        -ms-flex-direction: column;\\n        flex-direction: column;\\n        -webkit-box-align: center;\\n        -ms-flex-align: center;\\n        align-items: center;\\n    }\\n\\n    /*  \\u6700\\u4F4E\\u50F9\\u5340\\u584A */\\n    .container-sale {\\n        display: -webkit-box;\\n        display: -ms-flexbox;\\n        display: flex;\\n        -webkit-box-orient: vertical;\\n        -webkit-box-direction: normal;\\n        -ms-flex-direction: column;\\n        flex-direction: column;\\n        -webkit-box-pack: justify;\\n        -ms-flex-pack: justify;\\n        justify-content: space-between;\\n        padding-bottom: 1rem;\\n    }\\n    .container-sale-a {\\n        display: -webkit-box;\\n        display: -ms-flexbox;\\n        display: flex;\\n        -webkit-box-orient: vertical;\\n        -webkit-box-direction: normal;\\n        -ms-flex-direction: column;\\n        flex-direction: column;\\n        -webkit-box-align: start;\\n        -ms-flex-align: start;\\n        align-items: flex-start;\\n        white-space: nowrap;\\n        -webkit-box-pack: center;\\n        -ms-flex-pack: center;\\n        justify-content: center;\\n    }\\n    .trangle {\\n        display: inline-block;\\n        width: 0;\\n        height: 0;\\n        border-style: solid;\\n        border-width: 1.7rem 1.7rem 0 0;\\n        border-color: #fe8400 transparent;\\n    }\\n    .sale {\\n        color: #fe8400;\\n    }\\n\\n    /* \\u50F9\\u683C */\\n    .days-up {\\n        white-space: nowrap;\\n        word-spacing: 3px;\\n        font-weight: 700;\\n        color: #3d3b3b;\\n        }\\n        .days-up::after {\\n        font-weight: 900;\\n        content: ' \\u8D77';\\n        font-size: 0.7rem;\\n        color: #666;\\n    }\\n\\n    @media (max-width: 900px) {\\n        width: 200%;\\n        \\n        .carousel-btn {\\n            width: 100%;\\n            display: flex;\\n            justify-content: space-between;\\n            position: absolute;\\n            \\n        }\\n\\n        .prev-btn {\\n            position: absolute;\\n            left: 25vw;\\n            top: 35.1vh;\\n            cursor: pointer;\\n            border: none;\\n        }\\n\\n        .next-btn {\\n            position: absolute;\\n            right: 0;\\n            top: 35.1vh;\\n            cursor: pointer;\\n            border: none;\\n        }\\n\\n        .next-btn, .prev-btn {\\n            color: #fff;\\n            background-color: #ababab;\\n            line-height: 40px;\\n        }\\n        \\n         .first-col {\\n            position: -webkit-sticky;\\n            position: sticky;\\n            left: 0;\\n            top: auto;\\n            border-top-width: 1px;\\n            margin-top: -1px;\\n         }\\n    }\\n\\n    \\n\"])));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2h3My9zdHlsZXMvc3R5bGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQyxJQUFJLEdBQUdELDBEQUFILDJVQUFWO0FBUUEsSUFBTUcsS0FBSyxHQUFHSCw0REFBSCwrOEtBQVgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9odzMvc3R5bGVzL3N0eWxlLnRzP2Y1YWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgICAgIG92ZXJmbG93LXk6IHZpc2libGU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfSBcbmBcblxuZXhwb3J0IGNvbnN0IFRhYmxlID0gc3R5bGVkLnRhYmxlYFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7ICBcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICBib3JkZXI6IDFweCAjZWVlY2VjIHNvbGlkO1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuXG4gICAgLmNhcm91c2VsLWJ0biB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgdGgsIHRkIHtcbiAgICAgICAgd2lkdGg6IDEyLjUlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgb3V0bGluZTogMXB4ICNkYWQ4ZDggc29saWQ7XG4gICAgICAgIC1tcy1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICB0aCB7XG4gICAgICAgIGNvbG9yOiAjM2QzYjNiO1xuICAgICAgICBwYWRkaW5nOiAwLjhyZW0gMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlY2VjO1xuICAgICAgICB9XG4gICAgdGQge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZTg0MDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOWUzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qIOS9juWDueaciOabhiAqL1xuICAgIC5sb3ctcHJpY2UtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmxvdy1wcmljZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVjZWM7XG4gICAgICAgIGNvbG9yOiAjMDA4Y2ZmO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucm93MSA+IHRoIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWRmMjtcbiAgICB9XG4gICAgLkxvd3ByaWNlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgXG4gICAgLyog5Zue56iLICYg5Y6756iLICovXG4gICAgLnRpY2tldC10eXBlIHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIC50aWNrZXQtYmFjayB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xuICAgICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3dzO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93cztcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogZW5kO1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIH1cbiAgICAudGlja2V0LWNvbWluZyB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xuICAgICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3dzO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93cztcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIH1cbiAgIFxuXG4gICAgLyog5paH5a2X54Gw6ImyICovXG4gICAgLnRleHQtZ3JheSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIGNvbG9yOiAjNjY2O1xuICAgIH1cblxuICAgIC8qIDIwMTggKi9cbiAgICAueWVhciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzI0YTA3YztcbiAgICB9XG4gICAgLnJlbW92ZS1wYWRkaW5nIHtcbiAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICB9XG4gICAgLmZpeC1wYWRkaW5nIHtcbiAgICAgICAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcbiAgICB9XG4gICAgLnllYXItY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLyogIOacgOS9juWDueWNgOWhiiAqL1xuICAgIC5jb250YWluZXItc2FsZSB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIH1cbiAgICAuY29udGFpbmVyLXNhbGUtYSB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgLnRyYW5nbGUge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci13aWR0aDogMS43cmVtIDEuN3JlbSAwIDA7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZlODQwMCB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgLnNhbGUge1xuICAgICAgICBjb2xvcjogI2ZlODQwMDtcbiAgICB9XG5cbiAgICAvKiDlg7nmoLwgKi9cbiAgICAuZGF5cy11cCB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHdvcmQtc3BhY2luZzogM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogIzNkM2IzYjtcbiAgICAgICAgfVxuICAgICAgICAuZGF5cy11cDo6YWZ0ZXIge1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBjb250ZW50OiAnIOi1tyc7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICBjb2xvcjogIzY2NjtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAgICAgd2lkdGg6IDIwMCU7XG4gICAgICAgIFxuICAgICAgICAuY2Fyb3VzZWwtYnRuIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgLnByZXYtYnRuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDI1dnc7XG4gICAgICAgICAgICB0b3A6IDM1LjF2aDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uZXh0LWJ0biB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRvcDogMzUuMXZoO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5leHQtYnRuLCAucHJldi1idG4ge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWJhYmFiO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAuZmlyc3QtY29sIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICAgICAgIH1cbiAgICB9XG5cbiAgICBcbmAiXSwibmFtZXMiOlsic3R5bGVkIiwiQm9keSIsImRpdiIsIlRhYmxlIiwidGFibGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/hw3/styles/style.ts\n");

/***/ })

});