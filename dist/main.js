/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CustomMap/CustomMap.ts":
/*!************************************!*\
  !*** ./src/CustomMap/CustomMap.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomMap": () => (/* binding */ CustomMap)
/* harmony export */ });
/* harmony import */ var _Pair_Pair__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Pair/Pair */ "./src/Pair/Pair.ts");

var CustomMap = /** @class */ (function () {
    function CustomMap() {
        this.arr = [];
    }
    CustomMap.prototype.add = function (key, value) {
        if (this.has(key)) {
            console.warn("You already have pair with key ".concat(key));
        }
        else {
            var item = new _Pair_Pair__WEBPACK_IMPORTED_MODULE_0__.Pair(key, value);
            this.arr.push(item);
            console.log("Key: ".concat(key, ", Value: ").concat(value, " - pair successful created !"));
        }
    };
    CustomMap.prototype.remove = function (key) {
        if (this.has(key)) {
            console.log("(remove) Pair with key ".concat(key, " removed"));
            this.arr = this.arr.filter(function (item) { return item.key !== key; });
        }
        else {
            console.warn("(remove) Pair with key ".concat(key, " doesn't exists"));
        }
    };
    CustomMap.prototype.get = function (key) {
        try {
            return this.arr.find(function (item) { return item.key === key; }).value;
        }
        catch (ex) {
            console.warn("(get) Pair with key ".concat(key, " doesn't exists"));
        }
    };
    CustomMap.prototype.has = function (key) {
        return !!this.arr.find(function (item) { return item.key === key; });
    };
    return CustomMap;
}());



/***/ }),

/***/ "./src/Pair/Pair.ts":
/*!**************************!*\
  !*** ./src/Pair/Pair.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pair": () => (/* binding */ Pair)
/* harmony export */ });
var Pair = /** @class */ (function () {
    function Pair(key, value) {
        this.key = key;
        this.value = value;
    }
    return Pair;
}());



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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomMap_CustomMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomMap/CustomMap */ "./src/CustomMap/CustomMap.ts");

var moscow = {
    title: "Moscow",
    population: 12506468,
};
var minsk = {
    title: "Minsk",
    population: 2009786,
};
var russia = {
    capital: moscow,
    totalArea: 12506468,
};
var belarus = {
    capital: minsk,
    totalArea: 207600,
};
var myMap = new _CustomMap_CustomMap__WEBPACK_IMPORTED_MODULE_0__.CustomMap();
var myMap2 = new _CustomMap_CustomMap__WEBPACK_IMPORTED_MODULE_0__.CustomMap();
myMap.add(1, "first");
myMap.add(2, "second");
myMap.add(3, "third");
myMap.add(1, "first again");
myMap.remove(2);
console.log(myMap.get(1));
console.log(myMap.get(2));
console.log(myMap.get(3));
console.log(myMap.get(4));
console.log(myMap.has(2));
console.log("myMap FINISH", myMap);
console.log("____________________");
myMap2.add(russia.capital, russia);
myMap2.add(belarus.capital, belarus);
console.log(myMap2.get(moscow));
myMap2.remove(moscow);
console.log(myMap2.get(minsk));
console.log(myMap2.get(moscow));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9DdXN0b21NYXAvQ3VzdG9tTWFwLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9QYWlyL1BhaXIudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9