"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./utils/saveToIPFS.js":
/*!*****************************!*\
  !*** ./utils/saveToIPFS.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n// importing axios\n\n\n\n// require(\"dotenv\").config();\nvar saveToIPFS = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function(file) {\n        var formData, config, response;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    formData = new FormData();\n                    // add file to the form data\n                    formData.append(\"file\", file);\n                    config = {\n                        method: \"post\",\n                        url: \"https://api.web3.storage/upload\",\n                        headers: {\n                            Authorization: \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDUwN0Q0Q0E5YmU4ZjU1NjI0MzczRTdDNDI1NjlmNEMxM0ZDRTU1ZDMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjYwMjAxMTIwODUsIm5hbWUiOiJ5dENsb25lIn0.5iOcvyrpJiGMBqMCqC-Ngcxo91y0p_vs9ivEmuLiM0w\",\n                            \"Content-Type\": \"text/plain\"\n                        },\n                        data: formData\n                    };\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_0___default()(config)\n                    ];\n                case 1:\n                    response = _state.sent();\n                    // returning the CID\n                    return [\n                        2,\n                        response.data.cid\n                    ];\n            }\n        });\n    });\n    return function saveToIPFS(file) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (saveToIPFS);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9zYXZlVG9JUEZTLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0JBQWtCO0FBQ2xCOztBQUEwQjtBQUMxQiw4QkFBOEI7QUFFOUIsSUFBTUMsVUFBVTtlQUFHLDZGQUFPQyxJQUFJLEVBQUs7WUFFM0JDLFFBQVEsRUFJVkMsTUFBTSxFQVdKQyxRQUFROzs7O29CQWZSRixRQUFRLEdBQUcsSUFBSUcsUUFBUSxFQUFFLENBQUM7b0JBQ2hDLDRCQUE0QjtvQkFDNUJILFFBQVEsQ0FBQ0ksTUFBTSxDQUFDLE1BQU0sRUFBRUwsSUFBSSxDQUFDLENBQUM7b0JBRTFCRSxNQUFNLEdBQUc7d0JBQ1hJLE1BQU0sRUFBRSxNQUFNO3dCQUNkQyxHQUFHLEVBQUUsaUNBQWlDO3dCQUN0Q0MsT0FBTyxFQUFFOzRCQUNQQyxhQUFhLEVBQUcseVBBQXVQOzRCQUN2USxjQUFjLEVBQUUsWUFBWTt5QkFDN0I7d0JBQ0RDLElBQUksRUFBRVQsUUFBUTtxQkFDZixDQUFDO29CQUdlOzt3QkFBTUgsNENBQUssQ0FBQ0ksTUFBTSxDQUFDO3NCQUFBOztvQkFBOUJDLFFBQVEsR0FBRyxhQUFtQjtvQkFDcEMsb0JBQW9CO29CQUNwQjs7d0JBQU9BLFFBQVEsQ0FBQ08sSUFBSSxDQUFDQyxHQUFHO3NCQUFDOzs7SUFDM0IsQ0FBQztvQkFwQktaLFVBQVUsQ0FBVUMsSUFBSTs7O0dBb0I3QjtBQUVELCtEQUFlRCxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvc2F2ZVRvSVBGUy5qcz9mYjZhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydGluZyBheGlvc1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbi8vIHJlcXVpcmUoXCJkb3RlbnZcIikuY29uZmlnKCk7XHJcblxyXG5jb25zdCBzYXZlVG9JUEZTID0gYXN5bmMgKGZpbGUpID0+IHtcclxuICAvLyBjcmVhdGUgYSBuZXcgbXVsdGlwYXJ0IGZvcm0gZGF0YVxyXG4gIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgLy8gYWRkIGZpbGUgdG8gdGhlIGZvcm0gZGF0YVxyXG4gIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XHJcblxyXG4gIHZhciBjb25maWcgPSB7XHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vYXBpLndlYjMuc3RvcmFnZS91cGxvYWRcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciBleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKemRXSWlPaUprYVdRNlpYUm9jam93ZURVd04wUTBRMEU1WW1VNFpqVTFOakkwTXpjelJUZEROREkxTmpsbU5FTXhNMFpEUlRVMVpETWlMQ0pwYzNNaU9pSjNaV0l6TFhOMGIzSmhaMlVpTENKcFlYUWlPakUyTmpZd01qQXhNVEl3T0RVc0ltNWhiV1VpT2lKNWRFTnNiMjVsSW4wLjVpT2N2eXJwSmlHTUJxTUNxQy1OZ2N4bzkxeTBwX3ZzOWl2RW11TGlNMHdgLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcInRleHQvcGxhaW5cIixcclxuICAgIH0sXHJcbiAgICBkYXRhOiBmb3JtRGF0YSxcclxuICB9O1xyXG5cclxuICAvLyBQb3N0aW5nIHRoZSBmb3JtIGRhdGEgdG8gdGhlIElQRlMgQVBJXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyhjb25maWcpO1xyXG4gIC8vIHJldHVybmluZyB0aGUgQ0lEXHJcbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuY2lkO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2F2ZVRvSVBGUztcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwic2F2ZVRvSVBGUyIsImZpbGUiLCJmb3JtRGF0YSIsImNvbmZpZyIsInJlc3BvbnNlIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJjaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/saveToIPFS.js\n"));

/***/ })

});