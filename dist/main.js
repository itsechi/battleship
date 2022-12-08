/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nbody {\n  padding: 5vh;\n  font-family: 'Montserrat Alternates', sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\nh1 {\n  font-size: 2.5rem;\n  color: #174A4B;\n  margin-bottom: 1rem; }\n\nh2 {\n  font-weight: 700;\n  font-size: 1.5rem;\n  color: #174A4B; }\n\nh3 {\n  font-weight: 500;\n  font-size: 1rem;\n  color: #174A4B;\n  letter-spacing: -0.01em;\n  font-style: italic;\n  text-align: center; }\n\n.game {\n  display: flex;\n  justify-content: center; }\n  @media (max-width: 55.625em) {\n    .game {\n      flex-direction: column; } }\n\n.gameboardContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 3rem; }\n  @media (max-width: 55.625em) {\n    .gameboardContainer {\n      margin: 0;\n      margin-top: 3rem; } }\n\n.gameboard {\n  display: grid;\n  grid-template-columns: repeat(10, 2rem);\n  grid-template-rows: repeat(10, 2rem);\n  gap: 1px;\n  user-select: none;\n  margin-top: 1rem; }\n\n.box {\n  outline: 1px solid rgba(32, 189, 198, 0.3);\n  height: 2rem; }\n\n.ship {\n  outline: 1px solid #20BDC6;\n  border: 1px solid #20BDC6;\n  height: 2rem;\n  cursor: move;\n  background: rgba(32, 189, 198, 0.5); }\n\n.ship--small {\n  outline: 1px solid #20BDC6;\n  border: 1px solid #20BDC6;\n  height: 1rem;\n  background: rgba(32, 189, 198, 0.5); }\n\n.shipsContainer {\n  display: flex;\n  gap: 1rem; }\n  .shipsContainer--small {\n    margin-top: 1.5rem;\n    max-width: 20rem;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center; }\n  @media (max-width: 55.625em) {\n    .shipsContainer {\n      max-width: 30rem;\n      flex-wrap: wrap;\n      justify-content: center;\n      align-items: center; } }\n\n.missed {\n  background-color: rgba(32, 189, 198, 0.2);\n  outline: 1px solid #20BDC6;\n  position: relative;\n  z-index: -1; }\n  .missed:before {\n    content: '';\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 50%;\n    width: 0.25rem;\n    height: 0.25rem;\n    background-color: #20BDC6; }\n\n.shot {\n  background-color: #ffc8bf;\n  outline: 1px solid #FE7965;\n  position: relative; }\n  .shot:before {\n    content: '';\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%) rotate(45deg);\n    border-radius: 20%;\n    width: 0.20rem;\n    height: 1rem;\n    background-color: #FE7965; }\n  .shot:after {\n    content: '';\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%) rotate(-45deg);\n    border-radius: 20%;\n    width: 0.20rem;\n    height: 1rem;\n    background-color: #FE7965; }\n\n.btn {\n  margin-top: 1rem;\n  background: #20BDC6;\n  border-radius: 1rem;\n  padding: 0.5rem 1.5rem;\n  font-weight: 700;\n  font-size: 1rem;\n  line-height: 23px;\n  border: none;\n  outline: none;\n  color: #FFFFFF;\n  cursor: pointer;\n  font-family: inherit; }\n  .btn:hover {\n    background-color: #12a4ac;\n    position: relative;\n    top: -2px; }\n  .btn--inactive {\n    cursor: default;\n    background: #AEAEAE; }\n    .btn--inactive:hover {\n      background: #AEAEAE;\n      top: 0; }\n\n.hidden {\n  display: none; }\n\n.animation {\n  animation: move .5s; }\n\n@keyframes move {\n  0% {\n    margin-left: -50%;\n    opacity: 0; }\n  100% {\n    margin-left: 0;\n    opacity: 1; } }\n", ""]);
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

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/js/UI.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/js/Player.js");



const App = () => {
  let player = (0,_Player__WEBPACK_IMPORTED_MODULE_1__.Player)();
  let ui = (0,_UI__WEBPACK_IMPORTED_MODULE_0__.UI)();
  let computer = (0,_Player__WEBPACK_IMPORTED_MODULE_1__.Player)();
  let gameStart = false;

  const createGameboard = (gameboardArr, user) => {
    gameboardArr.forEach(obj => ui.renderGameboard(obj, user));
  };

  const createShips = shipsArr => {
    shipsArr.forEach((ship, index) => {
      ui.renderShip(ship, index);
    });
    ui.setMessage(`Place the ships to start the game`);
  };

  const createSmallShips = (shipsArr, user) => {
    shipsArr.forEach((ship, index) => {
      ui.renderSmallShip(ship, index, user);
    });
  };

  const shipEvents = shipsArr => {
    const rotateShips = shipIndex => {
      const ship = shipsArr[shipIndex];
      ship.properties.isVertical = !ship.properties.isVertical;
    };

    const placeShip = (shipIndex, coords, draggableShip, target) => {
      const ship = shipsArr[shipIndex];
      if (player.placeShip(coords, ship, ship.properties.isVertical)) {
        ui.renderSuccessfulPlacement(draggableShip, target);
        checkStart(player.shipsArr);
      } else ui.renderUnsuccessfulPlacement(draggableShip);
    };

    ui.addShipHandlers(rotateShips);
    ui.addContainerHandlers(placeShip);
  };

  const checkStart = shipsArr => {
    if (shipsArr.every(ship => ship.properties.isPlaced)) {
      ui.activateBtn(startGame);
    }
  };

  const startGame = () => {
    gameStart = true;
    attackShip();
    ui.setMessage(`Sink all of the enemy's ships to win the game`);
    createSmallShips(player.shipsArr, 'player');
    createSmallShips(computer.shipsArr, 'computer');
    const playAgain = () => {
      location.reload();
    };
    ui.startGame(playAgain);
  };

  const attackShip = () => {
    const attack = (coords, target) => {
      if (!gameStart) return;
      const position = computer.gameboardArr.find(
        obj => obj.position === coords
      );
      position.hasShip
        ? ui.renderSuccesfulAttack(target)
        : ui.renderUnsuccesfulAttack(target);
      if (position.isShot) return;
      computer.receiveAttack(position.position);
      if (position.hasShip && position.hasShip.isSunk()) {
        markSunk(computer, 'computer', position);
        ui.markSmallShip(position.hasShip.properties.id, 'computer');
      }

      finishGame();
      if (!position.hasShip) computerAttack();
    };
    ui.renderAttack(attack);
  };

  const computerAttack = () => {
    const attack = (position, coords) => {
      player.receiveAttack(coords);
      position.hasShip
        ? ui.renderSuccesfulAttack(coords)
        : ui.renderUnsuccesfulAttack(coords);
      if (position.hasShip && position.hasShip.isSunk()) {
        markSunk(player, 'player', position);
        ui.markSmallShip(position.hasShip.properties.id, 'player');
      }
      ui.removeMissedClass();
      finishGame();
      if (position.hasShip) findValidSquare();
    };

    const findValidSquare = () => {
      if (!gameStart) return;
      const availablePositions = [];
      player.gameboardArr.map(
        obj => !obj.isShot && availablePositions.push(obj)
      );
      const coords = player.getCoords(availablePositions);
      const position = availablePositions.find(obj => obj.position === coords);
      position ? attack(position, coords) : findValidSquare();
    };
    findValidSquare();
  };

  const markSunk = (user, userStr, position) => {
    const adjacentPositions =
      position.hasShip.properties.adjacentPositions.flat();
    adjacentPositions.forEach(position => {
      if (!position) return;
      user.receiveAttack(position.position);
      ui.markAdjacentSquares(userStr, position.position);
    });
  };

  const finishGame = () => {
    if (
      computer.shipsArr.every(ship => ship.isSunk()) ||
      player.shipsArr.every(ship => ship.isSunk())
    ) {
      gameStart = false;
      const text = `${
        computer.shipsArr.every(ship => ship.isSunk()) ? 'Player' : 'Computer'
      } has won!`;
      ui.setMessage(text);
    }
  };

  createGameboard(player.gameboardArr, 'player');
  createGameboard(computer.gameboardArr, 'computer');
  createShips(player.shipsArr);
  shipEvents(player.shipsArr, player.gameboardArr);
  computer.randomPlacement();
};


/***/ }),

/***/ "./src/js/Gameboard.js":
/*!*****************************!*\
  !*** ./src/js/Gameboard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
const Gameboard = () => {
  const gameboardArr = [];

  const createGameboard = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const squares = numbers.flatMap(y => {
      return numbers.flatMap(x => {
        return {
          position: (x = y + '-' + x),
          hasShip: false,
          isShot: false,
          isValid: true,
        };
      });
    });
    gameboardArr.push(...squares);
  };

  const placeShip = (coords, ship) => {
    // find the position in the gameboard array
    const position = gameboardArr.find(obj => obj.position === coords);
    if (position.hasShip) return;
    const positionX = +position.position.split('-')[1];
    const positionY = +position.position.split('-')[0];

    // check if it's possible to place the ship
    const shipLength = +ship.properties.length;
    const width = 10;
    let shipPositions = [];
    for (let i = 0; i < shipLength; i++) {
      const condition = ship.properties.isVertical
        ? positionY + i + '-' + positionX
        : positionY + '-' + (positionX + i);
      const shipSquares = gameboardArr.find(obj => obj.position === condition);
      shipPositions.push(shipSquares);
    }

    if (
      (!ship.properties.isVertical &&
        positionX + (shipLength - 1) <= width &&
        shipPositions.every(pos => pos.isValid)) ||
      (ship.properties.isVertical &&
        positionY + (shipLength - 1) <= width &&
        shipPositions.every(pos => pos.isValid))
    ) {
      // if it's possible to place the ship, mark the ship squares
      const index = gameboardArr.indexOf(position);
      for (let i = 0; i < ship.properties.length; i++) {
        const position = ship.properties.isVertical
          ? gameboardArr[index + i * 10]
          : gameboardArr[index + i];
        const positionX = +position.position.split('-')[1];
        const positionY = +position.position.split('-')[0];
        position.hasShip = ship;
        ship.properties.isPlaced = true;

        // mark adjacent positions invalid
        const getPosition = (y, x) => {
          return gameboardArr.find(obj => obj.position === y + '-' + x);
        };
        const adjacentPositions = [
          getPosition(positionY - 1, positionX),
          getPosition(positionY + 1, positionX),
          getPosition(positionY - 1, positionX - 1),
          getPosition(positionY + 1, positionX + 1),
          getPosition(positionY - 1, positionX + 1),
          getPosition(positionY + 1, positionX - 1),
          getPosition(positionY, positionX - 1),
          getPosition(positionY, positionX + 1),
        ];
        ship.properties.adjacentPositions.push(adjacentPositions);
        adjacentPositions.map(obj => {
          if (obj) obj.isValid = false;
        });
      }
      return true;
    } else return false;
  };

  const receiveAttack = coords => {
    const position = gameboardArr.find(obj => obj.position === coords);
    position.hasShip && position.hasShip.hit();
    position.isShot = true;
    position.hasShip && position.hasShip.isSunk();
  };

  return {
    createGameboard,
    gameboardArr,
    placeShip,
    receiveAttack,
  };
};


/***/ }),

/***/ "./src/js/Player.js":
/*!**************************!*\
  !*** ./src/js/Player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/js/Gameboard.js");
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ "./src/js/Ship.js");



const Player = () => {
  const gameboard = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
  gameboard.createGameboard();
  const gameboardArr = gameboard.gameboardArr;
  const receiveAttack = gameboard.receiveAttack;
  const placeShip = gameboard.placeShip;
  const shipsArr = [
    (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(4, 0),
    (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(3, 1),
    (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(3, 2),
    (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(2, 3),
    (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(2, 4),
    (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(2, 5),
    (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(1, 6),
    (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(1, 7),
    (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(1, 8),
    (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(1, 9),
  ];

  const getCoords = arr => {
    const index = Math.floor(Math.random() * arr.length);
    const coords = arr[index].position;
    return coords;
  };

  const randomPlacement = () => {
    shipsArr.forEach(ship => {
      const findValidSquare = () => {
        let index = Math.floor(Math.random() * 100);
        let coords = gameboardArr[index].position;
        let options = [true, false];
        let isVertical = options[Math.floor(Math.random() * 2)];
        placeShip(coords, ship, (ship.properties.isVertical = isVertical))
          ? placeShip(coords, ship, (ship.properties.isVertical = isVertical))
          : findValidSquare();
      };
      findValidSquare();
    });
  };

  return {
    gameboardArr,
    getCoords,
    receiveAttack,
    shipsArr,
    placeShip,
    randomPlacement,
  };
};


/***/ }),

/***/ "./src/js/Ship.js":
/*!************************!*\
  !*** ./src/js/Ship.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
const Ship = (length, id) => {
  const properties = {
    length: length,
    id: id,
    hits: 0,
    isVertical: false,
    isPlaced: false,
    adjacentPositions: [],
  };

  const hit = () => {
    properties.hits++;
  };

  const isSunk = () => {
    return properties.length <= properties.hits ? true : false;
  };
  
  return { properties, hit, isSunk };
};


/***/ }),

/***/ "./src/js/UI.js":
/*!**********************!*\
  !*** ./src/js/UI.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UI": () => (/* binding */ UI)
/* harmony export */ });
const UI = () => {
  const playerContainer = document.getElementById('playerContainer');
  const computerContainer = document.getElementById('computerContainer');

  const renderGameboard = (obj, user) => {
    const square = document.createElement('div');
    square.classList.add('box');
    square.classList.add(`box-${user}`);
    square.dataset.id = obj.position;
    if (user === 'player') playerContainer.appendChild(square);
    if (user === 'computer') computerContainer.appendChild(square);
  };

  const renderShip = (ship, index) => {
    const shipDiv = document.createElement('div');
    shipDiv.classList.add('ship');
    shipDiv.setAttribute('draggable', true);
    shipDiv.setAttribute('data-length', ship.properties.length);
    shipDiv.setAttribute('data-index', index);
    shipDiv.setAttribute('data-vertical', false);
    shipDiv.style.width = `calc(${ship.properties.length * 2}rem + ${
      ship.properties.length - 1
    }px)`;
    document.getElementById('shipsContainer').appendChild(shipDiv);
  };

  const renderSmallShip = (ship, index, user) => {
    const shipDiv = document.createElement('div');
    shipDiv.classList.add('ship--small');
    shipDiv.classList.add(`ship--${user}`);
    shipDiv.setAttribute('draggable', true);
    shipDiv.setAttribute('data-length', ship.properties.length);
    shipDiv.setAttribute('data-index', index);
    shipDiv.setAttribute('data-vertical', false);
    shipDiv.style.width = `calc(${ship.properties.length * 1}rem + ${
      ship.properties.length - 1
    }px)`;
    document.getElementById(`${user}Ships`).appendChild(shipDiv);
  };

  const _dragAndDrop = ship => {
    ship.addEventListener('dragstart', e => {
      e.target.classList.add('dragging');
    });
    ship.addEventListener('dragend', e => {
      e.target.classList.remove('dragging');
    });
  };

  const _rotate = (ship, helper) => {
    ship.addEventListener('click', e => {
      if (ship.draggable === false) return;
      const shipIndex = e.target.dataset.index;
      helper(shipIndex);
      ship.setAttribute(
        'data-vertical',
        ship.dataset.vertical === 'false' ? 'true' : 'false'
      );
      if (ship.dataset.vertical === 'true') {
        e.target.style.width = '2rem';
        e.target.style.height = `calc(${ship.dataset.length * 2}rem + ${
          ship.dataset.length - 1
        }px)`;
      } else {
        e.target.style.height = '2rem';
        e.target.style.width = `calc(${ship.dataset.length * 2}rem + ${
          ship.dataset.length - 1
        }px)`;
      }
    });
  };

  const addShipHandlers = helper => {
    const ships = document.querySelectorAll('.ship');
    ships.forEach(ship => {
      _rotate(ship, helper);
      _dragAndDrop(ship);
    });
  };

  const addContainerHandlers = helper => {
    // add the highlight to the target square
    playerContainer.addEventListener('dragleave', e => {
      e.preventDefault();
      if (e.target.classList.contains('box')) {
        e.target.style.background = '';
      }
    });

    playerContainer.addEventListener('dragenter', e => {
      e.preventDefault();
      if (e.target.classList.contains('box')) {
        e.target.style.background = '#20BDC6';
      }
    });

    // make it possible to place the ship
    playerContainer.addEventListener('dragover', e => {
      e.preventDefault();
    });

    playerContainer.addEventListener('drop', e => {
      e.preventDefault();
      const target = e.target;
      if (!target.parentNode.firstElementChild.classList.contains('box'))
        return;
      const draggableShip = document.querySelector('.dragging');
      const shipIndex = draggableShip.dataset.index;
      const coords = e.target.dataset.id;
      target.style.background = '';
      helper(shipIndex, coords, draggableShip, target);
    });
  };

  const renderSuccessfulPlacement = (draggableShip, target) => {
    draggableShip.setAttribute('draggable', false);
    draggableShip.style.position = 'absolute';
    draggableShip.style.userSelect = 'none';
    draggableShip.style.cursor = 'default';
    draggableShip.style.zIndex = '-1';
    target.appendChild(draggableShip);
  };

  const renderUnsuccessfulPlacement = draggableShip => {
    draggableShip.style.position = '';
  };

  const renderAttack = helper => {
    computerContainer.addEventListener('click', e => {
      const target = e.target;
      if (!target.classList.contains('box')) return;
      const coords = e.target.dataset.id;
      helper(coords, target);
    });
  };

  const renderSuccesfulAttack = target => {
    if (typeof target === 'string')
      target = document.querySelector(`.box-player[data-id='${target}']`);
    target.classList.add('shot');
  };

  const renderUnsuccesfulAttack = target => {
    if (typeof target === 'string')
      target = document.querySelector(`.box-player[data-id='${target}']`);
    target.classList.add('missed');
  };

  const markAdjacentSquares = (user, position) => {
    const square = document.querySelector(
      `.box-${user}[data-id='${position}']`
    );
    square.classList.add('missed');
  };

  const removeMissedClass = () => {
    const squares = document.querySelectorAll('.box');
    squares.forEach(square => {
      if (
        square.classList.contains('shot') &&
        square.classList.contains('missed')
      )
        square.classList.remove('missed');
    });
  };

  const activateBtn = helper => {
    const btn = document.getElementById('btn');
    if (btn.classList.contains('btn--inactive'))
      btn.classList.remove('btn--inactive');
    btn.addEventListener('click', helper);
  };

  const startGame = helper => {
    const computerGameboard = document.getElementById('computerGameboard');
    computerGameboard.classList.remove('hidden');
    computerGameboard.classList.add('animation');
    const btn = document.getElementById('btn');
    btn.textContent = 'Play again';
    btn.addEventListener('click', helper);
  };

  const setMessage = text => {
    const message = document.getElementById('message');
    message.textContent = text;
  };

  const markSmallShip = (id, user) => {
    const ship = document.querySelector(`.ship--${user}[data-index='${id}']`);
    ship.style.backgroundColor = '#ffc8bf';
    ship.style.outline = '1px solid #FE7965';
    ship.style.border = '1px solid #FE7965';
  };

  return {
    renderGameboard,
    renderShip,
    addShipHandlers,
    addContainerHandlers,
    renderAttack,
    renderSuccesfulAttack,
    renderUnsuccesfulAttack,
    renderSuccessfulPlacement,
    renderUnsuccessfulPlacement,
    markAdjacentSquares,
    activateBtn,
    startGame,
    setMessage,
    renderSmallShip,
    markSmallShip,
    removeMissedClass,
  };
};


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
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ "./src/sass/main.scss");
/* harmony import */ var _js_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/App */ "./src/js/App.js");



const app = (0,_js_App__WEBPACK_IMPORTED_MODULE_1__.App)();
})();

/******/ })()
;